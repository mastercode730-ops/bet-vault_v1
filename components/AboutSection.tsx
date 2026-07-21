import Image from 'next/image';

const WHATSAPP_URL = `https://wa.me/8764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

export default function AboutSection() {
  return (
    <section
      className="py-14 sm:py-20"
      style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #161616 50%, #0A0A0A 100%)' }}
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Text side ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/30 rounded-full px-4 py-2 mb-5">
              <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">About Bet Vault</span>
            </div>
            <h2
              className="font-black text-white mb-5 w-full"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', lineHeight: 1.2 }}
            >
              Built by Bettors,{' '}
              <span className="gold-text">for Bettors</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base max-w-lg">
              We started Bet Vault because we were frustrated with the same things you probably are —
              unreliable platforms, slow support, complicated sign-up, and withdrawals that take forever.
              So we built something better.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base max-w-lg">
              Bet Vault is not just another betting ID provider. We are a team of cricket lovers and
              tech enthusiasts who genuinely care about giving you the best possible experience.
            </p>
            <p className="text-gray-400 leading-relaxed mb-7 text-sm sm:text-base max-w-lg">
              Today, over 3 million bettors across India trust us with their IDs, deposits, and
              winnings. That trust means everything to us, and we work every day to earn it.
            </p>

            {/* Mini feature grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-lg mb-7">
              {[
                { icon: '🔐', title: 'Fully Encrypted', desc: 'Bank-level security' },
                { icon: '⚡', title: 'Lightning Fast', desc: 'ID in under 5 minutes' },
                { icon: '🤝', title: 'Always Honest', desc: 'No hidden fees, ever' },
                { icon: '🌍', title: 'Pan-India', desc: 'All states covered' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-yellow-600/5 border border-yellow-600/10"
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div className="text-left min-w-0">
                    <div className="text-white font-bold text-xs sm:text-sm leading-tight">{item.title}</div>
                    <div className="text-gray-500 text-xs leading-tight">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="about-cta"
              className="inline-flex items-center gap-2 gold-btn px-6 py-3 rounded-full font-bold text-sm"
            >
              Get Started Today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* ── Stats visual side ── */}
          <div className="w-full">
            <div
              className="rounded-2xl sm:rounded-3xl border border-yellow-600/20 p-5 sm:p-8"
              style={{ background: 'linear-gradient(135deg, #111111 0%, #1A1200 50%, #111111 100%)' }}
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                {[
                  { label: 'Founded', value: '2023' },
                  { label: 'Active Users', value: '3M+' },
                  { label: 'Avg. ID Setup', value: '< 5 min' },
                  { label: 'Support Hours', value: '24/7' },
                  { label: 'Payment Methods', value: '10+' },
                  { label: 'Sports Markets', value: '50+' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-xl bg-black/40 border border-yellow-600/10 min-h-[70px] sm:min-h-[80px]"
                  >
                    <div className="text-xl sm:text-2xl font-black gold-text">{stat.value}</div>
                    <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-3 sm:p-4 rounded-xl border border-green-500/20 bg-green-500/5 flex flex-col items-center text-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-green-400 text-xs sm:text-sm font-bold">Platform Status: Live</span>
                </div>
                <p className="text-gray-500 text-xs">All systems running. Ready for your first bet!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
