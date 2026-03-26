import Button from '@/components/ui/Button';
import { CALENDLY_URL } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800 text-brand-teal text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-teal inline-block"></span>
            Australian AI Governance Consulting
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Steer AI with{' '}
            <span className="text-brand-teal">confidence.</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl">
            Carinai helps Australian organisations build AI governance frameworks
            that satisfy regulators, protect your reputation, and let your teams
            move fast — without breaking trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={CALENDLY_URL} variant="primary" size="lg">
              Book a free discovery call
            </Button>
            <Button href="#how-it-works" variant="outline-white" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
