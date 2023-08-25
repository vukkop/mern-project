import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Box, Button, Typography, ImageList, ImageListItem } from '@mui/material'
import useColorTheme from "../../hooks/FormStyles"
import { MuiFileInput } from 'mui-file-input'


const UploadImage = ({ listingId, imageArray, setImageArray }) => {
  const [value, setValue] = React.useState("")
  const [imageSelected, setImageSelected] = useState("")
  const navigate = useNavigate()
  const colorTheme = useColorTheme()

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "mern_project")

    axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/upload`, formData)
      .then((res) => {
        const imgObject = {
          listingId: listingId,
          publicId: res.data.public_id,
          imgUrl: res.data.secure_url,
          name: res.data.original_filename
        }
        return imgObject
      })
      .then((imgObject) => {
        setImageArray(
          prevState =>
            [...prevState, imgObject]
        )
        return imgObject
      })
      .then((imgObject) => {
        axios.post('http://localhost:8000/api/image/add', imgObject)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleChange = (newValue) => {
    setImageSelected(newValue)
    setValue(newValue)
  }

  const handleContinue = () => {
    navigate("/admin")
  }

  return (
    <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 5
      }}>
        <Typography variant='h1' sx={{
          fontSize: "3rem",
          color: colorTheme.colors.grey[100],
          fontWeight: 500
        }}>
          Upload an Image!
        </Typography>
        <Box sx={{ width: "80%" }}>
          <MuiFileInput
            value={value}
            onChange={(e) => handleChange(e)}
            sx={{
              backgroundColor: colorTheme.colors.greenAccent[500],
              color: colorTheme.colors.grey[100]
            }}
          />
          <Button
            className='float-end'
            onClick={uploadImage}
            sx={{
              ...colorTheme.uploadImageBtn,
              mt: 5,
              height: 50,
              color: "white"
            }}
            fullWidth
          >
            Upload
          </Button>
        </Box>
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 3,
          gap: 4
        }}>
          <ImageList
            sx={{ width: 450, }}
            cols={5}
            rowHeight={90}
          >
            {imageArray.map((item, i) => (
              <ImageListItem key={i}>
                <img
                  src={`${item.imgUrl}?w=100&h=100&fit=crop&auto=format`}
                  srcSet={`${item.imgUrl}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Button color='secondary' onClick={handleContinue}>Continue</Button>
      </Box>
    </Box>
  )
}

export default UploadImage
