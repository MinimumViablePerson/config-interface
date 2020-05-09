import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

import Checkbox from '../components/config/Checkbox'
import Select from '../components/config/Select'
import { getFile, updateFile, makeContentUrl } from '../github'

const fieldComponents = {
  boolean: Checkbox,
  select: Select
}

const updateConfig = (config, { payload: { field, value } }) => ({
  ...config,
  [field]: value
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        config: action.payload.content,
        sha: action.payload.sha,
        status: 'success'
      }
    case 'FILE_NOT_FOUND':
      return {
        config: null,
        sha: null,
        status: 'file not found'
      }
    case 'UPDATE_CONFIG':
      return {
        ...state,
        config: updateConfig(state.config, action)
      }
    case 'UPDATE_SHA':
      return {
        ...state,
        sha: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  config: null,
  sha: null,
  status: 'loading'
}

const Config = ({ user }) => {
  const { owner, repo, path } = useParams()
  const [{ config, sha, status }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getFile({ owner, repo, path })
      .then(data => dispatch({ type: 'SUCCESS', payload: data }))
      .catch(() => dispatch({ type: 'FILE_NOT_FOUND' }))
  }, [])

  const handleChange = (field, value) => {
    dispatch({ type: 'UPDATE_CONFIG', payload: { field, value } })
  }

  const handleSave = () => {
    const url = makeContentUrl({ owner, repo, path })
    updateFile({
      url,
      message: 'update config',
      content: config,
      sha
    }).then(data => {
      dispatch({ type: 'UPDATE_SHA', payload: data.content.sha })
    })
  }

  if (status === 'loading') return <h3>Loading...</h3>

  if (status === 'file not found') return <h3>File not found.</h3>

  return (
    <>
      <h2>
        Now {user ? 'editing' : 'viewing'}:{' '}
        <Link
          title="view source file"
          target="_blank"
          href={`https://github.com/${owner}/${repo}/blob/master/${path}`}
        >
          {owner}/{repo}/{path}
        </Link>
      </h2>
      {Object.keys(config).map((key, index) => {
        const Component = fieldComponents[typeof config[key]] // TODO improve type checking i.e. arrays
        return (
          <Component
            key={index}
            field={key}
            title={key.replace(/_/g, ' ')}
            value={config[key]}
            disabled={user ? false : true}
            handleChange={handleChange}
          />
        )
      })}
      <br />
      <Button
        disabled={user ? false : true}
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        {user ? 'SAVE CHANGES' : 'SIGN IN TO MAKE CHANGES'}
      </Button>
    </>
  )
}

export default Config
