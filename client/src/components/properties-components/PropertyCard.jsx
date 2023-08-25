import React, { useContext, useState } from 'react';
import { alpha, useTheme, Card, CardContent, CardMedia, Typography, Box, CardActionArea, Grid, Icon } from '@mui/material';
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
            <Link
                style={{ textDecoration: "none" }}
                to={`/listing/${property._id}`}
            >
                <Card sx={{
                    width: "85%",
                    mx: 'auto',
                    mt: 10,
                    backgroundColor: alpha(colors.blueAccent[500], .1),
                    boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.7)",
                    p: 3,
                }} >
                    <CardActionArea sx={{ display: 'flex' }}>
                        <CardMedia sx={{ flex: 1 }}
                            component="img"
                            width="200"
                            height="220"
                            image={property.images.length > 0 &&
                                property.images[0].imgUrl}
                        />
                        <CardContent sx={{ flex: 3, px: 10 }}>
                            <Typography gutterBottom variant="h4" component="div">
                                $ {property.price.toLocaleString()}
                            </Typography>
                            <Typography variant="h4" color="text.secondary">
                                {property.numOfBedrooms} <Icon><BedroomParentOutlinedIcon /></Icon> bedrooms |  {property.numOfBathrooms} <Icon><BathtubIcon /></Icon> bathrooms
                            </Typography>
                            <Typography 
                            mt={2} 
                            variant="h8" 
                            color="text.secondary"
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical'
                              }}
                            >
                                {property.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    )
}

export default PropertyCard





