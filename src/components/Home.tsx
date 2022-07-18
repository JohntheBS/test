import React from "react";
import Header from "../components/Header";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";
const Home = () => {
  return (
    <div className="grid">
      <br />
      <br />
      <Header />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
