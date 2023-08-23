import React from 'react'
import { Box, Input, Grid, FormControl, Button, useTheme } from '@mui/material'
import useColorTheme from '../../hooks/FormStyles';
import TextField from '@mui/material/TextField';
import { tokens, ColorModeContext } from '../../context/theme';

const SearchBar = () => {
    const theme = useTheme();
    const colorTheme = useColorTheme();
    const colors = tokens(theme.palette.mode);

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
            <Button variant="outlined"
                size='medium'
                sx={{
                    ...colorTheme.submitButton,
                    width: '100px'
                }} style={{ color: colors.grey[100] }}>Filter</Button>
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







