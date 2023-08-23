import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { auth } from "../firebase/firebase";
import { tokens } from "../context/theme";
import { useTheme } from "@emotion/react";
import { sendPasswordResetEmail } from "firebase/auth";
import LogoSVG from "../assets/svg/Logo";
import useColorTheme from "../hooks/FormStyles";
import Copyright from "../components/global-components/copyright/Copyright";
import { AuthContext } from "../context/authContext";

const PasswordReset = ({ component: RouteComponent, ...rest }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [bgImageIdx, setBgImageIdx] = useState(0);
  const [imgArr, setImgArr] = useState([]);
  const [bgImgString, setBgImgString] = useState(
    "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg"
  );

  const navigate = useNavigate("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorTheme = useColorTheme();
  const { currentUser, setCurrentUser, setCurrentUserEmail } =
    useContext(AuthContext);

  const getRandIdx = () => {
    return Math.floor(Math.random() * imgArr.length);
  };

  useEffect(() => {
    // Define an asynchronous function to fetch images from the Pexels API
    const getImage = async (image = "house%20interiors", numImage = 15) => {
      // Construct the API URL with the provided image query and per_page parameter.
      const url = `https://api.pexels.com/v1/search?query=${image}&per_page=${numImage}`;
      // Make an HTTP GET request to the Pexels API.
      // try catch block so if the fetch method fails we can fix it
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            // Set the Authorization header with the Pexels API key from environment variables.
            Authorization: process.env.REACT_APP_PEXELS_API_KEY,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          setImgArr(data.photos);
        } else {
          console.error(await response.json());
        }
      } catch (error) {
        console.error(error);
      }
    };
    // Call the getImage function immediately when the component mounts.
    getImage();
    // The empty dependency array [] ensures this effect runs only on component mount and unmount.
  }, []);

  useEffect(() => {
    if (imgArr.length > 0) {
      //declaring the interval
      const interval = setInterval(() => {
        //once this times out do it again
        // new Idx for image (which is a random #)
        let newIdx = getRandIdx();
        // if thant new num == img we're already on, get a new num till its not the same
        while (newIdx === bgImageIdx) {
          newIdx = getRandIdx();
        }
        //set the new num
        setBgImageIdx(newIdx);
        setTimeout(() => {
          setBgImageIdx(newIdx);
          setBgImgString(imgArr[newIdx].src.original);
        }, 750);
      }, 5000);
      // clear interval so that we start a new interval and changes the background image
      return () => clearInterval(interval);
    } else {
      // console.log("No Images to cycle")
    }
  }, [bgImageIdx, imgArr]);

  const handleReset = (e) => {
    e.preventDefault();
    setEmailError(false);

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError(true);
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Check your email");
      })
      .catch((error) => {
        console.error("Password Reset Error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  useEffect(() => {
    currentUser ? navigate("/admin") : setShouldLoad(true);
  }, [currentUser]);

  if (shouldLoad) {
    return (
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bgImgString})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            background:
              theme.palette.mode === "dark"
                ? colors.primary[500]
                : colors.grey[1000],
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LogoSVG
              width={75}
              height={75}
              color={colors.blueAccent[500]}
              sx={{ m: 1 }}
            />
            <Typography component="h1" variant="h4">
              Reset Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleReset}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                InputProps={{ ...colorTheme.inputProps }}
                sx={{ ...colorTheme.inputStyling }}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Invalid email address" : ""}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ ...colorTheme.submitButton }}
              >
                Send Email
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <RouterLink to={"/login"} variant="body2">
                    Go back to Sign In
                  </RouterLink>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5, color: colors.blueAccent[500] }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
};

export default PasswordReset;
