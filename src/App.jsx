import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import AutoScrollToTop from './components/buttons/AutoScrollToTop';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Apartments from './pages/Apartments';
import Apartment from './pages/Apartment';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (!location.state || !location.state.preventScroll) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/contact'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path='/apartments'
          element={
            <Layout>
              <Apartments />
            </Layout>
          }
        />
        <Route
          path='/apartments/:slug'
          element={
            <Layout>
              <Apartment />
            </Layout>
          }
        />
        <Route
          path='/about-us'
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path='*'
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AutoScrollToTop />
      <AnimatedRoutes />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
