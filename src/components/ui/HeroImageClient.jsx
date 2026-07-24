'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiCheckCircle } from 'react-icons/hi';

export default function HeroImageClient() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex justify-center items-center">
      {/* Background Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-brand-primary/30 opacity-70 blur-2xl -z-10 rounded-3xl" />

      {/* Smooth GPU Accelerated Floating Motion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ 
          opacity: { duration: 0.6 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-full p-[3px] bg-gradient-to-b from-purple-400 via-slate-300 to-brand-primary/50 shadow-2xl shadow-purple-950/15 will-change-transform transform-gpu"
        style={{
          clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'
        }}
      >
        {/* Inner Tech-Window Card */}
        <div 
          className="relative w-full bg-slate-950 p-3 sm:p-4 text-white"
          style={{
            clipPath: 'polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)'
          }}
        >
          {/* Top Developer Terminal Dots */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase font-semibold">
              HRIDOY.DEV
            </span>
          </div>

          {/* Image Wrapper */}
          <div 
            className="relative aspect-[4/5] w-full bg-slate-900 overflow-hidden"
            style={{
              clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'
            }}
          >
            {!imgError ? (
              <Image
                src="/images/hridoy-codes-profile-image.webp" 
                alt="Hridoy Chowdhury - Full-Stack MERN Developer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                onError={() => setImgError(true)}
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center bg-slate-900 h-full w-full">
                <HiOutlineCode className="w-10 h-10 text-brand-primary mb-2" />
                <span className="text-base font-bold text-white">Hridoy Chowdhury</span>
              </div>
            )}

            {/* Gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Glass Badge */}
          <div className="mt-3 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-brand-primary/20 text-purple-300">
                <HiOutlineCode className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100 flex items-center gap-1">
                  Clean Architecture
                  <HiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </p>
                <p className="text-[10px] font-mono text-slate-400">Scalable & Modern</p>
              </div>
            </div>
            <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              MERN
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}