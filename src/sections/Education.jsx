'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const education = {
    degree: 'B.Tech Computer Science',
    institution: 'The Apollo University',
    location: 'Chittoor, India',
    year: '2024 - 2028',
    description: 'Pursuing a comprehensive education in computer science, focusing on software development, algorithms, data structures, and emerging technologies.',
    achievements: [
      'Strong foundation in programming and software engineering',
      'Active participation in coding competitions',
      'Focus on full-stack development and AI/ML',
    ],
  };

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and qualifications"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-orange hidden md:block"></div>

            {/* Education Card */}
            <div className="relative pl-0 md:pl-20">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="absolute left-5 top-6 w-8 h-8 bg-primary rounded-full border-4 border-dark hidden md:flex items-center justify-center"
              >
                <FaGraduationCap className="text-white text-sm" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {education.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold text-lg mb-2">
                      <FaUniversity />
                      <span>{education.institution}</span>
                    </div>
                    <p className="text-gray-400">{education.location}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/30">
                    <FaCalendarAlt className="text-primary" />
                    <span className="text-primary font-semibold">{education.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {education.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {education.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-primary text-xl mt-1">✓</span>
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-lg">
              Continuously learning and growing to become a skilled software engineer
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
