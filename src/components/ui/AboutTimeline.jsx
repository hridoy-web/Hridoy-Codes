'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  HiDevicePhoneMobile, 
  HiAcademicCap, 
  HiTrophy, 
  HiPuzzlePiece,
  HiCheck,
  HiArrowTrendingUp
} from 'react-icons/hi2';
import { FaGamepad, FaBaseball } from 'react-icons/fa6';

const leftCardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function AboutTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Base Inactive Track */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />
      
      {/* Animated Active Scroll Progress Line */}
      <motion.div 
        style={{ scaleY }}
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-brand-primary to-emerald-400 -translate-x-1/2 rounded-full origin-top z-0 shadow-[0_0_12px_rgba(147,51,234,0.5)]"
      />

      <div className="space-y-12 md:space-y-16 relative z-10">
        
        {/* STEP 1 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <motion.div 
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full md:w-1/2 md:pr-12 pl-12 md:pl-0"
          >
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 relative group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-2xl bg-purple-100 text-purple-600">
                  <HiDevicePhoneMobile className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider block">Step 01 • The Spark</span>
                  <h3 className="text-xl font-bold text-brand-dark">Smartphone to Web</h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                My story didn&apos;t start with a high-end setup. Driven by pure passion, I built my first Blogger site directly on my mobile phone—using AI tools to code, customize layouts, and publish articles without a laptop.
              </p>
            </div>
          </motion.div>

          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 p-2 bg-white rounded-full border-4 border-purple-500 text-purple-600 z-10 shadow-md">
            <HiCheck className="w-4 h-4 font-bold" />
          </div>

          <div className="hidden md:block w-1/2" />
        </div>

        {/* STEP 2 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="hidden md:block w-1/2" />

          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 p-2 bg-white rounded-full border-4 border-brand-primary text-brand-primary z-10 shadow-md">
            <HiAcademicCap className="w-4 h-4 font-bold" />
          </div>

          <motion.div 
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full md:w-1/2 md:pl-12 pl-12"
          >
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 relative group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <HiAcademicCap className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider block">Step 02 • Intensive Training</span>
                  <h3 className="text-xl font-bold text-brand-dark">6 Months &amp; 11 Assignments</h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Joined Programming Hero Batch-13. For 6 months (Jan–Jul 2026), I maintained strict 24-hour module deadlines and completed 11 complex assignments on time with a 70%+ average score.
              </p>
            </div>
          </motion.div>
        </div>

        {/* STEP 3 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <motion.div 
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full md:w-1/2 md:pr-12 pl-12 md:pl-0"
          >
            <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-brand-primary/30 blur-3xl rounded-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <HiTrophy className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">Step 03 • Major Milestone</span>
                  <h3 className="text-xl font-bold text-white">Selected for SCIC</h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Out of <span className="text-emerald-400 font-bold">5,000+ candidates</span>, I earned my spot in the elite <span className="text-purple-300 font-bold">SCIC (Super Charged Interview Club)</span>—achieved by only the top 680 performers (Top 13%).
              </p>
            </div>
          </motion.div>

          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 p-2 bg-slate-950 rounded-full border-4 border-emerald-400 text-emerald-400 z-10 shadow-lg">
            <HiTrophy className="w-4 h-4" />
          </div>

          <div className="hidden md:block w-1/2" />
        </div>

        {/* STEP 4 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="hidden md:block w-1/2" />

          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 p-2 bg-white rounded-full border-4 border-indigo-500 text-indigo-500 z-10 shadow-md">
            <HiPuzzlePiece className="w-4 h-4" />
          </div>

          <motion.div 
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full md:w-1/2 md:pl-12 pl-12"
          >
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 relative group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-2xl bg-indigo-100 text-indigo-600">
                  <HiPuzzlePiece className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider block">Step 04 • Standards &amp; Balance</span>
                  <h3 className="text-xl font-bold text-brand-dark">Pixel Perfectionist</h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                I build pixel-perfect, clean, and responsive interfaces. Beyond coding, I refresh my focus through evening cricket with college friends and strategic PC gaming.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <FaBaseball className="text-indigo-500" /> Cricket Player
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <FaGamepad className="text-purple-500" /> Gamer
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* ENDING BANNER */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 text-center relative z-20"
      >
        <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-brand-primary via-purple-600 to-emerald-400 shadow-xl">
          <div className="bg-slate-950 text-white px-8 py-8 rounded-[22px] max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <HiArrowTrendingUp className="w-4 h-4" />
              <span>Never Ending Pursuit</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              The Story Doesn&apos;t End Here
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Every 3 to 4 days, I challenge myself with a new assignment, new architecture, or emerging technology. I am continuously upgrading my skillset to stay ahead and build industry-ready solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}