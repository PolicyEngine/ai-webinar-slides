import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { IconSparkles } from '@tabler/icons-react';

const FOOTER = 'Abundance DMV · February 2026';

export default function FourthOptionSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>What if there was a fourth option?</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col items-center justify-center mt-8">
        <div className="content-card p-10 max-w-3xl text-center" style={{ background: 'linear-gradient(135deg, var(--pe-light) 0%, white 100%)' }}>
          <div className="icon-circle mx-auto mb-6" style={{ width: '64px', height: '64px' }}>
            <IconSparkles size={32} stroke={1.5} style={{ color: 'var(--pe-teal)' }} />
          </div>
          <h2 className="text-3xl font-bold text-pe-dark mb-4">
            Ask AI &mdash; backed by a credible economic model
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            What if any policymaker, advocate, or citizen could get CBO-quality analysis instantly &mdash; and the model was open-source, so anyone could verify it?
          </p>
        </div>

        <p className="text-lg text-gray-500 mt-8">
          That&apos;s what we&apos;ve been building for the last five years.
        </p>
      </div>
    </Slide>
  );
}
