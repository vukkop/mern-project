import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertTitle } from '@mui/material';
import ListingForm from './ListingForm'

const ListingNew = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()
  const newListing = {
    name: '',
    type: '',
    numOfBedrooms: '',
    numOfBathrooms: '',
    size: '',
    description: '',
    price: '',
    isFeatured: false,
    address: '',
    city: '',
    state: '',
    zipCode: '',
    imgUrl: '',
  }

  const createListing = (listing) => {
    axios.post("http://localhost:8000/api/listing", listing)
      .then(() => {
        navigate('/admin')
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
        if (errorArr.length > 0) {
          setTimeout(() => {
            setErrors([]);
          }, 4000);
        }
      })
  }

  return (
    <div>
      <h4 className='mb-4'>New</h4>
      <ListingForm
        onSubmitProp={createListing}
        initialListing={newListing}
      />

      {
        errors.length > 0
        && <Alert className='w-50 float-end mt-3' severity="error">
          <AlertTitle>Error</AlertTitle>
          {errors.map((err, index) =>
            <div key={index}>
              <span >{err}</span><br />
            </div>
          )}
        </Alert>
      }
    </div>
  )
}

export default ListingNew
