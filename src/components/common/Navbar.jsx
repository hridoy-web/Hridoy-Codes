import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-100/80 transition-all duration-300">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20" aria-label="Main Navigation">
          
          {/* Logo Component */}
          <Logo />

          {/* Nav Links Component */}
          <NavLinks />

        </nav>
      </div>
    </header>
  );
}