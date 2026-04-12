import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050A12]/95 backdrop-blur-md border-b border-[#1A3047]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Monogram */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 border-2 border-[#00C8FF] flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(0,200,255,0.6)] transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00C8FF]/20 to-transparent"></div>
            <span className="font-['Orbitron'] text-[#00C8FF] font-bold text-xl relative z-10">AR</span>
          </div>
          <span className="font-['Orbitron'] text-[#E8F4FF] text-lg font-semibold hidden md:block">ARFIN RABBI</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                {link.path.startsWith('/#') ? (
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path);
                    }}
                    className="font-['Rajdhani'] text-[#E8F4FF] hover:text-[#00C8FF] transition-colors tracking-wide uppercase text-sm"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-['Rajdhani'] transition-colors tracking-wide uppercase text-sm ${
                      location.pathname === link.path ? 'text-[#00C8FF]' : 'text-[#E8F4FF] hover:text-[#00C8FF]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Available indicator */}
          <div className="flex items-center gap-2 border border-[#00C8FF]/30 px-4 py-2 bg-[#00C8FF]/5">
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 bg-[#00C8FF] rounded-full animate-pulse"></div>
              <div className="absolute w-2 h-2 bg-[#00C8FF] rounded-full animate-ping"></div>
            </div>
            <span className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-xs uppercase tracking-wider">Available for work</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
