import React, { useEffect, useState } from "react";
import axios from "axios";
import { deleteById } from "../Utils/UtilsFunc";
import NavBar from "../components/global-components/nav-bar/NavBar"

const Landing = () => {

  const [listingList, setListingList] = useState([]);
  const [toaster, setToaster] = useState('');

  useEffect(() => {
    getList();
  }, []);

  const removeOne = (id, name = "item") => {
    deleteById(id)
    setListingList((current) => current.filter(el => el._id !== id))
    setToaster(`Successfully deleted ${name}.`)
    setTimeout(() => {
      setToaster('');
    }, 4000);
  }

  const getList = () => {
    axios
      .get("http://localhost:8000/api/listings/all")
      .then((res) => {
        setListingList(res.data)
      }).catch((err) => console.log(err))
  }
  // will finish it when i want
  return (
    <div>
      <NavBar/>
    </div>
  )
}

export default Landing
