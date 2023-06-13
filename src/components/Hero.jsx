import React from 'react'
import hero from '../images/hero-image.svg'
import hero_mobile from '../images/hero-mobile.svg'
import { styled, Typography} from '@mui/material'

const StyledHeroWrapper = styled('div')(({theme}) => ({
    padding: '0px 0px 122px 0px',
    display: 'flex',
    flexDirection: 'row',
    gap: '19px',
    justifyContent: 'space-between',
    [theme.breakpoints.down("lg")]: {
      gap: 'calc(20px - 10%)'
    },
    [theme.breakpoints.down("md")]: {
      gap: 'calc(20px - 10%)'
    },
    [theme.breakpoints.down(768)]: {
      flexDirection: 'column',
      justifyContent: 'center'
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      gap: '0px',
      padding: '0px',
      justifyContent: 'center'
    },
  })) 
  
  const StyledHeroTextWrap = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '172px 0px 0px',
    [theme.breakpoints.down("lg")]: {
      padding: '152px 0px 0px',
    },
    [theme.breakpoints.down("md")]: {
      padding: '80px 0px 0px',
    },
    [theme.breakpoints.down("sm")]: {
      padding: '0px 0px 70px 0px',
      textAlign: 'center',
      gap: '20px'
    },
  })) 
  
  const StyledHeading = styled(Typography)(({theme}) => ({
    padding: '4.5px 15px 0px 0px',
    fontSize: '64px',
    lineHeight: '84.59px',
    fontWeight: '700' ,
    letterSpacing: '-0.65px',
    width: '100%',
    maxWidth: '525px',
    [theme.breakpoints.down("lg")]: {
      maxWidth: 'calc(100% - 200px)',
      padding: '0px',
      fontSize: '54px',
      lineHeight: '64px',
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 'calc(100% - 400px)',
      fontSize: '44px',
      lineHeight: '54px',
    },
    [theme.breakpoints.down(768)]: {
      maxWidth: '226px',
      textAlign: 'center',
      alignSelf: 'center',
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: '226px',
      padding: '0px',
      fontSize: '32px',
      lineHeight: '48px',
    },
  })) 
  
  const StyledText = styled(Typography)(({theme}) => ({
    padding: '4.5px 0px',
    margin: '0px 0px 80px',
    width: '538px',
    fontSize: '20px',
    textTransform: 'uppercase',
    lineHeight: '52.7px',
    fontWeight: '400' ,
    letterSpacing: '5.37px',
    [theme.breakpoints.down("lg")]: {
      width: 'calc(100% - 100px)',
      padding: '0px',
      fontSize: '18px',
    },
    [theme.breakpoints.down("md")]: {
      width: 'calc(100% - 30px)',
      padding: '20px 0px',
      fontSize: '16px',
      lineHeight: '32.7px',
    },
    [theme.breakpoints.down(768)]: {
      maxWidth: '326px',
      textAlign: 'center',
      alignSelf: 'center',
    },
    [theme.breakpoints.down("sm")]: {
      width: '226px',
      alignSelf: 'center',
      padding: '0px',
      fontSize: '16px',
      lineHeight: '30.7px',
      margin: '0px',
      letterSpacing: '-0.3px',
  
    },
  }))
  
  const StyledHeroImage = styled('img')(({theme}) => ({
    width: '100%',
    [theme.breakpoints.down(1440)]: {
      maxWidth: '500px'
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: '450px'
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: '420px'
    },
    [theme.breakpoints.down(768)]: {
      alignSelf: 'center',
      maxWidth: '450px'
    },
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  }))

  const StyledHeroImagesm = styled('img')(({theme}) => ({
    display: 'none',
    [theme.breakpoints.down("sm")]: {
      display: 'block',
      width: '100%',
      maxWidth: '430px',
      maxHeight: '934px',
      alignSelf: 'center',
    },
  }))  

const Hero = () => {
  return (
    <StyledHeroWrapper>
        <StyledHeroTextWrap>
            <StyledHeading>
                Hero Component
            </StyledHeading>
            <StyledText>
                Lorem ipsum dolor sit amet consectetur.
            </StyledText>
        </StyledHeroTextWrap>
        <StyledHeroImage src={hero} alt='hero'/>
        <StyledHeroImagesm src={hero_mobile} alt='hero'/>
    </StyledHeroWrapper>
  )
}

export default Hero