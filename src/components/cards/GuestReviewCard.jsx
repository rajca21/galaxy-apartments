import { useEffect, useRef, useState } from 'react';

import '../../styles/GusetReviews.css';
import images from '../../constants/images';
import GuestReviewModal from '../modals/GuestReviewModal';
import Stars from './Stars';

const GuestReviewCard = ({ userReview }) => {
  const [isClamped, setIsClamped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const el = pRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.offsetHeight);
    }
  }, [userReview]);

  return (
    <>
      <div className='bg-transparent w-[255px] h-full'>
        <div className='flex flex-col items-center w-full'>
          <div className='h-[45px] bg-gray-copyright w-full'></div>
          <div className='flex flex-col items-center w-full rounded-[10px] bg-gray-text'>
            <div className='border-white border-4 -mt-[45px] rounded-full'>
              <img
                src={images.booking_pink}
                alt='booking_pink_logo'
                className='size-[90px] rounded-full'
              />
            </div>

            <div className='pt-[10px]'>
              <Stars reviewStars={userReview.stars} />
            </div>

            <div
              className='h-[125px]'
              onClick={() => isClamped && setIsModalOpen(true)}
            >
              <p
                ref={pRef}
                className={`pt-[15px] px-[24px] line-clamp-6 font-montserrat-normal review-text text-primary-dark ${
                  isClamped && 'cursor-pointer'
                }`}
              >
                {userReview.review}
              </p>
            </div>

            <div className='w-full flex justify-start py-[24px] px-[24px]'>
              <p className='font-montserrat-semibold review-user text-primary'>
                {userReview.user}
              </p>
            </div>
          </div>
        </div>
      </div>

      <GuestReviewModal
        userReview={userReview}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default GuestReviewCard;
