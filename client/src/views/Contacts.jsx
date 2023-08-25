import React, { useState, useRef } from "react";
import { alpha } from "@mui/material"
import TextField from '@mui/material/TextField';
import { FormControl, Box, Grid, Typography, Paper } from '@mui/material';
import Button from '@mui/material/Button'
import useColorTheme from "../hooks/FormStyles"
import emailjs from "@emailjs/browser";
import bgImage from "../assets/img/cityImage.jpg";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../context/theme";
import { useTheme } from "@mui/material/styles";
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const colorTheme = useColorTheme()
  const form = useRef()

  const sendEmail = (e) => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text, "Status is 200");
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail(e)
    setContactForm({
      name: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    })
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setContactForm((prev) =>
      ({ ...prev, [name]: value }))
  }

  return (
    <Grid container component="main" sx={{ height: "75vh" }}>
      <Grid container justifyContent={"center"} sx={{ borderRadius: 10 }}>
        <Grid item
          sx={{
            mt: {xs: 2, sm: 5, md: 15},
            height: "80%",
            width: "97vw",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${bgImage})`
          }}>
          <Grid sx={{
            backgroundColor: alpha(colors.blueAccent[500], 0.82),
            width: "100%",
            height: "100%",
            position: 'relative',
          }}>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(0px)',
                boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.8)",
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                position: 'relative',
                zIndex: 3,
                p: 2, // Padding
              }}
            >
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 1, md: 5},
                px: {md: 10, lg: 25, xl: 45 }
              }}>
                <Box sx={{ position: "relative" }}>
                  <Typography variant="h1" component="h1" fontWeight="bold" sx={{fontSize: {xs: "2rem",sm:"4rem"}}}>
                    Get In Touch
                  </Typography>
                  <Typography variant="h3" component="h3"
                    sx={{
                      mt: 3,
                      display: {xs: "none", md: "block"}
                    }}>
                    <strong>Ready to find your ideal property? Connect with RBIV now and explore a world of possibilities!</strong> 
                  </Typography>
                  {/* this is the blue box */}
                  <Box sx={{
                    display: {xs: "block", md: "flex"},
                    //? borderRadius: {xs: 10, sm: 0, md: 10, lg: 0, xl: 10}, line is for testing break points
                    borderRadius: 10,
                    position: "absolute",
                    top: {xs: 100,sm: 125, md: 300 , lg: 300, xl: 300},
                    right: {xs: -83,sm: -190, md: 0, lg: -50, xl: -300},
                    backgroundColor: colors.blueAccent[900],
                    height: {xs: "1500%",sm: "650%", md:"350%" ,lg: "350%" ,xl: "450%"},
                    width: {xs: "190%",sm: "200%", md:"100%" ,lg: "120%" ,xl: "150%"},
                    boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.9)",
                  }}>
                    <Box sx={{
                      ml: {xs: 0, md:3, lg: 10},
                      padding: {xs: 2, md: 5},
                      justifyContent: "space-between",
                      width: {xs: "100%", md: "60%"}
                    }}>
                      <Typography variant="h2" component="h2" fontWeight="bold">
                        Send us a Message
                      </Typography>
                      <Box sx={{ mt: 5 }}>
                        <Box  component="form" ref={form} noValidate onSubmit={handleSubmit}>
                              <TextField
                                autoComplete="name"
                                name='name'
                                label="Name"
                                autoFocus
                                onChange={onChangeHandler}
                                value={contactForm.name}
                                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                                InputProps={{ ...colorTheme.inputProps }}
                                className="mb-3"
                                fullWidth
                                sx={{
                                  ...colorTheme.inputStyling
                                }}
                              />
                              <TextField
                                name='email'
                                type='email'
                                label="Email"
                                onChange={onChangeHandler}
                                value={contactForm.email}
                                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                                InputProps={{ ...colorTheme.inputProps }}
                                className='pe-2 mb-3'
                                sx={{
                                  ...colorTheme.inputStyling,
                                  width: '50%',
                                }}
                              />
                              <TextField
                                name='phoneNumber'
                                type='tel'
                                label="Phone Number"
                                onChange={onChangeHandler}
                                value={contactForm.phoneNumber}
                                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                                InputProps={{ ...colorTheme.inputProps }}
                                className=' mb-3'
                                sx={{
                                  ...colorTheme.inputStyling,
                                  width: '50%',
                                }}
                              />
                              <TextField
                                name='subject'
                                label="Subject"
                                onChange={onChangeHandler}
                                value={contactForm.subject}
                                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                                InputProps={{ ...colorTheme.inputProps }}
                                className="mb-3"
                                fullWidth
                                sx={{
                                  ...colorTheme.inputStyling,
                                }}
                              />
                            <TextField
                              name='message'
                              label="Message"
                              onChange={onChangeHandler}
                              value={contactForm.message}
                              InputLabelProps={{ ...colorTheme.inputLabelProps }}
                              InputProps={{ ...colorTheme.inputProps }}
                              className="mb-3"
                              multiline
                              rows={5}
                              fullWidth
                              sx={{
                                ...colorTheme.inputStyling
                              }}
                            />
                              <Button 
                              type='submit' 
                              className="float-end" 
                              sx={{ 
                                ...colorTheme.submitButton }} 
                              variant="contained">
                                Submit
                              </Button>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{
                      borderTopRightRadius: {sm: 0, md: 40},
                      borderBottomRightRadius: 40,
                      borderBottomLeftRadius: {xs: 40, md: 0},
                      padding: {xs: 3, md:2, lg:10},
                      width: {sm: "100%", md: "40%"},
                      backgroundColor: colors.grey[300]
                    }}>
                      <Typography variant="h2" component="h2" fontWeight="bold" sx={{textAlign: "center"}}>
                        Contact Information
                      </Typography>
                      <div className= 'text-center mt-1'>
                        <Box className="align-self-center">
                          <div className="mb-4 text-center">
                            <h4>Address:</h4>
                            <h5>888 West 21st Street, New York, NY, 10016 </h5>
                          </div>
                          <div className="mb-4">
                            <h4>Email:</h4>
                            <h5><a href="mailto:info@rbiv.com" className="text-decoration-none text-white link-hover">info@rbiv.com</a></h5>
                          </div>
                          <div className="mb-4">
                            <h4>Phone:</h4>
                            <h5><a href="tel:2341234567" className="text-decoration-none color-red text-white">+1 234-123-4567</a></h5>
                          </div>
                        </Box>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contacts
