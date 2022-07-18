import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { FaBars, FaHome, FaPhoneSquare, FaRegAddressBook } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import pic1 from "../images/WhatsApp Image 2022-07-17 at 8.01.40 AM.jpeg";
import logo from "../images/logo.png"


const Navbar = () => {
  type Anchor = 'left';

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Professional"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FaHome className="text-2xl"/> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About", "Contact",].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FaRegAddressBook className="text-2xl" /> : <FaPhoneSquare className="text-2xl" />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box className="block sm:hidden">
        <AppBar>
          <Toolbar className="bg-white flex justify-between">
            {(["left"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)} className=""><FaBars /></IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Box className="text-stone-500 flex items-center">
              <img src={logo} alt="logo"  className="w-20 h-14"/>
              <IconButton>
                <MdNightlight />
              </IconButton>
              <img src={pic1} alt="pic1" className="h-7 w-7 rounded-full" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
