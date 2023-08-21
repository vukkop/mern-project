import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Icon } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';



const PropertyCard = (props) => {
    const { prop } = props
    const [property, setProperty] = useState(prop)
    console.log(props)
    
    return (
        <div>
            <Card sx={{ maxWidth: 1120, mx: 'auto', mt: '50px' }} >
                <Link className="link-offset-2 link-underline link-underline-opacity-0" underline="none" to={`/listing/${property._id}`}>
                    <CardActionArea sx={{ display: 'flex' }}  >
                        <CardMedia className='rounded w-25 h-25' sx={{ flex: 1 }}
                            component="img"
                            width="200"
                            height="220"
                            image={property.imgUrl}
                            alt=""
                        />
                        <CardContent sx={{ flex: 3 }}>
                            <Typography gutterBottom variant="h4" component="div">
                                $ {property.price}
                            </Typography>
                            <Typography variant="h4" color="text.secondary">
                                {property.numOfBedrooms} <Icon><BedroomParentOutlinedIcon /></Icon> bedrooms |  {property.numOfBathrooms} <Icon><BathtubIcon /></Icon> bathrooms
                            </Typography>
                            <Typography mt={2} variant="h8" color="text.secondary">
                                {property.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    )
}

export default PropertyCard





