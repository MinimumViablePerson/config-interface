import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'

const SignInButton = () => {
  const handleClick = () => {
    const baseUrl = 'https://github.com/login/oauth/authorize'
    const clientId = '6572d70cb198d755ee7b'
    const path = window.location.pathname
    const authorizeUrl = `${baseUrl}?client_id=${clientId}&scope=repo&state=${path}`

    window.location.href = authorizeUrl
  }

  return (
    <Button
      style={{ textDecoration: 'none', marginLeft: 25, width: 200 }}
      variant="contained"
      color="secondary"
      onClick={handleClick}
    >
      SIGN IN WITH GITHUB
    </Button>
  )
}

export default SignInButton
