import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';

const ListingForm = (props) => {
  const { initialListing, onSubmitProp } = props;
  const [listing, setListing] = useState(initialListing);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitProp(listing);
    setListing({
      name: '',
      numOfBedrooms: 0,
      description: '',
      price: '',
      imgUrl: '',
    })
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setListing((prev) => ({ ...prev, [name]: value }))
  }


  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            name='name'
            label="Name"
            onChange={onChangeHandler}
            value={listing.name}
            className='mb-4'
          />
        </div>

        <div>
          <TextField
            name='numOfBedrooms'
            type='number'
            label="Number Of Bedrooms"
            onChange={onChangeHandler}
            value={listing.numOfBedrooms}
            className='mb-4'
          />
        </div>
        <div>
          <TextField
            name='description'
            label="Description"
            onChange={onChangeHandler}
            value={listing.description}
            className='mb-4'
          />
        </div>
        <div>
          <TextField
            name='price'
            type='number'
            label="Price"
            onChange={onChangeHandler}
            value={listing.price}
            className='mb-4'
          />
        </div>
        <div>
          <TextField
            name='imgUrl'
            label="Image Url"
            onChange={onChangeHandler}
            value={listing.imgUrl}
            className='mb-4'
          />
        </div>


        <button type='submit' className="btn btn-primary ms-2 mt-4"> Submit</button>

      </form >
    </div >
  )
}

export default ListingForm
