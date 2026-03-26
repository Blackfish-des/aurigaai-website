import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { TIERS } from '@/data/pricing';

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

export default function PricingSection() {
  return (
    <SectionWrapper background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
          Transparent, fixed-price retainers
        </h2>
        <p className="text-mid-grey text-lg max-w-2xl mx-auto">
          No surprise invoices. Choose the tier that matches your organisation's
          size and risk profile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl p-8 border flex flex-col ${
              tier.highlight
                ? 'ring-2 ring-brand-navy border-brand-navy shadow-xl'
                : 'border-light-grey shadow-sm'
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-brand-navy text-white text-xs font-bold tracking-wide uppercase">
                  Most popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-navy mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="text-4xl font-black text-brand-navy">
                  {formatCurrency(tier.setup)}
                </span>
                <span className="text-mid-grey text-sm">setup</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-bold text-brand-teal">
                  {formatCurrency(tier.monthly)}
                </span>
                <span className="text-mid-grey text-sm">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={tier.cta.href}
              {...(tier.cta.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={`block w-full text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
                tier.highlight
                  ? 'bg-brand-navy text-white hover:bg-brand-teal'
                  : 'bg-brand-teal text-white hover:bg-brand-teal-dark'
              }`}
            >
              {tier.cta.label}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-mid-grey mt-8">
        All prices in AUD, ex GST. Minimum 6-month retainer commitment.
      </p>
    </SectionWrapper>
  );
}
