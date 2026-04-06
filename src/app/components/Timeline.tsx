import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Graphics Designer',
    company: 'Freelancer.com',
    period: 'January 2017 – Present',
    achievements: [
      'Completed 1,500+ projects across diverse industries',
      'Maintained 4.9/5 rating with 800+ client reviews',
      'Generated $250K+ in revenue through freelance work',
      'Served clients in 15+ countries worldwide'
    ]
  },
  {
    role: 'Chief Graphics Design Officer',
    company: 'Your Book Team, NY',
    period: 'July 2024 – January 2026',
    achievements: [
      'Led creative direction for brand identity projects',
      'Managed team of junior designers and mentored talent',
      'Established design systems and workflow processes',
      'Delivered high-profile client projects on time and budget'
    ]
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B1422]/30 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em] mb-4">
            {'>'} EXPERIENCE
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-[#E8F4FF]">
            Professional Journey
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00C8FF] via-[#00C8FF]/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'} md:w-1/2`}
              >
                {/* Node */}
                <div className={`absolute ${index % 2 === 0 ? 'md:right-0' : 'md:left-0 left-0'} top-0 md:-translate-x-1/2 w-4 h-4 bg-[#00C8FF] border-4 border-[#050A12] shadow-[0_0_20px_rgba(0,200,255,0.8)]`}></div>

                <div className="ml-8 md:ml-0 bg-[#0B1422] border border-[#1A3047] p-6 hover:border-[#00C8FF] hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] transition-all">
                  <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-xs uppercase tracking-wider mb-2">
                    {exp.period}
                  </div>
                  
                  <h3 className="font-['Orbitron'] text-xl font-bold text-[#E8F4FF] mb-1">
                    {exp.role}
                  </h3>
                  
                  <div className="font-['Rajdhani'] text-[#4A6B88] text-lg mb-4">
                    {exp.company}
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-sm flex items-start gap-2">
                        <span className="text-[#00C8FF] mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
