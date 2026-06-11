import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

const classes = [
  {
    id: 'okul-oncesi',
    level: 'Okul Öncesi',
    ages: 'Anaokulu',
    subtitle: 'Oyunla Keşfeden, Merakla Öğrenen Çocuklar',
    icon: '🌟',
    color: '#f59e0b',
    desc: 'Anaokulumuz, çocukların erken yaşta merak duygusunu, dil becerilerini ve düşünme alışkanlıklarını geliştirmeyi amaçlayan bütüncül bir eğitim yaklaşımı sunar. Programımızda öğrenme, oyun, keşif ve deneyim üzerinden yapılandırılır.',
    approach: [
      'Oyun temelli öğrenme',
      'Dil gelişimini destekleyen yoğun İngilizce ortam',
      'Sosyal-duygusal gelişimi önceleyen yapı',
      'Sorgulama ve keşif odaklı etkinlikler',
    ],
    content: [
      'Türkçe dil etkinlikleri', 'Matematik ve fen farkındalığı',
      'İngilizce (native destekli)', 'Görsel sanatlar, müzik ve ritim',
      'Drama, dans ve hareket', 'Bilişim, kodlama ve satranç',
      'Rehberlik ve yaşam becerileri', '5–6 yaş: felsefi düşünmeye hazırlık',
    ],
    goal: 'Kendini ifade edebilen, merak eden, öğrenmekten keyif alan ve sosyal açıdan güçlü çocuklar yetiştirmek.',
  },
  {
    id: 'ilkokul',
    level: 'İlkokul',
    ages: '1. – 4. Sınıf',
    subtitle: 'Sağlam Temeller, Güçlü Beceriler',
    icon: '📐',
    color: 'var(--primary)',
    desc: 'İlkokulumuz, öğrencilerin temel akademik becerilerini kazandığı, aynı zamanda düşünme, iletişim ve okuryazarlık alanlarında güçlendiği bir öğrenme ortamı sunar.',
    approach: [
      'Öğrenci merkezli ve aktif öğrenme',
      'Proje ve disiplinlerarası çalışmalar',
      'Güçlü dil eğitimi',
    ],
    content: [
      'Türkçe, Matematik, Hayat Bilgisi', 'Fen Bilimleri ve Sosyal Bilgiler',
      'İngilizce (native destekli)', '2. Yabancı Dil (Almanca)',
      'Yaşam ve düşünme dersleri', 'Proje ve tematik çalışmalar',
      'Görsel sanatlar ve müzik', 'Beden eğitimi ve spor',
      'Bilişim teknolojileri ve kulüpler',
    ],
    goal: 'Okuduğunu anlayan, düşünebilen, iletişim kurabilen ve öğrenmeye istekli bireyler yetiştirmek.',
  },
  {
    id: 'ortaokul',
    level: 'Ortaokul',
    ages: '5. – 8. Sınıf',
    subtitle: 'Düşünen, Sorgulayan, Dünyayı Okuyan Öğrenciler',
    icon: '🔬',
    color: 'var(--red)',
    desc: 'Ortaokulumuzda öğretim süreci, UbD – Understanding by Design yaklaşımı esas alınarak yapılandırılır. Programımız, LGS uyumlu olmakla birlikte; PISA ve TIMSS gibi uluslararası ölçütleri esas alan beceri temelli bir yapıya sahiptir.',
    approach: [
      'UbD – Understanding by Design yaklaşımı',
      'LGS uyumlu, PISA ve TIMSS odaklı',
      'Okuryazarlık temelli öğretim',
      'Beceri odaklı ölçme ve değerlendirme',
      'Güçlü rehberlik ve mentörlük sistemi',
    ],
    content: [
      'Türkçe, Matematik, Fen Bilimleri', 'Sosyal Bilgiler, İnkılap Tarihi',
      'İngilizce (yoğun + native destekli)', 'Yabancı dil',
      'Küresel vizyon ve yaşam dersleri', 'Sosyal sorumluluk projeleri',
      'Okul dışı öğrenme etkinlikleri', 'Kulüp ve etüt çalışmaları',
    ],
    goal: 'Akademik başarıyı, düşünme becerileri ve yaşam farkındalığıyla birlikte geliştiren öğrenciler yetiştirmek.',
  },
  {
    id: 'lise',
    level: 'Anadolu Lisesi',
    ages: '9. – 12. Sınıf',
    subtitle: 'Geleceği Okuyan, Yönünü Belirleyen Gençler',
    icon: '🎓',
    color: 'var(--primary)',
    desc: 'Anadolu Lise programımız; YKS, IB ve AP perspektifleriyle uyumlu, akademik derinliği yüksek ve öğrencinin bireysel yolunu destekleyen bir yapıya sahiptir.',
    approach: [
      'YKS, IB ve AP perspektifleriyle uyumlu',
      'Akademik derinleşme ve disiplinlerarası öğrenme',
      'Uluslararası bakış açısı',
      'Mentörlük ve kariyer rehberliği',
      'Proje, araştırma ve üretim odaklı çalışmalar',
    ],
    content: [
      'Alan dersleri (sayısal, sözel, eşit ağırlık)', 'Yoğun İngilizce ve akademik dil becerileri',
      '2. Yabancı Dil (Almanca)', 'AP / Yurtdışı danışmanlık desteği',
      'Sosyal sorumluluk ve liderlik projeleri', 'Okul dışı etkinlikler ve üniversite bağlantıları',
      'Rehberlik ve bireysel mentörlük',
    ],
    goal: 'Kendi yolunu çizebilen, dünyayı anlayan, sorumluluk alan ve geleceğe hazır bireyler yetiştirmek.',
  },
];

export default function SiniflarPage() {
  const [selected, setSelected] = useState(classes[0].id);
  const active = classes.find((c) => c.id === selected);

  return (
    <>
      <div className="page-hero" style={{
        backgroundImage: "linear-gradient(135deg, rgba(26,35,71,0.92) 0%, rgba(35,46,92,0.88) 55%, rgba(46,61,122,0.88) 100%), url('/gallery/IMG_0832.jpeg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kademeler</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>Eğitim Kademelerimiz</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Okul öncesinden liseye uzanan tam kademe eğitimimizle her yaş grubuna özel program sunuyoruz.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          {/* Tab buttons */}
          <motion.div {...fadeUp(0)} style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {classes.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setSelected(cls.id)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: selected === cls.id ? '#fff' : 'var(--primary)',
                  background: selected === cls.id ? cls.color : 'var(--white)',
                  border: `2px solid ${selected === cls.id ? cls.color : 'var(--grey-light)'}`,
                  padding: '0.75rem 1.75rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: selected === cls.id ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                <span>{cls.icon}</span> {cls.level}
              </button>
            ))}
          </motion.div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'var(--white)',
                  borderRadius: '10px',
                  boxShadow: '0 8px 50px rgba(35,46,92,0.1)',
                  overflow: 'hidden',
                  borderTop: `5px solid ${active.color}`,
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr' }} className="class-panel">
                  {/* Left */}
                  <div style={{
                    padding: '3rem',
                    background: `linear-gradient(160deg, ${active.color}12, transparent)`,
                    borderRight: '1px solid var(--grey-light)',
                  }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1 }}>{active.icon}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: active.color, marginBottom: '0.4rem' }}>{active.ages}</div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem', lineHeight: 1.15 }}>{active.level}</h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontStyle: 'italic', color: active.color, fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.5 }}>{active.subtitle}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-mid)', marginBottom: '2rem' }}>{active.desc}</p>

                    {/* Goal */}
                    <div style={{ padding: '1.2rem', background: `${active.color}10`, borderRadius: '6px', borderLeft: `4px solid ${active.color}` }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: active.color, marginBottom: '0.5rem' }}>🎯 Hedefimiz</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--text-mid)', fontWeight: 500 }}>{active.goal}</p>
                    </div>

                    {/* Detail link */}
                    <div style={{ marginTop: '1.5rem' }}>
                      <Link to={`/siniflar/${active.id}`} style={{
                        textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: '#fff', background: 'linear-gradient(135deg, var(--red), var(--red-light))',
                        padding: '0.75rem 1.5rem', borderRadius: '4px',
                        boxShadow: '0 4px 16px rgba(230,25,54,0.3)', transition: 'all 0.3s',
                      }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(230,25,54,0.4)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(230,25,54,0.3)'; }}
                      >
                        Detay Sayfası →
                      </Link>
                    </div>
                  </div>

                  {/* Right */}
                  <div style={{ padding: '3rem' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.63rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>Eğitim Yaklaşımı</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {active.approach.map((a, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                            style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                          >
                            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: active.color, marginTop: '0.5rem', flexShrink: 0 }} />
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{a}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.63rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>Program İçeriği</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        {active.content.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04 }}
                            style={{
                              display: 'flex', gap: '0.5rem', alignItems: 'flex-start',
                              padding: '0.65rem 0.75rem',
                              background: 'var(--off-white)',
                              borderRadius: '4px',
                              borderLeft: `3px solid ${active.color}`,
                            }}
                          >
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.5 }}>{typeof item === 'string' ? item : item.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .class-panel { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
