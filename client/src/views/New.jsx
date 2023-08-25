import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const New = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const createListing = (listing) => {
    axios.post(`http://${process.env.REACT_APP_API_URL}:8000/api/listings`, listing)
      .then(() => {
        navigate('/')
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
      <h1>New</h1>
    </div >
  )
}

export default New
