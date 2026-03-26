'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_LINKS } from '@/data/navigation';
import { CALENDLY_URL } from '@/lib/constants';

const Wordmark = () => (
  <span className="text-2xl font-black text-brand-navy tracking-tight leading-none">
    Carin<span className="text-brand-teal">ai</span>
  </span>
);

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-light-grey shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <Wordmark />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-brand-teal'
                    : 'text-mid-grey hover:text-brand-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-5 py-2 rounded-lg bg-brand-teal text-white text-sm font-semibold hover:bg-brand-teal-dark transition-colors"
            >
              Book a call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-mid-grey hover:text-brand-navy hover:bg-light-grey transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-light-grey py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-brand-teal bg-off-white'
                    : 'text-mid-grey hover:text-brand-navy hover:bg-light-grey'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-5 py-2 rounded-lg bg-brand-teal text-white text-sm font-semibold hover:bg-brand-teal-dark transition-colors"
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
