import { motion } from 'framer-motion';

import '../../styles/Location.css';
import icons from '../../constants/icons';
import SectionLayout from '../layout/SectionLayout';
import images from '../../constants/images';

const Location = () => {
  return (
    <>
      <SectionLayout bgColor={'bg-gray-nav'}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col lg:flex-row lg:justify-between'
        >
          {/* Location */}
          <div className='flex-1'>
            <h2 className='playfair-display-bold heading text-primary-dark'>
              Our location
            </h2>
            {/* Icons */}
            <div className='flex flex-col gap-2 pt-[46px]'>
              <div className='flex flex-row items-center gap-5'>
                <div className='flex flex-row items-center gap-2 w-[100px]'>
                  <img src={icons.storefront} alt='store-icon' />
                  <p className='font-montserrat-normal locations-text text-secondary-dark'>
                    50 m
                  </p>
                </div>
                <div className='flex flex-row items-center gap-2 w-[100px]'>
                  <img src={icons.bus} alt='bus-icon' />
                  <p className='font-montserrat-normal locations-text text-secondary-dark'>
                    50 m
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-center gap-5'>
                <div className='flex flex-row items-center gap-2 w-[100px]'>
                  <img src={icons.cafe} alt='cafe-icon' />
                  <p className='font-montserrat-normal locations-text text-secondary-dark'>
                    100 m
                  </p>
                </div>
                <div className='flex flex-row items-center gap-2 w-[100px]'>
                  <img src={icons.airplane} alt='airplane-icon' />
                  <p className='font-montserrat-normal locations-text text-secondary-dark'>
                    3.5 km
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-center gap-5'>
                <div className='flex flex-row items-center gap-2 w-[100px]'>
                  <img src={icons.restaurant} alt='restaurant-icon' />
                  <p className='font-montserrat-normal locations-text text-secondary-dark'>
                    200 m
                  </p>
                </div>
                <div className='flex flex-row items-center gap-2 w-[100px]'>
                  <img src={icons.museum} alt='museum-icon' />
                  <p className='font-montserrat-normal locations-text text-secondary-dark'>
                    4.1 km
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <p className='pt-[20px] font-montserrat-bold address-title text-secondary-dark'>
              Address
            </p>
            <p className='pt-[16px] font-montserrat-normal address-text text-secondary-dark'>
              Vojvođanska 448, Surčin, 11271 Belgrade, Serbia
            </p>

            <a
              href='https://www.google.com/maps/dir/?api=1&destination=Vojvođanska+448,+Surčin+11271'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center mt-[36px]'
            >
              Map
            </a>
          </div>
          {/* Map */}
          <a
            href='https://www.google.com/maps/dir/?api=1&destination=Vojvođanska+448,+Surčin+11271'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0'
          >
            <picture>
              {/* Small Screens (Below 640px - sm) */}
              <source srcSet={images.map_small} media='(max-width: 639px)' />

              {/* Medium Screens (640px - 1023px) */}
              <source srcSet={images.map_medium} media='(max-width: 1023px)' />

              {/* Default (Large Screens - Above 1024px) */}
              <img
                src={images.map}
                alt='vojvodjanska-481-pinpoint'
                className='w-full h-[300px] sm:h-[400px] lg:h-full object-cover'
              />
            </picture>
          </a>
        </motion.div>
      </SectionLayout>
    </>
  );
};

export default Location;
