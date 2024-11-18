import React from 'react';
import logo from '../assets/logos.svg';

import { FaWhatsapp } from 'react-icons/fa';


const LogosP = () => {
  return (
    <div className='w-full bg-[#E5E8EA] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={logo} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#38b6ff] font-bold md:text-4xl'>Personnaliser vous, votre entreprise avec votre propre marque !</p>
          <h1 className='md:text-2xl sm:text-3xl text-xl  py-2'>Un logo est un symbole graphique, une marque ou une icône qui sert à identifier visuellement une entreprise, une organisation, un produit, ou une marque. C'est un élément clé de l'identité visuelle d'une entité, 
            conçu pour être reconnaissable instantanément et pour transmettre des valeurs, une image ou un message.</h1>
          

          
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

export default LogosP;