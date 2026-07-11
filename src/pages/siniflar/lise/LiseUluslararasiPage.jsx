import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.85rem' }}>{children}</p>
);

const BList = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem' }}>
    {items.map((it, i) => (
      <li key={i} style={{ display: 'flex', gap: '0.6rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.35rem' }}>
        <span style={{ color: 'var(--red)', flexShrink: 0 }}>•</span>{it}
      </li>
    ))}
  </ul>
);

const PROGRAMS = [
  {
    id: 'ap',
    tag: 'AP — Advanced Placement',
    color: '#232e5c',
    tagBg: 'rgba(35,46,92,0.08)',
    tagBorder: 'rgba(35,46,92,0.2)',
  },
  {
    id: 'kanada',
    tag: 'Kanada Uluslararası Öğrenci Değişim Programı',
    color: '#dc2626',
    tagBg: 'rgba(220,38,38,0.08)',
    tagBorder: 'rgba(220,38,38,0.2)',
  },
  {
    id: 'edinburgh',
    tag: 'Uluslararası Gençlik Ödülü — Türkiye',
    color: '#7c3aed',
    tagBg: 'rgba(124,58,237,0.08)',
    tagBorder: 'rgba(124,58,237,0.2)',
  },
];

export default function LiseUluslararasiPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/lise" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Lise</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Uluslararası Programlar</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Uluslararası Programlar
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.85 }}>
            Öğrencilerimize küresel perspektif, uluslararası sertifika ve değişim deneyimi sunan programlar.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {PROGRAMS.map((p) => (
              <a key={p.id} href={`#${p.id}`} style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.35rem 0.7rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
              >{p.icon} {p.tag}</a>
            ))}
          </motion.div>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      {/* AP */}
      <section id="ap" style={{ padding: '5.5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#232e5c', background: 'rgba(35,46,92,0.08)', border: '1px solid rgba(35,46,92,0.2)', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>AP — Advanced Placement</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>AP (Advanced Placement / İleri Seviye Programlara Yerleştirme)</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>AP; SAT sınavlarını düzenleyen kurum olan College Board tarafından yürütülen bir programdır. Öğrencilerin okulumuzda başlangıç seviyesindeki üniversite derslerini almalarına olanak tanır; böylece öğrenciler üniversiteye başladıklarında bazı derslerden muaf tutulabilir ve/ya daha ileri seviyede dersler alabilirler.</P>
            <P>Genellikle AP dersleri 11. sınıfta başlar. Sınıfların mevcudu çoğunlukla azdır ve haftalık ders saati sayısı, AP dersine göre 5 ila 10 saat arasında değişir. Yurt dışında (ya da AP derslerini tanıyan Türkiye'deki üniversitelerde) öğrenim görmeyi isteyen öğrenciler, genellikle 3 ya da daha yüksek bir not alma (5 en yüksek nottur) amacını güderek iki AP dersi alırlar.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem 2rem', border: '1px solid var(--grey-light)', borderLeft: '4px solid #232e5c', boxShadow: '0 2px 12px rgba(35,46,92,0.05)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>10. Sınıf Rehberlik Süreci</p>
            <P>Okulumuzda öğrencilere; bu yolu izlemek isterlerse hangi AP programının kendileri için en uygun olacağı konusunda 10. sınıfta rehberlik edilir. Detaylı bilgi için <Link to="/programlar/ap-sinav-merkezi" style={{ color: 'var(--red)', fontWeight: 700 }}>AP Sınav Merkezi</Link> sayfamızı inceleyebilirsiniz.</P>
          </motion.div>
        </div></div>
      </section>

      {/* KANADA */}
      <section id="kanada" style={{ padding: '5.5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#dc2626', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Kanada Değişim Programı</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Kanada Uluslararası Öğrenci Değişim Programı</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Türk Eğitim Derneği ile Kanada Eğitim Bakanlığı ortaklığı sonucunda okulumuz öğrencileri Kanada Uluslararası Öğrenci Değişim Programı'na katılabilmektedir.</P>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1.25rem 0' }} className="kanada-cards">
            {[
              { label: 'Program Süresi', body: 'Bir ay ya da bir yıllık değişim programı seçenekleri mevcuttur.' },
              { label: 'Konaklama', body: 'Öğrenciler Kanadalı ailelerin yanında kalarak yerel okullarda eğitimlerine devam ederler.' },
              { label: 'Kazanımlar', body: 'Güvenli bir ortamda çeşitli kültürleri tanıma ve farklı bir ülkede yaşamı tecrübe etme olanağı.' },
            ].map((c, i) => (
              <motion.div key={i} {...fadeUp(0.08 + i * 0.04)}>
                <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)', height: '100%' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#dc2626', marginBottom: '0.5rem' }}>{c.label}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div></div>
      </section>

      {/* EDİNBURGH */}
      <section id="edinburgh" style={{ padding: '5.5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c3aed', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Uluslararası Gençlik Ödülü</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Uluslararası Gençlik Ödülü — Türkiye</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Okulumuz, Edinburgh Dükü Uluslararası Ödül Programı'na dahil olmakla gurur duyar. Program, 14 yaş ve üstü öğrencilere açık olup kişisel sınırları aşma ve öğrencileri özgeçmişlerini güçlü kılacak yeni becerileri kazanmaları ile üniversite başvurularında başarılı olmaları için destekleme amacını taşır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem 2rem', border: '1px solid var(--grey-light)', boxShadow: '0 2px 12px rgba(35,46,92,0.05)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '0.75rem' }}>Öğrenciler Neler Yapabilir?</p>
            <BList items={[
              'Topluma hizmet projelerine katılabilirler',
              'Kültürel ve doğa gezilerine iştirak edebilirler',
              'Beceri odaklı programlarda yer alabilirler',
            ]} />
          </motion.div>
        </div></div>
      </section>

      <style>{`
        @media (max-width: 700px) { .kanada-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
