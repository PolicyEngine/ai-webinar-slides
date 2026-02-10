import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function SolutionOverviewSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The solution: multi-agent AI</SlideTitle>
      </SlideHeader>

      <div className="mt-24">
      <div className="flex items-center justify-center">
        <div className="code-block w-full max-w-3xl mx-auto">
          <div className="code-block-header">
            <div className="code-block-dot bg-red-500"></div>
            <div className="code-block-dot bg-yellow-500"></div>
            <div className="code-block-dot bg-green-500"></div>
            <span className="text-white/40 text-sm ml-2">terminal</span>
          </div>
          <div className="code-block-content">
            <pre className="text-lg">
              <span className="text-gray-500"># Run the workflow</span>{'\n'}
              <span className="text-green-400">$</span> <span className="text-blue-300">/encode-policy</span> <span className="text-yellow-300">{'"New Hampshire TANF"'}</span>
            </pre>
          </div>
        </div>
      </div>

      <p className="text-xl text-gray-400 mt-6 italic text-center">One command, 90 minutes, a complete pull request</p>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Agents</h3>
          <p className="text-sm text-gray-500 leading-relaxed"><strong>Autonomous AI workers</strong> that can read files, write code, run tests, and make decisions — like a junior developer that follows instructions precisely.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Skills</h3>
          <p className="text-sm text-gray-500 leading-relaxed"><strong>Reusable prompts</strong> that tell an agent <em>how</em> to do a specific task — like a <strong>detailed checklist</strong> a senior developer writes for the team.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Plugins</h3>
          <p className="text-sm text-gray-500 leading-relaxed"><strong>Bundles</strong> of agents and skills that can be <strong>shared across projects</strong> — like installing an extension that gives your AI new capabilities.</p>
        </div>
      </div>
      </div>
    </Slide>
  );
}
