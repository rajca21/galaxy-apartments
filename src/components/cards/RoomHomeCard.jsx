import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../../styles/ApartmentsSection.css';

const RoomHomeCard = ({ room, placement }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`room-home-card bg-white flex flex-col rounded-[10px]
        ${placement === 'home' ? 'w-[350px]' : 'w-full'}`}
      >
        <img
          src={room.headerImg}
          alt={room.slug}
          className='h-[261px] object-cover'
        />
        <div className='flex flex-col px-[15px] pb-[15px] pt-[25px]'>
          <h3 className='font-montserrat-bold room-title text-primary-dark'>
            {t(room.titleKey)}
          </h3>
          <div className='h-[48px] my-[15px]'>
            <p className='line-clamp-3 font-montserrat-medium room-description text-secondary-dark '>
              {t(room.shortDescriptionKey)}
            </p>
          </div>
          <Link
            to={`/apartments/${room.slug}`}
            className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center transition-all duration-300'
          >
            {t('apartments_card_view')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomHomeCard;
