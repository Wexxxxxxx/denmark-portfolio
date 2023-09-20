import React from "react";
import Image from "../assets/img/bootsrap1.png";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex flex-col md:flex-col items-center justify-center md:p-4 p-6 pt-12 bg-black-800"
    >
      <div className="text-white text-2xl uppercase font-bold text-center leading-[4rem] md:text-5xl xl:text-7xl md:p-1 md:tracking-widest md:leading-4  xl:pt-12 md:pt-6 md:py-5">
        <p>Portfolio</p>
      </div>
      <div className="flex md:flex-col pt-2 pb-10 text-center text-sm text-white text-md font-normal leading-6 tracking-widest md:text-lg xl:text-3xl xl:w-1/2 xl:pt-10 md:leading-6 md:py-5">
        <p>
          You may view the projects I worked on during my time at college down
          below.
        </p>
      </div>
      <div class="w-full grid p-8 gap-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2   bg-[url('/bgp.png')]  bg-no-repeat bg-cover">
        {Array(6)
          .fill("")
          .map(() => (
            <div className=" bg-zinc-800 rounded-t-[3%] rounded-b-[3%] shadow-lg shadow-zinc-600 hover:shadow-zinc-500  pb-6 py-4 px-3 space-y-5 space-x-1 flex-1">
              <img
                src={Image}
                alt=""
                className="w-full h-[200px] object-cover"
              />
              <p>Bootsrap Website :</p>
              <p>
                My first website, created entirely in bootstrap, includes <br />
                personal information and such.
              </p>
              <button className="px-2 py-2 rounded-3xl border border-transparent font-bold bg-red-600 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 transition-all text-sm">
                View More
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
