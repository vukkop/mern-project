import React from 'react'
import { Grid, Box } from "@mui/material"

const Hero = () => {
  return (
    <div>
        <Grid container>
          <Grid item justifyContent={"center"} alignItems={"center"} sx={{minHeight: "100vh"}}>
            <Box sx={{height: 600, width: 1200, backgroundColor: "black"}}>

            </Box>
          </Grid>
          
        </Grid>
    </div>
  )
}

export default Hero