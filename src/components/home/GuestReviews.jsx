import '../../styles/GusetReviews.css';
import { userReviews } from '../../constants/data';
import SectionLayout from '../layout/SectionLayout';
import GuestReviewCard from '../cards/GuestReviewCard';

const GuestReviews = () => {
  return (
    <>
      <SectionLayout bgColor={'bg-gray-copyright'}>
        <h2 className='text-center heading playfair-display-bold text-white'>
          Guest reviews
        </h2>
        <div className='pt-[100px]'>
          <div className='hidden xl:flex justify-between'>
            {userReviews.slice(0, 4).map((userReview, index) => (
              <GuestReviewCard
                key={index}
                userReview={userReview}
                index={index}
              />
            ))}
          </div>
          <div className='hidden mdlg:flex xl:hidden justify-between'>
            {userReviews.slice(0, 3).map((userReview, index) => (
              <GuestReviewCard
                key={index}
                userReview={userReview}
                index={index}
              />
            ))}
          </div>
          <div className='hidden mdlg:flex xl:hidden justify-between pt-[60px]'>
            {userReviews.slice(3, 6).map((userReview, index) => (
              <GuestReviewCard
                key={index}
                userReview={userReview}
                index={index}
              />
            ))}
          </div>

          <div className='hidden sm:flex mdlg:hidden justify-between'>
            {userReviews.slice(0, 2).map((userReview, index) => (
              <GuestReviewCard
                key={index}
                userReview={userReview}
                index={index}
              />
            ))}
          </div>
          <div className='hidden sm:flex mdlg:hidden justify-between pt-[60px]'>
            {userReviews.slice(2, 4).map((userReview, index) => (
              <GuestReviewCard
                key={index}
                userReview={userReview}
                index={index}
              />
            ))}
          </div>
          <div className='flex flex-col items-center gap-16 sm:hidden'>
            {userReviews.slice(0, 4).map((userReview, index) => (
              <GuestReviewCard
                key={index}
                userReview={userReview}
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default GuestReviews;
