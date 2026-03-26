import Link from 'next/link';
import { CALENDLY_URL, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';

export default function ContactDetails() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Get in touch</h2>
        <p className="text-mid-grey leading-relaxed">
          The fastest way to get started is a 30-minute discovery call. We&apos;ll
          map your current AI landscape and tell you exactly what governance work
          needs to happen — no commitment required.
        </p>
      </div>

      <Link
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 rounded-xl bg-brand-navy text-white hover:bg-brand-teal transition-colors group"
      >
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold">Book a free discovery call</p>
          <p className="text-sm text-blue-200 group-hover:text-white/80">30 minutes · No obligation</p>
        </div>
      </Link>

      <div className="space-y-4">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-4 p-5 rounded-xl border border-light-grey hover:border-brand-teal transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-off-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal/10">
            <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-mid-grey font-medium">Email</p>
            <p className="text-brand-navy font-semibold">{CONTACT_EMAIL}</p>
          </div>
        </a>

        <a
          href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
          className="flex items-center gap-4 p-5 rounded-xl border border-light-grey hover:border-brand-teal transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-off-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal/10">
            <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-mid-grey font-medium">Phone</p>
            <p className="text-brand-navy font-semibold">{CONTACT_PHONE}</p>
          </div>
        </a>
      </div>

      <div className="p-5 rounded-xl bg-off-white border border-light-grey">
        <p className="text-sm text-mid-grey">
          <span className="font-semibold text-brand-navy">Based in Australia.</span>{' '}
          We work with organisations across ANZ and beyond. All engagements are
          conducted remotely unless otherwise agreed.
        </p>
      </div>
    </div>
  );
}
