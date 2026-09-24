import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

const FOOTER = 'Searchlight Institute · March 2026';

const categories = [
  {
    label: 'Federal taxes',
    programs: 'Income tax, payroll tax, capital gains, estate tax, AMT, all credits (EITC, CTC, CDCTC, PTC, education credits)',
  },
  {
    label: 'Federal benefits',
    programs: 'SNAP, Medicaid, SSI, TANF, WIC, Section 8 housing vouchers, ACA marketplace subsidies, school meals, CCDF childcare',
  },
  {
    label: 'State income taxes',
    programs: 'All 50 states + DC — brackets, deductions, credits, and exemptions',
  },
  {
    label: 'State benefits',
    programs: 'State EITC/CTC supplements, state SNAP add-ons, state TANF rules, property tax credits',
  },
];

export default function CoverageSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>Comprehensive coverage</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {categories.map((cat, i) => (
          <div key={i} className="content-card p-5">
            <p className="font-semibold text-pe-dark mb-2">{cat.label}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{cat.programs}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-8 mt-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-pe-dark">2,000+</p>
          <p className="text-sm text-gray-500">policy variables</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-pe-dark">50</p>
          <p className="text-sm text-gray-500">states + DC</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-pe-dark">435</p>
          <p className="text-sm text-gray-500">congressional districts</p>
        </div>
      </div>
    </Slide>
  );
}
