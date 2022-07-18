import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { IoMdNotifications } from "react-icons/io";
import { MdNightlight } from "react-icons/md"
import pic1 from "../images/WhatsApp Image 2022-07-17 at 8.01.40 AM.jpeg";
import logo from "../images/logo.png";
import {
  MemoryRouter,
  // Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

const Navbar2 = () => {
  function Router(props: { children?: React.ReactNode }) {
    const { children } = props;
    if (typeof window === "undefined") {
      return <StaticRouter location="/drafts">{children}</StaticRouter>;
    }

    return (
      <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}>
        {children}
      </MemoryRouter>
    );
  }

  function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  }

  function MyTabs() {
    // You need to provide the routes in descendant order.
    // This means that if you have nested routes like:
    // users, users/new, users/edit.
    // Then the order should be ['users/add', 'users/edit', 'users'].
    const routeMatch = useRouteMatch([
      "/inbox/:id",
      "/drafts",
      "/trash",
      "/contact",
    ]);
    const currentTab = routeMatch?.pattern?.path;

    return (
      <Tabs
        value={currentTab}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="Home" value="/inbox/:id" to="/inbox/1" component={Link} />
        <Tab
          label="Professional"
          value="/drafts"
          to="/drafts"
          component={Link}
        />
        <Tab label="About" value="/trash" to="/trash" component={Link} />
        <Tab label="Contact" value="/contact" to="/contact" component={Link} />
      </Tabs>
    );
  }

  return (
    <>
      <Box className="hidden sm:block">
        <AppBar>
          <Toolbar className="flex justify-between bg-white">
            <img src={logo} alt="logo" className="h-20 w-36"/>
            <Box className="flex">
              <Router>
                <Box sx={{ width: "100%" }}>
                  <Routes>{/* <Route path="*" element={} /> */}</Routes>
                  <MyTabs />
                </Box>
              </Router>
              <IconButton>
                <IoMdNotifications />
              </IconButton>
              <IconButton>
                <MdNightlight />
              </IconButton>
              <img src={pic1} alt="pic1" className="h-10 w-10 rounded-full" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar2;
