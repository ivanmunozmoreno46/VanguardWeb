import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { TdrConsole } from './VectorGraphic';

export default function Contact() {
  const email = "ivanmunozmoreno46@gmail.com";

  return (
    <section className="relative w-full py-24 bg-[var(--color-paper)] border-t border-[var(--color-carbon)] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-tdr-grid opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[var(--color-intl-orange)] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8 lg:space-y-12">
            <div>
              <div className="inline-block bg-[var(--color-carbon)] text-[var(--color-paper)] px-3 py-1 font-display text-[10px] font-bold tracking-widest uppercase mb-4">
                CONTACTO // COM_CHANNEL_V0.1
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-[0.9] tracking-tighter uppercase text-[var(--color-carbon)]">
                ¿TIENES UN <br />
                <span className="text-[var(--color-intl-orange)]">PROYECTO?</span>
              </h2>
            </div>
            
            <div className="space-y-8 max-w-sm">
               <div className="font-mono text-sm uppercase tracking-wider leading-relaxed opacity-80">
                 Escríbenos hoy mismo. Nuestro equipo de ingeniería está listo para procesar tu solicitud y convertirla en una realidad digital de alto rendimiento.
               </div>
               
               <div className="pt-8 border-t border-[var(--color-carbon)]/10">
                  <div className="font-pixel text-[8px] text-[var(--color-intl-orange)] opacity-40 uppercase tracking-widest">
                    Vanguard_Web // Communications_Terminal
                  </div>
               </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.a 
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center bg-[var(--color-intl-orange)] text-[var(--color-paper)] px-12 py-8 md:px-20 md:py-12 font-display text-2xl md:text-4xl font-bold tracking-[0.2em] md:tracking-[0.3em] overflow-hidden shadow-2xl transition-all"
            >
              {/* Button styling backgrounds */}
              <div className="absolute inset-0 bg-[var(--color-carbon)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10 flex items-center gap-6">
                <Mail size={32} className="hidden sm:block group-hover:animate-bounce" />
                <span>CONTÁCTANOS</span>
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-paper)] opacity-50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-paper)] opacity-50" />
            </motion.a>
          </div>

        </div>
      </div>

      {/* Vertical Side Text */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-vertical font-mono text-[10px] tracking-[0.5em] opacity-10 uppercase hidden xl:block">
        Vanguard Web Systems // Communications Terminal
      </div>
    </section>
  );
}
