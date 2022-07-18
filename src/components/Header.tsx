import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Typed from "react-typed";
import pic from "../images/profil.jpeg";

const Header = () => {
  return (
    <Box className="h-[700px] grid">
      <Box className="absolute z-0 w-full">
        <Box className="h-[100%] relative z-0 w-full ">
          <Box className="absolute w-full h-full bg-black/50"></Box>
          <img
            src={pic}
            alt="background"
            className="h-[550px] w-full object-cover top-20 z-0"
          />
        </Box>
      </Box>
      <Box className="z-20 flex flex-col items-end justify-center h-[100%] pt-10 pr-16 md:pt-20">
        <Grid>
        </Grid>
        <p className="font-mono text-xl text-yellow-600 md:text-7xl lg:text-8xlmy-4 ">
          <Typed
            strings={["I'm Youkep Tchinde"]}
            typeSpeed={120} 
            backSpeed={60}
            loop
          />
        </p>
        <Typography variant="h4" className="p-1 text-stone-300">
          <Typed
            strings={["Web Development", "Web Design", "Graphic Design"]}
            typeSpeed={60}
            backSpeed={70}
            loop
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
