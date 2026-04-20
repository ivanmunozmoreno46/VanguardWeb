import { motion } from 'motion/react';
import { FractionalCircle, TdrConsole } from './VectorGraphic';
import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[var(--color-paper)] p-6 sm:p-12 mb-16 flex flex-col justify-center overflow-hidden">
      
      {/* Background Graphic Detail */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none z-0 opacity-20">
        <FractionalCircle className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]" />
      </div>

      <div className="absolute top-20 right-10 flex flex-col gap-1 z-0 opacity-40">
        <div className="w-40 h-2 bg-[var(--color-intl-orange)]" />
        <div className="w-20 h-2 bg-[var(--color-carbon)]" />
        <div className="w-60 h-2 bg-[var(--color-intl-orange)]" />
      </div>

      {/* Central Claim */}
      <div className="relative flex flex-col w-full z-10 pt-16">
        
        <div className="flex flex-col sm:flex-row items-end gap-0">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] sm:text-[12vw] lg:text-[160px] font-display font-bold leading-[0.8] uppercase flex flex-col tracking-[-0.05em]"
          >
            <div className="flex items-center gap-4">
              <Logo size={120} className="hidden sm:block" />
              <span className="text-[var(--color-carbon)]">VANGUARD</span>
            </div>
            <span className="text-stroke-carbon text-transparent bg-clip-text">WEB</span>
          </motion.h1>
          <div className="text-vertical font-mono text-[10px] tracking-widest opacity-40 mb-4 ml-4 hidden md:block">
            PEOPLES BUREAU // V.DR_04
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full gap-12">
            <div className="hidden md:block" />
            <motion.div 
               initial={{ x: 100, opacity: 0 }} 
               animate={{ x: 0, opacity: 1 }} 
               transition={{ delay: 0.6, duration: 0.5 }}
               className="flex flex-col items-end self-end"
            >
               <div className="text-[60px] font-pixel text-[var(--color-intl-orange)] leading-none mb-2">
                 [V.03]
               </div>
               <div className="bg-[var(--color-intl-orange)] text-[var(--color-paper)] py-2 px-6 font-display text-sm font-bold">
                 ACCESS DIRECTORY {" >>"}
               </div>
            </motion.div>
        </div>
      </div>

    </section>
  );
}
