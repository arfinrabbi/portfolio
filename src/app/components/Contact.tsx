import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BracketCard } from './BracketCard';
import { BracketButton } from './BracketButton';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'EMAIL', value: 'arfin.rabbi@email.com' },
  { icon: Phone, label: 'PHONE', value: '+1 (555) 123-4567' },
  { icon: Globe, label: 'PORTFOLIO', value: 'arfinrabbi.design' },
  { icon: MapPin, label: 'LOCATION', value: 'New York, USA' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

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
            className="space-y-4"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BracketCard hover={false} className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-[#00C8FF] flex items-center justify-center bg-[#00C8FF]/5">
                      <Icon className="w-5 h-5 text-[#00C8FF]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-xs uppercase tracking-wider mb-1">
                        {info.label}
                      </div>
                      <div className="font-['IBM_Plex_Mono'] text-[#E8F4FF] text-sm">
                        {info.value}
                      </div>
                    </div>
                  </BracketCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BracketCard className="h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm mb-2">
                    <span className="text-[#00C8FF]">{'>'}</span> NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#050A12] border border-[#1A3047] px-4 py-3 text-[#E8F4FF] font-['IBM_Plex_Mono'] text-sm focus:border-[#00C8FF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,200,255,0.3)] transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm mb-2">
                    <span className="text-[#00C8FF]">{'>'}</span> EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#050A12] border border-[#1A3047] px-4 py-3 text-[#E8F4FF] font-['IBM_Plex_Mono'] text-sm focus:border-[#00C8FF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,200,255,0.3)] transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm mb-2">
                    <span className="text-[#00C8FF]">{'>'}</span> MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-[#050A12] border border-[#1A3047] px-4 py-3 text-[#E8F4FF] font-['IBM_Plex_Mono'] text-sm focus:border-[#00C8FF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,200,255,0.3)] transition-all resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                <BracketButton variant="primary" className="w-full">
                  SEND MESSAGE
                </BracketButton>
              </form>
            </BracketCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
