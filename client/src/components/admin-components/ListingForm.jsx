import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';

const ListingForm = (props) => {
  const { initialListing, onSubmitProp } = props;
  const [listing, setListing] = useState(initialListing);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitProp(listing);
    setListing({
      // name: '',
      // type: '',
      // numOfBedrooms: 0,
      // numOfBathrooms: 0,
      // size: 0,
      // description: '',
      // price: '',
      // isFeatured: false,
      // address: '',
      // city: '',
      // state: '',
      // zipCode: '',
      // imgUrl: '',
    })
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
                  className="mb-3"
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  name='numOfBedrooms'
                  type='number'
                  label="Number Of Bedrooms"
                  onChange={onChangeHandler}
                  value={listing.numOfBedrooms}
                  className='pe-2 mb-3'
                  sx={{
                    width: '50%',
                  }}
                />
                <TextField
                  name='numOfBathrooms'
                  type='number'
                  label="Number Of Batrooms"
                  onChange={onChangeHandler}
                  value={listing.numOfBathrooms}
                  className="mb-3"
                  sx={{
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
                  className='pe-2 mb-3'
                  sx={{
                    width: '50%',
                  }}
                />
                <TextField
                  name='size'
                  type='number'
                  label="Size"
                  onChange={onChangeHandler}
                  value={listing.size}
                  className="mb-3"
                  sx={{
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
                  className="mb-3"
                  fullWidth
                />

              </div>
              <div>
                <TextField
                  name='city'
                  label="City"
                  onChange={onChangeHandler}
                  value={listing.city}
                  className='pe-2 mb-3'
                  sx={{
                    width: '34%',
                  }}
                />
                <TextField
                  name='state'
                  label="State"
                  onChange={onChangeHandler}
                  value={listing.state}
                  className="mb-3"
                  sx={{
                    width: '33%',
                  }}
                />
                <TextField
                  name='zipCode'
                  label="ZIP code"
                  onChange={onChangeHandler}
                  value={listing.zipCode}
                  className='ps-2 mb-3'
                  sx={{
                    width: '33%',
                  }}
                />
              </div>
              <div>
                <TextField
                  name='imgUrl'
                  label="Image Url"
                  onChange={onChangeHandler}
                  value={listing.imgUrl}
                  className="mb-3"
                  fullWidth
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
                className="mb-3"
                multiline
                rows={11}
                fullWidth
              />
            </div>
            <div className='d-flex'>
              <FormControl sx={{ minWidth: 210 }} className="mb-3">
                <InputLabel id="select-label">Type</InputLabel>
                <Select
                  labelId="select-label"
                  name='type'
                  value={listing.type}
                  label="Type"
                  onChange={onChangeHandler}
                  className="mb-3"
                >
                  <MenuItem value={"House"}>House</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Town House"}>Town House</MenuItem>
                  <MenuItem value={"Office"}>Office</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel className='ms-3' control={
                <Checkbox name='isFeatured' checked={listing.isFeatured}
                  onChange={onChangeHandler}
                />
              } label="Featured" />
            </div>
          </div>
        </div>


        <button type='submit' className="btn btn-primary mt-3 float-end"> Submit</button>

      </form >
    </div >
  )
}

export default ListingForm
