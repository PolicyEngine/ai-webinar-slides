import { SlideshowConfig, SlideshowMetadata } from './types';
import { aiWebinarConfig } from '@/slideshows/ai-webinar/config';
import { abundanceDmvConfig } from '@/slideshows/abundance-dmv/config';
import { searchlightConfig } from '@/slideshows/searchlight/config';
import { searchlightHealthcareConfig } from '@/slideshows/searchlight-healthcare/config';
import { groundworkCollaborativeConfig } from '@/slideshows/groundwork-collaborative/config';

export const slideshows: SlideshowConfig[] = [
  aiWebinarConfig,
  abundanceDmvConfig,
  searchlightConfig,
  searchlightHealthcareConfig,
  groundworkCollaborativeConfig,
];

export function getSlideshowById(id: string): SlideshowConfig | undefined {
  return slideshows.find(s => s.id === id);
}

export function getAllSlideshowMetadata(): SlideshowMetadata[] {
  return slideshows.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    date: s.date,
    location: s.location,
    slideCount: s.slides.length,
  }));
}
