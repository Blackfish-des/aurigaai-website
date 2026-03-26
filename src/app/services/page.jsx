import ServicesHero from '@/components/services/ServicesHero';
import TierDetail from '@/components/services/TierDetail';
import EngagementProcess from '@/components/services/EngagementProcess';
import { TIERS } from '@/data/pricing';

export const metadata = {
  title: 'Services',
  description:
    'Three AI governance retainer tiers for Australian organisations. Foundation, Practitioner, and Enterprise — fixed-price, transparent, and built to scale with you.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {TIERS.map((tier, index) => (
        <TierDetail key={tier.name} tier={tier} index={index} />
      ))}
      <EngagementProcess />
    </>
  );
}
