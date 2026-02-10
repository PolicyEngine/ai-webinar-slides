'use client';

import { useState, useEffect, Children, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { assetPath } from '@/lib/assetPath';

interface SlideshowViewerProps {
  slideCount: number;
  children: React.ReactNode;
  slideshowId?: string;
}

function SlideshowViewerClient({ slideCount, children, slideshowId }: SlideshowViewerProps) {
  const searchParams = useSearchParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const childArray = Children.toArray(children);

  useEffect(() => {
    setMounted(true);
    const initialSlide = parseInt(searchParams.get('slide') || '0', 10);
    setCurrentSlide(Math.max(0, Math.min(initialSlide, slideCount - 1)));
    setIsFullscreen(!!document.fullscreenElement);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [searchParams, slideCount]);

  useEffect(() => {
    if (!slideshowId) return;
    const url = assetPath(`/${slideshowId}${currentSlide > 0 ? `?slide=${currentSlide}` : ''}`);
    window.history.replaceState(null, '', url);
  }, [currentSlide, slideshowId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slideCount - 1);
      } else if (e.key === 'f' || e.key === 'F11') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideCount]);

  const handleMainClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.pointer-events-auto')) return;
    setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1));
  };

  return (
    <main className="relative cursor-pointer" onClick={handleMainClick}>
      {mounted && childArray.map((child, index) => (
        <div
          key={index}
          style={{
            display: index === currentSlide ? 'block' : 'none',
          }}
        >
          {child}
        </div>
      ))}

      {!isFullscreen && (
        <div className="fixed bottom-0 left-0 right-0 h-20 z-[100] flex items-center justify-between px-8 pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span className="text-white/60 text-xs">
              Click or arrow keys &middot; F for fullscreen
            </span>
          </div>

          <div className="flex items-center gap-4 pointer-events-auto">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
              className="text-white hover:text-white/80 transition-colors text-2xl w-10 h-10 flex items-center justify-center"
              aria-label="Previous slide"
            >
              &larr;
            </button>

            <span className="text-base font-medium text-white min-w-[4rem] text-center">
              {currentSlide + 1} / {slideCount}
            </span>

            <button
              onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1))}
              className="text-white hover:text-white/80 transition-colors text-2xl w-10 h-10 flex items-center justify-center"
              aria-label="Next slide"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default function SlideshowViewer(props: SlideshowViewerProps) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SlideshowViewerClient {...props} />
    </Suspense>
  );
}
