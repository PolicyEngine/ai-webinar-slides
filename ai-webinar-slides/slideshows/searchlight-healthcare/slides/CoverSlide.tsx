import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';

export default function CoverSlide() {
  return (
    <Slide isCover>
      <div className="flex flex-col items-center space-y-8 relative z-10">
        <div className="w-20 h-1 bg-white/30 rounded-full" />

        <h1 className="text-5xl font-bold text-center text-white leading-tight">
          Healthcare policy simulation
        </h1>

        <p className="text-xl text-white/70 text-center max-w-2xl leading-relaxed">
          Open-source microsimulation integrating tax and health coverage in one model
        </p>

        <div className="flex items-center justify-center gap-4">
          <div className="w-20 h-20 relative overflow-hidden rounded-full border-2 border-white/40">
            <Image
              src="/headshots/daphne-hansell.jpeg"
              alt="Daphne Hansell"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-xl font-semibold text-white">Daphne Hansell</p>
            <p className="text-base text-white/70 font-light">Healthcare Analyst, PolicyEngine</p>
          </div>
        </div>

        <div className="opacity-60 text-center text-white">
          <p>Searchlight Institute</p>
          <p>March 2026</p>
        </div>
      </div>
    </Slide>
  );
}
