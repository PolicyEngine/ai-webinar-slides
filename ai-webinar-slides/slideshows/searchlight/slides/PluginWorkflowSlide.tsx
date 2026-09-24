import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { IconSearch, IconFileText, IconCode, IconTestPipe, IconGitPullRequest, IconArrowRight } from '@tabler/icons-react';

const FOOTER = 'Searchlight Institute · March 2026';

const phases = [
  { icon: IconSearch, label: 'Research', detail: 'Collects official statutes, regulations, and program rules' },
  { icon: IconFileText, label: 'Parameters', detail: 'Builds YAML parameter files with source citations' },
  { icon: IconCode, label: 'Implement', detail: 'Writes Python rules with zero hard-coded values' },
  { icon: IconTestPipe, label: 'Test', detail: 'Creates independent tests, runs CI, fixes failures' },
  { icon: IconGitPullRequest, label: 'PR', detail: 'Formats, pushes, and writes a detailed pull request' },
];

export default function PluginWorkflowSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>One command, a complete policy implementation</SlideTitle>
      </SlideHeader>

      <div className="flex items-center justify-center mt-2 mb-6">
        <div className="code-block w-full max-w-2xl">
          <div className="code-block-header">
            <div className="code-block-dot bg-red-500"></div>
            <div className="code-block-dot bg-yellow-500"></div>
            <div className="code-block-dot bg-green-500"></div>
            <span className="text-white/40 text-sm ml-2">terminal</span>
          </div>
          <div className="code-block-content">
            <pre className="text-base">
              <span className="text-gray-500"># Encode a state benefit program from scratch</span>{'\n'}
              <span className="text-green-400">$</span> <span className="text-blue-300">/encode-policy</span> <span className="text-yellow-300">{'"Iowa TANF"'}</span>{'\n'}
              <span className="text-gray-500">⠋ 16 specialist agents · ~90 minutes · fully autonomous</span>
            </pre>
          </div>
        </div>
      </div>

      {/* Phase pipeline */}
      <div className="flex items-start justify-center gap-1 mb-6">
        {phases.map((phase, i) => (
          <div key={i} className="flex items-start gap-1">
            <div className="flex flex-col items-center w-36">
              <div className="content-card flex items-center gap-2 px-4 py-2.5 w-full justify-center">
                <phase.icon size={18} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
                <span className="text-sm font-semibold text-pe-dark">{phase.label}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center leading-snug px-1">{phase.detail}</p>
            </div>
            {i < phases.length - 1 && (
              <div className="flex items-center pt-2.5">
                <IconArrowRight size={16} className="text-gray-300" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key principles */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
        <div className="text-center p-3">
          <p className="text-2xl font-bold text-pe-dark">16</p>
          <p className="text-xs text-gray-500">specialist agents</p>
        </div>
        <div className="text-center p-3">
          <p className="text-2xl font-bold text-pe-dark">0</p>
          <p className="text-xs text-gray-500">hard-coded values</p>
        </div>
        <div className="text-center p-3">
          <p className="text-2xl font-bold text-pe-dark">100%</p>
          <p className="text-xs text-gray-500">traceable to statute</p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-2">
        Test-writers and rule-writers never see each other&apos;s work until validation &mdash; ensuring independent verification.
      </p>
    </Slide>
  );
}
