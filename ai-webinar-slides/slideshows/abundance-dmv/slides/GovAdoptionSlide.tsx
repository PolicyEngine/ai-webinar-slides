import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';

const FOOTER = 'Abundance DMV · February 2026';

const partners = [
  { name: '10 Downing Street', logo: '/logos/organizations/10-downing-street.png' },
  { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png' },
  { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
  { name: 'NBER', logo: '/logos/organizations/nber.png' },
  { name: 'Georgetown University', logo: '/logos/organizations/georgetown.png' },
  { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
];

export default function GovAdoptionSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>Trusted by governments and institutions</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 mt-4">
        <div className="content-card p-6">
          <div className="slide-tag mb-3">UK government</div>
          <h3 className="text-lg font-bold text-pe-dark mb-2">
            CTO currently embedded at 10 Downing Street
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            UK government chose PolicyEngine because policy moves faster than traditional analysis can keep up.
          </p>
        </div>

        <div className="content-card p-6">
          <div className="slide-tag mb-3">Rhode Island</div>
          <h3 className="text-lg font-bold text-pe-dark mb-2">
            Governor McKee used PolicyEngine to design his Child Tax Credit
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            $325 fully refundable credit, $36.7M cost, benefiting 29.2% of RI residents &mdash; designed with our calculator.
          </p>
        </div>

        <div className="content-card p-6">
          <div className="slide-tag mb-3">US adoption</div>
          <h3 className="text-lg font-bold text-pe-dark mb-2">
            Congress, think tanks, and universities
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Joint Economic Committee, Niskanen, AEI, Georgetown, and more rely on PolicyEngine.
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-10">
        {partners.map((org, i) => (
          <div key={i} className="flex items-center justify-center" style={{ height: '60px' }}>
            <Image
              src={org.logo}
              alt={org.name}
              width={90}
              height={55}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </Slide>
  );
}
