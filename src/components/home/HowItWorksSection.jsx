import SectionWrapper from '@/components/ui/SectionWrapper';
import { HOW_IT_WORKS } from '@/data/content';

const icons = {
  search: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
    </svg>
  ),
  blueprint: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414A1 1 0 0 1 19 9.414V19a2 2 0 0 1-2 2z" />
    </svg>
  ),
  rocket: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 19l-2 3H7l5-10 5 10h-3l-2-3zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.045 5.045C6.914 3.175 9.39 2 12 2s5.086 1.175 6.955 3.045c1.869 1.87 3.045 4.346 3.045 6.955H2c0-2.609 1.176-5.085 3.045-6.955z" />
    </svg>
  ),
};

export default function HowItWorksSection() {
  return (
    <SectionWrapper background="off-white" id="how-it-works">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
          How it works
        </h2>
        <p className="text-mid-grey text-lg max-w-2xl mx-auto">
          A structured engagement that goes from gap analysis to embedded
          governance — in weeks, not months.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Connecting line (desktop only) */}
        <div
          className="hidden md:block absolute top-10 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-0.5 bg-brand-teal/30"
          aria-hidden="true"
        />

        {HOW_IT_WORKS.map((step) => (
          <div key={step.step} className="relative flex flex-col items-center text-center">
            {/* Step number + icon bubble */}
            <div className="relative z-10 flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center text-brand-teal shadow-lg">
                {icons[step.iconName]}
              </div>
              <span className="mt-2 text-xs font-bold text-mid-grey uppercase tracking-widest">
                Step {step.step}
              </span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
            <p className="text-mid-grey leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
