'use client';

import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  leetcode: FaCode,
};

export default function FooterSocials({ socialLinks }) {
  return (
    <div className="flex items-center justify-between gap-2 pt-1">
      {socialLinks.map((social) => {
        const Icon = iconMap[social.type];
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.name}
            title={social.name}
            className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-brand-primary transition-all duration-300 border border-slate-700/50 shadow-sm"
          >
            {Icon && <Icon className="w-4 h-4" />}
          </motion.a>
        );
      })}
    </div>
  );
}