import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import '../../styles/ContactUs.css';
import icons from '../../constants/icons';
import PageFirstSectionLayout from '../layout/PageFirstSectionLayout';

const ContactCards = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageFirstSectionLayout bgColor={'bg-primary-light'}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-center contact_title playfair-display-bold hidden md:block text-white pb-[65px]'
          >
            {t('contact_us.contact')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className='flex flex-col lg:flex-row justify-between gap-[24px] md:gap-8'
          >
            <div className='bg-gray-nav w-full lg:w-[341px] onehalfxl:w-full h-[211px] rounded-[25px]'>
              <div className='flex flex-col items-center justify-center py-[29px]'>
                <img src={icons.call_contact} alt='phone_icon' />
                <h3 className='mt-[15px] font-montserrat-semibold contact_text text-primary'>
                  {t('contact_us.phone')}
                </h3>
                <a
                  href='tel:+381603630200'
                  className='mt-[15px] font-montserrat-normal contact_text text-primary'
                >
                  +381 60 363 02 00
                </a>
                <a
                  href='tel:+381603630200'
                  className='mt-[21px] rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center transition-all duration-300'
                >
                  {t('contact_us.call')}
                </a>
              </div>
            </div>
            <div className='bg-gray-nav w-full lg:w-[341px] onehalfxl:w-full h-[211px] rounded-[25px]'>
              <div className='flex flex-col items-center justify-center py-[29px]'>
                <img src={icons.mail_contact} alt='mail_icon' />
                <h3 className='mt-[15px] font-montserrat-semibold contact_text text-primary'>
                  {t('contact_us.email')}
                </h3>
                <a
                  href='mailto:galaxyapartments@hotmail.com'
                  className='mt-[15px] font-montserrat-normal contact_text text-primary'
                >
                  galaxyapartments@hotmail.com
                </a>
                <a
                  href='mailto:galaxyapartments@hotmail.com'
                  className='mt-[21px] rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center transition-all duration-300'
                >
                  {t('contact_us.mail')}
                </a>
              </div>
            </div>
            <div className='bg-gray-nav w-full lg:w-[341px] onehalfxl:w-full h-[211px] rounded-[25px]'>
              <div className='flex flex-col items-center justify-center py-[29px]'>
                <img src={icons.graph_contact} alt='graph_icon' />
                <h3 className='mt-[15px] font-montserrat-semibold contact_text text-primary'>
                  {t('contact_us.social')}
                </h3>
                <p className='mt-[15px] font-montserrat-normal contact_text text-primary'>
                  {t('contact_us.follow')}
                </p>
                <div className='mt-[21px] flex flex-row gap-[10px]'>
                  <a
                    href='viber://chat/?number=%2B381603630200'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full hover:bg-secondary bg-primary size-[44px] flex items-center justify-center transition-all duration-300'
                  >
                    <img src={icons.viber_contact} alt='viber_icon' />
                  </a>
                  <a
                    href='https://wa.me/381603630200'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full hover:bg-secondary bg-primary size-[44px] flex items-center justify-center transition-all duration-300'
                  >
                    <img src={icons.whatsapp_contact} alt='whatsapp_icon' />
                  </a>
                  <a
                    href='https://www.instagram.com/galaxy_apartments_/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full hover:bg-secondary bg-primary size-[44px] flex items-center justify-center transition-all duration-300'
                  >
                    <img src={icons.instagram_contact} alt='instagram_icon' />
                  </a>
                  <a
                    href='https://www.booking.com/hotel/rs/galaxy.sr.html'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full hover:bg-secondary bg-primary size-[44px] flex items-center justify-center transition-all duration-300'
                  >
                    <img src={icons.booking_contact} alt='booking_icon' />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PageFirstSectionLayout>
    </>
  );
};

export default ContactCards;
