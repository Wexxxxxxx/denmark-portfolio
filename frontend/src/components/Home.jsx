import React from "react";
import img from "../assets/img/image11.png";
import Lottie from "lottie-react";
import animationData from "../assets/animation/Animation - 1721558916891.json";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const phoneRef = useRef(null);
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center items-center md:p-12 pt-6 md:pt-0"
    >
      <div className="w-full md:w-7/12 justify-center mt-32 items-center flex xl:text-6xl lg:text-4xl md:text-3xl text-2xl text-center md:text-start">
        <p className="text-white font-bold xl:leading-[70px] lg:leading-[50px] md:leading-[40px] -tracking-wider">
          HELLO, I'M <span className="text-red-600">DENMARK </span>
          <br></br>
          <div className="-tracking-wider">
            <TypeAnimation
              sequence={[
                `A WEB DEVELOPER,`,
                `A PROGRAMMER,`,
                `A UX/DESIGNER.`,
                600,
                "",
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </p>
      </div>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <Lottie
          onComplete={() => {
            phoneRef.current?.goToAndPlay(45, true);
          }}
          lottieRef={phoneRef}
          
          animationData={animationData}
          className="hidden sm:block w-[450px] md:w-[350px] lg:w-[750px]"
        />
      </div>
    </div>
  );
};

export default Home;
