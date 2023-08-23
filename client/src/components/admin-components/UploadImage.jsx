import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Box, Button, Typography } from '@mui/material'
import useColorTheme from "../../hooks/FormStyles"
import { MuiFileInput } from 'mui-file-input'

const UploadImage = (props) => {
  const [value, setValue] = React.useState(null)
  const [imageSelected, setImageSelected] = useState("")
  const [imageArray, setImageArray] = useState([])

  const navigate = useNavigate()

  const colorTheme = useColorTheme()


  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "mern_project")

    axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/upload`, formData)
      .then((res) => {
      console.log("$$$$$$$$$$$$$$$$$$HI ROBERT*******************")
      console.log(props.listingId);
      const imgObject = {
        listingId: props.listingId,
        publicId: res.data.public_id,
        imgUrl: res.data.secure_url,
        name: res.data.original_filename
      }
      axios.post('http://localhost:8000/api/image/add', imgObject)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleChange = (newValue) => {
    console.log(newValue);
    setImageSelected(newValue)
    setValue(newValue)
  }

  const handleContiniue = () => {
    axios.post(`http:///api/image/add`)
    navigate("/admin")
  }

  return (
    <div>
      {JSON.stringify(props.listingId)}
      <h1>HI from upload</h1>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 5
      }}>
        <Typography variant='h1' sx={{
          fontSize: "3rem",
          color: colorTheme.colors.redAccent[500],
          fontWeight: 500
        }}>
          Upload an Image!
        </Typography>
        <MuiFileInput
          value={value}
          onChange={(e) => handleChange(e)}
          sx={{ backgroundColor: colorTheme.colors.redAccent[500] }} />

        <Button
          className='float-end'
          onClick={uploadImage}
          sx={{ ...colorTheme.uploadImageBtn }}>
          Upload
        </Button>

        <ul>
          {imageArray.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
        <Button color='secondary' onClick={handleContiniue}>Continue</Button>
      </Box>
    </div>
  )
}

export default UploadImage
