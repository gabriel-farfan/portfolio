import React from "react";

const About = () => {
  return (
    <div name="about" className="pt-24 w-full h-auto sm:pt-24 sm:mb-20  text-[#051F39]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#d8fc37]">
              About me...
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-2xl sm:text-right sm:text-4xl font-bold 051F39">
            <p className="text-[#eeeeee]">
              Hi ! nice to meet you. Thanks for your visit.
            </p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl text-[#051F39] font-bold  ">
              I am passionate about learning constantly. I am motivated by
              challenges and working in a team. I have the ability to
              communicate, motivate and help whoever needs it. My goal is to
              work with commitment and responsibility, to be a better
              professional every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
