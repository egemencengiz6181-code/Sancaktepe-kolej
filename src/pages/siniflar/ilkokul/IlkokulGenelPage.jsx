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

const SKILLS = [
  'Bilgiyi üreten', 'Ürettiğini gerçek hayatta kullanabilen', 'Problem çözebilen',
  'Eleştirel düşünebilen', 'Girişimci ve inisiyatif alan', 'Dijital yetkinliği olan',
  'Empati kurabilen', 'Topluma ve kültüre katkı sağlayan iletişim becerilerine sahip',
];

const SUB_LINKS = [
  { to: '/siniflar/ilkokul/brans-dersleri', label: 'Branş Dersleri' },
  { to: '/siniflar/ilkokul/uygulamalar-projeler', label: 'Uygulamalar ve Projeler' },
  { to: '/siniflar/ilkokul/pdr', label: "PDR'den Bakış" },
  { to: '/siniflar/ilkokul/degerler-egitimi', label: 'Değerler Eğitimi' },
  { to: '/siniflar/ilkokul/haftalik-cizelge', label: 'Haftalık Zaman Çizelgesi' },
];

export default function IlkokulGenelPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '8rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/ilkokul" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>İlkokul</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Genel Bilgiler</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '4px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>1. – 4. Sınıf · 6–10 Yaş</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            İlkokul Eğitim ve Öğretim
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: 1.85 }}>
            Hızla değişen çağın bireylerini ihtiyaçlar doğrultusunda hazırlayan bütüncül eğitim programımız.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} style={{ display: 'flex', gap: '0.65rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {SUB_LINKS.map((l) => (
              <Link key={l.to} to={l.to} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '5px', padding: '0.5rem 0.9rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >{l.icon} {l.label}</Link>
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }} className="il-main-grid">
            <div>
              <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
                <P>Hızla değişen ve gelişim içinde olan çağın bireylerini ihtiyaçlar doğrultusunda hazırlayabilmek için bilgiyi üreten, ürettiğini gerçek hayatta kullanabilen ve problem çözebilen bireyler amaçlayan bir program yürütmekteyiz.</P>
                <P>Bu becerileri öğrencilerimize kazandırmaya çalışırken bireysel farklılıkları dikkate alan, değer ve becerileri de kazandırma hedefli ilerlemekteyiz.</P>
              </motion.div>

              <motion.div {...fadeUp(0.05)}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Programımızın Hedeflediği Bireyler</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }} className="skills-grid-2">
                  {SKILLS.map((s, i) => (
                    <motion.div key={i} {...fadeUp(0.04 + i * 0.02)}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'var(--white)', borderRadius: '8px', padding: '0.9rem 1rem', border: '1px solid var(--grey-light)', boxShadow: '0 2px 8px rgba(35,46,92,0.04)' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.35rem', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{s}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem', border: '1px solid var(--grey-light)', boxShadow: '0 4px 20px rgba(35,46,92,0.06)', marginBottom: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>Bu Bölümdeki Sayfalar</p>
                {[{ to: '/siniflar/ilkokul', label: 'Kademeye Genel Bakış' }, ...SUB_LINKS].map((l) => (
                  <Link key={l.to} to={l.to} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', padding: '0.6rem 0', borderBottom: '1px solid var(--grey-light)', transition: 'padding 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = '0.4rem'; }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{l.label}</span>
                    <span style={{ marginLeft: 'auto', color: 'var(--red)', fontSize: '0.7rem' }}>→</span>
                  </Link>
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.15)} style={{ background: 'var(--primary)', borderRadius: '12px', padding: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem' }}>Kayıt & Bilgi</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem', lineHeight: 1.7 }}>İlkokul kayıt süreçleri hakkında bilgi almak için bizimle iletişime geçin.</p>
                <Link to="/kayit/kosullar" style={{ display: 'block', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: 'var(--red)', padding: '0.75rem', borderRadius: '5px', textDecoration: 'none' }}>Kayıt Koşulları →</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .il-main-grid { grid-template-columns: 1fr !important; } .skills-grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
