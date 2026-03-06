'use client';

import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  icon,
  ariaLabel,
  download,
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark";
  
  const variants = {
    primary: "bg-gradient-orange text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105 focus:ring-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost: "text-white hover:bg-white/10 focus:ring-white/20",
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        href={href}
        onClick={onClick}
        download={download}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      >
        {icon && <span className="text-xl">{icon}</span>}
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;
