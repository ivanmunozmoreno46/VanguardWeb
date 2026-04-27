import { motion } from 'motion/react';
import Logo from './Logo';

export default function Menu() {
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
      </nav>
    </>
  );
}
