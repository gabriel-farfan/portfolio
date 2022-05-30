import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Profile from "../assets/profile.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    // <div name='home' className='w-full h-screen bg-[#0a192f]'>
    <div
      name="home"
      className="sm:-mb-20 flex-col w-full h-auto bg-no-repeat bg-cover bg-fixed flex sm:flex-row "
    >
      {/* Container */}
      <div className="pt-32 sm:py-0 w-2/3 my-auto mx-auto flex flex-col justify-center items-center h-auto ">
        <img src={Profile} alt="Logo" className="w-80" />
        {/* <img src={Profile} pl-8 alt="Logo Image" style={{ width: "15rem" }}  /> */}
      </div>
      <div className="py-8 sm:justify-center w-full max-w-[1000px] mx-auto sm:w-2/3 px-8 flex flex-col sm:min-h-screen  ">
        <p className="text-3xl text-[#A8DADC]">Welcome! My name is</p>
        <h1 className="text-4xl md:text-4xl lg:text-6xl  font-bold text-[#d8fc37] ">
          Gabriel Farfán
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold py-2 text-[#cefcfd]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-xl md:text-2xl text-[#A8DADC] py-2 max-w-[700px]">
          I am looking for an opportunity to start my career in technology.
          Available for new challenges.
        </p>
        <p className="text-xl md:text-2xl text-[#A8DADC] py-2 max-w-[700px]">
          Let's work together!
        </p>
        <div className="pt-4">
          <Link to="work">
            <button className="text-[#d8fc37] border-[#d8fc37] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#051F39] hover:border-[#051F39]">
              <p className="hover:text-[#d8fc37]">View Work </p>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>

          {/* <button className="text-[#d8fc37] border-[#d8fc37] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#051F39] hover:border-[#051F39]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
