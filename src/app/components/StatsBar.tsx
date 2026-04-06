import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Projects', value: '1,500+' },
  { label: 'Revenue', value: '$250K+' },
  { label: 'Rating', value: '4.9/5' },
  { label: 'Countries', value: '15+' },
];

export function StatsBar() {
  return (
    <section className="py-12 border-y border-[#1A3047] bg-gradient-to-r from-[#0B1422]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="font-['Orbitron'] text-3xl md:text-4xl font-bold text-[#00C8FF]">
                {stat.value}
              </div>
              <div className="font-['IBM_Plex_Mono'] text-sm text-[#4A6B88] uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
