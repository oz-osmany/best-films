import React from 'react';
import { Outlet } from 'react-router';
import Nav from './Nav';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#121212_0%,_#1a1a1a_500px,_#000_100%)]">
      <div className="w-[40px] md:w-[50px] lg:w-[60px] h-auto absolute left-[25px] z-10 top-[6px]">
        <img src="../assets/branch.png" alt="branch" />
      </div>
      <header
        className="fixed flex bottom-0 md:top-0 md:bottom-full p-1 md:p-0 w-full
                        bg-gradient-to-t from-gray-900 to-gray-700
                        lg:bg-black/10 lg:bg-none lg:from-none lg:to-none
                         lg:h-[56px]  z-20"
      >
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
