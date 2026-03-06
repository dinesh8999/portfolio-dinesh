'use client';

import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '',
  centered = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title.split(' ').map((word, index) => (
          index === title.split(' ').length - 1 ? (
            <span key={index} className="text-gradient">{word}</span>
          ) : (
            <span key={index}>{word} </span>
          )
        ))}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? '100px' : '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 bg-gradient-orange rounded-full mt-4 ${centered ? 'mx-auto' : ''}`}
      />
    </motion.div>
  );
};

export default SectionTitle;
