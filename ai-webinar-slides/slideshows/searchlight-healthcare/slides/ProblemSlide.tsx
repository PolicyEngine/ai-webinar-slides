import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { IconBuilding, IconBriefcase, IconCalculator, type Icon } from '@tabler/icons-react';

const FOOTER = 'Searchlight Institute · March 2026';

const options: { icon: Icon; title: string; verdict: string; problems: string[] }[] = [
  {
    icon: IconBuilding,
    title: 'Ask CBO',
    verdict: 'Gatekept and slow',
    problems: [
      'CBO uses HISIM2, their internal model, not publicly available',
      'Only accessible if you\'re formally scoring legislation',
      'No access for researchers, advocates, or most congressional staff',
    ],
  },
  {
    icon: IconBriefcase,
    title: 'Commission Urban or RAND',
    verdict: 'Proprietary and slow to iterate',
    problems: [
      'Urban\'s HIPSM and RAND\'s COMPARE are not open-source',
      'RAND\'s model has seen little activity since 2015',
      'Every new scenario means another request and more lead time',
    ],
  },
  {
    icon: IconCalculator,
    title: 'Build it yourself',
    verdict: 'Complex and not credible',
    problems: [
      'ACA subsidies interact with income taxes in non-trivial ways',
      'Plan choice, Medicaid cliffs, and CHIP overlap are hard to model',
      'Results won\'t align with CBO or Urban; no external credibility',
    ],
  },
];

export default function ProblemSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>You want to model how ACA subsidy changes affect coverage and costs. Now what?</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-4">
        {options.map((option, i) => (
          <div key={i} className="content-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle" style={{ width: '40px', height: '40px', borderRadius: '12px' }}>
                <option.icon size={22} stroke={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-pe-dark">{option.title}</h3>
                <p className="text-sm font-medium" style={{ color: 'var(--warning)' }}>{option.verdict}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {option.problems.map((problem, j) => (
                <li key={j} className="text-sm text-gray-600 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-300" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-lg text-gray-500 mt-6">
        Health policy modeling is even more gatekept than tax, and the models don&apos;t talk to each other.
      </p>
    </Slide>
  );
}
