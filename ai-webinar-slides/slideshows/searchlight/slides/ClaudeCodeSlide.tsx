import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { IconMessageChatbot, IconChartBar, IconFileText, IconMap, IconUsers, IconScale } from '@tabler/icons-react';

const FOOTER = 'Searchlight Institute · March 2026';

const capabilities = [
  {
    icon: IconMessageChatbot,
    title: 'Natural language in, analysis out',
    example: '"What would doubling the EITC cost?"',
    detail: 'The plugin translates plain-English questions into PolicyEngine simulations and returns formatted results.',
  },
  {
    icon: IconChartBar,
    title: 'Full distributional analysis',
    example: 'Winners/losers, poverty impact, Gini',
    detail: 'Budget cost, share gaining or losing, poverty rate changes, and inequality metrics — all from one prompt.',
  },
  {
    icon: IconFileText,
    title: 'Score any proposal',
    example: '"Score a $500/mo UBI for families under $50k"',
    detail: 'Describe a reform in words. The plugin encodes it, runs microsimulation on CPS data, and returns the score.',
  },
  {
    icon: IconMap,
    title: 'State and district analysis',
    example: 'All 50 states + 435 congressional districts',
    detail: 'Datasets for every state and congressional district on HuggingFace. Analyze a proposal for your district.',
  },
  {
    icon: IconUsers,
    title: 'Household calculators',
    example: '"What would a single parent earning $35k get?"',
    detail: 'Model any household: income, family structure, state, and see exact tax/benefit outcomes.',
  },
  {
    icon: IconScale,
    title: '2,000+ policy variables',
    example: 'Federal + state taxes, SNAP, TANF, CTC, ACA...',
    detail: 'Open-source rules covering US federal and state tax-benefit systems, updated continuously.',
  },
];

export default function ClaudeCodeSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>The PolicyEngine plugin for Claude</SlideTitle>
      </SlideHeader>

      <div className="flex items-center justify-center mt-1 mb-4">
        <div className="code-block w-full max-w-xl">
          <div className="code-block-header">
            <div className="code-block-dot bg-red-500"></div>
            <div className="code-block-dot bg-yellow-500"></div>
            <div className="code-block-dot bg-green-500"></div>
            <span className="text-white/40 text-sm ml-2">terminal</span>
          </div>
          <div className="code-block-content">
            <pre className="text-sm">
              <span className="text-green-400">$</span> <span className="text-blue-300">/plugin install</span> <span className="text-yellow-300">complete@policyengine-claude</span>{'\n'}
              <span className="text-gray-500">✓ 31 agents · 11 commands · 37 skills loaded</span>
            </pre>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {capabilities.map((cap, i) => (
          <div key={i} className="content-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <cap.icon size={20} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
              <h3 className="text-sm font-bold text-pe-dark">{cap.title}</h3>
            </div>
            <p className="text-xs font-mono text-pe-teal mb-1.5">{cap.example}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{cap.detail}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-3">
        Open source &middot; No code required &middot; Works with Claude Code and Claude Desktop
      </p>
    </Slide>
  );
}
