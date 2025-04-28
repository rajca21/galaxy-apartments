import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import PageFirstSectionLayout from '../layout/PageFirstSectionLayout';
import { roomsArray } from '../../utils/data';
import RoomHomeCard from '../cards/RoomHomeCard';

const ApartmentsListSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageFirstSectionLayout bgColor={'bg-gray-nav'}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='text-center contact_title playfair-display-bold hidden md:block text-primary-dark pb-[65px]'
        >
          {t('menu_apartments')}
        </motion.h2>

        <div className='flex w-full'>
          <div className='w-full grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3'>
            {roomsArray
              .filter((r) => r.show)
              .map((room) => (
                <RoomHomeCard
                  key={room.id}
                  room={room}
                  placement={'apartments'}
                />
              ))}
          </div>
        </div>
      </PageFirstSectionLayout>
    </>
  );
};

export default ApartmentsListSection;
