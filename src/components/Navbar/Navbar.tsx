import { useState } from 'react';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { NavbarProps } from './Navbar.types';

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -50',
      onUpdate: (self) => {
        setIsScrolled(self.scroll() > 50);
      },
    });
  });

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-500", className)}>
      <nav 
        className={cn(
          "pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-between px-8 py-4 rounded-full w-full max-w-5xl",
          isScrolled 
            ? "bg-white/60 backdrop-blur-xl text-sage shadow-sm border border-sage/10 py-3" 
            : "bg-transparent text-white border border-transparent"
        )}
      >
        <div className="font-serif italic text-3xl tracking-widest font-semibold pr-4">
          Savon
        </div>
        <div className="hidden md:flex gap-8 font-sans text-xs uppercase tracking-[0.2em] font-semibold">
          <a href="#filosofia" className="hover:opacity-70 transition-opacity">Filosofía</a>
          <a href="#coleccion" className="hover:opacity-70 transition-opacity">Colección</a>
          <a href="#rutina" className="hover:opacity-70 transition-opacity">Ritual</a>
        </div>
        <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold hover:scale-105 transition-transform duration-300">
          <span className="hidden md:inline">Taller</span>
          <Menu className="w-5 h-5" />
        </button>
      </nav>
    </header>
  );
}
