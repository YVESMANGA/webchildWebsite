import React from 'react';
import Service from '../assets/service.svg';
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Service} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#38b6ff] font-bold md:text-6xl'>Services</p>
          <h1 className='md:text-2xl sm:text-3xl text-2xl  py-2'>Decouvrez les services que nous proposons</h1>
          
          <Link to="/services">       
             <button className='bg-black text-[#38b6ff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Commencer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;