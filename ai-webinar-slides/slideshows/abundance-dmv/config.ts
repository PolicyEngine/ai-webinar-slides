import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import GovAdoptionSlide from './slides/GovAdoptionSlide';
import DemoSlide from './slides/DemoSlide';
import ClaudeCodeSlide from './slides/ClaudeCodeSlide';
import EndSlide from './slides/EndSlide';

export const abundanceDmvConfig: SlideshowConfig = {
  id: 'abundance-dmv',
  title: 'Building state capacity through open-source policy simulation',
  description: 'Lightning talk on how PolicyEngine democratizes policy analysis',
  date: 'February 21, 2026',
  location: 'Logan Circle, DC',
  slides: [
    CoverSlide,
    ProblemSlide,
    WhatIsPESlide,
    GovAdoptionSlide,
    DemoSlide,
    ClaudeCodeSlide,
    EndSlide,
  ],
};
