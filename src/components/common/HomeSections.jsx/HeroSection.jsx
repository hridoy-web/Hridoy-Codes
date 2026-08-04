import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import HeroImageClient from '@/components/ui/HeroImageClient';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50/50">

      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-brand-primary/10 to-purple-400/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Intro & Info  */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/*  Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-badge/80 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-wide mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-tight mb-6 font-sans">
              Hi, I&apos;m <span className="text-brand-primary">Hridoy Chowdhury</span>. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-600 to-indigo-600">
                Full-Stack MERN Developer
              </span>
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed mb-8 font-normal">
              I craft responsive, high-performance web applications using MongoDB, Express, React, Node.js, and Next.js—focused on clean code and seamless user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary text-white font-medium text-sm shadow-md shadow-brand-primary/25 hover:bg-brand-primary/95 hover:shadow-lg hover:shadow-brand-primary/30 active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <HiArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <a
                href="https://drive.google.com/file/d/1_u_mH9v0HSY0fib-ULr2S5jXYR1OrCNz/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-brand-dark font-medium text-sm hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <HiOutlineDocumentDownload className="w-5 h-5 text-brand-muted" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href="https://github.com/hridoy-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-white border border-slate-200 text-brand-dark hover:text-brand-primary hover:border-brand-primary/30 active:scale-95 transition-all duration-200 shadow-sm"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hridoy-chowdhury-webdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-white border border-slate-200 text-brand-dark hover:text-brand-primary hover:border-brand-primary/30 active:scale-95 transition-all duration-200 shadow-sm"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Core Focus Badges */}
            <div className="mt-10 pt-6 border-t border-slate-200/60 w-full flex items-center gap-3 text-xs text-brand-muted">
              <span className="font-semibold text-slate-400 uppercase tracking-wider">Core Focus:</span>
              <div className="flex flex-wrap gap-2">
                {['MERN Stack', 'Next.js', 'Tailwind CSS'].map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-700 font-medium shadow-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Client Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroImageClient />
          </div>

        </div>
      </div>
    </section>
  );
}