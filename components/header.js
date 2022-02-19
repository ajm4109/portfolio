import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, forwardRef } from 'react';
import { FaRebel } from 'react-icons/fa';
import { RiMenuFoldLine, RiCloseFill } from 'react-icons/ri';

const Header = () => {
  const [mobMenuState, setMobMenuState] = useState(false);
  const mobMenuClick = () => setMobMenuState(!mobMenuState);
  const logoClick = () => setMobMenuState(false);

  const location = useRouter();
  const [navBG, setNavBG] = useState('linear-gradient(#770000, #060507)');

  useEffect(() => {
    if (location.pathname === '/projects') {
      setNavBG('linear-gradient(#770000, #0A0900)');
    } else if (location.pathname === '/skills') {
      setNavBG('linear-gradient(#770000, #5F5F5F)');
    } else if (location.pathname === '/about') {
      setNavBG('linear-gradient(#770000, #040821)');
    } else {
      setNavBG('linear-gradient(#770000, #060507)');
    }
  }, [location.pathname]);

  return (
    <header className='sticky top-0 z-50'>
      <nav
        className=' flex justify-between items-center px-5 lg:px-14 h-20 lg:h-24'
        style={{ background: navBG }}>
        <div className='z-10'>
          <Link href='/'>
            <a>
              <FaRebel
                onClick={logoClick}
                className='text-white text-5xl hover:scale-125 ease-in-out duration-300 hover:text-gold cursor-pointer'
              />
            </a>
          </Link>
        </div>
        <div className='flex items-center absolute right-0 pr-5 z-10'>
          {mobMenuState ? (
            <RiCloseFill
              onClick={mobMenuClick}
              className='flex sm:hidden text-6xl text-white hover:text-gold hover:scale-125 ease-in-out duration-300 cursor-pointer'
            />
          ) : (
            <RiMenuFoldLine
              onClick={mobMenuClick}
              className='flex sm:hidden text-6xl text-white hover:text-gold hover:scale-125 ease-in-out duration-300 cursor-pointer'
            />
          )}
        </div>
        {/* Desktop Menu */}
        <div>
          <ul className='hidden sm:inline-flex items-center space-x-3'>
            <li>
              <Link href='/projects'>
                <a className='text-white text-2xl lg:text-3xl hover:text-gold hover:border-b-2 hover:border-gold'>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href='/skills'>
                <a className='text-white text-2xl lg:text-3xl hover:text-gold hover:border-b-2 hover:border-gold hover:scale-125'>
                  Skills
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className='text-white text-2xl lg:text-3xl hover:text-gold hover:border-b-2 hover:border-gold hover:scale-125'>
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div
          className='hidden fixed top-0 right-0 bg-black/80 w-full md:w-1/2 min-h-screen p-10 backdrop-blur-sm'
          style={{ display: mobMenuState ? 'block' : 'none' }}>
          <ul className='pt-8 text-center flex items-center justify-center flex-col'>
            <li className='py-3'>
              <Link href='/projects'>
                <a className='text-white text-4xl cursor-pointer hover:text-gold hover:border-b-2 hover:border-gold'>
                  Projects
                </a>
              </Link>
            </li>
            <li className='py-3'>
              <Link href='/skills'>
                <a className='text-white text-4xl cursor-pointer hover:text-gold hover:border-b-2 hover:border-gold'>
                  Skills
                </a>
              </Link>
            </li>
            <li className='py-3'>
              <Link href='/about'>
                <a className='text-white text-4xl cursor-pointer hover:text-gold hover:border-b-2 hover:border-gold'>
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
