import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';

const FOOTER = 'Groundwork Collaborative · March 2026';

export default function DemoSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>policyengine.org</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-2">
        <div>
          <div className="content-card overflow-hidden">
            <Image
              src="/screenshots/pe-winners-losers.png"
              alt="PolicyEngine winners and losers analysis"
              width={800}
              height={618}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Winners and losers by income decile
          </p>
        </div>

        <div>
          <div className="content-card overflow-hidden">
            <Image
              src="/screenshots/pe-aca-calc.png"
              alt="PolicyEngine ACA premium tax credits calculator"
              width={800}
              height={618}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            ACA premium tax credit calculator — household-level health coverage costs
          </p>
        </div>
      </div>
    </Slide>
  );
}
