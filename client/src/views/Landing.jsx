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

  const mainFeaturedPost = {
    title: "It's about your lifestyle...",
    description:
      "Turning dreams into addresses. Where Every House Becomes a Home and Every Client a Friend. Discovering Space, Creating Memories your Real Estate Partner.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

// 1. "Unlocking Doors to Your Dream Home and a Bright Future."
// 2. "Where Every House Becomes a Home and Every Client a Friend."
// 3. "Elevating Real Estate, One Exceptional Property at a Time."
// 4. "Your Trust, Our Priority – Navigating Your Real Estate Journey."
// 5. "Discovering Space, Creating Memories – Your Real Estate Partner."
// 6. "Opening New Doors to Endless Possibilities in Real Estate."
// 7. "From Listings to Lifelong Connections – Your Real Estate Family."
// 8. "Guiding Your Path to Prosperity through Premier Real Estate."
// 9. "Real Estate Expertise, Personalized for Your Unique Journey."
// 10. "Investing in Your Tomorrow, Today – Your Real Estate Ally."

  return (
    <div>
      <NavBar />
      <Hero post={mainFeaturedPost}/>
    </div>
  )
}

export default Landing
