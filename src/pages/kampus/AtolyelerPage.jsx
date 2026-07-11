import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const WORKSHOPS = [
  {
    title: 'Sahne Sanatları',
    desc: 'Tiyatro, performans sanatları ve sahne sunumu alanlarında öğrencilerimiz; özgüven, beden dili ve ifade güçlerini keşfeder. Yıl boyunca sahne çalışmaları ve gösterilerle bu beceriler geliştirilir.',
    img: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=700&q=80&auto=format',
  },
  {
    title: 'Dans Atölyesi',
    desc: 'Klasik bale, modern dans, halk dansları ve çeşitli dans stilleri üzerine uzman eğitmenler rehberliğinde çalışmalar yürütülür. Dans, öğrencilerin ritim, koordinasyon ve bedensel farkındalıklarını artıran bütünsel bir sanat dalıdır.',
    img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=700&q=80&auto=format',
  },
  {
    title: 'Drama Atölyesi',
    desc: 'Yaratıcı drama çalışmaları, öğrencilerin empati kurma, problem çözme ve sözlü ifade becerilerini güçlendirir. Rol yapma, doğaçlama ve senaryo çalışmaları ile bu atölye derse entegre edilmektedir.',
    img: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=700&q=80&auto=format',
  },
  {
    title: 'Bireysel Müzik Odaları',
    desc: 'Ses geçirmez bireysel müzik odalarımızda öğrenciler keman, piyano, gitar, bateri ve daha pek çok enstrümanı özel ders formatında çalışabilir. Müzik teorisi ve kulak eğitimi dersleri de programın ayrılmaz bir parçasıdır.',
    img: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=700&q=80&auto=format',
  },
  {
    title: 'Görsel Tasarım',
    desc: 'Resim, grafik tasarım, dijital sanat ve fotoğrafçılık branşlarında öğrenciler hem geleneksel hem dijital medyayı kullanarak özgün eserler üretir. Tasarım düşüncesi ve görsel okuryazarlık bu atölyenin temel çıktılarıdır.',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80&auto=format',
  },
  {
    title: 'Seramik Atölyesi',
    desc: 'El becerisi, sabır ve yaratıcılığı bir arada geliştiren seramik atölyemizde öğrenciler çamur yoğurmaktan sırlı ürünler yaratmaya kadar geniş bir süreçten geçer. Her öğrenci kendi özgün eserini tasarlar ve hayata geçirir.',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&q=80&auto=format',
  },
];

export default function AtolyelerPage() {
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
              Atölyeler
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'de sanat, müzik ve drama atölyeleri; öğrencilerin ilgi alanlarını keşfetmelerine, yeteneklerini ortaya çıkarmalarına ve kendilerini özgürce ifade etmelerine olanak tanır.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <section style={{ padding: '6rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="ato-intro">
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">Sanat &amp; Yaratıcılık</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Potansiyelinizi <span>Keşfedin</span></h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
                Kolej Sancaktepe'de sanat eğitimi yalnızca bir ders değil, bir yaşam biçimidir. Sahne sanatları, dans, drama, bireysel müzik odaları, görsel tasarım ve seramik atölyeleri; her öğrencinin kendine özgü yeteneklerini ve ilgi alanlarını keşfedebileceği çeşitli platformlar sunar.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>
                Uzman eğitmenler ve doğru donanımlı atölye ortamları sayesinde öğrencilerimiz; teknik becerilerini geliştirirken hayal güçlerini besler, disiplin ve özgüveni bir arada kazanır. Yıl sonunda düzenlenen sergi ve gösteriler, öğrencilerin emeklerini toplumla paylaşmalarına zemin hazırlar.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80&auto=format"
                alt="Atölyeler"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 50px rgba(35,46,92,0.15)' }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Atölyeler Grid */}
      <section style={{ padding: '5rem 0 7rem', background: 'var(--off-white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Atölyelerimiz</span>
            </div>
            <h2 className="section-title">Sanat <span>Branşları</span></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="wk-grid">
            {WORKSHOPS.map((w, i) => (
              <motion.div key={w.title} {...fadeUp(i * 0.06)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(35,46,92,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(35,46,92,0.05)'; }}
                >
                  <img src={w.img} alt={w.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)' }}>{w.title}</h3>
                    </div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{w.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) { .wk-grid { grid-template-columns: repeat(2, 1fr) !important; } .ato-intro { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px) { .wk-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
