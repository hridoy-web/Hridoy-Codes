'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; 
import Logo from '@/components/common/Logo';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FooterSocials from '@/components/ui/FooterSocials';
import { footerNavLinks, footerSocialLinks } from '../data/footerData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter(); 

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      if (pathname === '/') {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/${href}`);
      }
    }
  };

  return (
    <footer className="relative w-full bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-8 overflow-hidden font-sans">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Col 1: Brand Logo & Status */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="footer" />

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Crafting scalable, high-performance MERN & Next.js applications with pixel-perfect UI and clean code principles.
            </p>

            {/* Developer Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">Available for Full-Time / Freelance</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-widest text-white uppercase flex items-center gap-2">
              <span className="text-brand-secondary font-mono">{'//'}</span> Quick Navigation
            </h3>
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-400 hover:text-brand-secondary transition-colors duration-200 flex items-center gap-1.5 group font-medium"
                  >
                    <span className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">&gt;</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Terminal Style Social Box */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-widest text-white uppercase flex items-center gap-2">
              <span className="text-brand-secondary font-mono">{'//'}</span> Connect With Me
            </h3>

            {/* Developer Terminal Card */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[10px] text-slate-500">socials.config.js</span>
              </div>

              {/* Client Component for Interactive Social Icons */}
              <FooterSocials socialLinks={footerSocialLinks} />
            </div>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>&copy; {currentYear} Hridoy Chowdhury.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400">Built with Next.js & Tailwind</span>
          </div>

          <div className="flex items-center gap-4">
            <ScrollToTop />
          </div>
        </div>

      </div>
    </footer>
  );
}