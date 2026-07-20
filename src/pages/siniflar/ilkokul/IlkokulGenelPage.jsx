import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

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
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '3rem', border: '1px solid var(--grey-light)', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textAlign: 'center' }}>
                Kolej Sancaktepe TED AD İLKOKULU
              </h2>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--red)', fontStyle: 'italic', marginBottom: '2rem', textAlign: 'center' }}>
                Sağlam Temeller, Güçlü Beceriler
              </h3>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '1rem' }}>
                Kolej Sancaktepe TED AD İlkokulu, öğrencilerin <strong>temel akademik becerilerini</strong> kazandığı, aynı zamanda düşünme, iletişim ve okuryazarlık alanlarında güçlendiği bir öğrenme ortamı sunar.
              </p>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '2.5rem' }}>
                Bu dönemde öğrenciler yalnızca bilgi edinmez; <strong>okumayı, yazmayı, problem çözmeyi ve öğrenmeyi öğrenir.</strong>
              </p>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem' }}>Eğitim Yaklaşımımız</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2.5rem' }}>
                {[
                  'Öğrenci merkezli ve aktif öğrenme',
                  'Proje ve disiplinlerarası çalışmalar',
                  'Güçlü dil eğitimi'
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
                  'Türkçe, Matematik, Hayat Bilgisi',
                  'Fen Bilimleri ve Sosyal Bilgiler',
                  'İngilizce (native destekli)',
                  '2.Yabancı Dil ( Almanca)',
                  'Yaşam ve düşünme dersleri',
                  'Proje ve tematik çalışmalar',
                  'Görsel sanatlar ve müzik',
                  'Beden eğitimi ve spor',
                  'Bilişim teknolojileri ve kulüpler'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.85rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--red)', flexShrink: 0, fontSize: '1.2rem', lineHeight: 1 }}>●</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem' }}>Hedefimiz</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, margin: 0 }}>
                Okuduğunu anlayan, düşünebilen, iletişim kurabilen ve öğrenmeye istekli bireyler yetiştirmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
