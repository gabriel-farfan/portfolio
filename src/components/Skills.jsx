import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-auto my-20 pt-24 text-[#eeeeee] mt-10 mb-10'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#d8fc37] '>Skills</p>
              <p className='py-4 text-[#eeeeee]'>These are some of the technologies I am currently working with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-[#051F39] shadow shadow-[#A8DADC] mb-4 duration-500 pt-3 rounded-xl'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='bg-[#051F39] shadow shadow-[#A8DADC] mb-4 duration-500 pt-3 rounded-xl'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='bg-[#051F39] shadow shadow-[#A8DADC] mb-4 duration-500 pt-3 rounded-xl'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='bg-[#051F39] shadow shadow-[#A8DADC] mb-4 duration-500 pt-3 rounded-xl'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='bg-[#051F39] shadow shadow-[#A8DADC] duration-500 pt-3 rounded-xl'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='bg-[#051F39] shadow shadow-[#A8DADC] duration-500 pt-3 rounded-xl'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='bg-[#051F39] shadow shadow-[#A8DADC] duration-500 pt-3 rounded-xl'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='bg-[#051F39] shadow shadow-[#A8DADC] duration-500 pt-3 rounded-xl'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
