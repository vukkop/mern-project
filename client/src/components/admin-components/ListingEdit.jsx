import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Alert, AlertTitle } from '@mui/material'
import { Box, ImageList, ImageListItem } from '@mui/material'
import ListingForm from './ListingForm'
import UploadImageModal from './UploadImageModal'

const ListingEdit = () => {
  const [listing, setListing] = useState({
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
    images: []
  })
  const [formSubmit, setFormSubmit] = useState("");
  const [imageArray, setImageArray] = useState([])
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios
      .get(`http://localhost:8000/api/listing/${id}`)
      .then((res) => {
        setListing(res.data)
        setLoaded(true);
      })
  }

  const updateListing = (listing) => {
    axios.put(`http://localhost:8000/api/listing/${id}`, listing)
      .then(() => {
        setFormSubmit(id);
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key in errorResponse) {
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
      <h4 className='mb-4'>Edit</h4>
      {loaded && (
        <ListingForm
          onSubmitProp={updateListing}
          initialListing={listing}
        />
      )}

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

      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 3,
        gap: 4
      }}>
        <ImageList
          sx={{ width: 450, }}
          cols={5}
          rowHeight={90}
        >
          {listing.images.map((item, i) => (
            <ImageListItem key={i}>
              <img
                src={`${item.imgUrl}?w=100&h=100&fit=crop&auto=format`}
                srcSet={`${item.imgUrl}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  )
}

export default ListingEdit
