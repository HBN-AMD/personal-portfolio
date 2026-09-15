import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-dark-card border border-white/15 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-dark-surface border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-4 pr-8">
          <span className="text-xs font-mono text-pixel-cyan uppercase font-semibold">
            {project.category} · {project.status}
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            {project.title}
          </h2>
        </div>

        {/* Image */}
        <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 border border-white/10">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Short description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Problem & Solution */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-dark-surface border border-white/5">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase mb-1">Problem</h4>
            <p className="text-sm text-slate-300">{project.problem}</p>
          </div>
          <div className="p-4 rounded-xl bg-dark-surface border border-white/5">
            <h4 className="text-xs font-mono font-bold text-pixel-emerald uppercase mb-1">Solution</h4>
            <p className="text-sm text-slate-300">{project.solution}</p>
          </div>
        </div>

        {/* Key Features */}
        {project.features && (
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">Features</h4>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pixel-cyan shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded bg-white/5 text-slate-300 text-xs font-mono border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-white hover:bg-slate-200 transition-colors"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
