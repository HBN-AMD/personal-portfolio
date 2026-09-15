import React, { useState, useMemo } from 'react';
import { teamMembers } from '../data/team';
import TeamCard from './TeamCard';
import { Users, Layout, Database, Sparkles } from 'lucide-react';

export default function TeamSection() {
  const [filterDomain, setFilterDomain] = useState('All');

  const filteredMembers = useMemo(() => {
    if (filterDomain === 'All') return teamMembers;
    return teamMembers.filter((m) => m.domain === filterDomain);
  }, [filterDomain]);

  const domainTabs = [
    { label: 'All Specialists (6)', value: 'All' },
    { label: 'Frontend & UI/UX (3)', value: 'Frontend & UI/UX' },
    { label: 'Backend & Database (2)', value: 'Backend & Database' }
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-pixel-cyan/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pixel-cyan"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-pixel-cyan uppercase">
              MEET THE TEAM
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Six Minds Behind Six Pixels
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A cohesive squad of frontend innovators, creative UI/UX designers, and backend infrastructure engineers ready to build your digital product.
          </p>
        </div>

        {/* Expertise Domain Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {domainTabs.map((tab) => {
            const isActive = filterDomain === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setFilterDomain(tab.value)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-pixel-cyan text-slate-950 shadow-md shadow-cyan-950/30'
                    : 'bg-dark-card border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 6 Team Member Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMembers.map((member, index) => (
            <TeamCard 
              key={member.id || index} 
              member={member} 
              index={teamMembers.findIndex(m => m.id === member.id)} 
            />
          ))}
        </div>

        {/* Team Synergy Guarantee Card */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-dark-card via-dark-surface to-dark-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Frontend Craftsmanship Meets Backend Stability
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              With 3 dedicated to frontend &amp; UI/UX (Saeed, Deena, Urooj) and 2 dedicated to backend architectures (Hamza, Danyal), our team covers the entire product development lifecycle without gaps.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors shrink-0"
          >
            <span>Work With Our Team</span>
          </a>
        </div>

      </div>
    </section>
  );
}
