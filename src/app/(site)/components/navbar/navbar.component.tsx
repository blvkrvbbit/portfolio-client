'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../assets/images/logo-purple.svg';
import { useEffect, useState } from 'react';
import './navbar.styles.css';

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const links = [
    ['#', 'home'],
    ['#works', 'works'],
    ['#about', 'about'],
    ['#contact', 'contact'],
  ];

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menu]);
  return (
    <header className=' bg-smoky-black fixed left-0 right-0 z-50'>
      <nav className='container  flex justify-between py-4 items-center'>
        <div className='navbar-brand'>
          <Link href='#'>
            <Image src={Logo} height={50} width={50} alt='Logo' />
          </Link>
        </div>
        <div className='hamburger lg:hidden' onClick={toggleMenu}>
          <span className='bg-white rounded-full'></span>
          <span className='bg-white rounded-full'></span>
          <span className='bg-white rounded-full'></span>
        </div>
        <div className='space-x-4 hidden lg:block'>
          {links.map((l, key) => (
            <Link className='text-md' key={key} href={l[0]}>
              {l[1]}
            </Link>
          ))}
        </div>
      </nav>
      <div
        className={`mobile-menu z-50  fixed top-[4.15rem]  flex flex-col justify-center items-end px-[1.5rem] right-0 w-full lg:hidden ${
          menu ? 'open ' : ''
        }`}
      >
        <>
          {links.map((link, key) => (
            <Link
              href={link[0]}
              key={key}
              className='   text-right text-3xl block mb-2'
              onClick={toggleMenu}
            >
              <span className='text-gray opacity-[0.15]'>.</span>
              {link[1]}
              <span className='text-gray opacity-[0.15]'>()</span>
            </Link>
          ))}
        </>
      </div>
    </header>
  );
};

export default Navbar;
