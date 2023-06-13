import React from 'react'
import { Box,styled } from '@mui/material';
import badgeImage from '../images/badge-image.svg'
import Signup from '../components/Signup';
import Products from '../components/Products';
import Hero from '../components/Hero';
import { Badge } from '@mui/material';

const StyledBox = styled(Box)(({theme}) => ({
  padding: '93px 100px 0px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down("lg")]: {
    padding: '80px 40px 0px',
  },
  [theme.breakpoints.down("md")]: {
    padding: '80px 20px 0px',
  },
  [theme.breakpoints.down("sm")]: {
    padding: '79px 0px 0px'
  },
}))


const MyImg = styled('img')(({theme})=> ({
  width: '100%',
  margin: '0px auto 122px',
  maxWidth: '396px',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '350px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '233px',
  }
}))

const ImgContainer = styled('div')(({theme})=> ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('lg')]: {
  },
  [theme.breakpoints.down('md')]: {
  },
  [theme.breakpoints.down('sm')]: {
  }
}))

const StyledBadge = styled(Badge)(({theme})=> ({
  '& .css-rm9szt-MuiBadge-badge':{
    backgroundColor: theme.palette.badgecolor,
    padding: '18px 8px',
    // top: '18px',
    // right: '290px',
    borderRadius: '11px',
    position: 'absolute'
  },
  [theme.breakpoints.down('lg')]: {
  },
  [theme.breakpoints.down('md')]: {
  },
  [theme.breakpoints.down('sm')]: {
  }
}))

const Home = () => {
  return (
    <StyledBox>
      <Hero/>
      <ImgContainer>
        {/* <StyledBadge badgeContent={'10%'} color="secondary" /> */}
        <MyImg src={badgeImage} alt="badge"/> 
      </ImgContainer>    
      <Products/> 
      <Signup/>
    </StyledBox>
  )
}

export default Home