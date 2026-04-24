import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useMousePosition } from '../hooks/useMousePosition';
import { FractionalCircle, TdrPattern } from './VectorGraphic';
import Logo from './Logo';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { x, y } = useMousePosition();

  const coords = `LOC//${Math.round(x).toString().padStart(4, '0')}:${Math.round(y).toString().padStart(4, '0')}`;

  return (
    <>
      {/* Fixed top bar */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[50] pointer-events-none">
        <div className="flex gap-4 items-center pointer-events-auto">
           <Logo size={48} className="bg-[var(--color-carbon)] p-2 shadow-lg" />
           <div className="flex flex-col items-start translate-y-1">
              <div className="font-display text-base font-bold tracking-tighter uppercase leading-none mb-1 text-[var(--color-carbon)]">
                Vanguard Web
              </div>
              <div className="flex flex-col gap-1 items-start">
                 <div className="bg-[var(--color-intl-orange)] text-[var(--color-paper)] px-2 py-0.5 font-display text-[8px] font-bold tracking-widest uppercase">
                   Protocol // <span className="text-[var(--color-carbon)]">Active</span>
                 </div>
              </div>
           </div>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto bg-[var(--color-intl-orange)] text-[var(--color-paper)] px-4 sm:px-8 py-3 font-display text-sm font-bold tracking-widest transition-all interactive hover:bg-[var(--color-carbon)]"
        >
          {isOpen ? 'EXIT' : 'DIR'}
        </button>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 bg-[var(--color-carbon)] z-[40] flex flex-col justify-center px-6 sm:px-12 md:px-24 overflow-hidden"
          >
            {/* Background Details */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full flex flex-col justify-center items-end pointer-events-none z-0 pr-12 opacity-10">
               <FractionalCircle className="w-full max-w-[600px]" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5 pointer-events-none">
               <TdrPattern className="w-full h-full" />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-center px-0 sm:px-12">
             <div className="absolute top-0 left-0 w-full h-full halftone opacity-10 pointer-events-none" />
             
             <ul className="text-5xl sm:text-7xl md:text-9xl font-display font-bold uppercase tracking-[-0.05em] text-[var(--color-paper)] space-y-4">
                <li className="overflow-hidden">
                  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="hover:text-[var(--color-intl-orange)] interactive cursor-pointer group flex items-baseline gap-8">
                    <span>IMM</span>
                    <span className="text-sm font-mono opacity-20 group-hover:opacity-100 transition-opacity hidden md:inline-block tracking-widest font-light">AUTHOR_01 // CORE_MODULE</span>
                  </motion.div>
                </li>
                <li className="overflow-hidden">
                  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="hover:text-[var(--color-intl-orange)] interactive cursor-pointer group flex items-baseline gap-8">
                    <span>AFC</span>
                    <span className="text-sm font-mono opacity-20 group-hover:opacity-100 transition-opacity hidden md:inline-block tracking-widest font-light">AUTHOR_02 // SYNTH_ENGINE</span>
                  </motion.div>
                </li>
                <li className="overflow-hidden">
                  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="hover:text-[var(--color-intl-orange)] interactive cursor-pointer group flex items-baseline gap-8 text-stroke-paper text-transparent hover:text-fill-current">
                    <span>VGD</span>
                    <span className="text-sm font-mono opacity-20 group-hover:opacity-100 transition-opacity hidden md:inline-block tracking-widest font-light">MANIFESTO // V.04_DIR</span>
                  </motion.div>
                </li>
             </ul>

             <div className="absolute bottom-12 right-12 font-mono text-[10px] tracking-[0.5em] text-[var(--color-paper)] opacity-20 pointer-events-none uppercase">
               Vanguard Web // Architects of the Unified Theory
             </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
