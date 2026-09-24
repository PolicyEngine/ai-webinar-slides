import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { IconHeartRateMonitor, IconCalculator, IconArrowRight } from '@tabler/icons-react';

const FOOTER = 'Groundwork Collaborative · March 2026';

const covered = [
  'ACA marketplace premium tax credits',
  'Medicaid and CHIP eligibility',
  'Interaction with income taxes and EITC',
  'Population-level coverage and cost estimates',
];

const whyItMatters = [
  'Health subsidies are income-linked — you can\'t model them without tax',
  'Medicaid cliffs create marriage penalties invisible to tax-only models',
  'ACA reform and tax reform are inseparable under reconciliation',
];

export default function HealthcareIntroSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>PolicyEngine also models health coverage</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="icon-circle" style={{ width: '40px', height: '40px', borderRadius: '12px' }}>
              <IconHeartRateMonitor size={22} stroke={1.5} />
            </div>
            <h3 className="text-base font-bold text-pe-dark">What we cover</h3>
          </div>
          <ul className="space-y-2">
            {covered.map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--pe-teal)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="icon-circle" style={{ width: '40px', height: '40px', borderRadius: '12px' }}>
              <IconCalculator size={22} stroke={1.5} />
            </div>
            <h3 className="text-base font-bold text-pe-dark">Why tax and health must be modeled together</h3>
          </div>
          <ul className="space-y-2">
            {whyItMatters.map((item, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 content-card px-6 py-4 text-center" style={{ background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)' }}>
        <div className="flex items-center justify-center gap-3">
          <IconHeartRateMonitor size={20} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          <IconArrowRight size={16} stroke={1.5} className="text-gray-300" />
          <IconCalculator size={20} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          <p className="text-base font-semibold text-pe-dark ml-2">
            The only open-source model that integrates tax and health in a single simulation
          </p>
        </div>
      </div>
    </Slide>
  );
}
