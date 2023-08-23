import React from 'react'
import { Box, Input, Grid, FormControl, Button, useTheme } from '@mui/material'
import useColorTheme from '../../hooks/FormStyles';
import TextField from '@mui/material/TextField';
import { tokens, ColorModeContext } from '../../context/theme';
import { useState } from 'react';
import FilterSearch from './FilterSearch';

const SearchBar = ({ filterObj, setFilterObj }) => {
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

            <Button onClick={handleOpenFilter}
                variant="outlined"
                size='large'
                sx={{
                    ...colorTheme.submitButton,
                    width: '150px'
                }} style={{ color: colors.grey[100] }}>Search Filter</Button>
            <FilterSearch
                open={filterOpen}
                onClose={handleCloseFilter}
                applyFilter={handleApplyFilter}
            />

        </FormControl>
    );
}
export default SearchBar







