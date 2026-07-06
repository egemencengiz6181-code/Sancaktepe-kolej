import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const PdfFlipBook = lazy(() => import('../../../components/PdfFlipBook'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.85rem' }}>{children}</p>
);

const ACTIVITIES = [
  'Yaratıcı Drama', 'Dans', 'Müzik', 'Beden Eğitimi', 'Görsel Sanatlar',
  'Bilişim Teknolojileri', 'Satranç', 'Çocuk Yogası', 'Mutfak Etkinliği',
  'Demokrasi Eğitimi', 'Second Step', 'Düşünme Becerileri Eğitim Programı: Akıl Oyunları',
  'GEMS & Eğlenceli Bilim', 'SCAMPER (Yaratıcılık Etkinlikleri)',
  'Geziler ve Sosyal Etkinlikler', 'Kütüphane Etkinliği',
];

const SUB_LINKS = [
  { to: '/siniflar/okul-oncesi/brans-dersleri', icon: '📚', label: 'Branş Dersleri' },
  { to: '/siniflar/okul-oncesi/pdr', icon: '💚', label: "PDR'den Bakış" },
  { to: '/siniflar/okul-oncesi/haftalik-cizelge', icon: '🗓️', label: 'Haftalık Zaman Çizelgesi' },
];

export default function OkulOncesiGenelPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a2347 0%, #232e5c 55%, #2e3d7a 100%)', padding: '8rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
            <Link to="/siniflar/okul-oncesi" style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Okul Öncesi</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Genel Bilgiler</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '4px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#f59e0b', textTransform: 'uppercase' }}>Anaokulu · 4–5 Yaş</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Heyecanla Atılan İlk Adımlar
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: 1.85 }}>
            Okul öncesi yıllar, kişilik gelişiminin ve öğrenme süreçlerinin en değerli dönemidir.
          </motion.p>
          {/* Alt sayfa linkleri */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} style={{ display: 'flex', gap: '0.75rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {SUB_LINKS.map((l) => (
              <Link key={l.to} to={l.to} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '5px', padding: '0.5rem 1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                <span>{l.icon}</span>{l.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, #f59e0b, var(--primary), transparent)' }} />

      {/* Genel Bilgiler */}
      <section style={{ padding: '5rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }} className="oo-main-grid">
            <div>
              <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
                <P>Tüm yaş gruplarında farklılaştırılmış eğitim olanaklarının sağlandığı çok yönlü bir eğitim programını, güvenli bir öğrenme çevresi yaratarak uygulamayı hedefleyen okulumuz; 4 ve 5 yaş grubu çocukları için tasarlanmış farklı öğrenme alanlarına sahiptir.</P>
                <P>Okul öncesi öğrencilerine özel giriş noktası, bahçe alanı (tarım ve ekoloji, açık sınıf, keşif köşeleri ve oyun alanı) derslikler, STEAM &amp; Teknoloji atölyesi, yemekhane, kütüphane, fen ve doğa atölyesi, jimnastik salonu ve görsel sanatlar atölyeleriyle planlanmıştır.</P>
                <P>Sınıflarımızda iki sınıf öğretmeni ve bir sorumlu İngilizce öğretmeni (Native) bulunmaktadır.</P>
              </motion.div>

              <motion.div {...fadeUp(0.05)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '2rem', border: '1px solid var(--grey-light)', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Eğitim Programı Temelleri</h3>
                <P>Türk Eğitim Derneği tarafından oluşturulan bir komisyon tarafından geliştirilen programımız, MEB Okul Öncesi Eğitim Genel Müdürlüğü'nün belirlediği esasları temel almaktadır.</P>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '1.25rem' }}>
                  {[
                    { tag: 'UbD', label: 'Understanding by Design', desc: 'Anlamlı Ders Tasarımı' },
                    { tag: 'Second Step', label: 'İkinci Adım Programı', desc: 'Sosyal ve Duygusal Beceriler' },
                    { tag: 'P4C', label: 'Çocuklar için Felsefe', desc: 'Felsefi düşünme temeli' },
                    { tag: 'Farklılaştırılmış', label: 'Bireysel Yaklaşım', desc: 'Kişisel ilgi ve ihtiyaçlara göre' },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(35,46,92,0.04)', borderRadius: '8px', padding: '0.85rem 1rem', border: '1px solid rgba(35,46,92,0.08)' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b', display: 'block', marginBottom: '0.2rem' }}>{item.tag}</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)', display: 'block' }}>{item.label}</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--grey)', display: 'block' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.08)}>
                <P>Eğitim ve öğretimi zenginleştirmek amacıyla bilişsel, fiziksel, sosyal-duygusal, dil ve öz bakım gelişim alanlarını gelişimsel ihtiyaçlar çerçevesinde destekleyecek farklı yöntem, teknik ve uygulamalardan da yararlanılmaktadır. Okulumuzda yapılan tüm etkinlikler, disiplinler arası yatay ve dikey ilişkiler kurularak planlanır ve uygulanır.</P>
                <P>Kolej Sancaktepe'deki ilk yıllarında Ulu Önderimiz Mustafa Kemal Atatürk'ün ilke, inkılap ve değerlerini benimseyen öğrencilerimiz; yüksek aidiyet duygusuyla çok yönlü becerileriyle kendi keşif yolculuklarına çıkarlar. Yoğun İngilizce programıyla tanışarak ilkokul yıllarına güvenle adım atarlar.</P>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem', border: '1px solid var(--grey-light)', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>Fiziksel Ortam</p>
                {['Özel giriş noktası', 'Bahçe: tarım & ekoloji alanı', 'Açık sınıf & keşif köşeleri', 'STEAM & Teknoloji atölyesi', 'Fen ve doğa atölyesi', 'Jimnastik salonu', 'Görsel sanatlar atölyesi', 'Kütüphane & yemekhane'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.6rem', fontFamily: 'var(--font-sans)', fontSize: '0.84rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '0.4rem' }}>
                    <span style={{ color: '#f59e0b', flexShrink: 0 }}>•</span>{item}
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.15)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem', border: '1px solid var(--grey-light)', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>Bu Bölümdeki Sayfalar</p>
                {[{ to: '/siniflar/okul-oncesi', icon: '🌟', label: 'Kademeye Genel Bakış' }, ...SUB_LINKS].map((l) => (
                  <Link key={l.to} to={l.to} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', padding: '0.6rem 0', borderBottom: '1px solid var(--grey-light)' }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = '0.4rem'; }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', padding: '0.6rem 0', borderBottom: '1px solid var(--grey-light)', transition: 'padding 0.2s' }}
                  >
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{l.icon}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{l.label}</span>
                    <span style={{ marginLeft: 'auto', color: 'var(--red)', fontSize: '0.7rem' }}>→</span>
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Etkinlikler */}
      <section style={{ padding: '5rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Program İçeriği</span>
            </div>
            <h2 className="section-title">UbD Anlayışıyla <span>Planlanan Etkinlikler</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {ACTIVITIES.map((act, i) => (
              <motion.div key={i} {...fadeUp(i * 0.03)}>
                <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '0.85rem 1.1rem', border: '1px solid var(--grey-light)', display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.08)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--off-white)'; e.currentTarget.style.borderColor = 'var(--grey-light)'; }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)' }}>{act}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .oo-main-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* P4C BROŞÜR */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #060e1c 0%, #0a1628 50%, #0e2044 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(245,158,11,0.7)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Program Broşürü</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(245,158,11,0.7)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
              P4C <span style={{ color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>Tanıtım Kitaçığı</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', maxWidth: '420px', margin: '0.65rem auto 0', lineHeight: 1.8 }}>
              Felsefe temelinli düşünme programımızı sayfaları çevirerek keşfedin.
            </p>
          </motion.div>

          <Suspense fallback={<div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Yükleniyor...</div>}>
            <PdfFlipBook url="/pdf%20ler/web%20p4c%20bro%C5%9F%C3%BCr.pdf" />
          </Suspense>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/pdf%20ler/web%20p4c%20bro%C5%9F%C3%BCr.pdf" download style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.75rem 1.75rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            >⬇ PDF İndir</a>
          </div>
        </div>
      </section>
    </>
  );
}
