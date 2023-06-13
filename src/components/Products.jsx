import React from 'react'
import { Button, Card, styled, Typography} from '@mui/material';
import camera from '../images/camera.svg'
import sneakers from '../images/sneakers.svg'
import watch from '../images/watch.svg'
import smartWatch from '../images/smart-watch.svg'

const ProductCardContainer = styled('div')(({theme}) =>({
    gap: '113px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0px 50px',
    [theme.breakpoints.down(1440)]: {
      gap: '67px',
      padding: '0px'
    },
    [theme.breakpoints.down('lg')]: {
      gap: '30px',
      padding: '0px'
    },
    [theme.breakpoints.down('md')]: {
      gap: '90px',
      padding: '0px 20px'
    },
    [theme.breakpoints.down(1047)]: {
      gap: '70px',
      padding: '0px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      gap: '70px',
      padding: '0px 20px'
    },
  }))
  
  const ProductCard = styled(Card)(({theme})=>({
    width: '100%',
    maxWidth: '200px',
    padding: '0px 0px 20px 0px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
  }))
  
  const StyledCardInfo = styled('div')(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    color: '#292929',
    fontFamily: 'Inter',
    fontWeight: '400',
    padding: '10px 0px 0px 15px',
  }))
  
  const StyledTitle = styled(Typography)(({theme}) =>({
    fontSize: "16px",
    lineHeight: '16px',
  }))
  
  const StyledPrice = styled(Typography)(({theme}) =>({
    fontSize: "12px",
    lineHeight: '12px',
  }))
  
  const StyledAddtocart = styled(Button)(({theme}) =>({
    width: '114px',
    fontSize: "12px",
    lineHeight: '12px',
    fontWeight: '400',
    textTransform: 'none',
    padding: '4px 13px',
    margin: '0px',
    borderRadius: '12px',
    border: '1px solid #021E4A',
    backgroundColor: theme.palette.buttonbgcolor,
  }))
  
  const cardContent = [
    { src: camera, alt: 'camera', title: 'CAM_01', price: '$250.00' },
    { src: sneakers, alt: 'sneakers', title: 'White Sneakers-01', price: '$150.00' },
    { src: watch, alt: 'watch', title: 'Watch-01', price: '$2000.00' },
    { src: smartWatch, alt: 'smart-watch', title: 'Smart Watch_01', price: '$1000.00' },
  ];

const Products = () => {
  return (
    <ProductCardContainer>
        {cardContent.map((content, i)=>(
            <ProductCard key={i}>
                <img src={content.src} alt={content.alt}/>
                <StyledCardInfo>
                <StyledTitle>
                    {content.title}
                </StyledTitle>
                <StyledPrice>
                    {content.price}
                </StyledPrice>
                <StyledAddtocart variant='rounded'>
                    Add to cart
                </StyledAddtocart>
                </StyledCardInfo>
            </ProductCard>
        ))}
    </ProductCardContainer>
  )
}

export default Products