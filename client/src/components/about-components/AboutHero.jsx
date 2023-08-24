import React from 'react'
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { tokens } from '../../context/theme';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import useColorTheme from '../../hooks/FormStyles';
import bgImg from "../../assets/img/Newest.jpg";
import { alpha } from "@mui/material"

const AboutHero = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const colorTheme = useColorTheme();

    const item =
    {
        mt: { xs: 5, lg: 10 },
        mx: { xs: 0, sm: 5 },
        boxShadow: "10px 10px 20px rgba(0,0,0,0.75)",
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        height: { xs: "80vh", sm: 900, lg: 900 },
        borderRadius: { xs: 0, sm: 10 },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${bgImg})`,
    }
    const itemText ={
            borderBottomRightRadius: {xs: 0, md: 40},
            borderTopLeftRadius: {xs: 0, md: 40},
            ml: {xs: 0, md: 2},
            mt: {xs: "35%", md: "20%", lg: "13%"},
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            p: { xs: 3, md: 6, },
            pr: { md: 0 },
            backgroundColor: alpha(colors.primary[900], 0.90)
    }

    const handleRedirect = () => {
        navigate('/contact')
    }

    return (
        <div>
            <Paper elevation={3} sx={item} >
                {<img style={{ display: 'none' }} src={item.imgUrl} />}
                <Container maxWidth="md" sx={{ paddingTop: 1}}>
                    <Box display={'flex'} justifyContent={'center'} sx={itemText} mb={20} >
                        <Typography component="h1" variant="h1" color="inherit" gutterBottom
                            sx={{
                                color: colors.grey[100],
                                
                                fontSize: { xs: '2rem', lg: '4rem' },
                                textDecoration: 'underline'
                            }}>
                            About Us
                        </Typography>
                        <Typography sx={{ mt: 3, color: colors.grey[100], px: 5 }} variant="h3">
                            At RBIV, we are your trusted partners in the world of real estate. With a passion for connecting people to their ideal properties, we have been proudly serving the community for 20 years. Our team of experienced professionals brings a wealth of knowledge and a commitment to excellence to every transaction. Whether you're buying, selling, or investing, we understand that real estate decisions are pivotal in shaping your future. That's why we're dedicated to providing personalized solutions tailored to your unique needs. From first-time homebuyers to seasoned investors, our goal is to make your real estate journey smooth, informed, and successful. We're not just in the business of property; we're in the business of helping you find your place in the world. Welcome to RBIV, where your real estate dreams become reality.
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            justifyContent: 'flex-end',
                            mr: { xs: "0rem", md: "3rem" },
                            mt: 5
                        }}>
                            <Button
                                onClick={handleRedirect}
                                variant="outlined"
                                size='large'
                                sx={{
                                    ...colorTheme.submitButton,
                                    width: { xs: "40%", md: "20%" }
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Paper>
        </div>
    )
}

export default AboutHero
