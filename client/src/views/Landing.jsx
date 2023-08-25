import React from "react";
import Hero from "../components/landing-components/Hero";

const Landing = () => {

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
