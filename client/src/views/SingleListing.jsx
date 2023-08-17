import React from 'react'
import { useParams } from "react-router";
import { useEffect, useState } from 'react'
import axios from "axios";

const SingleListing = () => {
  const { id } = useParams()
  const [listing, setListing] = useState({ name: "" })

  useEffect(() => {
    getDetails();
  }, [id]);

  const getDetails = () => {
    axios
      .get(`http://localhost:8000/api/listings/${id}`)
      .then((res) => {
        setListing(res.data)
      })
  }


  return (
    <div>



      <h1>Display something</h1>


    </div>
  )
}

export default SingleListing