// components/Logo.jsx
import Link from 'next/link';
import { HiCode } from 'react-icons/hi';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="group flex items-center gap-3.5 focus:outline-none select-none"
      aria-label="Hridoy Codes Home"
    >
      {/* Rounded Icon Box */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary text-white shadow-md shadow-brand-primary/30 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-brand-primary/40 transition-all duration-300">
        <HiCode className="w-6 h-6 text-white" />
      </div>
      
      {/* Text Branding */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-primary transition-colors duration-300">
            Hridoy
          </span>
          <span className="font-mono text-xs font-bold text-brand-primary bg-brand-badge px-1.5 py-0.5 rounded-md">
            Codes
          </span>
        </div>
        <span className="text-[9px] font-mono font-semibold tracking-widest uppercase text-slate-500 group-hover:text-brand-primary transition-colors mt-0.5">
          MERN Stack Developer
        </span>
      </div>
    </Link>
  );
}