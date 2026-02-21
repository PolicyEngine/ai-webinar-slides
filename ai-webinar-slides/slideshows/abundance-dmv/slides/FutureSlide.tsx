import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { IconFileText, IconChartBar, IconUsers, IconRefresh } from '@tabler/icons-react';

const stages = [
  { icon: IconFileText, label: 'Encode' },
  { icon: IconChartBar, label: 'Score' },
  { icon: IconUsers, label: 'Implement' },
  { icon: IconRefresh, label: 'Evaluate' },
];

export default function FutureSlide() {
  return (
    <Slide isCover>
      <div className="flex flex-col items-center justify-center space-y-8 relative z-10">
        <h1 className="text-5xl font-bold text-center text-white leading-tight">
          Encoding the world&apos;s rules
        </h1>

        <p className="text-2xl text-white/80 text-center max-w-3xl leading-relaxed">
          AI amplifies the need. As the economy transforms, we need to encode our rules so policymakers can simulate change, respond in real time, and design policies that produce the outcomes we all want.
        </p>

        <div className="flex items-center gap-3 mt-4">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-5 py-3">
                <stage.icon size={22} stroke={1.5} className="text-white/90" />
                <span className="text-lg font-semibold text-white">{stage.label}</span>
              </div>
              {i < stages.length - 1 && (
                <span className="text-white/40 text-xl">&rarr;</span>
              )}
            </div>
          ))}
          <span className="text-white/40 text-xl">&rarr;</span>
          <span className="text-white/60 text-sm italic">cycle repeats</span>
        </div>

        <div className="mt-4 flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-6 py-4">
          <Image
            src="/logos/rules-foundation-light.svg"
            alt="Rules Foundation"
            width={140}
            height={36}
            className="object-contain"
          />
          <p className="text-base text-white/70 leading-relaxed max-w-lg">
            Open infrastructure for this cycle. Evaluation feeds back into better encoding &mdash; a virtuous cycle for the public good.
          </p>
        </div>
      </div>
    </Slide>
  );
}
