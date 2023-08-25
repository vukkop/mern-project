import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import useColorTheme from "../../hooks/FormStyles"
import UploadImageModal from './UploadImageModal'

const ListingForm = (props) => {
  const { initialListing, onSubmitProp } = props;
  const [listing, setListing] = useState(initialListing);
  const [isOpen, setIsOpen] = useState(false);
  const colorTheme = useColorTheme()

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitProp(listing);
    setListing({
      name: '',
      type: '',
      numOfBedrooms: 0,
      numOfBathrooms: 0,
      size: 0,
      description: '',
      price: '',
      isFeatured: false,
      address: '',
      city: '',
      state: '',
      zipCode: '',
    })
    setIsOpen(true)
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    if (name === "isFeatured") {
      const { name, checked } = e.target
      setListing((prev) =>
        ({ ...prev, [name]: checked }))
    } else {
      setListing((prev) =>
        ({ ...prev, [name]: value }))
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <FormControl>
              <div>
                <TextField
                  name='name'
                  label="Name"
                  onChange={onChangeHandler}
                  value={listing.name}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className="mb-3"
                  fullWidth
                  sx={{
                    ...colorTheme.inputStyling
                  }}
                />
              </div>
              <div>
                <TextField
                  name='numOfBedrooms'
                  type='number'
                  label="Number Of Bedrooms"
                  onChange={onChangeHandler}
                  value={listing.numOfBedrooms}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className='pe-2 mb-3'
                  sx={{
                    ...colorTheme.inputStyling,
                    width: '50%',
                  }}
                />
                <TextField
                  name='numOfBathrooms'
                  type='number'
                  label="Number Of Bathrooms"
                  onChange={onChangeHandler}
                  value={listing.numOfBathrooms}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className="mb-3"
                  sx={{
                    ...colorTheme.inputStyling,
                    width: '50%',
                  }}
                />
              </div>
              <div>
                <TextField
                  name='price'
                  type='number'
                  label="Price"
                  onChange={onChangeHandler}
                  value={listing.price}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className='pe-2 mb-3'
                  sx={{
                    ...colorTheme.inputStyling,
                    width: '50%',
                  }}
                />
                <TextField
                  name='size'
                  type='number'
                  label="Size"
                  onChange={onChangeHandler}
                  value={listing.size}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className="mb-3"
                  sx={{
                    ...colorTheme.inputStyling,
                    width: '50%',
                  }}
                />
              </div>
              <div>
                <TextField
                  name='address'
                  label="Address"
                  onChange={onChangeHandler}
                  value={listing.address}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className="mb-3"
                  fullWidth
                  sx={{
                    ...colorTheme.inputStyling
                  }}
                />

              </div>
              <div>
                <TextField
                  name='city'
                  label="City"
                  onChange={onChangeHandler}
                  value={listing.city}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className='pe-2 mb-3'
                  sx={{
                    ...colorTheme.inputStyling,
                    width: '34%',
                  }}
                />
                <TextField
                  name='state'
                  label="State"
                  onChange={onChangeHandler}
                  value={listing.state}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className="mb-3 pe-2"
                  sx={{
                    ...colorTheme.inputStyling,
                    width: '33%',
                  }}
                />
                <TextField
                  name='zipCode'
                  label="Zip code"
                  onChange={onChangeHandler}
                  value={listing.zipCode}
                  InputLabelProps={{ ...colorTheme.inputLabelProps }}
                  InputProps={{ ...colorTheme.inputProps }}
                  className=' mb-3'
                  sx={{
                    ...colorTheme.inputStyling,
                    width: '33%',
                  }}
                />
              </div>
            </FormControl>
          </div>
          <div className='col-6'>
            <div>
              <TextField
                name='description'
                label="Description"
                onChange={onChangeHandler}
                value={listing.description}
                InputLabelProps={{ ...colorTheme.inputLabelProps }}
                InputProps={{ ...colorTheme.inputProps }}
                className="mb-3"
                multiline
                rows={11}
                fullWidth
                sx={{
                  ...colorTheme.inputStyling
                }}
              />
            </div>
            <div className='d-flex flex-wrap'>
              <FormControl fullWidth
                sx={{ ...colorTheme.inputStyling }}>
                <InputLabel sx={{ ...colorTheme.selectLabel }} id="select-label">Type</InputLabel>
                <Select
                  labelId="select-label"
                  name='type'
                  value={listing.type}
                  label="Type"
                  onChange={onChangeHandler}
                  className="mb-3"
                >
                  <MenuItem value={"House"} >House</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Town House"}>Town House</MenuItem>
                  <MenuItem value={"Office"}>Office</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel sx={{ ...colorTheme.checkBoxLabel }} className='ms-3' control={
                <Checkbox name='isFeatured' checked={listing.isFeatured}
                  onChange={onChangeHandler} sx={{ ...colorTheme.checkBox }}
                />
              } label="Featured" />
            </div>
          </div>
        </div>
        <div>
          <Button type='submit' className="float-end" sx={{ ...colorTheme.submitButton }} variant="contained">Submit</Button>
        </div>
      </form >
    </div >
  )
}

export default ListingForm
