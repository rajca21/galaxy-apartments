import { Link } from 'react-router-dom';

import '../../styles/Footer.css';
import icons from '../../constants/icons';

const Footer = () => {
  return (
    <>
      <div className='sm:px-[100px] 2xl:px-[250px] bg-primary-dark pt-[72px] pb-[41px] w-full'>
        {/* Desktop footer */}
        <div className='hidden md:flex flex-col md:flex-row justify-between'>
          {/* Links */}
          <div className='hidden lg:flex flex-col gap-10 flex-1'>
            <Link
              className='font-montserrat-normal link-text text-gray-text hover:text-secondary'
              to='/'
            >
              Home
            </Link>
            <Link
              className='font-montserrat-normal link-text text-gray-text hover:text-secondary'
              to='/apartments'
            >
              Apartments
            </Link>
            <Link
              className='font-montserrat-normal link-text text-gray-text hover:text-secondary'
              to='/contact'
            >
              Contact
            </Link>
            <Link
              className='font-montserrat-normal link-text text-gray-text hover:text-secondary'
              to='/about-us'
            >
              About us
            </Link>

            <p className='pt-[30px] font-montserrat-medium copyright text-gray-copyright'>
              &copy; 2025. All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div className='flex-1 text-left'>
            <h2 className='font-montserrat-semibold contact-headline text-gray-text'>
              Contact
            </h2>
            <div className='flex flex-col gap-[30px] mt-[30px]'>
              <a
                href='tel:+381603630200'
                className='flex flex-row gap-4 items-center'
              >
                <div className='w-[30px] flex justify-center items-center'>
                  <img
                    src={icons.call}
                    alt='phone-icon'
                    className='size-[20px]'
                  />
                </div>
                <span className='font-montserrat-normal contact-text text-gray-text'>
                  +381 60 3630200
                </span>
              </a>
              <a
                href='mailto:galaxyapartments@hotmail.com'
                className='flex flex-row gap-4 items-center'
              >
                <div className='w-[30px] flex justify-center items-center'>
                  <img src={icons.mail} alt='mail-icon' className='h-[20px]' />
                </div>
                <span className='font-montserrat-normal contact-text text-gray-text'>
                  galaxyapartments@hotmail.com
                </span>
              </a>
              <a
                href='https://www.google.com/maps/dir/?api=1&destination=Vojvođanska+448,+Surčin+11271'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row gap-4 items-center'
              >
                <div className='w-[30px] flex justify-center items-center'>
                  <img
                    src={icons.location}
                    alt='location-icon'
                    className='h-[20px]'
                  />
                </div>
                <span className='font-montserrat-normal contact-text text-gray-text'>
                  Vojvođanska 448, Surčin
                </span>
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className='flex-1 flex flex-col justify-between items-end'>
            <Link to='/'>
              <h1 className='font-montserrat-semibold text-gray-text hidden md:flex flex-col gap-2'>
                <span className='logo-title uppercase'>Galaxy</span>
                <span className='logo-subtitle'>Apartments</span>
              </h1>
            </Link>

            <div className='w-[164px]'>
              <h3 className='font-montserrat-medium follow-us text-gray-text pb-2'>
                Follow us
              </h3>
              <div className='flex flex-row items-center gap-2'>
                <a
                  href='viber://chat/?number=%2B381603630200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={icons.viber} alt='viber-icon' />
                </a>
                <a
                  href='https://wa.me/381603630200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={icons.whatsapp}
                    alt='whatsapp-icon'
                    className='size-[24px]'
                  />
                </a>
                <a
                  href='https://www.instagram.com/galaxy_apartments_/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={icons.instagram} alt='instagram-icon' />
                </a>
                <a
                  href='https://www.booking.com/hotel/rs/galaxy.sr.html'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={icons.booking} alt='booking-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className='flex md:hidden flex-col gap-10 mx-[30px]'>
          <div className='flex flex-col gap-[30px]'>
            <a
              href='tel:+381603630200'
              className='flex flex-row gap-4 items-center'
            >
              <div className='w-[30px] flex justify-center items-center'>
                <img
                  src={icons.call}
                  alt='phone-icon'
                  className='size-[20px]'
                />
              </div>
              <span className='font-montserrat-normal contact-text text-gray-text'>
                +381 60 3630200
              </span>
            </a>
            <a
              href='mailto:galaxyapartments@hotmail.com'
              className='flex flex-row gap-4 items-center'
            >
              <div className='w-[30px] flex justify-center items-center'>
                <img src={icons.mail} alt='mail-icon' className='h-[20px]' />
              </div>
              <span className='font-montserrat-normal contact-text text-gray-text'>
                galaxyapartments@hotmail.com
              </span>
            </a>
            <a
              href='https://www.google.com/maps/dir/?api=1&destination=Vojvođanska+448,+Surčin+11271'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-row gap-4 items-center'
            >
              <div className='w-[30px] flex justify-center items-center'>
                <img
                  src={icons.location}
                  alt='location-icon'
                  className='h-[20px]'
                />
              </div>
              <span className='font-montserrat-normal contact-text text-gray-text'>
                Vojvođanska 448, Surčin
              </span>
            </a>
          </div>

          <div className='flex flex-row items-center gap-2'>
            <a
              href='viber://chat/?number=%2B381603630200'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={icons.viber} alt='viber-icon' />
            </a>
            <a
              href='https://wa.me/381603630200'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={icons.whatsapp}
                alt='whatsapp-icon'
                className='size-[24px]'
              />
            </a>
            <a
              href='https://www.instagram.com/galaxy_apartments_/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={icons.instagram} alt='instagram-icon' />
            </a>
            <a
              href='https://www.booking.com/hotel/rs/galaxy.sr.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={icons.booking} alt='booking-icon' />
            </a>
          </div>
          <p className='font-montserrat-medium copyright text-gray-copyright text-right'>
            &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
