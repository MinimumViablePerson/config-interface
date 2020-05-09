import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'

const SignInButton = ({ signOut }) => {
  return (
    <Button
      style={{ textDecoration: 'none', marginLeft: 10 }}
      variant="contained"
      color="secondary"
      onClick={signOut}
    >
      SIGN OUT
    </Button>
  )
}

export default SignInButton
