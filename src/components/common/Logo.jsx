import Link from 'next/link';
import { HiCode } from 'react-icons/hi';

export default function Logo({ variant = 'default' }) {
  const isDarkFooter = variant === 'footer';

  return (
    <Link 
      href="/" 
      className="group flex items-center gap-3.5 focus:outline-none select-none"
      aria-label="Hridoy Codes Home"
    >
      {/* Rounded Icon Box */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-all duration-300">
        <HiCode className="w-6 h-6 text-white" />
      </div>
      
      {/* Text Branding */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          {/* Main Title */}
          <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${
            isDarkFooter 
              ? 'text-white group-hover:text-purple-300' 
              : 'text-slate-900 dark:text-white group-hover:text-purple-600'
          }`}>
            Hridoy
          </span>

          {/* Badge */}
          <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded-md ${
            isDarkFooter
              ? 'text-purple-200 bg-purple-900/90 border border-purple-700/60'
              : 'text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/80 border border-purple-200/60 dark:border-purple-800/60'
          }`}>
            Codes
          </span>
        </div>

        {/* Subtitle */}
        <span className={`text-[9px] font-mono font-semibold tracking-widest uppercase transition-colors mt-0.5 ${
          isDarkFooter
            ? 'text-slate-300 group-hover:text-purple-300'
            : 'text-slate-500 dark:text-slate-400 group-hover:text-purple-600'
        }`}>
          MERN Stack Developer
        </span>
      </div>
    </Link>
  );
}