import React from 'react';
import { motion } from 'motion/react';
import { BracketCard } from './BracketCard';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'EMAIL', value: 'arfinrabbi@gmail.com' },
  { icon: Phone, label: 'PHONE', value: '+8801973119795' },
  { icon: Globe, label: 'PORTFOLIO', value: 'Behance', link: 'https://www.behance.net/arfinrabbi' },
  { icon: MapPin, label: 'LOCATION', value: 'Khulna, Bangladesh [Remote]' },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #00C8FF 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em] mb-4">
            {'>'} GET IN TOUCH
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-[#E8F4FF]">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2 lg:max-w-2xl lg:mx-auto"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const cardContent = (
                <BracketCard hover={false} className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-[#00C8FF] flex items-center justify-center bg-[#00C8FF]/5">
                    <Icon className="w-5 h-5 text-[#00C8FF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-xs uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="font-['IBM_Plex_Mono'] text-[#E8F4FF] text-sm">
                      {'link' in info ? (
                        <a 
                          href={info.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#00C8FF] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </div>
                  </div>
                </BracketCard>
              );

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
