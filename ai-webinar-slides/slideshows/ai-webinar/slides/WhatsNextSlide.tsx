import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function WhatsNextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>What&apos;s next</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-4">
        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-pe-teal/20 text-pe-dark text-xs font-bold uppercase tracking-wider">In progress</span>
            <h3 className="text-xl font-bold text-gray-800">Cross-program validation</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Benefit programs form a connected system &mdash; SNAP benefits count as unearned income for TANF, Medicaid enrollment affects SSI calculations, and some programs are mutually exclusive.
          </p>
          <div className="p-3 bg-pe-teal/5 border border-pe-teal/20 rounded-lg">
            <p className="text-pe-dark text-sm">
              A cross-program validator would detect these interactions during implementation rather than in production.
            </p>
          </div>
        </div>

        <div className="content-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">Exploring</span>
            <h3 className="text-xl font-bold text-gray-800">Historical implementations</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Parameters support multiple effective dates, but program reforms often involve structural changes &mdash; eliminating deductions, adding eligibility categories, or restructuring formulas.
          </p>
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-purple-800 text-sm">
              Testing approaches to handle these reforms across time, not just updated values.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 text-lg">
          PolicyEngine is a nonprofit building free, open-source tools for tax and benefit policy analysis.
        </p>
        <p className="text-pe-teal font-semibold mt-1">policyengine.org</p>
      </div>
    </Slide>
  );
}
