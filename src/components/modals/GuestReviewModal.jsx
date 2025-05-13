import { GrClose } from 'react-icons/gr';

import Stars from '../cards/Stars';

const GuestReviewModal = ({ userReview, setIsModalOpen }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 max-w-md rounded shadow'>
        <div className='w-full flex justify-end py-0.5'>
          <button
            onClick={() => setIsModalOpen(false)}
            className='text-right text-sm text-gray-500'
          >
            <GrClose />
          </button>
        </div>

        <div className='bg-transparent w-[300px] h-full'>
          <div className='flex flex-col items-center w-full'>
            <div className='flex flex-col items-center w-full rounded-[10px] bg-gray-text'>
              <div className='pt-[10px]'>
                <Stars reviewStars={userReview.stars} />
              </div>

              <p className='pt-[15px] px-[12px] font-montserrat-normal review-text text-primary-dark'>
                {userReview.review}
              </p>

              <div className='w-full flex justify-start pt-[24px] px-[12px]'>
                <p className='font-montserrat-semibold review-user text-primary'>
                  {userReview.user}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestReviewModal;
