import Image from 'next/image';

const WHATSAPP_URL = `https://wa.me/918764465110?text=${encodeURIComponent('Hi Bet Vault! Can I get more info on this?')}`;

const features = [
  { img: '/trusted_platform.png', title: '100% Trusted Platform', desc: 'Every transaction, every ID, and every account goes through strict security checks so you can bet without second thoughts.' },
  { img: '/users_milestone.png', title: '3 Million+ Happy Users', desc: 'Over 3 million bettors across India have made Bet Vault their go-to platform — and that number keeps growing.' },
  { img: '/instant_id.png', title: 'Instant ID Activation', desc: 'Once you reach out, your betting ID is set up and ready in minutes. Fast, smooth, and completely hassle-free.' },
  { img: '/support_247.png', title: '24/7 Expert Support', desc: 'Whether it\'s 2 PM or 2 AM, our team is always online. Ping us on WhatsApp and we\'ll sort it out right away.' },
  { img: '/secure_payments.png', title: 'Safe & Fast Payments', desc: 'UPI, Net Banking, all major wallets — with bank-level encryption. Deposits land instantly and withdrawals go through without drama.' },
  { img: '/bonus_offers.png', title: 'Big Welcome Bonuses', desc: 'New to Bet Vault? Get exclusive welcome bonuses that give your bankroll a solid head start from day one.' },
];

const stats = [
  { value: '3M+', label: 'Active Users' },
  { value: '< 5 Min', label: 'ID Activation' },
  { value: '24/7', label: 'Support' },
  { value: '100%', label: 'Secure' },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #161616 50%, #0A0A0A 100%)', padding: '64px 0' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: '999px',
            padding: '6px 16px',
            color: '#D4AF37',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Why Thousands Choose Us
          </span>
          <h2 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
            lineHeight: 1.2,
            color: '#fff',
            marginBottom: '12px',
          }}>
            Everything You Need,{' '}
            <span className="gold-text">Nothing You Don&apos;t</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            We built Bet Vault around what bettors actually want — speed, security, and a team that genuinely cares.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          marginBottom: '40px',
        }}>
          {features.map((f, i) => (
            <a
              key={i}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '28px 20px',
                borderRadius: '16px',
                textDecoration: 'none',
                gap: '14px',
              }}
            >
              {/* Image — fixed size, no animation that clips */}
              <div style={{ width: '72px', height: '72px', position: 'relative', flexShrink: 0 }}>
                <Image src={f.img} alt={f.title} fill style={{ objectFit: 'contain' }} sizes="72px" />
              </div>
              <h3 style={{ color: '#D4AF37', fontWeight: 700, fontSize: '15px', lineHeight: 1.3 }}>{f.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.65 }}>{f.desc}</p>
            </a>
          ))}
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}
          className="sm-stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 12px',
              borderRadius: '12px',
              border: '1px solid rgba(212,175,55,0.2)',
              background: 'rgba(212,175,55,0.05)',
              textAlign: 'center',
            }}>
              <span className="gold-text" style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 900, lineHeight: 1 }}>{s.value}</span>
              <span style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '6px' }}>{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
