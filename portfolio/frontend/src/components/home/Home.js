import React, { useEffect, useRef, useState } from "react";
import '../../fonts/CBRT.ttf';

const Home = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [texts] = useState(["Programmer", "Junior Network Engineer", "Ethical Hacker", "Web Developer", "Gamer"]);
  const [textIndex, setTextIndex] = useState(0);
  const h1Ref = useRef(null);

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

    return () => {
      clearInterval(interval);
    };
  }, [texts, textIndex]); // Added texts and textIndex to the dependency array

  return (
    <div className="flex h-screen w-full">
      <div className="flex lg:flex-row w-full md:flex-col sm:flex-col xs:flex-col">
        {/* Left Cell */}
        <div className="flex-1 flex items-center justify-center bg-gray-200">
          {/* Content in Left Cell */}
          <div className="text-center">
            <h1 className="text-5xl font-bold lg:text-6xl xl:text-7xl">Hi,</h1>
            <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">I'm a</h1>
            <h2 className="text-4xl font-black lg:text-2xl xl:text-4xl font-CBRT" ref={h1Ref} data-value={texts[textIndex]}>
              {texts[textIndex]}
            </h2>
          </div>
        </div>

        {/* Right Cell */}
        <div className="flex-1 flex items-center justify-center bg-gray-300">
          {/* Content in Right Cell */}
          <div className="text-center">
            <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl">Right Cell Content</h1>
            {/* Add more content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
