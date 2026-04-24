import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { TdrConsole, BarcodeGrid } from './VectorGraphic';

const founders = [
  {
    id: "01",
    name: "IVÁN MUÑOZ MORENO",
    unit: "Desarrollador Fullstack y Administrador de Sistemas",
    data: "SISTEMAS Y LÓGICA",
    specs: [
      { label: "ESPECIALIDAD", val: "Aspectos técnicos de la programación" },
      { label: "DISEÑO", val: "Estilo expresivo, arriesgado y vanguardista" },
    ],
  },
  {
    id: "02",
    name: "ÁLVARO FERNÁNDEZ CEREZO",
    unit: "Desarrollador Fullstack",
    data: "BASES DE DATOS",
    specs: [
      { label: "ESPECIALIDAD", val: "Gestión y arquitectura de bases de datos" },
      { label: "DISEÑO", val: "Enfoque tradicional, funcional y seguro" }
    ],
  }
];

export default function Founders() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={containerRef} className="relative w-full py-12 md:py-24 bg-[var(--color-carbon)] text-[var(--color-paper)] px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 border-y border-[var(--color-grey-dark)]">
      
      {/* Halftone Overlay */}
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />

      {founders.map((f, idx) => (
        <motion.div 
          key={f.id} 
          style={{ 
            y: typeof window !== 'undefined' && window.innerWidth >= 1024 ? (idx === 0 ? y1 : y2) : 0 
          }}
          className={`flex flex-col p-6 sm:p-12 border border-[var(--color-grey-dark)] relative group overflow-hidden ${idx === 0 ? 'bg-[var(--color-grey-dark)]' : 'bg-[var(--color-carbon)]'}`}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-intl-orange)] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
          
          <div className="flex justify-between items-start mb-16 relative z-10">
            <h3 className="text-6xl font-display font-bold tracking-tighter text-stroke-paper text-transparent group-hover:text-[var(--color-paper)] transition-colors duration-500">{f.id}</h3>
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40 text-vertical h-32">
              {f.data}
            </div>
          </div>

          <div className="mb-12 relative z-10">
            <div className="text-[10px] font-pixel text-[var(--color-intl-orange)] mb-2">AUTH_NAME</div>
            <h4 className="text-3xl font-display font-bold uppercase tracking-tight">{f.name}</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[11px] font-mono uppercase tracking-widest mb-16 relative z-10">
            <div className="border-l-2 border-[var(--color-intl-orange)] pl-4">
              <span className="opacity-40">{f.specs[0].label}</span><br/>
              <span className="font-bold">{f.specs[0].val}</span>
            </div>
            <div className="border-l-2 border-[var(--color-grey-dark)] group-hover:border-[var(--color-electric-cyan)] pl-4 transition-colors whitespace-pre-line">
              <span className="opacity-40">PROTOCOLS</span><br/>
              <span className="font-bold">{f.specs[1].val}</span>
            </div>
          </div>

          <div className="mt-auto relative z-10 flex flex-col gap-4">
             <TdrConsole />
             <div className="flex justify-between items-center opacity-40">
                <BarcodeGrid />
                <div className="text-[10px] font-mono">PEOPLES BUREAU // V.04</div>
             </div>
          </div>

        </motion.div>
      ))}

    </section>
  );
}
