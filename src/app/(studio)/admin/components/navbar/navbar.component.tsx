'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../../assets/images/logo-purple.svg';
import { useEffect, useState } from 'react';
import './navbar.styles.css';

const Navbar = () => {
  const { data: session } = useSession();
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const links = [['/admin', 'home']];

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menu]);
  return (
    <header className='light-theme fixed left-0 right-0 z-50'>
      <nav className='container  flex justify-between py-4 items-center'>
        <div className='navbar-brand'>
          <Image src={Logo} height={50} width={50} alt='Logo' />
        </div>
        <div className='hamburger lg:hidden' onClick={toggleMenu}>
          <span className='bg-black'></span>
          <span className='bg-black'></span>
          <span className='bg-black'></span>
        </div>
        <div className='space-x-4 hidden lg:block'>
          {!session ? (
            <>
              <Link href='/admin/register'>register</Link>
              <Link href='/admin/login'>login</Link>
            </>
          ) : (
            <>
              <Link href='/admin/messages' className='messages'>
                Messages
              </Link>
              <Link href='/admin/projects' className='projects'>
                Projects
              </Link>
              <Link href='/admin/posts' className='posts'>
                Posts
              </Link>
              <button
                onClick={() => {
                  signOut();
                  toggleMenu();
                }}
                className=''
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </nav>
      <div
        className={`mobile-menu z-50  fixed top-[4.15rem]  flex flex-col justify-center items-end px-[1.5rem] right-0 w-full lg:hidden ${
          menu ? 'open ' : ''
        }`}
      >
        <>
          {!session ? (
            <>
              <Link href='/admin/register'>register</Link>
              <Link href='/admin/login'>login</Link>
            </>
          ) : (
            <>
              <Link href='/admin/messages' className='messages'>
                Messages
              </Link>
              <Link href='/admin/projects' className='projects'>
                Projects
              </Link>
              <Link href='/admin/posts' className='posts'>
                Posts
              </Link>
              <button
                onClick={() => {
                  signOut();
                  toggleMenu();
                }}
                className=''
              >
                Sign Out
              </button>
            </>
          )}
        </>
      </div>
    </header>
  );
};

export default Navbar;
