import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./home.css"; // Ensure correct file name here
import { LuMailQuestion } from "react-icons/lu";
import {FaHandPointRight} from "react-icons/fa"
const Home = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [texts] = useState([
    "Programmer",
    "Junior Network Engineer",
    "Ethical Hacker",
    "Web Developer",
    "Gamer",
  ]);
  const [textIndex, setTextIndex] = useState(0);
  const h1Ref = useRef(null);

  const scrollSpring = useSpring({
    opacity: Math.min(1, window.scrollY / 500),
    textColor: window.scrollY > 250 ? "#ffffff" : "#000000",
  });

  const handleScroll = () => {
    const scrollValue = window.scrollY;
    const homeContainer = document.getElementById("background");

    if (homeContainer) {
      // Calculate background opacity based on scroll position
      const opacity = Math.min(1, scrollValue / 500);

      // Apply background color and opacity to the home container
      homeContainer.style.background = `rgba(24, 26, 27, ${opacity})`;

      // Show the background image when scrolling back to the top
      if (scrollValue <= 0) {
        homeContainer.style.background = `url('https://themewagon.github.io/meyawo/assets/imgs/header.jpg')`;
      }
    }
  };

  useEffect(() => {
    let interval = null;
    const currentH1Ref = h1Ref.current;

    const startAnimation = () => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        if (currentH1Ref) {
          currentH1Ref.innerText = currentH1Ref.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return currentH1Ref.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= currentH1Ref.dataset.value.length) {
            clearInterval(interval);

            // Show the same text for 2 seconds after animation
            setTimeout(() => {
              setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 2000);
          }

          iteration += 1 / 3;
        }
      }, 60);
    };

    startAnimation();

    // Listen for scroll events
    window.addEventListener("scroll", () => {
      handleScroll();
      scrollSpring.opacity.set(Math.min(1, window.scrollY / 500));
      scrollSpring.textColor.set(window.scrollY > 250 ? "#ffffff" : "#000000");
    });

    // Initial setup to show the background image
    handleScroll();

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [texts, textIndex, letters, scrollSpring]); // Added texts, textIndex, letters, and scrollSpring to the dependency array

  return (
    <div
      id="background"
      className="home-container"
      style={{ position: "relative" }}
    >
      <div className="left-cell">
        <p className="text-8xl font-bold text-gray-300">Hi!</p>
        <br />
        <p className="text-6xl font-bold text-gray-300">I'm</p>
        <p className="text-4xl font-extrabold text-gray-300">
          R Rafiou Khan Eshan
        </p>
        <br />

        <animated.h1
          id="#animatedText"
          className="text-4xl font-bold font-CBRT"
          ref={h1Ref}
          data-value={texts[textIndex]}
          style={{
            color: scrollSpring.textColor,
          }}
        >
          {texts[textIndex]}
        </animated.h1>
        <div className="flex gap-4">
          <button className="mt-4 gap-2 flex justify-center align-middle border-2 border-violet-600 pr-10 hover:pr-5 transition-all duration-300 hover:pl-5 py-1 rounded-full text-white hover:text-violet-500 bg-violet-600 hover:bg-[rgba(0,0,0,0.7)] shadow-sm hover:shadow-md shadow-violet-300">
            <LuMailQuestion size={25} className="text-violet-600 mt-1" />
            <a href="#contact" className="text-lg font-semibold italic">
              Contact Me
            </a>
          </button>
          <button className="mt-4 gap-2 flex justify-center align-middle border-2 border-violet-600 pl-10 hover:pr-5 transition-all duration-300 hover:pl-5 py-1 rounded-full text-white hover:text-violet-500 bg-violet-600 hover:bg-[rgba(0,0,0,0.7)] shadow-sm hover:shadow-md shadow-violet-300">
            <a href="#contact" className="text-lg font-semibold italic">
              Follow On Social Media
            </a>
            <FaHandPointRight size={25} className="text-violet-600 mt-1" />
          </button>
        </div>
        <div className="flex flex-col text-center align-middle justify-center">
            <p className="text-lg font-semibold pt-4">Made by hackers</p>
            <p className="text-lg font-semibold pt-4">Presented by Professionals</p>
        </div>
      </div>

      <div className="right-cell">
        <h1 className="text-3xl font-bold">Right Cell Content</h1>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default Home;
