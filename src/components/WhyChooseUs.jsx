import React from 'react';
import { Target, Users2, Laptop, BookOpen, Sliders, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Problem Solving First",
      description: "We focus on thoroughly understanding your business requirements before writing a single line of code.",
      icon: Target,
      highlight: "Clarity & Strategy"
    },
    {
      title: "Collaborative Dedicated Team",
      description: "Six specialists with complementary skills across frontend, UI/UX, and backend working directly on your project.",
      icon: Users2,
      highlight: "6 Active Minds"
    },
    {
      title: "Modern Tech Stacks",
      description: "We use modern, battle-tested development tools, frameworks, and databases engineered for speed and longevity.",
      icon: Laptop,
      highlight: "High Performance"
    },
    {
      title: "Continuous Innovation",
      description: "Every build incorporates up-to-date best practices, accessibility standards, and cutting-edge software patterns.",
      icon: BookOpen,
      highlight: "Quality Craft"
    },
    {
      title: "Agile & Flexible Approach",
      description: "Fast communication, transparent sprints, and the flexibility to adapt solutions around your evolving requirements.",
      icon: Sliders,
      highlight: "Client-Centric"
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-pixel-emerald/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pixel-emerald"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-pixel-emerald uppercase">
              THE SIX PIXELS ADVANTAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Work With Six Pixels?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We deliver the dedication, agility, and technical sharpness of an ambitious modern software house.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === 4;

            return (
              <div
                key={idx}
                className={`rounded-2xl p-7 sm:p-8 bg-dark-card border border-white/10 hover:border-pixel-cyan/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-pixel-cyan/10 text-pixel-cyan flex items-center justify-center border border-pixel-cyan/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-pixel-emerald">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Client Priority</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
