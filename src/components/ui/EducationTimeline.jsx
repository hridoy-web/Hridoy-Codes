'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { HiBuildingLibrary, HiCalendarDays, HiCheck, HiArrowPath, HiAcademicCap, HiBookOpen } from 'react-icons/hi2';

export default function EducationTimeline({ data }) {
  const containerRef = useRef(null);

  // Smooth Scroll Progress Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 85%']
  });

  // Extremely Smooth Spring Motion
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001
  });

  const laserTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      
      {/* TIMELINE LINE & GLOWING TRAVELING NODE */}
      <div className="absolute left-5 md:left-1/2 top-6 bottom-6 -translate-x-1/2 w-0.5 bg-slate-200 dark:bg-slate-800 z-0">
        <motion.div 
          style={{ scaleY }}
          className="w-full h-full bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-600 origin-top"
        />

        {/* Glowing Laser Light Node */}
        <motion.div 
          style={{ top: laserTop }}
          className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-white dark:border-slate-900 shadow-[0_0_15px_#a855f7] z-10"
        />
      </div>

      {/* ITEMS LIST */}
      <div className="space-y-12 md:space-y-16 relative z-10">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <article 
              key={item.id}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Desktop Empty Space Side */}
              <div className="hidden md:block w-1/2" />

              {/* Center Timeline Badge */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 p-2 bg-white dark:bg-slate-900 rounded-full border-2 border-purple-500 text-purple-600 dark:text-purple-400 z-20 shadow-lg ring-4 ring-purple-50 dark:ring-purple-950/40">
                {item.status === 'Completed' ? (
                  <HiCheck className="w-4 h-4 font-bold" />
                ) : (
                  <HiArrowPath className="w-4 h-4 font-bold animate-spin-slow" />
                )}
              </div>

              {/* Card Container */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 45 : -45, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-1/2 pl-12 ${
                  isEven ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'
                }`}
              >
                <motion.div 
                  whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-slate-200/30 dark:shadow-none hover:border-purple-300 dark:hover:border-purple-800 transition-colors duration-300"
                >
                  
                  {/* Card Header */}
                  <header className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 rounded-2xl bg-purple-100/80 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 shrink-0">
                        {item.iconName === 'academic' ? (
                          <HiAcademicCap className="w-6 h-6" />
                        ) : (
                          <HiBookOpen className="w-6 h-6" />
                        )}
                      </span>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest block mb-0.5">
                          {item.status}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                          {item.degree}
                        </h3>
                      </div>
                    </div>

                    {/* Dynamic Status Badge */}
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${item.statusColor} shrink-0`}>
                      {item.session && item.status === 'Completed' ? item.session : item.status}
                    </span>
                  </header>

                  {/* Major */}
                  <p className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4">
                    {item.major}
                  </p>

                  {/* Institution & Session */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <HiBuildingLibrary className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {item.institution}
                      </span>
                    </div>

                    {item.session && item.status !== 'Completed' && (
                      <div className="flex items-center gap-1.5">
                        <HiCalendarDays className="w-4 h-4 text-slate-400 shrink-0" />
                        <time className="font-mono text-xs text-slate-500 dark:text-slate-400">
                          {item.session}
                        </time>
                      </div>
                    )}
                  </div>

                  {/* Readable Description */}
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>

                  {/* Highlights / Tags */}
                  <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                    {item.highlights.map((tag, idx) => (
                      <li key={idx}>
                        <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 inline-block hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-200">
                          #{tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                </motion.div>
              </motion.div>

            </article>
          );
        })}
      </div>
    </div>
  );
}