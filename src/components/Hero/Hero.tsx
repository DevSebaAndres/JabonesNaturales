import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { cn } from '../../lib/utils';
import type { HeroProps } from './Hero.types';

export function Hero({ className }: HeroProps) {
  const container = useRef<HTMLElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.from(textRefs.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power4.out',
      delay: 0.2,
    });
  }, { scope: container });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={container}
      className={cn("relative w-full h-[100dvh] flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 overflow-hidden", className)}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-sage/80 to-transparent z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-10 opacity-90" />
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop" 
          alt="Campo de lavanda al amanecer" 
          className="w-full h-full object-cover transform scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-white">
        <div className="overflow-hidden">
          <div ref={addToRefs}>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] leading-none font-sans font-semibold tracking-tight text-white/90">
              La tierra es
            </h1>
          </div>
        </div>
        <div className="overflow-hidden mb-12">
          <div ref={addToRefs}>
            <span className="text-7xl md:text-8xl lg:text-[11rem] leading-[0.8] font-serif italic text-butter tracking-tighter block -ml-2">
              la fórmula.
            </span>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div ref={addToRefs}>
            <p className="font-mono text-xs md:text-sm text-butter/70 tracking-widest uppercase">
              // Ingredientes verificados. Cero síntesis. 100% origen botánico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
