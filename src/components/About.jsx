import React from 'react';
import { Layout, Database, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "06", label: "Dedicated Specialists", subtext: "Cross-functional engineering unit" },
    { value: "Multiple", label: "Projects Delivered", subtext: "Web, software & database systems" },
    { value: "100%", label: "Client Dedication", subtext: "Committed to delivering excellence" },
    { value: "01", label: "Unified Software House", subtext: "Seamless end-to-end delivery" }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface/40 border-t border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-pixel-cyan/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pixel-cyan"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-pixel-cyan uppercase">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Six Pixels
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A collaborative software development team combining creative frontend artistry with reliable backend architecture.
          </p>
        </div>

        {/* Narrative & Dual Engineering Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Main Story Card (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-dark-card border border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-pixel-emerald uppercase tracking-wider">
                Our Mission &amp; Standard
              </span>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Turning ambitious concepts into practical, client-ready software products.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Six Pixels is a software development team built by six ambitious technologists with a shared commitment: creating meaningful, high-performance digital solutions that solve real business problems.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We collaborate on responsive websites, custom software, database-driven applications, and user-centric interfaces. We treat every client engagement with agility, transparency, and dedication to craftsmanship.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className={`w-2 h-2 rounded-[1px] ${i % 2 === 0 ? 'bg-pixel-cyan' : 'bg-pixel-emerald'}`} />
                ))}
              </div>
              <span className="text-xs font-mono text-slate-300 font-semibold">
                Six specialized minds acting as one cohesive unit.
              </span>
            </div>
          </div>

          {/* Dual Engineering Pillars Card (6 cols) */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            
            {/* Pillar 1: Frontend & UI/UX */}
            <div className="rounded-2xl bg-dark-card border border-pixel-cyan/30 p-6 sm:p-7 hover:border-pixel-cyan/60 transition-colors shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-pixel-cyan/15 text-pixel-cyan flex items-center justify-center border border-pixel-cyan/30">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Frontend &amp; UI/UX Craft</h4>
                  <span className="text-xs font-mono text-pixel-cyan">Muhammad Saeed · Deena Emaan · Urooj Fatima</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Specialized in intuitive user research, design systems, responsive HTML/CSS architectures, modern React interfaces, and engaging user flows that retain visitors.
              </p>
            </div>

            {/* Pillar 2: Backend & Database */}
            <div className="rounded-2xl bg-dark-card border border-pixel-emerald/30 p-6 sm:p-7 hover:border-pixel-emerald/60 transition-colors shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-pixel-emerald/15 text-pixel-emerald flex items-center justify-center border border-pixel-emerald/30">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Backend &amp; Database Architecture</h4>
                  <span className="text-xs font-mono text-pixel-emerald">Muhammad Hamza · Danyal Khalid</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Specialized in structured database design, scalable APIs, data security, server logic, and robust system integrations that keep your product running smoothly.
              </p>
            </div>

          </div>

        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div 
              key={index}
              className="bg-dark-card border border-white/10 rounded-2xl p-6 text-center hover:border-pixel-cyan/50 transition-all duration-200 shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pixel-cyan to-pixel-emerald font-mono mb-1">
                {item.value}
              </div>
              <div className="text-sm font-bold text-white mb-0.5">
                {item.label}
              </div>
              <div className="text-xs text-slate-400">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
