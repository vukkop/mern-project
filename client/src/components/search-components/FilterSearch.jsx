import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Button,
    Select,
    MenuItem,
    Slider,
    FormControl,
    InputLabel,
    FormControlLabel,
    Checkbox,
    FormGroup,
    FormLabel,
} from '@mui/material';

const FilterSearch = ({ open, onClose, applyFilter }) => {
    const [priceRange, setPriceRange] = useState([0, 5000000]);
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [homeType, setHomeType] = useState([]);
    const [includePets, setIncludePets] = useState(false);

    const handleApplyFilter = () => {
        const filterData = {
            priceRange,
            bedrooms,
            bathrooms,
            homeType,
            includePets,
        };
        applyFilter(filterData);
        onClose();
    };

    const handleHomeTypeChange = (event) => {
        setHomeType(event.target.value);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Search Filter</DialogTitle>
            <DialogContent>
                <FormControl fullWidth >
                    <InputLabel id="bedrooms-label">Bedrooms</InputLabel>
                    <Select
                        labelId="bedrooms-label"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                    >
                        <MenuItem value="">Any</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5+</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{mt: 2}}>
                    <InputLabel id="bathrooms-label">Bathrooms</InputLabel>
                    <Select
                        labelId="bathrooms-label"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                    >
                        <MenuItem value="">Any</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={1.5}>1.5</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={2.5}>2.5</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={3.5}>3.5</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={4.5}>4.5</MenuItem>
                        <MenuItem value={5}>5+</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{mt: 2}}>
                    <InputLabel id="home-type-label">Home Type</InputLabel>
                    <Select
                        labelId="home-type-label"
                        multiple
                        value={homeType}
                        onChange={handleHomeTypeChange}
                    >
                        <MenuItem value="Home">House</MenuItem>
                        <MenuItem value="Town House">Townhome</MenuItem>
                        <MenuItem value="Apartment">Apartment</MenuItem>
                        <MenuItem value="Office">Office</MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includePets}
                            onChange={(e) => setIncludePets(e.target.checked)}
                        />
                    }
                    label="Include Pets"
                />
                <FormControl fullWidth>
                    <FormLabel>Price Range</FormLabel>
                    <Slider
                        value={priceRange}
                        onChange={(e, newValue) => setPriceRange(newValue)}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `$${value}`}
                        min={0}
                        max={900000}
                    />
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleApplyFilter}>
                    Apply Filter
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default FilterSearch;