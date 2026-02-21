import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';
import { IconFileText, IconCode, IconChartBar, IconRefresh } from '@tabler/icons-react';

const FOOTER = 'Abundance DMV · February 2026';

const stages = [
  {
    icon: IconFileText,
    label: 'Atlas',
    description: 'Legal document archive of statutes, regulations, and IRS guidance',
  },
  {
    icon: IconCode,
    label: 'RAC',
    description: 'Rules as Code DSL that encodes law into executable policy rules',
  },
  {
    icon: IconChartBar,
    label: 'AutoRAC',
    description: 'AI reads statutes subsection by subsection and generates encodings',
  },
  {
    icon: IconRefresh,
    label: 'Full cycle',
    description: 'From bill drafting through scoring to implementation — continuously updated',
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

      <p className="text-lg text-gray-600 mb-6 -mt-4">
        Open infrastructure for encoded law. 501(c)(3) nonprofit building the public good layer so AI and government can understand legislation the same way.
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

      <p className="text-center text-base text-gray-500 mt-6">
        Removing the bottleneck so government can move at the speed policy demands.
      </p>
    </Slide>
  );
}
