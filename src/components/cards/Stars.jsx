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

export default Stars;
