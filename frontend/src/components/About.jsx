import React, { useEffect } from "react";
import img from "../assets/img/myprofile3.png";
import img2 from "../assets/img/resume2.png";
import resume1 from "../assets/img/Resume.jpg"
import img1 from "../assets/img/myprofile1.png";
import logo1 from "../assets/img/js4.png";
import logo2 from "../assets/img/css1.png";
import logo3 from "../assets/img/html2.png";
import logo4 from "../assets/img/wordpress.png";
import logo5 from "../assets/img/java.png";
import logo6 from "../assets/img/jsx.png";
import logo7 from "../assets/img/tailwind.png";
import Pdf from "../assets/Denmark.pdf";
import resume from "../assets/Resume.pdf"
import { Link } from "react-router-dom";



const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-col items-center justify-center md:p-4 p-6 pt-12 bg-neutral-900"
    >
      <div className="text-white text-2xl uppercase font-bold text-center leading-[4rem] md:text-5xl xl:text-7xl md:p-5 md:tracking-wide  md:leading-12 md:text-center md:px-3 xl:pt-12 md:pt-5">
        <p>
          Welcome To My <span class="text-red-600">Website</span>
        </p>
      </div>
      <div className="flex md:flex-col pt-2 pb-1 text-center text-sm text-white text-md font-light leading-6 tracking-widest md:text-lg xl:text-3xl xl:w-1/2 xl:pt-10 md:leading-6">
        <p>
          You may access all of my information from this page simply click read
          more to explore.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:p-2 gap-14 md:pt-8 pt-5 xl:p-12">
        <div className="flex flex-col h-[30rem] text-center text-white font-semi text-2xl md:text-md md:ml-2 md:mr-2  bg-zinc-800 rounded-3xl md:w-[220px] xl:w-[300px] shadow-lg shadow-red-600 hover:shadow-red-500">
          <img
            src={img}
            alt="img3"
            className="w-[320px] shadow-lg rounded-b-[45%] rounded-t-[7%] bg-[url('/bg12.png')]  bg-no-repeat bg-cover  h-[60%] object-cover"
          />
          <div className="flex flex-col items-center justify-center space-y-4 h-44 ">
            <p className="">Me, Myself and I</p>
            <Link
              to="/myself"
              className="py-3 px-4  inline-flex justify-center items-center rounded-3xl border border-transparent font-bold bg-red-600 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 transition-all text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-[30rem] text-center text-white font-semi text-2xl md:text-md  bg-zinc-800 rounded-3xl md:w-[220px] xl:w-[300px] shadow-lg shadow-red-600 hover:shadow-red-500">
          <img
            src={resume1}
            alt="img3"
            className="w-[320px] shadow-lg rounded-b-[45%] rounded-t-[7%] bg-[url('/bg17.png')]  bg-no-repeat bg-cover  h-[60%] object-cover"
          />
          <div className="flex flex-col items-center justify-center space-y-4 h-44">
            <p className="">Resume</p>
            <a
              href={resume}
              target="_blank"
              rel="reopenner"
              className="py-3 px-4  inline-flex justify-center items-center rounded-3xl border border-transparent font-bold bg-red-600 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 transition-all text-sm"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="flex flex-col h-[30rem] text-center text-white font-semi text-2xl md:text-md  bg-zinc-800 rounded-3xl md:w-[220px] xl:w-[300px] shadow-lg shadow-red-600 hover:shadow-red-500">
          <img
            src={img1}
            alt="img3"
            className="w-[320px] shadow-lg rounded-b-[45%] rounded-t-[7%] bg-[url('/bg18.png')]  bg-no-repeat bg-cover  h-[60%] object-cover"
          />
          <div className="flex flex-col items-center justify-center space-y-4 h-44">
            <p className="">Player</p>
            <Link
              to="/player"
              className="py-3 px-4  inline-flex justify-center items-center rounded-3xl border border-transparent font-bold bg-red-600 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 transition-all text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  md:flex-row xl:p-1 xl:pb-6 p-6 md:pb-6 lg:pb-8 text-white items-center justify-center xl:text-7xl md:text-5xl text-2xl font-bold tracking-widest uppercase pt-10 md:leading-10">
        <p>
          My <span className="text-yellow-500">skills</span>
        </p>
      </div>
      <div className="flex flex-row md:flex-row md:w-8 lg:w-10  md:gap-9 lg:gap-14 xl:gap-19 md:pb-5  gap-7 justify-center w-5 md:py-2">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
      </div>
    </div>
  );
};

export default About;
