import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import LandscapeSlide from './slides/LandscapeSlide';
import CapabilitiesSlide from './slides/CapabilitiesSlide';
import WorkSlide from './slides/WorkSlide';
import MarriageSlide from './slides/MarriageSlide';
import VisionSlide from './slides/VisionSlide';
import EndSlide from './slides/EndSlide';

export const searchlightHealthcareConfig: SlideshowConfig = {
  id: 'searchlight-healthcare',
  title: 'Healthcare policy simulation',
  description: 'Searchlight Institute healthcare-specific follow-up: open-source tax + health microsimulation',
  date: 'March 2026',
  location: '',
  slides: [
    CoverSlide,        // 1. Intro, Daphne only
    ProblemSlide,      // 2. The problem: health policy modeling is gatekept
    LandscapeSlide,    // 3. Landscape: fewer health microsims, all proprietary, none combine tax+health
    CapabilitiesSlide, // 4. What we cover + limitations
    WorkSlide,         // 5. ACA calc demo + CRFB partnership
    MarriageSlide,     // 6. Why tax and health must be modeled together
    VisionSlide,       // 7. Long-term vision
    EndSlide,          // 8. Thank you
  ],
};
