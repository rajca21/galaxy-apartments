import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const CallButton = () => {
  return (
    <motion.a
      href='tel:+381603630200'
      className='fixed sm:hidden bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition-all duration-300 z-50'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      aria-label='Call us'
    >
      <FaPhoneAlt size={24} />
    </motion.a>
  );
};

export default CallButton;
