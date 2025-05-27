import { Metadata } from 'react';

import ApartmentsListSection from '../components/apartments/ApartmentsListSection';

const Apartments = () => {
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
      <ApartmentsListSection />
    </>
  );
};

export default Apartments;
