import FoundingStory from '@/components/about/FoundingStory';
import OurApproach from '@/components/about/OurApproach';
import ValuesSection from '@/components/about/ValuesSection';

export const metadata = {
  title: 'About',
  description:
    'Learn about Carinai — an Australian AI governance consultancy built by practitioners, for practitioners. Our story, approach, and values.',
};

export default function AboutPage() {
  return (
    <>
      <FoundingStory />
      <OurApproach />
      <ValuesSection />
    </>
  );
}
