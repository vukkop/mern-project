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
    useTheme,
    Box,
} from '@mui/material';
import useColorTheme from '../../hooks/FormStyles';
import { tokens } from '../../context/theme';


const FilterSearch = ({ open, onClose, applyFilter }) => {
    const theme = useTheme();
    const [priceRange, setPriceRange] = useState([0, 5000000]);
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [homeType, setHomeType] = useState([]);
    const [includePets, setIncludePets] = useState(false);
    const colorTheme = useColorTheme();
    const colors = tokens(theme.palette.mode);

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


    const handleResetFilter = () => {
        setPriceRange([0, 5000000]);
        setBathrooms("");
        setBedrooms("");
        setHomeType([]);
        const filterData = {
            priceRange: [0, 5000000],
            bedrooms: 0,
            bathrooms: 0,
            homeType: [],
            includePets: false,
        };
        applyFilter(filterData);
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Search Filter</DialogTitle>
            <DialogContent>
                <FormControl fullWidth sx={{ mt: 2 }} >
                    
                    <TextField
                        label="Bedrooms"
                        value={bedrooms}
                        select
                        fullWidth
                        onChange={(e) => setBedrooms(e.target.value)}
                    >
                        <MenuItem value="">Bedrooms</MenuItem>
                        <MenuItem value={0}>Any</MenuItem>
                        <MenuItem value={1}>1+</MenuItem>
                        <MenuItem value={2}>2+</MenuItem>
                        <MenuItem value={3}>3+</MenuItem>
                        <MenuItem value={4}>4+</MenuItem>
                        <MenuItem value={5}>5+</MenuItem>
                    </TextField>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 3 }}>
                    
                    <TextField
                        label="Bathrooms"
                        value={bathrooms}
                        select
                        fullWidth
                        onChange={(e) => setBathrooms(e.target.value)}
                    >
                        <MenuItem value="">Bathrooms</MenuItem>
                        <MenuItem value={0}>Any</MenuItem>
                        <MenuItem value={1}>1+</MenuItem>
                        <MenuItem value={1.5}>1.5+</MenuItem>
                        <MenuItem value={2}>2+</MenuItem>
                        <MenuItem value={2.5}>2.5+</MenuItem>
                        <MenuItem value={3}>3+</MenuItem>
                        <MenuItem value={3.5}>3.5+</MenuItem>
                        <MenuItem value={4}>4+</MenuItem>
                        <MenuItem value={4.5}>4.5+</MenuItem>
                        <MenuItem value={5}>5+</MenuItem>
                    </TextField>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 3 }}>
                    
                    <TextField
                        fullWidth
                        label="Home Type"
                        multiple
                        value={homeType}
                        onChange={handleHomeTypeChange}
                    >
                        <MenuItem value="Home">House</MenuItem>
                        <MenuItem value="Town House">Townhome</MenuItem>
                        <MenuItem value="Apartment">Apartment</MenuItem>
                        <MenuItem value="Office">Office</MenuItem>
                    </TextField>
                </FormControl>

                <FormControl fullWidth>
                    <FormLabel>Price Range</FormLabel>
                    <Slider
                        style={{ color: colors.grey[100] }}
                        value={priceRange}
                        onChange={(e, newValue) => setPriceRange(newValue)}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `$${value}`}
                        min={0}
                        max={900000}
                    />
                </FormControl>

                <Button onClick={handleApplyFilter}
                    variant="outlined"
                    size='small'
                    sx={{
                        ...colorTheme.submitButton,
                        width: '100px',
                        m: 1
                    }} style={{ color: colors.grey[100] }}>
                    Apply Filter
                </Button>
                <Button onClick={handleResetFilter}
                    variant="outlined"
                    size='small'
                    sx={{
                        ...colorTheme.submitButton,
                        width: '100px',
                        m: 1
                    }} style={{ color: colors.grey[100] }}>
                    Reset Filters
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default FilterSearch;


