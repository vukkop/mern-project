import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Paper, Grid, Typography, List, ListItem, ListItemText, colors, Divider } from '@mui/material'
import RoomIcon from '@mui/icons-material/Room';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const SingleListingCarousel = ({ images }) => {
  console.log(images);


  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imgUrl: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imgUrl: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
  ]

  return (
    <Box >
      <Carousel animation='slide'  >
        {
          items.map((item, i) =>
            <Paper key={i} sx={{ display: "flex", flexDirection: 'column', alignItems: "center", p: 3, backgroundColor: "transparent" }} >
              <img  style={{ height: "700px" }} src={item.imgUrl} alt={item.name} />
            </Paper>)
        }
      </Carousel>
      <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Box component="div">
          <List>
            <ListItem>
              <RoomIcon />
              <ListItemText
                primary="Location: "
              />
            </ListItem>
            <ListItem>
              <SquareFootIcon />
              <ListItemText
                primary="Sq. feet: "
              />
            </ListItem>
            <ListItem>
              <BathtubIcon />
              <ListItemText
                primary="Bathrooms: "
              />
            </ListItem>
            <ListItem>
              <AttachMoneyIcon />
              <ListItemText
                primary="Price: "
              />
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <ListItem>
              <HomeIcon />
              <ListItemText
                primary="Type: "
              />
            </ListItem>
            <ListItem>
              <SingleBedIcon />
              <ListItemText
                primary="Bedrooms: "
              />
            </ListItem>
            <ListItem>
              <DeviceThermostatIcon />
              <ListItemText
                primary="Utilities: "
              />
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Box >









  )
}


export default SingleListingCarousel
