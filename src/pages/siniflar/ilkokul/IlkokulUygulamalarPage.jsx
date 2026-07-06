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

const VALUES = ['Sevgi', 'Dürüstlük', 'Duyarlılık', 'Güven', 'Hoşgörü', 'Sabır', 'Saygı', 'Dayanışma', 'Barış', 'Yardımlaşma', 'Adalet', 'Empati', 'Sorumluluk', 'Dostluk'];

const APPS = [
  {
    icon: '📱',
    tag: 'Seesaw e-Portfolyo',
    body: 'Portfolyo çalışmalarımızı velilerimizle etkin olarak dijital ortamda paylaştığımız platformumuzdur. Öğrencilerimiz çalışmalarını bireysel ya da grup olarak tamamlayarak portfolyolarına eklerler.',
  },
  {
    icon: '🏛️',
    tag: 'Nutuk',
    body: 'Atatürk ilke ve inkılapları doğrultusunda sürdürdüğümüz eğitim ve öğretim sürecimizde "Güne Nutuk ile Başlayalım" çalışmamız ile ilköğretim sürecimizi tamamlamaktayız.',
  },
  {
    icon: '🔭',
    tag: 'Keşif Atölyesi',
    body: '1. ve 2. sınıflarda Hayat Bilgisi kazanımları, 3. ve 4. sınıflarda ise Fen Bilimleri kazanımları ile uyumlu deney etkinlikleri gerçekleştirmekteyiz.',
  },
  {
    icon: '📚',
    tag: 'Çocuk Edebiyatı ve Yazar Buluşmaları',
    body: 'Her yıl seçtiğimiz güdümlü kitaplarımızı yıl boyunca okuyup etkinliklerini gerçekleştirmekle birlikte yazarlarıyla öğrencilerimizi buluşturarak paylaşım fırsatları sunmaktayız.',
  },
  {
    icon: '💭',
    tag: 'P4C — Çocuklar için Felsefe',
    body: 'Akıl yürütme ve hayal gücüne hitap eden, öğrencilerimizin merak etmelerini, fikirlerini tartışıp savunmalarını ve birbirlerini anlamalarını sağlayan bir tekniktir. Bilginin alınıp saklanması yerine soruların sorulduğu, argümanların tartışıldığı ve alternatiflerin keşfedildiği bir öğrenme ortamı sağlar.',
  },
];

export default function IlkokulUygulamalarPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/ilkokul" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>İlkokul</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Uygulamalar ve Projeler</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Uygulamalar ve Projeler
          </motion.h1>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            {APPS.map((app, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}>
                <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem', boxShadow: '0 2px 12px rgba(35,46,92,0.05)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '2rem', flexShrink: 0 }}>{app.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>{app.tag}</p>
                    <P>{app.body}</P>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Değerler listesi */}
            <motion.div {...fadeUp(0.3)}>
              <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '2rem', border: '1px solid var(--grey-light)', boxShadow: '0 2px 12px rgba(35,46,92,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '2rem' }}>⭐</span>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)' }}>Müfredatımızdaki Değerler</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {VALUES.map((v, i) => (
                    <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--primary)', background: 'rgba(35,46,92,0.06)', border: '1px solid rgba(35,46,92,0.12)', borderRadius: '5px', padding: '0.35rem 0.75rem' }}>{v}</span>
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75, marginTop: '1rem' }}>
                  Her ders içeriğimize kattığımız değerlerimizi etkinlik ve çalışmalarımızla arşivleyerek sene sonunda panel haline getirmekteyiz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
