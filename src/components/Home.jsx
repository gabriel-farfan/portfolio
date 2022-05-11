import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Profile from "../assets/profile.png";
const Home = () => {
  return (
    // <div name='home' className='w-full h-screen bg-[#0a192f]'>
    <div
      name="home"
      className=" w-full h-auto bg-no-repeat bg-cover bg-fixed flex "
    >
      {/* Container */}
      <div className="w-1/3 mx-auto flex flex-col justify-center items-center h-auto min-h-screen " >

        <img src={Profile} pl-8 alt="Logo Image" style={{ width: "15rem" }} />
      </div>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center min-h-screen w-2/3 " >
        <p className="text-2xl text-[#A8DADC]">Hi! my name is</p>
        <h1 className="md:text-4xl lg:text-6xl  font-bold text-[#d8fc37] ">
          Gabriel Farfán
        </h1>
        <h2 className="sm:text-3xl lg:text-4xl  font-bold py-2 text-[#cefcfd]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-xl md:text-2xl text-[#A8DADC] py-2 max-w-[700px]">
          I’m specializing in building digital experiences. Currently, I’m focused on building responsive full-stack
          ecommerce and web applications.
        </p>
        <div className="pt-4">
          <button className="text-[#d8fc37] border-[#d8fc37] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#051F39] hover:border-[#051F39]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
