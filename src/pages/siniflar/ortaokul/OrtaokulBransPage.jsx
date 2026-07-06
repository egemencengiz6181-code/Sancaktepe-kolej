import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.85rem' }}>{children}</p>
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

const NumList = ({ items }) => (
  <ol style={{ paddingLeft: '1.2rem', margin: '0 0 0.85rem' }}>
    {items.map((it, i) => (
      <li key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.3rem' }}>{it}</li>
    ))}
  </ol>
);

const SubHeading = ({ children }) => (
  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginTop: '1.25rem', marginBottom: '0.6rem' }}>{children}</h4>
);

const SUBJECTS = [
  { id: 'turkce', icon: '📖', tag: 'Türkçe', color: '#2563eb' },
  { id: 'matematik', icon: '🔢', tag: 'Matematik', color: '#7c3aed' },
  { id: 'sosyal', icon: '🌍', tag: 'Sosyal Bilgiler / T.C. İnkılap', color: '#059669' },
  { id: 'fen', icon: '🔬', tag: 'Fen Bilimleri', color: '#0891b2' },
  { id: 'bilisim', icon: '💻', tag: 'Bilişim Teknolojileri', color: '#7c3aed' },
  { id: 'ingilizce', icon: '🗣️', tag: 'İngilizce', color: '#f59e0b' },
  { id: 'ikinci-yabanci', icon: '🌐', tag: 'İkinci Yabancı Diller', color: '#db2777' },
  { id: 'beden', icon: '⚽', tag: 'Beden Eğitimi', color: '#16a34a' },
  { id: 'muzik', icon: '🎵', tag: 'Müzik', color: '#db2777' },
  { id: 'din', icon: '📿', tag: 'Din Kültürü ve Ahlak Bilgisi', color: '#92400e' },
];

export default function OrtaokulBransPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1a0610 0%, #8b0f1e 50%, #b01528 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/ortaokul" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Ortaokul</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Branş Dersleri</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Branş Dersleri
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.55 }} style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {SUBJECTS.map((s) => (
              <a key={s.id} href={`#${s.id}`} style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.35rem 0.7rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
              >{s.icon} {s.tag}</a>
            ))}
          </motion.div>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), #8b0f1e, transparent)' }} />

      {/* TÜRKÇE */}
      <section id="turkce" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>📖</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2563eb', background: '#2563eb12', border: '1px solid #2563eb25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Türkçe</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Türkçe</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Türkçe dersimizde tematik yaklaşım esas alınarak hazırlanan müfredatımızda okuma ve yazma kazanımları metin içi, metin dışı ve metinler arası okuma yoluyla anlam oluşturmayı sağlayacak şekilde yapılandırılmıştır. Kazanımların yapısı ve hiyerarşisi, öğrencilerin temel dil becerilerinin yanı sıra üst düzey bilişsel becerilerini geliştirmelerine katkı sağlar.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubHeading>8. Sınıf — Hızlı Okuma</SubHeading>
            <P>8. sınıf öğrencilerimize yönelik hızlı okuma programı ile okuma hızı ve anlama düzeyinin eş zamanlı geliştirilmesi hedeflenmektedir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Bölüm Etkinlikleri</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Kitap Fuarı', 'Öğrenci Yayın Organları', 'Kelime Yarışmaları', 'Yazar Buluşmaları'].map((ev, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#2563eb', background: '#2563eb0f', border: '1px solid #2563eb25', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{ev}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* MATEMATİK */}
      <section id="matematik" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🔢</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c3aed', background: '#7c3aed12', border: '1px solid #7c3aed25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Matematik</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Matematik</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Ortaokul Matematik müfredatımız kavramsal anlama, akıl yürütme ve problem çözme becerilerinin bütünleşik gelişimine odaklanır. Öğrencilerimiz gerçek yaşam bağlamında matematiksel düşünmeyi uygular.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubHeading>Yarışmalar ve Etkinlikler</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Uluslararası Matematik Olimpiyatları', 'TÜBİTAK Matematik Projeleri', 'Ulusal Matematik Yarışmaları', 'LGS Hazırlık'].map((ev, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#7c3aed', background: '#7c3aed0f', border: '1px solid #7c3aed25', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{ev}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* SOSYAL BİLGİLER */}
      <section id="sosyal" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🌍</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#059669', background: '#05966912', border: '1px solid #05966925', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Sosyal Bilgiler / T.C. İnkılap Tarihi</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Sosyal Bilgiler ve T.C. İnkılap Tarihi</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Öğrencilerimiz tarih, coğrafya, ekonomi ve yurttaşlık bilgisi alanlarını entegre bir bakış açısıyla ele alır. Birincil kaynaklar, haritalar ve tartışma etkinlikleri ile eleştirel düşünme öne çıkarılır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Yaklaşımımız</SubHeading>
            <BList items={[
              'Birincil ve ikincil kaynaklar ile tarihsel düşünme',
              "Öğrencilerimizin vatan bilinci ve Atatürk ilkelerini kavraması",
              'Güncel olaylar ile sosyal bilgiler kazanımlarının ilişkilendirilmesi',
              'Tartışma, münazara ve sosyal katılım etkinlikleri',
            ]} />
          </motion.div>
        </div></div>
      </section>

      {/* FEN BİLİMLERİ */}
      <section id="fen" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🔬</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0891b2', background: '#0891b212', border: '1px solid #0891b225', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Fen Bilimleri</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Fen Bilimleri</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Ortaokul Fen Bilimleri derslerimizde biyoloji, kimya ve fizik alanları entegre bir yaklaşımla ele alınır. Donanımlı laboratuvarlarımızda yürütülen deneylerle bilimsel araştırma becerileri kazandırılır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubHeading>Laboratuvar ve Yarışmalar</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['TÜBİTAK Bilim Projeleri', 'Bilim Fuarı', 'Fen Olimpiyatları', 'Robotik ve Tasarım'].map((ev, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#0891b2', background: '#0891b20f', border: '1px solid #0891b225', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{ev}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* BİLİŞİM */}
      <section id="bilisim" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>💻</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c3aed', background: '#7c3aed12', border: '1px solid #7c3aed25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Bilişim Teknolojileri</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Bilişim Teknolojileri</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>5. sınıfta dersler İngilizce, 6–8. sınıflarda ise Türkçe yürütülmektedir. Her öğrenciye bir bilgisayar düşecek şekilde Mac ve PC laboratuvarları kullanılmaktadır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Katılınan Yarışma ve Etkinlikler</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['FLL (First Lego League)', 'MakeX Robot Turnuvası', 'Dijital Oyun Geliştirme', 'Kodu Cup Türkiye', 'Scratch Günü'].map((ev, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#7c3aed', background: '#7c3aed0f', border: '1px solid #7c3aed25', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{ev}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* İNGİLİZCE */}
      <section id="ingilizce" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🗣️</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b', background: '#f59e0b12', border: '1px solid #f59e0b25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>İngilizce</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>İngilizce</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Kolej Sancaktepe'nin ortaokul İngilizce programı uluslararası standartlara göre yapılandırılmıştır. Oxford AQA GCSE müfredatı esas alınarak İngilizce dil becerileri sistematik biçimde geliştirilir.</P>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '1.25rem 0' }}>
            {[
              { label: 'Oxford AQA GCSE', body: 'Uluslararası geçerliliğe sahip Oxford AQA GCSE müfredatı ile ortaokul İngilizce eğitimi verilir.' },
              { label: '7. Sınıf — Oxford Test of English', body: '7. sınıf öğrencilerimiz Oxford Test of English sınavına girerek uluslararası düzeyde İngilizce yeterliliklerini belgeler.' },
            ].map((c, i) => (
              <motion.div key={i} {...fadeUp(0.08 + i * 0.04)}>
                <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)', height: '100%' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '0.5rem' }}>{c.label}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div></div>
      </section>

      {/* İKİNCİ YABANCI */}
      <section id="ikinci-yabanci" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🌐</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#db2777', background: '#db277712', border: '1px solid #db277725', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>İkinci Yabancı Diller</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>İkinci Yabancı Diller</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Kolej Sancaktepe'de öğrencilerimiz 4. sınıfta seçtikleri ikinci yabancı dilde (Almanca, Fransızca, İspanyolca veya Rusça) ortaokul boyunca eğitim almaya devam ederler. Avrupa Diller Ortak Çerçeve Programı (A1–B1) hedefleri doğrultusunda yapılandırılan programımızda uluslararası sınav hazırlığı da yer alır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.75rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Uluslararası Sınav Fırsatları</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['DELF (Fransızca)', 'DELE (İspanyolca)', 'FIT (Almanca)', 'TORFL (Rusça)'].map((s, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#db2777', background: '#db27770f', border: '1px solid #db277725', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{s}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* BEDEN EĞİTİMİ */}
      <section id="beden" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>⚽</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#16a34a', background: '#16a34a12', border: '1px solid #16a34a25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Beden Eğitimi</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Beden Eğitimi</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>K12 bütünlüğünde Beden Eğitimi Bölümü olarak sporu yaşam felsefesi haline getirmeyi kendine amaç edinen, sportif yaşam hedeflerine ulaşan bireyler yetiştiriyoruz. Ortaokul kademesinde öğrencilerimiz branş sporlarında derinleşir ve okul takımlarında yarışır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Ortaokul Spor Branşları</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Basketbol', 'Voleybol', 'Futbol', 'Yüzme', 'Tenis', 'Hentbol', 'Atletizm', 'Badminton'].map((s, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#16a34a', background: '#16a34a0f', border: '1px solid #16a34a25', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{s}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* MÜZİK */}
      <section id="muzik" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🎵</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#db2777', background: '#db277712', border: '1px solid #db277725', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Müzik</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Müzik</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>5. sınıfta müzik eğitimi Başlangıç ve Teori derslerini kapsar. 6–8. sınıflarda ise Koro, Orkestra ve Çalgı seçenekleriyle branşlaşma gerçekleşir. Öğrencilerimiz yıl boyunca çeşitli konser ve etkinliklerde sahne alır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.75rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Konser ve Etkinlikler</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Okul Korosu', 'Yıl Sonu Konseri', 'Sokak Çalgıcıları Festivali', 'Okul Orkestrası'].map((ev, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#db2777', background: '#db27770f', border: '1px solid #db277725', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{ev}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* DİN KÜLTÜRÜ */}
      <section id="din" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>📿</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#92400e', background: '#92400e12', border: '1px solid #92400e25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Din Kültürü ve Ahlak Bilgisi</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Din Kültürü ve Ahlak Bilgisi</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Ortaokul Din Kültürü ve Ahlak Bilgisi derslerimiz, millî eğitimin genel amaçları ve dersin özel amaçları üzerine kurulmuş bir programla yürütülmekte; program bilgi, beceri ve değer kazandırmayı hedeflemektedir. Derslerimiz, öğrencilerin kendi dinini tanımasını ve farklı inanç sistemlerine saygılı, anlayışlı bireyler olarak yetişmesini destekler.</P>
          </motion.div>
        </div></div>
      </section>
    </>
  );
}
