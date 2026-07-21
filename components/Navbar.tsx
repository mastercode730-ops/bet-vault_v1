'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const WHATSAPP_URL = `https://wa.me/8764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#footer' },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(212,175,55,0.15)]'
            : 'bg-black/90 backdrop-blur-sm'
        } border-b border-yellow-600/20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-2 flex-shrink-0 focus:outline-none"
              aria-label="Go to top"
            >
              <Image
                src="/logo.jpeg"
                alt="Bet Vault Logo"
                width={52}
                height={52}
                className="rounded-lg object-contain w-[46px] h-[46px] sm:w-[58px] sm:h-[58px]"
                priority
              />
              <div className="hidden sm:block">
                <div className="text-base font-black gold-text leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  BET VAULT
                </div>
                <div className="text-gray-500 text-[9px] tracking-widest">YOUR BET. OUR VAULT.</div>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 text-sm uppercase tracking-wider whitespace-nowrap focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA — WhatsApp only */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 whatsapp-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us Now
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-yellow-400 rounded-lg border border-yellow-600/30 hover:bg-yellow-600/10 transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-600/20 px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                className="w-full flex items-center gap-2 text-gray-300 hover:text-yellow-400 font-medium py-3 text-sm uppercase tracking-wider border-b border-gray-800/50 transition-colors last:border-0 focus:outline-none"
              >
                <span className="text-yellow-600 text-lg">›</span>
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 whatsapp-btn px-5 py-3 rounded-full text-sm font-bold mt-2 w-full"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us Now
            </a>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 whatsapp-btn pl-3 pr-4 py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xl animate-pulse-gold"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
        <span className="hidden sm:inline whitespace-nowrap">Get Your ID Now</span>
      </a>
    </>
  );
}

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
