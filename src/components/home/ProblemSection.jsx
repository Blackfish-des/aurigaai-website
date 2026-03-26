import SectionWrapper from '@/components/ui/SectionWrapper';
import { PROBLEM_STATS } from '@/data/content';

export default function ProblemSection() {
  return (
    <SectionWrapper background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
          The AI governance gap is real — and growing
        </h2>
        <p className="text-mid-grey text-lg max-w-2xl mx-auto">
          Australian organisations face mounting pressure from regulators,
          boards, and the public to demonstrate responsible AI use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROBLEM_STATS.map((item) => (
          <div
            key={item.stat}
            className="relative border border-light-grey rounded-xl p-8 overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-teal" />
            <p className="text-5xl font-black text-brand-navy mb-3">{item.stat}</p>
            <p className="text-gray-800 font-medium leading-snug mb-4">
              {item.headline}
            </p>
            <p className="text-sm text-mid-grey">{item.source}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
