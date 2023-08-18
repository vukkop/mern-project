import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';


const PropertyCard = () => {

    return (
        <div>
            <Card sx={{ maxWidth: 1120, mx: 'auto', mt: '50px' }} >
                <CardActionArea sx={{display: 'flex'}}>
                    <CardMedia
                        component="img"
                        width="300"
                        height="220"
                        image="https://images.mansionglobal.com//im-651825"
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            $$$Add price Here$$$
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            # of bedrooms | # of bathrooms
                        </Typography>
                        <Typography mt={2} variant="body2" color="text.secondary">
                            !!!Add informational text here!!!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default PropertyCard

