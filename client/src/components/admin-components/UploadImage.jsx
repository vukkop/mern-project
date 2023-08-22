import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'

const UploadImage = () => {
  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "mern_project")

    axios.post('https://api.cloudinary.com/v1_1/vukkop/upload', formData).then((res) => console.log(res))
  }





  return (
    <div className='mt-5'>
      <input type="file" onChange={(e) => setImageSelected(e.target.files[0])} />
      <Button color='secondary' onClick={uploadImage}>Upload</Button>

    </div>
  )
}

export default UploadImage
