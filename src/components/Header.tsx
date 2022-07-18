import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Typed from "react-typed";
import pic from "../images/pexels-elvis-2528118.jpg";

const Header = () => {
  return (
    <Box className="relative grid">
      <Box className="absolute w-full z-0">
        <Box className="h-[700px] w-full relative z-0">
          <Box className="h-full w-full bg-black/40 absolute "></Box>
          <img
            src={pic}
            alt="background"
            className="h-[100%] w-full object-cover top-20 z-0"
          />
        </Box>
      </Box>
      <Box className="flex flex-col justify-center items-end pt-36 pr-10 z-20">
        <Grid>
        </Grid>
        <p className="text-yellow-400 text-xl md:text-8xl lg:text-9xl">
          <Typed
            strings={["I Am Youkep Tchinde"]}
            typeSpeed={120} 
            backSpeed={60}
            loop
          />
        </p>
        <Typography variant="h4" className="text-gray-400">
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
