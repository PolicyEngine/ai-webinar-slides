import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function TryItSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Try it yourself</SlideTitle>
        <p className="text-xl text-gray-600 mt-2">Open source and available today</p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 mt-4">
        <div>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500"></div>
              <div className="code-block-dot bg-yellow-500"></div>
              <div className="code-block-dot bg-green-500"></div>
              <span className="text-white/40 text-sm ml-2">terminal</span>
            </div>
            <div className="code-block-content">
              <pre className="text-sm">{`# Add the marketplace
/plugin marketplace add \\
  PolicyEngine/policyengine-claude

# Install the complete plugin
/plugin install \\
  complete@policyengine-claude

# Run the workflow
/encode-policy "Iowa TANF"`}</pre>
            </div>
          </div>

          <div className="mt-4 p-4 bg-pe-teal/5 border border-pe-teal/20 rounded-xl">
            <p className="text-pe-dark text-sm">
              The workflow guides you through each phase, checks quality gates, and fixes issues automatically. The final PR is ready for human review.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">The workflow produces</h3>
          <div className="code-block">
            <div className="code-block-header">
              <div className="code-block-dot bg-red-500"></div>
              <div className="code-block-dot bg-yellow-500"></div>
              <div className="code-block-dot bg-green-500"></div>
              <span className="text-white/40 text-sm ml-2">file tree</span>
            </div>
            <div className="code-block-content">
              <pre className="text-sm">{`policyengine-us/
  policyengine_us/
    parameters/gov/states/ia/
      dhs/tanf/
        income/
          earned_income_disregard.yaml
          ...
        payment_standard/
          fpg_rate.yaml
        resources/
          applicant_limit.yaml
    variables/gov/states/ia/
      dhs/tanf/
        eligibility/
          ia_tanf_eligible.py
        ia_tanf.py
  tests/
    policy/baseline/gov/states/ia/
      dhs/tanf/
        ia_tanf.yaml
        integration.yaml`}</pre>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
