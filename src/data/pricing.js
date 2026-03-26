import { CALENDLY_URL } from '@/lib/constants';

export const TIERS = [
  {
    name: 'Foundation',
    setup: 3500,
    monthly: 750,
    highlight: false,
    features: [
      'AI Risk Register (up to 5 systems)',
      'Policy gap analysis against APS AI Policy',
      'Quarterly governance review',
      'Email support (48h response)',
    ],
    cta: { label: 'Get started', href: CALENDLY_URL },
  },
  {
    name: 'Practitioner',
    setup: 7500,
    monthly: 2000,
    highlight: true,
    features: [
      'AI Risk Register (unlimited systems)',
      'Full policy suite (Acceptable Use, Procurement, Incident Response)',
      'Regulatory change monitoring (EU AI Act, APS updates)',
      'Monthly governance review + steering committee support',
      'Priority support (4h response)',
    ],
    cta: { label: 'Get started', href: CALENDLY_URL },
  },
  {
    name: 'Enterprise',
    setup: 20000,
    monthly: 6000,
    highlight: false,
    features: [
      'Everything in Practitioner',
      'Bespoke AI governance framework',
      'Board-level reporting & advisory',
      'Staff training & uplift program',
      'Dedicated governance advisor',
      'SLA-backed support (2h response)',
    ],
    cta: { label: 'Contact us', href: '/contact' },
  },
];
