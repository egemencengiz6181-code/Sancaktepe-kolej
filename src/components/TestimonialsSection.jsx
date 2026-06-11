import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: 'Çocuğumun Kolej Sancaktepe\'de geçirdiği ilk yılda gelişimi inanılmaz oldu. Öğretmenler gerçekten her öğrenciyle bireysel ilgileniyor, hiçbir şeyi atlamıyorlar.',
    name: 'Ayşe Kaya',
    role: 'Veli — 3. Sınıf',
    initials: 'AK',
    color: '#232e5c',
  },
  {
    text: 'UbD modeliyle yürütülen dersler çocuğumun sadece sınav değil, gerçek hayat için öğrenmesini sağladı. Sorgulama ve analiz becerisi çok gelişti.',
    name: 'Mehmet Demir',
    role: 'Veli — 7. Sınıf',
    initials: 'MD',
    color: '#e61936',
  },
  {
    text: 'Anaokulu programı mükemmel. Çocuğum hem Türkçe hem de İngilizce\'yi oyunla öğrendi. Sosyal becerileri de inanılmaz gelişti.',
    name: 'Zeynep Arslan',
    role: 'Veli — Okul Öncesi',
    initials: 'ZA',
    color: '#7c3aed',
  },
  {
    text: 'TED-AD akreditasyonu gerçekten bir fark yaratıyor. Eğitim kalitesi standartları uluslararası düzeyde. Bunu pratikte de görüyoruz.',
    name: 'Ali Çelik',
    role: 'Veli — 9. Sınıf',
    initials: 'AÇ',
    color: '#059669',
  },
  {
    text: 'BÖGEP programı sayesinde kızım sadece akademik değil, sosyal sorumluluk projeleriyle de büyüdü. Okul dışı öğrenme etkinlikleri çok değerli.',
    name: 'Fatma Şahin',
    role: 'Veli — 5. Sınıf',
    initials: 'FŞ',
    color: '#232e5c',
  },
  {
    text: 'Ortaokul programı LGS\'ye çok iyi hazırlıyor. Hem sınav odaklı hem de düşünme becerisini geliştiren bir denge var, bu nadir.',
    name: 'Hasan Yıldız',
    role: 'Veli — 8. Sınıf',
    initials: 'HY',
    color: '#e61936',
  },
  {
    text: 'Almanca eğitimi beklentimin çok üzerinde. Çocuğum 2. sınıfta temel cümleler kurabilir hale geldi. İkinci dil eğitimi gerçekten sağlam.',
    name: 'Selin Öztürk',
    role: 'Veli — 2. Sınıf',
    initials: 'SÖ',
    color: '#7c3aed',
  },
  {
    text: 'Mentorluk sistemi çok etkili. Oğlumun bir yıl boyunca gelişimini takip eden danışman öğretmenle düzenli görüşmeler yapıyoruz, çok memnunuz.',
    name: 'Kaan Polat',
    role: 'Veli — 11. Sınıf',
    initials: 'KP',
    color: '#059669',
  },
  {
    text: 'KVYOD dersleri çocuğuma dünyaya daha geniş bir perspektifle bakmasını öğretti. Sürdürülebilirlik ve küresel vatandaşlık konularında son derece bilinçlendi.',
    name: 'Neslihan Çetin',
    role: 'Veli — 6. Sınıf',
    initials: 'NÇ',
    color: '#232e5c',
  },
];

function TestimonialsColumn({ items, duration = 15 }) {
  // Double the items for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', flex: 1 }}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '1.25rem' }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              maxWidth: '300px',
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '3px', marginBottom: '0.9rem' }}>
              {[...Array(5)].map((_, si) => (
                <span key={si} style={{ color: 'var(--red)', fontSize: '0.75rem' }}>★</span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', marginBottom: '1.2rem' }}>
              "{t.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: t.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900,
                color: '#fff', flexShrink: 0,
                border: '2px solid rgba(255,255,255,0.15)',
              }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>{t.name}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section style={{
      padding: '7rem 0',
      background: 'linear-gradient(180deg, #0f1428 0%, #1a2347 50%, #0f1428 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        pointerEvents: 'none',
      }} />
      {/* Red glow */}
      <div style={{
        position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(230,25,54,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(230,25,54,0.12)', border: '1px solid rgba(230,25,54,0.25)', borderRadius: '4px', padding: '0.3rem 0.9rem', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#ff6b85' }}>Veli Görüşleri</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Ailelerin <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}>Deneyimleri</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
            Kolej Sancaktepe ailesinin bir parçası olan velilerimizin gözünden.
          </p>
        </motion.div>

        {/* Columns with fade mask */}
        <div className="testimonials-wrap" style={{
          display: 'flex',
          gap: '1.25rem',
          justifyContent: 'center',
          maxHeight: '600px',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}>
          <TestimonialsColumn items={col1} duration={18} />
          <div className="testimonials-col2" style={{ flex: 1, overflow: 'hidden' }}>
            <TestimonialsColumn items={col2} duration={22} />
          </div>
          <div className="testimonials-col3" style={{ flex: 1, overflow: 'hidden' }}>
            <TestimonialsColumn items={col3} duration={20} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testimonials-col3 { display: none !important; } }
        @media (max-width: 600px) { .testimonials-col2 { display: none !important; } }
        @media (max-width: 600px) { .testimonials-wrap { justify-content: center !important; } }
        @media (max-width: 600px) { .testimonials-wrap > div { max-width: 320px; } }
      `}</style>
    </section>
  );
}
