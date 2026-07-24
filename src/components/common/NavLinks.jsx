'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HiOutlineUser, 
  HiOutlineCode, 
  HiOutlineBriefcase, 
  HiOutlineBookOpen, 
  HiOutlineMail, 
  HiMenuAlt3, 
  HiX 
} from 'react-icons/hi';

const navItems = [
  { name: 'About', path: '#about', icon: HiOutlineUser },
  { name: 'Skills', path: '#skills', icon: HiOutlineCode },
  { name: 'Projects', path: '#projects', icon: HiOutlineBriefcase },
  { name: 'Blog', path: '/blog', icon: HiOutlineBookOpen },
  { name: 'Contact', path: '#contact', icon: HiOutlineMail },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.name} className="relative group py-2">
              <Link
                href={item.path}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'
                }`}
              >
                {item.name}
              </Link>
              
              {/* Smooth Electric Violet Animated Underline */}
              <span 
                className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 rounded-full ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </li>
          );
        })}
      </ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          type="button"
          className="p-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 text-brand-dark focus:outline-none transition-colors border border-slate-200/60"
          aria-expanded={isOpen}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <HiX className="w-6 h-6 text-brand-primary" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Modern Dropdown Modal */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-100 shadow-xl shadow-slate-200/50 md:hidden transition-all duration-200">
          <ul className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-badge text-brand-primary border border-brand-primary/20'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-brand-primary' : 'text-slate-400'}`} />
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