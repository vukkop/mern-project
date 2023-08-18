import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { useTheme } from "@mui/material/styles";

const useColorTheme = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const inputLabelProps = {
    style: {
      color: colors.blueAccent[200],
    },
  };

  const inputProps = {
    style: {
      color: colors.grey[100],
    },
  };

  const inputStyling = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused": {
        "& fieldset": {
          borderColor: colors.blueAccent[100],
        },
      },
    },
  };

  const submitButton = {
    backgroundColor: colors.blueAccent[500],
    "&:hover": {
      backgroundColor: colors.blueAccent[800],
    },
  };

  return { inputLabelProps, inputProps, inputStyling, submitButton };
};

export default useColorTheme;
