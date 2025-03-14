import '../../styles/GusetReviews.css';
import icons from '../../constants/icons';
import { createArray } from '../../utils/helpers';

const Stars = ({ reviewStars }) => {
  if (reviewStars >= 3) {
    return (
      <div className='flex flex-row gap-0.5 items-center'>
        {createArray(2).map((num) => (
          <img
            key={num}
            src={icons.star_purple}
            className='size-[20px]'
            alt='purple-star-icon'
          />
        ))}
        <img
          src={icons.star_purple}
          className='size-[25px]'
          alt='purple-star-icon'
        />
        {createArray(reviewStars - 3).map((num) => (
          <img
            key={num}
            src={icons.star_purple}
            className='size-[20px]'
            alt='purple-star-icon'
          />
        ))}
        {createArray(5 - reviewStars).map((num) => (
          <img
            key={num}
            src={icons.star_purple_outline}
            className='size-[20px]'
            alt='purple-star-outline-icon'
          />
        ))}
      </div>
    );
  } else {
    <div className='flex flex-row gap-0.5 items-center'>
      {createArray(reviewStars).map((num) => (
        <img
          key={num}
          src={icons.star_purple}
          className='size-[20px]'
          alt='purple-star-outline-icon'
        />
      ))}
      <img
        src={icons.star_purple_outline}
        className='size-[25px]'
        alt='purple-star-outline-icon'
      />
      {createArray(2).map((num) => (
        <img
          key={num}
          src={icons.star_purple_outline}
          className='size-[20px]'
          alt='purple-star-outline-icon'
        />
      ))}
    </div>;
  }
};

const GuestReviewCard = ({ userReview, index }) => {
  return (
    <div className='bg-gray-text rounded-[10px] w-[255px]'>
      <div className='flex flex-col items-center w-full'>
        <div className='border-white border-4 -mt-[45px] rounded-full'>
          <img
            src={userReview.image}
            alt={userReview.user}
            className='size-[90px] rounded-full '
          />
        </div>

        <div className='pt-[10px]'>
          <Stars reviewStars={userReview.stars} />
        </div>

        <p className='pt-[15px] px-[24px] line-clamp-6 font-montserrat-normal review-text text-primary-dark'>
          {userReview.review}
        </p>

        <div className='w-full flex justify-start py-[24px] px-[24px]'>
          <p className='font-montserrat-semibold review-user text-primary'>
            {userReview.user}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuestReviewCard;
