import React from 'react'
import { useParams } from "react-router";
import { useEffect, useState } from 'react'
import axios from "axios";
import SingleListingCarousel from '../components/single-listing-components/SingleListingCarousel'

const SingleListing = () => {
  const { id } = useParams()
  const [listing, setListing] = useState({
    // name: '',
    // type: '',
    // numOfBedrooms: '',
    // numOfBathrooms: '',
    // size: '',
    // description: '',
    // price: '',
    // isFeatured: false,
    // address: '',
    // city: '',
    // state: '',
    // zipCode: '',
    // imgUrl: '',
  })

  useEffect(() => {
    getDetails();
  }, [id]);

  const getDetails = () => {
    axios
      .get(`http://localhost:8000/api/listing/${id}`)
      .then((res) => {
        setListing(res.data)
      })
  }


  return (
    <div>
      {/* <h3>{listing.name}</h3> */}
      <SingleListingCarousel images={listing.imgUrl} />


    </div>
  )
}

export default SingleListing
