import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

const Title = ({ user, signOut }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Config Interface Project</Typography>
          {user ? (
            <Typography style={{ marginLeft: 10 }} variant="body1">
              Welcome back {user.name}
              <SignOutButton signOut={signOut} />
            </Typography>
          ) : (
            <SignInButton />
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Title
