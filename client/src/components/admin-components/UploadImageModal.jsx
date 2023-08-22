import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useColorTheme from '../../hooks/FormStyles';
import UploadImage from './UploadImage'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UploadImageModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const colorTheme = useColorTheme()



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>

          <UploadImage />

        </Box>
      </Modal>
    </div>
  )
}

export default UploadImageModal
