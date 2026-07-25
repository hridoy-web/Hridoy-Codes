'use client';

import { useEffect } from 'react';
import { 
  HiXMark, 
  HiArrowTopRightOnSquare, 
  HiCodeBracket, 
  HiCheckCircle, 
  HiLightBulb, 
  HiSparkles,
  HiCommandLine 
} from 'react-icons/hi2';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const fileExtension = project.isTypescript ? 'tsx' : 'jsx';

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md transition-all duration-300 pt-16 sm:pt-20">
      {/* Backdrop overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card Box */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto transform transition-all">
        
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
              {project.slug}.{fileExtension}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6 text-slate-800 dark:text-slate-100 font-sans">
          
          {/* Header & Badges */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-purple-100 dark:bg-purple-950/80 text-brand-primary dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                {project.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-semibold text-brand-primary dark:text-purple-400">
              {project.subtitle}
            </p>
          </div>

          {/* Action Call-To-Actions */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <HiArrowTopRightOnSquare className="w-4 h-4" /> Live Preview
            </a>
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all border border-slate-200 dark:border-slate-700 hover:scale-[1.02] active:scale-[0.98]"
            >
              <HiCodeBracket className="w-4 h-4" /> Client Code
            </a>
            {project.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all border border-slate-200 dark:border-slate-700 hover:scale-[1.02] active:scale-[0.98]"
              >
                <HiCommandLine className="w-4 h-4" /> Server Code
              </a>
            )}
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Overview Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                  <HiCheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges & Solutions */}
          <div className="p-4 sm:p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 space-y-2">
            <div className="flex items-center gap-2 text-brand-primary dark:text-purple-300 font-bold text-xs uppercase tracking-wider">
              <HiLightBulb className="w-4 h-4" /> Challenges & Engineering Solutions
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {project.challenges}
            </p>
          </div>

          {/* Future Plans */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">
              <HiSparkles className="w-4 h-4 text-brand-primary" /> Future Expansion Plans
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {project.futurePlans.map((plan, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}