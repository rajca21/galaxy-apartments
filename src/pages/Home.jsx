import { Metadata } from 'react';

import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import GuestReviews from '../components/home/GuestReviews';
import Location from '../components/home/Location';
import Facilities from '../components/home/Facilities';
import ApartmentsSection from '../components/home/ApartmentsSection';

const Home = () => {
  return (
    <>
      <Metadata>
        <title>Galaxy Apartments</title>
        <meta name='title' content='Galaxy Apartments' />
        <meta
          name='description'
          content='Find the perfect apartment for your stay in Belgrade.'
        />
        <meta property='og:title' content='Galaxy Apartments' />
        <meta
          property='og:image'
          content='https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqpN6hfEGPUcqJfxXrvGjuXyL_WP3NJEHlKGVK1SeRbTJituCbFh2SEVrDInv9IMhVLAR12bG3vGQfMwjB8me1PQXH5fg5g3RpW2-aW-oUgURk_ni-U4f6lWlzfeg-9OfGKSUL2=s680-w680-h510-rw'
        />
      </Metadata>

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
