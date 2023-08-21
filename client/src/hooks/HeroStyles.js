import { alpha } from "@mui/material"
import { useContext } from "react";
import { ColorModeContext, tokens } from "../context/theme";
import { useTheme } from "@mui/material/styles";
import bgImg from "../assets/img/heroImage.jpg";

const HeroStyles = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const heroImg = {
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
        backgroundImage: `url(${bgImg})`,
    }

    const heroTextBg = {
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
    }
    
    const title = {
        color: colors.grey[100],
        pr: "2.3rem",
        fontWeight: 350,
        fontSize: {xs:'1.1rem', lg:'2rem'}, 
        textAlign: 'left'
    }

    return { title, heroTextBg, heroImg }
}

export default HeroStyles