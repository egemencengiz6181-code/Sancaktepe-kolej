import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Programlar', href: '/programlar' },
  { label: 'Sınıflar', href: '/siniflar' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary)',
      borderTop: '4px solid var(--red)',
      padding: '5rem 0 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1.2fr 1.2fr', gap: '3rem', marginBottom: '4rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <img
                src="/logo/kolej%20sancaktepe%20logo%20-%20yatay.png"
                alt="Kolej Sancaktepe"
                style={{ height: '120px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.5)', maxWidth: '300px' }}>
              Eğitimde başarı için yanınızdayız. Kaliteli eğitim anlayışı ve uzman kadromuzla öğrencilerin geleceğini inşa ediyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>Sayfalar</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} style={{ textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    <span style={{ color: 'var(--red)', fontSize: '0.6rem' }}>▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>İletişim</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>Telefon</div>
                <a href="tel:02166060833" style={{ display: 'block', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.25rem', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.7)')}
                >0216 606 0 833</a>
                <a href="tel:05016223135" style={{ display: 'block', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.7)')}
                >0501 622 31 35</a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>Adres</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                  Eyüp Sultan Mah. Zulal Sk.<br />
                  B Blok No:2/2/1<br />
                  Sancaktepe / İstanbul
                </p>
              </div>
            </div>
          </div>

          {/* Map square */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>Konum</h4>
            <a
              href="https://maps.google.com/?q=41.003,29.232"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none', position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '1/1' }}
            >
              <iframe
                title="Footer Harita"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', pointerEvents: 'none', filter: 'saturate(0.5) brightness(0.75) hue-rotate(195deg)' }}
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=29.222%2C40.998%2C29.242%2C41.008&layer=mapnik&marker=41.003%2C29.232"
              />
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(13,21,48,0.75) 0%, rgba(13,21,48,0.15) 50%, transparent 100%)',
                display: 'flex', alignItems: 'flex-end', padding: '0.7rem',
                transition: 'background 0.3s',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                  📍 Yol Tarifi →
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2025 Kolej Sancaktepe TED-AD. Tüm hakları saklıdır.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--red)' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginLeft: '0.25rem' }}>TED-AD</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
