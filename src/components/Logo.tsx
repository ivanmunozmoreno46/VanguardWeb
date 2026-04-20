import { motion } from 'motion/react';

export default function Logo({ className = "", size = 40 }: { className?: string, size?: number }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Shadow/Offset layer for tDR depth effect */}
        <motion.path 
          d="M20 30L50 80L80 30" 
          stroke="var(--color-carbon)" 
          strokeWidth="12" 
          strokeLinecap="square"
          animate={{ x: [1, -1, 1], y: [1, -1, 1] }}
          transition={{ duration: 0.1, repeat: Infinity }}
          className="opacity-10"
        />
        
        {/* Main "V" part */}
        <path 
          d="M20 20L50 80L80 20" 
          stroke="var(--color-carbon)" 
          strokeWidth="12" 
          strokeLinecap="square" 
        />
        
        {/* "W" differentiator - crossing line */}
        <motion.path 
          d="M35 50L50 20L65 50" 
          stroke="var(--color-intl-orange)" 
          strokeWidth="8" 
          strokeLinecap="square"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Small technical detail dot */}
        <motion.circle 
          cx="50" 
          cy="80" 
          r="4" 
          fill="var(--color-intl-orange)"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
