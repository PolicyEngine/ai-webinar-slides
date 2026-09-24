import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import FourthOptionSlide from './slides/FourthOptionSlide';
import Microsim1Slide from './slides/Microsim1Slide';
import Microsim2Slide from './slides/Microsim2Slide';
import Microsim3Slide from './slides/Microsim3Slide';
import Microsim4Slide from './slides/Microsim4Slide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import CoverageSlide from './slides/CoverageSlide';
import PartnersSlide from './slides/PartnersSlide';
import DemoSlide from './slides/DemoSlide';
import ClaudeCodeSlide from './slides/ClaudeCodeSlide';
import PluginWorkflowSlide from './slides/PluginWorkflowSlide';
import FutureSlide from './slides/FutureSlide';
import EndSlide from './slides/EndSlide';

export const searchlightConfig: SlideshowConfig = {
  id: 'searchlight',
  title: 'AI-powered policy simulation',
  description: 'Searchlight Institute presentation on the PolicyEngine plugin',
  date: 'March 2026',
  location: '',
  slides: [
    CoverSlide,        // 1. Intro
    ProblemSlide,      // 2. Three bad options
    FourthOptionSlide, // 3. What if AI + credible models? (kick off live demo)
    Microsim1Slide,    // 4. Start with a household
    Microsim2Slide,    // 5. Apply policies
    Microsim3Slide,    // 6. Add dynamics
    Microsim4Slide,    // 7. Scale to millions
    WhatIsPESlide,     // 8. What we build: policies, households, dynamics
    CoverageSlide,     // 9. Comprehensive coverage — programs, states, districts
    PartnersSlide,     // 10. Who uses it + gov adoption stories + logos
    DemoSlide,         // 10. App screenshots
    ClaudeCodeSlide,      // 11. The PolicyEngine plugin for Claude
    PluginWorkflowSlide,  // 12. /encode-policy workflow
    FutureSlide,          // 13. Rules Foundation / full cycle
    EndSlide,             // 14. Thank you
  ],
};
