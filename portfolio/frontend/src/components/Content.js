import React from "react";
import Home from "./home/Home";
import About from "./About";

const Content = () => {
  return (
    <div className="flex flex-col">
      <Home id="#home" />
      <About id="#about" />
    </div>
  );
};

export default Content;