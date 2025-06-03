import '../../styles/Facilities.css';

const FacilityCard = ({ image, text }) => {
  return (
    <div className='flex flex-col items-center w-[109px]'>
      <div className='flex items-center justify-center w-full h-[100px]'>
        <img src={image} alt={`${text}-icon`} />
      </div>
      <div className='flex items-center justify-center w-full h-[100px]'>
        <p className='font-montserrat-medium facility-text text-white text-center'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default FacilityCard;
