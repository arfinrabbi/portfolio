import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BracketButton } from '../components/BracketButton';
import { Link } from 'react-router';
import Lemoniot from '../../Images/sample_mock.png';

const projects = [
  {
    id: 1,
    title: 'Branding Showcase [Lemon IoT]',
    category: 'BRAND IDENTITY',
    featured: true,
    <img src={Lemoniot} />,
    description: 'Complete brand identity system including logo suite, stationery, and brand guidelines'
  },
  {
    id: 2,
    title: 'Logo Design Collection',
    category: 'LOGO DESIGN',
    featured: false,
    image: 'https://images.unsplash.com/photo-1761044591996-7a05341a3e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2dvJTIwZGVzaWduJTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzc1Mzk5OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Versatile logo designs across various industries and styles'
  },
  {
    id: 3,
    title: 'Print Design Portfolio',
    category: 'PRINT DESIGN',
    featured: false,
    image: 'https://images.unsplash.com/photo-1754681920848-d20733e4ef23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwZmx5ZXIlMjBtb2NrdXB8ZW58MXx8fHwxNzc1Mzk5OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Flyers, brochures, and marketing materials with impact'
  },
  {
    id: 4,
    title: 'WordPress Site Design',
    category: 'WEB DESIGN',
    featured: false,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NTM5OTkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern, responsive website interfaces for diverse clients'
  },
  {
    id: 5,
    title: 'Presentation Design',
    category: 'PRESENTATION',
    featured: false,
    image: 'https://images.unsplash.com/photo-1692255359792-bc8bf9985925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBzbGlkZXMlMjBtb2NrdXB8ZW58MXx8fHwxNzc1Mzk5OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional presentation decks for business and creative pitches'
  }
];

export function Portfolio() {
  const handleContactClick = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-[#050A12]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00C8FF 2px, #00C8FF 4px)',
            mixBlendMode: 'multiply'
          }}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C8FF] rounded-full blur-[120px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em]">
              {'>'} MY WORK
            </div>
            <h1 className="font-['Orbitron'] text-5xl md:text-7xl font-bold text-[#E8F4FF]">
              SELECTED WORKS
            </h1>
            <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-lg max-w-2xl mx-auto">
              A curated collection of projects showcasing brand identity, digital design, and creative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {/* Featured Project - Full Width */}
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-[#0B1422] border border-[#1A3047] overflow-hidden hover:border-[#00C8FF] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,200,255,0.2)]">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00C8FF] z-10"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00C8FF] z-10"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00C8FF] z-10"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00C8FF] z-10"></div>

                  {/* Category chip */}
                  <div className="absolute top-6 left-6 z-20 bg-[#050A12] border border-[#00C8FF] px-4 py-2">
                    <span className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-xs uppercase tracking-wider">
                      {project.category} · FEATURED
                    </span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content overlay */}
                  <div className="p-8 border-t border-[#1A3047]">
                    <h3 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#E8F4FF] mb-3">
                      {project.title}
                    </h3>
                    <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Two Column Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => !p.featured && p.id <= 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-[#0B1422] border border-[#1A3047] overflow-hidden hover:border-[#00C8FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.2)]">
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00C8FF] z-10"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00C8FF] z-10"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00C8FF] z-10"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00C8FF] z-10"></div>

                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 border-t border-[#1A3047]">
                      <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-xs uppercase tracking-wider mb-2">
                        {project.category}
                      </div>
                      <h3 className="font-['Orbitron'] text-xl font-bold text-[#E8F4FF] mb-2">
                        {project.title}
                      </h3>
                      <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Full Width Projects */}
            {projects.filter(p => !p.featured && p.id > 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-[#0B1422] border border-[#1A3047] overflow-hidden hover:border-[#00C8FF] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,200,255,0.2)]">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00C8FF] z-10"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00C8FF] z-10"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00C8FF] z-10"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00C8FF] z-10"></div>

                  {/* Image */}
                  <div className="aspect-[21/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 border-t border-[#1A3047]">
                    <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-xs uppercase tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#E8F4FF] mb-3">
                      {project.title}
                    </h3>
                    <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behance CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0B1422] border border-[#1A3047] overflow-hidden"
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00C8FF]"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00C8FF]"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00C8FF]"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00C8FF]"></div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B1A] rounded-full blur-[120px] opacity-10"></div>

            <div className="relative py-16 px-8 text-center space-y-6">
              <div className="font-['IBM_Plex_Mono'] text-[#FF6B1A] text-sm uppercase tracking-[0.3em]">
                {'>'} MORE PROJECTS
              </div>
              <h3 className="font-['Orbitron'] text-3xl md:text-4xl font-bold text-[#E8F4FF]">
                VIEW MORE OF MY PROJECTS
              </h3>
              <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-lg max-w-xl mx-auto">
                Visit my Behance profile to explore my complete portfolio and additional case studies
              </p>
              <div className="pt-4">
                <a
                  href="https://www.behance.net/arfinrabbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-['Rajdhani'] text-[#E8F4FF] hover:text-[#FF6B1A] transition-colors tracking-wide uppercase text-sm border border-[#FF6B1A] px-8 py-4 bg-[#FF6B1A]/5 hover:bg-[#FF6B1A]/10 hover:shadow-[0_0_20px_rgba(255,107,26,0.3)] relative group"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FF6B1A]"></span>
                  <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FF6B1A]"></span>
                  <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FF6B1A]"></span>
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FF6B1A]"></span>
                  
                  VISIT BEHANCE PROFILE
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-[#1A3047]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-[#E8F4FF]">
              READY TO START A PROJECT?
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-lg max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with innovative design solutions
            </p>
            <BracketButton variant="primary" onClick={handleContactClick}>
              GET IN TOUCH
            </BracketButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
