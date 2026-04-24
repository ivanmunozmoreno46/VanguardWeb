import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { TdrConsole } from './VectorGraphic';

const contacts = [
  { name: "IVÁN MUÑOZ MORENO", email: "ivanmunozmoreno46@gmail.com" },
  { name: "ÁLVARO FERNÁNDEZ CEREZO", email: "ivanmunozmoreno46@gmail.com" } // Reusing for now
];

export default function Contact() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentContact = contacts[selectedIndex];

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

          <div className="relative">
            {/* Technical Industrial Box */}
            <div className="bg-[var(--color-carbon)] p-6 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl border-l-4 border-[var(--color-intl-orange)]">
               <div className="space-y-8 relative z-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
                    <div className="space-y-4">
                       <div className="text-[10px] font-display font-bold text-[var(--color-paper)]/40 tracking-widest uppercase">DISPONIBILIDAD</div>
                       <div className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-[var(--color-intl-orange)] rounded-full animate-pulse shadow-[0_0_10px_var(--color-intl-orange)] flex-shrink-0" />
                          <div className="font-mono text-xs text-[var(--color-paper)] tracking-widest uppercase break-words">RESPUESTA EN {"<"} 24H</div>
                       </div>
                    </div>
                    <div className="font-mono text-[8px] text-[var(--color-paper)]/20 text-left sm:text-right">
                      SYS_LOAD // 1.2%<br/>
                      UPTIME // 99.9%
                    </div>
                  </div>

                  {/* Selector inside the box */}
                  <div className="space-y-4">
                    <div className="text-[10px] font-display font-bold text-[var(--color-intl-orange)] tracking-[0.3em] uppercase">SELECCIONAR_DESTINATARIO:</div>
                    <div className="grid grid-cols-1 gap-2">
                      {contacts.map((c, i) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedIndex(i)}
                          className={`group flex items-center justify-between p-3 sm:p-4 border transition-all interactive text-left ${
                            selectedIndex === i 
                              ? 'bg-[var(--color-grey-dark)] border-[var(--color-intl-orange)] text-[var(--color-paper)]' 
                              : 'bg-transparent border-[var(--color-paper)]/10 text-[var(--color-paper)]/60 hover:border-[var(--color-paper)]/30'
                          }`}
                        >
                          <div className="flex flex-col gap-0.5 max-w-[80%]">
                            <span className="text-[7px] font-pixel opacity-30">ID_0{i+1}</span>
                            <span className="font-display font-bold text-[10px] sm:text-xs tracking-wider uppercase break-words">{c.name}</span>
                          </div>
                          {selectedIndex === i && <motion.div layoutId="active-dot" className="w-1.5 h-1.5 bg-[var(--color-intl-orange)] flex-shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 opacity-10">
                     <TdrConsole />
                  </div>
                  
                  <div className="pt-4">
                     <a 
                        href={`mailto:${currentContact.email}`}
                        className="group flex items-center justify-center gap-3 w-full bg-[var(--color-intl-orange)] text-[var(--color-paper)] py-4 sm:py-5 font-display text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] transform transition-all hover:bg-[var(--color-paper)] hover:text-[var(--color-carbon)] interactive uppercase break-words text-center px-4"
                      >
                        <Mail size={16} className="flex-shrink-0" />
                        <span>CONTACTAR CON {currentContact.name.split(' ')[0]}</span>
                     </a>
                  </div>
               </div>
               
               {/* Decorative elements */}
               <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-[var(--color-paper)]/5 rounded-full" />
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
