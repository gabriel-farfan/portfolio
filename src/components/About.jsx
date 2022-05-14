import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-auto pt-24 sm:mb-32  text-[#051F39]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#d8fc37]'>
              About me...
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-2xl sm:text-right sm:text-4xl font-bold 051F39'>
              <p className='text-[#eeeeee]'>Hi. I'm Gabriel, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='sm:text-2x1 text-[#051F39] font-bold  '>I am passionate about building software that improves
              the lives of people. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
