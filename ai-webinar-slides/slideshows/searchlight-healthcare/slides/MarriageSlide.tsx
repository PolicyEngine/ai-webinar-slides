import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';

const FOOTER = 'Searchlight Institute · March 2026';

export default function MarriageSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>Why tax and health have to be modeled together</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-3 items-start">
        <div className="content-card overflow-hidden">
          <Image
            src="/screenshots/pe-marriage-calc.png"
            alt="PolicyEngine marriage calculator showing ACA subsidy cliff"
            width={752}
            height={462}
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-4 pt-2">
          <div className="content-card p-5">
            <p className="text-2xl font-bold text-pe-dark mb-1">-$8,833</p>
            <p className="text-sm text-gray-500">marriage penalty for two $45k earners in California</p>
          </div>

          <div className="content-card p-5 border-l-4" style={{ borderLeftColor: 'var(--pe-teal)' }}>
            <p className="font-semibold text-pe-dark text-sm mb-2">Where the penalty comes from</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 pl-4 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--pe-teal)' }} />
                ACA subsidies: <span className="font-semibold text-pe-dark">-$8,832</span> (lost entirely when incomes combine)
              </li>
              <li className="text-sm text-gray-600 pl-4 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300" />
                Federal taxes: <span className="font-semibold text-gray-500">+$1</span> (negligible)
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed px-1">
            A tax-only model would miss 100% of this penalty. PolicyEngine captures it because ACA subsidies and income taxes are computed in the same simulation.
          </p>

          <a
            href="https://www.policyengine.org/us/marriage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-mono text-gray-400 hover:text-pe-teal transition-colors"
          >
            policyengine.org/us/marriage
          </a>
        </div>
      </div>
    </Slide>
  );
}
