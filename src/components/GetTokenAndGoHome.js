import { useHistory, useLocation } from 'react-router-dom'

import { getToken } from '../github'
import { useEffect } from 'react'

const GetTokenAndGoHome = ({ signIn, user }) => {
  const history = useHistory()
  const location = useLocation()

  const params = new URLSearchParams(location.search)
  const code = params.get('code')
  const path = params.get('state')
  const goHome = () => history.push(path)

  useEffect(() => {
    getToken(code)
      .then(signIn)
      .then(goHome)
  }, [])

  return null
}

export default GetTokenAndGoHome
