'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineCode, 
  HiOutlineAcademicCap, 
  HiOutlineBriefcase, 
  HiOutlineMail, 
  HiMenuAlt3, 
  HiX 
} from 'react-icons/hi'; // Correct import path

const navItems = [
  { name: 'Home', id: 'hero', path: '#hero', icon: HiOutlineHome },
  { name: 'About', id: 'about', path: '#about', icon: HiOutlineUser },
  { name: 'Skills', id: 'skills', path: '#skills', icon: HiOutlineCode },
  { name: 'Education', id: 'education', path: '#education', icon: HiOutlineAcademicCap },
  { name: 'Projects', id: 'projects', path: '#projects', icon: HiOutlineBriefcase },
  { name: 'Contact', id: 'contact', path: '#contact', icon: HiOutlineMail },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  // Scroll spy to detect active section
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleScrollToSection = (e, targetPath, id) => {
    if (pathname === '/' && targetPath.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
        closeMenu();
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1 p-1.5 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-full border border-slate-200/80 dark:border-slate-800 shadow-sm">
        {navItems.map((item) => {
          const isActive = pathname === '/' && activeSection === item.id;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={(e) => handleScrollToSection(e, item.path, item.id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                isActive
                  ? 'text-white bg-brand-primary shadow-md shadow-brand-primary/30 scale-105'
                  : 'text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          type="button"
          className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 active:scale-95"
          aria-expanded={isOpen}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <HiX className="w-6 h-6 text-brand-primary" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 p-3 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-2xl md:hidden z-50 transition-all duration-300">
          <ul className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === '/' && activeSection === item.id;
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleScrollToSection(e, item.path, item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-primary text-white font-bold shadow-lg shadow-brand-primary/20'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-brand-primary'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}