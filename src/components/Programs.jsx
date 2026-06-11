import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const programs = [
  {
    id: 'bogep',
    tag: 'BÖGEP',
    title: 'Bütüncül Öğrenme ve Gelişim Programları',
    subtitle: 'Akademik başarıyı sosyal ve duygusal gelişimle desteklemek',
    color: '#c9a84c',
    icon: '🌐',
    desc: 'Akademik dersleri destekleyen ve öğrencinin çok yönlü gelişimini hedefleyen yapıların bütünüdür.',
    items: [
      { code: 'SSP', label: 'Sosyal Sorumluluk Programı' },
      { code: 'LLL', label: 'Yaşam Boyu Öğrenme Programı' },
      { code: 'ODE', label: 'Okul Dışı Etkinlikler Programı' },
      { code: 'MP', label: 'Mentörlük ve Rehberlik Programı' },
      { code: 'TÖP', label: 'Tematik Öğrenme Programı (MH – Multidisciplinary Hub)' },
    ],
    goals: [
      'Akademik başarıyı sosyal ve duygusal gelişimle desteklemek',
      'Öğrencinin bireysel potansiyelini ortaya çıkarmak',
      'Okulu yaşamla bütünleştirmek',
    ],
    apply: 'BÖGEP kapsamındaki çalışmalar, ders saatleri içinde ve dışında; proje haftaları, kulüp saatleri, atölyeler ve okul dışı öğrenme etkinlikleriyle programa entegre edilir.',
  },
  {
    id: 'otd',
    tag: 'OTD',
    title: 'Okuryazarlık Temelli Dersler',
    subtitle: 'Sadece Ortaokul ve Lise',
    color: '#4a9eff',
    icon: '📖',
    desc: 'Öğrencilerin bilgiyi yalnızca öğrenmesini değil; anlamasını, yorumlamasını ve kullanmasını hedefleyen derslerdir.',
    items: [
      { code: '01', label: 'Dil okuryazarlığı' },
      { code: '02', label: 'Fen ve matematik okuryazarlığı' },
      { code: '03', label: 'Tarih ve sosyal bilimler okuryazarlığı' },
      { code: '04', label: 'Coğrafya ve zaman mekan okuryazarlığı' },
      { code: '05', label: 'Dijital ve bilişim okuryazarlığı' },
      { code: '06', label: 'Medya ve veri okuryazarlığı' },
    ],
    goals: [
      'PISA ve TIMSS gibi uluslararası değerlendirmelerde güçlü beceriler',
      'Üst düzey düşünme ve analiz yetkinliği',
      'Açık uçlu ve senaryo temelli problem çözme',
    ],
    apply: 'OTD, Türkçe, Matematik, Fen ve Sosyal Bilimler dersleriyle ilişkili fakat bağımsız kazanımlara sahip olarak planlanır. Dersler soru okuma, yazma, analiz ve tartışma odaklı yürütülür.',
  },
  {
    id: 'top',
    tag: 'TÖP',
    title: 'Tematik Öğrenme Programı',
    subtitle: 'Disiplinlerarası Bütüncül Yaklaşım',
    color: '#a855f7',
    icon: '🔭',
    desc: 'Öğrencilerin farklı disiplinleri ortak bir tema etrafında bütüncül olarak ele almasını sağlar.',
    items: [
      { code: '▸', label: 'İnsan ve toplum' },
      { code: '▸', label: 'Doğa ve sürdürülebilirlik' },
      { code: '▸', label: 'Bilim, teknoloji ve etik' },
      { code: '▸', label: 'Kültür, sanat ve kimlik' },
      { code: '▸', label: 'Gelecek, yapay zekâ ve dijital dönüşüm' },
    ],
    goals: [
      'Disiplinlerarası düşünme',
      'Bilgiler arasında bağ kurma',
      'Derin öğrenme ve üretim',
    ],
    apply: 'Temalar; belirli haftalar, proje dönemleri veya yıl geneline yayılan modüller şeklinde programa entegre edilir.',
  },
  {
    id: 'kvyod',
    tag: 'KVYOD',
    title: 'Küresel Vizyon ve Yaşam Odaklı Dersler',
    subtitle: 'Dünyayı Bütüncül Okumak',
    color: '#10b981',
    icon: '🌱',
    desc: 'Öğrencilerin akademik bilgiyi yaşamla ilişkilendirmesini, dünyayı bütüncül bir bakış açısıyla okuyabilmesini amaçlayan derslerdir.',
    items: [
      { code: '▸', label: 'Sürdürülebilir kalkınma hedefleri (SDGs)' },
      { code: '▸', label: 'Küresel vatandaşlık' },
      { code: '▸', label: 'İklim, çevre ve ekoloji' },
      { code: '▸', label: 'Dijital çağ, medya ve bilgi okuryazarlığı' },
      { code: '▸', label: 'Toplumsal sorunlar ve çözüm odaklı düşünme' },
      { code: '▸', label: 'Etik, değerler ve sorumluluk bilinci' },
    ],
    goals: [
      'Küresel sorunlara duyarlılık geliştirmek',
      'Etik, çevresel ve toplumsal farkındalık kazanmak',
      'Akademik bilgiyi gerçek yaşam bağlamında kullanmak',
    ],
    apply: 'KVYOD, ortaokul ve lise kademelerinde haftalık ders çizelgesine yerleştirilir; bazı kazanımlar proje, bazıları disiplinlerarası çalışmalar yoluyla ele alınır.',
  },
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(null);

  return (
    <section
      id="programs"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #06101e 0%, #0a1628 100%)',
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
            <span className="section-tag">Eğitim Programları</span>
            <div className="gold-line" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Eğitim <span>Programlarımız</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>
            Bütüncül öğrenme yaklaşımıyla öğrencilerimizin tüm yönlerden gelişimini destekliyoruz.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActive(active === prog.id ? null : prog.id)}
              whileHover={{ y: -4 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                border: `1px solid ${active === prog.id ? prog.color + '50' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '4px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                boxShadow: active === prog.id ? `0 0 40px ${prog.color}15` : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${prog.color}, transparent)`,
              }} />

              {/* Icon + Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: `${prog.color}15`,
                  border: `1px solid ${prog.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>{prog.icon}</div>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: prog.color,
                  background: `${prog.color}12`,
                  border: `1px solid ${prog.color}30`,
                  padding: '0.3rem 0.7rem',
                  borderRadius: '2px',
                }}>{prog.tag}</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
              }}>{prog.title}</h3>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: prog.color,
                marginBottom: '0.8rem',
                textTransform: 'uppercase',
              }}>{prog.subtitle}</p>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '1rem',
              }}>{prog.desc}</p>

              {/* Expand indicator */}
              <motion.div
                animate={{ rotate: active === prog.id ? 180 : 0 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: prog.color,
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              >
                <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {active === prog.id ? 'Kapat' : 'Detaylar'}
                </span>
                <span style={{ transform: active === prog.id ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.3s' }}>▾</span>
              </motion.div>

              {/* Expanded content */}
              <AnimatePresence>
                {active === prog.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      marginTop: '1.5rem',
                      paddingTop: '1.5rem',
                      borderTop: `1px solid ${prog.color}25`,
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '0.75rem',
                      }}>Program İçeriği</p>
                      {prog.items.map((item, j) => (
                        <div key={j} style={{
                          display: 'flex',
                          gap: '0.6rem',
                          marginBottom: '0.5rem',
                          alignItems: 'flex-start',
                        }}>
                          <span style={{ color: prog.color, fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{item.code}</span>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{item.label}</span>
                        </div>
                      ))}

                      <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)',
                        margin: '1.2rem 0 0.75rem',
                      }}>Amaç</p>
                      {prog.goals.map((g, j) => (
                        <div key={j} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', alignItems: 'flex-start' }}>
                          <span style={{ color: prog.color, flexShrink: 0 }}>✓</span>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{g}</span>
                        </div>
                      ))}

                      <div style={{
                        marginTop: '1.2rem',
                        padding: '1rem',
                        background: `${prog.color}08`,
                        borderRadius: '3px',
                        borderLeft: `3px solid ${prog.color}`,
                      }}>
                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8rem',
                          lineHeight: 1.7,
                          color: 'rgba(255,255,255,0.5)',
                          fontStyle: 'italic',
                        }}>📌 {prog.apply}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
