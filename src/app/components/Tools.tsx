import React from 'react';
import { motion } from 'motion/react';

const tools = [
  { name: 'Adobe Illustrator', abbr: 'Ai' },
  { name: 'Adobe Photoshop', abbr: 'Ps' },
  { name: 'Adobe InDesign', abbr: 'Id' },
  { name: 'After Effects', abbr: 'Ae' },
  { name: 'WordPress', abbr: 'WP' },
  { name: 'Figma', abbr: 'Fg' },
  { name: 'Adobe Acrobat', abbr: 'Ac' },
  { name: 'DaVinci Resolve', abbr: 'Dv' },
  { name: 'PowerPoint', abbr: 'PP' },
  { name: 'Trello', abbr: 'Tr' },
  { name: 'Slack', abbr: 'Sl' },
  { name: 'Artificial Intelligence', abbr: 'AI' },
];

export function Tools() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em] mb-4">
            {'>'} TOOLKIT
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-[#E8F4FF]">
            Tools & Software
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square border border-[#1A3047] bg-[#0B1422] hover:border-[#00C8FF] hover:shadow-[0_0_20px_rgba(0,200,255,0.3)] transition-all group"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00C8FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00C8FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00C8FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00C8FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <div className="font-['Orbitron'] text-2xl font-bold text-[#00C8FF]">
                  {tool.abbr}
                </div>
                <div className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-xs text-center leading-tight">
                  {tool.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
