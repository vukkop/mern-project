import React, { useState, useRef } from "react";
import TextField from '@mui/material/TextField';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Box } from '@mui/material';
import Button from '@mui/material/Button'
import useColorTheme from "../hooks/FormStyles"
import emailjs from '@emailjs/browser';
//service_dxwz7kk

// template_3yti0li

// I4r1Du7Ym2fA7cxI-

const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const form = useRef()
  const colorTheme = useColorTheme()


  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);

    emailjs.sendForm('service_dxwz7kk', 'template_3yti0li', form.current, 'I4r1Du7Ym2fA7cxI-')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  const handleSubmit = e => {
    e.preventDefault();
    // const formInput = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phoneNumber: e.target.phoneNumber.value,
    //   subject: e.target.subject.value,
    //   message: e.target.message.value,
    // }
    // console.log(formInput);

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
    <div className="container mt-4">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <h3>Get in touch</h3>
          </div>
          <div className="col-6 col-md-6">
            <h3>Contact us</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
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
                  className='pe-2 mb-3'
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
                rows={11}
                fullWidth
                sx={{
                  ...colorTheme.inputStyling
                }}
              />
              <div>
                <Button type='submit' className="float-end" sx={{ ...colorTheme.submitButton }} variant="contained">Submit</Button>
              </div>
            </FormControl>
          </div>
          <div className='col-6 d-flex'>
            <Box className="w-100 h-75 align-self-center" sx={{
              backgroundColor: colorTheme.colors.blueAccent[500],
              borderRadius: 5,
              padding: 5
            }}>
              <div className="mb-4">
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
        </div >

      </form >



    </div >
  )
}

export default Contacts
