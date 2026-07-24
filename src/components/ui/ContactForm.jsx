'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane, HiCheckCircle, HiExclamationTriangle } from 'react-icons/hi2';
import { sendContactEmail } from '@/lib/sendContactEmail';
import { contactInfo, socialLinks } from '../data/contactData';

export default function ContactForm() {
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    const formData = new FormData(e.target);

    try {
      const data = await sendContactEmail(formData);

      if (data.success) {
        setStatus({ loading: false, success: true, error: false });
        e.target.reset();
      } else {
        console.error("Web3Forms Error:", data); 
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (err) {
      console.error("Submission Catch Error:", err); 
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      {/* Left Column: Direct Info Cards & Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-5 space-y-6"
      >
        <div className="bg-white dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-200/20 dark:shadow-none space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
              Let&apos;s Connect
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
              Feel free to reach out directly through any of these platforms.
            </p>
          </div>

          <div className="space-y-3">
            {(contactInfo || []).map((item) => {
              const Icon = item.icon;
              const isMail = item.href.startsWith('mailto:');
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={isMail ? '_self' : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-100 dark:border-slate-800/60 hover:border-purple-300 dark:hover:border-purple-800/50 transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="p-3 rounded-xl bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-5 h-5" />}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500 block uppercase tracking-wider">
                      {item.label}
                    </span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Profiles */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-3 font-semibold uppercase tracking-wider">
              Social Profiles
            </p>
            <div className="flex items-center gap-3">
              {(socialLinks || []).map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 ${social.hoverColor || ''} hover:-translate-y-1 transition-all duration-300 shadow-sm`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Interactive Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-7"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-200/20 dark:shadow-none space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-2 uppercase tracking-wider">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 focus:ring-1 focus:ring-purple-600 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-2 uppercase tracking-wider">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 focus:ring-1 focus:ring-purple-600 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-2 uppercase tracking-wider">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Opportunity / Inquiry"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 focus:ring-1 focus:ring-purple-600 transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-2 uppercase tracking-wider">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Hi Hridoy, I would like to discuss..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 focus:ring-1 focus:ring-purple-600 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white text-sm font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 transition-all duration-300 disabled:opacity-70 cursor-pointer hover:shadow-purple-500/40"
          >
            {status.loading ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <span>Send Message</span>
                <HiPaperAirplane className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Status Feedback */}
          {status.success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2"
            >
              <HiCheckCircle className="w-4 h-4 shrink-0" />
              <span>Thank you! Your message has been sent successfully.</span>
            </motion.div>
          )}

          {status.error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium flex items-center gap-2"
            >
              <HiExclamationTriangle className="w-4 h-4 shrink-0" />
              <span>Something went wrong. Please try emailing directly.</span>
            </motion.div>
          )}
        </form>
      </motion.div>

    </div>
  );
}