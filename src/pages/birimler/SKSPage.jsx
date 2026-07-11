import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function SKSPage() {
  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Birimler</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              SKS Koordinatörlüğü
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Sosyal, Kültürel ve Sportif Etkinlikler Koordinatörlüğü
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '6rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">SKS Koordinatörlüğü</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Etkinlik ve Kulüp Yaşamı</h2>
            </motion.div>

            <motion.div {...fadeUp(0.08)}>
              <div style={{ background: 'var(--white)', borderRadius: '16px', padding: '2.5rem', border: '1px solid var(--grey-light)', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.97rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '1.25rem' }}>
                  Kolej Sancaktepe'de her öğrencinin, akademik yaşamının yanında aktif bir kulüp ve etkinlik hayatı sürdürmesi beklenmektedir. SKS Koordinatörlüğü bu çerçevede sosyal, kültürel ve sportif alanlarda öğrencilerin yeteneklerini keşfetmelerine ve geliştirmelerine olanak tanıyan programlar düzenler.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.97rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '1.25rem' }}>
                  SKS politikasının temel amacı, öğrencilerin akademik başarının ötesinde dengeli ve bütünlüklü bireyler olarak yetişmelerini sağlamaktır. Kulüp etkinlikleri; liderlik, takım çalışması, sorumluluk alma ve sosyal farkındalık gibi yaşam becerilerini pekiştirir.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.97rem', color: 'var(--text-mid)', lineHeight: 1.95 }}>
                  Koordinatörlüğümüz, okul genelinde düzenlenen tüm ulusal ve uluslararası yarışmalar, festival ve sosyal sorumluluk projeleri ile öğrenci kulüplerinin faaliyetlerini koordineli biçimde yürütür.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.12)} style={{ marginTop: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="sks-cards">
                {[
                  { label: 'Sportif Etkinlikler', desc: 'Turnuvalar, spor ligleri ve bireysel-takım sporları.' },
                  { label: 'Kültürel Etkinlikler', desc: 'Tiyatro, müzik, edebiyat ve sanat kulüpleri.' },
                  { label: 'Sosyal Sorumluluk', desc: 'Topluma katkı projeleri ve çevre etkinlikleri.' },
                ].map((card, i) => (
                  <div key={i} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--grey-light)', textAlign: 'center' }}>
                    
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.4rem' }}>{card.label}</div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) { .sks-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
