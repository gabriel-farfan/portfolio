import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen pt-20 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/65c41083-9916-4ef2-a04e-249c93727d6e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#d8fc37] text-[#eeeeee]'>Contact</p>
                <p className='text-[#eeeeee] py-4'>Submit the form below or shoot me an email - <span className='font-bold text-[#051F39]'>gmfarfan85@gmail.com</span></p>
            </div>
            <input className='bg-[#eeeeee] p-2' type="text"  placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#eeeeee]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#eeeeee] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#051F39] border-[#051F39] border-2 hover:bg-[#051F39] hover:text-[#d8fc37] hover:border-[#d8fc37] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )

}

export default Contact