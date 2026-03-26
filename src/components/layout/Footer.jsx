import Link from 'next/link';
import { NAV_LINKS } from '@/data/navigation';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';

const Wordmark = () => (
  <span className="text-2xl font-black text-white tracking-tight leading-none">
    Auriga <span className="text-brand-teal">AI</span>
  </span>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <Link href="/">
              <Wordmark />
            </Link>
            <p className="mt-4 text-sm text-blue-200 max-w-xs">
              Australian AI governance consulting. We help organisations steer AI
              with confidence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-white hover:text-brand-teal transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="text-sm text-white hover:text-brand-teal transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="pt-1">
                <span className="text-sm text-blue-200">
                  Based in Australia. Serving ANZ & beyond.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-300">
          <p>© {year} Auriga AI Pty Ltd. All rights reserved.</p>
          <p>ABN placeholder · ACN placeholder</p>
        </div>
      </div>
    </footer>
  );
}
