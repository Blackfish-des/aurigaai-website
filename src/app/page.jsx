import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import PricingSection from '@/components/home/PricingSection';

export const metadata = {
  title: 'Carinai — AI Governance Consulting for Australian Organisations',
  description:
    'Carinai helps Australian organisations build AI governance frameworks that satisfy regulators, protect your reputation, and let teams move fast. Book a free discovery call.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PricingSection />
    </>
  );
}
