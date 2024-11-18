import React from 'react';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#38b6ff] font-bold p-2'>
          DEVENEZ vous memes des DESIGNERS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Decouvrez le monde du web.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            A votre disposition pour:
          </p>
          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#38b6ff]'
            strings={['Website', 'Logo', 'Flyers']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Laissez-vous, seduire et guider par l'univers de Webchild.</p>
        
        <Link to="/services" className='p-4'>
          <button className='bg-[#38b6ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Commencer</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;