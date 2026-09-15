import React from 'react';
import { 
  Globe, 
  Layout, 
  Database, 
  Smartphone, 
  Palette,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      category: "Full-Cycle Web",
      description: "Custom, scalable, and responsive web applications engineered with clean architectures and high performance.",
      icon: Globe,
      features: ["Custom Web Apps", "Performance Optimization", "SEO & Speed First"],
      teamFocus: "Full Team Synergy"
    },
    {
      id: "frontend-dev",
      title: "Frontend Development",
      category: "Interactive Interfaces",
      description: "Fluid, high-performance user interfaces built with React, modern CSS, dynamic state management, and seamless responsiveness.",
      icon: Layout,
      features: ["React / Next-Gen Frontend", "Micro-Interactions", "Fluid Animations"],
      teamFocus: "Led by Saeed, Deena & Urooj"
    },
    {
      id: "backend-db",
      title: "Backend and Database Integration",
      category: "Infrastructure & APIs",
      description: "Robust, secure server architectures, custom RESTful & GraphQL APIs, and optimized SQL/NoSQL database systems.",
      icon: Database,
      features: ["Secure API Architectures", "Relational & NoSQL Databases", "Authentication & Cloud"],
      teamFocus: "Led by Hamza & Danyal"
    },
    {
      id: "app-dev",
      title: "App Development",
      category: "Cross-Platform Mobile",
      description: "Cross-platform mobile applications that bring your product vision to iOS and Android with native-like fluidity.",
      icon: Smartphone,
      features: ["Cross-Platform Apps", "Offline Capabilities", "Native Device Integrations"],
      teamFocus: "Modern Mobile Stacks"
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      category: "Pixel-Perfect Experiences",
      description: "Intuitive, human-centric digital designs, wireframes, design systems, and clickable prototypes tailored to maximize user conversion.",
      icon: Palette,
      features: ["Figma Design Systems", "User Journey Mapping", "Pixel-Perfect Prototypes"],
      teamFocus: "Led by Deena, Urooj & Saeed"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden">
      
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pixel-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pixel-emerald/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-surface border border-pixel-cyan/30 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-pixel-cyan"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-pixel-cyan uppercase">
              CAPABILITIES &amp; EXPERTISE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            What We Do For Clients
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            End-to-end engineering tailored to turn complex digital requirements into sleek, scalable, revenue-generating products.
          </p>
        </div>

        {/* 5 Unique Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-7 sm:p-8 bg-dark-card/90 border border-white/10 hover:border-pixel-cyan/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 border-pixel-cyan/30 bg-gradient-to-b from-dark-card to-dark-surface' : ''
                }`}
              >
                {/* Top Subtle Pill */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pixel-cyan/20 to-pixel-emerald/10 border border-pixel-cyan/30 text-pixel-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider text-pixel-cyan uppercase block mb-1">
                    {service.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pixel-cyan transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Feature Bullets */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pixel-emerald shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Expertise Tag */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[11px] text-pixel-emerald font-semibold">
                    {service.teamFocus}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-pixel-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

              </div>
            );
          })}

          {/* 6th Complementary Client Card: Full-Stack Project Delivery */}
          <div className="rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-pixel-cyan/15 via-dark-card to-dark-surface border border-pixel-cyan/40 flex flex-col justify-between hover:border-pixel-cyan transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-pixel-cyan text-slate-950 flex items-center justify-center font-black text-base shadow-lg shadow-cyan-500/20">
                  6P
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-pixel-cyan/20 text-pixel-cyan border border-pixel-cyan/40 font-bold">
                  CLIENT PARTNERSHIP
                </span>
              </div>

              <span className="text-xs font-mono font-bold tracking-wider text-pixel-emerald uppercase block mb-1">
                Full-Stack Delivery
              </span>

              <h3 className="text-xl font-bold text-white mb-3">
                Have a Custom Product in Mind?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                From initial wireframing and frontend craft to secure database schemas and deployment, we bring complete project velocity.
              </p>
            </div>

            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-pixel-cyan hover:bg-cyan-300 transition-colors shadow-lg"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
