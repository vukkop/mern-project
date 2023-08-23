import React from 'react'
import { Box, Input, Grid, FormControl, Button, useTheme } from '@mui/material'
import useColorTheme from '../../hooks/FormStyles';
import TextField from '@mui/material/TextField';
import { tokens, ColorModeContext } from '../../context/theme';
import { useState } from 'react';
import FilterSearch from './FilterSearch';

const SearchBar = ({filterObj, setFilterObj}) => {
    const theme = useTheme();
    const colorTheme = useColorTheme();
    const colors = tokens(theme.palette.mode);
    const [filterOpen, setFilterOpen] = useState(false);


    const handleOpenFilter = () => {
        setFilterOpen(true);
    };

    const handleCloseFilter = () => {
        setFilterOpen(false);
    };

    const handleApplyFilter = (filterObj) => {
        setFilterObj(filterObj);
    };

    return (
        <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 2, mt: 3 }}>
            <TextField
                name='Search'
                label="Search"
                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                InputProps={{ ...colorTheme.inputProps }}
                sx={{
                    ...colorTheme.inputStyling
                }}
            />
            <Button onClick={handleOpenFilter}
                variant="outlined"
                size='medium'
                sx={{
                    ...colorTheme.submitButton,
                    width: '100px'
                }} style={{ color: colors.grey[100] }}>Filter</Button>
            <FilterSearch
                open={filterOpen}
                onClose={handleCloseFilter}
                applyFilter={handleApplyFilter}
            />
            <Button variant="outlined"
                size='medium'
                sx={{
                    ...colorTheme.submitButton,
                    width: '100px'
                }} style={{ color: colors.grey[100] }}>Search</Button>
        </FormControl>
    );
}
export default SearchBar







