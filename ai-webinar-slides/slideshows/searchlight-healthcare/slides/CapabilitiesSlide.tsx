import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

const FOOTER = 'Searchlight Institute · March 2026';

const capabilities = [
  {
    label: 'ACA marketplace subsidies',
    detail: 'Premium tax credits and benchmark plan calculations, linked to household income and tax filing status',
  },
  {
    label: 'Medicaid & CHIP',
    detail: 'Federal and state eligibility rules, income thresholds, family structure logic, and interaction with marketplace eligibility',
  },
  {
    label: 'Population-level estimates',
    detail: 'Coverage counts, subsidy costs, and winners/losers analysis across the full US population using CPS microdata',
  },
];

const limitations = [
  {
    label: 'Plan choice assignment in progress',
    detail: 'Assigning households to specific plans (metal tier, insurer) is still in development.',
  },
  {
    label: 'Local area calibration in progress',
    detail: 'Calibrating subsidy and enrollment estimates to local market areas is ongoing.',
  },
  {
    label: 'Cost-sharing reductions not modeled',
    detail: 'We do not currently model CSRs. Provider-level utilization and health outcomes are also out of scope.',
  },
];

export default function CapabilitiesSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>What we model</SlideTitle>
      </SlideHeader>

      <div className="mt-4">
        <div className="grid grid-cols-2 gap-x-6 mb-3">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">What we cover</h3>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Current limitations</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {capabilities.map((c, i) => (
            <React.Fragment key={i}>
              <div className="content-card p-4">
                <p className="font-semibold text-pe-dark text-sm mb-1">{c.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.detail}</p>
              </div>
              <div className="content-card p-4 border-l-4" style={{ borderLeftColor: 'var(--pe-teal)' }}>
                <p className="font-semibold text-pe-dark text-sm mb-1">{limitations[i].label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{limitations[i].detail}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Slide>
  );
}
