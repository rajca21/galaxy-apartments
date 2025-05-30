import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoStarSharp } from 'react-icons/io5';

import slider from '../../constants/slider';

const sliderImages = [
  slider.desktopSlider2,
  slider.desktopSlider3,
  slider.desktopSlider4,
  slider.desktopSlider5,
  slider.desktopSlider6,
  slider.desktopSlider7,
];

const mediumSliderImages = [
  slider.mediumSlider2,
  slider.mediumSlider3,
  slider.mediumSlider4,
  slider.mediumSlider5,
  slider.mediumSlider6,
  slider.mediumSlider7,
];

const Hero = () => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-[calc(100vh-80px)] overflow-hidden'>
      {/* SliderImages */}
      <AnimatePresence>
        <motion.img
          key={sliderImages[currentIndex]}
          src={sliderImages[currentIndex]}
          srcSet={`${mediumSliderImages[currentIndex]} 1280w, ${sliderImages[currentIndex]} 1920w`}
          sizes='(max-width: 1280px) 100vw, 1920px'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className='absolute inset-0 w-full h-full object-cover'
          alt='apartment'
        />
      </AnimatePresence>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='absolute inset-0 h-full flex flex-col justify-center px-[20px] sm:px-[40px] lg:px-[100px] 2xl:px-[250px]'
      >
        <div className='flex flex-row gap-1'>
          <IoStarSharp
            aria-label='star-icon'
            className='text-gray-text'
            size={20}
          />
          <IoStarSharp
            aria-label='star-icon'
            className='text-gray-text'
            size={20}
          />
          <IoStarSharp
            aria-label='star-icon'
            className='text-gray-text'
            size={20}
          />
          <IoStarSharp
            aria-label='star-icon'
            className='text-gray-text'
            size={20}
          />
          <IoStarSharp
            aria-label='star-icon'
            className='text-gray-text'
            size={20}
          />
        </div>
        <p className='font-montserrat-semibold text-secondary-400 rated-text pt-[14px]'>
          {t('hero_rated')}
        </p>
        <h2 className='capitalize playfair-display-semibold text-gray-text hero-title pt-[39px]'>
          {t('hero_title_1')} <br /> {t('hero_title_2')}
        </h2>
        <Link
          to='/apartments'
          className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center mt-[39px] transition-all duration-300'
        >
          {t('hero_explore')}
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
