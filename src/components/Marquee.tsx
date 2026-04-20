import { ReactNode } from 'react';
import { cn } from '../lib/utils';

export default function Marquee({
  children,
  className,
  speed = 20,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={cn("ticker-wrapper bg-color-carbon text-color-paper py-2 uppercase font-display border-y border-color-carbon/20", className)}>
      <div className="ticker-content flex space-x-8 px-4" style={{ animationDuration: `${speed}s` }}>
        <div className="flex space-x-8">{children}</div>
        <div className="flex space-x-8">{children}</div>
        <div className="flex space-x-8">{children}</div>
        <div className="flex space-x-8">{children}</div>
        <div className="flex space-x-8">{children}</div>
      </div>
    </div>
  );
}
