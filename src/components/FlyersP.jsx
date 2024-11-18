import React from 'react';
import Flyers from '../assets/Flyers.svg';

import { FaWhatsapp } from 'react-icons/fa';


const FlyersP = () => {
  return (
    <div className='w-full bg-[#E5E8EA] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Flyers} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#38b6ff] font-bold md:text-4xl'>Des Flyers sur mesure.</p>
          <h1 className='md:text-2xl sm:text-3xl text-xl  py-2'>Un flyer est un support de communication imprimé, souvent de petit format, utilisé pour promouvoir un produit, un service, un événement ou une entreprise. C’est un outil marketing simple,
             économique et efficace pour toucher un large public en distribuant des informations de manière rapide et visuelle.</h1>
          

          
          <p>Nous contactez pour en savoir plus et faire votre commande:</p>
          <div className='flex justify-between md:w-[75%] my-6'>
          <a
            href="https://wa.me/221764757340"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
        >
            <FaWhatsapp size={30} />
        </a>
            
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default FlyersP;