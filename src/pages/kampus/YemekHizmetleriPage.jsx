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

const CERTS = [
  'ISO 22000 Gıda Güvenliği Yönetimi',
  'TS ISO 10002 Müşteri Memnuniyeti Yönetimi',
  'ISO 9001 Kalite Yönetimi',
  'ISO 14001 Çevre Yönetimi',
  'OHSAS 18001 İş Sağlığı ve Güvenliği Yönetimi',
];

export default function YemekHizmetleriPage() {
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
              Yemek Hizmetleri
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Sağlıklı büyüme ve öğrenme için dengeli beslenme; Kolej Sancaktepe'de uzman diyetisyen ve gıda mühendisleri gözetiminde hazırlanan menülerle sağlanmaktadır.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '6rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="food-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80&auto=format"
                alt="Yemek Hizmetleri"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 50px rgba(35,46,92,0.15)' }}
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">Beslenme Politikası</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Sağlıklı ve <span>Dengeli Beslenme</span></h2>
              <P>Okulumuzda yemek hizmeti, uluslararası kalite standartlarına sahip, özel okul deneyimi kanıtlanmış tedarikçi firma tarafından sağlanmaktadır. Firma seçiminde ilgili kalite belgelerine sahip olmaları, yurt içi ve yurt dışındaki referansları titizlikle değerlendirilmektedir.</P>
              <P>Öğrenci menüleri; uzman gıda mühendisi ve diyetisyen gözetiminde, çocuğun büyüme ve gelişimini destekleyecek şekilde hazırlanmaktadır. Menülerde protein, karbonhidrat, vitamin ve mineral dengesi esas alınmaktadır.</P>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="food-detail-grid">
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div className="red-line" />
                <span className="section-tag">Servis</span>
              </div>
              <div style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem', border: '1px solid var(--grey-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Üretim ve Servis Modeli</h3>
                <P>Yemekler okulumuz bünyesindeki mutfakta üretilmekte, uzman personel tarafından servis edilmektedir. Okul öncesi, 1. ve 2. sınıf öğrencilerine masabaşı servis yapılırken 3. sınıftan itibaren self-servis uygulanmaktadır.</P>
                <P>Yemekhane, öğretmenler ve velilerden oluşan bir komisyon tarafından düzenli olarak denetlenmektedir.</P>
                <div style={{ marginTop: '1rem', borderTop: '1px solid var(--grey-light)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Öğün Planı</p>
                  {[
                    { kad: 'Okul Öncesi', ogun: 'Sabah kahvaltısı + Öğle yemeği + İkindi kahvaltısı' },
                    { kad: 'İlkokul, Ortaokul ve Lise', ogun: 'Sabah beslenmesi + Öğle yemeği + İkindi beslenmesi' },
                  ].map(o => (
                    <div key={o.kad} style={{ marginBottom: '0.6rem' }}>
                      <strong style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.05em', color: 'var(--primary)' }}>{o.kad}</strong>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', margin: 0 }}>{o.ogun}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.08)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div className="red-line" />
                <span className="section-tag">Kalite Standartları</span>
              </div>
              <div style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem', border: '1px solid var(--grey-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Uluslararası Sertifikalar</h3>
                <P>Hizmet sağlayıcımız, aşağıdaki uluslararası kalite standart belgelerine sahip olup tüm üretim ve servis süreçleri bu çerçevede yürütülmektedir.</P>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {CERTS.map(c => (
                    <li key={c} style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)',
                      padding: '0.55rem 0', borderBottom: '1px solid var(--grey-light)',
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                    }}>
                      <span style={{ color: 'var(--red)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .food-grid { grid-template-columns: 1fr !important; } .food-detail-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
