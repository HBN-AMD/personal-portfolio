import React from 'react';
import { ExternalLink, Github, Eye, Layers } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const isCompleted = project.status === 'Completed';

  return (
    <div 
      onClick={() => onSelect(project)}
      className="group bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-pixel-cyan/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/25 cursor-pointer relative"
    >
      <div>
        {/* Project Thumbnail Image */}
        <div className="relative aspect-video bg-dark-surface overflow-hidden border-b border-white/5">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold text-white bg-dark/80 backdrop-blur-md border border-white/10 shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold backdrop-blur-md flex items-center gap-1.5 ${
              isCompleted 
                ? 'bg-emerald-950/90 text-pixel-emerald border border-emerald-500/30' 
                : 'bg-cyan-950/90 text-pixel-cyan border border-cyan-500/30'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-pixel-emerald' : 'bg-pixel-cyan'}`} />
              {project.status}
            </span>
          </div>

          {/* Quick Hover Overlay */}
          <div className="absolute inset-0 bg-dark-base/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-white shadow-lg">
              <Eye className="w-3.5 h-3.5 text-slate-950" />
              <span>Inspect Project</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pixel-cyan transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-pixel-cyan hover:underline cursor-pointer"
        >
          <span>View Full Specifications</span>
          <ExternalLink className="w-3 h-3" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-400 hover:text-white transition-colors p-1"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-400 hover:text-white transition-colors p-1"
              title="Live Website"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
