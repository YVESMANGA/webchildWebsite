import React from 'react';
import AboutI from '../assets/About.svg';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] mx-auto my-4' src={AboutI} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#38b6ff] font-bold md:text-6xl'>A propos </p>
          <h3 className='md:text-xl sm:text-xl text-xl  py-2'><span className='font-bold'>Webchild</span> est une agence digitale spécialisée dans la création de sites internet, la conception de logos, et le design graphique.<br/> Nous accompagnons nos clients dans le développement de leur identité en ligne en leur proposant des solutions sur mesure, innovantes et adaptées à leurs besoins. <br/>Que ce soit pour une entreprise, un commerce en ligne ou un projet personnel, notre équipe met son expertise et sa créativité au service de votre succès. 
            <br />Chez Webchild, nous croyons en l'importance de chaque détail pour bâtir une présence en ligne qui vous ressemble.</h3>
          
        </div>
        

      </div>
    </div>
  );
};

export default About;