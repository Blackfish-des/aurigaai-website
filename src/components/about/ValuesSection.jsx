import SectionWrapper from '@/components/ui/SectionWrapper';
import { VALUES } from '@/data/content';
import Button from '@/components/ui/Button';
import { CALENDLY_URL } from '@/lib/constants';

export default function ValuesSection() {
  return (
    <SectionWrapper background="off-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
          What we stand for
        </h2>
        <p className="text-mid-grey text-lg max-w-2xl mx-auto">
          The values that shape every conversation, proposal, and deliverable we produce.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        {VALUES.map((value, i) => (
          <div
            key={value.title}
            className="relative rounded-2xl bg-brand-navy text-white p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none select-none">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
            <p className="text-blue-200 leading-relaxed text-sm">{value.body}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button href={CALENDLY_URL} variant="primary" size="lg">
          Book a free discovery call
        </Button>
      </div>
    </SectionWrapper>
  );
}
