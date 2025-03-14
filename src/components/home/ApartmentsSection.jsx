import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/ApartmentsSection.css';
import { roomsArray } from '../../constants/data';
import SectionLayout from '../layout/SectionLayout';
import RoomHomeCard from '../cards/RoomHomeCard';

const ApartmentsSection = () => {
  return (
    <SectionLayout bgColor={'bg-gray-nav'}>
      <h2 className='text-center heading playfair-display-bold text-primary-dark pb-[65px]'>
        Apartments
      </h2>

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
        {roomsArray.map((room, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <RoomHomeCard room={room} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionLayout>
  );
};

export default ApartmentsSection;
