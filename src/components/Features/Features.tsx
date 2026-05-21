import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { FeaturesProps } from './Features.types';

// Card 1
function BotanicalIntelligence() {
  const [items, setItems] = useState([
    { id: 1, text: "Aceite de Argán Puro" },
    { id: 2, text: "Extracto de Caléndula" },
    { id: 3, text: "Manteca de Karité Raw" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArray = [...prev];
        const last = newArray.pop();
        if (last) newArray.unshift(last);
        return newArray;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-6">
      <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
        // Inteligencia Botánica
      </div>
      <div className="relative w-full max-w-[240px] h-[160px] mt-8">
        {items.map((item, index) => {
          const isTop = index === 0;
          const isMiddle = index === 1;
          
          return (
            <div
              key={item.id}
              className={cn(
                "absolute left-0 right-0 p-6 bg-white rounded-[2rem] shadow-sm border border-charcoal/5 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                isTop ? "translate-y-0 scale-100 z-30 opacity-100 shadow-xl" :
                isMiddle ? "translate-y-5 scale-95 z-20 opacity-70" :
                "translate-y-10 scale-90 z-10 opacity-40"
              )}
            >
              <div className="w-8 h-8 rounded-full bg-sage/10 mb-4 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-sage" />
              </div>
              <div className="font-sans font-semibold text-sm text-charcoal">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Card 2
function SkinJournal() {
  const messages = [
    "Equilibrando pH cutáneo...",
    "Activando propiedades antiinflamatorias...",
    "Fusionando aceites esenciales..."
  ];
  const [msgIndex, setMsgIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMsg = messages[msgIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentMsg) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setMsgIndex((prev) => (prev + 1) % messages.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentMsg.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 30 : 60);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, msgIndex, messages]);

  return (
    <div className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-6">
      <div className="flex justify-between items-center">
        <div className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
          // Diario de Piel
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta">
            Producción
          </span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-end pb-8">
        <div className="font-serif italic text-2xl text-charcoal min-h-[60px] leading-tight">
          {text}
          <span className="inline-block w-[2px] h-6 bg-terracotta ml-1 animate-[pulse_1s_ease-in-out_infinite] align-middle" />
        </div>
      </div>
    </div>
  );
}

// Card 3
function RitualProtocol() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
  const [activeDays, setActiveDays] = useState<number[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    
    // reset
    tl.set(cursorRef.current, { x: 0, y: 0, opacity: 0 });
    tl.call(() => setActiveDays([]));

    // move to Wednesday
    tl.to(cursorRef.current, { opacity: 1, duration: 0.5 });
    tl.to(cursorRef.current, { x: 140, y: 55, duration: 1, ease: 'power2.inOut' });
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 });
    tl.call(() => setActiveDays(prev => [...prev, 3]));
    
    // move to Sunday
    tl.to(cursorRef.current, { x: 10, y: 55, duration: 1, ease: 'power2.inOut' });
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 });
    tl.call(() => setActiveDays(prev => [...prev, 0]));

    // move to Apply button
    tl.to(cursorRef.current, { x: 120, y: 150, duration: 1, ease: 'power2.inOut' });
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 });

    // fade out
    tl.to(cursorRef.current, { opacity: 0, duration: 0.5 });
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 mb-12">
        // Protocolo
      </div>
      
      <div className="relative mt-4">
        <div className="flex justify-between mb-12 px-2">
          {days.map((day, i) => (
            <div 
              key={i} 
              className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center text-xs font-sans font-semibold transition-all duration-500",
                activeDays.includes(i) ? "bg-sage text-white scale-110 shadow-md" : "bg-charcoal/5 text-charcoal/50"
              )}
            >
              {day}
            </div>
          ))}
        </div>

        <button className="relative overflow-hidden w-full py-4 rounded-[2rem] bg-charcoal text-white text-[10px] uppercase tracking-widest font-semibold group transition-all duration-300 hover:scale-[1.02]">
          <span className="relative z-10">Aplicar Rutina</span>
          <div className="absolute inset-0 bg-sage transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
        </button>

        <div ref={cursorRef} className="absolute top-0 left-4 z-50 pointer-events-none drop-shadow-md">
          <MousePointer2 className="w-5 h-5 text-charcoal fill-white" />
        </div>
      </div>
    </div>
  );
}

export function Features({ className }: FeaturesProps) {
  return (
    <section className={cn("w-full py-32 px-6 md:px-16 lg:px-24 bg-butter", className)}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 md:flex justify-between items-end gap-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal tracking-tight max-w-2xl mb-8 md:mb-0">
            El software de la <br />
            <span className="font-serif italic text-sage tracking-wide text-5xl md:text-6xl lg:text-7xl">naturaleza.</span>
          </h2>
          <p className="max-w-md font-sans text-charcoal/70 leading-relaxed text-sm">
            Nuestros jabones no se fabrican; se formulan. Reemplazamos los procesos industriales con precisión botánica, diseñando cada pastilla como un protocolo para tu piel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] border border-sage/10 overflow-hidden hover:shadow-xl hover:shadow-sage/5 transition-shadow duration-500">
            <BotanicalIntelligence />
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] border border-sage/10 overflow-hidden hover:shadow-xl hover:shadow-sage/5 transition-shadow duration-500">
            <SkinJournal />
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] border border-sage/10 overflow-hidden hover:shadow-xl hover:shadow-sage/5 transition-shadow duration-500">
            <RitualProtocol />
          </div>
        </div>
      </div>
    </section>
  );
}
