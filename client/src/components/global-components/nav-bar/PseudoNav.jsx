import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../context/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoSVG from "../../../assets/svg/Logo";
import NavStyles from "../../../hooks/NavHooks"
import Login from "../../../views/Login";

const pages = ['Home', 'Properties', "About", "Contact"];

function PseudoNav() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navStyle = NavStyles();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navFunc = (page) => {
    if (page == "Home") {
      navigate(`/`);
      handleCloseNavMenu()
    } else {
      navigate(`/${page.toLowerCase()}`);
      handleCloseNavMenu()
    }
  }
  const login = () => {
    navigate('/login')
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: colors.blueAccent[500] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link 
          to={"/"} 
          sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            mr: 1, 
            alignItems: "center" }}
            style={{ textDecoration: "none" }}
          >
            <LogoSVG width={35} height={35} color={colors.grey[100]} />
            <Typography
              variant="h6"
              noWrap
              sx={navStyle.sxObj}
            >
              RBIV
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{color: colors.grey[100]}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom', horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top', horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              PaperProps={{ sx: { backgroundColor: colors.blueAccent[500] } }}
            >
              {/* this is the hamburger menu text */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`}  style={{textDecoration: 'none', textAlign: 'center', color: colors.grey[100]}}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2, alignItems: "center" }}>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={navStyle.sxObj2}
          >
            RBIV
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=> navFunc(page)}
              
                sx={{ my: 2, color: colors.grey[100], display: 'block' }}
              >
              {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <Box title="Open settings">
              <Button style={{ textDecoration: "none", color: colors.grey[100] }} onClick={()=> login()}>Login</Button>
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default PseudoNav;