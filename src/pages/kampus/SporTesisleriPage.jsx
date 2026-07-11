import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const BRANCHES = [
  {
    label: 'Basketbol',
    desc: 'Okul içi ve bölgelerarası liglere katılan basketbol takımımız, yıl boyunca profesyonel bir antrenör eşliğinde antrenman yapar. Hem erkek hem kız öğrencilere açık olan takımımız, rekabetçi ortamda büyüme ve takım ruhunu keşfetme fırsatı sunar.',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=700&q=80&auto=format',
  },
  {
    label: 'Voleybol',
    desc: 'Hem indoor hem açık sahada voleybol oynayan öğrencilerimiz, teknik becerilerini ve kondisyonlarını geliştirirken takım dayanışmasını da güçlendirir. Turnuvalarda okulumuzun renklerini başarıyla temsil etmektedirler.',
    img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=700&q=80&auto=format',
  },
  {
    label: 'Tenis',
    desc: 'Kampüsümüzdeki tenis kortlarında başlayan tenis macerasında öğrenciler, temel teknikten rekabetçi oyuna kadar geniş bir öğrenim sürecinden geçer. Bireysel odaklanma, özgüven ve sportif disiplin tenniste kazanılan başlıca değerlerdir.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format',
  },
  {
    label: 'Masa Tenisi',
    desc: 'Refleks, konsantrasyon ve hız gerektiren masa tenisi, her yaş grubundan öğrencinin keyifle katılabildiği bir branştır. Okulumuzda düzenlenen turnuvalar, bireysel yeteneklerin sergilenmesine ve rekabetçi ruhun gelişmesine katkı sağlar.',
    img: 'https://images.unsplash.com/photo-1611251126112-a5d1c049985d?w=700&q=80&auto=format',
  },
  {
    label: 'Jimnastik',
    desc: 'Esneklik, denge, güç ve koordinasyonu aynı anda geliştiren jimnastik, öğrencilerimizin beden ve zihin uyumunu artırır. Kulüp çalışmaları düzenli antrenmanlar ve gösterilerle zenginleştirilmektedir.',
    img: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=700&q=80&auto=format',
  },
  {
    label: 'Satranç',
    desc: 'Stratejik düşünce, dikkat ve sabır gerektiren satranç, öğrencilerimizin analitik zekâlarını güçlendiren köklü bir spor dalıdır. Okul satranç takımımız bölgesel ve ulusal turnuvalarda temsil görevini başarıyla sürdürmektedir.',
    img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=700&q=80&auto=format',
  },
];

export default function SporTesisleriPage() {
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
              Spor Tesisleri
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'de spor, akademik başarının ayrılmaz bir parçasıdır. Modern spor tesislerimiz ve deneyimli antrenörlerimizle her öğrencinin potansiyeli desteklenir.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <section style={{ padding: '5rem 0 3rem', background: 'var(--white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="intro-grid">
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">Spor Kültürü</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Hareket, Disiplin <span>ve Takım Ruhu</span></h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
                Kolej Sancaktepe'de spor eğitimi, yalnızca fiziksel gelişimi değil; liderlik, disiplin, takım çalışması ve sportmenlik değerlerini de kapsar. Basketbol, voleybol, tenis, masa tenisi, jimnastik ve satranç branşlarında faaliyet gösteren kulüplerimiz ve okul takımlarımız, haftalık program doğrultusunda profesyonel antrenörler eşliğinde çalışmalarını sürdürmektedir.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>
                Her öğrencinin ilgi ve yetenek alanına göre branş seçebileceği yapımız sayesinde, spor bir zorunluluk değil bir tutku haline gelir. Öğrencilerimiz düzenlediğimiz okul içi ve okul dışı turnuvalarda temsil becerilerini de geliştirme fırsatı bulur.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=80&auto=format"
                alt="Spor Tesisleri"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 50px rgba(35,46,92,0.15)' }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branşlar */}
      <section style={{ padding: '4rem 0 7rem', background: 'var(--off-white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Kulüpler &amp; Takımlar</span>
            </div>
            <h2 className="section-title">Spor Branşlarımız</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="branches-grid">
            {BRANCHES.map((b, i) => (
              <motion.div key={b.label} {...fadeUp(i * 0.06)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(35,46,92,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(35,46,92,0.05)'; }}
                >
                  <img
                    src={b.img}
                    alt={b.label}
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                      
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)' }}>{b.label}</h3>
                    </div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{b.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) { .branches-grid { grid-template-columns: repeat(2, 1fr) !important; } .intro-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px) { .branches-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
