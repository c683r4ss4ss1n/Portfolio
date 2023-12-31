import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import "./App.css";

const App = () => {
  const handleScroll = () => {
    const scrollValue = window.scrollY;
    const body = document.querySelector("body");

    if (body) {
      const backgroundColor = `rgba(24, 26, 27, ${Math.min(scrollValue / 100, 1)})`;

      body.style.transition = "background 1s ease";
      body.style.backgroundColor = backgroundColor;
    }
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col scroll-smooth focus:scroll-auto">
      <Nav />
      <Content />
    </div>
  );
};

export default App;
