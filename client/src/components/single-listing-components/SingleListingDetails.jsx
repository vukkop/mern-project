import React from 'react'
import { Box, Grid, List, ListItem, ListItemText, Typography, Container } from '@mui/material'
import RoomIcon from '@mui/icons-material/Room';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import SingleBedIcon from '@mui/icons-material/SingleBed';

const SingleListingDetails = ({ listing }) => {
  return (
    <div>
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <ListItem >
            <RoomIcon />
            <Typography >
              Location: {listing.address}, {listing.city}, {listing.state}, {listing.zipCode}
            </Typography>
          </ListItem>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Box component="div">
          <List>
            <ListItem>
              <HomeIcon />
              <Typography >
                Type: {listing.type}
              </Typography>
            </ListItem>
            <ListItem>
              <SquareFootIcon />
              <Typography >
                Sq. feet: {listing.size}
              </Typography>
            </ListItem>
            <ListItem>
              <AttachMoneyIcon />
              <Typography >
                Price: {listing.price}
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <ListItem>
              <SingleBedIcon />
              <Typography >
                Bedrooms: {listing.numOfBathrooms}
              </Typography>
            </ListItem>
            <ListItem>
              <BathtubIcon />
              <Typography >
                Bathrooms: {listing.numOfBathrooms}
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Container maxWidth="lg">
        <Typography >
          {listing.description}
        </Typography>
      </Container>



    </div>
  )
}

export default SingleListingDetails
