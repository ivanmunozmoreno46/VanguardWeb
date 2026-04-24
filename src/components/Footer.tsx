import { Cpu } from 'lucide-react';
import Marquee from './Marquee';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full relative tech-panel mt-16 text-[var(--color-chrome)]">
      
      <Marquee speed={30} className="border-b border-[var(--color-muted)] py-4 text-[10px] uppercase font-mono tracking-[0.3em] overflow-hidden">
        <span className="flex items-center gap-8 opacity-60">
           GEOMETRÍA MINIMALISTA _ Y2K AESTHETIC _ CLEAN VECTORS _ PROTOCOL [ACTIVE] _ 
        </span>
        <span className="flex items-center gap-8 opacity-60">
           GEOMETRÍA MINIMALISTA _ Y2K AESTHETIC _ CLEAN VECTORS _ PROTOCOL [ACTIVE] _ 
        </span>
      </Marquee>

      <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4 font-mono text-[10px] opacity-70">
          <div className="flex space-x-2 text-[var(--color-accent)] items-center">
             <Cpu size={14} />
             <span>[ SYSTEM ALIGNED ]</span>
          </div>
          <p className="leading-loose tracking-widest uppercase">
            VECTORHEART ESTÉTICA MINIMALISTA.
            OPERATIVE MODULES RETAIN 1.0 ALPHA STATE.
          </p>
        </div>

        <div className="flex flex-col space-y-2 font-mono text-[8px] opacity-40 uppercase tracking-[0.2em] leading-relaxed">
          <span className="text-[var(--color-accent)] font-bold mb-2">[ LEGAL_DAT.SYS ]</span>
          <p>By viewing this construct, you process the rigid geometry of the simulation.</p>
          <p>Intellectual property is defined by the poly-count. (c) 1999-2027.</p>
        </div>
        
        <div className="md:col-span-2 lg:col-span-2 text-left md:text-right flex flex-col justify-between">
          <div className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.05em] uppercase mb-4 text-[var(--color-carbon)] leading-none flex items-start justify-start md:justify-end gap-4">
            <Logo size={100} className="hidden lg:block flex-shrink-0" />
            <div>
              VANGUARD<br/>
              <span className="text-stroke-carbon text-transparent">WEB</span>
            </div>
          </div>
          <div className="font-mono text-[8px] tracking-[0.2em] flex flex-wrap gap-4 md:gap-8 justify-start md:justify-end uppercase text-[var(--color-intl-orange)] font-bold mt-8 md:mt-0">
             <a href="mailto:ivanmunozmoreno46@gmail.com" className="interactive hover:text-[var(--color-chrome)] transition-colors cursor-pointer">CONTACT_CORE</a>
             <span className="interactive hover:text-[var(--color-chrome)] transition-colors cursor-pointer">INIT</span>
             <span className="interactive hover:text-[var(--color-chrome)] transition-colors cursor-pointer">TERMS</span>
             <span className="interactive hover:text-[var(--color-chrome)] transition-colors cursor-pointer">MAP</span>
          </div>
        </div>
      </div>
      
      <div className="w-full border-t border-[var(--color-muted)] p-2 text-[8px] font-mono text-center tracking-[0.3em] uppercase opacity-30">
        [ ESTE DOCUMENTO HA SIDO PURIFICADO - Y2K MINIMALISMO ABSOLUTO ]
      </div>
    </footer>
  );
}
