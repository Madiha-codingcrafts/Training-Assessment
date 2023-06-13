import React from 'react'
import { Button, styled, Typography, TextField, FormControl, FormLabel} from '@mui/material';


const SignUpContainer = styled('div')(({theme}) =>({
    display: 'flex',
    flexDirection: 'column',
    padding: '152px 0px 246px 39px',
    gap: '72px',

    [theme.breakpoints.down('sm')]: {
      padding: '152px 40px 246px',
      gap: '20px',
    },
  }))
  
  const SignUp = styled(Typography)(({theme}) =>({
    color: theme.palette.signuptextcolor,
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '58.09px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '40px',
      lineHeight: '50.05px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '34px',
      lineHeight: '40.05px',
    },
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.text.main ,
      fontWeight: '700',
      fontSize: '24px',
      lineHeight: '29.05px',
    },
  }))

  const SignUpFormContainer = styled('div')(({theme}) =>({
    width: '100%',
    maxWidth: '429px',
    alignSelf: 'center',
    [theme.breakpoints.down('md')]: {
      maxWidth: '400px',   
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '350px',
    },
  }))
  
  const StyledForm = styled('form')(({theme}) =>({
    display: 'flex',
    flexDirection: 'column',
  }))
  
  const StyledInput = styled(TextField)(({theme}) =>({
    '& .css-6uusjz-MuiInputBase-root-MuiOutlinedInput-root':{
      lineHeight: '19px',
      fontSize: '16px',
      margin: '0px 0px 13px 0px',
    },
    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
      background: '#f4f4f4',
      border: '1px solid white',
      borderRadius: '4px',
      fontSize: '16px',
      padding: '25px 13px',
      height: 'auto',
      [theme.breakpoints.down('md')]: {
        padding: '20px 12px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '13px',
      },
    },
    '& .css-1nzzf8a-MuiFormHelperText-root':{
      margin: '0px 0px 29px 0px',
      fontStyle: 'italic',
      fontWeight: '300',
      color: '#6C6F71',
      [theme.breakpoints.down('md')]: {
        margin: '0px 0px 18px 0px',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '0px 0px 22px 0px',
      },
    },
  }))
  
  const StyledLabel = styled(FormLabel)(({theme}) =>({
      lineHeight: '29px',
      fontSize: '24px',
      padding: '0px 0px 13px 0px',
      color: '#222527',  
      fontWeight: '700',
      [theme.breakpoints.down('md')]: {
        lineHeight: '22px',
        fontSize: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        lineHeight: '19.36px',
        fontSize: '16px',
      },
  }))
  
  const StyledButton = styled(Button)(({theme}) =>({
    backgroundColor: theme.palette.signuptextcolor,
    borderRadius: '24px',
    fontSize: '16px',
    textTransform: 'none',
    color: 'white',
    padding: '16px 48px',
    maxWidth: '150px',
    maxHeight: '51px',
    marginTop: '10px'
  }))

const Signup = () => {
  return (
    <SignUpContainer>
        <SignUp>
            Sign Up  
        </SignUp> 
        <SignUpFormContainer>
            <StyledForm>
            <FormControl>
                <StyledLabel>Full Name</StyledLabel>
                <StyledInput
                type='texts'
                placeholder='Name'
                helperText="Enter your full name"
                />

                <StyledLabel>Email Address</StyledLabel>
                <StyledInput
                    type='email'
                    placeholder='Email Address'
                    helperText="Enter email address"
                />

                <StyledLabel>Password</StyledLabel>
                <StyledInput
                    type='password'
                    placeholder='Password'
                    helperText="Enter Password"
                />

                <StyledLabel>Re-enter Password</StyledLabel>
                <StyledInput
                    type='password'
                    placeholder='Re-enter Password'
                    helperText="Re-enter Password"
                />
                <StyledButton >Submit</StyledButton>
            </FormControl>
            </StyledForm>
        </SignUpFormContainer>
     </SignUpContainer>
  )
}

export default Signup