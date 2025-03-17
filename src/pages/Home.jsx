import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import GuestReviews from '../components/home/GuestReviews';
import Location from '../components/home/Location';
import Facilities from '../components/home/Facilities';
import ApartmentsSection from '../components/home/ApartmentsSection';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('meta.home.title');

    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(
        `meta[property='${name}'], meta[name='${name}']`
      );
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute(
          name.startsWith('og:') || name.startsWith('twitter:')
            ? 'property'
            : 'name',
          name
        );
        newMeta.content = content;
        document.head.appendChild(newMeta);
      }
    };

    updateMetaTag('description', t('meta.home.description'));
    updateMetaTag('keywords', t('meta.home.keywords'));
    updateMetaTag('og:title', t('meta.home.og_title'));
    updateMetaTag('og:description', t('meta.home.og_description'));
    updateMetaTag('og:image', `${window.location.origin}/meta/assets/home.svg`);
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:type', 'website');
    updateMetaTag('twitter:title', t('meta.home.og_title'));
    updateMetaTag('twitter:description', t('meta.home.og_description'));
    updateMetaTag(
      'twitter:image',
      `${window.location.origin}/meta/assets/home.svg`
    );
    updateMetaTag('twitter:card', 'summary_large_image');
  }, [t]);

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
