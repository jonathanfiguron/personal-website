import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Profile from '../assets/profile.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-row justify-between h-full'>
        <div className='flex flex-col justify-center'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6]'>
            JONATHAN FIGURON
          </h1>
          <h2 className='text-1xl sm:text-3xl font-bold text-[#8892b0]'>
            I'm BS in Computer Science Student.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[600px]'>
            "Hello everyone! I'm delighted to have this opportunity to introduce myself.
             I am currently a 3rd-year college student pursuing a Bachelor of Science degree in Computer Science. 
             My passion for technology and its limitless possibilities has led me down this exciting path of learning and exploration.
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
        <figure className='flex items-center justify-center h-[550px]'>
          <img src={Profile} className='w-[450px]' alt='hero' />
        </figure>
      </div>
    </div>
  );
};

export default Home;