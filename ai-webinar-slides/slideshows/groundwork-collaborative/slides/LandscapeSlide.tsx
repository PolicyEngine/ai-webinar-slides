import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

const FOOTER = 'Groundwork Collaborative · March 2026';

const taxModels = [
  { name: 'Tax-Calc', org: 'PSL Foundation', access: 'Open-source' },
  { name: 'PolicyEngine', org: 'PolicyEngine', access: 'Open-source' },
  { name: 'Tax Policy Center model', org: 'Urban/Brookings', access: 'Research use' },
  { name: 'ITEP microsim', org: 'ITEP', access: 'Research use' },
];

const healthModels = [
  { name: 'HISIM2', org: 'CBO', access: 'Internal only' },
  { name: 'HIPSM', org: 'Urban Institute', access: 'Not public' },
  { name: 'COMPARE', org: 'RAND', access: 'Paid contract' },
  { name: 'HBSM', org: 'Lewin Group', access: 'Proprietary' },
];

export default function LandscapeSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>Health microsimulation is rarer and more closed than tax modeling</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-4">
        <div>
          <h3 className="text-base font-semibold text-gray-500 uppercase tracking-wide mb-3">Tax microsimulation models</h3>
          <div className="content-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-4 py-2 font-semibold text-pe-dark">Model</th>
                  <th className="text-left px-4 py-2 font-semibold text-pe-dark">Org</th>
                  <th className="text-left px-4 py-2 font-semibold text-pe-dark">Access</th>
                </tr>
              </thead>
              <tbody>
                {taxModels.map((m, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-2 font-medium text-pe-dark">{m.name}</td>
                    <td className="px-4 py-2 text-gray-500">{m.org}</td>
                    <td className="px-4 py-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${m.access === 'Open-source' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {m.access}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-500 uppercase tracking-wide mb-3">Health microsimulation models</h3>
          <div className="content-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-4 py-2 font-semibold text-pe-dark">Model</th>
                  <th className="text-left px-4 py-2 font-semibold text-pe-dark">Org</th>
                  <th className="text-left px-4 py-2 font-semibold text-pe-dark">Access</th>
                </tr>
              </thead>
              <tbody>
                {healthModels.map((m, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-2 font-medium text-pe-dark">{m.name}</td>
                    <td className="px-4 py-2 text-gray-500">{m.org}</td>
                    <td className="px-4 py-2">
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-700">
                        {m.access}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2 pl-1">None of these models are open-source. None combine health with tax.</p>
        </div>
      </div>

      <div className="mt-5 content-card px-6 py-3 text-center" style={{ background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)' }}>
        <p className="text-base font-semibold text-pe-dark">
          PolicyEngine is the only open-source model that integrates tax and health coverage in a single simulation
        </p>
      </div>
    </Slide>
  );
}
