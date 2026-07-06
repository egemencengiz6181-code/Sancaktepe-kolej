import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.9rem' }}>{children}</p>
);

const FEATURES = [
  { icon: '🚌', title: 'Profesyonel Araç Filosu', desc: 'Servis hizmetimiz, düzenli bakımı yapılan ve standartlara uygun araçlarla sağlanmaktadır. Tüm araçlar zorunlu trafik sigortası ve okul taşıtı belgelerine sahiptir.' },
  { icon: '🧭', title: 'Deneyimli Rehber Kadrosu', desc: 'Her araçta görev yapan deneyimli rehber personelimiz, öğrencilerin araç içi güvenliğini ve düzenini sağlar; güzergah boyunca öğrencileri takip eder.' },
  { icon: '📍', title: 'Güzergah Takip Sistemi', desc: 'Araçlarımız anlık konum takip sistemiyle donatılmıştır. Velilerimiz, çocuklarının servis konumunu uygulama aracılığıyla anlık olarak takip edebilir.' },
  { icon: '🛡️', title: 'Güvenlik Önceliği', desc: 'Tüm sürücülerimiz mesleki yeterlilik belgesi ve psikoteknik değerlendirme süreçlerinden geçmiştir. Öğrenci güvenliği her kararın merkezindedir.' },
];

export default function UlasimHizmetleriPage() {
  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kampüs</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Ulaşım Hizmetleri
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Kolej Sancaktepe servis hizmeti; güvenlik, konfor ve dakiklik ilkeleri doğrultusunda profesyonel bir anlayışla sunulmaktadır.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '6rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="ul-intro">
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">Servis Hizmeti</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Güvenli ve <span>Konforlu Ulaşım</span></h2>
              <P>Okulumuz, öğrencilerin okula güvenli ve zamanında ulaşabilmeleri için kapsamlı bir servis ağı sunmaktadır. Servis hizmetimiz, deneyimli sürücüler ve yetkin rehber personel eşliğinde, belirli güzergahlar üzerinden düzenli olarak işletilmektedir.</P>
              <P>Servis hizmetimizin içeriği, güzergahlar ve ücretlendirme hakkında detaylı bilgi almak için kayıt ofisimizle iletişime geçebilirsiniz.</P>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.3rem' }}>Telefon</p>
                  <a href="tel:02166060833" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--red)', fontWeight: 600, display: 'block' }}>0216 606 0 833</a>
                  <a href="tel:05016223135" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--red)', fontWeight: 600, display: 'block' }}>0501 622 31 35</a>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.3rem' }}>E-Posta</p>
                  <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--red)', fontWeight: 600 }}>info@kolejsancaktepe.com</a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80&auto=format"
                alt="Ulaşım"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 50px rgba(35,46,92,0.15)' }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0 7rem', background: 'var(--off-white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Özelliklerimiz</span>
            </div>
            <h2 className="section-title">Servis Hizmetinin <span>Temelleri</span></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="feat-grid">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.06)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '14px', padding: '2rem',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.04)',
                  display: 'flex', gap: '1.25rem',
                }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{f.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .ul-intro { grid-template-columns: 1fr !important; } .feat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
