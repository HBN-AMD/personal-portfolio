import React, { useState, useMemo } from 'react';
import { projects, projectCategories } from '../data/projects';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-surface/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-pixel-cyan/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pixel-cyan"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-pixel-cyan uppercase">
              PORTFOLIO &amp; BUILDS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Client &amp; System Projects
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore our work across web applications, custom software utilities, backend platforms, and UI/UX design systems.
          </p>
        </div>

        {/* Filter */}
        <ProjectFilter 
          categories={projectCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
