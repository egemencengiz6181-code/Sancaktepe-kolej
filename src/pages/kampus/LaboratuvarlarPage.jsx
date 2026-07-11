import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.9rem' }}>{children}</p>
);

const LABS = [
  {
    title: 'Windows Laboratuvarı — Ortaokul',
    img: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=700&q=80&auto=format',
    specs: ['24 Bilgisayar', 'Windows İşletim Sistemi', 'Dokunmatik Ekranlar'],
    desc: 'Bilişim Teknolojileri, Dijital Oyun Geliştirme Kulübü ve Maker & Robotik Kulübü derslerinin yanı sıra İngilizce bölümünün bazı derslerine ev sahipliği yapmaktadır. Öğle teneffüslerinde genel kullanıma açıktır.',
  },
  {
    title: 'Windows Laboratuvarı — Lise',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80&auto=format',
    specs: ['24 Bilgisayar', 'Etkileşimli Akıllı Tahta', 'Uzaktan Kontrol Yazılımı'],
    desc: 'Bilgisayar Bilimi, BTEC IT, BTEC Web Design, Maker ve Robotik Kulübü derslerinin işlendiği ileri teknoloji laboratuvarı. Uzaktan kontrol yazılımı ile öğretmen ekranda bireysel yönlendirme yapabilmektedir.',
  },
  {
    title: 'Apple (iMac) Laboratuvarı',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80&auto=format',
    specs: ['24 iMac', 'Tüm Kademeler'],
    desc: '24 iMac bilgisayar kapasiteli laboratuvardan tüm öğrenciler yararlanabilmektedir. Dijital tasarım, medya üretimi ve yazılım projeleri için ideal bir çalışma ortamı sunmaktadır.',
  },
  {
    title: 'Fen Laboratuvarları — Ortaokul',
    img: 'https://images.unsplash.com/photo-1532094349884-543559059399?w=700&q=80&auto=format',
    specs: ['2 Laboratuvar', '24 Öğrenci Kapasiteli', '3D Modeller'],
    desc: 'Kuvvet ve hareket, maddenin özellikleri, ısı ve sıcaklık, hücre ve özellikleri gibi pek çok alanda deneyler yapılmaktadır. Geliştirilen deney föyleriyle çalışmaların takibi sağlanmaktadır.',
  },
  {
    title: 'Kimya Laboratuvarı — Lise',
    img: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=700&q=80&auto=format',
    specs: ['24 Öğrenci Kapasiteli', 'Tam Donanımlı'],
    desc: 'Madde ve atom konulu deneylerin yanı sıra kimyasal tepkime deneylerinin uygulandığı laboratuvarda gerekli tüm kimyasal malzemeler eksiksiz olarak bulunmaktadır.',
  },
  {
    title: 'Fizik Laboratuvarı — Lise',
    img: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=700&q=80&auto=format',
    specs: ['24 Öğrenci Kapasiteli', 'Gösteri Odası'],
    desc: 'Madde ve özellikleri, kuvvet ve hareket, ısı ve sıcaklık ile elektrostatik konularında gösteri ve öğrenci deneyleri gerçekleştirilmektedir. Gerektiğinde diğer fen laboratuvarlarından da destek alınmaktadır.',
  },
  {
    title: 'Biyoloji Laboratuvarı — Lise',
    img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=700&q=80&auto=format',
    specs: ['24 Öğrenci Kapasiteli', 'Mikroskoplar', 'Anatomik Modeller'],
    desc: 'Detaylı kesit gözlemleri için mikroskoplar, pH test materyalleri, iskelet modeli, insan anatomik yapı modeli, hücre modeli, hücre bölünmesi modeli ve DNA modeli gibi zengin materyallerle geniş çalışma olanakları sunulmaktadır.',
  },
];

export default function LaboratuvarlarPage() {
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
              Laboratuvarlar
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Bilim ve teknolojiyi yaşayarak öğrenmek için donanımlı laboratuvarlarımız; merakı araştırmaya, araştırmayı keşfe dönüştürür.
            </p>
          </motion.div>
        </div>
      </div>

      {/* İstatistikler */}
      <section style={{ padding: '3rem 0', background: 'var(--primary)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }} className="lab-stats">
            {[
              { val: '7', label: 'Laboratuvar' },
              { val: '3', label: 'Fen Lab (Lise)' },
              { val: '2', label: 'Bilgisayar Lab' },
              { val: '24', label: 'Kişi Kapasiteli' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Cards */}
      <section style={{ padding: '6rem 0 7rem', background: 'var(--off-white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Donanım</span>
            </div>
            <h2 className="section-title">Laboratuvar <span>Altyapımız</span></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="lab-grid">
            {LABS.map((lab, i) => (
              <motion.div key={lab.title} {...fadeUp(i * 0.05)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <img src={lab.img} alt={lab.title} style={{ width: '100%', height: '170px', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                      
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.3 }}>{lab.title}</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
                      {lab.specs.map(s => (
                        <span key={s} style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.07em', padding: '0.2rem 0.5rem', background: 'var(--off-white)', border: '1px solid var(--grey-light)', borderRadius: '3px', color: 'var(--primary)', textTransform: 'uppercase' }}>{s}</span>
                      ))}
                    </div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.75, flex: 1 }}>{lab.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .lab-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .lab-grid { grid-template-columns: 1fr !important; } .lab-stats { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </>
  );
}
