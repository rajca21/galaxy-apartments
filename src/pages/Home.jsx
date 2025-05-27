import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import GuestReviews from '../components/home/GuestReviews';
import Location from '../components/home/Location';
import Facilities from '../components/home/Facilities';
import ApartmentsSection from '../components/home/ApartmentsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <GuestReviews />
      <Location />
      <Facilities />
      <ApartmentsSection />
    </>
  );
};

export default Home;
