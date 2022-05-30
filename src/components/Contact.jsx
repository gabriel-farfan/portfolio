import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div name='contact' className='pt-32 w-full h-auto flex justify-center items-center p-4  flex-col '>
      <p className='text-4xl font-bold inline border-b-4 border-[#d8fc37] text-[#eeeeee]'>Contact</p>
      <a href='https://drive.google.com/drive/folders/1W02HL9h6_m_mizb9C2yIInmxUvwiprK7?usp=sharing' target="_blank" rel="noreferrer" className='mt-4'>
          <button className="text-[#d8fc37] font-bold border-[#d8fc37] border-2 px-6 py-3 my-2 flex items-center bg-[#051F39] hover:bg-[#4293e4]">
              <p className="hover:text-[#d8fc37]">CV Download </p>
          </button>
      </a>

      <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-8 flex-row mx-36 ">
          <div>
            <a
              href="https://www.linkedin.com/in/gabriel-farfan/">
              <FaLinkedin className="w-16 h-auto mx-auto" />
            </a>
          </div>

          <div>
            <a href="https://github.com/gabriel-farfan/">
              <FaGithub className="w-16 h-auto mx-auto" />
            </a>
          </div>

          <div>
            <a href="https://wa.me/+5493516101945">
              <FaWhatsapp className="w-16 h-auto mx-auto" />
            </a>
          </div>

        </div>

        <form method='POST' action="https://getform.io/f/65c41083-9916-4ef2-a04e-249c93727d6e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                
                <p className='text-[#eeeeee] py-4'>Submit the form below or shoot me an email - <span className='font-bold text-[#051F39]'>gmfarfan85@gmail.com</span></p>
            </div>
            <input className='bg-[#eeeeee] p-2' type="text"  placeholder='Name' name='name' required/>
            <input className='my-4 p-2 bg-[#eeeeee]' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-[#eeeeee] p-2' name="message" rows="8" placeholder='Message' required></textarea>
            <button className='text-[#051F39] border-[#051F39] border-2 hover:bg-[#051F39] hover:text-[#d8fc37] hover:border-[#d8fc37] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
        
    </div>
  )

}

export default Contact