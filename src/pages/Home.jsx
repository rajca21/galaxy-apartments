import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import GuestReviews from '../components/home/GuestReviews';
import Location from '../components/home/Location';
import Facilities from '../components/home/Facilities';
import ApartmentsSection from '../components/home/ApartmentsSection';

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t('meta.home.title');

    const metaTags = [
      { name: 'description', content: t('meta.home.description') },
      { name: 'keywords', content: t('meta.home.keywords') },
      { property: 'og:title', content: t('meta.home.og_title') },
      { property: 'og:description', content: t('meta.home.og_description') },
      {
        property: 'og:image',
        content: `${
          window.location.origin
        }/meta/assets/home.jpg?${new Date().getTime()}`,
      },
      { property: 'og:url', content: window.location.href },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:title', content: t('meta.home.og_title') },
      {
        property: 'twitter:description',
        content: t('meta.home.og_description'),
      },
      {
        property: 'twitter:image',
        content: `${
          window.location.origin
        }/meta/assets/home.jpg?${new Date().getTime()}`,
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { name: 'canonical', content: window.location.href },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attr = property ? 'property' : 'name';
      const value = property || name;
      let tag = document.querySelector(`meta[${attr}="${value}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, value);
        tag.setAttribute('data-dynamic', 'true');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    return () => {
      document
        .querySelectorAll('meta[data-dynamic="true"]')
        .forEach((tag) => tag.remove());
    };
  }, [t, i18n.language]);

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
