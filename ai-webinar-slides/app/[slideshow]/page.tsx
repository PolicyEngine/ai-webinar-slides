import { getAllSlideshowMetadata, getSlideshowById } from '@/lib/slideshows';
import SlideshowViewer from '@/components/SlideshowViewer';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return getAllSlideshowMetadata().map(s => ({ slideshow: s.id }));
}

export default function SlideshowPage({ params }: { params: { slideshow: string } }) {
  const slideshow = getSlideshowById(params.slideshow);

  if (!slideshow) {
    redirect('/');
  }

  return (
    <SlideshowViewer slideCount={slideshow.slides.length} slideshowId={params.slideshow}>
      {slideshow.slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </SlideshowViewer>
  );
}
