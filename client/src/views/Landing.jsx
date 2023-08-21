import React, { useEffect, useState } from "react";
import axios from "axios";
import { deleteById } from "../Utils/UtilsFunc";
import NavBar from "../components/global-components/nav-bar/NavBar"
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../context/theme";
import Hero from "../components/landing-components/Hero";

const Landing = () => {
  const [listingList, setListingList] = useState([]);
  const [toaster, setToaster] = useState('');
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


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

  const mainFeaturedPost = {
    title: "It's about your lifestyle...",
    description:
      "Turning dreams into addresses. Where Every House Becomes a Home and Every Client a Friend. Discovering Space, Creating Memories your Real Estate Partner.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

  return (
    <div>
      <Hero post={mainFeaturedPost}/>
    </div>
  )
}

export default Landing
