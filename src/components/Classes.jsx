import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const classes = [
  {
    id: 'okul-oncesi',
    level: 'Okul Öncesi',
    ages: 'Anaokulu',
    subtitle: 'Oyunla Keşfeden, Merakla Öğrenen Çocuklar',
    color: '#f59e0b',
    desc: 'Anaokulumuz, çocukların erken yaşta merak duygusunu, dil becerilerini ve düşünme alışkanlıklarını geliştirmeyi amaçlayan bütüncül bir eğitim yaklaşımı sunar.',
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
      'Rehberlik ve yaşam becerileri', '5–6 yaş grubu: felsefi düşünmeye hazırlık',
    ],
    goal: 'Kendini ifade edebilen, merak eden, öğrenmekten keyif alan ve sosyal açıdan güçlü çocuklar yetiştirmek.',
  },
  {
    id: 'ilkokul',
    level: 'İlkokul',
    ages: '1. - 4. Sınıf',
    subtitle: 'Sağlam Temeller, Güçlü Beceriler',
    color: '#3b82f6',
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
    ages: '5. - 8. Sınıf',
    subtitle: 'Düşünen, Sorgulayan, Dünyayı Okuyan Öğrenciler',
    color: '#8b5cf6',
    desc: 'Ortaokulumuz, öğrencilerin akademik gelişimlerinin yanında eleştirel düşünme, problem çözme ve küresel farkındalık kazandıkları bir öğrenme süreci sunar.',
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
    ages: '9. - 12. Sınıf',
    subtitle: 'Geleceği Okuyan, Yönünü Belirleyen Gençler',
    color: '#c9a84c',
    desc: 'Anadolu Lisemiz, öğrencileri yalnızca üniversiteye değil, hayata ve dünyaya hazırlayan çok yönlü bir eğitim anlayışı sunar.',
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

export default function Classes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState(classes[0].id);

  const active = classes.find((c) => c.id === selected);

  return (
    <section
      id="classes"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #0a1628 0%, #0c1d38 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <div className="gold-line" />
            <span className="section-tag">Kademeler</span>
            <div className="gold-line" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Eğitim <span>Kademelerimiz</span>
          </h2>
        </motion.div>

        {/* Tab selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => setSelected(cls.id)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: selected === cls.id ? 'var(--navy)' : 'rgba(255,255,255,0.6)',
                background: selected === cls.id
                  ? `linear-gradient(135deg, ${cls.color}, ${cls.color}cc)`
                  : 'rgba(255,255,255,0.04)',
                border: `1px solid ${selected === cls.id ? cls.color : 'rgba(255,255,255,0.1)'}`,
                padding: '0.7rem 1.5rem',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              {cls.level}
            </button>
          ))}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: '3rem',
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${active.color}30`,
                borderRadius: '6px',
                overflow: 'hidden',
              }}
              className="classes-panel"
            >
              {/* Left panel */}
              <div style={{
                padding: '3rem',
                background: `linear-gradient(135deg, ${active.color}10, transparent)`,
                borderRight: `1px solid ${active.color}20`,
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '4px',
                  background: `linear-gradient(180deg, ${active.color}, transparent)`,
                }} />

                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: active.color,
                  marginBottom: '0.5rem',
                }}>{active.ages}</div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}>{active.level}</h3>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  color: active.color,
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                }}>{active.subtitle}</p>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '2rem',
                }}>{active.desc}</p>

                {/* Goal */}
                <div style={{
                  padding: '1.2rem',
                  background: `${active.color}10`,
                  border: `1px solid ${active.color}25`,
                  borderRadius: '3px',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: active.color,
                    marginBottom: '0.5rem',
                  }}>Hedefimiz</p>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.7)',
                  }}>{active.goal}</p>
                </div>
              </div>

              {/* Right panel */}
              <div style={{ padding: '3rem' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: '1rem',
                  }}>Eğitim Yaklaşımı</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {active.approach.map((a, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                      >
                        <div style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: active.color,
                          marginTop: '0.55rem',
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.88rem',
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: 1.6,
                        }}>{a}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: '1rem',
                  }}>Program İçeriği</p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem',
                  }}>
                    {active.content.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        style={{
                          display: 'flex',
                          gap: '0.5rem',
                          alignItems: 'flex-start',
                          padding: '0.6rem',
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          borderRadius: '3px',
                        }}
                      >
                        
                        <span style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8rem',
                          color: 'rgba(255,255,255,0.6)',
                          lineHeight: 1.5,
                        }}>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .classes-panel { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
