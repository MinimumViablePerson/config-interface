import React from 'react'

import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    const owner = e.target.owner.value
    const repo = e.target.repo.value
    const path = e.target.path.value

    history.push(`/config/${owner}/${repo}/${path}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <TextField name="owner" label="owner" variant="outlined" />
      <br />
      <br />
      <TextField name="repo" label="repo" variant="outlined" />
      <br />
      <br />
      <TextField name="path" label="path to json file" variant="outlined" />
      <br />
      <br />
      <button>OPEN CONFIG</button>
    </form>
  )
}

export default Home
