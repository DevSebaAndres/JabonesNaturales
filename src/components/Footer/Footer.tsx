import { cn } from '../../lib/utils';
import type { FooterProps } from './Footer.types';

export function Footer({ className }: FooterProps) {
  return (
    <footer id="rutina" className={cn("relative w-full bg-butter", className)}>
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-charcoal mb-6">Membresía</h2>
          <p className="font-sans text-charcoal/70 max-w-md mx-auto">Un suministro ininterrumpido de formulaciones frescas, directo de nuestro taller a tu hogar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Esencial */}
          <div className="bg-white rounded-[2rem] p-8 border border-charcoal/5 flex flex-col justify-between group hover:border-sage/30 transition-colors duration-500">
            <div>
              <h3 className="font-sans font-bold text-xl text-charcoal mb-2">Esencial</h3>
              <p className="font-sans text-sm text-charcoal/60 mb-6">Lo básico para mantener el equilibrio diario.</p>
              <div className="font-mono text-xs uppercase tracking-widest text-charcoal/40 mb-8">// 1 Pastilla al mes</div>
            </div>
            <button className="w-full py-4 rounded-[1rem] border border-charcoal/10 text-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-charcoal hover:text-white transition-colors duration-300">
              Suscribirse
            </button>
          </div>

          {/* Botánica (Destacada) */}
          <div className="bg-sage rounded-[2rem] p-8 shadow-xl shadow-sage/10 flex flex-col justify-between transform md:-translate-y-4">
            <div>
              <div className="inline-block bg-terracotta text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Recomendada
              </div>
              <h3 className="font-sans font-bold text-xl text-butter mb-2">Botánica</h3>
              <p className="font-sans text-sm text-butter/80 mb-6">El protocolo completo para cuerpo y rostro.</p>
              <div className="font-mono text-xs uppercase tracking-widest text-butter/50 mb-8">// 3 Pastillas al mes</div>
            </div>
            <button className="w-full py-4 rounded-[1rem] bg-terracotta text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-terracotta transition-colors duration-300">
              Suscribirse
            </button>
          </div>

          {/* Ritual Completo */}
          <div className="bg-white rounded-[2rem] p-8 border border-charcoal/5 flex flex-col justify-between group hover:border-sage/30 transition-colors duration-500">
            <div>
              <h3 className="font-sans font-bold text-xl text-charcoal mb-2">Ritual Completo</h3>
              <p className="font-sans text-sm text-charcoal/60 mb-6">Exploración total de nuestras formulaciones estacionales.</p>
              <div className="font-mono text-xs uppercase tracking-widest text-charcoal/40 mb-8">// 5 Pastillas al mes</div>
            </div>
            <button className="w-full py-4 rounded-[1rem] border border-charcoal/10 text-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-charcoal hover:text-white transition-colors duration-300">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <div className="bg-charcoal rounded-t-[4rem] px-6 py-20 md:px-16 lg:px-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal mix-blend-multiply pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-xs">
            <h2 className="font-serif italic text-5xl mb-8">Savon</h2>
            <div className="flex items-center gap-4 border border-white/10 rounded-full px-4 py-2 inline-flex">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                // producción artesanal en curso.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 font-sans text-xs uppercase tracking-widest font-semibold">
            <div className="flex flex-col gap-6">
              <a href="#" className="text-white/50 hover:text-sage transition-colors">Ingredientes</a>
              <a href="#" className="text-white/50 hover:text-sage transition-colors">Sostenibilidad</a>
              <a href="#" className="text-white/50 hover:text-sage transition-colors">Certificaciones</a>
            </div>
            <div className="flex flex-col gap-6">
              <a href="#" className="text-white/50 hover:text-sage transition-colors">Blog Botánico</a>
              <a href="#" className="text-white/50 hover:text-sage transition-colors">Contacto</a>
              <a href="#" className="text-white/50 hover:text-sage transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
