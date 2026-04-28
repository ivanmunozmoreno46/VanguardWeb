import { motion } from 'motion/react';
import { Camera, Aperture, Focus, Maximize, Film } from 'lucide-react';
import { TdrPattern } from './VectorGraphic';

const services = [
  {
    id: 'PH_01',
    title: 'FOTOGRAFÍA DE PRODUCTO',
    description: 'Composiciones meticulosas que resaltan la calidad y el detalle de productos premium.',
    icon: Camera,
    image: 'https://lh3.googleusercontent.com/d/1MALL1-Nw0E5lSfA2l3Axqp6JStaKw7-8'
  },
  {
    id: 'PH_02',
    title: 'FOTOGRAFÍA DE PAISAJE',
    description: 'Capturando la grandeza de entornos naturales y estructuras históricas bajo la luz perfecta.',
    icon: Focus,
    image: 'https://lh3.googleusercontent.com/d/14w2XfG3s5vWQvz8saOIqcltavBCFCuk_'
  },
  {
    id: 'PH_03',
    title: 'RETRATO',
    description: 'Exploración de la identidad y la expresión a través de una mirada vanguardista.',
    icon: Aperture,
    image: 'https://lh3.googleusercontent.com/d/1e2bM5MmJWrrw__QkOlo8zW1-bz41LdCK'
  }
];

export default function Photography() {
  return (
    <section className="relative w-full py-32 bg-[var(--color-carbon)] text-[var(--color-paper)] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <TdrPattern className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[1px] bg-[var(--color-intl-orange)]" />
              <span className="font-pixel text-[var(--color-intl-orange)] text-xs tracking-[0.4em] uppercase">MODULE//VISUAL_CAPTURE</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-bold leading-none tracking-tighter uppercase"
            >
              NUESTRO SERVICIO DE <br />
              <span className="text-[var(--color-intl-orange)]">FOTOGRAFÍA</span>
            </motion.h2>
          </div>
          
          {/* Removed technical status block */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[600px] border border-[var(--color-intl-orange)] interactive overflow-hidden"
            >
              {/* Image background with zoom effect */}
              <motion.img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Closing phrase */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center space-y-4"
        >
          <div className="h-[1px] w-24 bg-[var(--color-intl-orange)]/30" />
          <p className="font-display text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">
            PREGUNTA SIN COMPROMISO
          </p>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-1.5 h-1.5 bg-[var(--color-intl-orange)] rotate-45" />
            ))}
          </div>
        </motion.div>
        
        {/* Large Decorative Text Background */}
        <div className="absolute -bottom-12 -left-12 font-display text-[20vw] font-bold text-[var(--color-paper)] opacity-[0.02] pointer-events-none whitespace-nowrap leading-none select-none uppercase">
          OPTICS // 2024
        </div>
      </div>
    </section>
  );
}
