import { useContext } from "react";
import { ColorModeContext, tokens } from "../context/theme";
import { useTheme } from "@mui/material/styles";

const NavStyles = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const sxObj = {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: colors.grey[100],
        textDecoration: 'none',
      }

    const sxObj2 = {
        ...sxObj, 
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' }
    }

      return {sxObj, sxObj2}
}

export default NavStyles;
