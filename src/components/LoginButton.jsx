import React from 'react'
import { Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const StyledButton = styled(Button) (({theme}) => ({
  ...theme.typography.loginbutton,
  color: theme.palette.secondary.main ,
  borderRadius: '8px',
  fontSize: '14px',
  height: '41px',
  padding: '12px',
  [theme.breakpoints.down("xl")]: {
    // fontSize: '16px',
    // height: '56px',
  },
  [theme.breakpoints.down("lg")]: {
    // fontSize: '14px',
    // height: '46px'
  },
  [theme.breakpoints.down("md")]: {
    // fontSize: '14px',
  },
  [theme.breakpoints.down("sm")]: {
    // fontSize: '16px',
  },
}))

export const LoginButton = () => {
  return (
    <Link
      component={Link} 
      to="/signup"
    >
      <StyledButton>
        Login / Signup
    </StyledButton>
    </Link>
  )
}
