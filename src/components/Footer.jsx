import React from 'react'
import { Typography, styled} from '@mui/material';
import logo from '../images/footer-logo.svg'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledFooter = styled('footer')(({theme}) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
}))  

const Wrapper = styled('div')(({theme}) => ({
    padding: '61.45px 102px 0px',
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    [theme.breakpoints.down(1440)]: {
        padding: '60px 70px 0px', 
        gap: '12px'
    },
    [theme.breakpoints.down('md')]: {
        flexWrap: 'wrap',
        padding: '60px 50px 0px', 
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        padding: '77px 48px 122px', 
        alignItems: 'center',
    },
}))

const ImageContainer = styled('div')(({theme}) => ({
    padding: '11px 26px' ,
    [theme.breakpoints.down(1440)]: {
        padding: '0px', 
    },
    [theme.breakpoints.down('md')]: {
        height: '100%',
        maxHeight: '20px'
    },
    [theme.breakpoints.down("sm")]: {
        padding: '0px',
        display: 'flex',
        // maxHeight: '25px'
    },
}))

const ImageWrapper = styled('img')(({theme}) => ({
    padding: '2.5px 71px 63.5px 2px',
    width: '100%',
    [theme.breakpoints.down(1440)]: {
        padding: '0px',
    },
    [theme.breakpoints.down("md")]: {
        maxWidth: '50px'
    },
    [theme.breakpoints.down("sm")]: {
        padding: '0px',
        maxWidth: '78px',
    },
})) 

const StyledContacts = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 216px 60px 106px',
    color: theme.palette.text.main,
    [theme.breakpoints.down(1440)]: {
        padding: '0px 0px 60px',
    },
    [theme.breakpoints.down("md")]: {
        padding: '0px 0px 60px'
    },
    [theme.breakpoints.down("sm")]: {
        padding: '0px 0px 57px 0px',
    },
})) 

const StyledDescWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    opacity: '80%',
})) 

const StyledDesc = styled(Typography)(({theme}) => ({
    padding: '4.5px 0px',
    margin: '0px 0px 80px',
    maxWidth: '412px',
    width: '100%',
    fontSize: '24px',
    lineHeight: '29.05px',
    [theme.breakpoints.down(1440)]: {
        padding: '0px',
        margin: '0px 0px 30px',
        maxWidth: '380px',
        fontSize: '22px',
        lineHeight: '26.05px',
    },
    [theme.breakpoints.down("md")]: {
        padding: '0px',
        margin: '0px 0px 10px',
        maxWidth: '180px',
        fontSize: '16px',
        lineHeight: '20px',
    },
    [theme.breakpoints.down("sm")]: {
        padding: '0px 0px',
        margin: '50px 0px 56px',
        maxWidth: '334px',
        fontSize: '18px',
        lineHeight: '21.78px',
        textAlign: 'center'
    },
})) 

const StyledPhoneEmail = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 0px 30px',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    gap: '8px',
    [theme.breakpoints.down(1440)]: {
        gap: '6px'
    },
    [theme.breakpoints.down("md")]: {
        gap: '4px',
        padding: '0px 0px 10px'
    },
    [theme.breakpoints.down("sm")]: {
        alignItems: 'center',
        gap: '16px',
        padding: '0px 0px 30px'
    },
})) 

const StyledContent = styled(Typography)(({theme}) => ({
    fontSize: '24px',
    lineHeight: '29.05px',
    letterSpacing: '2px',
    [theme.breakpoints.down(1440)]: {
        fontSize: '20px',
        lineHeight: '24px',
    },
    [theme.breakpoints.down("md")]: {
        fontSize: '16px',
        lineHeight: '18px',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '18px',
        lineHeight: '21.78px',
    },
}))

const StyledSocials = styled('div')(({theme}) => ({
    gap: '27px',
    display: 'flex',
    [theme.breakpoints.down(1440)]: {
        gap: '20px'
    },
    [theme.breakpoints.down("md")]: {
        gap: '5px'
    },
    [theme.breakpoints.down("sm")]: {
        justifyContent: 'center',
        gap: '27px',
    },
}))

const StyledCompanyContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    color: theme.palette.text.main,
    paddingRight: '130px',
    [theme.breakpoints.down(1440)]: {
        padding: '0px',
        gap: '20px'
    },
    [theme.breakpoints.down("md")]: {
        gap: '15px'
    },
    [theme.breakpoints.down("sm")]: {
        padding: '0px 0px 70px 0px',
        gap: '15px'
    },
}))

const StyledExploreContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    color: theme.palette.text.main,
    [theme.breakpoints.down(1440)]: {
        gap: '20px'
    },
    [theme.breakpoints.down('md')]: {
        gap: '15px'
    },
    [theme.breakpoints.down("sm")]: {
        gap: '15px'
    },
}))

const CompanyName = styled(Typography)(({theme}) => ({
    fontWeight: '700',
    fontSize: '24px',
    [theme.breakpoints.down("md")]: {
        fontSize: '16px'
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '20px',
    },
}))

const CompanyLinks = styled('ul')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'underline',
    listStyle: 'none',
    fontSize: '16px',
    fontFamily: 'Inter',
    gap: '10px',
    [theme.breakpoints.down("md")]: {
        fontSize: '12px',
        gap: '2px'
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '16px',
        gap: '10px'
    },
}))

const ExploreHeading = styled(Typography)(({theme}) => ({
    fontWeight: '700',
    fontSize: '24px',
    [theme.breakpoints.down("md")]: {
        fontSize: '15px'
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '20px'
    },
}))

const ExploreLinks = styled('ul')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'underline',
    listStyle: 'none',
    fontSize: '16px',
    fontFamily: 'Inter',
    gap: '10px',
    [theme.breakpoints.down("md")]: {
        fontSize: '12px',
        gap: '2px'
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '16px',
        gap: '10px'
    },
}))

const Footer = () => {
  return (
    <StyledFooter>
        <Wrapper>
            <ImageContainer>
                <ImageWrapper src={logo} alt='company logo'/>
            </ImageContainer>
            <StyledContacts>
                <StyledDescWrapper>
                    <StyledDesc>
                        Lorem ipsum dolor sit amet consectetur. 
                        Sit ipsum ultricies in egestas ullamcorper adipiscing 
                        quis id dolor. Ac pulvinar aliquet et vestibulum.
                    </StyledDesc>
                    <StyledPhoneEmail>
                        <StyledContent>
                            (123) 123-1234
                        </StyledContent>
                        <StyledContent>
                            abc@gmail.com
                        </StyledContent>
                    </StyledPhoneEmail>
                </StyledDescWrapper>
                <StyledSocials>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                </StyledSocials>
            </StyledContacts>
            <StyledCompanyContainer>
                <CompanyName>
                    Company
                </CompanyName>
                <CompanyLinks>
                    <li>
                        Products
                    </li>
                    <li>
                        Portfolio
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Career
                    </li>
                    <li>
                        Contact Us
                    </li>
                </CompanyLinks>
            </StyledCompanyContainer>
            <StyledExploreContainer>
                <ExploreHeading>
                    Explore
                </ExploreHeading>
                <ExploreLinks>
                    <li>
                        Resources
                    </li>
                    <li>
                        Blogs
                    </li>
                </ExploreLinks>
            </StyledExploreContainer>
        </Wrapper>
    </StyledFooter>
  )
}

export default Footer