import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#47A7FF",
    },
    secondary: {
      main: '#656565',
    },
    text: {
      main: '#FFFFFF'
    },
    background: '#B6BCC2',
    buttonbgcolor: '#358DEB',
    signuptextcolor: '#1B92FF',
    badgecolor: '#3D3D3D'
  },
  typography: {
    fontFamily : 'Inter',
    tab: {
      textTransform: "none",
      fontWeight: '400',
      color: 'white'
    },
    loginbutton: {
      textTransform: 'none',
      background: 'white',
      fontWeight: '600'
    },
  },
    
  });
