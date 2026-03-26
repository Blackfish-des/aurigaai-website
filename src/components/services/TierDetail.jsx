import Link from 'next/link';

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(amount);
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function TierDetail({ tier, index }) {
  const isEven = index % 2 === 0;

  return (
    <section className={isEven ? 'bg-white' : 'bg-off-white'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tier info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-black text-brand-navy">{tier.name}</h2>
              {tier.highlight && (
                <span className="px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold tracking-wide uppercase">
                  Most popular
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-4 mb-2">
              <div>
                <span className="text-4xl font-black text-brand-navy">
                  {formatCurrency(tier.setup)}
                </span>
                <span className="text-mid-grey text-sm ml-1">setup</span>
              </div>
            </div>
            <div className="mb-8">
              <span className="text-2xl font-bold text-brand-teal">
                {formatCurrency(tier.monthly)}
              </span>
              <span className="text-mid-grey text-sm ml-1">/month retainer</span>
            </div>

            <Link
              href={tier.cta.href}
              {...(tier.cta.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-teal text-white font-semibold hover:bg-brand-teal-dark transition-colors"
            >
              {tier.cta.label}
            </Link>
          </div>

          {/* Features checklist */}
          <div className="bg-white rounded-2xl border border-light-grey p-8 shadow-sm">
            <h3 className="text-sm font-semibold text-mid-grey uppercase tracking-wider mb-5">
              What&apos;s included
            </h3>
            <ul className="space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
