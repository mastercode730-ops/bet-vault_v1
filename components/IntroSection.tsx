const WHATSAPP_URL = `https://wa.me/918764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

export default function IntroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black" id="intro">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/30 rounded-full px-4 py-2 mb-5">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse flex-shrink-0" />
          <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">
            India&apos;s #1 Trusted Platform
          </span>
        </div>

        {/* H1 — fluid font, never overflows */}
        <h2
          className="font-black text-white w-full mb-5"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.6rem, 5vw, 3rem)',
            lineHeight: 1.2,
          }}
        >
          Play Smarter with{' '}
          <span className="gold-text">Secure Sports Betting, Live Casino & Instant Betting IDs</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
          Every ball bowled, every wicket taken, every six hit — cricket stirs something deep inside
          millions of fans across the country. But in 2026, just watching on TV isn&apos;t enough.
          You want to be part of the action and make it count. That&apos;s exactly why we built Bet Vault.
        </p>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
          Whether it&apos;s IPL, international series, or T20 leagues, a{' '}
          <strong className="text-yellow-400">cricket betting ID</strong>{' '}
          gives you instant access to real-time odds, live markets, and all the action from the comfort
          of your couch. Fast sign-up, secure access, and a team that&apos;s always there when you need them.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="get-id-cta"
          className="inline-flex items-center gap-2 gold-btn px-7 py-3.5 rounded-full text-sm sm:text-base font-black uppercase tracking-wider"
        >
          <WhatsAppIcon />
          Get Your Betting ID Instantly
        </a>
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
