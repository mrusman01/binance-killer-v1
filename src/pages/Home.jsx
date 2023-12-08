import React from "react";
import { Box } from "@mui/material";

import HeroSection from "../components/HeroSection";
import Plans from "../components/Plans";
import AllTraders from "../components/AllTraders";
import VipPoints from "../components/VipPoints";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <AllTraders />
      <Plans />
      <VipPoints />
    </Box>
  );
};

export default Home;
