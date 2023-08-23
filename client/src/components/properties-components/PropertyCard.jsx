import React, {useContext, useState} from 'react';
import { useTheme, Card, CardContent, CardMedia, Typography, Box, CardActionArea, Grid, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import { ColorModeContext, tokens } from "../../context/theme";





const PropertyCard = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const { prop } = props
    const [property, setProperty] = useState(prop)
    
    return (
        <Grid>
            <Card sx={{ 
                width: "85%", 
                mx: 'auto', 
                mt: '50px', 
                backgroundColor: colors.greenAccent[900],
                boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.7)",
                p: 3,
                }} >
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
        </Grid>
    )
}

export default PropertyCard





