import { Box, Button, Modal, Typography, alpha } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useColorTheme from '../../hooks/FormStyles';
import UploadImage from './UploadImage'

const UploadImageModal = ({ listingId, imageArray, setImageArray }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const colorTheme = useColorTheme()

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: colorTheme.colors.blueAccent[900],
    border: `3px solid ${colorTheme.colors.greenAccent[800]}`,
    boxShadow: "10px 10px 20px rgba(0,0,0,0.75)",
    backdropFilter: 100,
    p: 5,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: alpha(colorTheme.colors.greenAccent[900], .09) }}
    >
      <Box sx={style}>
        <UploadImage listingId={listingId} imageArray={imageArray} setImageArray={setImageArray} />
      </Box>
    </Modal>
  )
}

export default UploadImageModal
