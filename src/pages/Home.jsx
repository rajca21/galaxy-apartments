import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import GuestReviews from '../components/home/GuestReviews';
import Location from '../components/home/Location';
import Facilities from '../components/home/Facilities';
import ApartmentsSection from '../components/home/ApartmentsSection';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('meta.home.title')}</title>
        <meta name='description' content={t('meta.home.description')} />
        <meta name='keywords' content={t('meta.home.keywords')} />
        <meta property='og:title' content={t('meta.home.og_title')} />
        <meta
          property='og:description'
          content={t('meta.home.og_description')}
        />
        <meta
          property='og:image'
          content='https://galaxy-apartments.vercel.app/meta/assets/home.svg'
        />
        <meta
          property='og:url'
          color={'https://galaxy-apartments.vercel.app/'}
        />
      </Helmet>

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
