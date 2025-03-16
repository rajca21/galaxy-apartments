import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/GusetReviews.css';
import { userReviews } from '../../constants/data';
import SectionLayout from '../layout/SectionLayout';
import GuestReviewCard from '../cards/GuestReviewCard';

const GuestReviews = () => {
  const { t } = useTranslation();

  return (
    <div className='reviews'>
      <SectionLayout bgColor={'bg-gray-copyright'}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='text-center heading playfair-display-bold text-white'
        >
          {t('review_title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='pt-[50px]'
        >
          <div className='hidden xl:flex justify-between'>
            {userReviews.slice(0, 4).map((userReview, index) => (
              <GuestReviewCard key={index} userReview={userReview} />
            ))}
          </div>

          <div className='flex xl:hidden'>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{ clickable: true }}
              pagination={{ clickable: true }}
              className='relative flex items-center justify-between max-w-[1200px] mx-auto'
            >
              {userReviews.slice(0, 4).map((userReview, index) => (
                <SwiperSlide key={index} className='flex justify-center'>
                  <GuestReviewCard key={index} userReview={userReview} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </SectionLayout>
    </div>
  );
};

export default GuestReviews;
