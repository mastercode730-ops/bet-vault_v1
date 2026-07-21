const WHATSAPP_URL = `https://wa.me/8764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

const testimonials = [
  {
    name: 'Rohit M.',
    location: 'Mumbai',
    rating: 5,
    text: "I have tried a few different platforms before, but Bet Vault is in a different league. ID setup was done in under 10 minutes, and the support team actually helps — not just copy-paste replies.",
    sport: '🏏 Cricket Bettor',
  },
  {
    name: 'Arjun K.',
    location: 'Chennai',
    rating: 5,
    text: "IPL 2026 season was my first time betting seriously, and I am glad I started with Bet Vault. No complications, no delays. My winnings hit my UPI within hours of requesting withdrawal.",
    sport: '🏏 IPL Enthusiast',
  },
  {
    name: 'Priya S.',
    location: 'Hyderabad',
    rating: 5,
    text: "Was not sure about trying online betting, but the team made it really comfortable to get started. They walked me through everything patiently. Very professional experience overall.",
    sport: '⚽ Football Bettor',
  },
  {
    name: 'Vikram D.',
    location: 'Bangalore',
    rating: 5,
    text: "Three months in and I have had zero issues. Fast deposits, fast withdrawals, and whenever I had a question the WhatsApp support sorted it out within minutes. Highly recommended.",
    sport: '🎰 Casino Player',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-14 sm:py-20 bg-black" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">
              Real People, Real Wins
            </span>
          </div>
          <h2
            className="font-black text-white mb-3 w-full"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', lineHeight: 1.2 }}
          >
            What Our Members{' '}
            <span className="gold-text">Are Saying</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Here is what some of our 3 million+ members have to say about their experience with Bet Vault.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card-glow rounded-2xl p-5 sm:p-6 flex flex-col gap-3"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base sm:text-lg leading-none">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic flex-1">
                &quot;{t.text}&quot;
              </p>

              {/* Author row */}
              <div className="flex items-center justify-between gap-2 flex-wrap pt-2 border-t border-yellow-600/10">
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.location}</div>
                </div>
                <span className="text-xs bg-yellow-600/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-600/20 whitespace-nowrap">
                  {t.sport}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
