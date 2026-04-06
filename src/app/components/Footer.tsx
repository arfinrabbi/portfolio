import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-[#1A3047]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-['IBM_Plex_Mono'] text-[#4A6B88] text-sm">
            © 2026 Arfin Rabbi. All rights reserved.
          </div>
          <div className="font-['IBM_Plex_Mono'] text-[#00C8FF] text-sm">
            Designed with intent. Built with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
