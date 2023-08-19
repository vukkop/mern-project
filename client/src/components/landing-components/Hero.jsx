import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Button, Shadows, alpha } from '@mui/material';
import heroImg from "../../assets/img/heroImage.jpg";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import useColorTheme from "../../hooks/FormStyles";
import { useNavigate } from 'react-router-dom';

function Hero(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorTheme = useColorTheme();
  const { post } = props;
  const navigate = useNavigate();

  const handleRedirect = () => {
    //change this later to catalog
    navigate('/login');
  }

  return (
    <Paper
      sx={{
        mt: {xs: 10, lg: 15},
        mx: {xs: 0, sm: 5},
        boxShadow: "10px 10px 20px rgba(0,0,0,0.75)",
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        height: {xs: "80vh", sm: 600, lg: 800},
        borderRadius: {xs: 0, sm: 10},
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Grid container>
        <Grid item xs={12} md={6} sx={{height: "100%"}}>
          <Box
            sx={{
              borderBottomRightRadius: {xs: 0, md: 40},
              borderTopLeftRadius: {xs: 0, md: 40},
              ml: {xs: 0, md: 2},
              mt: {xs: "35%", md: "20%", lg: "20%"},
              display: 'flex',
              flexDirection: "column",
              justifyContent: 'center',
              position: 'relative',
              p: { xs: 3, md: 6, },
              pr: { md: 0 },
              backgroundColor: alpha(colors.primary[900], 0.90)
            }}
          >
            <Typography component="h1" variant="h1" color="inherit" gutterBottom
            sx={{
              color: colors.grey[100],
              textAlign: 'left',
              fontSize: {xs:'2rem', lg:'4rem'}, 
            }}>
              {post.title}
            </Typography>
            <Typography component="h2" variant="h3" color="inherit" paragraph
            sx={{
              color: colors.grey[100],
              pr: "2.3rem",
              fontWeight: 350,
              fontSize: {xs:'1.1rem', lg:'2rem'}, 
              textAlign: 'left'}}>
              {post.description}
            </Typography>
            <Box sx={{
              display: "flex",
              justifyContent: 'flex-end',
              mr: {xs:"0rem", md:"3rem" }
              }}>
              <Button
                onClick={handleRedirect}
                variant="outlined"
                size='large'
                //
                sx={{
                  ...colorTheme.submitButton,
                  width:{xs: "40%", md: "20%"}
                }}
              >
                Catalog
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Hero;