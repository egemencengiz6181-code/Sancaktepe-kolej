import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.9rem' }}>{children}</p>
);

const PROGRAMS = [
  {
    id: 'ap',
    icon: '🎓',
    tag: 'AP',
    title: 'Advanced Placement (AP)',
    subtitle: 'Lise düzeyinde üniversite dersleri',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80&auto=format',
    content: [
      'AP (Advanced Placement), College Board tarafından yürütülen bir programdır ve öğrencilerin Kolej Sancaktepe\'de başlangıç seviyesindeki üniversite derslerini almalarına olanak tanır. Böylece öğrenciler üniversiteye başladıklarında bazı derslerden muaf tutulabilir ve/ya daha ileri seviyede dersler alabilirler.',
      'Genellikle AP dersleri 11. sınıfta başlar. Sınıfların mevcudu az tutulmakta olup haftalık ders saati sayısı AP dersine göre 5 ile 10 saat arasında değişmektedir.',
      'Yurt dışında veya AP derslerini tanıyan Türkiye üniversitelerinde öğrenim görmeyi isteyen öğrenciler, genellikle 3 ya da daha yüksek not almayı hedefleyerek (5 en yüksek nottur) iki AP dersi alırlar. Kolej Sancaktepe\'de öğrencilere bu yolu izlemek istediklerinde hangi AP programının kendilerine en uygun olacağı konusunda 10. sınıfta rehberlik edilir.',
    ],
  },
  {
    id: 'genclik-odulu',
    icon: '🏅',
    tag: 'Uluslararası Ödül',
    title: 'Uluslararası Gençlik Ödülü — Türkiye',
    subtitle: 'Edinburgh Dükü Uluslararası Ödül Programı',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80&auto=format',
    content: [
      'Kolej Sancaktepe, DOIAP (Edinburgh Dükü Uluslararası Ödül Programı) kapsamına dahil olmakla gurur duyar. Program, 14 yaş ve üstü öğrencilere açıktır.',
      'Programın amacı öğrencilerin kişisel sınırlarını aşmalarına destek olmak, yeni beceriler kazanarak özgeçmişlerini güçlendirmek ve üniversite başvurularında başarılı olmalarını sağlamaktır.',
      'Öğrenciler topluma hizmet projelerine, keşif gezilerine ve beceri odaklı programlara katılabilirler.',
    ],
  },
  {
    id: 'kulturel',
    icon: '✈️',
    tag: 'Kültür Programı',
    title: 'Uluslararası Akademik ve Kültür Programları',
    subtitle: 'Londra, ABD ve Avrupa programları',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80&auto=format',
    content: [
      'Kültür programımızın odak noktası; 7, 8. sınıf ve lise öğrencilerinin öğretmenleri ve arkadaşlarıyla birlikte canlı şehirleri tecrübe etmelerini sağlamaktır. Programlar Londra, ABD ve çeşitli Avrupa şehirlerinde düzenlenmektedir.',
      'Programların akademik bir bileşeni (sabah erken saatlerde gerçekleştirilen dil dersleri) olsa da asıl odak noktası kültürdür: müzeler, sanat galerileri, restoranlar, alışveriş, müzikaller, tema parkları vb.',
    ],
    steps: [
      'Seçilen şehir duyurulur (Ekim/Kasım)',
      'Broşürler dağıtılır (Ekim/Kasım)',
      'Öğrenciler kayıt yaptırır (Kasım)',
      'Vizeler ve seyahat belgeleri hazırlanır (Aralık–Mart)',
      'Temmuz ayında öğrenciler ve görevli öğretmenler seçilen şehre gider',
    ],
  },
];

export default function UluslararasiProgramlarPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1530 0%, var(--primary) 60%, var(--primary-light) 100%)' }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Programlar</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Uluslararası Programlar
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Kolej Sancaktepe öğrencilerine sınır ötesi deneyimler, uluslararası sertifikalar ve akademik üstünlük fırsatları sunuyoruz.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <Link to="/programlar/ap-sinav-merkezi" style={{
                fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
                background: 'var(--red)', padding: '0.85rem 2rem', borderRadius: '4px',
                textDecoration: 'none', boxShadow: '0 4px 16px rgba(230,25,54,0.35)',
              }}>
                AP Sınav Merkezi →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {PROGRAMS.map((prog, i) => (
        <section key={prog.id} style={{ padding: '6rem 0', background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)', position: 'relative', overflow: 'hidden' }}>
          {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />}
          <div className="section-container">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center',
              direction: i % 2 === 0 ? 'ltr' : 'rtl',
            }} className="ulsl-grid">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ direction: 'ltr' }}
              >
                <img
                  src={prog.img}
                  alt={prog.title}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 50px rgba(35,46,92,0.15)' }}
                  loading="lazy"
                />
              </motion.div>
              <motion.div {...fadeUp(0.1)} style={{ direction: 'ltr' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{prog.icon}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red)', background: 'rgba(230,25,54,0.08)', padding: '0.25rem 0.7rem', borderRadius: '4px', border: '1px solid rgba(230,25,54,0.2)' }}>{prog.tag}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.5rem' }}>{prog.subtitle}</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.2, marginBottom: '1.5rem' }}>{prog.title}</h2>
                {prog.content.map((p, j) => <P key={j}>{p}</P>)}
                {prog.steps && (
                  <div style={{ marginTop: '1.25rem', background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Program Adımları</p>
                    <ol style={{ paddingLeft: '1.25rem', margin: 0 }}>
                      {prog.steps.map((s, j) => (
                        <li key={j} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.3rem' }}>{s}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <style>{`
        @media (max-width: 900px) { .ulsl-grid { grid-template-columns: 1fr !important; direction: ltr !important; } }
      `}</style>
    </>
  );
}
