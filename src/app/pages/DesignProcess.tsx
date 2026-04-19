import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Lightbulb, Palette, CheckCircle, Rocket, FileText, Layout, Code, Search, Zap, Smartphone, Gauge, Shield } from 'lucide-react';

const graphicDesignSteps = [
  {
    title: 'Discovery',
    icon: Lightbulb,
    description: 'I start by understanding your brand, audience, and goals. This phase involves research, competitor analysis, and gathering all necessary information to set a strong foundation.',
  },
  {
    title: 'Conceptualization',
    icon: Palette,
    description: 'Creative ideas come to life through sketches and mood boards. I explore multiple design directions and present concepts that align with your vision and brand identity.',
  },
  {
    title: 'Execution',
    icon: Code,
    description: 'The chosen concept is refined and developed into polished designs. Every detail is carefully crafted to ensure visual consistency and brand alignment across all deliverables.',
  },
  {
    title: 'Delivery',
    icon: Rocket,
    description: 'Final files are prepared in all necessary formats and delivered with comprehensive guidelines. I will ensure you have everything needed for successful implementation across all platforms.',
  },
];

const webDevelopmentSteps = [
  {
    title: 'Strategy & Wireframing',
    icon: FileText,
    description: 'I map out the site structure, user flows, and create wireframes. This blueprint ensures all stakeholders are aligned on functionality and user experience before design begins.',
  },
  {
    title: 'UI Design',
    icon: Layout,
    description: 'Visual design brings wireframes to life with your brand colors, typography, and imagery. Every screen is designed with pixel-perfect precision for an exceptional user experience.',
  },
  {
    title: 'Development',
    icon: Code,
    description: 'Clean, efficient code transforms designs into a fully functional WordPress website. I build with best practices, ensuring speed, security, and scalability from day one.',
  },
  {
    title: 'QA & Optimization',
    icon: Search,
    description: 'Rigorous testing across devices and browsers ensures everything works flawlessly. Performance optimization guarantees fast load times and smooth interactions for all users.',
  },
  {
    title: 'Launch',
    icon: Rocket,
    description: 'Your website goes live with full documentation and training. I provide ongoing support to ensure a smooth transition and continued success as your business grows.',
  },
];

const featureCards = [
  {
    icon: Smartphone,
    title: 'Mobile Responsiveness',
    description: 'Every design adapts seamlessly to all screen sizes, ensuring optimal experience on desktop, tablet, and mobile devices.',
    badge: 'Essential',
  },
  {
    icon: Gauge,
    title: 'Site Speed Optimization',
    description: 'Optimized code and compressed assets ensure lightning-fast load times, improving user experience and search rankings.',
    badge: 'Performance',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Regular updates, security patches, and backups keep your website secure and running smoothly long after launch.',
    badge: 'Reliability',
  },
  {
    icon: Zap,
    title: 'SEO Foundation',
    description: 'Built-in SEO best practices with clean code, meta tags, and structured data to help your site rank better in search results.',
    badge: 'Growth',
  },
  {
    icon: Palette,
    title: 'Brand Consistency',
    description: 'Every element is carefully designed to reflect your brand identity, creating a cohesive and memorable user experience.',
    badge: 'Design',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Comprehensive testing ensures bug-free functionality, cross-browser compatibility, and flawless performance before launch.',
    badge: 'Tested',
  },
];

export function DesignProcess() {
  const [activeTrack, setActiveTrack] = useState<'graphic' | 'web'>('graphic');

  const currentSteps = activeTrack === 'graphic' ? graphicDesignSteps : webDevelopmentSteps;

  return (
    <div className="min-h-screen bg-[#050A12]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-[#00C8FF] rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-[#00C8FF] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-[#00C8FF] rotate-12"></div>
        </div>

        {/* Cyan glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00C8FF] rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-[#00C8FF]/10 border border-[#00C8FF]/30"
            >
              <span className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm font-semibold uppercase tracking-[0.3em]">{'>'} Design Process</span>
            </motion.div>
            
            <h1 className="font-['Orbitron'] text-5xl md:text-7xl font-bold text-[#E8F4FF] leading-tight">
              How I Bring<br />Ideas to Life.
            </h1>
            
            <p className="font-['IBM_Plex_Mono'] text-xl text-[#4A6B88] max-w-3xl mx-auto leading-relaxed">
              A structured approach to transforming your vision into high-impact digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-Track Process Section */}
      <section className="py-24 border-t border-[#1A3047]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Track Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="inline-flex bg-[#0B1422] rounded-full p-2 border border-[#1A3047]">
              <button
                onClick={() => setActiveTrack('graphic')}
                className={`px-8 py-3 rounded-full font-['Rajdhani'] font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeTrack === 'graphic'
                    ? 'bg-[#00C8FF] text-[#050A12] shadow-lg shadow-[#00C8FF]/25'
                    : 'text-[#4A6B88] hover:text-[#E8F4FF]'
                }`}
              >
                Graphic Design
              </button>
              <button
                onClick={() => setActiveTrack('web')}
                className={`px-8 py-3 rounded-full font-['Rajdhani'] font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeTrack === 'web'
                    ? 'bg-[#00C8FF] text-[#050A12] shadow-lg shadow-[#00C8FF]/25'
                    : 'text-[#4A6B88] hover:text-[#E8F4FF]'
                }`}
              >
                WordPress Design
              </button>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {currentSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== currentSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-[#00C8FF] to-[#00C8FF]/20"></div>
                )}

                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-16 h-16 bg-[#0B1422] border-2 border-[#00C8FF] flex items-center justify-center shadow-lg shadow-[#00C8FF]/20 relative z-10"
                  >
                    <step.icon className="w-7 h-7 text-[#00C8FF]" strokeWidth={1.5} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-['Orbitron'] text-2xl font-bold text-[#E8F4FF] mb-3">
                      {step.title}
                    </h3>
                    <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 border-t border-[#1A3047] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FF6B1A] rounded-full blur-[120px] opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-[#E8F4FF] mb-4">
              What Makes Me Different
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-xl text-[#4A6B88] max-w-2xl mx-auto">
              Technical excellence meets creative innovation in every project I deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glassmorphism card - dark version */}
                <div className="relative bg-[#0B1422]/60 backdrop-blur-xl rounded-sm p-8 border border-[#1A3047] shadow-xl shadow-black/20 h-full transition-all duration-300 hover:border-[#00C8FF] hover:shadow-[0_0_30px_rgba(0,200,255,0.2)]">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00C8FF] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#00C8FF] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#00C8FF] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#00C8FF] opacity-50 group-hover:opacity-100 transition-opacity"></div>

                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-block px-3 py-1 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-['IBM_Plex_Mono'] font-semibold uppercase tracking-wider border border-[#00C8FF]/30">
                      {card.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-[#00C8FF]/10 border border-[#00C8FF]/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,200,255,0.3)] transition-all duration-300">
                      <card.icon className="w-7 h-7 text-[#00C8FF]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-['Orbitron'] text-xl font-bold text-[#E8F4FF] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B1422] border-t border-[#1A3047] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #00C8FF 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00C8FF 2px, #00C8FF 4px)',
        }}></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-[#E8F4FF] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-xl text-[#4A6B88] max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our proven design process.
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-[#00C8FF] text-[#050A12] font-['Rajdhani'] font-bold text-lg uppercase tracking-wider shadow-2xl shadow-[#00C8FF]/30 hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] transition-all duration-300 relative group"
            >
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#050A12] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#050A12] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#050A12] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#050A12] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Get a Free Quote
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
