import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check } from 'lucide-react';
import { TdrConsole } from './VectorGraphic';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = "ivanmunozmoreno46@gmail.com";
  const phone = "655 22 72 55";
  const rawPhone = "655227255";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone: ', err);
    }
  };

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

          <div className="flex flex-col items-center lg:items-end justify-center w-full">
            <div className="relative bg-[var(--color-carbon)] text-[var(--color-paper)] p-6 sm:p-8 md:p-10 border border-[var(--color-intl-orange)]/60 w-full max-w-xl group overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--color-intl-orange)]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--color-intl-orange)]" />

              <div className="font-mono text-[9px] tracking-widest text-[var(--color-intl-orange)] opacity-80 mb-6 uppercase flex justify-between">
                <span>COM_LINK // STTY_ONLINE</span>
                <span>SYS_READY</span>
              </div>

              <div className="space-y-6">
                {/* Email Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-[var(--color-paper)]/10 hover:border-[var(--color-intl-orange)]/45 transition-colors bg-[var(--color-paper)]/5">
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono uppercase opacity-40 tracking-wider">EMAIL // Direct_Inbound</div>
                    <a 
                      href={`mailto:${email}`} 
                      className="font-mono text-base sm:text-lg md:text-xl font-bold tracking-tight hover:text-[var(--color-intl-orange)] transition-colors block break-all text-[var(--color-paper)]"
                    >
                      {email}
                    </a>
                  </div>
                  <div className="flex gap-2 self-start sm:self-center">
                    <motion.a 
                      href={`mailto:${email}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Enviar Correo"
                      className="inline-flex items-center justify-center bg-[var(--color-intl-orange)] text-[var(--color-paper)] p-3 transition-colors hover:bg-[var(--color-paper)] hover:text-[var(--color-carbon)] font-mono"
                    >
                      <Mail size={16} />
                    </motion.a>

                    <motion.button 
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Copiar Dirección"
                      className="inline-flex items-center justify-center border border-[var(--color-paper)]/20 text-[var(--color-paper)] p-3 transition-colors hover:border-[var(--color-intl-orange)] hover:text-[var(--color-intl-orange)] relative min-w-[42px]"
                    >
                      <AnimatePresence mode="wait">
                        {copiedEmail ? (
                          <motion.span 
                            key="copied-email"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-[var(--color-intl-orange)]"
                          >
                            <Check size={16} />
                          </motion.span>
                        ) : (
                          <motion.span 
                            key="copy-email"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                          >
                            <Copy size={16} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-[var(--color-paper)]/10 hover:border-[var(--color-intl-orange)]/45 transition-colors bg-[var(--color-paper)]/5">
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono uppercase opacity-40 tracking-wider">TELÉFONO // Direct_Voice</div>
                    <a 
                      href={`tel:+34${rawPhone}`} 
                      className="font-mono text-base sm:text-lg md:text-xl font-bold tracking-tight hover:text-[var(--color-intl-orange)] transition-colors block text-[var(--color-paper)]"
                    >
                      {phone}
                    </a>
                  </div>
                  <div className="flex gap-2 self-start sm:self-center">
                    <motion.button 
                      onClick={handleCopyPhone}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Copiar Teléfono"
                      className="inline-flex items-center justify-center border border-[var(--color-paper)]/20 text-[var(--color-paper)] p-3 transition-colors hover:border-[var(--color-intl-orange)] hover:text-[var(--color-intl-orange)] relative min-w-[42px]"
                    >
                      <AnimatePresence mode="wait">
                        {copiedPhone ? (
                          <motion.span 
                            key="copied-phone"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-[var(--color-intl-orange)]"
                          >
                            <Check size={16} />
                          </motion.span>
                        ) : (
                          <motion.span 
                            key="copy-phone"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                          >
                            <Copy size={16} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </div>

              </div>
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
