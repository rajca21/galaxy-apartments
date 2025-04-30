import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import '../styles/ApartmentPage.css';
import icons from '../constants/icons';
import { roomsArray } from '../utils/data';
import PageFirstSectionLayout from '../components/layout/PageFirstSectionLayout';

const Apartment = () => {
  const [room, setRoom] = useState(null);
  const { slug } = useParams();
  const { t } = useTranslation();

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
              viewport={{ once: true, amount: 0.2 }}
              className='bg-white rounded-[25px] p-[25px]'
            >
              {/* DEKSTOP */}
              <div className='hidden lg:flex gap-[25px]'>
                <div className='flex-1'>
                  <img src={room?.headerImg} className='rounded-[10px] ' />
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
                <h1 className='heading font-montserrat-bold text-primary-dark'>
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

                <img
                  src={room?.headerImg}
                  className='rounded-[10px] mt-[25px]'
                />

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
