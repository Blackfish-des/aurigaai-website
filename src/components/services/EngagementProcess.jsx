import SectionWrapper from '@/components/ui/SectionWrapper';
import { ENGAGEMENT_STEPS } from '@/data/content';
import Button from '@/components/ui/Button';
import { CALENDLY_URL } from '@/lib/constants';

export default function EngagementProcess() {
  return (
    <SectionWrapper background="navy">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Our engagement process
        </h2>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          From first conversation to embedded governance partner — here&apos;s
          how every Carinai engagement unfolds.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ENGAGEMENT_STEPS.map((item, i) => (
          <div key={item.step} className="relative">
            {/* Connector arrow on desktop */}
            {i < ENGAGEMENT_STEPS.length - 1 && (
              <div className="hidden lg:flex absolute top-8 left-full z-10 items-center justify-center w-6">
                <svg className="w-5 h-5 text-brand-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <div className="bg-white/10 rounded-xl p-6 h-full">
              <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-sm mb-4">
                {item.step}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href={CALENDLY_URL} variant="primary" size="lg">
          Start with a discovery call
        </Button>
      </div>
    </SectionWrapper>
  );
}
