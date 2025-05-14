import { Modal, ModalBody } from 'flowbite-react';
import { GrClose } from 'react-icons/gr';

import Stars from '../cards/Stars';

const GuestReviewModal = ({ userReview, isModalOpen, setIsModalOpen }) => {
  const handleClose = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal show={isModalOpen} onClose={handleClose}>
        <ModalBody>
          <div className='w-full flex justify-end py-0.5'>
            <button
              onClick={handleClose}
              className='text-right text-sm text-gray-500'
            >
              <GrClose />
            </button>
          </div>
          <div className='bg-transparent h-full'>
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
        </ModalBody>
      </Modal>
    </>
  );
};

export default GuestReviewModal;
