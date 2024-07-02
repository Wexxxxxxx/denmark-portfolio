import React from "react";
import Img from "../assets/img/varsity4.jpg";
import Img2 from "../assets/img/varsity5.jpg";
import Img3 from "../assets/img/varsity6.jpg";
import Img4 from "../assets/img/varsity7.jpg";
import Img5 from "../assets/img/varsity8.jpg";
import Img6 from "../assets/img/Varsity1.jpg";

const Player = () => {
  return (
    <div className="flex flex-col md:flex-col items-center justify-center md:p-4  p-12  bg-[url('/backgroundgear.png')]  bg-no-repeat bg-cover  ">
      <div className="text-white text-2xl uppercase font-black text-center justify-center items-center leading-[2rem] md:text-5xl xl:text-7xl md:p-5 md:tracking-wide  md:text-center md:px-3 xl:pt-12 md:pt-5 pb-5">
        <p>
          TUP-M MLBB VARSITY <span className="text-red-500">PLAYER</span>
        </p>
      </div>
      <div className="flex flex-col text-sm md:text-2xl md:mx-20 items-center justify-center text-center leading-6 md:leading-8 lg:leading-10">
        <p>
          Being a varsity athlete while simultaneously excelling in your studies
          is difficult. I'm excited to be participating in all of the
          tournaments and other events as a varsity player after making great
          progress in that regard. I will highlight any amateur-level
          achievements I have made on this website in addition to my
          accomplishments as a Varsity player at TUP Manila.
        </p>
      </div>
      <div className="grid grid-cols-1 max-md-grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 ">
        <div className="">
          <img
            className="h-auto w-[500px] rounded-lg shadow-lg shadow-red-600 hover:shadow-red-500"
            src={Img}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto w-[500px] rounded-lg shadow-lg shadow-red-600 hover:shadow-red-500"
            src={Img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto w-[500px] rounded-lg shadow-lg shadow-red-600 hover:shadow-red-500"
            src={Img3}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto w-[500px] rounded-lg shadow-lg shadow-red-600 hover:shadow-red-500"
            src={Img4}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto w-[500px] rounded-lg shadow-lg shadow-red-600 hover:shadow-red-500"
            src={Img5}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto w-[500px] rounded-lg shadow-lg shadow-red-600 hover:shadow-red-500"
            src={Img6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
