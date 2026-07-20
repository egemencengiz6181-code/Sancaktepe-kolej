import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.85rem' }}>{children}</p>
);

const PARTNERSHIPS = [
  {
    name: 'Cambridge English',
    desc: 'Uluslararası tanınan sertifikasyon sınavları ve müfredat desteği. Cambridge Yeterlilik sınavlarına (KET, PET, FCE, CAE vb.) hazırlık programı.',
  },
  {
    name: 'International House (IH)',
    desc: 'Dünyanın en büyük İngilizce dil okulları ağlarından biri. Öğretmen gelişimi ve müfredat kalitesi konusunda uluslararası standartlar.',
  },
  {
    name: 'Oxford University Press',
    desc: 'Güncel ve kapsamlı İngilizce öğretim materyalleri; hem basılı hem dijital kaynaklar.',
  },
];

export default function YabanciDilPage() {
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
              Yabancı Dil Birimi
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              21. yüzyıl becerilerini ve uluslararası ortaklıklarla güçlenen yabancı dil eğitimi.
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
                <span className="section-tag">Yabancı Dil Eğitimi</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>21. Yüzyıl Becerilerini Geliştiren Yabancı Dil Eğitimi</h2>
              <P>Kolej Sancaktepe Yabancı Dil Birimi, öğrencilere uluslararası standartlarda dil eğitimi sunarak küresel vatandaşlık becerilerini geliştirir.</P>
            </motion.div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) { .partner-cards { grid-template-columns: 1fr !important; } .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
