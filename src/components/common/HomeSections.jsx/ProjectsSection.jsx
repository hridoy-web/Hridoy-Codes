import { projectsData } from '@/components/data/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';

import { HiCodeBracketSquare } from 'react-icons/hi2';

export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      aria-label="Featured Engineering Projects"
      className="py-16 sm:py-24 lg:py-32 bg-slate-50/70 dark:bg-slate-950/90 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden font-sans"
    >
      {/* Background Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3.5 sm:space-y-5 mb-12 sm:mb-16 lg:mb-20">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge dark:bg-purple-950/80 border border-purple-200/80 dark:border-purple-800/60 text-brand-primary dark:text-purple-300 text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-xs">
            <HiCodeBracketSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary dark:text-purple-300" />
            <span>Featured Engineering Works</span>
          </div>

          {/* Responsive Balanced Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white leading-tight">
            Architected Solutions.{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary">
              Production-Grade Execution.
            </span>
          </h2>

          {/* Responsive Subtitle */}
          <p className="text-xs sm:text-base lg:text-lg text-brand-muted dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans px-2">
            Explore a showcase of full-stack web applications built with strict type safety, scalable database schemas, and recruiter-ready code standards.
          </p>
        </div>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}