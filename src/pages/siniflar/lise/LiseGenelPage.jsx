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
  { to: '/siniflar/lise/uluslararasi-programlar', label: 'Uluslararası Programlar' },
  { to: '/siniflar/lise/akademik-bolumler', label: 'Akademik Bölümler' },
  { to: '/siniflar/lise/rehberlik-kariyer', label: 'Rehberlik ve Kariyer' },
  { to: '/siniflar/lise/yurt-ici-universite', label: 'Yurt İçi Üniversite' },
  { to: '/siniflar/lise/yurt-disi-universite', label: 'Yurt Dışı Üniversite' },
  { to: '/siniflar/lise/haftalik-cizelge', label: 'Haftalık Çizelge' },
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
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '3rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid var(--primary)', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textAlign: 'center' }}>
                Kolej Sancaktepe TED AD LİSESİ
              </h2>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--red)', fontStyle: 'italic', marginBottom: '2rem', textAlign: 'center' }}>
                Geleceği Okuyan, Yönünü Belirleyen Gençler
              </h3>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '1rem' }}>
                Kolej Sancaktepe TED AD Lisesi, öğrencileri yalnızca üniversiteye değil, <strong>hayata ve dünyaya</strong> hazırlayan çok yönlü bir eğitim anlayışı sunar.
              </p>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '2.5rem' }}>
                Lise programımız; <strong>YKS ve AP perspektifleriyle uyumlu</strong>, akademik derinliği yüksek ve öğrencinin bireysel yolunu destekleyen bir yapıya sahiptir.
              </p>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem' }}>Eğitim Yaklaşımımız</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2.5rem' }}>
                {[
                  'Akademik derinleşme ve disiplinlerarası öğrenme',
                  'Uluslararası bakış açısı',
                  'Mentörlük ve kariyer rehberliği',
                  'Proje, araştırma ve üretim odaklı çalışmalar'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.85rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--red)', flexShrink: 0, fontSize: '1.2rem', lineHeight: 1 }}>●</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem' }}>Program İçeriği</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2.5rem' }}>
                {[
                  'Alan dersleri (sayısal, sözel, eşit ağırlık)',
                  'Yoğun İngilizce ve akademik dil becerileri',
                  '2.yabancı dil (Almanca)',
                  'AP / hazırlık modülleri',
                  'Sosyal sorumluluk ve liderlik projeleri',
                  'Okul dışı etkinlikler ve üniversite bağlantıları',
                  'Rehberlik ve bireysel mentörlük'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.85rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--red)', flexShrink: 0, fontSize: '1.2rem', lineHeight: 1 }}>●</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem' }}>Hedefimiz</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, margin: 0 }}>
                Kendi yolunu çizebilen, dünyayı anlayan, sorumluluk alan ve geleceğe hazır bireyler.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
