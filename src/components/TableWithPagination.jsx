import React, { useState, useEffect } from 'react';
import productImage from '../images/image.svg'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  Avatar,
  Chip,
  styled, 
} from '@mui/material';

const StyledTableContainer = styled(TableContainer)(({theme}) => ({
  margin: '177px 0px 393px',
  padding: '0px',
  width: '100%',
  maxWidth: '1139px',
  alignSelf: 'center',
  [theme.breakpoints.down("lg")]: {
    maxWidth: '900px',
    padding: '0px'
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: '600px',
    padding: '0px'
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: '427px',
    padding: '0px',
    margin: '50px',
  },
}))

const StyledTable = styled(Table)(({theme}) => ({
  background: theme.palette.text.main,
  padding: '0px',
  maxHeight: '356px',
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {

  },
}))

const StyledTableRow = styled(TableRow)(({theme}) => ({
  display: 'block',
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {

  },
}))

const StyledTableHead = styled(TableHead)(({theme}) => ({
  display: 'block',
  background: '#E8F4FF',
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {

  },
}))

const StyledSelectionTableCell = styled(TableCell)(({theme}) => ({
  padding: '1px',
  borderBottom: 'none',
  background: '#E8F4FF',
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {

  },
}))

const StyledBox = styled(Box)(({theme}) => ({
  columnGap: '18px',
  
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {

  },
}))

const StyledTypography = styled(Typography)(({theme}) => ({
  fontSize: '14px',
  lineHeight: '21px',
  color: '#353535',
  overflowWrap: 'break-word',

  [theme.breakpoints.down("lg")]: {
  fontSize: '13px',
  },
  [theme.breakpoints.down("md")]: {
    fontSize: '12px'
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '8px'
  },
  [theme.breakpoints.down(325)]: {
    fontSize: '5px'
  },
}))

const StyledSelect = styled(Select)(({theme}) => ({
  
  '& .css-1f2xudn-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    fontSize: '14px',
    lineHeight: '21px',
    color: '#637381',
    padding: '6px 14px',
  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '12px',
  },
}))

const StyledChipTableCell = styled(TableCell)(({theme}) => ({
  padding: '0px',
  borderBottom: 'none',
  minWidth: '116px',
  [theme.breakpoints.down("lg")]: {
    minWidth: '110px',
  },
  [theme.breakpoints.down("md")]: {
    minWidth: '80px'
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: '80px',
  },
}))

const StyledCheckboxTableCell = styled(TableCell)(({theme}) => ({
  padding: '0px',
  borderBottom: 'none',
}))

const StyledProductTableCell = styled(TableCell)(({theme}) => ({
  padding: '16px 0px',
  borderBottom: 'none',
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    padding: '4px 0px'
  },
}))

const StyledItemCodeTableCell = styled(TableCell)(({theme}) => ({
  margin: '0px',
  padding: '0px 0px 0px 166px',
  borderBottom: 'none',
  [theme.breakpoints.down("lg")]: {
    padding: '0px 0px 0px 130px',
  },
  [theme.breakpoints.down("md")]: {
    padding: '0px 0px 0px 80px',

  },
  [theme.breakpoints.down("sm")]: {
    padding: '0px 0px 0px 17px',
  },
  [theme.breakpoints.down(325)]: {
    padding: '0px 0px 0px 5px',
  },
}))

const StyledIdTableCell = styled(TableCell)(({theme}) => ({
  padding: '0px',
  borderBottom: 'none',
}))

const StyledChip = styled(Chip)(({theme}) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: '10px',
  },
  [theme.breakpoints.down("md")]: {
    fontSize: '8px'
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '8px'
  },
}))

const StyledCheckbox = styled(Checkbox)(({theme}) => ({
  '& .css-i4bv87-MuiSvgIcon-root': {
    width: '12px',
    height: '12px',
  },
  '& .css-1jivg61-MuiButtonBase-root-MuiCheckbox-root': {
    padding: '0px',
  },
}))

const products = [
  {
    id: 1,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Active',
    itemCode: 5,
    productId: 'CAM-5',
  },
  {
    id: 2,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Acknowledged',
    itemCode: 9,
    productId: 'CAM-6',
  },
  {
    id: 3,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Pending',
    itemCode: 1,
    productId: 'CAM-7',
  },
  {
    id: 4,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Active',
    itemCode: 5,
    productId: 'CAM-5',
  },
  {
    id: 5,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Acknowledged',
    itemCode: 9,
    productId: 'CAM-6',
  },
  {
    id: 6,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Pending',
    itemCode: 1,
    productId: 'CAM-7',
  },
  {
    id: 7,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Active',
    itemCode: 5,
    productId: 'CAM-5',
  },
  {
    id: 8,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Acknowledged',
    itemCode: 9,
    productId: 'CAM-6',
  },
  {
    id: 9,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Pending',
    itemCode: 1,
    productId: 'CAM-7',
  },
  {
    id: 10,
    image: productImage,
    description: 'Lorem ipsum dolor sit amet consectetur.',
    status: 'Pending',
    itemCode: 1,
    productId: 'CAM-7',
  },
];

const TableWithPagination = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [allRowsSelected, setAllRowsSelected] = useState(false);
  const [mainCheckboxState, setMainCheckboxState] = useState('none');
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    if (selectedRows.length === 0) {
      setMainCheckboxState('none');
    } else if (selectedRows.length === products.length) {
      setMainCheckboxState('all');
    } else {
      setMainCheckboxState('partial');
    }
  }, [selectedRows]);

  const handleRowSelect = (event, id) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 3));
    setPage(0);
  };

  const handleSelectAllRows = (event) => {
    if (event.target.checked) {
      const allRowIds = products.map((product) => product.id);
      setSelectedRows(allRowIds);
      setAllRowsSelected(true);
      setMainCheckboxState('all');
    } else {
      setSelectedRows([]);
      setAllRowsSelected(false);
      setMainCheckboxState('none');
    }
  };

  const handleRowCheckboxChange = (event) => {
    if (event.target.checked) {
      setMainCheckboxState('partial');
    } else {
      setMainCheckboxState('none');
    }
  };

  const handleSelectOption = (option) => {
    console.log('Selected option:', option);
  };

  return (
      <StyledTableContainer>
        <TableContainer>
          <StyledTable>
            <StyledTableHead>
              <StyledTableRow>
                <StyledCheckboxTableCell>
                  {/* Checkbox for selecting all rows */}
                  <StyledCheckbox
                    checked={mainCheckboxState === 'all'}
                    indeterminate={mainCheckboxState === 'partial'}
                    onChange={handleSelectAllRows}
                  />
                </StyledCheckboxTableCell>
                <StyledSelectionTableCell>
                  <StyledBox display="flex" alignItems="center">
                    {selectedRows.length > 0 && (
                      <StyledTypography component="span">
                        {selectedRows.length} Item{selectedRows.length > 1 && 's'} Selected
                      </StyledTypography>
                    )}
                    {/* Dropdown for options */}
                    <FormControl>
                      <StyledSelect
                        value=""
                        onChange={(e) => handleSelectOption(e.target.value)}
                        displayEmpty
                      >
                        <MenuItem value="" disabled>
                          Select Action
                        </MenuItem>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </StyledBox>
                </StyledSelectionTableCell>
              </StyledTableRow>
            </StyledTableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : products
              ).map((product) => (
                <StyledTableRow key={product.id}>
                  <StyledCheckboxTableCell>
                    {/* Checkbox for selecting individual row */}
                    <StyledCheckbox
                      checked={selectedRows.includes(product.id)}
                      onChange={(e) => handleRowSelect(e, product.id)}
                      onClick={handleRowCheckboxChange}
                    />
                  </StyledCheckboxTableCell>
                  <StyledProductTableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={product.image}
                        alt={product.description}
                        sx={{ width: 75, height: 75, borderRadius: '5px', marginRight: 1 }}
                      />
                      <StyledTypography sx={{
                        width: {lg:'127px', md: '120px', sm: '90px', xs:'60px'} ,
                        mr: {lg:'175px', md: '50px',sm: '30px',xs: '0px',} ,
                      }}
                      >
                        {product.description}
                      </StyledTypography>
                    </Box>
                  </StyledProductTableCell>
                  <StyledChipTableCell>
                    <StyledChip 
                      label={product.status}
                    />
                  </StyledChipTableCell>
                  <StyledItemCodeTableCell>
                    <StyledTypography sx={{
                      width: {lg:'73px', md: '55px', sm: '30px',xs:'10px'},
                      mr: {lg:'116px', md: '70px', sm: '50px',xs: '30px'},
                  }} 
                    >
                      {product.itemCode}
                    </StyledTypography>
                  </StyledItemCodeTableCell>
                  <StyledIdTableCell>
                    <StyledTypography 
                    sx={{
                      textAlign: 'center',
                      width: {lg:'80px', md: '50px', sm: '50px'},
                    }}
                    >
                      {product.productId}</StyledTypography>
                  </StyledIdTableCell>
                </StyledTableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 100 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </StyledTableContainer>
  );
};

export default TableWithPagination;
