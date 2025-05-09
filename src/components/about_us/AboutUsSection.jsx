import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import '../../styles/AboutUsSection.css';
import images from '../../constants/images';
import SectionLayout from '../layout/SectionLayout';

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col'>
      <SectionLayout bgColor={'bg-primary-light'} smPy={'65px'}>
        <div className='flex flex-col lg:flex-row gap-[24px] sm:gap-12 xl:gap-32 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex-1'
          >
            <h2 className='playfair-display-bold about_us_title text-white'>
              {t('about_us.about_us_title_1')}
            </h2>
            <p className='pt-[24px] sm:pt-[40px] font-montserrat-normal about_us_paragraphs text-white text-justify'>
              {t('about_us.about_us_text_1')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex-1 w-full flex justify-end'
          >
            <div className='flex relative w-full'>
              <img src={images.about_us1} alt='bedroom' className='w-full' />
            </div>
          </motion.div>
        </div>
      </SectionLayout>
      <SectionLayout bgColor={'bg-gray-nav'} smPy={'65px'}>
        <div className='flex flex-col lg:flex-row gap-[24px] sm:gap-12 xl:gap-32 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex-1 w-full flex justify-end order-2 lg:order-1'
          >
            <div className='flex relative w-full'>
              <img src={images.about_us2} alt='hallway' className='w-full' />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex-1 order-1 lg:order-2'
          >
            <h2 className='playfair-display-bold about_us_title text-primary-dark'>
              {t('about_us.about_us_title_2')}
            </h2>
            <p className='pt-[24px] sm:pt-[40px] font-montserrat-normal about_us_paragraphs text-primary-dark text-justify'>
              {t('about_us.about_us_text_2')}
            </p>
          </motion.div>
        </div>
      </SectionLayout>
      <SectionLayout bgColor={'bg-gray-copyright'} smPy={'65px'}>
        <div className='flex flex-col lg:flex-row gap-[24px] sm:gap-12 xl:gap-32 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex-1'
          >
            <h2 className='playfair-display-bold about_us_title text-white'>
              {t('about_us.about_us_title_3')}
            </h2>
            <p className='pt-[24px] sm:pt-[40px] font-montserrat-normal about_us_paragraphs text-white text-justify'>
              {t('about_us.about_us_text_3a')}
            </p>
            <p className='pt-0 sm:pt-[40px] font-montserrat-normal about_us_paragraphs text-white text-justify'>
              {t('about_us.about_us_text_3b')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex-1 w-full flex justify-end'
          >
            <div className='flex relative w-full'>
              <img src={images.about_us3} alt='parking' className='w-full' />
            </div>
          </motion.div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default AboutUsSection;
