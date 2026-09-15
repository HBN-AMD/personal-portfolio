import React from 'react';
import { FileText, Mail, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';

export default function TeamCard({ member, index }) {
  const isCvValid = member.cv && member.cv !== '#' && member.cv.trim() !== '';
  const isFrontend = member.domain === 'Frontend & UI/UX';

  // Get initials for profile photo fallback
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="group rounded-2xl p-6 sm:p-7 bg-dark-card border border-white/10 hover:border-pixel-cyan/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 relative">
      
      {/* Subtle Corner Pixel */}
      <div 
        className={`absolute top-4 right-4 w-2 h-2 rounded-[1px] ${
          isFrontend ? 'bg-pixel-cyan' : 'bg-pixel-emerald'
        }`}
      />

      <div>
        {/* Avatar & Domain Pill */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative">
            <div className={`w-14 h-14 rounded-2xl bg-dark-surface border flex items-center justify-center font-mono font-black text-white text-base shadow-inner ${
              isFrontend ? 'border-pixel-cyan/40 text-pixel-cyan' : 'border-pixel-emerald/40 text-pixel-emerald'
            }`}>
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-2xl" />
              ) : (
                <span>{initials}</span>
              )}
            </div>
          </div>

          <div>
            {/* Domain Badge */}
            <span className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-1 ${
              isFrontend 
                ? 'bg-pixel-cyan/15 text-pixel-cyan border border-pixel-cyan/30' 
                : 'bg-pixel-emerald/15 text-pixel-emerald border border-pixel-emerald/30'
            }`}>
              {member.domain}
            </span>
            <p className="text-[11px] font-mono text-slate-400">
              Pixel 0{index + 1}
            </p>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pixel-cyan transition-colors">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-xs font-mono font-medium text-slate-300 mb-3">
          {member.role}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal min-h-[50px]">
          {member.description}
        </p>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-white/10 space-y-3">
        {/* View CV Button */}
        {isCvValid ? (
          <a
            href={member.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-white hover:bg-slate-200 transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-slate-900" />
            <span>View CV</span>
            <ExternalLink className="w-3 h-3 text-slate-600" />
          </a>
        ) : (
          <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 bg-white/5 border border-white/5 cursor-not-allowed">
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>CV Updating Soon</span>
          </div>
        )}

        {/* Email & Social Links */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-pixel-cyan" />
              <span>Email</span>
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-slate-400"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Team</span>
            </a>
          )}

          <div className="flex items-center gap-3">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1"
                aria-label={`${member.name} GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
