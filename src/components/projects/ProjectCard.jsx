'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/projects/ProjectModal';
import { 
  HiArrowTopRightOnSquare, 
  HiArrowRight, 
  HiSparkles,
  HiCodeBracket
} from 'react-icons/hi2';

export default function ProjectCard({ project, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Dynamic file extension based on project technology
  const fileExtension = project.isTypescript ? 'tsx' : 'jsx';

  return (
    <>
      <article className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-primary/50 transition-all duration-300 flex flex-col justify-between">
        
        <div>
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
            </div>

            <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
              <HiCodeBracket className="w-4 h-4 text-brand-primary" />
              <span>{project.slug}.{fileExtension}</span>
            </div>

            <span className="text-slate-400 dark:text-slate-500 font-bold">
              0{index + 1}
            </span>
          </div>

          {/* Project Preview Image */}
          <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800/50 overflow-hidden border-b border-slate-200 dark:border-slate-800">
            {!imageError && project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                onError={() => setImageError(true)}
              />
            ) : (
              /* Fallback view if image fails to load */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-slate-500 dark:text-slate-400 font-sans text-xs bg-slate-100 dark:bg-slate-950">
                <HiCodeBracket className="w-8 h-8 text-brand-primary mb-2" />
                <p className="font-semibold text-slate-700 dark:text-slate-300">Interactive Preview Ready</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Click details to view full stack features</p>
              </div>
            )}

            {/* Category Tag (Replaced Slash with Bullet Point) */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-md bg-white/95 dark:bg-slate-900/90 text-brand-primary dark:text-purple-300 border border-slate-200 dark:border-slate-700 backdrop-blur-md shadow-xs">
                {project.category}
              </span>
            </div>

            {/* Live Link Button */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/95 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-brand-primary backdrop-blur-md border border-slate-200 dark:border-slate-700 transition-all shadow-md group/link"
              aria-label={`Live Demo of ${project.title}`}
            >
              <HiArrowTopRightOnSquare className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            </a>
          </div>

          {/* Card Main Body */}
          <div className="p-5 space-y-3">
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-brand-primary dark:text-purple-400 font-sans">
                {project.subtitle}
              </p>
            </div>

            {/* Readability Fix for Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-sans">
              {project.shortDescription}
            </p>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/80 text-brand-primary dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-5 pt-0 mt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-brand-primary dark:bg-slate-800 dark:hover:bg-brand-primary text-slate-800 dark:text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer font-sans shadow-xs"
          >
            <HiSparkles className="w-4 h-4 text-brand-primary group-hover/btn:text-white transition-transform" />
            <span>View Case Study & Details</span>
            <HiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </article>

      {/* Interactive Modal */}
      {isModalOpen && (
        <ProjectModal
          project={project}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}