import icons from '../../constants/icons';
import FacilityCard from '../cards/FacilityCard';
import SectionLayout from '../layout/SectionLayout';

const Facilities = () => {
  return (
    <>
      <SectionLayout bgColor={'bg-primary-light'}>
        <h2 className='text-center heading playfair-display-bold text-white'>
          Facilities
        </h2>
        <div className='pt-[65px] hidden lg:flex flex-row justify-between'>
          <FacilityCard image={icons.parking} text={'Free on-site parking'} />
          <FacilityCard image={icons.wifi} text={'Free Wifi'} />
          <FacilityCard image={icons.bathtub} text={'Spa tub'} />
          <FacilityCard image={icons.balcony} text={'Balcony'} />
          <FacilityCard image={icons.shower} text={'Private bathroom'} />
          <FacilityCard image={icons.shuttle} text={'Airport shuttle'} />
        </div>
        <div className='pt-[65px] hidden sm:flex flex-col lg:hidden gap-10'>
          <div className='flex flex-row justify-around'>
            <FacilityCard image={icons.parking} text={'Free on-site parking'} />
            <FacilityCard image={icons.wifi} text={'Free Wifi'} />
            <FacilityCard image={icons.bathtub} text={'Spa tub'} />
          </div>
          <div className='flex flex-row justify-around'>
            <FacilityCard image={icons.balcony} text={'Balcony'} />
            <FacilityCard image={icons.shower} text={'Private bathroom'} />
            <FacilityCard image={icons.shuttle} text={'Airport shuttle'} />
          </div>
        </div>
        <div className='pt-[65px] flex sm:hidden flex-col gap-10'>
          <div className='flex flex-row justify-around'>
            <FacilityCard image={icons.parking} text={'Free on-site parking'} />
            <FacilityCard image={icons.wifi} text={'Free Wifi'} />
          </div>
          <div className='flex flex-row justify-around'>
            <FacilityCard image={icons.bathtub} text={'Spa tub'} />
            <FacilityCard image={icons.balcony} text={'Balcony'} />
          </div>
          <div className='flex flex-row justify-around'>
            <FacilityCard image={icons.shower} text={'Private bathroom'} />
            <FacilityCard image={icons.shuttle} text={'Airport shuttle'} />
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Facilities;
