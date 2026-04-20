import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { TdrConsole } from './VectorGraphic';

export default function Contact() {
  const email = "ivanmunozmoreno46@gmail.com";

  return (
    <section className="relative w-full py-24 bg-[var(--color-paper)] border-t border-[var(--color-carbon)] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-tdr-grid opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[var(--color-intl-orange)] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <div>
              <div className="inline-block bg-[var(--color-carbon)] text-[var(--color-paper)] px-3 py-1 font-display text-[10px] font-bold tracking-widest uppercase mb-4">
                CONTACTO // TRABAJEMOS JUNTOS
              </div>
              <h2 className="text-5xl sm:text-7xl font-display font-bold leading-[0.9] tracking-tighter uppercase text-[var(--color-carbon)]">
                ¿TIENES UN <br />
                <span className="text-[var(--color-intl-orange)]">PROYECTO?</span>
              </h2>
            </div>
            
            <div className="space-y-8 max-w-sm">
               <div className="font-mono text-sm uppercase tracking-wider leading-relaxed opacity-80">
                 Escríbenos hoy mismo y nuestro equipo te ayudará a hacer realidad tu idea con la tecnología más avanzada y un diseño de vanguardia.
               </div>
               
               <div className="flex flex-col gap-4">
                  <div className="text-[10px] font-display font-bold text-[var(--color-intl-orange)] tracking-[0.3em]">CORREO ELECTRÓNICO:</div>
                  <motion.a 
                    href={`mailto:${email}`}
                    className="group flex items-center gap-4 text-xl sm:text-2xl font-mono font-bold text-[var(--color-carbon)] interactive overflow-hidden"
                    whileHover={{ x: 10 }}
                  >
                    <Mail size={24} className="text-[var(--color-intl-orange)] flex-shrink-0" />
                    <span className="border-b-2 border-transparent group-hover:border-[var(--color-intl-orange)] transition-colors break-all">
                      {email}
                    </span>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 hidden sm:block" />
                  </motion.a>
               </div>
            </div>
          </div>

          <div className="relative">
            {/* Technical Industrial Box */}
            <div className="bg-[var(--color-carbon)] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
               <div className="space-y-8 relative z-10">
                  <div className="h-1 w-12 bg-[var(--color-intl-orange)]" />
                  <div className="space-y-4">
                     <div className="text-[10px] font-display font-bold text-[var(--color-paper)]/40 tracking-widest uppercase">DISPONIBILIDAD</div>
                     <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[var(--color-intl-orange)] rounded-full animate-pulse shadow-[0_0_10px_var(--color-intl-orange)]" />
                        <div className="font-mono text-xs text-[var(--color-paper)] tracking-widest uppercase">RESPUESTA EN MENOS DE 24H</div>
                     </div>
                  </div>
                  
                  <div className="pt-8 opacity-20">
                     <TdrConsole />
                  </div>
                  
                  <div className="pt-8">
                     <a 
                        href={`mailto:${email}`}
                        className="block w-full bg-[var(--color-intl-orange)] text-[var(--color-paper)] py-4 font-display text-sm font-bold tracking-[0.2em] transform transition-transform hover:scale-[1.02] active:scale-[0.98] interactive text-center uppercase"
                     >
                        ENVIAR MENSAJE
                     </a>
                  </div>
               </div>
               
               {/* Decorative elements */}
               <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-[var(--color-paper)]/10 rounded-full" />
            </div>
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
