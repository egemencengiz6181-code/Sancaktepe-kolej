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

const LIBRARIES = [
  {
    level: 'Okul Öncesi',
    icon: '🌈',
    area: '57 m²',
    img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=700&q=80&auto=format',
    desc: 'Okul öncesi kütüphanemiz, anasınıfı bölümünde 57 m²\'lik bir alanda, minik öğrencilerimizin kendilerini rahat hissedecekleri ve kitaplara ilgi duyacakları şekilde tasarlanmış keyifli bir ortamdır. Yaş gruplarına uygun özenle seçilmiş koleksiyonumuz, çocukların kitaplarla erken yaşta tanışmasını sağlar.',
  },
  {
    level: 'İlköğretim',
    icon: '📖',
    area: '~200 m² / 12.000 Kitap',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&q=80&auto=format',
    desc: 'İki katlı yapısıyla yaklaşık 200 m²\'lik alanda 12.000 kitaplık zengin koleksiyonuyla öğrencilerimizin farklı ihtiyaçlarına cevap veren kütüphanemizde, tüm seviyelere düzenli kütüphane dersleri planlanmaktadır. Yazar söyleşileri, tematik günler ve kitap haftası etkinlikleriyle kütüphane bağı güçlendirilmektedir.',
  },
  {
    level: 'Lise',
    icon: '🎓',
    area: '200 m² / 2 Kat',
    img: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=700&q=80&auto=format',
    desc: '200 m²\'lik iki katlı ferah mimarisiyle hem bireysel hem grup çalışmalarına uygun esnek alanlar sunan lise kütüphanemiz; zengin basılı koleksiyonu ve dijital kaynaklarla akademik desteğin yanı sıra araştırma ve keşif odaklı öğrenme kültürünü teşvik eder.',
  },
];

const DATABASES = ['Tumble Book Library', 'Teen BookCloud', 'Britannica', 'EBSCO', 'Springer Link'];

export default function KutuphhanePage() {
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
              Kütüphane
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Kolej Sancaktepe kütüphaneleri; bilgiye erişim becerilerini geliştiren, eleştirel düşünceyi destekleyen ve yaşam boyu okuma sevgisi kazandıran çağdaş öğrenme merkezleridir.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vizyon */}
      <section style={{ padding: '6rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="vis-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&auto=format"
                alt="Kütüphane"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 50px rgba(35,46,92,0.15)' }}
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">Vizyonumuz</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Bilgi ve <span>Kültür Merkezi</span></h2>
              <P>Kolej Sancaktepe kütüphanelerinin amacı; geleceğin dünyasında aktif rol alan, merak eden, sorgulayan ve bilgiye değer katan bireyler yetiştiren, kültürler arası anlayışı güçlendiren bir öğrenme merkezi olmaktır.</P>
              <P>Kütüphanelerimiz, teknolojiyle desteklenen dinamik yapısı, çok dilli ve kapsayıcı kaynakları, yenilikçi hizmet anlayışı ve öğrenme topluluklarıyla ulusal ve uluslararası düzeyde örnek alınan bir bilgi merkezi olma hedefiyle çalışmaktadır.</P>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 kütüphane */}
      <section style={{ padding: '5rem 0 7rem', background: 'var(--off-white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Kütüphanelerimiz</span>
            </div>
            <h2 className="section-title">Her Kademede <span>Bir Kütüphane</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="lib-grid">
            {LIBRARIES.map((lib, i) => (
              <motion.div key={lib.level} {...fadeUp(i * 0.07)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                }}>
                  <img src={lib.img} alt={lib.level} style={{ width: '100%', height: '180px', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{lib.icon}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--grey)', background: 'var(--off-white)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>{lib.area}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{lib.level} Kütüphanesi</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{lib.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Koleksiyon & Hizmetler */}
      <section style={{ padding: '5rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="col-grid">
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">Koleksiyon</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Çok Dilli Kaynaklar</h3>
              <P>Koleksiyonumuz; Türkçe, İngilizce, Fransızca, Almanca, İspanyolca ve Rusça dillerinde okuma kitapları, araştırma ve danışma kaynakları, süreli yayınlar ve elektronik bilgi kaynaklarını kapsamaktadır.</P>
              <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem', marginTop: '1rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Dijital Veri Tabanları</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {DATABASES.map(db => (
                    <span key={db} style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, padding: '0.3rem 0.7rem', background: 'var(--white)', border: '1px solid var(--grey-light)', borderRadius: '4px', color: 'var(--primary)' }}>{db}</span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.08)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">Hizmetler</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Kütüphane Üyeliği</h3>
              <P>Tüm öğrencilerimiz ve çalışanlarımız kütüphanelerimizin doğal üyesidir. Öğrencilerimiz ders aralarında ve boş zamanlarında kendi kademe kütüphanesinden yararlanabilir.</P>
              <P>Kütüphane ekibimiz, öğretmenlerle iş birliği içinde öğrenme sürecini kütüphane dersleri ve etkinliklerle desteklemektedir. Bu derslerde kütüphane kullanımı, bilginin etik biçimde kullanılması, alıntı ve kaynakça oluşturma gibi beceriler kazandırılmaktadır.</P>
              <div style={{
                background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem', marginTop: '0.75rem',
                border: '1px solid var(--grey-light)',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.6rem' }}>Çalışma Saatleri</p>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>
                  <div><strong>Pzt – Per:</strong> 08:00 – 16:40</div>
                  <div><strong>Cuma:</strong> 08:00 – 13:30</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) { .lib-grid { grid-template-columns: 1fr !important; } .vis-grid { grid-template-columns: 1fr !important; } .col-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .lib-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
