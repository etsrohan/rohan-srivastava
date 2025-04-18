// Animation variants for the projects section
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      damping: 10,
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
  { width: 500, height: 500, left: 10, top: 10, opacity: 0.5 },
  { width: 300, height: 300, left: 40, top: 70, opacity: 0.3 },
  { width: 400, height: 400, left: 69, top: 80, opacity: 0.1 },
  { width: 350, height: 350, left: 80, top: 50, opacity: 0.2 },
];
