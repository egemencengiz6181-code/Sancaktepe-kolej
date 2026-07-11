import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function KayitUcretleriPage() {
  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kayıt</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Kayıt Ücretleri
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              2026–2027 akademik yılı eğitim ücretleri ve ödeme seçenekleri.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div {...fadeUp(0)}>
              
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>
                Ücret Bilgileri Güncelleniyor
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '2rem', maxWidth: '580px', margin: '0 auto 2rem' }}>
                2026–2027 akademik yılına ait eğitim ücretleri ve ödeme planları en kısa sürede bu sayfada yayımlanacaktır. Detaylı bilgi almak için Mali İşler birimimizle iletişime geçebilirsiniz.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginTop: '3rem' }} className="ucret-grid">
                {[
                  { title: 'Okul Öncesi', sub: 'Anaokulu ücret bilgisi' },
                  { title: 'İlkokul & Ortaokul', sub: 'Temel kademe ücret bilgisi' },
                  { title: 'Lise', sub: 'Anadolu Lisesi ücret bilgisi' },
                ].map((item) => (
                  <div key={item.title} style={{
                    background: 'var(--white)', borderRadius: '14px', padding: '2rem 1.5rem',
                    border: '1px solid var(--grey-light)', textAlign: 'center',
                    boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                  }}>
                    
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--grey)', lineHeight: 1.6 }}>{item.sub}</p>
                    <div style={{ marginTop: '1rem', padding: '0.6rem 1rem', background: 'var(--off-white)', borderRadius: '6px', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--grey)', textTransform: 'uppercase' }}>
                      Yakında
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} style={{ marginTop: '3.5rem' }}>
              <div style={{
                background: 'var(--white)', borderRadius: '12px', padding: '2rem 2.5rem',
                border: '1px solid var(--grey-light)', display: 'flex', alignItems: 'center',
                gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', marginBottom: '0.3rem' }}>Mali İşler İletişim</div>
                  <a href="tel:02166060833" style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none', letterSpacing: '0.03em', display: 'block' }}>
                    0216 606 0 833
                  </a>
                  <a href="tel:05016223135" style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none', letterSpacing: '0.03em', display: 'block' }}>
                    0501 622 31 35
                  </a>
                </div>
                <div style={{ width: '1px', height: '40px', background: 'var(--grey-light)' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', marginBottom: '0.3rem' }}>E-posta</div>
                  <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--red)', textDecoration: 'none' }}>
                    info@kolejsancaktepe.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .ucret-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
