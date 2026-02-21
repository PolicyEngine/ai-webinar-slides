import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';
import { IconFileText, IconCode, IconUsers, IconChartBar } from '@tabler/icons-react';

const FOOTER = 'Abundance DMV · February 2026';

const stages = [
  {
    icon: IconFileText,
    label: 'Drafting',
    description: 'AI reads and interprets statutes subsection by subsection',
  },
  {
    icon: IconCode,
    label: 'Encoding',
    description: 'AutoRAC translates law into executable policy rules',
  },
  {
    icon: IconUsers,
    label: 'Implementation',
    description: 'Benefits platforms like MyFriendBen and Amplifi deliver to citizens',
  },
  {
    icon: IconChartBar,
    label: 'Scoring',
    description: 'Microsimulation scores cost, poverty, and distributional impact',
  },
];

export default function FutureSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>The future: from drafting to implementation</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-4 gap-4 mt-4">
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

      <div className="mt-6 content-card p-5">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="slide-tag mb-2">Rules Foundation</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Building the public good infrastructure for machine-readable law. From AI-assisted to fully AI-generated policy encoding &mdash; identifying inconsistencies in statutes along the way.
            </p>
          </div>
          <div className="flex items-center gap-6 ml-8">
            <div className="flex items-center justify-center" style={{ height: '50px' }}>
              <Image
                src="/logos/organizations/myfriendben.png"
                alt="MyFriendBen"
                width={100}
                height={45}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center" style={{ height: '50px' }}>
              <Image
                src="/logos/organizations/amplifi.png"
                alt="Amplifi"
                width={100}
                height={45}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
