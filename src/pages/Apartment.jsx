import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

import '../styles/ApartmentPage.css';
import icons from '../constants/icons';
import { roomsArray } from '../utils/data';
import PageFirstSectionLayout from '../components/layout/PageFirstSectionLayout';

const Apartment = () => {
  const [room, setRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const { slug } = useParams();
  const { t } = useTranslation();

  const handleChangeImage = (direction) => {
    if (direction === 'left') {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? room.images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === room.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    if (slug) {
      const foundRoom = roomsArray.find((room) => room.slug === slug);
      setRoom(foundRoom || null);
    }
  }, [slug]);

  return (
    <>
      {room ? (
        <>
          <PageFirstSectionLayout bgColor={'bg-gray-nav'}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='bg-white rounded-[25px] p-[25px]'
            >
              {/* DEKSTOP */}
              <div className='hidden lg:flex gap-[25px]'>
                <div className='flex-1'>
                  {/* Image slider */}
                  <div className='relative w-full h-full'>
                    <button
                      className={`${
                        showArrows ? 'absolute' : 'hidden'
                      } top-[50%] left-0 transform transition-all duration-300 -translate-y-1/2`}
                      onMouseEnter={() => setShowArrows(true)}
                      onMouseLeave={() => setShowArrows(false)}
                      onClick={() => handleChangeImage('left')}
                    >
                      <GoChevronLeft size={48} color={'#f5f5f5'} />
                    </button>

                    <img
                      src={room.images[currentImageIndex].src}
                      alt={room.images[currentImageIndex].alt}
                      className='h-full object-cover rounded-[10px]'
                      onMouseEnter={() => setShowArrows(true)}
                      onMouseLeave={() => setShowArrows(false)}
                    />

                    <button
                      className={`${
                        showArrows ? 'absolute' : 'hidden'
                      } top-[50%] right-0 transform -translate-y-1/2`}
                      onMouseEnter={() => setShowArrows(true)}
                      onMouseLeave={() => setShowArrows(false)}
                      onClick={() => handleChangeImage('right')}
                    >
                      <GoChevronRight size={48} color={'#f5f5f5'} />
                    </button>
                  </div>
                </div>
                <div className='flex-1'>
                  <h1 className='apartment_heading font-montserrat-bold text-primary-dark'>
                    {t(room.titleKey)}
                  </h1>
                  <div className='grid grid-cols-3 mt-[25px] gap-[15px]'>
                    {room.facilities.spatub && (
                      <div className='flex items-center gap-[9px] h-[35px] max-w-[175px]'>
                        <img src={icons.spatub_room} alt='spatub_icon' />
                        <p className='facility_text font-montserrat-normal'>
                          {t('room_facilities.spatub')}
                        </p>
                      </div>
                    )}
                    {room.facilities.shower && (
                      <div className='flex items-center gap-[9px] h-[35px] max-w-[175px]'>
                        <img src={icons.shower_room} alt='shower_icon' />
                        <p className='facility_text font-montserrat-normal'>
                          {t('room_facilities.bathroom')}
                        </p>
                      </div>
                    )}
                    {room.facilities.wifi && (
                      <div className='flex items-center gap-[9px] h-[35px] max-w-[175px]'>
                        <img src={icons.wifi_room} alt='wifi_icon' />
                        <p className='facility_text font-montserrat-normal'>
                          {t('room_facilities.wifi')}
                        </p>
                      </div>
                    )}
                    {room.facilities.balcony && (
                      <div className='flex items-center gap-[9px] h-[35px] max-w-[175px]'>
                        <img src={icons.balcony_room} alt='balcony_icon' />
                        <p className='facility_text font-montserrat-normal'>
                          {t('room_facilities.balcony')}
                        </p>
                      </div>
                    )}
                    {room.facilities.ac && (
                      <div className='flex items-center gap-[9px] h-[35px] max-w-[175px]'>
                        <img src={icons.ac_room} alt='snow_icon' />
                        <p className='facility_text font-montserrat-normal'>
                          {t('room_facilities.ac')}
                        </p>
                      </div>
                    )}
                    {room.facilities.soundproof && (
                      <div className='flex items-center gap-[9px] h-[35px] max-w-[175px]'>
                        <img
                          src={icons.soundproof_room}
                          alt='volume_off_icon'
                        />
                        <p className='facility_text font-montserrat-normal'>
                          {t('room_facilities.sound')}
                        </p>
                      </div>
                    )}
                    {room.facilities.view && (
                      <div className='flex items-center gap-[9px] h-[35px] max-w-[175px]'>
                        <img src={icons.view_room} alt='image_icon' />
                        <p className='facility_text font-montserrat-normal'>
                          {t('room_facilities.view')}
                        </p>
                      </div>
                    )}
                    {room.facilities.kitchen && (
                      <div className='flex items-center gap-[9px] h-[35px] max-w-[175px]'>
                        <img src={icons.kitchen_room} alt='oven_icon' />
                        <p className='facility_text font-montserrat-normal'>
                          {t('room_facilities.kitchen')}
                        </p>
                      </div>
                    )}
                  </div>
                  <p className='facility_text mt-[25px]'>
                    <span className='font-montserrat-semibold'>
                      {t('room_facilities.size')}:
                    </span>{' '}
                    <span className='font-montserrat-normal'>
                      {room?.size} m<sup>2</sup>
                    </span>
                  </p>
                  <p className='facility_text font-montserrat-normal mt-[25px]'>
                    {t(room.longDescriptionKey)}
                  </p>
                </div>
              </div>

              {/* MOBILE */}
              <div className='flex flex-col lg:hidden'>
                <h1 className='apartment_heading font-montserrat-bold text-primary-dark'>
                  {t(room.titleKey)}
                </h1>
                <div className='flex flex-wrap gap-[25px] mt-[25px]'>
                  {room.facilities.spatub && (
                    <div className='flex items-center gap-[9px] h-[35px]'>
                      <img src={icons.spatub_room} alt='spatub_icon' />
                    </div>
                  )}
                  {room.facilities.shower && (
                    <div className='flex items-center gap-[9px] h-[35px]'>
                      <img src={icons.shower_room} alt='shower_icon' />
                    </div>
                  )}
                  {room.facilities.wifi && (
                    <div className='flex items-center gap-[9px] h-[35px]'>
                      <img src={icons.wifi_room} alt='wifi_icon' />
                    </div>
                  )}
                  {room.facilities.balcony && (
                    <div className='flex items-center gap-[9px] h-[35px]'>
                      <img src={icons.balcony_room} alt='balcony_icon' />
                    </div>
                  )}
                  {room.facilities.ac && (
                    <div className='flex items-center gap-[9px] h-[35px]'>
                      <img src={icons.ac_room} alt='snow_icon' />
                    </div>
                  )}
                  {room.facilities.soundproof && (
                    <div className='flex items-center gap-[9px] h-[35px]'>
                      <img src={icons.soundproof_room} alt='volume_off_icon' />
                    </div>
                  )}
                  {room.facilities.view && (
                    <div className='flex items-center gap-[9px] h-[35px]'>
                      <img src={icons.view_room} alt='image_icon' />
                    </div>
                  )}
                  {room.facilities.kitchen && (
                    <div className='flex items-center gap-[9px] h-[35px]'>
                      <img src={icons.kitchen_room} alt='oven_icon' />
                    </div>
                  )}
                </div>

                <div className='relative mt-[25px]'>
                  <button
                    className={`absolute top-[50%] left-0 transform transition-all duration-300 -translate-y-1/2`}
                    onClick={() => handleChangeImage('left')}
                  >
                    <GoChevronLeft size={36} color={'#f5f5f5'} />
                  </button>

                  <img
                    src={room.images[currentImageIndex].src}
                    alt={room.images[currentImageIndex].alt}
                    className='rounded-[10px]'
                  />

                  <button
                    className={`absolute top-[50%] right-0 transform -translate-y-1/2`}
                    onClick={() => handleChangeImage('right')}
                  >
                    <GoChevronRight size={36} color={'#f5f5f5'} />
                  </button>
                </div>

                <p className='facility_text mt-[25px]'>
                  <span className='font-montserrat-semibold'>
                    {t('room_facilities.size')}:
                  </span>{' '}
                  <span className='font-montserrat-normal'>
                    {room?.size} m<sup>2</sup>
                  </span>
                </p>
                <p className='facility_text font-montserrat-normal mt-[25px]'>
                  {t(room.longDescriptionKey)}
                </p>
              </div>
            </motion.div>
          </PageFirstSectionLayout>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Apartment;
