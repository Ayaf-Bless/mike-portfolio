
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#services' },
    { name: 'Impact', href: '#experience' },
    { name: 'Competencies', href: '#tech' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'bg-navy/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="group flex items-center gap-4">
          <div className="relative w-11 h-11 bg-white flex items-center justify-center text-navy font-black text-xl heading-font group-hover:bg-emerald group-hover:text-white transition-all duration-500 rounded-sm">
            M
            <div className="absolute -inset-1 border border-white/10 group-hover:border-emerald/50 transition-all duration-500 -z-10 translate-x-1 translate-y-1"></div>
          </div>
          <span className="heading-font text-base font-black text-white tracking-[0.3em] uppercase hidden sm:block">
            Muganza<span className="text-emerald italic">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all duration-300 py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-emerald transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="h-4 w-[1px] bg-white/10"></div>
          
          <a href="#contact" className="group relative px-6 py-3 bg-emerald text-navy font-black uppercase text-[10px] tracking-widest overflow-hidden transition-all duration-300 hover:text-white">
            <span className="relative z-10 flex items-center gap-2">
              Inquiry <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-navy -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-3 bg-white/5 hover:bg-emerald hover:text-navy transition-all duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-navy transition-all duration-700 ease-in-out z-40 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4"></div>
        
        <div className="flex flex-col h-full justify-center px-12 gap-12 relative z-10">
          <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          
          <div className="space-y-8">
            <p className="text-emerald text-[10px] font-black uppercase tracking-[0.5em] mb-4">Portfolio Navigation</p>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block heading-font text-5xl font-black uppercase tracking-tighter text-white/40 hover:text-white transition-all hover:translate-x-4"
              >
                {link.name}<span className="text-emerald opacity-0 group-hover:opacity-100">.</span>
              </a>
            ))}
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10 w-full max-w-sm">
             <a 
               href="#contact" 
               onClick={() => setIsMenuOpen(false)}
               className="inline-flex items-center gap-4 text-emerald font-black uppercase tracking-[0.3em] text-xs group"
             >
               Start a Consultation <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
             </a>
             <div className="mt-8 flex gap-6">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">EN</span>
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">FR</span>
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">SW</span>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
