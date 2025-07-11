import React from "react";
import Contact from "./Components/Contact";
import Equipment from "./Components/Equipment";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Equipment />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;
