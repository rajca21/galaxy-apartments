import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ApartmentsListSection from '../components/apartments/ApartmentsListSection';

const Apartments = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t('meta.apartments.title');

    const metaTags = [
      { name: 'description', content: t('meta.apartments.description') },
      { name: 'keywords', content: t('meta.apartments.keywords') },
      { property: 'og:title', content: t('meta.apartments.og_title') },
      {
        property: 'og:description',
        content: t('meta.apartments.og_description'),
      },
      {
        property: 'og:image',
        content: `${
          window.location.origin
        }/meta/assets/home.jpg?${new Date().getTime()}`,
      },
      { property: 'og:url', content: window.location.href },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:title', content: t('meta.apartments.og_title') },
      {
        property: 'twitter:description',
        content: t('meta.apartments.og_description'),
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
      <ApartmentsListSection />
    </>
  );
};

export default Apartments;
