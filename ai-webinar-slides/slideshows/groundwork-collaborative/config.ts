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

export const groundworkCollaborativeConfig: SlideshowConfig = {
  id: 'groundwork-collaborative',
  title: 'AI-powered policy simulation',
  description: 'Groundwork Collaborative presentation: open-source tax and health microsimulation',
  date: 'March 2026',
  location: '',
  slides: [
    CoverSlide,          // 1. Intro
    ProblemSlide,        // 2. Health policy modeling is gatekept
    FourthOptionSlide,   // 3. What if AI + credible models? (ACA demo question)
    Microsim1Slide,      // 4. Start with a household
    Microsim2Slide,      // 5. Apply policies
    Microsim3Slide,      // 6. Add dynamics
    Microsim4Slide,      // 7. Scale to millions
    WhatIsPESlide,       // 8. What we build
    CoverageSlide,       // 9. Comprehensive coverage
    PartnersSlide,       // 10. Who uses it
    DemoSlide,           // 11. App screenshots (winners/losers + ACA calculator)
    ClaudeCodeSlide,     // 12. The PolicyEngine plugin for Claude
    PluginWorkflowSlide, // 13. What can you ask? (healthcare questions woven in)
    FutureSlide,         // 14. AI enables a new paradigm of encoding
    EndSlide,            // 15. Thank you
  ],
};
