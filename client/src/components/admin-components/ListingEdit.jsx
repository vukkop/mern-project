import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Alert, AlertTitle } from '@mui/material'
import ListingForm from './ListingForm'

const ListingEdit = () => {

  const [listing, setListing] = useState({
    name: '',
    numOfBedrooms: 0,
    description: '',
    price: '',
    imgUrl: '',
  })
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
        navigate('/admin')
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

export default ListingEdit
