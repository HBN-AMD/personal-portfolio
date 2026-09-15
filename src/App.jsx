import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TeamSection from './components/TeamSection';
import ProjectsSection from './components/ProjectsSection';
import WhyChooseUs from './components/WhyChooseUs';
import WorkProcess from './components/WorkProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-slate-100 flex flex-col selection:bg-pixel-cyan/25 selection:text-pixel-cyan">
      {/* Fixed Sticky Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <TeamSection />
        <ProjectsSection />
        <WhyChooseUs />
        <WorkProcess />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
