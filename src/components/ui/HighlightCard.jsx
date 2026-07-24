import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function HighlightCard() {
  return (
    <div className="mt-12 relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-slate-950 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-950 text-white border border-slate-800/80 shadow-xl hover:shadow-2xl hover:border-purple-500/40 transition-all duration-500 group">
      
      {/* Background Soft Glow Effect */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/30 transition-all duration-500" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Left Side: Info Content */}
        <div className="space-y-3 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Production Ready
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors duration-300">
            Always expanding the Tech Stack
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
            Clean Architecture, Responsive UI Design, SSR with Next.js, and Secure Authentication are core foundations in every project I deliver.
          </p>
        </div>

        {/* Right Side: Mini Code Visualizer & Action Button */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 shrink-0 w-full sm:w-auto justify-center">
          
          {/* Mini Developer Code Snippet Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-300 shadow-inner">
            <span className="text-purple-400">const</span>
            <span className="text-emerald-400">status</span>
            <span className="text-slate-500">=</span>
            <span className="text-amber-300">&quot;Ready&quot;</span>
          </div>

          {/* Action Button */}
          <Link
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-primary via-purple-600 to-brand-secondary text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-purple-400/20 group/btn"
          >
            <span>See Projects in Action</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}