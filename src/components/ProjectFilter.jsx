import React from 'react';

export default function ProjectFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              isActive
                ? 'bg-pixel-cyan text-slate-950 shadow-md'
                : 'bg-dark-card border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
