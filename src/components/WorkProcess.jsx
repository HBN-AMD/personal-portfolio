import React from 'react';
import { Search, Compass, Hammer, Rocket } from 'lucide-react';

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      subtitle: "Discovery & Scope",
      description: "We dive deep into your business objectives, target audience, and functional requirements.",
      icon: Search
    },
    {
      number: "02",
      title: "Plan",
      subtitle: "Architecture & UI Specs",
      description: "We outline data models, API contracts, Figma wireframes, and agile milestones.",
      icon: Compass
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Iterative Engineering",
      description: "We develop frontend interfaces and robust backend logic with continuous testing.",
      icon: Hammer
    },
    {
      number: "04",
      title: "Deliver",
      subtitle: "Launch & Support",
      description: "We deploy the production-ready product, verify live performance, and hand over clean code.",
      icon: Rocket
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-pixel-cyan/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pixel-cyan"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-pixel-cyan uppercase">
              CLIENT WORKFLOW
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We Deliver For You
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A transparent, sprint-based approach ensuring high velocity and zero surprises.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.number}
                className="bg-dark-card border border-white/10 rounded-2xl p-7 hover:border-pixel-cyan/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-pixel-cyan/10 text-pixel-cyan flex items-center justify-center border border-pixel-cyan/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-mono font-black text-pixel-cyan">
                      {s.number}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-pixel-emerald uppercase font-semibold block mb-1">
                    {s.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {s.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-500">
                  Sprint Milestone 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
