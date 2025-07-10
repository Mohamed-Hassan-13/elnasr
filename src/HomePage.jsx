import React from "react";
import Contact from "./Components/Contact";
import Equipment from "./Components/Equipment";
import About from "./Components/About";
import Hero from "./Components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Equipment />
      <Contact />
    </>
  );
};

export default HomePage;
