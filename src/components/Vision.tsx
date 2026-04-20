import { motion } from 'motion/react';
import { FractionalCircle, TdrConsole } from './VectorGraphic';

export default function Vision() {
  return (
    <section className="relative w-full py-32 bg-[var(--color-carbon)] text-[var(--color-paper)] overflow-hidden border-y border-[var(--color-grey-dark)]">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full halftone opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Label */}
        <div className="flex items-center gap-4 mb-24 opacity-30">
           <div className="h-px bg-[var(--color-paper)] flex-1" />
           <div className="font-display text-[10px] tracking-[0.8em] font-bold uppercase">PURPOSE_SYSTEM // V.01</div>
           <div className="h-px bg-[var(--color-paper)] flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">
          
          {/* MISIÓN BLOCK */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col p-8 sm:p-12 bg-[var(--color-grey-dark)] border border-[var(--color-paper)]/5 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-intl-orange)]" />
            <div className="flex justify-between items-start mb-12">
               <div className="bg-[var(--color-paper)] text-[var(--color-carbon)] px-3 py-1 font-display text-[10px] font-bold tracking-widest">
                  01 // MISIÓN
               </div>
               <div className="text-[10px] font-mono opacity-20">OBJ: SOLUTIONS</div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[0.9] uppercase mb-8">
              SOLUCIONES <br /> 
              WEB PARA <br />
              <span className="text-[var(--color-intl-orange)]">TODOS</span>
            </h2>
            
            <p className="text-sm font-mono opacity-60 leading-relaxed uppercase tracking-wider mb-12">
              Nuestro objetivo es brindar soluciones web a cualquier empresa que lo necesite, rompiendo las barreras de la complejidad técnica para democratizar el acceso a la tecnología del futuro.
            </p>

            <div className="mt-auto pt-8 border-t border-[var(--color-paper)]/10">
               <TdrConsole />
            </div>
          </motion.div>

          {/* CENTRAL DIVIDER / GRAPHIC */}
          <div className="lg:col-span-2 flex items-center justify-center pointer-events-none py-12 lg:py-0">
             <div className="relative w-32 h-32 lg:w-48 lg:h-48">
                <FractionalCircle className="w-full h-full opacity-40 scale-150" />
                <div className="absolute inset-0 flex items-center justify-center font-pixel text-4xl text-[var(--color-intl-orange)]">
                   AI
                </div>
             </div>
          </div>

          {/* VISIÓN BLOCK */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col p-8 sm:p-12 bg-transparent border border-[var(--color-paper)]/5 relative group"
          >
            <div className="absolute top-0 right-0 w-full h-1 bg-[var(--color-paper)] opacity-20" />
            <div className="flex justify-between items-start mb-12">
               <div className="text-[10px] font-mono opacity-20">OBJ: INNOVATION</div>
               <div className="bg-[var(--color-intl-orange)] text-[var(--color-paper)] px-3 py-1 font-display text-[10px] font-bold tracking-widest">
                  02 // VISIÓN
               </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[0.9] uppercase mb-8 text-right lg:text-left">
              FUTURO <br /> 
              Y DISEÑO <br />
              <span className="text-stroke-paper text-transparent">INTELIGENTE</span>
            </h2>
            
            <p className="text-sm font-mono opacity-60 leading-relaxed uppercase tracking-wider mb-12 text-right lg:text-left">
              Mantenemos un enfoque riguroso en el diseño de vanguardia integrando herramientas de IA avanzadas para optimizar flujos de trabajo y crear experiencias de usuario revolucionarias.
            </p>

            <div className="mt-auto pt-8 border-t border-[var(--color-paper)]/10 flex justify-end">
               <div className="w-full max-w-[200px] opacity-30 invert">
                  <TdrConsole />
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Ticker Bottom Decor */}
      <div className="mt-24 border-t border-[var(--color-grey-dark)] py-4 flex gap-8 font-mono text-[9px] uppercase tracking-[0.5em] opacity-20 overflow-hidden whitespace-nowrap">
         <div className="animate-marquee-slow flex gap-12">
            <span>Democratización Tecnológica</span>
            <span>//</span>
            <span>Inteligencia Artificial Nativa</span>
            <span>//</span>
            <span>Vanguardia Visual</span>
            <span>//</span>
            <span>Sistemas de Alto Rendimiento</span>
            <span>//</span>
         </div>
      </div>
    </section>
  );
}

