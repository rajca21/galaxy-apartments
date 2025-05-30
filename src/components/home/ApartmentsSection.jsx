import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/ApartmentsSection.css';
import { roomsArray } from '../../utils/data';
import SectionLayout from '../layout/SectionLayout';
import RoomHomeCard from '../cards/RoomHomeCard';

const ApartmentsSection = () => {
  const { t } = useTranslation();

  return (
    <div className='apartments'>
      <SectionLayout bgColor={'bg-gray-nav'}>
        <h2 className='text-center heading playfair-display-bold text-primary-dark pb-[65px]'>
          {t('apartments_section_title')}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
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
            {roomsArray
              .filter((r) => r.show)
              .map((room) => (
                <SwiperSlide key={room.id} className='flex justify-center'>
                  <RoomHomeCard room={room} placement={'home'} />
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
      </SectionLayout>
    </div>
  );
};

export default ApartmentsSection;
