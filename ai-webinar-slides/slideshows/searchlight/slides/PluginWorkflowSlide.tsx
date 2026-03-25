import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

const FOOTER = 'Searchlight Institute · March 2026';

const questions = [
  { q: '"What would a $4,000 child tax credit cost?"', category: 'Budget score' },
  { q: '"How many children would be lifted out of poverty?"', category: 'Poverty impact' },
  { q: '"Who wins and who loses by income decile?"', category: 'Distributional analysis' },
  { q: '"Compare EITC expansion to a $200/mo UBI"', category: 'Comparison' },
  { q: '"Single parent earning $35k in Texas?"', category: 'Household' },
  { q: '"Show me marginal tax rates under this reform"', category: 'Tax analysis' },
  { q: '"Impact in New York\u2019s 17th district?"', category: 'District' },
  { q: '"Repealing the SALT cap on the top decile?"', category: 'Reform scoring' },
];

export default function PluginWorkflowSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>What can you ask?</SlideTitle>
        <p className="text-lg text-gray-500 mt-1">Plain English in, rigorous analysis out</p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {questions.map((item, i) => (
          <div key={i} className="content-card px-5 py-3 flex items-start gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide whitespace-nowrap mt-0.5" style={{ color: 'var(--pe-teal)', minWidth: '120px' }}>
              {item.category}
            </span>
            <p className="text-sm text-gray-700 font-mono leading-relaxed">{item.q}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-4">
        Every answer is backed by open-source microsimulation on CPS survey data &mdash; not LLM guesswork.
      </p>
    </Slide>
  );
}
