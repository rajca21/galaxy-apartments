import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { MdLanguage } from 'react-icons/md';

import '../../styles/Navbar.css';
import icons from '../../constants/icons';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='h-20 my-auto bg-gray-nav'>
        {/* Desktop navigation */}
        <div className='mx-[100px] 2xl:mx-[250px] hidden lg:flex justify-between items-center h-full'>
          <Link to='/'>
            <h1 className='font-montserrat-semibold  text-primary-dark flex flex-col'>
              <span className='title uppercase'>Galaxy</span>
              <span className='subtitle'>Apartments</span>
            </h1>
          </Link>

          <nav className='flex flex-row gap-10'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'nav-active font-montserrat-semibold'
                  : 'nav-inactive font-montserrat-medium'
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/apartments'
              className={({ isActive }) =>
                isActive
                  ? 'nav-active font-montserrat-semibold'
                  : 'nav-inactive font-montserrat-medium'
              }
            >
              Apartments
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive
                  ? 'nav-active font-montserrat-semibold'
                  : 'nav-inactive font-montserrat-medium'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to='/about-us'
              className={({ isActive }) =>
                isActive
                  ? 'nav-active font-montserrat-semibold'
                  : 'nav-inactive font-montserrat-medium'
              }
            >
              About us
            </NavLink>
          </nav>
          <button className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center transition-all duration-300'>
            Book Now
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className='relative lg:hidden h-full'>
          <div className='flex items-center justify-between mx-[20px] sm:mx-[40px] h-full'>
            <div className='w-10 flex justify-start cursor-pointer'>
              <img
                src={icons.language}
                alt='language-icon'
                className='cursor-pointer text-primary-dark h-8'
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
            <Link to='/'>
              <h1 className='font-montserrat-semibold  text-primary-dark flex flex-col'>
                <span className='title uppercase'>Galaxy</span>
                <span className='subtitle'>Apartments</span>
              </h1>
            </Link>
            {mobileMenuOpen ? (
              <div className='w-10 flex justify-end pr-1'>
                <img
                  src={icons.close}
                  alt='close-icon'
                  className='cursor-pointer text-primary-dark'
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
            ) : (
              <div className='w-10 flex justify-end'>
                <img
                  src={icons.menu}
                  alt='burger-menu-icon'
                  className='cursor-pointer'
                  onClick={() => setMobileMenuOpen(true)}
                />
              </div>
            )}
          </div>
          {mobileMenuOpen && (
            <div className='absolute w-full bg-gray-smoke z-50 shadow-sm'>
              <nav className='flex flex-col gap-2 pb-2 justify-center items-center w-full'>
                <NavLink
                  to='/'
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-montserrat-semibold bg-secondary w-full text-center text-gray-text'
                      : 'font-montserrat-medium'
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to='/apartments'
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-montserrat-semibold bg-secondary w-full text-center text-gray-text'
                      : 'font-montserrat-medium'
                  }
                >
                  Apartments
                </NavLink>
                <NavLink
                  to='/contact'
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-montserrat-semibold bg-secondary w-full text-center text-gray-text'
                      : 'font-montserrat-medium'
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to='/about-us'
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-montserrat-semibold bg-secondary w-full text-center text-gray-text'
                      : 'font-montserrat-medium'
                  }
                >
                  About us
                </NavLink>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
