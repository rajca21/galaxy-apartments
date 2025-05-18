import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../../styles/NotFound.css';
import images from '../../constants/images';

const NotFoundLayout = ({ from }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='notfound_container bg-primary-light h-screen flex flex-col items-center justify-center gap-[20px]'>
        <img src={images.not_found} alt='404notfound' />
        <h2 className='text-gray-text font-montserrat-bold'>
          {from === 'apartments'
            ? t('not_found.title_apt')
            : t('not_found.title')}
        </h2>
        <Link
          to={from === 'apartments' ? '/apartments' : '/'}
          className='rounded-full hover:bg-secondary bg-primary text-gray-text btn btn-text font-montserrat-semibold flex items-center justify-center transition-all duration-300'
        >
          {t('not_found.button')}
        </Link>
      </div>
    </>
  );
};

export default NotFoundLayout;
