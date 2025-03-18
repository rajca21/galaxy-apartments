// Navbar - Mobile menu

export const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut', staggerChildren: 0.1 },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const mobileMenuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};
