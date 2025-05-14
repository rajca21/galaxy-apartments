import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.state || !location.state.preventScroll) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

export default AutoScrollToTop;
