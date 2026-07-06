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

const RISK_GROUPS = [
  {
    icon: '⚠️',
    title: 'Kaza ve Yaralanma Riskleri',
    desc: 'Öğrencilerin günlük hayatta maruz kalabilecekleri kaza ve yaralanma risklerini en aza indirmek için yaşam alanları güvenlik esaslarına uygun olarak düzenlenmiş, öğrencilerin güvenliğine uygun materyaller seçilmiştir.',
  },
  {
    icon: '🔒',
    title: 'Dış Riskler',
    desc: 'Okulumuz güvenlik hizmeti, İçişleri Bakanlığı tarafından yetkilendirilmiş bir güvenlik firması tarafından sağlanmaktadır. 18 güvenlik personeli 8/16 vardiya sistemiyle 24 saat nöbet tutmaktadır.',
  },
  {
    icon: '🌍',
    title: 'Doğal Riskler',
    desc: 'Deprem başta olmak üzere doğal afetlere karşı 6331 Sayılı İş Sağlığı ve Güvenliği Kanunu çerçevesinde öğrenciler, öğretmenler ve tüm çalışanlar için haberli/habersiz tatbikatlar ve bilinçlendirme programları düzenlenmektedir.',
  },
];

export default function GuvenlikHizmetleriPage() {
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
              Güvenlik Hizmetleri
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'de öğrencilerin güvenliği en yüksek önceliğimizdir. Kapsamlı güvenlik protokolleri ve 24 saat güvenlik hizmeti ile güvenli bir öğrenme ortamı sağlanmaktadır.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Özet istatistikler */}
      <section style={{ padding: '3rem 0', background: 'var(--primary)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }} className="guvs-grid">
            {[
              { icon: '👮', val: '18', label: 'Güvenlik Personeli' },
              { icon: '📹', val: '24/7', label: 'Kamera Gözetimi' },
              { icon: '🔄', val: '8/16', label: 'Vardiya Sistemi' },
              { icon: '🚨', val: '112', label: 'Acil Destek Hattı' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Grupları */}
      <section style={{ padding: '6rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Risk Yönetimi</span>
            </div>
            <h2 className="section-title">Güvenlik <span>Yaklaşımımız</span></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }} className="risk-grid">
            {RISK_GROUPS.map((r, i) => (
              <motion.div key={r.title} {...fadeUp(i * 0.07)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '16px', padding: '2rem',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{r.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{r.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.1)}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
              borderRadius: '16px', padding: '2.5rem 3rem', color: '#fff',
            }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
                7/24 Gözetim ve Denetim
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, marginBottom: '1rem' }}>
                Okul koridorları, girişler ve bahçe alanı kesintisiz kamera sistemiyle gözetim altındadır. Ders dışı saatlerde okul içinde ve bahçede nöbetçi öğretmenler görev almaktadır. Hafif yaralanmalarda okul sağlık ekibi hızla müdahale eder ve veliler derhal bilgilendirilir.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85 }}>
                Deprem ve afet tatbikatları yılda birden fazla ve habersiz gerçekleştirilmektedir. Sertifikalı ilkyardım eğitimi almış çalışan sayımız yasal zorunluluğun çok üzerindedir.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .risk-grid { grid-template-columns: 1fr !important; } .guvs-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </>
  );
}
