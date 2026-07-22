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

const SUB_LINKS = [
  { to: '/siniflar/okul-oncesi/brans-dersleri', label: 'Branş Dersleri' },
  { to: '/siniflar/okul-oncesi/pdr', label: "PDR'den Bakış" },
  { to: '/siniflar/okul-oncesi/haftalik-cizelge', label: 'Haftalık Zaman Çizelgesi' },
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
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.75rem', marginTop: '2rem' }}>
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
                {l.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, #f59e0b, var(--primary), transparent)' }} />

      {/* Genel Bilgiler */}
      <section style={{ padding: '5rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div className="section-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '3rem', border: '1px solid var(--grey-light)', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textAlign: 'center' }}>
                Kolej Sancaktepe TED AD ANAOKULU
              </h2>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: '#f59e0b', fontStyle: 'italic', marginBottom: '2rem', textAlign: 'center' }}>
                Oyunla Keşfeden, Merakla Öğrenen Çocuklar
              </h3>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '1rem' }}>
                Kolej Sancaktepe TED AD Anaokulu, çocukların erken yaşta <strong>merak duygusunu, dil becerilerini ve düşünme alışkanlıklarını</strong> geliştirmeyi amaçlayan bütüncül bir eğitim yaklaşımı sunar.
              </p>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '2.5rem' }}>
                Programımızda öğrenme, <strong>oyun, keşif ve deneyim</strong> üzerinden yapılandırılır. Çocuklar; güvenli, destekleyici ve zenginleştirilmiş bir öğrenme ortamında kendilerini ifade etmeyi, soru sormayı ve birlikte üretmeyi öğrenirler.
              </p>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem' }}>Eğitim Yaklaşımımız</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2.5rem' }}>
                {[
                  'Oyun temelli öğrenme',
                  'Dil gelişimini destekleyen yoğun İngilizce ortam',
                  'Sosyal-duygusal gelişimi önceleyen yapı',
                  'Sorgulama ve keşif odaklı etkinlikler'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.85rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#f59e0b', flexShrink: 0, fontSize: '1.2rem', lineHeight: 1 }}>●</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem' }}>Program İçeriği</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2.5rem' }}>
                {[
                  'Türkçe dil etkinlikleri',
                  'Matematik ve fen farkındalığı',
                  'İngilizce (native destekli)',
                  'Görsel sanatlar, müzik ve ritim',
                  'Drama, dans ve hareket',
                  'Bilişim, kodlama ve satranç',
                  'Rehberlik ve yaşam becerileri',
                  '5–6 yaş grubunda felsefi düşünmeye hazırlık çalışmaları'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.85rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#f59e0b', flexShrink: 0, fontSize: '1.2rem', lineHeight: 1 }}>●</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem' }}>Hedefimiz</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.95, margin: 0 }}>
                Kendini ifade edebilen, merak eden, öğrenmekten keyif alan ve sosyal açıdan güçlü çocuklar yetiştirmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PDF Kitapçık Bölümü */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1a2347 0%, #232e5c 55%, #2e3d7a 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-80px', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(245,158,11,0.6)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Tanıtım Dergisi</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(245,158,11,0.6)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
              Kolej Sancaktepe <span style={{ color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>Dergisi</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0.75rem auto 0', lineHeight: 1.85 }}>
              Okulumuzun eğitim anlayışını, programlarını ve okul yaşamını tanıtan dijital dergimizi sayfaları çevirerek keşfedin.
            </p>
          </motion.div>

          <Suspense fallback={
            <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Yükleniyor...
            </div>
          }>
            <PdfFlipBook />
          </Suspense>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="/web%20genel%20dergi.pdf"
              download="Kolej-Sancaktepe-Dergi.pdf"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.2)', padding: '0.75rem 1.75rem',
                borderRadius: '4px', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            >
              ⬇ PDF İndir
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
