'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaDownload, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { socialLinks } from '@/data/data';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const socialList = [
  { icon: FaGithub,   href: socialLinks.github,   label: 'GitHub'   },
  { icon: FaLinkedin, href: socialLinks.linkedin,  label: 'LinkedIn' },
  { icon: FaCode,     href: socialLinks.leetcode,  label: 'LeetCode' },
];

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-28"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-[520px] h-[520px] bg-primary/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -right-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[110px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div className="space-y-7 order-2 md:order-1">
            <motion.div variants={item} className="space-y-3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary tracking-widest uppercase">
                <span className="w-8 h-px bg-primary" aria-hidden="true" />
                Hello, I&apos;m
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                Gembali <span className="text-gradient">Dinesh</span>
              </h1>
            </motion.div>

            <motion.p variants={item} className="text-xl text-gray-300 font-medium">
              Full Stack Developer || Software Engineer 
            </motion.p>

            <motion.p variants={item} className="text-gray-400 text-lg leading-relaxed max-w-lg">
              I build{' '}
              <span className="text-white font-semibold">scalable web applications</span> and{' '}
              <span className="text-white font-semibold">intelligent digital solutions</span>{' '}
              that make a real difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-orange text-white font-semibold shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                View Projects <FaArrowRight className="text-sm" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/50 text-primary font-semibold hover:bg-primary hover:text-white hover:border-primary hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <FaEnvelope className="text-sm" aria-hidden="true" /> Contact Me
              </a>
              <a
                href="https://docs.google.com/document/d/1kYbGRWbD0ryWO8mYimONV9hXpvmr1IEr5RdrXBmaXWE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300"
                aria-label="Open resume on Google Drive"
              >
                <FaDownload className="text-sm" aria-hidden="true" /> Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={item} className="flex items-center gap-3 pt-1">
              {socialList.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-11 h-11 rounded-xl glass-effect flex items-center justify-center text-lg text-gray-400 hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                </motion.a>
              ))}
              <span className="ml-2 h-px w-12 bg-white/10" aria-hidden="true" />
              <span className="text-xs text-gray-500 tracking-wide select-none">Find me online</span>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div variants={item} className="relative order-1 md:order-2 flex justify-center">
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              <div aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-orange blur-3xl opacity-25 scale-110" />
              <div aria-hidden="true" className="absolute -inset-4 rounded-full border border-dashed border-primary/25 animate-spin-slow" />
              <div aria-hidden="true" className="absolute -inset-8 rounded-full border border-primary/10" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/40 shadow-glow">
                <Image
                  src="/images/profile.jpg"
                  alt="Gembali Dinesh  Full Stack Developer"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 180, damping: 14 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass-effect border border-green-500/30 flex items-center gap-2 text-xs font-semibold text-green-400 whitespace-nowrap shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
               
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-primary transition-colors"
          aria-label="Scroll to About section"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <HiArrowDown className="text-2xl" aria-hidden="true" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
