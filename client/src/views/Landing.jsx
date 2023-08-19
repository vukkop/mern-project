import React, { useEffect, useState } from "react";
import axios from "axios";
import { deleteById } from "../Utils/UtilsFunc";
import NavBar from "../components/global-components/nav-bar/NavBar"
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import Hero from "../components/landing-components/Hero";

const Landing = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

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
  return (
    <div>
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default Landing
