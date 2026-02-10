import React, { ReactNode } from 'react';

interface SlideTitleProps {
  children: ReactNode;
  isCover?: boolean;
  isEnd?: boolean;
  className?: string;
}

export default function SlideTitle({ children, isCover = false, isEnd = false, className = '' }: SlideTitleProps) {
  if (isCover || isEnd) {
    return (
      <h1 className={`text-7xl font-extrabold text-white leading-[1.1] tracking-tight text-center ${className}`}>
        {children}
      </h1>
    );
  }

  if (className) {
    return (
      <h1 className={`text-5xl font-bold leading-tight ${className}`}>
        {children}
      </h1>
    );
  }

  return (
    <h1 className="text-5xl font-bold text-pe-dark leading-tight tracking-tight">
      {children}
    </h1>
  );
}
