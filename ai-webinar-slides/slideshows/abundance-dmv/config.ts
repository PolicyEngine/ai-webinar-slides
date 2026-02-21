import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import FourthOptionSlide from './slides/FourthOptionSlide';
import Microsim1Slide from './slides/Microsim1Slide';
import Microsim2Slide from './slides/Microsim2Slide';
import Microsim3Slide from './slides/Microsim3Slide';
import Microsim4Slide from './slides/Microsim4Slide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import PartnersSlide from './slides/PartnersSlide';
import DemoSlide from './slides/DemoSlide';
import ClaudeCodeSlide from './slides/ClaudeCodeSlide';
import FutureSlide from './slides/FutureSlide';
import EndSlide from './slides/EndSlide';

export const abundanceDmvConfig: SlideshowConfig = {
  id: 'abundance-dmv',
  title: 'Building state capacity through open-source policy simulation',
  description: 'Lightning talk on how PolicyEngine democratizes policy analysis',
  date: 'February 21, 2026',
  location: 'Logan Circle, DC',
  slides: [
    CoverSlide,        // 1. Intro
    ProblemSlide,      // 2. Three bad options
    FourthOptionSlide, // 3. What if AI + credible models? (kick off live demo)
    Microsim1Slide,    // 4. Start with a household
    Microsim2Slide,    // 5. Apply policies
    Microsim3Slide,    // 6. Add dynamics
    Microsim4Slide,    // 7. Scale to millions
    WhatIsPESlide,     // 8. What we build: policies, households, dynamics
    PartnersSlide,     // 9. Who uses it + gov adoption stories + logos
    DemoSlide,         // 10. App screenshots
    ClaudeCodeSlide,   // 11. Built for AI + check results cue
    FutureSlide,       // 12. Rules Foundation / full cycle
    EndSlide,          // 13. Thank you
  ],
};
