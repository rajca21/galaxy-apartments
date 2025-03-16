import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import { useTranslation } from 'react-i18next';

import '../../styles/Navbar.css';
import icons from '../../constants/icons';

const Navbar = () => {
  const { i18n, t } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    if (i18n.language === 'sr') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('sr');
    }
  };

  return (
    <>
      <div className='h-20 my-auto bg-gray-nav'>
        {/* Desktop navigation */}
        <div className='mx-[100px] 2xl:mx-[250px] hidden lgxl:flex justify-between items-center h-full'>
          <Link to='/'>
            <h1 className='font-montserrat-semibold text-primary-dark flex flex-col items-center'>
              <span className='title uppercase'>Galaxy</span>
              <span
                className={`subtitle capitalize ${
                  i18n.language === 'sr'
                    ? 'subtitle-letter-space-sr'
                    : 'subtitle-letter-space-en'
                }`}
              >
                {t('apartments')}
              </span>
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
              {t('menu_home')}
            </NavLink>
            <NavLink
              to='/apartments'
              className={({ isActive }) =>
                isActive
                  ? 'nav-active font-montserrat-semibold'
                  : 'nav-inactive font-montserrat-medium'
              }
            >
              {t('menu_apartments')}
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive
                  ? 'nav-active font-montserrat-semibold'
                  : 'nav-inactive font-montserrat-medium'
              }
            >
              {t('menu_contact')}
            </NavLink>
            <NavLink
              to='/about-us'
              className={({ isActive }) =>
                isActive
                  ? 'nav-active font-montserrat-semibold'
                  : 'nav-inactive font-montserrat-medium'
              }
            >
              {t('menu_about_us')}
            </NavLink>
            <span
              onClick={toggleLanguage}
              className='cursor-pointer nav-inactive font-montserrat-medium'
            >
              {i18n.language === 'sr' ? 'SRB' : 'ENG'}
            </span>
          </nav>
          <a
            href='https://www.booking.com/hotel/rs/galaxy.sr.html'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center transition-all duration-300'
          >
            {t('menu_book')}
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className='relative lgxl:hidden h-full'>
          <div className='flex items-center justify-between mx-[20px] sm:mx-[40px] h-full'>
            <Dropdown
              label=''
              dismissOnClick={true}
              renderTrigger={() => (
                <div className='w-10 flex justify-start cursor-pointer'>
                  <img
                    src={icons.language}
                    alt='language-icon'
                    className='cursor-pointer text-primary-dark h-8'
                    onClick={() => setMobileMenuOpen(false)}
                  />
                </div>
              )}
              className='-ml-1'
            >
              <Dropdown.Item
                className={`${
                  i18n.language !== 'sr'
                    ? 'font-montserrat-bold text-secondary'
                    : 'font-montserrat-medium text-secondary-dark'
                }`}
                onClick={() => changeLanguage('en')}
              >
                <span>ENG</span>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('sr')}>
                <span
                  className={`${
                    i18n.language === 'sr'
                      ? 'font-montserrat-bold text-secondary'
                      : 'font-montserrat-medium text-secondary-dark'
                  }`}
                >
                  SRB
                </span>
              </Dropdown.Item>
            </Dropdown>

            <Link to='/'>
              <h1 className='font-montserrat-semibold text-primary-dark flex flex-col items-center'>
                <span className='title uppercase'>Galaxy</span>
                <span
                  className={`subtitle capitalize ${
                    i18n.language === 'sr'
                      ? 'subtitle-letter-space-sr'
                      : 'subtitle-letter-space-en'
                  }`}
                >
                  {t('apartments')}
                </span>
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
                      : 'font-montserrat-medium text-secondary-dark'
                  }
                >
                  {t('menu_home')}
                </NavLink>
                <NavLink
                  to='/apartments'
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-montserrat-semibold bg-secondary w-full text-center text-gray-text'
                      : 'font-montserrat-medium text-secondary-dark'
                  }
                >
                  {t('menu_apartments')}
                </NavLink>
                <NavLink
                  to='/contact'
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-montserrat-semibold bg-secondary w-full text-center text-gray-text'
                      : 'font-montserrat-medium text-secondary-dark'
                  }
                >
                  {t('menu_contact')}
                </NavLink>
                <NavLink
                  to='/about-us'
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-montserrat-semibold bg-secondary w-full text-center text-gray-text'
                      : 'font-montserrat-medium text-secondary-dark'
                  }
                >
                  {t('menu_about_us')}
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
