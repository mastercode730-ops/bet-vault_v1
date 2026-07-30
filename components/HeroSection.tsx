import Image from 'next/image';

const WHATSAPP_URL = `https://wa.me/918764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

export default function HeroSection() {
  return (
    <section className="pt-16 sm:pt-20 relative overflow-hidden bg-black" id="hero">
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

      <div className="relative w-full min-h-[500px] sm:min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_banner.png"
            alt="Get Your Cricket Betting ID"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Strong dark overlay to hide baked-in text and make our text readable */}
          <div className="absolute inset-0 bg-black/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center py-12">
          
          <h1 className="text-white font-black uppercase mb-8 leading-tight drop-shadow-2xl" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 4.5vw, 4rem)' }}>
            Get Your <span className="gold-text">Instant Cricket Betting ID</span>
            <br />
            <span className="text-white">— Start Winning Today</span>
          </h1>

          <div className="card-glow rounded-2xl p-6 sm:p-8 w-full max-w-4xl shadow-2xl mb-8">
            <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-5">
              Get Your Verified Bet Vault ID within Minutes.
            </h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm sm:text-base font-semibold">
              <div className="flex items-center gap-2"><span className="text-orange-500">⚡</span> <span className="text-yellow-400">Fast Approval</span></div>
              <div className="flex items-center gap-2"><span className="text-gray-300">🎧</span> <span className="text-yellow-400">24x7 Support</span></div>
              <div className="flex items-center gap-2"><span className="text-green-400">💸</span> <span className="text-yellow-400">Instant Deposit & Withdrawal</span></div>
              <div className="flex items-center gap-2"><span className="text-blue-500">🛡️</span> <span className="text-yellow-400">Trusted Platform</span></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn text-black font-black py-4 px-8 rounded-xl uppercase tracking-wider text-center flex items-center justify-center"
            >
              Get Betting ID
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white font-black py-4 px-8 rounded-xl uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
              WhatsApp Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
