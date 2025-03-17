import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import images from '../constants/images';

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('meta.contact.title');

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

    updateMetaTag('description', t('meta.contact.description'));
    updateMetaTag('keywords', t('meta.contact.keywords'));
    updateMetaTag('og:title', t('meta.contact.og_title'));
    updateMetaTag('og:description', t('meta.contact.og_description'));
    updateMetaTag('og:image', `${window.location.origin}/meta/assets/home.jpg`);
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:type', 'website');
    updateMetaTag('twitter:title', t('meta.contact.og_title'));
    updateMetaTag('twitter:description', t('meta.contact.og_description'));
    updateMetaTag(
      'twitter:image',
      `${window.location.origin}/meta/assets/home.jpg`
    );
    updateMetaTag('twitter:card', 'summary_large_image');
  }, [t]);

  return (
    <div className='h-[calc(100vh-80px)] bg-primary w-full flex flex-col gap-2 items-center justify-center'>
      <img src={images.build} alt='building' className='size-40' />
      <p className='font-montserrat-semibold text-gray-text'>In process...</p>
    </div>
  );
};

export default Contact;
