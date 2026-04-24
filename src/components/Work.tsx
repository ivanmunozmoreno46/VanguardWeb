import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Aurem',
    category: 'WEBSITE // INTERACTIVE',
    url: 'https://aurem-blue.vercel.app/',
    description: 'Plataforma digital con estética minimalista y experiencia de usuario fluida.',
    status: 'ACTIVE'
  },
  {
    id: '02',
    title: 'PastelStudy',
    category: 'STUDY // ARCHIVE',
    url: 'https://pscoportfolio.vercel.app/',
    description: 'Galería de proyectos con un enfoque en la composición visual y la narrativa digital.',
    status: 'ACTIVE'
  },
  {
    id: '03',
    title: 'La Trattoria',
    category: 'WEBSITE // HOSPITALITY',
    url: 'https://la-trattoria-drab.vercel.app/',
    description: 'Espacio digital gastronómico enfocado en la presentación culinaria y reservas eficientes.',
    status: 'ACTIVE'
  },
  {
    id: '04',
    title: 'Carnes al Toque',
    category: 'WEBSITE // GASTRONOMY',
    url: 'https://carnesaltoqueportfolio.vercel.app/',
    description: 'Plataforma web enfocada en la exhibición y comercialización de productos cárnicos de alta calidad.',
    status: 'ACTIVE'
  }
];

export default function Work() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 bg-[var(--color-paper)] overflow-hidden border-t-2 border-[var(--color-carbon)]">
      {/* Background Micro-details */}
      <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20 uppercase tracking-[0.3em]">
        Vanguard // Archival // Dev_02
      </div>
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="text-[10px] font-mono tracking-[0.4em] text-[var(--color-intl-orange)] uppercase mb-4">
              [Selected_Projects]
            </div>
            <h2 className="text-6xl sm:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.8]">
              WORKS<span className="text-[var(--color-intl-orange)]">.</span>
            </h2>
          </div>
          <div className="max-w-xs text-right">
             <p className="text-[10px] font-mono leading-relaxed opacity-60 uppercase">
               Exploraciones en la intersección del diseño gráfico radical y la ingeniería de interfaces de precisión.
             </p>
          </div>
        </header>

        {/* Project Grid */}
        <div className="flex flex-col border-t border-[var(--color-carbon)]/10">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:grid md:grid-cols-[80px_1fr_1fr_100px] items-start md:items-center py-8 md:py-12 border-b border-[var(--color-carbon)]/10 hover:bg-[var(--color-carbon)] hover:text-[var(--color-paper)] transition-all duration-500 interactive overflow-hidden gap-6 md:gap-0"
            >
              {/* ID */}
              <div className="font-pixel text-xl text-[var(--color-intl-orange)] pl-4">
                {project.id}
              </div>

              {/* Title & Info */}
              <div className="flex flex-col gap-2 pl-4 md:pl-0 w-full">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase group-hover:translate-x-4 transition-transform duration-500 break-words">
                  {project.title}
                </h3>
                <div className="text-[10px] font-mono tracking-widest opacity-40 uppercase">
                  {project.category}
                </div>
              </div>

              {/* Description */}
              <div className="hidden lg:block pr-12">
                <p className="text-xs font-sans leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </div>

              {/* Action */}
              <div className="flex justify-end w-full md:w-auto pr-8 md:pr-4 lg:pr-8">
                 <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[var(--color-intl-orange)] group-hover:border-[var(--color-intl-orange)] transition-colors">
                    <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                 </div>
              </div>

              {/* Hover Background Detail */}
              <div className="absolute right-0 bottom-0 p-2 opacity-0 group-hover:opacity-20 transition-opacity flex flex-col items-end pointer-events-none">
                 <div className="text-[8px] font-mono">SYS_STATUS // {project.status}</div>
                 <div className="text-[8px] font-mono">LINK_READY // TRUE</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Detail */}
        <div className="mt-12 flex justify-between items-center opacity-20">
           <div className="w-1/3 h-[1px] bg-[var(--color-carbon)]" />
           <div className="font-pixel text-[8px] mx-4 uppercase tracking-widest">End_List</div>
           <div className="w-2/3 h-[1px] bg-[var(--color-carbon)]" />
        </div>
      </div>
    </section>
  );
}
