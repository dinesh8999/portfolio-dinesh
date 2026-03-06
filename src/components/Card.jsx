'use client';

import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, glass = true }) => {
  const baseStyles = "rounded-xl p-6 transition-all duration-300";
  const glassStyles = glass ? "glass-effect" : "bg-dark-light border border-white/5";
  const hoverStyles = hover ? "hover-lift hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
