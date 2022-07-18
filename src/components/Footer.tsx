import { Box, List, ListItemText, ListItemIcon,ListItem } from "@mui/material";
import React from "react";
import { FaFacebook, FaGoogle, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box className="p-4 text-white bg-orange-500 ">
        <Box className="flex gap-20 p-16">
          <Box>
            <h1 className="text-2xl">Subscribe</h1>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <FaGoogle />
                </ListItemIcon>
                <ListItemText>tchindeyoukep@gmal.com</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <FaFacebook />
                </ListItemIcon>
                <ListItemText>fayocoders</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <FaWhatsapp />
                </ListItemIcon>
                <ListItemText>+237 657 443 611</ListItemText>
              </ListItem>
            </List>
          </Box>
          <Box className="p-10">
            <h1 className="text-2xl">About</h1>
            <p>I am a Web Developper based in Cameroon,Douala,I offer:Web Developmment, Web Design, Graphic Design and much more at very affortable prices</p>
          </Box>
        </Box>
        <div className="text-center text-gray-500">
          2023 by Tchinde Youkep, copyright Reserved
        </div>
      </Box>
    </>
  );
};

export default Footer;
