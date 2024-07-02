import React, { useState } from "react";
import BootstrapImage from "../assets/img/bootsrap1.png";
import Home from "../assets/img/ElearningHome.png";
import Menu from "../assets/img/ElearningMenu.png";
import Contact from "../assets/img/ElearningContact.png";
import Login from "../assets/img/ElearningLogin.png";
import Register from "../assets/img/ElearningRegister.png";
import Details from "../assets/img/ResumeDetails.png";
import Education from "../assets/img/ResumeEducational.png";
import Form from "../assets/img/ResumeHome.png";
import Skills from "../assets/img/ResumeDetails.png";
import Resume from "../assets/img/ResumePDF.png";
import Philore1 from "../assets/img/PhiloreHome.png"
import Philore2 from "../assets/img/PhiloreAbout.png"
import Philore3 from "../assets/img/PhiloreMission.png"
import Philore4 from "../assets/img/PhilorePlace.png"
import Philore5 from "../assets/img/PhiloreContact.png"

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-learning Web Based Project",
      description:
        "A E-learning Web Based Project for kids to learn how to read and visualize ",
      images: [Home, Menu, Contact, Login, Register],
      thumbnail: Home, // Thumbnail image for the project card
    },
    {
      title: "PHILORE Resume App Form",
      description:
        "A resume app created to demonstrate my skills in form handling and PDF generation.",
      images: [Form, Details, Education, Skills, Resume],
      thumbnail: Form, // Thumbnail image for the project card
    },
    {
      title: "Re Designing PHILORE Website",
      description:
        "Example layout for Re-Designing a PHILORE Website",
      images: [Philore1, Philore2, Philore3, Philore4, Philore5],
      thumbnail: Philore1, // Thumbnail image for the project card
    },
    // Add more projects as needed
  ];

  const handleViewMore = (index) => {
    setSelectedProject(index);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
  };

  if (selectedProject !== null) {
    return (
      <div className="flex flex-col items-center justify-center p-6 pt-12 bg-black-800">
        <div className="text-white text-2xl uppercase font-bold text-center leading-[4rem] md:text-5xl xl:text-7xl md:p-1 md:tracking-widest md:leading-4 xl:pt-12 md:pt-6 md:py-5">
          <p>{projects[selectedProject].title}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {projects[selectedProject].images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt=""
              className="w-full h-[350px] object-cover"
            />
          ))}
        </div>
        <button
          className="px-2 py-2 rounded-3xl border border-transparent font-bold bg-red-600 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 transition-all text-sm mt-4"
          onClick={handleBackToPortfolio}
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div
      id="portfolio"
      className="flex flex-col md:flex-col items-center justify-center md:p-4 p-6 pt-12 bg-black-800"
    >
      <div className="text-white text-2xl uppercase font-bold text-center leading-[4rem] md:text-5xl xl:text-7xl md:p-1 md:tracking-widest md:leading-4 xl:pt-12 md:pt-6 md:py-5">
        <p>Portfolio</p>
      </div>
      <div className="flex md:flex-col pt-2 pb-10 text-center text-sm text-white text-md font-normal leading-6 tracking-widest md:text-lg xl:text-3xl xl:w-1/2 xl:pt-10 md:leading-6 md:py-5">
        <p>
          You may view the projects I worked on during my time at college down
          below.
        </p>
      </div>
      <div className="w-full grid p-8 gap-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 bg-[url('/bgp.png')] bg-no-repeat bg-cover">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-t-[3%] rounded-b-[3%] shadow-lg shadow-zinc-600 hover:shadow-zinc-500 pb-6 py-4 px-3 space-y-5 space-x-1 flex-1"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-[350px] object-cover"
            />
            <p>{project.title} :</p>
            <p>{project.description}</p>
            <button
              className="px-2 py-2 rounded-3xl border border-transparent font-bold bg-red-600 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 transition-all text-sm"
              onClick={() => handleViewMore(index)}
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
