import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import { IconBuildingBank } from '@tabler/icons-react';
import Image from 'next/image';

const FOOTER = 'Groundwork Collaborative · March 2026';

export default function WorkSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>What we&apos;ve built</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-3">
        {/* ACA calculator screenshot */}
        <div className="content-card overflow-hidden flex flex-col">
          <div className="px-5 pt-4 pb-3 border-b border-gray-100">
            <h3 className="text-base font-bold text-pe-dark">ACA calculator</h3>
            <p className="text-xs text-gray-400 font-mono">aca-calc.vercel.app</p>
          </div>
          <Image
            src="/screenshots/pe-aca-calc.png"
            alt="PolicyEngine ACA Premium Tax Credits calculator"
            width={752}
            height={428}
            className="w-full h-auto"
          />
        </div>

        {/* CRFB partnership */}
        <div className="content-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle" style={{ width: '48px', height: '48px', borderRadius: '14px' }}>
                <IconBuildingBank size={24} stroke={1.5} />
              </div>
              <div>
                <h3 className="text-base font-bold text-pe-dark">CRFB reform modeling</h3>
                <p className="text-xs text-gray-400">Committee for a Responsible Federal Budget</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Partnered with CRFB to model their healthcare reform proposals at the household level, showing how specific policy changes affect individual families.
            </p>

            <ul className="space-y-1.5">
              {[
                'Modeled specific ACA reform scenarios',
                'Household-level impact estimates',
                'Reproducible: CRFB can re-run scenarios themselves',
              ].map((h, j) => (
                <li key={j} className="text-sm text-gray-600 pl-4 relative">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--pe-teal)' }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
