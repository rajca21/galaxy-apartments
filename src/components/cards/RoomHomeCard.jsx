import { Link } from 'react-router-dom';

import '../../styles/ApartmentsSection.css';

const RoomHomeCard = ({ room }) => {
  return (
    <div className='bg-white flex flex-col w-[350px] rounded-[10px]'>
      <img src={room.image} alt={room.slug} />
      <div className='flex flex-col px-[15px] pb-[15px] pt-[25px]'>
        <h3 className='font-montserrat-bold room-title text-primary-dark'>
          {room.title}
        </h3>
        <div className='h-[32px] my-[15px]'>
          <p className='line-clamp-2 font-montserrat-medium room-description text-secondary-dark '>
            {room.description}
          </p>
        </div>
        <Link
          to={`/apartments/${room.slug}`}
          className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center'
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default RoomHomeCard;
