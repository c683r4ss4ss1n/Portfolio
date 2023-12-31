import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./home.css"; // Ensure correct file name here
import "../fonts/CBRT.ttf";


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
    // Show the background image when scrolling back to the top
    if (window.scrollY <= 0) {
      document.querySelector(".home-container").style.background = `url('https://themewagon.github.io/meyawo/assets/imgs/header.jpg')`;
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
      className="home-container bg-cover bg-no-repeat"
      style={{ position: "relative" }}
    >
      <div className="left-cell">
        <p className="text-8xl font-bold">Hi!</p>
        <br />
        <p className="text-6xl font-bold">I'm</p>
        <p className="text-4xl font-extrabold text-yellow-600">
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
      </div>

      <div className="right-cell">
        <h1 className="text-3xl font-bold">Right Cell Content</h1>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default Home;
