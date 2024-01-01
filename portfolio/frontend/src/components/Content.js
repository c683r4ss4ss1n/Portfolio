import React from "react";
import Home from "./home/Home";

const Content = () => {
  return (
    <div className="flex flex-col">
      <Home id="content" />
      <Home />
    </div>
  );
};

export default Content;