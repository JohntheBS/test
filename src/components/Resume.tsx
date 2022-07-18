import { Box, Button } from "@mui/material";
import React from "react";
import logo from "../images/logo.jpg";
const Resume = () => {
  return (
    <>
      <Box className="z-20 flex items-center justify-center p-6 md:px-36 md:py-20">
        <Box className="flex flex-col items-center p-4 text-orange-500 bg-white shadow-xl md:p-10">
          <img src={logo} alt="logo" className="rounded-full w-52 h-52" />
          <p className="pt-5 text-center capitalize text-md md:text-3xl">
            Hi! I am Youkep Tchinde. I am a Web Developper & graphic designer based
            in Cameroon, Yaounde working on Graphic Design, visual identities, editorial
            design and web design.
          </p>
          <Box className="my-10 md:my-20">
            <Button variant="outlined" color="inherit" size="large">
              DOWNLOAD RESUME
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
