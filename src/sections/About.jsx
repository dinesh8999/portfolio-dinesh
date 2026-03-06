'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { skills } from '@/data/data';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const highlights = [
  { icon: '', title: 'Problem Solver',   desc: 'Strong analytical & algorithmic thinking' },
  { icon: '', title: 'Full Stack Dev',   desc: 'End-to-end product development' },
  { icon: '', title: 'Fast Learner',     desc: 'Embraces new tech with enthusiasm' },
  { icon: '', title: 'Team Player',      desc: 'Collaborative leadership mindset' },
];

const About = () => (
  <section id="about" aria-labelledby="about-title" className="section-padding relative overflow-hidden">
    {/* subtle background */}
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>

    <div className="container-custom">
      <SectionTitle id="about-title" title="About Me" subtitle="Get to know me and my technical expertise" />

      <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
        {/* Bio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Hi, I&apos;m <span className="text-gradient">Dinesh</span>
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed text-base">
            <p>
              A <span className="text-white font-semibold">B.Tech Computer Science</span> student at{' '}
              <span className="text-primary font-semibold">The Apollo University, Chittoor</span>, passionate
              about building scalable full-stack applications and solving real-world problems through technology.
            </p>
            <p>
              I enjoy working with modern web technologies, robust backend systems, and AI-powered solutions.
              My journey is driven by curiosity and a desire to create impactful digital experiences.
            </p>
            <p>
              Whether crafting elegant UIs or architecting backend systems, I approach every project with
              dedication and attention to detail.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: '1+', label: 'Projects Built' },
              { value: '5+', label: 'Technologies' },
              { value: '2024', label: 'Started Coding' },
            ].map(stat => (
              <div key={stat.label} className="text-center py-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-effect rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all cursor-default"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{h.icon}</div>
              <h4 className="font-bold text-white mb-1">{h.title}</h4>
              <p className="text-sm text-gray-400 leading-snug">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              custom={ci}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all"
            >
              <h4 className="text-base font-bold mb-4 text-primary tracking-wide">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-dark rounded-lg border border-white/8 hover:border-primary/40 text-xs font-medium text-gray-300 transition-colors cursor-default"
                  >
                    <span aria-hidden="true">{skill.icon}</span> {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
