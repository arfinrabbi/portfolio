import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BracketCard } from '../components/BracketCard';
import { Mail, Phone, Globe, MapPin, Send } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'EMAIL', value: 'arfin.rabbi@email.com', link: 'mailto:arfin.rabbi@email.com' },
  { icon: Phone, label: 'PHONE', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
  { icon: Globe, label: 'PORTFOLIO', value: 'arfinrabbi.design', link: 'https://arfinrabbi.design' },
  { icon: MapPin, label: 'LOCATION', value: 'New York, USA', link: null },
];

const socialLinks = [
  { name: 'Behance', url: 'https://behance.net/arfinrabbi', color: '#00C8FF' },
  { name: 'Dribbble', url: 'https://dribbble.com/arfinrabbi', color: '#00C8FF' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/arfinrabbi', color: '#00C8FF' },
  { name: 'Instagram', url: 'https://instagram.com/arfinrabbi', color: '#FF6B1A' },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#050A12] relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00C8FF 2px, #00C8FF 4px)',
      }}></div>

      {/* Radial glow */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#00C8FF] rounded-full opacity-5 blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#FF6B1A] rounded-full opacity-5 blur-[120px] pointer-events-none"></div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #00C8FF 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em] mb-4">
              {'>'} CONTACT
            </div>
            <h1 className="font-['Orbitron'] text-5xl md:text-7xl font-bold text-[#E8F4FF] mb-6">
              Let's Create
              <br />
              <span className="text-[#00C8FF]">Something Amazing</span>
            </h1>
            <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-base max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's discuss your next project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-[#00C8FF] flex items-center justify-center bg-[#00C8FF]/5 flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#00C8FF]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-xs uppercase tracking-wider mb-1">
                        {info.label}
                      </div>
                      <div className="font-['IBM_Plex_Mono'] text-[#E8F4FF] text-sm break-words">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        <BracketCard hover={true} className="cursor-pointer">
                          {content}
                        </BracketCard>
                      </a>
                    ) : (
                      <BracketCard hover={false}>
                        {content}
                      </BracketCard>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <BracketCard className="h-full">
                <div className="mb-6">
                  <h2 className="font-['Orbitron'] text-2xl font-bold text-[#E8F4FF] mb-2">
                    Send a Message
                  </h2>
                  <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-sm">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm mb-2">
                        <span className="text-[#00C8FF]">{'>'}</span> NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#050A12] border border-[#1A3047] px-4 py-3 text-[#E8F4FF] font-['IBM_Plex_Mono'] text-sm focus:border-[#00C8FF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,200,255,0.3)] transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm mb-2">
                        <span className="text-[#00C8FF]">{'>'}</span> EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#050A12] border border-[#1A3047] px-4 py-3 text-[#E8F4FF] font-['IBM_Plex_Mono'] text-sm focus:border-[#00C8FF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,200,255,0.3)] transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm mb-2">
                      <span className="text-[#00C8FF]">{'>'}</span> SUBJECT *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#050A12] border border-[#1A3047] px-4 py-3 text-[#E8F4FF] font-['IBM_Plex_Mono'] text-sm focus:border-[#00C8FF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,200,255,0.3)] transition-all"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label className="block font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm mb-2">
                      <span className="text-[#00C8FF]">{'>'}</span> MESSAGE *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full bg-[#050A12] border border-[#1A3047] px-4 py-3 text-[#E8F4FF] font-['IBM_Plex_Mono'] text-sm focus:border-[#00C8FF] focus:outline-none focus:shadow-[0_0_10px_rgba(0,200,255,0.3)] transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 font-['Rajdhani'] font-semibold tracking-wider uppercase transition-all duration-300 relative group bg-[#00C8FF] text-[#050A12] hover:bg-[#00B4E6] shadow-[0_0_20px_rgba(0,200,255,0.4)] w-full md:w-auto min-w-[200px]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="text-lg">[</span>
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                      <span className="text-lg">]</span>
                    </span>
                  </button>
                </form>
              </BracketCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em] mb-4">
              {'>'} CONNECT
            </div>
            <h2 className="font-['Orbitron'] text-3xl md:text-4xl font-bold text-[#E8F4FF]">
              Find Me Online
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <BracketCard hover={true} className="text-center cursor-pointer">
                  <div className="py-4">
                    <div
                      className="w-12 h-12 mx-auto mb-3 border flex items-center justify-center"
                      style={{
                        borderColor: social.color,
                        backgroundColor: `${social.color}10`
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: social.color }}
                      ></div>
                    </div>
                    <div
                      className="font-['Rajdhani'] text-base uppercase tracking-wider"
                      style={{ color: social.color }}
                    >
                      {social.name}
                    </div>
                  </div>
                </BracketCard>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Availability Banner */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <BracketCard className="text-center bg-gradient-to-br from-[#00C8FF]/10 to-[#FF6B1A]/10">
              <div className="py-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#00C8FF] rounded-full animate-pulse"></div>
                    <div className="absolute w-3 h-3 bg-[#00C8FF] rounded-full animate-ping"></div>
                  </div>
                  <span className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-wider">
                    Currently Available
                  </span>
                </div>
                <h3 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#E8F4FF] mb-3">
                  Open for New Projects
                </h3>
                <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-sm max-w-2xl mx-auto">
                  I'm accepting new freelance projects and collaborations. Average response time: 24 hours.
                </p>
              </div>
            </BracketCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
