export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const filterVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const backgroundElements = [
  { width: 300, height: 300, left: 10, top: 20, opacity: 0.5 },
  { width: 250, height: 250, left: 80, top: 70, opacity: 0.1 },
  { width: 200, height: 200, left: 40, top: 85, opacity: 0.2 },
  { width: 350, height: 350, left: 70, top: 15, opacity: 0.8 },
  { width: 180, height: 180, left: 20, top: 60, opacity: 0.4 },
];
