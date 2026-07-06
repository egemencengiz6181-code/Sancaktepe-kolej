import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const VALUES = [
  { label: 'Sevgi', icon: '❤️' },
  { label: 'Dürüstlük', icon: '🤝' },
  { label: 'Duyarlılık', icon: '🌱' },
  { label: 'Güven', icon: '🛡️' },
  { label: 'Hoşgörü', icon: '🕊️' },
  { label: 'Sabır', icon: '⏳' },
  { label: 'Saygı', icon: '🌟' },
  { label: 'Dayanışma', icon: '🤲' },
  { label: 'Barış', icon: '☮️' },
  { label: 'Yardımlaşma', icon: '🙌' },
  { label: 'Adalet', icon: '⚖️' },
  { label: 'Empati', icon: '💛' },
  { label: 'Sorumluluk', icon: '📌' },
  { label: 'Dostluk', icon: '🫂' },
];

export default function IlkokulDegerlerPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/ilkokul" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>İlkokul</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Değerler Eğitimi</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Değerler Eğitimi
          </motion.h1>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2.5rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid #232e5c', marginBottom: '3rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1rem' }}>Değerler Eğitimi Anlayışımız</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '0.85rem' }}>
                Değerler Eğitimi; sevgi, saygı, dürüstlük, duyarlılık gibi insani değerlerin tüm ders içeriklerimize entegre edilerek işlendiği kapsamlı bir yaklaşımı ifade eder. Amacımız, öğrencilerimizin sadece bilgi edinen değil, aynı zamanda bu değerleri içselleştirmiş, karakter sahibi bireyler olarak yetişmesidir.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, margin: 0 }}>
                Her öğrencimizin iç denetim becerisi geliştirmesini, farklılıkları kabul etmeyi öğrenmesini ve temel insan haklarına saygı duyan bir anlayış kazanmasını hedefliyoruz. Bu değerleri yalnızca okul hayatında değil, gündelik yaşamın her alanında uygulamaları için rehberlik ediyoruz.
              </p>
            </motion.div>

            <motion.h2 {...fadeUp(0.1)} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center', marginBottom: '2rem' }}>
              Müfredatımızdaki 14 Temel Değer
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
              {VALUES.map((v, i) => (
                <motion.div key={i} {...fadeUp(0.12 + i * 0.035)}>
                  <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.5rem 1rem', border: '1px solid var(--grey-light)', textAlign: 'center', boxShadow: '0 2px 10px rgba(35,46,92,0.04)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(35,46,92,0.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(35,46,92,0.04)'; }}
                  >
                    <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--primary)', margin: 0 }}>{v.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.6)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', boxShadow: '0 2px 12px rgba(35,46,92,0.05)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Uygulama Süreci</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.9, margin: 0 }}>
                Her ay belirlenen değer tüm sınıf etkinlikleriyle işlenir; öğrencilerimiz bu değerle ilgili çalışmalarını portfolyolarına eklerler. Sene sonunda tüm değerlere ait çalışmalar panel olarak sergilenir. Bu süreç hem akademik hem de kişisel gelişimin ayrılmaz bir parçasıdır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
