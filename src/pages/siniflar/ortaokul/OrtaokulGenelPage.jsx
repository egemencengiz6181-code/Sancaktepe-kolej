import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const COLOR = '#e61936';

const SUB_LINKS = [
  { to: '/siniflar/ortaokul/brans-dersleri', label: 'Branş Dersleri' },
  { to: '/siniflar/ortaokul/uygulamalar-projeler', label: 'Uygulamalar ve Projeler' },
  { to: '/siniflar/ortaokul/pdr', label: "PDR'den Bakış" },
  { to: '/siniflar/ortaokul/haftalik-cizelge', label: 'Haftalık Çizelge' },
];

const SKILLS = [
  { title: 'Yarışma ve Olimpiyatlara Katılım', desc: 'Ulusal ve uluslararası akademik yarışmalarda temsil' },
  { title: 'Laboratuvar Uygulamaları', desc: 'Fen Bilimleri, Kimya ve Biyoloji laboratuvarlarında deneyler' },
  { title: 'Disiplinler Arası Proje Çalışmaları', desc: 'Farklı dersler arasında bütünleşik proje yaklaşımı' },
  { title: 'Uluslararası Programlar', desc: 'Oxford AQA, Eko-Okul ve uluslararası ağlarla bağlantı' },
  { title: 'Sanat ve Kültür Etkinlikleri', desc: 'Müzik, tiyatro, görsel sanatlar ve kültür gezileri' },
  { title: 'STEM ve Teknoloji', desc: 'FLL, robotik, kodlama ve mühendislik tasarım döngüsü' },
  { title: 'İletişim ve Liderlik', desc: 'Münazara, sunum ve kulüp liderliği deneyimleri' },
  { title: 'Çevre Bilinci', desc: 'Eko-Okul projesi ve sürdürülebilirlik uygulamaları' },
];

export default function OrtaokulGenelPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1a0610 0%, #8b0f1e 50%, #b01528 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Ortaokul</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: `${COLOR}30`, border: `1px solid ${COLOR}50`, borderRadius: '20px', padding: '0.3rem 0.85rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: COLOR, display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>5. – 8. Sınıf</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Ortaokul Eğitim<br />ve Öğretim
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            Kolej Sancaktepe Ortaokul kademesinde donanımlı sınıf ortamları ve laboratuvarlar, disiplinler arası çalışmalar ve 21. yüzyıl becerileriyle öğrencilerimizi geleceğe hazırlıyoruz.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.55 }} style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            {SUB_LINKS.map((l) => (
              <Link key={l.to} to={l.to} style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '5px', padding: '0.5rem 1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = COLOR; e.currentTarget.style.borderColor = COLOR; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                {l.icon} {l.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${COLOR}, #8b0f1e, transparent)` }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3.5rem', alignItems: 'start' }} className="ortaokul-grid">
            {/* MAIN */}
            <div>
              <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: COLOR, marginBottom: '0.75rem' }}>Vizyon</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Eleştirel Düşünen, Araştıran ve Üretici Bireyler</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>
                  Kolej Sancaktepe Ortaokul kademesinde öğrencilerimiz; ulusal ve uluslararası platformlarda temsil edilir, donanımlı sınıf ortamları ve laboratuvarlarda çalışır, disiplinler arası projelerle düşünme becerilerini geliştirir. Her öğrencimizin güçlü bir akademik temel üzerinde merak etme, sorgulama ve yaratma becerilerini kazanmasını amaçlıyoruz.
                </p>
              </motion.div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="skills-grid">
                {SKILLS.map((s, i) => (
                  <motion.div key={i} {...fadeUp(0.06 + i * 0.04)}>
                    <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(35,46,92,0.08)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      
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
                        onMouseEnter={e => e.currentTarget.style.background = `${COLOR}15`}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--off-white)'}
                      >
                         {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp(0.15)}>
                <div style={{ background: COLOR, borderRadius: '12px', padding: '1.75rem', boxShadow: '0 8px 30px rgba(230,25,54,0.25)' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Kayıt ve Bilgi</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '1.25rem' }}>Ortaokul kademesi hakkında daha fazla bilgi almak için kayıt ofisimizle iletişime geçin.</p>
                  <a href="tel:02166060833" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.06em', color: COLOR, background: '#fff', borderRadius: '6px', padding: '0.65rem 1rem', textAlign: 'center', textDecoration: 'none', marginBottom: '0.5rem' }}>0216 606 0 833</a>
                  <a href="mailto:info@kolejsancaktepe.com" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', textAlign: 'center', textDecoration: 'none' }}>info@kolejsancaktepe.com</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .ortaokul-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
