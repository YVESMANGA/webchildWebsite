import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#38b6ff]'>Webchild</h1>
      <ul className='hidden md:flex'>
        <Link to="/" className='p-4'>
        <li>Acceuil</li>
      </Link>
      <Link to="/services" className='p-4'>
        <li>Services</li>
      </Link>
      <Link to="/About" className='p-4'>
        <li>A_propos</li>
      </Link>
      <Link to="/" className='p-4'>
        <li>Contacts</li>
      </Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#38b6ff] m-4'>Webchild</h1>
          <Link to="/" className='p-4 border-b border-gray-600'><li>Acceuil</li></Link>
          <Link to="/services" className='p-4 border-b border-gray-600'><li>Services</li></Link>
          <Link to="/About" className='p-4 border-b border-gray-600'><li>A_propos</li></Link>
          <Link to="/" className='p-4 border-b border-gray-600'><li>Contacts</li></Link>
          
      </ul>
    </div>
  );
};

export default Navbar;