'use client';

import { useState } from 'react';

const WHATSAPP_URL = `https://wa.me/918764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

const faqs = [
  {
    q: 'Is it legal for Indian users to get an online cricket betting ID?',
    a: 'Betting laws in India vary by state and can get a bit confusing. Many platforms operate under international licences, and millions of Indian users actively bet on cricket every day. We always recommend checking the specific rules in your state and betting responsibly.',
  },
  {
    q: 'How quickly will I receive my betting ID after signing up?',
    a: 'Usually within minutes. Once you message us on WhatsApp and share your details, our team gets your account set up right away. The whole process is built for speed.',
  },
  {
    q: 'Can I use my Bet Vault ID across multiple betting platforms?',
    a: 'Yes! Depending on your setup, your ID can give you access to multiple partner platforms — more markets, more odds, and more betting opportunities from a single point of contact.',
  },
  {
    q: 'Are my deposits and withdrawals safe with Bet Vault?',
    a: 'Absolutely. We partner only with platforms that use bank-level encryption and trusted payment gateways. Deposits are instant and withdrawals are processed quickly without unnecessary delays.',
  },
  {
    q: 'Which cricket tournaments can I bet on?',
    a: 'Pretty much everything — IPL, T20 World Cup, ODI series, Test matches, county cricket, The Ashes, and more. If there is a match happening somewhere in the world, chances are you can bet on it.',
  },
  {
    q: 'What exactly is Bet Vault and what does it do?',
    a: 'Bet Vault is India\'s go-to platform for getting a cricket betting ID quickly and safely. We handle the entire setup — from creating your account to activating your ID — so you can jump straight into betting without any headaches.',
  },
  {
    q: 'How do I create my Bet Vault account?',
    a: 'Just message us on WhatsApp! Share your name and a few basic details and we take care of the rest. No lengthy online forms, no verification delays. We send your login credentials directly on chat.',
  },
  {
    q: 'Why do I need a Bet Vault ID?',
    a: 'Your ID is your key to the platform. It lets you log in, place bets, track winnings, claim bonuses, and manage everything securely from one place.',
  },
  {
    q: 'How do I add money to my account?',
    a: 'Log in, head to the deposit section, pick your payment method (UPI, Net Banking, or wallet), enter the amount, and confirm. Money shows up almost instantly so you can start betting without delay.',
  },
  {
    q: 'How do withdrawals work?',
    a: 'Withdrawals go through the same banking channels — UPI, net banking, or your registered wallet. Once your account is verified, payouts are quick and smooth. We do not hold your winnings.',
  },
  {
    q: 'What if I forget my password?',
    a: 'Just message us on WhatsApp! We will verify your identity and help you reset your password or recover your account. It is usually sorted within minutes.',
  },
  {
    q: 'Is Bet Vault safe to use?',
    a: 'Yes, completely. We use encrypted connections, secure payment gateways, and strict data protection. Your personal information is never shared with third parties.',
  },
  {
    q: 'How do I reach the Bet Vault support team?',
    a: 'We are on WhatsApp 24/7. Whether you have a question, a problem, or need guidance, drop us a message and someone from our team will respond quickly. Real people helping real bettors.',
  },
  {
    q: 'Are there any rules I should know before I start?',
    a: 'Yes — you must be at least 18 years old to register. Only one account per person is allowed. All bets placed are final. Bet only what you can afford to lose and keep it fun.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      className="py-14 sm:py-20"
      style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #161616 50%, #0A0A0A 100%)' }}
      id="faq"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">Got Questions?</span>
          </div>
          <h2
            className="font-black text-white mb-3 w-full"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', lineHeight: 1.2 }}
          >
            Frequently Asked{' '}
            <span className="gold-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Honest, straightforward answers to the questions we get asked the most.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              id={`faq-item-${idx}`}
              className="faq-item rounded-xl overflow-hidden bg-[#111111]"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left focus:outline-none group"
                aria-expanded={openIdx === idx}
              >
                <span className="text-white font-semibold text-xs sm:text-sm leading-snug group-hover:text-yellow-400 transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-yellow-600/40 flex items-center justify-center text-yellow-400 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-45 bg-yellow-600/20' : ''
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <div className="h-px bg-yellow-600/20 mb-3" />
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center text-center gap-3">
          <p className="text-gray-400 text-sm">Still have a question? We are one message away.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="faq-cta"
            className="inline-flex items-center gap-2 whatsapp-btn px-6 py-3 rounded-full text-sm font-bold"
          >
            <WhatsAppIcon />
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
