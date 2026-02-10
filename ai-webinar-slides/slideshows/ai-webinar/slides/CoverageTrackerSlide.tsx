import React from 'react';
import Slide from '@/components/Slide';

export default function CoverageTrackerSlide() {
  return (
    <Slide>
      <div className="w-full rounded-xl overflow-hidden border border-gray-200" style={{ height: 'calc(100vh - 180px)' }}>
        <iframe
          src="https://policyengine.github.io/policyengine-coverage-tracker/"
          className="w-full h-full border-0"
          title="PolicyEngine Coverage Tracker"
        />
      </div>
    </Slide>
  );
}
