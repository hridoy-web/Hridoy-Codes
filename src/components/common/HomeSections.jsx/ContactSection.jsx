import React from 'react';
import ContactForm from '@/components/ui/ContactForm'; 

export default function ContactSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 space-y-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/50 rounded-full border border-purple-200 dark:border-purple-800">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" />
          Get In Touch
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s Build Something Together
        </h2>
        <p className="text-slate-700 dark:text-slate-500 max-w-xl mx-auto text-sm md:text-base">
          I am always open to discussing new opportunities, web development projects, or partnerships.
        </p>
      </div>

      {/* Main Form Component */}
      <ContactForm />
    </section>
  );
}