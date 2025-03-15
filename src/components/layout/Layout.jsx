import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from '../buttons/SlideUpButton';
import CallButton from '../buttons/CallButton';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollToTopButton />
      <CallButton />
      <Footer />
    </>
  );
};

export default Layout;
