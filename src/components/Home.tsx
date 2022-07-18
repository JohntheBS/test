import React from "react";
import Header from "../components/Header";
import Contact from "./Contact";
import Resume from "./Resume";
const Home = () => {
  return (
    <div className="grid">
      <br />
      <br />
      <Header />
      <Resume />
      <Contact />
    </div>
  );
};

export default Home;
