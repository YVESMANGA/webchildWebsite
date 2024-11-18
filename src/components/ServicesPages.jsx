import React from 'react';
import ServiceI from '../assets/serviceIllustration.svg';
import { FaCode } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaSheetPlastic } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';




const ServicesPages = () => {
  return (
    <div className='bg-white w-full'>
     
      <div className='flex items-center justify-center h-[50vh] bg-black'>
        
        <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#38b6ff]'
            strings={['Faites votre choix avec nos differents services']}
            typeSpeed={100}
            backSpeed={20}
            loop
          />
      </div>

      
      <div className='flex items-center justify-center max-w-[800px] mx-auto p-4'>
            <div className='grid grid-rows-2 md:grid-cols-2 '>
                {/* Première ligne : image */}
                    <div className='flex items-center justify-center md:col-span-2'>
                    <img className='w-[500px] mx-auto my-4' src={ServiceI} alt='Service' />
                    </div>

                {/* Deuxième ligne : services */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-[320px]'>
                            <div className='flex flex-col justify-center items-center text-center md:items-start md:text-left '>
                                <FaCode className='w-20 h-20 mx-auto my-4' />
                                <p className='text-[#38b6ff] font-bold md:text-4xl'>Websites</p>
                                <Link to="/website">
                                    <button className='bg-black text-[#38b6ff] w-[150px] sm:w-[200px] rounded-md font-medium my-6 py-3'>Commencer</button>

                                </Link>
                            </div>

                            <div className='flex flex-col justify-center items-center text-center md:items-start md:text-left'>
                                <IoMdPhotos className='w-20 h-20 mx-auto my-4' />
                                <p className='text-[#38b6ff] font-bold md:text-4xl'>Logos</p>
                                <Link to="/logos">
                                    <button className='bg-black text-[#38b6ff] w-[150px] sm:w-[200px] rounded-md font-medium my-6 py-3'>Commencer</button>

                                </Link>
                            </div>

                            <div className='flex flex-col justify-center items-center text-center md:items-start md:text-left'>
                                <FaSheetPlastic className='w-20 h-20 mx-auto my-4' />
                                <p className='text-[#38b6ff] font-bold md:text-4xl'>Flyers</p>
                                <Link to="/flyers">
                                    <button className='bg-black text-[#38b6ff] w-[150px] sm:w-[200px] rounded-md font-medium my-6 py-3'>Commencer</button>

                                </Link>
                            </div>
                    </div>
            </div>
       </div>


    </div>

    
  );
};

export default ServicesPages;
