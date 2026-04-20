import { motion } from 'motion/react';

export function TdrConsole() {
  return (
    <div className="flex items-center gap-x-1 h-12 w-full opacity-80 overflow-hidden">
      {Array.from({ length: 32 }).map((_, i) => (
        <motion.div 
          key={i}
          animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
          transition={{ duration: 0.5 + Math.random(), repeat: Infinity, ease: 'linear' }}
          className="w-2 bg-[var(--color-carbon)]" 
        />
      ))}
    </div>
  );
}

export function FractionalCircle({ className }: { className?: string }) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Fragmented Ring */}
        <circle cx="100" cy="100" r="90" stroke="var(--color-carbon)" strokeWidth="10" strokeDasharray="40 20" />
        <circle cx="100" cy="100" r="75" stroke="var(--color-intl-orange)" strokeWidth="5" strokeDasharray="10 5" />
        
        {/* Core Detail */}
        <rect x="90" y="90" width="20" height="20" fill="var(--color-carbon)" />
        <path d="M 0 100 L 200 100 M 100 0 L 100 200" stroke="var(--color-carbon)" strokeWidth="0.5" opacity="0.5" />
        
        {/* Orbitals */}
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }}>
           <rect x="180" y="95" width="10" height="10" fill="var(--color-electric-cyan)" />
        </motion.g>
        
        <motion.g animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }}>
           <rect x="10" y="95" width="5" height="10" fill="var(--color-carbon)" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

export function BarcodeGrid() {
  return (
    <div className="flex flex-col gap-2 opacity-80">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-1">
          {Array.from({ length: 12 }).map((_, j) => (
            <div key={j} className="h-4 bg-carbon" style={{ width: `${Math.random() * 10 + 2}px` }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function TdrPattern({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-1 ${className}`}>
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className={`h-8 w-full ${i % 3 === 0 ? 'bg-[var(--color-intl-orange)]' : 'bg-[var(--color-carbon)]'} opacity-20`} />
      ))}
    </div>
  );
}
