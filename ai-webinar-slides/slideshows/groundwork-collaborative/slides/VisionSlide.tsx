import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { IconHeartRateMonitor, IconCalculator, IconArrowRight, IconUsers, IconChartBar } from '@tabler/icons-react';

const FOOTER = 'Groundwork Collaborative · March 2026';

const healthFeatures = [
  'Plan choice via utility maximization',
  'Behavioral enrollment responses',
  'Cost-sharing reductions',
  'Local area calibration',
  'Insurer market dynamics',
];

const taxFeatures = [
  'Income and payroll tax',
  'EITC, CTC, and credits',
  'SNAP, Medicaid, SSI',
  'Labor supply responses',
  'All 50 states + DC',
];

export default function VisionSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>Long-term vision</SlideTitle>
      </SlideHeader>

      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mt-2 mb-6 leading-relaxed">
        A HIPSM-caliber health model, fully integrated with the tax and benefit side, open-source and queryable in plain English.
      </p>

      <div className="flex items-center justify-center gap-4 max-w-4xl mx-auto">
        <div className="content-card p-5 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="icon-circle" style={{ width: '36px', height: '36px', borderRadius: '10px' }}>
              <IconHeartRateMonitor size={18} stroke={1.5} />
            </div>
            <h3 className="font-bold text-pe-dark">Health model</h3>
          </div>
          <ul className="space-y-1.5">
            {healthFeatures.map((f, i) => (
              <li key={i} className="text-sm text-gray-600 pl-4 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--pe-teal)' }} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-2 px-2">
          <IconArrowRight size={28} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          <IconArrowRight size={28} stroke={1.5} style={{ color: 'var(--pe-teal)', transform: 'rotate(180deg)' }} />
          <span className="text-xs font-semibold text-center" style={{ color: 'var(--pe-teal)' }}>fully<br />integrated</span>
        </div>

        <div className="content-card p-5 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="icon-circle" style={{ width: '36px', height: '36px', borderRadius: '10px' }}>
              <IconCalculator size={18} stroke={1.5} />
            </div>
            <h3 className="font-bold text-pe-dark">Tax and benefit model</h3>
          </div>
          <ul className="space-y-1.5">
            {taxFeatures.map((f, i) => (
              <li key={i} className="text-sm text-gray-600 pl-4 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-5">
        <div className="content-card px-5 py-3 flex items-center gap-2">
          <IconUsers size={18} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          <span className="text-sm text-gray-600">Household-level detail</span>
        </div>
        <div className="content-card px-5 py-3 flex items-center gap-2">
          <IconChartBar size={18} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          <span className="text-sm text-gray-600">Population-scale scoring</span>
        </div>
        <div className="content-card px-5 py-3 text-sm text-gray-600 font-mono">
          open-source
        </div>
      </div>
    </Slide>
  );
}
