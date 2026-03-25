import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';

export default function CoverSlide() {
  return (
    <Slide isCover>
      <div className="flex flex-col items-center space-y-8 relative z-10">
        <div className="w-20 h-1 bg-white/30 rounded-full" />

        <h1 className="text-5xl font-bold text-center text-white leading-tight">
          AI-powered policy simulation
        </h1>

        <p className="text-xl text-white/70 text-center max-w-2xl leading-relaxed">
          Open-source microsimulation for tax and health policy analysis
        </p>

        <div className="flex items-center justify-center gap-12 mt-4">
          {[
            { name: 'Max Ghenis', title: 'CEO, PolicyEngine', photo: '/headshots/max-ghenis.png' },
            { name: 'Daphne Hansell', title: 'Healthcare Analyst, PolicyEngine', photo: '/headshots/daphne-hansell.jpeg' },
          ].map((speaker) => (
            <div key={speaker.name} className="flex items-center gap-4">
              <div className="w-20 h-20 relative overflow-hidden rounded-full border-2 border-white/40">
                <Image src={speaker.photo} alt={speaker.name} fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold text-white">{speaker.name}</p>
                <p className="text-base text-white/70 font-light">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-60 text-center text-white">
          <p>Groundwork Collaborative</p>
          <p>March 2026</p>
        </div>
      </div>
    </Slide>
  );
}
