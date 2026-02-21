import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';
import { IconFileText, IconCode, IconChartBar, IconUsers, IconRefresh } from '@tabler/icons-react';

const FOOTER = 'Abundance DMV · February 2026';

const stages = [
  {
    icon: IconFileText,
    label: 'Encode',
    description: 'AI reads statutes subsection by subsection, encodes them as executable rules',
  },
  {
    icon: IconChartBar,
    label: 'Score',
    description: 'Prospective analysis: cost, poverty, distributional impact of proposed policy',
  },
  {
    icon: IconUsers,
    label: 'Implement',
    description: 'Benefits platforms deliver to citizens based on the same encoded rules',
  },
  {
    icon: IconRefresh,
    label: 'Evaluate',
    description: 'Retrospective analysis: did the policy work? Like TAXSIM studies, but open-source',
  },
];

export default function FutureSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <div className="flex items-center gap-4">
          <SlideTitle>Rules Foundation</SlideTitle>
          <Image
            src="/logos/rules-foundation.svg"
            alt="Rules Foundation"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>
      </SlideHeader>

      <p className="text-base text-gray-600 mb-5 -mt-4">
        Open infrastructure for encoded law. One computational model powers the full policy cycle.
      </p>

      <div className="grid grid-cols-4 gap-4">
        {stages.map((stage, i) => (
          <div key={i} className="content-card p-5 text-center relative">
            <div className="icon-circle mx-auto mb-3" style={{ width: '48px', height: '48px' }}>
              <stage.icon size={24} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
            </div>
            <h3 className="text-lg font-bold text-pe-dark mb-2">{stage.label}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{stage.description}</p>
            {i < stages.length - 1 && (
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300 text-2xl z-10">
                &rarr;
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-5 gap-3 text-gray-400">
        <IconRefresh size={18} stroke={1.5} />
        <p className="text-sm">
          Evaluation feeds back into better encoding &mdash; a virtuous cycle, all built on the same deterministic models of individual effects and economic models of societal impact.
        </p>
      </div>
    </Slide>
  );
}
