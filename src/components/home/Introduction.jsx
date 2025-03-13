import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  return (
    <>
      <SectionLayout>
        <div className='flex flex-col lg:flex-row lg:gap-32 items-center'>
          {/* Welcome Message */}
          <div className='flex-1'>
            <h2 className='playfair-display-bold welcome-title text-primary-dark'>
              Welcome to <br /> Galaxy Apartments
            </h2>
            <p className='pt-[40px] font-montserrat-normal welcome-text text-secondary-dark'>
              Discover our user-friendly platform designed for simplicity and
              ease of use, showcasing beautiful apartments with essential
              information for your convenience.
            </p>
            <Link
              to='/about-us'
              className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center mt-[39px]'
            >
              About us
            </Link>
          </div>
          {/* Image & Reviews */}
          <div className='flex-1 w-full flex justify-end'>
            <div className='hidden md:flex relative'>
              <img src={images.introduction} />
              <div className='absolute bg-primary w-[250px] h-[100px] bottom-16 -left-10'>
                <div className='w-full h-full flex flex-row justify-between items-center'>
                  <div className='flex flex-col w-full h-full justify-center items-center flex-1'>
                    <Counter value={984} />
                    <span className='font-montserrat-light text-white review-text'>
                      Reviews
                    </span>
                  </div>
                  <div className='flex flex-col justify-center items-center flex-1'>
                    <Counter value={9.1} />
                    <span className='font-montserrat-light text-white review-text'>
                      Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Introduction;
