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
            <DialogContent sx={{ p: 5 }}>
                <DialogTitle sx={{ color: colors.greenAccent[500], p: 0, mb: 2, fontSize: "2rem" }}>Search Filter</DialogTitle>
                <FormControl fullWidth sx={{ mt: 2 }} >

                    <TextField
                        label="Bedrooms"
                        value={bedrooms}
                        select
                        fullWidth
                        onChange={(e) => setBedrooms(e.target.value)}
                        InputLabelProps={{
                            style: {
                                color: colors.greenAccent[500]
                            }
                        }}
                        inputProps={{
                            ...colorTheme.inputProps
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused": {
                                    "& fieldset": {
                                        borderColor: colors.greenAccent[500],
                                    },
                                },
                            },
                        }}
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
                        InputLabelProps={{
                            style: {
                                color: colors.greenAccent[500]
                            }
                        }}
                        inputProps={{
                            ...colorTheme.inputProps
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused": {
                                    "& fieldset": {
                                        borderColor: colors.greenAccent[500],
                                    },
                                },
                            },
                        }}
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
                        select
                        SelectProps={{
                            multiple: true
                        }}
                        value={homeType}
                        onChange={handleHomeTypeChange}
                        InputLabelProps={{
                            style: {
                                color: colors.greenAccent[500]
                            }
                        }}
                        inputProps={{
                            color: "white"
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused": {
                                    "& fieldset": {
                                        borderColor: colors.greenAccent[500],
                                    },
                                },
                            },
                        }}
                    >
                        <MenuItem value="House">House</MenuItem>
                        <MenuItem value="Town House">Townhome</MenuItem>
                        <MenuItem value="Apartment">Apartment</MenuItem>
                        <MenuItem value="Office">Office</MenuItem>
                    </TextField>
                </FormControl>

                <FormControl fullWidth>
                    <FormLabel sx={{ mt: 2, mb: 1, color: colors.greenAccent[500] }}>Price Range</FormLabel>
                    <Slider
                        style={{ color: colors.greenAccent[500] }}
                        value={priceRange}
                        onChange={(e, newValue) => setPriceRange(newValue)}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `$${value}`}
                        min={0}
                        max={1900000}
                        step={25000}
                    />
                </FormControl>
                <Box justifyContent={"space-between"} sx={{ mt: 5 }}>
                    <Button onClick={handleApplyFilter}
                        variant='contained'
                        color="secondary"
                        size='small'
                        sx={{ width: '100px', mr: 4 }}
                    >
                        Apply Filter
                    </Button>
                    <Button onClick={handleResetFilter}
                        variant='contained'
                        color="secondary"
                        size='small'
                        sx={{ width: '100px' }}
                    >
                        Reset Filters
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default FilterSearch;


