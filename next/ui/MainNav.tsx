import React from 'react';
import Navbar from '../components/navbar';
import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu';

const MainNav = () => {
  return (
    <Navbar size='sm' className='flex justify-between items-center p-6'>
      <h1 className='text-white text-xl'>Logo</h1>
      <HamburgerMenu boxStyles='bg-slate-900' lineStyles='h-0.5 bg-slate-500' />
    </Navbar>
  );
};

export default MainNav;
