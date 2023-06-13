import React from 'react'
import Header from '../Header'
import { styled } from '@mui/material'
import Footer from '../Footer'

const BlueWrapper = styled('div') (({theme})=>({
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main
})) 

const ChildrenWrapper = styled('div') (({theme})=>({
  backgroundColor: theme.palette.background,
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

const WidthContainer = styled('div') (({theme})=>({
  width: '100%',
  height: '100%',
  maxWidth: '1440px',
}))

const Layout = ({children}) => {
  return (
    <>
      <BlueWrapper>
        <WidthContainer>
          <Header/>
        </WidthContainer>
      </BlueWrapper>

      <ChildrenWrapper>
        <WidthContainer>
          {children}
        </WidthContainer>
      </ChildrenWrapper>

      <BlueWrapper>
        <WidthContainer>
          <Footer/>
        </WidthContainer>
      </BlueWrapper>
    </>
  )
}

export default Layout 