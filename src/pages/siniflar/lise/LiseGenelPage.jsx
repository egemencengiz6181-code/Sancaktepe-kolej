import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const COLOR = '#232e5c';

const SUB_LINKS = [
  { to: '/siniflar/lise/uluslararasi-programlar', label: 'Uluslararası Programlar', icon: '🌍' },
  { to: '/siniflar/lise/akademik-bolumler', label: 'Akademik Bölümler', icon: '📚' },
  { to: '/siniflar/lise/rehberlik-kariyer', label: 'Rehberlik ve Kariyer', icon: '💼' },
  { to: '/siniflar/lise/yurt-ici-universite', label: 'Yurt İçi Üniversite', icon: '🎓' },
  { to: '/siniflar/lise/yurt-disi-universite', label: 'Yurt Dışı Üniversite', icon: '✈️' },
  { to: '/siniflar/lise/haftalik-cizelge', label: 'Haftalık Çizelge', icon: '🗓️' },
];

const SKILLS = [
  { icon: '🏆', title: 'Ulusal & Uluslararası Platformlar', desc: 'Bilim, kültür, sanat ve spor yarışmalarında temsil' },
  { icon: '🔬', title: 'Tam Donanımlı Laboratuvarlar', desc: 'Fizik, kimya, biyoloji laboratuvarları ve bilgisayar sınıfları' },
  { icon: '💡', title: 'Disiplinler Arası Çalışmalar', desc: 'Farklı alanları birleştiren proje ve araştırmalar' },
  { icon: '🎓', title: 'AP Programı', desc: 'College Board onaylı ileri seviye üniversite dersleri' },
  { icon: '🌐', title: 'Yoğun Yabancı Dil Eğitimi', desc: '9–10. sınıflarda İngilizce matematik ve fen dersleri' },
  { icon: '🎭', title: 'Kültür & Sanat Ortamları', desc: 'Müzik atölyeleri, görsel sanatlar, tiyatro ve konserler' },
  { icon: '🤝', title: 'Toplum Hizmeti', desc: 'Değerler eğitimine katkı sağlayan sosyal sorumluluk projeleri' },
  { icon: '📌', title: 'Kariyer Danışmanlığı', desc: 'Yurt içi ve yurt dışı üniversite hazırlık süreci desteği' },
];

export default function LiseGenelPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,25,54,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Lise</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '20px', padding: '0.3rem 0.85rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--red)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Hazırlık + 9. – 12. Sınıf</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Lise Eğitim<br />ve Öğretim
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            Kolej Sancaktepe Lisesi; 1 yıl hazırlık ve 4 yıl lise olmak üzere "Hazırlık Sınıfı Bulunan Özel Anadolu Lisesi" statüsüne sahiptir. 21. yüzyıl becerilerine sahip, yaratıcı ve özgür düşünen bireyler yetiştiriyoruz.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.55 }} style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            {SUB_LINKS.map((l) => (
              <Link key={l.to} to={l.to} style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px', padding: '0.5rem 1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >{l.icon} {l.label}</Link>
            ))}
          </motion.div>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3.5rem', alignItems: 'start' }} className="lise-grid">

            {/* MAIN */}
            <div>
              <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2.5rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid var(--primary)', marginBottom: '2.5rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1rem' }}>Hakkımızda</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '0.85rem' }}>
                  Kolej Sancaktepe Lisesi; 1 yıl hazırlık ve 4 yıl lise olmak üzere "Hazırlık Sınıfı Bulunan Özel Anadolu Lisesi" statüsüne sahiptir. Lise, 2016–2017 Akademik Yılında hazırlık sınıfı ile eğitim ve öğretime başlamıştır.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '0.85rem' }}>
                  Eğitim ve öğretim programlarımızın yanı sıra öğrencilerimize kendilerini ifade edecekleri ulusal ve uluslararası platformlar; bilim, kültür, sanat ve spor ortamları sunarız. Böylece onların ilgi ve yetenek alanlarını keşfetmelerini sağlarız. Yüksek bir bilinç düzeyiyle teknolojiyi etkin ve olumlu anlamda kullanmalarını hedefleriz.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '0.85rem' }}>
                  Her ders için özel öğrenme alanları bulunan lise binamızda kütüphane, müzik ve görsel sanatlar atölyeleri, spor salonları, kulüp alanları, bilgisayar, fizik, kimya, biyoloji laboratuvarlarımızda üst düzey akademik programımızı sosyal ve kültürel programlarımıza paralel olarak sunarız.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '0.85rem' }}>
                  Yürüttüğümüz disiplinler arası çalışmalarda amacımız öğrencilerimizin öğrendikleri bilgileri kullanabilecekleri farklı ortamlarda yeni deneyimlerle zenginleşmelerine olanak sağlamaktır. Öğrencilerimizin ulusal ve evrensel değerlerin farkında entelektüel bireyler olarak yetişmeleri adına düzenlediğimiz toplum hizmeti çalışmaları değerler eğitimine önemli ölçüde katkı sağlamaktadır.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, margin: 0 }}>
                  Tüm çalışmalarımızı şekillendiren ana düşüncemiz; öğrencilerimizi, 21. yüzyıl becerilerine sahip, entelektüel beğenileri gelişmiş, yaratıcı ve özgür düşünen, ülkesine karşı sorumluluklarının farkında, geleceğe umutla bakan bir dünya insanı olarak donanımlı hale getirmektir.
                </p>
              </motion.div>

              <motion.h2 {...fadeUp(0.05)} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>Öne Çıkan Özellikler</motion.h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="skills-grid">
                {SKILLS.map((s, i) => (
                  <motion.div key={i} {...fadeUp(0.07 + i * 0.04)}>
                    <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(35,46,92,0.08)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.6rem' }}>{s.icon}</span>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.3rem' }}>{s.title}</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <motion.div {...fadeUp(0.1)}>
                <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>Bu Bölümdeki Sayfalar</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {SUB_LINKS.map((l) => (
                      <Link key={l.to} to={l.to} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.6rem 0.85rem', borderRadius: '7px', background: 'var(--off-white)', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--primary)', textDecoration: 'none', transition: 'background 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(35,46,92,0.08)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--off-white)'}
                      >
                        <span>{l.icon}</span> {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp(0.15)}>
                <div style={{ background: 'var(--primary)', borderRadius: '12px', padding: '1.75rem', boxShadow: '0 8px 30px rgba(35,46,92,0.25)' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Kayıt ve Bilgi</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '1.25rem' }}>Lise kademesi hakkında daha fazla bilgi almak için kayıt ofisimizle iletişime geçin.</p>
                  <a href="tel:02166060833" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--primary)', background: '#fff', borderRadius: '6px', padding: '0.65rem 1rem', textAlign: 'center', textDecoration: 'none', marginBottom: '0.5rem' }}>0216 606 0 833</a>
                  <a href="mailto:info@kolejsancaktepe.com" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', textAlign: 'center', textDecoration: 'none' }}>info@kolejsancaktepe.com</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .lise-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
