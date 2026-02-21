import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import FourthOptionSlide from './slides/FourthOptionSlide';
import MicrosimSlide from './slides/MicrosimSlide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import PartnersSlide from './slides/PartnersSlide';
import GovAdoptionSlide from './slides/GovAdoptionSlide';
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
    FourthOptionSlide, // 3. What if AI + credible models?
    MicrosimSlide,     // 4. How microsim works (table build-up)
    WhatIsPESlide,     // 5. What we build: policies, households, dynamics
    PartnersSlide,     // 6. Who uses it (expanded logo wall)
    GovAdoptionSlide,  // 7. UK No 10, RI governor, US adoption
    DemoSlide,         // 8. App screenshots
    ClaudeCodeSlide,   // 9. Live AI demo prompt
    FutureSlide,       // 10. Rules Foundation / full cycle
    EndSlide,          // 11. Thank you
  ],
};
