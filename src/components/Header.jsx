
import { List,ListItem, ListItemText, SwipeableDrawer, useMediaQuery, useTheme, Tab, styled, AppBar, Toolbar, useScrollTrigger, IconButton} from '@mui/material';
import React, {useState} from 'react';
import { LoginButton } from './LoginButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/header-logo.svg'
import logoSmall from '../images/logo-small.svg'

const StyledAppBar = styled(AppBar)(({theme}) => ({
    zIndex: theme.zIndex.modal,
    position: 'relative',
}))  

const Wrapper = styled('div')(({theme}) => ({
    padding: '18px 100px',
    justifyContent: 'space-between',
    display: 'flex',
    gap: 'auto',
    width: '100%',
    flexDirection: 'row',
    maxHeight: '96px',
    [theme.breakpoints.down("lg")]: {
        padding: '18px 80px',
    },
    [theme.breakpoints.down("md")]: {
        padding: '19px 60px',
    },
    [theme.breakpoints.down("sm")]: {
        padding: '35px 42px 36px 52px',
        maxHeight: '100px',
    },
})) 

const LogoImage = styled('img') (({theme}) => ({
    [theme.breakpoints.down("sm")]: {
        width: '58px'
    },
}))

const Container = styled('div') (({theme}) => ({
    gap: '40px',
    display: 'flex',
    flexDirection: 'row',
    padding: '9.5px 0px',
    [theme.breakpoints.down("lg")]: {
        gap:'25px',
    },
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {
        
    },
}))

const StyledDrawer = styled(SwipeableDrawer)(({theme}) => ({
    '.css-p2vm12-MuiPaper-root-MuiDrawer-paper' : {
        backgroundColor: theme.palette.buttonbgcolor,
        // width: '30%',
        [theme.breakpoints.down("sm")]: {
            // width: '40%'
        },
    }
})) 

const StyledTab = styled(Tab) (({theme}) => ({
    ...theme.typography.tab,
    fontSize: '14px',
    padding: 0,
    minHeight: 'auto',
    minWidth: 'auto',
    opacity: 'unset',
    overflow: 'unset',
    [theme.breakpoints.down("lg")]: {
        // fontSize: '14px',
    },
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {

    },
    
}))

const StyledTabs = styled('div') (({theme}) => ({
    gap: '40px',
    display: 'flex',
    margin: '12px 0px',
    textDecoration: 'underline',
    textDecorationColor: 'white',
    textUnderlineOffset: '4px',
    [theme.breakpoints.down("lg")]: {
        margin: '12px 0px',
        gap: '25px'
    },
    [theme.breakpoints.down("md")]: {
        // margin: '60px 0px 60px 0px',
        gap: '25px'
    },
    [theme.breakpoints.down("sm")]: {
        // margin: '60px 0px 60px 0px',
        gap: '25px'
    },
}))

const StyledDrawerItem = styled(ListItemText) (({theme}) => ({
    ...theme.typography.tab,
    fontFamily: 'Inter',
    color: 'white',
    textDecoration: 'underline',
    textDecorationColor: 'white',
    textUnderlineOffset: '4px',
}))

const StyledList = styled(List)(({theme}) => ({
    backgroundColor: theme.palette.buttonbgcolor,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '20px',
    [theme.breakpoints.down("md")]: {

    },
    [theme.breakpoints.down("sm")]: {
 
    },
})) 

const IconButtonContainer = styled(IconButton) (({theme}) => ({
    '&:hover':{
        backgroundColor: "transparent"
    },
    padding: 0,
}))

const StyledMenuIcon = styled(MenuIcon) (({theme}) => ({
    width: '40px',
    height: '25px',
    color: 'white',
    [theme.breakpoints.down("md")]: {
        width: '40px',
        height: '40px',
    },
    [theme.breakpoints.down("sm")]: {
        width: '20px',
        height: '20px',
    },
}))

const ToolbarMargin = styled(Toolbar) (({theme}) =>({
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("md")]: {
        marginBottom: '2em',
    },
    [theme.breakpoints.down("sm")]: {
        marginBottom: '2.7em',
    },
}))

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header() {

    const theme = useTheme()
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [value, setValue] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleChange = (e, value) => {
      setValue(value);
    };
    const tabs = (
        <>
            <StyledTabs value={value} onChange={handleChange}>
                <StyledTab label="Products" component={Link} to="/products" />
                <StyledTab label="Portfolio" component={Link} to="/portfolio"/>
                <StyledTab label="About Us" component={Link} to="/about"/>
                <StyledTab label="Career" component={Link} to="/career"/>
            </StyledTabs>
        </>
    )
    const drawer =(
        <>
            <StyledDrawer anchor="right" disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)}
                onOpen={()=>setOpenDrawer(true)} ModalProps={{
                    keepMounted: false,
                  }}
                >
                <ToolbarMargin/>    
                <StyledList disablePadding>
                    <ListItem onClick={()=>setOpenDrawer(false)} component={Link} to="/products"> 
                        <StyledDrawerItem disableTypography>Products</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} component={Link} to="/porfolio"> 
                        <StyledDrawerItem disableTypography>Portfolio</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} component={Link} to="/about"> 
                        <StyledDrawerItem disableTypography>About Us</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} component={Link} to="/career"> 
                        <StyledDrawerItem disableTypography>Career</StyledDrawerItem>
                    </ListItem>
                    <ListItem onClick={()=>setOpenDrawer(false)} divider component={Link} to="/donate"> 
                        <StyledDrawerItem disableTypography><LoginButton/></StyledDrawerItem>
                    </ListItem>
                </StyledList>
            </StyledDrawer>
            <IconButtonContainer onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
                <StyledMenuIcon/>
            </IconButtonContainer>
        </>
    )

    const imageUrl = window.innerWidth < 600 ? logoSmall : logo;

    return (
        <>     
        <ElevationScroll>
            <StyledAppBar>
                <Toolbar disableGutters >
                    <Wrapper>
                        <Link
                            component={Link} 
                            to="/"
                        >
                            <LogoImage src={imageUrl} alt='company logo'/>
                        </Link>
                        <Container>
                            {matches ? drawer : tabs}
                            {matches ? null : <LoginButton/>}
                        </Container>
                    </Wrapper>
                </Toolbar>
            </StyledAppBar>
        </ElevationScroll>
        </>
    )
}
