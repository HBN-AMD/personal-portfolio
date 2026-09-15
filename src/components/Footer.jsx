import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark border-t border-white/10 pt-14 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
        
        {/* Brand */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-2">
            <div className="grid grid-cols-3 gap-0.5">
              <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-[1px]"></span>
              <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-[1px]"></span>
              <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-[1px]"></span>
              <span className="w-1.5 h-1.5 bg-pixel-emerald rounded-[1px]"></span>
              <span className="w-1.5 h-1.5 bg-pixel-cyan rounded-[1px]"></span>
              <span className="w-1.5 h-1.5 bg-pixel-emerald rounded-[1px]"></span>
            </div>
            <span className="font-extrabold text-white tracking-widest text-base">
              SIX PIXELS
            </span>
          </div>
          <p className="text-xs text-slate-400">
            “Building ideas. Solving problems. Creating experiences.”
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-pixel-cyan transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Socials & Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SixPixels-75"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:sixpixel75@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn Contact"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
        <p>© 2026 Six Pixels. All rights reserved.</p>
        <p>Six Minds. One Pixel-Perfect Solution.</p>
      </div>
    </footer>
  );
}
