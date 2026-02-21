import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { IconFileText, IconChartBar, IconUsers, IconRefresh, IconArrowRight } from '@tabler/icons-react';

const stages = [
  { icon: IconFileText, label: 'Encode' },
  { icon: IconChartBar, label: 'Score' },
  { icon: IconUsers, label: 'Implement' },
  { icon: IconRefresh, label: 'Evaluate' },
];

const statuteText = `(a) In general.— There is hereby
imposed a tax equal to 3.8 percent
of the lesser of net investment
income or modified AGI in excess
of the threshold amount.`;

const racCode = `niit_rate:
    from 2013-01-01: 0.038

niit:
    entity: TaxUnit
    from 2013-01-01:
        niit_rate * min(nii, excess_magi)`;

export default function FutureSlide() {
  return (
    <Slide isCover>
      <div className="flex flex-col items-center justify-center space-y-6 relative z-10">
        <h1 className="text-5xl font-bold text-center text-white leading-tight">
          Encoding the world&apos;s rules
        </h1>

        <p className="text-xl text-white/80 text-center max-w-3xl leading-relaxed">
          AI amplifies the need. As the economy transforms, we need to encode our rules so policymakers can simulate change, respond in real time, and design policies that produce the outcomes we all want.
        </p>

        {/* Statute → AutoRAC → .rac diagram */}
        <div className="flex items-stretch gap-0 w-full max-w-4xl">
          {/* Statute panel */}
          <div className="flex-1 rounded-l-xl overflow-hidden border border-white/20 bg-white/5">
            <div className="px-3 py-1.5 bg-white/10 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
              <span className="text-xs font-mono text-white/60">26 USC § 1411(a)</span>
            </div>
            <pre className="p-3 text-xs font-mono text-white/70 leading-relaxed whitespace-pre-wrap">{statuteText}</pre>
          </div>

          {/* AutoRAC arrow */}
          <div className="flex flex-col items-center justify-center px-4 gap-1">
            <div className="w-px h-4 bg-transparent" />
            <IconArrowRight size={28} stroke={1.5} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 tracking-wide">AutoRAC</span>
          </div>

          {/* .rac panel */}
          <div className="flex-1 rounded-r-xl overflow-hidden border border-blue-400/30 bg-blue-500/10">
            <div className="px-3 py-1.5 bg-blue-500/20 border-b border-blue-400/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-mono text-blue-300/80">statute/26/1411/a.rac</span>
            </div>
            <pre className="p-3 text-xs font-mono text-blue-200/80 leading-relaxed whitespace-pre-wrap">{racCode}</pre>
          </div>
        </div>

        {/* Cycle: Encode → Score → Implement → Evaluate */}
        <div className="flex items-center gap-2">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                <stage.icon size={18} stroke={1.5} className="text-white/90" />
                <span className="text-sm font-semibold text-white">{stage.label}</span>
              </div>
              {i < stages.length - 1 && (
                <span className="text-white/40 text-lg">&rarr;</span>
              )}
            </div>
          ))}
          <span className="text-white/40 text-lg">&rarr;</span>
          <span className="text-white/50 text-xs italic">cycle repeats</span>
        </div>

        {/* RF logo */}
        <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-5 py-3">
          <Image
            src="/logos/rules-foundation-light.svg"
            alt="Rules Foundation"
            width={120}
            height={32}
            className="object-contain"
          />
          <p className="text-sm text-white/70 leading-relaxed max-w-md">
            Open infrastructure for this cycle &mdash; a virtuous loop for the public good.
          </p>
        </div>
      </div>
    </Slide>
  );
}
