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
            className="text-[14vw] sm:text-[12vw] lg:text-[160px] font-display font-bold leading-[0.8] uppercase flex flex-col tracking-[-0.05em] w-full"
          >
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
              <Logo size={40} className="block sm:hidden flex-shrink-0" />
              <Logo size={80} className="hidden sm:block lg:hidden flex-shrink-0" />
              <Logo size={120} className="hidden lg:block flex-shrink-0" />
              <span className="text-[var(--color-carbon)] break-words w-full sm:w-auto mt-2 sm:mt-0">VANGUARD</span>
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
               className="flex flex-col items-end self-end gap-8"
            >
               <div className="text-[60px] font-pixel text-[var(--color-intl-orange)] leading-none mb-2">
                 [V.03]
               </div>
               
               <a 
                 href="mailto:ivanmunozmoreno46@gmail.com"
                 className="group relative bg-[var(--color-intl-orange)] text-[var(--color-paper)] py-4 px-10 font-display text-lg font-bold tracking-[0.2em] transform transition-all hover:bg-[var(--color-carbon)] interactive uppercase overflow-hidden shadow-xl"
               >
                 <span className="relative z-10 flex items-center gap-3">
                   CONTÁCTANOS
                 </span>
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-paper)] opacity-50" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-paper)] opacity-50" />
               </a>
            </motion.div>
        </div>
      </div>

    </section>
  );
}
