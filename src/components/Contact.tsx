import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box className="z-20 flex items-center justify-center p-6 md:px-36 md:py-20">
      <Box className="grid justify-between gap-10 p-4 text-orange-500 bg-white shadow-xl md:flex md:p-20">
        <Box>
          <h1 className="mb-4 text-lg md:mb-10 md:text-2xl">CONTACT ME</h1>
          <p className="mb-10 text-justify">
            I am a Web Developper, Click here to add your own text and<br /> edit me.
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </p>
          <div>
            <p>tchindeyoukep@gmail.com</p>
            <p>+237 657 443 611</p>
          </div>
        </Box>
        <Box className="grid gap-5">
          <Box className="flex justify-between gap-5">
            <TextField
              label="Name"
              variant="outlined"
              color="warning"
              size="small"
            />
            <TextField
              label="Email"
              variant="outlined"
              color="warning"
              size="small"
            />
          </Box>
          <TextField
            label="Phone"
            variant="outlined"
            color="warning"
            size="small"
          />
          <textarea className="h-40 border border-gray-400 focus:outline-red-300"></textarea>
          <Button variant="contained" color="warning">
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
