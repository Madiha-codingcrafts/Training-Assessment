import React from 'react'
import { Box, styled } from '@mui/material';
import FilterTable from '../components/FilterTable';
import Hero from '../components/Hero';
import TableWithPagination from '../components/TableWithPagination';

const StyledBox = styled(Box)(({theme}) => ({
  padding: '93px 100px 0px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down("lg")]: {
    padding: '80px 80px 0px',
  },
  [theme.breakpoints.down("md")]: {
    padding: '80px 40px 0px',
  },
  [theme.breakpoints.down("sm")]: {
    padding: '79px 0px 0px'
  },
}))

const ProductsPage = () => {
  return (
    <StyledBox>
      <Hero/>
      <TableWithPagination/>
    </StyledBox>
  )
}

export default ProductsPage