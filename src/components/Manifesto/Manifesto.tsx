import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { cn } from '../../lib/utils';
import type { ManifestoProps } from './Manifesto.types';

export function Manifesto({ className }: ManifestoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Text Reveal
    textRefs.current.forEach((text) => {
      gsap.from(text, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
        }
      });
    });
  }, { scope: sectionRef });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="filosofia"
      className={cn("relative w-full min-h-[120dvh] bg-charcoal text-white overflow-hidden flex flex-col justify-center py-32 px-6 md:px-16 lg:px-24 rounded-t-[3rem] -mt-12 z-20", className)}
    >
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgRef}
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2670&auto=format&fit=crop" 
          alt="Textura de musgo húmedo" 
          className="w-full h-[120%] object-cover opacity-20 transform -translate-y-10"
        />
        <div className="absolute inset-0 bg-charcoal/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/40 to-charcoal" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center pt-12">
        <div className="overflow-hidden mb-12">
          <div ref={addToRefs}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-white/40 tracking-tight leading-tight">
              La cosmética industrial pregunta:<br />
              <span className="font-serif italic tracking-wide text-white/60 mt-2 block">¿Dura más?</span>
            </h3>
          </div>
        </div>

        <div className="overflow-hidden mb-20">
          <div ref={addToRefs}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-butter tracking-tight leading-tight">
              Nosotros preguntamos:<br />
              <span className="font-serif italic tracking-wide text-sage mt-4 block text-6xl md:text-7xl lg:text-[7rem] leading-none">¿Nutre de verdad?</span>
            </h3>
          </div>
        </div>

        <div className="overflow-hidden mt-12">
          <div ref={addToRefs}>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-terracotta/90 bg-charcoal/50 inline-block px-6 py-3 rounded-full border border-terracotta/20 backdrop-blur-sm">
              [ Sin parabenos · Sin sulfatos · Sin compromiso ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
