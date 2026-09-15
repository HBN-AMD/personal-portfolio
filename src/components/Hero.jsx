import React from 'react';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-dark overflow-hidden">
      
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-pixel-cyan/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[300px] bg-pixel-emerald/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      {/* Subtle Pixel Grid Texture in Background */}
      <div className="absolute inset-0 pixel-grid-pattern opacity-35 pointer-events-none -z-10" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-dark-surface/90 border border-pixel-cyan/40 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pixel-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pixel-emerald"></span>
          </span>
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-200 uppercase">
            SOFTWARE HOUSE · OPEN FOR CLIENT PROJECTS
          </span>
        </div>

        {/* Brand Display Mark */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <div className="grid grid-cols-3 gap-1 p-1.5 rounded bg-dark-card border border-white/10">
            <span className="w-2 h-2 rounded-[1px] bg-pixel-cyan"></span>
            <span className="w-2 h-2 rounded-[1px] bg-pixel-cyan"></span>
            <span className="w-2 h-2 rounded-[1px] bg-pixel-cyan"></span>
            <span className="w-2 h-2 rounded-[1px] bg-pixel-emerald"></span>
            <span className="w-2 h-2 rounded-[1px] bg-pixel-cyan"></span>
            <span className="w-2 h-2 rounded-[1px] bg-pixel-emerald"></span>
          </div>
          <span className="text-sm font-mono font-bold tracking-[0.3em] uppercase text-slate-400">
            SIX PIXELS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
          Six Minds. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pixel-cyan via-sky-300 to-pixel-emerald">
            One Pixel-Perfect Solution.
          </span>
        </h1>

        {/* Client-Attracting Value Proposition */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed mb-10 font-normal">
          We design, engineer, and deploy high-performance websites, custom apps, and scalable digital systems. Turning client ideas into functional, revenue-ready digital products with pixel precision.
        </p>

        {/* High-Converting Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-slate-950 bg-pixel-cyan hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-dark-card/90 hover:bg-dark-cardHover border border-white/15 hover:border-pixel-cyan/60 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer backdrop-blur-md"
          >
            <Layers className="w-4 h-4 text-pixel-cyan" />
            <span>Explore Our Portfolio</span>
          </button>
        </div>

        {/* Unique Feature Cards Row (Attracts Clients) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-dark-card/70 border border-white/10 hover:border-pixel-cyan/40 transition-colors">
            <Zap className="w-5 h-5 text-pixel-cyan mb-2" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fast Turnaround</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">Agile sprints &amp; timely delivery</p>
          </div>

          <div className="p-4 rounded-xl bg-dark-card/70 border border-white/10 hover:border-pixel-cyan/40 transition-colors">
            <Sparkles className="w-5 h-5 text-pixel-emerald mb-2" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Frontend &amp; UI/UX</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">Fluid, responsive experiences</p>
          </div>

          <div className="p-4 rounded-xl bg-dark-card/70 border border-white/10 hover:border-pixel-cyan/40 transition-colors">
            <Layers className="w-5 h-5 text-pixel-cyan mb-2" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Robust Backend</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">Scalable APIs &amp; database logic</p>
          </div>

          <div className="p-4 rounded-xl bg-dark-card/70 border border-white/10 hover:border-pixel-cyan/40 transition-colors">
            <ShieldCheck className="w-5 h-5 text-pixel-emerald mb-2" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Dedicated Team</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">Six specialists working for you</p>
          </div>
        </div>

      </div>
    </section>
  );
}
