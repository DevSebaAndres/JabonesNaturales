import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { cn } from '../../lib/utils';
import type { CollectionProps } from './Collection.types';

function TierraMolecule() {
  const ref = useRef<SVGSVGElement>(null);
  useGSAP(() => {
    gsap.to(ref.current, { rotation: 360, duration: 20, repeat: -1, ease: "linear" });
  }, []);
  return (
    <svg ref={ref} viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 stroke-terracotta fill-none" strokeWidth="1">
      <circle cx="50" cy="50" r="40" strokeDasharray="4 4" opacity="0.3" />
      <circle cx="50" cy="10" r="4" className="fill-terracotta" />
      <circle cx="90" cy="50" r="6" className="fill-terracotta" />
      <circle cx="10" cy="50" r="5" className="fill-terracotta" />
      <path d="M50 10 L90 50 L50 90 L10 50 Z" opacity="0.5" />
      <path d="M50 50 L90 50 M50 50 L10 50 M50 50 L50 10 M50 50 L50 90" opacity="0.5" />
      <circle cx="50" cy="50" r="8" className="fill-terracotta" />
    </svg>
  );
}

function BotanicaScanner() {
  const scannerRef = useRef<SVGLineElement>(null);
  useGSAP(() => {
    gsap.to(scannerRef.current, { y: 100, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);
  return (
    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 stroke-sage fill-none" strokeWidth="1">
      <path d="M50 5 Q70 20 70 50 Q70 80 50 95 Q30 80 30 50 Q30 20 50 5 Z" strokeWidth="1" opacity="0.5" />
      <path d="M50 5 L50 95" opacity="0.5" />
      <path d="M50 20 Q60 15 65 20" opacity="0.3" />
      <path d="M50 40 Q65 35 68 40" opacity="0.3" />
      <path d="M50 60 Q60 55 65 60" opacity="0.3" />
      <path d="M50 20 Q40 15 35 20" opacity="0.3" />
      <path d="M50 40 Q35 35 32 40" opacity="0.3" />
      <path d="M50 60 Q40 55 35 60" opacity="0.3" />
      {/* Scanner Line */}
      <line ref={scannerRef} x1="20" y1="0" x2="80" y2="0" stroke="#4A5E4F" strokeWidth="2" filter="drop-shadow(0 0 4px #4A5E4F)" />
    </svg>
  );
}

function RitualWave() {
  const pathRef = useRef<SVGPathElement>(null);
  useGSAP(() => {
    gsap.to(pathRef.current, { strokeDashoffset: -200, duration: 5, repeat: -1, ease: "linear" });
  }, []);
  return (
    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 stroke-charcoal fill-none overflow-visible" strokeWidth="2">
      <path 
        ref={pathRef}
        d="M -100 50 Q -75 25 -50 50 T 0 50 T 50 50 T 100 50 T 150 50 T 200 50" 
        strokeDasharray="200"
        strokeDashoffset="0"
        opacity="0.6"
      />
      <circle cx="50" cy="50" r="40" strokeWidth="1" opacity="0.1" />
    </svg>
  );
}

const CARDS = [
  {
    id: 'tierra',
    title: 'Línea Tierra',
    desc: 'Arcillas crudas y exfoliantes volcánicos. La estructura fundamental de la limpieza.',
    bg: 'bg-butter text-charcoal',
    Visual: TierraMolecule
  },
  {
    id: 'botanica',
    title: 'Línea Botánica',
    desc: 'Infusiones en frío y extractos supercríticos. La vitalidad de la flora concentrada.',
    bg: 'bg-sage text-butter',
    Visual: BotanicaScanner
  },
  {
    id: 'ritual',
    title: 'Línea Ritual',
    desc: 'Aceites preciosos y resinas aromáticas. El arte de detener el tiempo.',
    bg: 'bg-charcoal text-white',
    Visual: RitualWave
  }
];

export function Collection({ className }: CollectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (i === cardsRef.current.length - 1) return; // Last card doesn't scale down
      
      const nextCard = cardsRef.current[i + 1];
      
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.5,
        filter: "blur(20px)",
        ease: "none",
        scrollTrigger: {
          trigger: nextCard,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="coleccion"
      className={cn("relative w-full", className)}
    >
      {CARDS.map((card, i) => (
        <div 
          key={card.id}
          ref={addToRefs}
          className={cn(
            "sticky top-0 w-full h-[100dvh] flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden transform-origin-top",
            card.bg
          )}
          style={{ zIndex: i + 1 }}
        >
          <div className="absolute inset-0 bg-charcoal mix-blend-overlay opacity-5 pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
                // Archivo 0{i + 1}
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif italic tracking-tight mb-8">
                {card.title}
              </h2>
              <p className="font-sans text-lg md:text-xl opacity-80 max-w-md mx-auto md:mx-0 leading-relaxed">
                {card.desc}
              </p>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
              <card.Visual />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
