import React from 'react';
import Vitrine from '../assets/vitrine.svg';
import Ecommerce from '../assets/e-commerce.svg';

import { FaWhatsapp } from 'react-icons/fa';


const WebsiteP = () => {
  return (
    <div className='w-full bg-[#E5E8EA] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Vitrine} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#38b6ff] font-bold md:text-6xl'>Sites Vitrines</p>
          <h1 className='md:text-2xl sm:text-3xl text-xl  py-2'>Un site vitrine est un type de site web qui sert principalement à présenter une entreprise, un service, un produit, ou un projet. 
            Il permet de montrer des informations clés de manière simple et claire.</h1>
          <p>Exemples de sites vitrines:</p>
         
          <a href="https://www.apple.com" className="text-blue-500 hover:text-blue-700 ">Site d'Apple</a>
          <a href="https://www.airbnb.com" className="text-blue-500 hover:text-blue-700 ">Site de Airbnb</a>
          <a href="https://www.nike.com" className="text-blue-500 hover:text-blue-700 ">Site de Nike</a>

          
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

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 bg-white'>
        <img className='w-[500px] mx-auto my-4' src={Ecommerce} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#38b6ff] font-bold md:text-6xl'>Sites E-commerce</p>
          <h1 className='md:text-2xl sm:text-3xl text-xl  py-2'>Un site e-commerce (ou site de commerce en ligne) est un site web conçu pour permettre l'achat et la vente de produits ou services via Internet.
             Il permet aux entreprises de vendre leurs produits directement aux consommateurs (B2C), ou parfois entre entreprises (B2B), de manière totalement numérique.</h1>
          
             <p>Exemples de sites vitrines:</p>
         
         <a href="https://www.amazon.com" className="text-blue-500 hover:text-blue-700 ">Site d'Amazon</a>
         <a href="https://www.etsy.com" className="text-blue-500 hover:text-blue-700 ">Site d'Etsy</a>
         <a href="https://www.alibaba.com" className="text-blue-500 hover:text-blue-700 ">Site d'Alibaba</a>

         
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

export default WebsiteP;