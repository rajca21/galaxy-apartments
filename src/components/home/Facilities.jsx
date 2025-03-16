import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import icons from '../../constants/icons';
import FacilityCard from '../cards/FacilityCard';
import SectionLayout from '../layout/SectionLayout';

const Facilities = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionLayout bgColor={'bg-primary-light'}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className='text-center heading playfair-display-bold text-white'>
            {t('facilities_title')}
          </h2>
          <div className='pt-[65px] hidden lg:flex flex-row justify-between'>
            <FacilityCard
              image={icons.parking}
              text={t('facilities_parking')}
            />
            <FacilityCard image={icons.wifi} text={t('facilities_wifi')} />
            <FacilityCard image={icons.bathtub} text={t('facilities_spa')} />
            <FacilityCard
              image={icons.balcony}
              text={t('facilities_balcony')}
            />
            <FacilityCard
              image={icons.shower}
              text={t('facilities_bathroom')}
            />
            <FacilityCard
              image={icons.shuttle}
              text={t('facilities_shuttle')}
            />
          </div>
          <div className='pt-[65px] hidden sm:flex flex-col lg:hidden gap-10'>
            <div className='flex flex-row justify-around'>
              <FacilityCard
                image={icons.parking}
                text={t('facilities_parking')}
              />
              <FacilityCard image={icons.wifi} text={t('facilities_wifi')} />
              <FacilityCard image={icons.bathtub} text={t('facilities_spa')} />
            </div>
            <div className='flex flex-row justify-around'>
              <FacilityCard
                image={icons.balcony}
                text={t('facilities_balcony')}
              />
              <FacilityCard
                image={icons.shower}
                text={t('facilities_bathroom')}
              />
              <FacilityCard
                image={icons.shuttle}
                text={t('facilities_shuttle')}
              />
            </div>
          </div>
          <div className='pt-[65px] flex sm:hidden flex-col gap-10'>
            <div className='flex flex-row justify-around'>
              <FacilityCard
                image={icons.parking}
                text={t('facilities_parking')}
              />
              <FacilityCard image={icons.wifi} text={t('facilities_wifi')} />
            </div>
            <div className='flex flex-row justify-around'>
              <FacilityCard image={icons.bathtub} text={t('facilities_spa')} />
              <FacilityCard
                image={icons.balcony}
                text={t('facilities_balcony')}
              />
            </div>
            <div className='flex flex-row justify-around'>
              <FacilityCard
                image={icons.shower}
                text={t('facilities_bathroom')}
              />
              <FacilityCard
                image={icons.shuttle}
                text={t('facilities_shuttle')}
              />
            </div>
          </div>
        </motion.div>
      </SectionLayout>
    </>
  );
};

export default Facilities;
