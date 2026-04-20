import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useMousePosition } from '../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [data, setData] = useState({ lat: '0', lng: '0', ts: '0' });

  useEffect(() => {
    const ts = new Date().getTime().toString().slice(-6);
    const lat = (x * 0.01).toFixed(4);
    const lng = (y * 0.01).toFixed(4);
    setData({ lat, lng, ts });
  }, [x, y]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: x - 20,
          y: y - 20,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-10 h-10 border border-white/50 relative flex items-center justify-center">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
          <div className="w-px h-10 bg-white/20 absolute left-1/2 -translate-x-1/2" />
          <div className="w-10 h-px bg-white/20 absolute top-1/2 -translate-y-1/2" />
        </div>
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] text-[10px] font-mono text-[var(--color-carbon)] bg-[var(--color-intl-orange)] px-2 py-1 flex flex-col font-bold"
        animate={{ x: x + 20, y: y + 20 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      >
        <span>X:{data.lat}</span>
        <span>Y:{data.lng}</span>
        <span className="text-[6px] opacity-70 mt-1">PB_TARGETING_SYS</span>
      </motion.div>
    </>
  );
}
