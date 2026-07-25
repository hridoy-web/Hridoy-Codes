import NotFoundActions from '@/components/ui/NotFoundActions';
import { HiTerminal } from 'react-icons/hi';

export const metadata = {
  title: '404 - Page Not Found | Hridoy Chowdhury',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 sm:py-28 relative overflow-hidden font-sans">
      
      {/* Soft Background Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/50 text-xs font-mono text-purple-700 dark:text-purple-300 shadow-sm">
          <HiTerminal className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Error 404 // Page_Not_Found</span>
        </div>

        {/* Clean Light & Dark Compatible 404 Text */}
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500 dark:from-slate-100 dark:via-slate-300 dark:to-slate-600 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-xl text-8xl sm:text-9xl font-black text-purple-600 pointer-events-none">
            404
          </div>
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Lost in Cyberspace?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            The route you attempted to access doesn&apos;t exist, was moved, or is temporarily unavailable.
          </p>
        </div>

        {/* Developer Code Terminal Box */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xl text-left font-mono text-xs max-w-md mx-auto space-y-2">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-slate-400 dark:text-slate-500 text-[10px]">route-exception.log</span>
          </div>
          <div className="space-y-1 pt-1">
            <p className="text-red-500 dark:text-red-400">&gt; GET /unknown-route HTTP/1.1 404</p>
            <p className="text-slate-500 dark:text-slate-400">&gt; Status: Not Found</p>
            <p className="text-purple-600 dark:text-purple-400 font-semibold">&gt; Solution: Return to safety</p>
          </div>
        </div>

        {/* Interactive Buttons */}
        <NotFoundActions />

      </div>
    </div>
  );
}