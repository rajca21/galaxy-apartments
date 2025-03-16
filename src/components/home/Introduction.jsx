import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import '../../styles/Introduction.css';
import SectionLayout from '../layout/SectionLayout';
import images from '../../constants/images';

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = value < 10 ? 2500 : 1500;
    const increment = value < 10 ? 0.1 : Math.ceil(value / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(parseFloat(start.toFixed(1)));
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <motion.span
      className='font-montserrat-medium text-white text-3xl'
      animate={{ opacity: [0, 1], y: [10, 0] }}
      transition={{ duration: 1 }}
    >
      {count}
    </motion.span>
  );
};

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionLayout bgColor={'bg-gray-nav'}>
        <div className='flex flex-col lg:flex-row gap-12 xl:gap-32 items-center'>
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex-1'
          >
            <h2 className='playfair-display-bold welcome-title text-primary-dark'>
              {t('intro_welcome_1')} <br /> {t('intro_welcome_2')}
            </h2>
            <p className='pt-[40px] font-montserrat-normal welcome-text text-secondary-dark'>
              {t('intro_description')}
            </p>
            <Link
              to='/about-us'
              className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center mt-[39px] transition-all duration-300'
            >
              {t('intro_about_us')}
            </Link>
          </motion.div>
          {/* Image & Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex-1 w-full flex justify-end'
          >
            <div className='flex relative w-full'>
              <img src={images.introduction} alt='hallway' className='w-full' />
              <div className='hidden xl:flex absolute bg-primary w-[250px] h-[100px] bottom-16 -left-10'>
                <div className='w-full h-full flex flex-row justify-between items-center'>
                  <div className='flex flex-col w-full h-full justify-center items-center flex-1'>
                    <Counter value={984} />
                    <span className='font-montserrat-light text-white review-text'>
                      {t('intro_reviews')}
                    </span>
                  </div>
                  <div className='flex flex-col justify-center items-center flex-1'>
                    <Counter value={9.2} />
                    <span className='font-montserrat-light text-white review-text'>
                      {t('intro_rating')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Introduction;
