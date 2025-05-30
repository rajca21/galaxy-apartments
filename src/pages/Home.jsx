import { lazy, Suspense } from 'react';

import Hero from '../components/home/Hero';

const Introduction = lazy(() => import('../components/home/Introduction'));
const GuestReviews = lazy(() => import('../components/home/GuestReviews'));
const Location = lazy(() => import('../components/home/Location'));
const Facilities = lazy(() => import('../components/home/Facilities'));
const ApartmentsSection = lazy(() =>
  import('../components/home/ApartmentsSection')
);

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense
        fallback={<div className='h-20 animate-pulse bg-gray-100'></div>}
      >
        <Introduction />
      </Suspense>
      <Suspense
        fallback={<div className='h-32 animate-pulse bg-gray-100'></div>}
      >
        <GuestReviews />
      </Suspense>
      <Suspense
        fallback={<div className='h-24 animate-pulse bg-gray-100'></div>}
      >
        <Location />
      </Suspense>
      <Suspense
        fallback={<div className='h-40 animate-pulse bg-gray-100'></div>}
      >
        <Facilities />
      </Suspense>
      <Suspense
        fallback={<div className='h-48 animate-pulse bg-gray-100'></div>}
      >
        <ApartmentsSection />
      </Suspense>
    </>
  );
};

export default Home;
