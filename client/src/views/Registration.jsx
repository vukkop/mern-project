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
import { createUserWithEmailAndPassword } from "firebase/auth";
import LogoSVG from "../assets/svg/Logo";
import useColorTheme from "../hooks/FormStyles";
import Copyright from "../components/global-components/copyright/Copyright";
import { AuthContext } from "../context/authContext";

const Registration = ({ component: RouteComponent, ...rest }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [bgImageIdx, setBgImageIdx] = useState(0);
  const [imgArr, setImgArr] = useState([]);
  const [bgImgString, setBgImgString] = useState(
    "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg"
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
    const getImage = async (image = "real%20estate", numImage = 15) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(false);

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError(true);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);

    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setCurrentUser(newUser.user.uid);
      localStorage.setItem("uid", newUser.user.uid);
      setCurrentUserEmail(newUser.user.email);
      localStorage.setItem("email", newUser.user.email);
      // console.log("registration successful", user);
      navigate("/admin");
    } catch (err) {
      console.error("Registration Error:", err);
    }
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit}>
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                InputProps={{ ...colorTheme.inputProps }}
                sx={{ ...colorTheme.inputStyling }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                value={confirmPassword}
                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                InputProps={{ ...colorTheme.inputProps }}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{
                  mt: 3,
                  mb: 2,
                  ...colorTheme.inputStyling,
                }}
                error={!passwordsMatch}
                helperText={!passwordsMatch && "Passwords do not match"}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ ...colorTheme.submitButton }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <RouterLink to={"/login"} variant="body2">
                    Already have an account? Sign in
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
export default Registration;
