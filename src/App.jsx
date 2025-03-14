import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Apartments from './pages/Apartments';
import Apartment from './pages/Apartment';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
