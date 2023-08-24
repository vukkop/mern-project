import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Paper } from '@mui/material'

const SingleListingCarousel = ({ images }) => {

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
        {images &&
          images.map((item, i) =>
            <Paper key={i} sx={{ display: "flex", flexDirection: 'column', alignItems: "center", p: 3, backgroundColor: "transparent" }} >
              <img style={{ height: "700px" }} src={item.imgUrl} alt={item.name} />
            </Paper>)
        }
      </Carousel>
    </Box >









  )
}


export default SingleListingCarousel
