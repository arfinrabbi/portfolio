import React from 'react';
import { motion } from 'motion/react';
import { BracketCard } from './BracketCard';
import { Palette, PenTool, FileText, Monitor, Film, Presentation } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Complete brand systems including logos, color palettes, typography, and guidelines.'
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    description: 'Unique, memorable logos that capture your brand essence and stand out.'
  },
  {
    icon: FileText,
    title: 'Digital & Print',
    description: 'Flyers, brochures, posters, social media graphics, and marketing materials.'
  },
  {
    icon: Monitor,
    title: 'Web Design (WordPress)',
    description: 'Modern, responsive Wordpress website designs and UI/UX for digital products.'
  },
  {
    icon: Film,
    title: 'Motion & Animation',
    description: 'Engaging motion graphics, animations, and video editing for digital media.'
  },
  {
    icon: Presentation,
    title: 'Presentation Design',
    description: 'Professional, impactful presentations that communicate your message clearly.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-transparent to-[#0B1422]/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em] mb-4">
            {'>'} SERVICES
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-[#E8F4FF]">
            What I Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BracketCard className="h-full flex flex-col gap-4 group">
                  <div className="w-14 h-14 border border-[#00C8FF] flex items-center justify-center group-hover:bg-[#00C8FF]/10 transition-colors">
                    <Icon className="w-7 h-7 text-[#00C8FF]" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-['Rajdhani'] text-xl font-semibold text-[#E8F4FF] uppercase tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </BracketCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
