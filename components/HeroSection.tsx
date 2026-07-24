import Image from 'next/image';

const WHATSAPP_URL = `https://wa.me/918764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

export default function HeroSection() {
  return (
    <section className="pt-16 sm:pt-20 relative overflow-hidden" id="hero">
      {/* Ticker Bar */}
      <div className="ticker-wrap">
        <div className="ticker-content text-black font-bold text-xs sm:text-sm">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-6 sm:mx-8">
              🏏 Cricket &bull; ⚽ Football &bull; 🎰 Casino &bull; 🏀 Basketball &bull; 🎯 IPL Betting &bull; 🔐 Secure Payments &bull; ⚡ Instant ID &bull; 💎 Bonuses &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Hero Banner — image already has branding text baked in, no overlay text needed */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full"
        aria-label="Get your betting ID now"
      >
        <div className="relative w-full" style={{ aspectRatio: '3 / 1', minHeight: '180px', maxHeight: '560px' }}>
          <Image
            src="/hero_banner.png"
            alt="Get Your Cricket Betting ID – Bet Vault India's Most Trusted Platform"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Subtle edge vignette only — no text overlay to avoid clashing */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50 pointer-events-none" />
        </div>
      </a>
    </section>
  );
}
