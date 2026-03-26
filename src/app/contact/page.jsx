import ContactDetails from '@/components/contact/ContactDetails';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Carinai. Book a free 30-minute discovery call or send us a message. Based in Australia, serving ANZ and beyond.',
};

export default function ContactPage() {
  return (
    <section className="bg-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-brand-navy tracking-tight">
            Let&apos;s talk governance
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
