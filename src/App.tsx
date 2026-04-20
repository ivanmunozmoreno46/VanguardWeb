/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[var(--color-paper)] min-h-screen w-full" />;

  return (
    <div className="relative w-full min-h-screen bg-[var(--color-paper)] overflow-x-hidden selection:bg-[var(--color-intl-orange)] selection:text-[var(--color-paper)]">
      {/* Global tDR Grid Background */}
      <div className="bg-tdr-grid" />

      {/* Global Custom Cursor */}
      <CustomCursor />

      {/* App Content */}
      <Menu />
      
      <main className="w-full relative z-10">
        <Hero />
        <Vision />
        <Founders />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
