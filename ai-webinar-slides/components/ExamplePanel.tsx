'use client';

import { useState } from 'react';

interface ExamplePanelProps {
  step: number;
}

type TabType = 'parameters' | 'variables' | 'tests';

const parameterSteps = [
  {
    title: "parameter.yaml",
    status: "error",
    statusLabel: "wrong",
    code: `grant_amount: 1333
age_threshold: 18
older_age_threshold: 19
resource_limit: 1000`,
    issues: [
      { type: 'error', text: '$1333 hard-coded, no dates' },
      { type: 'error', text: 'No official reference' },
      { type: 'error', text: 'All parameters in one file' },
    ]
  },
  {
    title: "grant_standard.yaml",
    status: "warning",
    statusLabel: "partial",
    code: `description: NH TANF grant standard

1:
  2025-07-01: 773

metadata:
  unit: currency-USD`,
    issues: [
      { type: 'success', text: 'Has date-based values' },
      { type: 'warning', text: 'Reference missing' },
      { type: 'error', text: 'Only 1 family size' },
    ]
  },
  {
    title: "grant_standard.yaml",
    status: "warning",
    statusLabel: "partial",
    code: `description: NH TANF grant standard
1:
  2025-07-01: 773
2:
  2025-07-01: 1058
# ... all sizes covered
metadata:
  unit: currency-USD
  period: month
  reference:
    - title: RSA 167:77
      href: https://gc.nh.gov/rsa/html/XII/167/167-77.htm`,
    issues: [
      { type: 'success', text: 'Reference added from docs' },
      { type: 'success', text: 'Period added' },
      { type: 'warning', text: 'Missing label' },
      { type: 'warning', text: 'Uses calculated values from policy manual not the legal code structure' },
    ]
  },
  {
    title: "rate.yaml",
    status: "success",
    statusLabel: "expanded",
    code: `description: New Hampshire uses this multiplier of the federal poverty guideline for the payment standard under the Financial Assistance to Needy Families program.

values:
  2017-07-01: 0.6

metadata:
  unit: /1
  period: month
  label: New Hampshire FANF payment standard FPG rate
  reference:
    - title: RSA 167:77-g - Adjustment of TANF Financial Assistance
      href: https://gc.nh.gov/rsa/html/xii/167/167-77-g.htm`,
    issues: [
      { type: 'success', text: 'Correct metadata section' },
      { type: 'success', text: 'Dates align with legal reference' },
      { type: 'success', text: 'Correct dependencies' },
      { type: 'success', text: 'Derives value from primary source not policy manual' },
    ]
  },
  {
    title: "rate.yaml",
    status: "success",
    statusLabel: "structured",
    code: `description: New Hampshire uses this multiplier of the federal poverty guideline for the payment standard under the Financial Assistance to Needy Families program.

values:
  2017-07-01: 0.6

metadata:
  unit: /1
  period: month
  label: New Hampshire FANF payment standard FPG rate
  reference:
    - title: RSA 167:77-g - Adjustment of TANF Financial Assistance
      href: https://gc.nh.gov/rsa/html/xii/167/167-77-g.htm`,
    issues: [
      { type: 'success', text: 'Correct metadata section' },
      { type: 'success', text: 'Dates align with legal reference' },
      { type: 'success', text: 'Correct dependencies' },
      { type: 'success', text: 'Derives value from primary source not policy manual' },
    ]
  },
  {
    title: "nh/dhhs/tanf/",
    status: "success",
    statusLabel: "complete",
    code: `nh/dhhs/tanf/
├─ income/
│  ├─ child_care_deduction/
│  │  ├─ full_time_threshold.yaml
│  │  ├─ full_time.yaml
│  │  └─ part_time.yaml
│  └─ earned_income_disregard/
│     ├─ applicant_rate.yaml
│     └─ recipient_rate.yaml
├─ payment_standard/
│  └─ fpg_rate.yaml
└─ resources/
   ├─ applicant_limit.yaml
   └─ recipient_limit.yaml`,
    issues: [
      { type: 'success', text: '11 parameter files' },
      { type: 'success', text: 'All references linked' },
    ]
  },
];

const variableSteps = [
  {
    title: "nh_tanf_eligible.py",
    status: "error",
    statusLabel: "wrong",
    code: `def formula(person, period):
    income = person("income", period)
    return income < 783
    # Hard-coded! Wrong threshold!
    # Wrong entity (person vs unit)`,
    issues: [
      { type: 'error', text: '$783 ≠ actual threshold' },
      { type: 'error', text: 'Wrong entity type' },
    ]
  },
  {
    title: "nh_income_eligible.py",
    status: "warning",
    statusLabel: "partial",
    code: `class nh_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR

    def formula(spm_unit, period, params):
        p = params(period).gov.states.nh.dhhs.tanf
        return spm_unit("income", period) < p.grant_standard`,
    issues: [
      { type: 'success', text: 'Proper Variable class' },
      { type: 'success', text: 'Correct entity type' },
      { type: 'error', text: 'definition period matters' },
    ]
  },
  {
    title: "nh_tanf_eligible.py",
    status: "warning",
    statusLabel: "flagged",
    code: `class nh_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR
    defined_for = StateCode.NH

    def formula(spm_unit, period):
        income_eligible = spm_unit(
            "nh_tanf_income_eligible", period)
        return income_eligible`,
    issues: [
      { type: 'success', text: 'Added defined_for' },
      { type: 'warning', text: 'Test mismatch detected' },
    ]
  },
  {
    title: "nh_tanf_eligible.py",
    status: "success",
    statusLabel: "fixed",
    code: `class nh_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR
    defined_for = StateCode.NH

    def formula(spm_unit, period, p):
        demographic = spm_unit(
            "is_demographic_tanf_eligible",
            period)
        income = spm_unit(
            "nh_tanf_income_eligible",
            period)
        return demographic & income`,
    issues: [
      { type: 'success', text: 'Uses existing variables' },
      { type: 'success', text: 'Both eligibility checks' },
      { type: 'error', text: 'Inconsistent metadata format' },
    ]
  },
  {
    title: "nh_tanf_eligible.py",
    status: "success",
    statusLabel: "documented",
    code: `class nh_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    label = "NH TANF eligible"
    definition_period = YEAR
    defined_for = StateCode.NH
    reference = "https://gc.nh.gov/rsa/html/xii/167/167-77.htm"

    def formula(spm_unit, period, p):
        demographic = spm_unit("is_demographic_tanf_eligible", period)
        income = spm_unit("nh_tanf_income_eligible", period)
        return demographic & income`,
    issues: [
      { type: 'success', text: 'Consistent metadata format' },
      { type: 'success', text: 'Follows variable-patterns' },
    ]
  },
  {
    title: "nh/dhhs/tanf/",
    status: "success",
    statusLabel: "complete",
    code: `nh/dhhs/tanf/
├─ eligibility/
│  ├─ nh_tanf_eligible.py
│  ├─ nh_tanf_income_eligible.py
│  └─ nh_tanf_resources_eligible.py
└─ income/
   ├─ nh_tanf_child_care_deduction.py
   ├─ nh_tanf_countable_earned_income.py
   ├─ nh_tanf_countable_income.py
   └─ nh_tanf_payment_standard.py
nh_tanf.py`,
    issues: [
      { type: 'success', text: '8 variable files' },
      { type: 'success', text: 'All edge cases tested' },
    ]
  },
];

const testSteps = [
  {
    title: "test_nh_tanf.yaml",
    status: "error",
    statusLabel: "missing",
    code: `# No tests generated
#
# "Tests? What tests?"
#   - Single prompt, 2025`,
    issues: [
      { type: 'error', text: 'No tests at all' },
      { type: 'error', text: "Can't verify correctness" },
    ]
  },
  {
    title: "test_nh_tanf.yaml",
    status: "warning",
    statusLabel: "circular",
    code: `- name: Basic eligibility
  period: 2025
  input:
    income: 700
  output:
    nh_tanf_eligible: true
    # Matches the buggy $773 check!`,
    issues: [
      { type: 'warning', text: 'Test derived from implementation not legal references' },
      { type: 'error', text: 'Confirms bug, not regs' },
    ]
  },
  {
    title: "test_nh_tanf.yaml",
    status: "success",
    statusLabel: "independent",
    code: `- name: Income eligible but resource
    ineligible, ineligible for TANF.
  period: 2025
  input:
    state_code: NH
    nh_tanf_income_eligible: true
    nh_tanf_resource_eligible: false
  output:
    nh_tanf_eligible: false`,
    issues: [
      { type: 'success', text: 'Based on regulations' },
      { type: 'success', text: 'Independent of rules implementation' },
      { type: 'error', text: 'Missing edge case testing' },
    ]
  },
  {
    title: "test_nh_tanf.yaml",
    status: "success",
    statusLabel: "expanded",
    code: `- name: Demographic but not income
  period: 2023
  input:
    is_demographic_tanf_eligible: true
    nh_tanf_income_eligible: false
  output:
    nh_tanf_eligible: false

- name: Income but not demographic
  # ... more edge cases`,
    issues: [
      { type: 'success', text: 'Edge cases added' },
      { type: 'success', text: 'Counterfactual checks' },
    ]
  },
  {
    title: "test_nh_tanf_integration.yaml",
    status: "success",
    statusLabel: "integration",
    code: `- name: Full benefit calculation
  period: 2023
  input:
    state_code: NH
    people:
      parent:
        age: 30
      child:
        age: 5
    spm_units:
      unit:
        members: [parent, child]
  output:
    nh_tanf: 1_058`,
    issues: [
      { type: 'success', text: 'End-to-end test' },
      { type: 'success', text: 'Realistic household' },
    ]
  },
  {
    title: "dhhs/tanf/",
    status: "success",
    statusLabel: "complete",
    code: `dhhs/tanf/
├─ integration.yaml
├─ nh_tanf_child_care_deduction.yaml
├─ nh_tanf_countable_earned_income.yaml
├─ nh_tanf_eligible.yaml
├─ nh_tanf_income_eligible.yaml
├─ nh_tanf_payment_standard.yaml
├─ nh_tanf_resources_eligible.yaml
└─ nh_tanf.yaml`,
    issues: [
      { type: 'success', text: '65 test cases' },
      { type: 'success', text: 'CI passing' },
    ]
  },
];

const tabs: { key: TabType; label: string; icon: string }[] = [
  { key: 'parameters', label: 'Parameters', icon: '⚙️' },
  { key: 'variables', label: 'Variables', icon: '📄' },
  { key: 'tests', label: 'Tests', icon: '🧪' },
];

const getStepData = (tab: TabType, step: number) => {
  switch (tab) {
    case 'parameters': return parameterSteps[step] || parameterSteps[0];
    case 'variables': return variableSteps[step] || variableSteps[0];
    case 'tests': return testSteps[step] || testSteps[0];
  }
};

export default function ExamplePanel({ step }: ExamplePanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('parameters');
  const [expanded, setExpanded] = useState(false);
  const data = getStepData(activeTab, step);
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  // Collapsed: compact trigger bar
  if (!expanded) {
    return (
      <button
        onClick={(e) => { e.stopPropagation(); setExpanded(true); }}
        className="example-panel w-full cursor-pointer mb-4"
        style={{ border: '2px solid var(--accent)' }}
      >
        <div className="example-header">
          <span className="example-title">New Hampshire TANF</span>
          <span className="example-badge">Show code ▼</span>
        </div>
      </button>
    );
  }

  // Expanded: overlay the right-side text
  return (
    <div className="absolute inset-x-0 top-0 z-40 flex flex-col max-h-full" onClick={stopPropagation}>
      <div className="example-panel h-full flex flex-col">
        {/* Header */}
        <div className="example-header">
          <span className="example-title">New Hampshire TANF</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="example-badge">Iteration {step + 1}</span>
            <button
              onClick={() => setExpanded(false)}
              className="example-badge"
              style={{ background: 'var(--text-mid)', cursor: 'pointer', border: 'none' }}
            >
              Hide ▲
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="example-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`example-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="example-body" style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
          {/* File header */}
          <div className="example-section">
            <div className="example-file">
              <span className="example-file-icon">
                {activeTab === 'parameters' ? '⚙️' : activeTab === 'variables' ? '📄' : '🧪'}
              </span>
              <span className="example-file-name">{data.title}</span>
              <span className={`example-file-status ${data.status}`}>{data.statusLabel}</span>
            </div>
          </div>

          {/* Code block */}
          <div className="example-section" style={{ flex: 1 }}>
            <pre className="example-code" style={{ height: '100%' }}>{data.code}</pre>
          </div>

          {/* Status indicators */}
          <div className="example-section">
            <div className="example-section-title">Status</div>
            <div className="example-output">
              {data.issues.map((issue, i) => (
                <div key={i} className={`example-output-line ${issue.type}`}>
                  <span className="icon">
                    {issue.type === 'success' ? '✓' : issue.type === 'error' ? '✗' : '⚠'}
                  </span>
                  <span>{issue.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
