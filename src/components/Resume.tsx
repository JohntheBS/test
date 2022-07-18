import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
const Resume = () => {
  return (
    <>
      <Box className="flex justify-center items-center p-6 md:px-36 md:py-20 z-20">
        <Box className="bg-yellow-400 text-white shadow-xl flex flex-col items-center p-4 md:p-10">
          <img src={logo} alt="logo" className="w-36 h-36 rounded-full"/>
          <Typography className="text-center pt-5 capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
            excepturi sapiente magnam minima omnis vero eligendi nobis,
            accusantium amet vel iusto, voluptas perspiciatis sunt reiciendis
            rem ad, quidem laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nam tempore sunt unde dignissimos incidunt? Ab qui
            reiciendis doloribus aut! Inventore nobis molestiae blanditiis
            veniam quisquam cupiditate labore eaque unde deserunt!
          </Typography>
          <Box className="my-20">
            <Button variant="outlined" color="inherit">DOWNLOAD RESUME</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
