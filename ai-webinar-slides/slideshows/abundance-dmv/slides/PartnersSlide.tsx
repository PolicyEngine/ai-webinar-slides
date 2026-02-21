import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import Image from 'next/image';

const FOOTER = 'Abundance DMV · February 2026';

const organizations = [
  { name: '10 Downing Street', logo: '/logos/organizations/10-downing-street.png' },
  { name: 'Joint Economic Committee', logo: '/logos/organizations/jec.png' },
  { name: 'Bureau of Economic Analysis', logo: '/logos/organizations/bea.png' },
  { name: 'Niskanen Center', logo: '/logos/organizations/niskanen-center.png' },
  { name: 'American Enterprise Institute', logo: '/logos/organizations/aei.png' },
  { name: 'NBER', logo: '/logos/organizations/nber.png' },
  { name: 'Georgetown University', logo: '/logos/organizations/georgetown.png' },
  { name: 'University of Michigan', logo: '/logos/organizations/umich.png' },
  { name: 'USC', logo: '/logos/organizations/usc.png', smaller: true },
  { name: 'Prenatal-to-3 Policy Impact Center', logo: '/logos/organizations/pn3policy.png' },
  { name: 'Colorado Fiscal Institute', logo: '/logos/organizations/cfi.png' },
  { name: 'Gary Community Ventures', logo: '/logos/organizations/gary-community-ventures.png' },
  { name: 'Mothers Outreach Network', logo: '/logos/organizations/mothers-outreach-network.png' },
  { name: 'Atlanta Fed', logo: '/logos/organizations/atlanta-fed.png' },
  { name: 'Center for Growth and Opportunity', logo: '/logos/organizations/cgo.png' },
  { name: 'Living Wage Calculator', logo: '/logos/organizations/living-wage-calculator.png' },
  { name: 'UHERO', logo: '/logos/organizations/uhero.png' },
  { name: 'UBI Center', logo: '/logos/organizations/ubicenter.png' },
  { name: 'MyFriendBen', logo: '/logos/organizations/myfriendben.png' },
  { name: 'Amplifi', logo: '/logos/organizations/amplifi.png' },
  { name: 'Mirza', logo: '/logos/organizations/mirza.png' },
];

export default function PartnersSlide() {
  return (
    <Slide footerText={FOOTER}>
      <SlideHeader>
        <SlideTitle>Who uses PolicyEngine?</SlideTitle>
      </SlideHeader>

      <div className="w-full flex-1 flex items-center mt-2">
        <div className="grid grid-cols-7 gap-x-6 gap-y-10 w-full px-4">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center"
              style={{ height: '60px' }}
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={org.smaller ? 70 : 100}
                height={55}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
