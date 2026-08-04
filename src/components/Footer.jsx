import { Link } from 'react-router-dom';

import { t } from '../i18n';
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
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1.2fr 1.2fr', gap: '2.5rem', marginBottom: '4rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <img
                src="/logo/kolej%20sancaktepe%20logo%20-%20yatay.png?v=2"
                alt={t("Kolej Sancaktepe")}
                style={{ height: '180px', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.5)', maxWidth: '300px', marginBottom: '2rem' }}>
              {t("Eğitimde başarı için yanınızdayız. Kaliteli eğitim anlayışı ve uzman kadromuzla öğrencilerin geleceğini inşa ediyoruz.")}
            </p>
            
            {/* Bağlantılarımız */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.2rem' }}>{t("Bağlantılarımız")}</h4>
              <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'nowrap' }}>
                {[
                  { src: '/logo/TED_png.png', alt: 'TED', href: 'https://ted.org.tr/' },
                  { src: '/logo/tedmem.png', alt: 'TEDMEM', href: 'https://tedmem.org/' },
                  { src: '/logo/ted%20üni%20logo.png', alt: 'TED Üniversitesi', href: 'https://www.tedu.edu.tr/' },
                  { src: '/logo/ap%20logo.png', alt: 'AP', href: 'https://www.collegeboard.org/' },
                  { src: '/logo/Global-Schools-Program-white.png', alt: 'Global Schools Program', href: 'https://www.globalschoolsprogram.org/' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={t(item.alt)}
                    style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
                  >
                    <img
                      src={item.src}
                      alt={t(item.alt)}
                      style={{ height: '48px', width: 'auto', objectFit: 'contain', opacity: 0.7, transition: 'opacity 0.3s, transform 0.3s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>{t("Sayfalar")}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} style={{ textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    <span style={{ color: 'var(--red)', fontSize: '0.6rem' }}>▸</span>
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Birimler */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>{t("Birimler")}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { href: '/birimler/olcme-degerlendirme', label: 'Ölçme Değerlendirme' },
                { href: '/birimler/pdr', label: 'Psikolojik Danışmanlık ve Rehberlik' },
                { href: '/birimler/sks', label: 'ODE Koordinatörlüğü' },
                { href: '/birimler/yabanci-dil', label: 'Yabancı Dil' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} style={{ textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    <span style={{ color: 'var(--red)', fontSize: '0.6rem' }}>▸</span>
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>{t("İletişim")}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>{t("Telefon")}</div>
                <a href="tel:02166060833" style={{ display: 'block', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.7)')}
                >0216 606 0 833</a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>{t("WhatsApp")}</div>
                <a
                  href="https://wa.me/905016223137?text=Merhaba%2C%20Kolej%20Sancaktepe%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#25D366')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.117 1.522 5.849L0 24l6.336-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.638-.487-5.172-1.341l-.37-.217-3.762.891.939-3.664-.241-.384A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  0501 622 31 37
                </a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>{t("E-Posta")}</div>
                <a href="mailto:info@kolejsancaktepe.com" style={{ display: 'block', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s', wordBreak: 'break-all' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >info@kolejsancaktepe.com</a>
                <a href="mailto:ik@kolejsancaktepe.com" style={{ display: 'block', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s', wordBreak: 'break-all', marginTop: '0.25rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >ik@kolejsancaktepe.com</a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>{t("Adres")}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                  {t("Eyüp Sultan Mah. Zulal Sk.")}<br />
                  {t("B Blok No:2/2/1")}<br />
                  {t("Sancaktepe / İstanbul")}
                </p>
              </div>
            </div>
          </div>

          {/* Map square */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>{t("Konum")}</h4>
            <a
              href="https://maps.google.com/?q=40.98249787796874,29.210358806835465"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none', position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '1/1' }}
            >
              <iframe
                title={t("Footer Harita")}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', pointerEvents: 'none', filter: 'saturate(0.65) contrast(1.1) brightness(0.88) hue-rotate(200deg)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11923.199156739287!2d29.210358806835465!3d40.98249787796874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf7926d7cdd5%3A0xd947e7d0b4da7b23!2s%C3%96zel%20Kolej%20Sancaktepe%20%7C%20TED%20-%20AD%20Okullar%C4%B1!5e0!3m2!1str!2str!4v1784301573741!5m2!1str!2str"
              />
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(13,21,48,0.75) 0%, rgba(13,21,48,0.15) 50%, transparent 100%)',
                display: 'flex', alignItems: 'flex-end', padding: '0.7rem',
                transition: 'background 0.3s',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                  {t("Yol Tarifi →")}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
            {t("© 2025 Kolej Sancaktepe TED-AD. Tüm hakları saklıdır.")}
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--red)' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginLeft: '0.25rem' }}>{t("TED-AD")}</span>
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
