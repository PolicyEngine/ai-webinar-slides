import { SlideshowConfig, SlideshowMetadata } from './types';
import { aiWebinarConfig } from '@/slideshows/ai-webinar/config';
import { abundanceDmvConfig } from '@/slideshows/abundance-dmv/config';

export const slideshows: SlideshowConfig[] = [
  aiWebinarConfig,
  abundanceDmvConfig,
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
