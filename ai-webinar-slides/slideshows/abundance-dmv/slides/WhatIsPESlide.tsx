import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

const FOOTER = 'Abundance DMV · February 2026';

const features = [
  {
    stat: 'Free',
    label: 'Open-source',
    description: 'Anyone can use it, audit it, or build on it',
  },
  {
    stat: '50',
    label: 'States + federal',
    description: 'Comprehensive US tax and benefit modeling',
  },
  {
    stat: 'Seconds',
    label: 'Not months',
    description: 'What used to take months of expert analysis, done in seconds',
  },
];

export default function WhatIsPESlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>PolicyEngine: democratizing policy analysis</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-8 mt-4">
        {features.map((feature, i) => (
          <div key={i} className="content-card p-8 text-center">
            <div className="stat-number mb-2">{feature.stat}</div>
            <h3 className="text-xl font-bold text-pe-dark mb-2">{feature.label}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 content-card p-6">
        <div className="flex items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-pe-dark mb-2">Two modes</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="accent-block">
                <p className="font-semibold text-pe-dark">Household calculator</p>
                <p className="text-sm text-gray-500">How does a policy affect my family?</p>
              </div>
              <div className="accent-block">
                <p className="font-semibold text-pe-dark">Population impact</p>
                <p className="text-sm text-gray-500">What&apos;s the cost, who wins, who loses?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
