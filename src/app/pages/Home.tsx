import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Tools } from '../components/Tools';
import { Timeline } from '../components/Timeline';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-[#050A12]">
      <Navigation />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Tools />
      <Timeline />
      <Footer />
    </div>
  );
}
