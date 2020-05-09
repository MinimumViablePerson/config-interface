import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

const Title = ({ user, signOut }) => {
  return (
    <div>
      <AppBar style={{ paddingBottom: 15 }} position="static">
        <Toolbar>
          <Typography variant="h6">Config Interface Project</Typography>
        </Toolbar>
        {user ? (
          <Typography
            style={{ marginLeft: 25, display: 'flex', alignItems: 'center' }}
            variant="body1"
          >
            <img
              style={{
                height: 30,
                width: 30,
                borderRadius: '50%',
                marginRight: 10
              }}
              alt=""
              src={user.avatar_url}
            />
            {user.login}
            <SignOutButton signOut={signOut} />
          </Typography>
        ) : (
          <SignInButton />
        )}
      </AppBar>
    </div>
  )
}

export default Title
