import React, { useState, useRef } from "react";
import { alpha } from "@mui/material"
import TextField from '@mui/material/TextField';
import { FormControl, Box, Grid, Typography, Paper } from '@mui/material';
import Button from '@mui/material/Button'
import useColorTheme from "../hooks/FormStyles"
import emailjs from "@emailjs/browser";
import bgImage from "../assets/img/cityImage.jpg";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
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
  const form = useRef()
  const colorTheme = useColorTheme()

  const sendEmail = (e) => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
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
            mt: 15,
            height: "80%",
            width: "97vw",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${bgImage})`
          }}>
          <Grid sx={{
            backgroundColor: alpha(colors.blueAccent[500], 0.92),
            width: "100%",
            height: "100%",
            position: 'relative',
          }}>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(3px)',
                boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.9)",
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
                mt: { xs: 1, md: 20 },
                px: { md: 20, lg: 40, xl: 60 }
              }}>
                <Box sx={{ position: "relative", }}>
                  <Typography variant="h1" component="h1" fontWeight="bold" sx={{fontSize: "4rem"}}>
                    Get In Touch
                  </Typography>
                  <Typography variant="h3" component="h3"
                    sx={{
                      mt: 3,
                      display: { xs: "none", md: "block" }
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe ullam rem iure, labore delectus tempora accusamus
                  </Typography>
                  {/* this is the blue box */}
                  <Box sx={{
                    display: "flex",
                    borderRadius: 10,
                    position: "absolute",
                    top: 275,
                    right: -150,
                    backgroundColor: colors.blueAccent[900],
                    height: "600%",
                    width: "125%",
                    boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.9)",
                  }}>
                    <Box sx={{
                      ml: 10,
                      padding: 5,
                      justifyContent: "space-between",
                      width: "60%"
                    }}>
                      <Typography variant="h2" component="h2" fontWeight="bold">
                        Send us a Message
                      </Typography>
                      <Box sx={{ mt: 5 }}>
                        <form ref={form} onSubmit={handleSubmit}>
                          <FormControl>
                            <div>
                              <TextField
                                name='name'
                                label="Name"
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
                            </div>
                            <div>
                              <TextField
                                name='email'
                                type='email'
                                label="Email"
                                onChange={onChangeHandler}
                                value={contactForm.email}
                                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                                InputProps={{ ...colorTheme.inputStyling }}
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
                                InputProps={{ ...colorTheme.inputStyling }}
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
                                InputProps={{ ...colorTheme.inputStyling }}
                                className="mb-3"
                                fullWidth
                                sx={{
                                  ...colorTheme.inputStyling,
                                }}
                              />
                            </div>
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
                            <div>
                              <Button type='submit' className="float-end" sx={{ ...colorTheme.submitButton }} variant="contained">Submit</Button>
                            </div>
                          </FormControl>
                        </form>
                      </Box>
                    </Box>
                    <Box sx={{
                      borderTopRightRadius: 40,
                      borderBottomRightRadius: 40,
                      padding: 10,
                      width: "40%",
                      backgroundColor: colors.grey[300]
                    }}>
                      <Typography variant="h2" component="h2" fontWeight="bold" sx={{
                        textAlign: "center",
                      }}>
                        Contact Information
                      </Typography>
                      <div className= 'text-center mt-5'>
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
