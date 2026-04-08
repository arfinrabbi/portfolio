import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const skills = [
  'Brand Identity', 'Logo Design', 'Typography', 'Color Theory',
  'Digital Design', 'Print Design', 'Motion Graphics', 'UI/UX',
  'Illustration', 'Photo Editing', 'Web Design', 'Presentation Design'
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #00C8FF 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Hexagonal frame effect */}
              <div className="relative w-80 h-80 overflow-hidden" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                <ImageWithFallback
                  src="src/Images/Arfin_DP_2port.webp"
                  alt="Arfin Rabbi"
                  className="w-full h-full object-cover"
                />
                {/* Glow border */}
                <div className="absolute inset-0 border-4 border-[#00C8FF] opacity-60 shadow-[0_0_30px_rgba(0,200,255,0.6)]" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></div>
              </div>
              
              {/* Available chip */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0B1422] border border-[#00C8FF] px-6 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00C8FF] rounded-full animate-pulse"></div>
                <span className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-wider">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em] flex items-center gap-2">
              <span>{'>'}</span>
              <span>ABOUT_ME.exe</span>
            </div>

            <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-[#E8F4FF]">
              Designing Excellence<br />
              Since 2017
            </h2>

            <div className="space-y-4 font-['IBM_Plex_Mono'] text-[#4A6B88] text-base leading-relaxed">
              <p>
                With over 8 years of experience in the graphic design industry, I've helped brands across 15+ countries 
                establish their visual identity and communicate their message effectively.
              </p>
              <p>
                My expertise spans brand identity, logo design, digital and print media, web design, motion graphics, 
                and presentation design. I've successfully completed 1,500+ projects with a 4.9/5 rating across 800+ reviews.
              </p>
              <p>
                I believe in creating designs that not only look stunning but also serve a strategic purpose, 
                helping businesses grow and connect with their audience.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-4">
              <div className="font-['Rajdhani'] text-[#E8F4FF] text-sm uppercase tracking-wider mb-4">Core Skills</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-[#0B1422] border border-[#1A3047] font-['IBM_Plex_Mono'] text-[#00C8FF] text-xs hover:border-[#00C8FF] hover:shadow-[0_0_10px_rgba(0,200,255,0.3)] transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
