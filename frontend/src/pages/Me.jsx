import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Inquiries from "../components/Inquiries";

const Me = () => {
  return (
    <div>
      <div className="bg-[url('/official.png')] bg-no-repeat bg-cover">
        <Navbar />
        <Home />
      </div>
      <About />
      <Portfolio />
      <Inquiries />
    </div>
  );
};

export default Me;
