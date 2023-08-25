import {Paper, Typography, Grid, Box, Button} from '@mui/material';
import { tokens } from "../../context/theme";
import { useTheme } from "@emotion/react";
import useColorTheme from "../../hooks/FormStyles";
import HeroStyles from '../../hooks/HeroStyles';
import { useNavigate } from 'react-router-dom';

function Hero({post}) {
  const navigate = useNavigate();
  
  // all for theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorTheme = useColorTheme();
  const heroStyle = HeroStyles();
  

  const handleRedirect = () => {
    navigate('/properties');
  }

  return (
    // hero background Img
    <Paper sx={heroStyle.heroImg}>
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Grid container>
        <Grid item xs={12} md={6} sx={{ height: "100%" }}>
          {/* hero background for the title text */}
          <Box sx={heroStyle.heroTextBg}>
            {/* title */}
            <Typography component="h1" variant="h1" color="inherit" gutterBottom
              sx={{
                color: colors.grey[100],
                textAlign: 'left',
                fontSize: { xs: '2rem', lg: '4rem' },
              }}>
              {post.title}
            </Typography>
            {/* subtitle */}
            <Typography component="h2" variant="h3" color="inherit" paragraph sx={heroStyle.title}>
              {post.description}
            </Typography>
            <Box sx={{
              display: "flex",
              justifyContent: 'flex-end',
              mr: { xs: "0rem", md: "3rem" }
            }}>
              {/* catalog button */}
              <Button
                onClick={handleRedirect}
                variant="outlined"
                size='large'
                sx={{
                  ...colorTheme.submitButton,
                  width: { xs: "40%", md: "20%" }
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