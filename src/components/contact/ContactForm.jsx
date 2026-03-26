'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/PLACEHOLDER', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-light-grey shadow-sm p-8">
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Send us a message</h2>

      {status === 'success' ? (
        <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
          <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-green-800 font-semibold">Message sent!</p>
          <p className="text-green-700 text-sm mt-1">We&apos;ll be in touch within one business day.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-brand-teal">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                className="w-full px-4 py-2.5 border border-light-grey rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Corp"
                className="w-full px-4 py-2.5 border border-light-grey rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-brand-teal">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              className="w-full px-4 py-2.5 border border-light-grey rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-brand-teal">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your AI governance needs…"
              className="w-full px-4 py-2.5 border border-light-grey rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-600 text-sm">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3 px-6 rounded-lg bg-brand-teal text-white font-semibold hover:bg-brand-teal-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  );
}
