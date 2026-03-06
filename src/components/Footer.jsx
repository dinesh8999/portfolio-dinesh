'use client';

import { FaLinkedin, FaGithub, FaCode, FaHeart } from 'react-icons/fa';
import { socialLinks } from '@/data/data';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
    { icon: FaCode, href: socialLinks.leetcode, label: 'LeetCode' },
  ];

  return (
    <footer className="bg-dark-light border-t border-white/10 py-12">
      <div className="container-custom px-6 md:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary text-2xl transition-colors"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-center"
          >
            <p className="flex items-center gap-2 flex-wrap justify-center">
              Built with <FaHeart className="text-primary animate-pulse" /> by
              <span className="text-gradient font-semibold">Gembali Dinesh</span>
            </p>
            <p className="text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-6 text-sm text-gray-400"
          >
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
