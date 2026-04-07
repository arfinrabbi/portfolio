import React from 'react';
import { motion } from 'motion/react';
import { BracketButton } from './BracketButton';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00C8FF 2px, #00C8FF 4px)',
          mixBlendMode: 'multiply'
        }}></div>
        
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, #00C8FF 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Radial glow */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00C8FF] rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm uppercase tracking-[0.3em]">
              &gt; FREELANCE GRAPHIC DESIGNER
            </div>
            
            <h1 className="font-['Orbitron'] text-5xl md:text-7xl font-bold text-[#E8F4FF] leading-tight">
              CRAFTING<br />
              VISUAL<br />
              FUTURES
            </h1>
            
            <p className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-base md:text-lg max-w-xl">
              Brand Identity • Logo Design • Digital & Print • Motion Graphics • Web Design • Presentation Design
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/portfolio">
                <BracketButton variant="primary">
                  VIEW PORTFOLIO
                </BracketButton>
              </Link>
<Link 
  to="https://drive.google.com/uc?export=download&id=1_LfuArvl7bg96fsNTtASpb49dRF08-Zi"
  target="_blank"
  rel="noopener noreferrer"
>
  <BracketButton variant="secondary">
    DOWNLOAD CV
  </BracketButton>
</Link>
            </div>
          </div>
        </motion.div>

        {/* Right HUD graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-96 h-96">
            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-[#00C8FF]/30 rounded-full"
            ></motion.div>
            
            {/* Rotating middle ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border-2 border-[#00C8FF]/50 rounded-full"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#00C8FF] rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(0,200,255,0.8)]"></div>
            </motion.div>
            
            {/* Center circle */}
            <div className="absolute inset-16 border-2 border-[#00C8FF] rounded-full bg-gradient-to-br from-[#00C8FF]/10 to-transparent backdrop-blur-sm"></div>
            
            {/* Center stats */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="font-['Orbitron'] text-4xl font-bold text-[#00C8FF]">8+</div>
                <div className="font-['IBM_Plex_Mono'] text-xs text-[#4A6B88] uppercase tracking-wider">Years</div>
              </div>
            </div>
            
            {/* Stat readouts */}
            <div className="absolute top-4 left-full ml-8 space-y-2 whitespace-nowrap">
              <div className="font-['IBM_Plex_Mono'] text-sm text-[#E8F4FF]">
                <span className="text-[#00C8FF]">{'>'}</span> Projects: <span className="text-[#00C8FF]">1500+</span>
              </div>
              <div className="font-['IBM_Plex_Mono'] text-sm text-[#E8F4FF]">
                <span className="text-[#00C8FF]">{'>'}</span> Rating: <span className="text-[#00C8FF]">4.9</span>
              </div>
              <div className="font-['IBM_Plex_Mono'] text-sm text-[#E8F4FF]">
                <span className="text-[#00C8FF]">{'>'}</span> Countries: <span className="text-[#00C8FF]">15+</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
