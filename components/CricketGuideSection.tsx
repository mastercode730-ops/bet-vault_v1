import Link from 'next/link';

const WHATSAPP_URL = `https://wa.me/918764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

export default function CricketGuideSection() {
  return (
    <section
      id="cricket-guide"
      className="py-16 sm:py-24 bg-[#080808] border-t border-yellow-600/20 text-gray-300 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(212,175,55,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(212,175,55,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">
              Knowledge Hub &amp; Match Guide
            </span>
          </div>
          <h2
            className="text-white font-black text-center mb-4 tracking-tight"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(1.6rem, 4.5vw, 2.75rem)',
              lineHeight: 1.2,
            }}
          >
            Bet Vault – Cricket, Sports &amp;{' '}
            <span className="gold-text">Match Information</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Welcome to Bet Vault, an online resource covering cricket, sports, match information, market terminology, odds, and the wider world of online sports platforms.
          </p>
        </div>

        {/* Introduction & Honest Disclosure Card */}
        <div className="card-glow rounded-2xl p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Cricket is followed passionately across India and around the world. From international Test matches and ODIs to fast-paced T20 competitions, every season brings new teams, players, tournaments, and matchups to follow.
              </p>
              <p>
                At Bet Vault, the focus is on making sports-related information easier to understand. Whether you are researching cricket schedules, learning how sports odds work, looking at different sports markets, or trying to understand terms such as live matches and Cricket ID, the aim is to provide straightforward information without making unrealistic promises.
              </p>
            </div>
            <div className="lg:col-span-4 bg-yellow-600/10 border border-yellow-600/30 rounded-xl p-5 text-xs sm:text-sm text-yellow-200/90 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-yellow-400 mb-2 uppercase tracking-wide text-xs">
                <span>⚠️</span> Realistic &amp; Transparent
              </div>
              Bet Vault does not guarantee match results, winnings, or profits. Sports outcomes are uncertain, and users should always understand the risks and laws applicable to them.
            </div>
          </div>
        </div>

        {/* Grid 1: What Is Bet Vault & Cricket at the Centre */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="card-glow rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-yellow-600/10 border border-yellow-600/20 flex items-center justify-center text-yellow-400 font-bold mb-4">
                01
              </div>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                What Is Bet Vault?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
                Bet Vault is an informational platform focused on cricket, sports, and online gaming topics. The goal is simple: explain these topics in normal language instead of filling pages with complicated terminology.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                {[
                  'Cricket match schedules',
                  'International cricket',
                  'T20, ODI & Test cricket',
                  'Sports market terminology',
                  'Sports odds calculation',
                  'Live & in-play markets',
                  'Cricket IDs overview',
                  'Sports platforms review',
                  'Match previews & context',
                  'Player & team insights',
                  'Responsible play tips',
                  'Account security advice',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-yellow-500 text-xs">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-glow rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-yellow-600/10 border border-yellow-600/20 flex items-center justify-center text-yellow-400 font-bold mb-4">
                02
              </div>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Cricket at the Centre
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Cricket remains one of the most widely followed sports in India. An international series can generate interest weeks before the first ball is bowled. Fans search for squads, venues, playing XIs, match timings, previous meetings, and player statistics.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                T20 cricket has added another dimension. With only 20 overs per side, matches can change quickly. A strong powerplay, an unexpected wicket, or a few expensive overs can completely alter the situation.
              </p>
              <p className="text-yellow-400/90 font-medium text-sm">
                That is why cricket-related information is not limited to the final score. The context around a match matters just as much.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Understanding Sports Markets & Odds */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Understanding Sports Markets &amp; <span className="gold-text">Odds</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Sports platforms involve predicting an outcome or event according to the rules of a particular platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111111] border border-yellow-600/20 rounded-xl p-6">
              <span className="text-2xl mb-3 block">📊</span>
              <h4 className="text-white font-bold text-lg mb-2">Cricket Markets</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                For cricket, users encounter diverse markets depending on the platform:
              </p>
              <ul className="text-xs sm:text-sm space-y-1.5 text-gray-300">
                <li>• Match results &amp; team performance</li>
                <li>• Innings totals &amp; session runs</li>
                <li>• Player performance &amp; milestones</li>
                <li>• Coin toss, wickets &amp; overs</li>
                <li>• Live match dynamic situations</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-yellow-600/10 text-[11px] text-gray-500">
                Market availability does not make outcomes predictable. Cricket carries high uncertainty.
              </div>
            </div>

            <div className="bg-[#111111] border border-yellow-600/20 rounded-xl p-6">
              <span className="text-2xl mb-3 block">🔢</span>
              <h4 className="text-white font-bold text-lg mb-2">What Are Sports Odds?</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                Odds represent the price associated with a particular outcome. Online sports platforms commonly present decimal odds (e.g., 2.00 vs 1.50).
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                The exact calculation of potential returns depends on the amount wagered and platform rules.
              </p>
              <div className="mt-4 pt-3 border-t border-yellow-600/10 text-xs font-semibold text-yellow-400">
                Odds are not predictions: A short price never guarantees an outcome; higher prices do not mean impossibility.
              </div>
            </div>

            <div className="bg-[#111111] border border-yellow-600/20 rounded-xl p-6">
              <span className="text-2xl mb-3 block">⚡</span>
              <h4 className="text-white font-bold text-lg mb-2">Live In-Play Markets</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                In-play markets run in real time. In cricket, scenarios pivot delivery by delivery:
              </p>
              <ul className="text-xs sm:text-sm space-y-1.5 text-gray-300">
                <li>• A wicket tilts match momentum</li>
                <li>• A six increases innings projections</li>
                <li>• A partnership alters expectations</li>
                <li>• Weather interruptions reset targets</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-yellow-600/10 text-[11px] text-red-400/90 font-medium">
                Live odds fluctuate continuously, significantly raising volatility and financial risk.
              </div>
            </div>
          </div>
        </div>

        {/* Section: Cricket ID Explained & Formats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7 card-glow rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Cricket ID <span className="gold-text">Explained</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              The term <strong>Cricket ID</strong> is commonly used by online sports platforms and providers. Depending on the service, a Cricket ID may refer to an account, username, or set of credentials used to access a particular platform. The exact meaning varies.
            </p>
            <p className="text-gray-300 font-semibold text-sm mb-3">
              Before using any service offering a Cricket ID, verify:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm mb-5 text-gray-300">
              <div className="p-2.5 rounded bg-black/40 border border-yellow-600/10">🔍 Which platform the ID belongs to</div>
              <div className="p-2.5 rounded bg-black/40 border border-yellow-600/10">📦 What features the account provides</div>
              <div className="p-2.5 rounded bg-black/40 border border-yellow-600/10">⚙️ How the account is operated &amp; managed</div>
              <div className="p-2.5 rounded bg-black/40 border border-yellow-600/10">🎧 What support channels are active</div>
              <div className="p-2.5 rounded bg-black/40 border border-yellow-600/10">📋 Account restrictions &amp; verification terms</div>
              <div className="p-2.5 rounded bg-black/40 border border-yellow-600/10">💳 How deposits &amp; withdrawals operate</div>
            </div>
            <p className="text-xs text-yellow-500/90 italic">
              A familiar name or professional-looking website does not by itself establish that a provider is reliable.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#111111] border border-yellow-600/20 rounded-xl p-5">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-1.5">
                <span>🏏</span> Test Cricket
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                The longest format of international cricket lasting up to five days. Places great emphasis on patience, technique, bowling spells, and adapting to changing conditions.
              </p>
            </div>
            <div className="bg-[#111111] border border-yellow-600/20 rounded-xl p-5">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-1.5">
                <span>🧢</span> One Day Internationals (ODIs)
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                50 overs per side. Balances innings building with rapid scoring strategies, serving as a tactical bridge between Test endurance and T20 speed.
              </p>
            </div>
            <div className="bg-[#111111] border border-yellow-600/20 rounded-xl p-5">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-1.5">
                <span>⚡</span> T20 Cricket Dynamics
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                20 overs per side. The opening 6 overs set the tempo, middle overs test wicket preservation against run rates, and death overs yield dramatic momentum swings.
              </p>
            </div>
          </div>
        </div>

        {/* Cricket Match Information Checklist & Calendar */}
        <div className="card-glow rounded-2xl p-6 sm:p-8 mb-14">
          <h3 className="text-white font-bold text-xl sm:text-2xl mb-2 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Cricket Match Information Checklist
          </h3>
          <p className="text-gray-400 text-center text-xs sm:text-sm max-w-2xl mx-auto mb-6">
            Before following or analyzing any fixture, verify key details rather than relying on rumors or assumptions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {[
              { label: 'Teams', desc: 'Confirm verified participating squads' },
              { label: 'Date & Time', desc: 'Verify local Indian Standard Time (IST)' },
              { label: 'Venue & Pitch', desc: 'Inspect ground history & weather' },
              { label: 'Playing XI', desc: 'Check confirmed team toss sheets' },
              { label: 'The Toss', desc: 'Impact of batting vs chasing under lights' },
              { label: 'Live Scoring', desc: 'Wickets, overs & current run rate' },
            ].map((item, idx) => (
              <div key={idx} className="bg-black/50 border border-yellow-600/10 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-sm mb-1">{item.label}</div>
                <div className="text-gray-400 text-[11px] leading-tight">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500">
            For official schedules, readers should always consult recognized cricket boards, tournament organizers, and authorized broadcasters.
          </p>
        </div>

        {/* Platform Due Diligence & Common Pitfalls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-[#111111] border border-yellow-600/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
              <span>🔎</span> How to Research a Sports Platform
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Online sports platforms differ in reliability, policies, and legality. Look beyond the flashy homepage before engaging:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex gap-2">
                <strong className="text-yellow-400 whitespace-nowrap">Clear Terms:</strong>
                <span className="text-gray-400">Rules associated with balances, gameplay, and accounts must be lucid.</span>
              </li>
              <li className="flex gap-2">
                <strong className="text-yellow-400 whitespace-nowrap">Customer Support:</strong>
                <span className="text-gray-400">Accessible human assistance for questions or technical issues.</span>
              </li>
              <li className="flex gap-2">
                <strong className="text-yellow-400 whitespace-nowrap">Privacy &amp; Safety:</strong>
                <span className="text-gray-400">Explicit disclosures on what personal data is handled and protected.</span>
              </li>
              <li className="flex gap-2">
                <strong className="text-yellow-400 whitespace-nowrap">Payment Clarification:</strong>
                <span className="text-gray-400">Defined limits, turnaround times, and transaction fees.</span>
              </li>
              <li className="flex gap-2">
                <strong className="text-yellow-400 whitespace-nowrap">Jurisdictional Legality:</strong>
                <span className="text-gray-400">Online gaming regulations vary widely by country and state.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#111111] border border-yellow-600/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
              <span>⚠️</span> Common Pitfalls &amp; Misleading Claims
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Be aware of frequent challenges and red flags encountered across unregulated web services:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div>
                <strong className="text-red-400">Payment Delays:</strong> Processing delays when attempting withdrawals depending on the gateway.
              </div>
              <div>
                <strong className="text-red-400">Unresponsive Help:</strong> Support that answers quickly during registration but becomes absent when issues arise.
              </div>
              <div>
                <strong className="text-red-400">Vague Promotion Terms:</strong> Hidden requirements or restrictions buried in unread promotional conditions.
              </div>
              <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/30 text-gray-300">
                <strong className="text-red-300 block mb-1">Beware of &ldquo;Guaranteed Winnings&rdquo;</strong>
                Websites claiming &ldquo;sure predictions&rdquo; or &ldquo;100% profit&rdquo; must be treated with extreme caution. No legitimate math or platform can guarantee cricket match outcomes.
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Core Principles */}
        <div className="card-glow rounded-2xl p-6 sm:p-8 mb-14 border border-yellow-600/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-1">
                Player Safety First
              </span>
              <h3 className="text-white font-black text-xl sm:text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Responsible Gaming Principles
              </h3>
            </div>
            <div className="text-xs bg-yellow-600/20 text-yellow-300 border border-yellow-600/40 px-3 py-1.5 rounded-full font-bold">
              18+ Only • Zero Guarantees
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Online sports gaming involves financial risk. There is no strategy that can guarantee a profit, and past results never determine future sporting outcomes. If online gaming is legal in your jurisdiction and you choose to participate, adopt these essential safeguards:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-black/60 p-4 rounded-xl border border-yellow-600/10">
              <div className="text-yellow-400 font-bold text-sm mb-1">💰 Set Spending Limits</div>
              <p className="text-gray-400 text-xs">Only play with money you can afford to lose without impacting essential commitments.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-xl border border-yellow-600/10">
              <div className="text-yellow-400 font-bold text-sm mb-1">🛑 Never Chase Losses</div>
              <p className="text-gray-400 text-xs">Attempting to recover previous losses by increasing stakes leads to compounding losses.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-xl border border-yellow-600/10">
              <div className="text-yellow-400 font-bold text-sm mb-1">🧘 Take Regular Breaks</div>
              <p className="text-gray-400 text-xs">Avoid making decisions when emotional, tired, or under external pressure.</p>
            </div>
            <div className="bg-black/60 p-4 rounded-xl border border-yellow-600/10">
              <div className="text-yellow-400 font-bold text-sm mb-1">⚖️ Comply With Law</div>
              <p className="text-gray-400 text-xs">Ensure you fulfill legal age requirements and local regulations in your territory.</p>
            </div>
          </div>

          <div className="text-xs text-gray-400 text-center bg-yellow-600/5 p-3 rounded-lg border border-yellow-600/10">
            If sports gaming stops feeling recreational and begins to affect finances, personal relationships, or daily life, seek assistance from recognized confidential counseling services.
          </div>
        </div>

        {/* Live Cricket Streaming & Account Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-[#111111] border border-yellow-600/20 rounded-2xl p-6 sm:p-8">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span>📺</span> Live Cricket &amp; Official Streaming
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
              Searching for a &ldquo;live cricket match&rdquo; yields many different types of sites: scores, text commentary, ball-by-ball statistics, or video streams.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
              These services are fundamentally different. A website claiming to show live cricket does not automatically hold official broadcasting rights.
            </p>
            <div className="text-xs text-yellow-400/90 font-medium">
              For reliable live video coverage, always rely on authorized national broadcasters and licensed streaming platforms.
            </div>
          </div>

          <div className="bg-[#111111] border border-yellow-600/20 rounded-2xl p-6 sm:p-8">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span>🔒</span> Account &amp; Cricket ID Safety
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
              Maintain stringent personal security across all online platforms. <strong>Never share:</strong>
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Passwords', 'One-Time Passwords (OTPs)', 'Recovery codes', 'Banking credentials', 'Sensitive ID cards'].map((item, idx) => (
                <span key={idx} className="bg-red-950/40 text-red-300 border border-red-500/30 text-xs px-2.5 py-1 rounded">
                  ✕ {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Exercise extreme caution with links sent through unsolicited chat groups or social media. Always double-check domain spellings in your browser before entering credentials.
            </p>
          </div>
        </div>

        {/* Comprehensive FAQ Section */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-white font-bold text-2xl sm:text-3xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Frequently Asked <span className="gold-text">Questions</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Answers to common queries regarding Bet Vault, cricket markets, odds, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                q: 'What is Bet Vault?',
                a: 'Bet Vault is an online information resource covering cricket, sports, market terminology, odds, match information, and online sports platforms.',
              },
              {
                q: 'Does Bet Vault guarantee winnings?',
                a: 'No. Bet Vault does not guarantee winnings, profits, or specific sporting outcomes under any circumstances.',
              },
              {
                q: 'What are sports odds?',
                a: 'Sports odds represent the market price associated with a particular outcome. Odds fluctuate dynamically depending on market activity and in-game developments.',
              },
              {
                q: 'What are live markets?',
                a: 'Live markets (in-play markets) refer to options that are available and update continuously while a sporting event is actively taking place.',
              },
              {
                q: 'Why do cricket odds change during a game?',
                a: 'Cricket odds shift because of wickets, boundary runs, required run rates, bowling spells, weather interruptions, and evolving game momentum.',
              },
              {
                q: 'What is a Cricket ID?',
                a: 'A Cricket ID generally refers to an account username or credentials associated with a sports platform. Its specific purpose depends on the respective service provider.',
              },
              {
                q: 'Does a Cricket ID provide official live streaming?',
                a: 'Not necessarily. A Cricket ID does not imply that a platform holds official broadcast rights. Check authorized national broadcasters for legal streams.',
              },
              {
                q: 'What should I check before using an online sports platform?',
                a: 'Review clear terms and conditions, accessible human customer support, privacy rules, payout speed, account security, and local legal jurisdiction.',
              },
              {
                q: 'Is online gaming legal?',
                a: 'Legality depends on your country, state, and specific activity. Legislation varies widely, and users must confirm laws applicable to their location.',
              },
              {
                q: 'Can sports gaming guarantee steady income?',
                a: 'No. Sports gaming involves substantial financial risk and should never be considered or treated as a dependable source of income.',
              },
              {
                q: 'What sports are commonly covered by sports platforms?',
                a: 'Depending on the service provider, platforms may feature cricket, football, basketball, tennis, table tennis, hockey, and casino table games.',
              },
              {
                q: 'Where can I check official cricket information?',
                a: 'Official international cricket boards (e.g., BCCI, ICC), tournament organizers, and licensed broadcasters are the only authoritative sources for verified fixtures and news.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#111111] border border-yellow-600/15 rounded-xl p-5 hover:border-yellow-600/40 transition-colors">
                <h4 className="text-white font-semibold text-sm sm:text-base mb-2 text-yellow-400/90">
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Disclaimer Notice Banner */}
        <div className="bg-[#0f0f0f] border border-yellow-600/30 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-wider text-xs mb-3">
            <span>🛡️</span> Important Disclaimer &amp; Legal Notice
          </div>
          <div className="text-gray-400 text-xs sm:text-sm space-y-3 leading-relaxed">
            <p>
              Bet Vault is an informational website. Content published on this website is provided for general informational and educational purposes only. It does not constitute financial, legal, or professional advice.
            </p>
            <p>
              Sports platforms involve financial risk. There is no guarantee of winning, profit, or a particular sporting outcome. Bet Vault does not guarantee the reliability, availability, security, or performance of any third-party exchange, Cricket ID provider, or sports platform.
            </p>
            <p>
              Laws relating to online gaming and sports platforms vary by country, state, and jurisdiction. Users are solely responsible for understanding and complying with the laws applicable to them. Users must participate only where permitted by law and where they meet the legal age requirement (18+).
            </p>
            <p className="text-gray-300 font-medium">
              Do not play with money you cannot afford to lose, and do not chase losses. Bet Vault does not promote illegal activities and does not claim that gaming is a guaranteed way to make money.
            </p>
          </div>
        </div>

        {/* Final CTA Strip */}
        <div className="text-center bg-gradient-to-r from-yellow-600/10 via-yellow-600/20 to-yellow-600/10 border border-yellow-600/30 rounded-2xl p-8">
          <h3 className="text-white font-black text-xl sm:text-2xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Stay Informed About Cricket &amp; Sports
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Sports are unpredictable, which is what makes following them interesting. Bet Vault brings together verified cricket information, market explanations, odds context, and responsible guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold"
            >
              Get Verified Support
            </a>
            <Link
              href="/#sports"
              className="bg-black/60 hover:bg-black text-gray-300 border border-yellow-600/30 px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors"
            >
              Explore Markets
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
