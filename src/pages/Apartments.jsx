import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ApartmentsListSection from '../components/apartments/ApartmentsListSection';

const Apartments = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('meta.apartments.title');

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

    updateMetaTag('description', t('meta.apartments.description'));
    updateMetaTag('keywords', t('meta.apartments.keywords'));
    updateMetaTag('og:title', t('meta.apartments.og_title'));
    updateMetaTag('og:description', t('meta.apartments.og_description'));
    updateMetaTag('og:image', `${window.location.origin}/meta/assets/home.jpg`);
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:type', 'website');
    updateMetaTag('twitter:title', t('meta.apartments.og_title'));
    updateMetaTag('twitter:description', t('meta.apartments.og_description'));
    updateMetaTag(
      'twitter:image',
      `${window.location.origin}/meta/assets/home.jpg`
    );
    updateMetaTag('twitter:card', 'summary_large_image');
  }, [t]);

  return (
    <>
      <ApartmentsListSection />
    </>
  );
};

export default Apartments;
