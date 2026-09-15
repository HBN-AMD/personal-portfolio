import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'team', 'projects', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Name with 6 Pixels Mark */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 font-extrabold text-white tracking-widest text-base group"
        >
          {/* 6 Pixel Logo */}
          <div className="grid grid-cols-3 gap-1 p-1.5 rounded-md bg-dark-card border border-dark-border group-hover:border-pixel-cyan/50 transition-colors shadow-sm">
            <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-[1px] group-hover:scale-110 transition-transform"></span>
            <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-[1px] group-hover:scale-110 transition-transform delay-75"></span>
            <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-[1px] group-hover:scale-110 transition-transform delay-100"></span>
            <span className="w-1.5 h-1.5 bg-pixel-emerald rounded-[1px] group-hover:scale-110 transition-transform delay-150"></span>
            <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-[1px] group-hover:scale-110 transition-transform delay-200"></span>
            <span className="w-1.5 h-1.5 bg-pixel-emerald rounded-[1px] group-hover:scale-110 transition-transform delay-300"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-widest text-white uppercase">SIX PIXELS</span>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 -mt-1 group-hover:text-pixel-cyan transition-colors">Digital Solutions</span>
          </div>
        </a>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-dark-card/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-pixel-cyan hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6 text-pixel-cyan" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-card/95 backdrop-blur-xl border-b border-white/10 px-4 py-5 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block text-center mt-3 py-3 rounded-xl text-xs font-bold text-slate-950 bg-pixel-cyan"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}
