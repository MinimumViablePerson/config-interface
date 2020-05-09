import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Route } from 'react-router-dom'

import Title from './components/Title'
import GetTokenAndGoHome from './components/GetTokenAndGoHome'

import Home from './pages/Home'
import Config from './pages/Config'
import { getUser } from './github'

const App = () => {
  const [user, setUser] = useState(null)

  const signIn = (token = localStorage.token) => {
    if (!token) return
    localStorage.token = token
    getUser().then(setUser)
  }

  const signOut = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  useEffect(() => {
    if (localStorage.token) signIn()
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Title user={user} signOut={signOut} />
      <div style={{ padding: 10 }}>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/auth">
          <GetTokenAndGoHome signIn={signIn} user={user} />
        </Route>

        <Route exact path="/config/:owner/:repo/:path">
          <Config user={user} />
        </Route>
      </div>
    </React.Fragment>
  )
}

export default App
