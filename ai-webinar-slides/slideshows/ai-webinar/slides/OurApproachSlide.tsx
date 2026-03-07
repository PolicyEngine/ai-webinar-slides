import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function OurApproachSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Our approach to each ingredient</SlideTitle>
      </SlideHeader>

      <div className="mt-8 px-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Policies Column */}
          <div>
            <div className="bg-pe-teal text-white text-center py-6 rounded-t-lg mb-6">
              <h2 className="text-4xl font-bold">Policies</h2>
            </div>
            <ul className="space-y-3 text-xl text-pe-dark">
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>Federal income &amp; payroll tax</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>State income tax (all 50 states)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>Child Tax Credits (federal &amp; state)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>SNAP, Medicaid, CHIP, ACA PTC, SSI</span>
              </li>
            </ul>
          </div>

          {/* Households Column */}
          <div>
            <div style={{ backgroundColor: 'var(--pe-color-primary-600)' }} className="text-white text-center py-6 rounded-t-lg mb-6">
              <h2 className="text-4xl font-bold">Households</h2>
            </div>
            <ul className="space-y-3 text-xl text-pe-dark">
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>CPS ASEC foundation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>Integrates IRS PUF, ACS, SCF, and SIPP</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>State-specific datasets</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>Calibrated to state aggregates</span>
              </li>
            </ul>
          </div>

          {/* Dynamics Column */}
          <div>
            <div style={{ backgroundColor: 'var(--pe-color-primary-800)' }} className="text-white text-center py-6 rounded-t-lg mb-6">
              <h2 className="text-4xl font-bold">Dynamics</h2>
            </div>
            <ul className="space-y-3 text-xl text-pe-dark">
              <li className="flex items-center gap-3">
                <span className="text-pe-teal text-2xl leading-none">•</span>
                <span>Labor supply elasticities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row with methodology */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg italic font-semibold" style={{ color: 'var(--pe-color-blue-700)' }}>
              Legislative references &amp; thousands of unit tests
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg italic font-semibold" style={{ color: 'var(--pe-color-blue-700)' }}>
              Machine learning calibration for accuracy
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg italic font-semibold" style={{ color: 'var(--pe-color-blue-700)' }}>
              CBO-based behavioral assumptions
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
