'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { projects as projectsData } from '@/data/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-dark-light/30">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my recent work and contributions"
        />

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === category
                  ? 'bg-gradient-orange text-white shadow-lg shadow-primary/50'
                  : 'glass-effect text-gray-300 hover:text-white hover:border-primary/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col group">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-gradient-orange text-white text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-dark text-gray-300 rounded-md border border-white/10 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-dark rounded-lg border border-white/10 hover:border-primary hover:text-primary transition-all flex-1 justify-center"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-orange text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex-1 justify-center"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all pointer-events-none"></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
