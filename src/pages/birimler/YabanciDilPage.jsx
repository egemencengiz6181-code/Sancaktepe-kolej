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
    logo: '🎓',
    desc: 'Uluslararası tanınan sertifikasyon sınavları ve müfredat desteği. Cambridge Yeterlilik sınavlarına (KET, PET, FCE, CAE vb.) hazırlık programı.',
  },
  {
    name: 'International House (IH)',
    logo: '🌍',
    desc: 'Dünyanın en büyük İngilizce dil okulları ağlarından biri. Öğretmen gelişimi ve müfredat kalitesi konusunda uluslararası standartlar.',
  },
  {
    name: 'Oxford University Press',
    logo: '📚',
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
                <span className="section-tag">Misyon ve Vizyon</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Yabancı Dil Eğitim Felsefemiz</h2>
              <P>Kolej Sancaktepe'nin misyonu; öğrencilerin İngilizce'yi etkin biçimde kullanabilmelerini ve kendilerine özgü dil becerilerini geliştirmelerini sağlamaktır. Eğitimcilerin görevi, öğrencilerin gerçek iletişim bağlamlarında dili anlamlı şekilde kullanabilmeleri için onlara rehberlik etmektir.</P>
              <P>Kolej Sancaktepe'de yabancı dil öğretiminde 21. yüzyıl becerileri merkezde tutulur: eleştirel düşünme, iş birliği, iletişim ve yaratıcılık. Öğrenciler dili yalnızca akademik bir araç olarak değil, küresel iletişimin bir parçası olarak benimser.</P>
            </motion.div>

            <motion.div {...fadeUp(0.05)} style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--grey-light)' }}>K-12 İngilizce Müfredatı</h3>
              <P>Kolej Sancaktepe'de K-12 İngilizce dersi kapsamlı ve sarmal bir yapıda kurgulanmıştır. Öğrenciler, okul öncesinden lise son sınıfa kadar süregelen bir dil gelişim yolculuğu izlerler.</P>
              <P>Dinleme, konuşma, okuma ve yazma becerilerinin bütünleşik olarak geliştirilmesi hedeflenir. Müfredat, öğrencilerin uluslararası sertifika sınavlarına (Cambridge, IELTS, TOEFL vb.) hazırlanabilmelerini de destekler.</P>
            </motion.div>

            <motion.div {...fadeUp(0.08)} style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--grey-light)' }}>Uluslararası Ortaklıklar</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="partner-cards">
                {PARTNERSHIPS.map((p, i) => (
                  <motion.div key={i} {...fadeUp(0.1 + i * 0.05)}>
                    <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--grey-light)', height: '100%' }}>
                      <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{p.logo}</div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.6rem' }}>{p.name}</h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <div style={{ background: 'var(--primary)', borderRadius: '16px', padding: '2.5rem', color: '#fff' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>21. Yüzyıl Dil Becerileri</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="skills-grid">
                  {[
                    { icon: '💡', label: 'Eleştirel Düşünme', desc: 'Dili analitik bir araç olarak kullanma' },
                    { icon: '🤝', label: 'İş Birliği', desc: 'Çok kültürlü ortamlarda takım çalışması' },
                    { icon: '📢', label: 'İletişim', desc: 'Akademik ve günlük bağlamlarda etkili iletişim' },
                    { icon: '🌟', label: 'Yaratıcılık', desc: 'Özgün üretim ve yazılı-sözlü ifade' },
                  ].map((skill, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{skill.icon}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.25rem' }}>{skill.label}</div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
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
