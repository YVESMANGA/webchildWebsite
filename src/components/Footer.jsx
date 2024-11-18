import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#38b6ff]'>Webchild</h1>
        <p className='py-4'>Avec webchild, soyez le designer, l'artiste, le createur de vos produits.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            
            
            <a
            href="https://wa.me/221764757340"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
        >
            <FaWhatsapp size={30} />
        </a>

        <a
            href="mailto:yvesmanga@proton.me"
            className="text-red-500"
            target="_blank"
            rel="noopener noreferrer"
        >
            <SiGmail size={30} />
        </a>


          
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    
    
    
    
      </div>
    </div>
  );
};

export default Footer;