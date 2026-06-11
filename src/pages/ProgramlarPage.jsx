import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

const programs = [
  {
    id: 'bogep',
    tag: 'BÖGEP',
    title: 'Bütüncül Öğrenme ve Gelişim Programları',
    subtitle: 'Akademik başarıyı sosyal ve duygusal gelişimle desteklemek',
    color: 'var(--primary)',
    accent: 'var(--red-light)',
    icon: '🌐',
    desc: 'Akademik dersleri destekleyen ve öğrencinin çok yönlü gelişimini hedefleyen yapıların bütünüdür.',
    items: [
      { code: 'SSP', label: 'Sosyal Sorumluluk Programı' },
      { code: 'LLL', label: 'Yaşam Boyu Öğrenme Programı' },
      { code: 'ODE', label: 'Okul Dışı Etkinlikler Programı' },
      { code: 'MP', label: 'Mentörlük ve Rehberlik Programı' },
      { code: 'TÖP', label: 'Tematik Öğrenme Programı (MH – Multidisciplinary Hub)' },
    ],
    goals: ['Akademik başarıyı sosyal ve duygusal gelişimle desteklemek', 'Öğrencinin bireysel potansiyelini ortaya çıkarmak', 'Okulu yaşamla bütünleştirmek'],
    apply: 'BÖGEP kapsamındaki çalışmalar, ders saatleri içinde ve dışında; proje haftaları, kulüp saatleri, atölyeler ve okul dışı öğrenme etkinlikleriyle programa entegre edilir.',
  },
  {
    id: 'otd',
    tag: 'OTD',
    title: 'Okuryazarlık Temelli Dersler',
    subtitle: 'Sadece Ortaokul ve Lise',
    color: 'var(--red)',
    accent: 'var(--red-light)',
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
    goals: ['PISA ve TIMSS gibi uluslararası değerlendirmelerde güçlü beceriler', 'Üst düzey düşünme ve analiz yetkinliği', 'Açık uçlu ve senaryo temelli problem çözme'],
    apply: 'OTD, Türkçe, Matematik, Fen ve Sosyal Bilimler dersleriyle ilişkili fakat bağımsız kazanımlara sahip olarak planlanır. Dersler soru okuma, yazma, analiz ve tartışma odaklı yürütülür.',
  },
  {
    id: 'top',
    tag: 'TÖP',
    title: 'Tematik Öğrenme Programı',
    subtitle: 'Disiplinlerarası Bütüncül Yaklaşım',
    color: '#7c3aed',
    accent: '#a855f7',
    icon: '🔭',
    desc: 'Öğrencilerin farklı disiplinleri ortak bir tema etrafında bütüncül olarak ele almasını sağlar.',
    items: [
      { code: '▸', label: 'İnsan ve toplum' },
      { code: '▸', label: 'Doğa ve sürdürülebilirlik' },
      { code: '▸', label: 'Bilim, teknoloji ve etik' },
      { code: '▸', label: 'Kültür, sanat ve kimlik' },
      { code: '▸', label: 'Gelecek, yapay zekâ ve dijital dönüşüm' },
    ],
    goals: ['Disiplinlerarası düşünme', 'Bilgiler arasında bağ kurma', 'Derin öğrenme ve üretim'],
    apply: 'Temalar; belirli haftalar, proje dönemleri veya yıl geneline yayılan modüller şeklinde programa entegre edilir.',
  },
  {
    id: 'kvyod',
    tag: 'KVYOD',
    title: 'Küresel Vizyon ve Yaşam Odaklı Dersler',
    subtitle: 'Dünyayı Bütüncül Okumak',
    color: '#059669',
    accent: '#10b981',
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
    goals: ['Küresel sorunlara duyarlılık geliştirmek', 'Etik, çevresel ve toplumsal farkındalık kazanmak', 'Akademik bilgiyi gerçek yaşam bağlamında kullanmak'],
    apply: 'KVYOD, ortaokul ve lise kademelerinde haftalık ders çizelgesine yerleştirilir; bazı kazanımlar proje, bazıları disiplinlerarası çalışmalar yoluyla ele alınır.',
  },
];

export default function ProgramlarPage() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="page-hero" style={{
        backgroundImage: "linear-gradient(135deg, rgba(26,35,71,0.93) 0%, rgba(35,46,92,0.89) 55%, rgba(46,61,122,0.89) 100%), url('/gallery/IMG_0831.jpeg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Eğitim</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>Eğitim Programlarımız</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Bütüncül öğrenme yaklaşımıyla öğrencilerimizin tüm yönlerden gelişimini destekliyoruz.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(280px, 520px))', gap: '1.5rem', justifyContent: 'center' }} className="programlar-grid">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.id}
                {...fadeUp(i * 0.1)}
                onClick={() => setActive(active === prog.id ? null : prog.id)}
                style={{
                  background: 'var(--white)',
                  borderRadius: '8px',
                  border: `2px solid ${active === prog.id ? prog.color : 'transparent'}`,
                  boxShadow: active === prog.id ? `0 8px 40px rgba(0,0,0,0.12)` : '0 2px 20px rgba(35,46,92,0.07)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                whileHover={{ y: -4 }}
              >
                {/* Top bar */}
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${prog.color}, ${prog.accent})` }} />
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: `${prog.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem' }}>{prog.icon}</div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.15em', color: prog.color, background: `${prog.color}12`, border: `1px solid ${prog.color}30`, padding: '0.3rem 0.7rem', borderRadius: '3px' }}>{prog.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{prog.title}</h3>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: prog.color, marginBottom: '0.8rem' }}>{prog.subtitle}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.75, color: 'var(--text-mid)', marginBottom: '1.2rem' }}>{prog.desc}</p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: prog.color, fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {active === prog.id ? '▲ Kapat' : '▼ Detaylar'}
                    </div>
                    <Link to={`/programlar/${prog.id}`} onClick={(e) => e.stopPropagation()} style={{ textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)', padding: '0.3rem 0.7rem', border: '1px solid rgba(230,25,54,0.3)', borderRadius: '3px', transition: 'all 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--red)'; }}
                    >Detay Sayfası →</Link>
                  </div>

                  <AnimatePresence>
                    {active === prog.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: `2px solid ${prog.color}20` }}>
                          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.63rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.75rem' }}>Program İçeriği</p>
                          {prog.items.map((item, j) => (
                            <div key={j} style={{ display: 'flex', gap: '0.7rem', marginBottom: '0.45rem' }}>
                              <span style={{ color: prog.color, fontWeight: 800, fontSize: '0.78rem', flexShrink: 0, minWidth: '28px' }}>{item.code}</span>
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{item.label}</span>
                            </div>
                          ))}

                          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.63rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', margin: '1.2rem 0 0.75rem' }}>Amaç</p>
                          {prog.goals.map((g, j) => (
                            <div key={j} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                              <span style={{ color: prog.color }}>✓</span>
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{g}</span>
                            </div>
                          ))}

                          <div style={{ marginTop: '1.2rem', padding: '1rem', background: `${prog.color}08`, borderRadius: '4px', borderLeft: `3px solid ${prog.color}` }}>
                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', lineHeight: 1.75, color: 'var(--text-mid)', fontStyle: 'italic' }}>📌 {prog.apply}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 700px) {
          .programlar-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
