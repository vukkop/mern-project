import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertTitle } from '@mui/material';
import ListingForm from './ListingForm'
import UploadImageModal from './UploadImageModal'


const ListingNew = () => {
  const [imageArray, setImageArray] = useState([])
  const [errors, setErrors] = useState([]);
  const [formSubmit, setFormSubmit] = useState("");
  const navigate = useNavigate();
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
    images: [],
  }

  const createListing = (listing) => {
    axios.post("http://localhost:8000/api/listing", listing)
      .then((res) => {
        setFormSubmit(res.data._id);
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

      {/* We could implement this when we create edit image functionality - This should not be in our MVP - VUK
      {imageArray.map((e, i) => <img className='rounded' style={{ height: "100px" }} src={e.imgUrl} />)} */}

      {
        formSubmit &&
        <div className="row mt-5">
          <UploadImageModal listingId={formSubmit} imageArray={imageArray} setImageArray={setImageArray} />
        </div>
      }

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
