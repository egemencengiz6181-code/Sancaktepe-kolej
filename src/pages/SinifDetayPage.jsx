import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { classes } from '../data/classes';

const CLASS_SUB_PAGES = {
  'okul-oncesi': [
    { to: '/siniflar/okul-oncesi/genel-bilgiler', icon: '📋', label: 'Genel Bilgiler', desc: 'Program ve eğitim anlayışı' },
    { to: '/siniflar/okul-oncesi/brans-dersleri', icon: '📚', label: 'Branş Dersleri', desc: 'İngilizce, sanat, müzik ve daha fazlası' },
    { to: '/siniflar/okul-oncesi/pdr', icon: '💚', label: "PDR'den Bakış", desc: 'Rehberlik ve psikolojik destek' },
    { to: '/siniflar/okul-oncesi/haftalik-cizelge', icon: '🗓️', label: 'Haftalık Zaman Çizelgesi', desc: 'Dönemlik ders programı' },
  ],
  'ilkokul': [
    { to: '/siniflar/ilkokul/genel-bilgiler', icon: '📋', label: 'Genel Bilgiler', desc: 'Program ve eğitim anlayışı' },
    { to: '/siniflar/ilkokul/brans-dersleri', icon: '📚', label: 'Branş Dersleri', desc: 'Türkçe, Matematik, Fen ve daha fazlası' },
    { to: '/siniflar/ilkokul/uygulamalar-projeler', icon: '🔭', label: 'Uygulamalar ve Projeler', desc: 'Seesaw, P4C, Keşif Atölyesi' },
    { to: '/siniflar/ilkokul/pdr', icon: '💬', label: "PDR'den Bakış", desc: 'Rehberlik ve psikolojik destek' },
    { to: '/siniflar/ilkokul/degerler-egitimi', icon: '⭐', label: 'Değerler Eğitimi', desc: '14 temel değer müfredata entegre' },
    { to: '/siniflar/ilkokul/haftalik-cizelge', icon: '🗓️', label: 'Haftalık Zaman Çizelgesi', desc: 'Dönemlik ders programı' },
  ],
  'ortaokul': [
    { to: '/siniflar/ortaokul/genel-bilgiler', icon: '📋', label: 'Genel Bilgiler', desc: 'Program ve eğitim anlayışı' },
    { to: '/siniflar/ortaokul/brans-dersleri', icon: '📚', label: 'Branş Dersleri', desc: 'Tüm branş dersleri içerikleri' },
    { to: '/siniflar/ortaokul/uygulamalar-projeler', icon: '♻️', label: 'Uygulamalar ve Projeler', desc: 'Eko-Okul Projesi ve diğerleri' },
    { to: '/siniflar/ortaokul/pdr', icon: '💬', label: "PDR'den Bakış", desc: 'Rehberlik ve psikolojik destek' },
    { to: '/siniflar/ortaokul/haftalik-cizelge', icon: '🗓️', label: 'Haftalık Zaman Çizelgesi', desc: 'Dönemlik ders programı' },
  ],
  'lise': [
    { to: '/siniflar/lise/genel-bilgiler', icon: '📋', label: 'Genel Bilgiler', desc: 'Program ve eğitim anlayışı' },
    { to: '/siniflar/lise/uluslararasi-programlar', icon: '🌍', label: 'Uluslararası Programlar', desc: 'AP, Kanada Değişim, Edinburgh Ödülü' },
    { to: '/siniflar/lise/akademik-bolumler', icon: '📚', label: 'Akademik Bölümler', desc: 'Tüm branş dersleri içerikleri' },
    { to: '/siniflar/lise/rehberlik-kariyer', icon: '💼', label: 'Rehberlik ve Kariyer', desc: 'PDR ve kariyer danışmanlığı' },
    { to: '/siniflar/lise/yurt-ici-universite', icon: '🎓', label: 'Yurt İçi Üniversite', desc: 'YKS hazırlık ve kariyer danışmanlığı' },
    { to: '/siniflar/lise/yurt-disi-universite', icon: '✈️', label: 'Yurt Dışı Üniversite', desc: 'Uluslararası başvuru danışmanlığı' },
    { to: '/siniflar/lise/haftalik-cizelge', icon: '🗓️', label: 'Haftalık Zaman Çizelgesi', desc: 'Dönemlik ders programı' },
  ],
};

const GALLERY_MAP = {
  'okul-oncesi': [
    '/gallery/okul-oncesi-1.webp',
    '/gallery/okul-oncesi-2.webp',
    '/gallery/okul-oncesi-3.webp',
    '/gallery/okul-oncesi-4.webp',
  ],
  'ilkokul': [
    '/gallery/ilkokul-1.webp',
    '/gallery/ilkokul-2.webp',
    '/gallery/ilkokul-3.webp',
    '/gallery/ilkokul-4.webp',
  ],
  'ortaokul': [
    '/gallery/ortaokul-1.webp',
    '/gallery/ortaokul-2.webp',
    '/gallery/ortaokul-3.webp',
    '/gallery/ortaokul-4.webp',
  ],
  'lise': [
    '/gallery/lise-1.webp',
    '/gallery/lise-2.webp',
    '/gallery/lise-3.webp',
    '/gallery/lise-4.webp',
  ],
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function SinifDetayPage() {
  const { id } = useParams();
  const cls = classes.find((c) => c.id === id);
  if (!cls) return <Navigate to="/siniflar" replace />;
  const photos = GALLERY_MAP[cls.id] ?? [];
  const heroBg = photos[0] ? `linear-gradient(135deg, rgba(26,35,71,0.91) 0%, rgba(35,46,92,0.87) 55%, rgba(46,61,122,0.87) 100%), url('${photos[0]}') center / cover no-repeat` : 'linear-gradient(135deg, #1a2347 0%, #232e5c 55%, #2e3d7a 100%)';

  const others = classes.filter((c) => c.id !== id);

  return (
    <>
      {/* HERO */}
      <section style={{
        background: heroBg,
        padding: '8rem 0 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }} />
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '480px', height: '480px', borderRadius: '50%',
          background: `radial-gradient(circle, ${cls.color === 'var(--primary)' ? '#232e5c' : cls.color === 'var(--red)' ? '#e61936' : cls.color}25 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}
          >
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
            >Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{cls.level}</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }} className="sinif-hero-grid">
            <div>
              {/* Age badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>{cls.ages}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.75rem' }}
              >
                {cls.level}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
                style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}
              >
                {cls.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1.02rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, maxWidth: '600px' }}
              >
                {cls.heroDesc}
              </motion.p>
            </div>

            {/* Icon bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '160px', height: '160px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '2px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '4.5rem', flexShrink: 0,
              }}
            >
              {cls.icon}
            </motion.div>
          </div>

          {/* Highlight chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}
          >
            {cls.highlights.map((h, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '6px', padding: '0.75rem 1.25rem',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.2rem' }}>{h.title}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>{h.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ACCENT BAR */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, var(--red), var(--primary), transparent)` }} />

      {/* LEVEL FEATURES STRIP */}
      {(() => {
        const featuresMap = {
          'okul-oncesi': [
            { icon: '💭', label: 'P4C', desc: 'Çocuklarla Felsefe' },
            { icon: '🗂️', label: 'Tematik Yapı', desc: 'Konular arası bütünleşik öğrenme' },
            { icon: '🗣️', label: 'Yoğun İngilizce', desc: 'Native destekli dil ortamı' },
            { icon: '🎨', label: 'Sanat & Müzik', desc: 'Yaratıcı gelişim atölyeleri' },
          ],
          'ilkokul': [
            { icon: '🗂️', label: 'Tematik Yapı', desc: 'Disiplinlerarası öğrenme' },
            { icon: '🗣️', label: 'Çift Dil', desc: 'İngilizce + Almanca' },
            { icon: '📐', label: 'UbD Temeli', desc: 'Anlam merkezli tasarım' },
            { icon: '🧑‍🏫', label: 'Bireysel Takip', desc: 'Her öğrenciye özel mentor' },
          ],
          'ortaokul': [
            { icon: '📐', label: 'UbD', desc: 'Understanding by Design yaklaşımı' },
            { icon: '🗂️', label: 'Tematik Yapı', desc: 'Disiplinlerarası projeler' },
            { icon: '🏆', label: 'LGS Hazırlığı', desc: 'Ulusal sınav başarı odaklı' },
            { icon: '🧑‍🏫', label: 'Mentorluk', desc: 'Güçlü rehberlik sistemi' },
          ],
          'lise': [
            { icon: '📘', label: '9–10 Temel Program', desc: 'Güçlü akademik altyapı' },
            { icon: '🔭', label: '11–12 Uzmanlaşma', desc: 'Alan derinleşmesi & seçmeli dersler' },
            { icon: '🏅', label: 'AP Programı', desc: 'Uluslararası üniversite avantajı' },
            { icon: '🎯', label: 'Üniversite Hazırlık', desc: 'YKS + yurtdışı danışmanlığı' },
            { icon: '🗺️', label: 'Kariyer Planlama', desc: 'Bireysel kariyer haritası' },
            { icon: '🧑‍🏫', label: 'Mentorluk', desc: 'Kişisel akademik danışman' },
          ],
        };
        const features = featuresMap[cls.id] || [];
        if (!features.length) return null;
        const accentColor = cls.color === 'var(--primary)' ? '#232e5c' : cls.color === 'var(--red)' ? '#e61936' : cls.color;
        return (
          <section style={{ padding: '3rem 0', background: 'var(--white)', borderBottom: '1px solid var(--grey-light)' }}>
            <div className="section-container">
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(features.length, 4)}, 1fr)`, gap: '1rem' }} className="features-strip">
                {features.map((f, i) => (
                  <motion.div key={f.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}>
                    <div style={{
                      padding: '1.5rem 1.25rem',
                      background: `${accentColor}08`,
                      border: `1px solid ${accentColor}20`,
                      borderRadius: '12px',
                      display: 'flex', alignItems: 'flex-start', gap: '1rem',
                      transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = `${accentColor}14`; e.currentTarget.style.borderColor = `${accentColor}45`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = `${accentColor}08`; e.currentTarget.style.borderColor = `${accentColor}20`; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{f.icon}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: accentColor, marginBottom: '0.25rem' }}>{f.label}</div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{f.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <style>{`@media (max-width: 700px) { .features-strip { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
          </section>
        );
      })()}

      {/* MAIN CONTENT */}
      <section style={{ padding: '6rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }} className="sinif-content-grid">

            {/* LEFT: Sticky sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              {/* Approach */}
              <motion.div {...fadeUp(0)} style={{
                background: 'var(--white)', borderRadius: '10px',
                boxShadow: '0 4px 30px rgba(35,46,92,0.08)',
                overflow: 'hidden',
                marginBottom: '1.5rem',
              }}>
                <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary))' }} />
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1.25rem' }}>Eğitim Yaklaşımı</p>
                  {cls.approach.map((a, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)', marginTop: '0.45rem', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{a}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Goal */}
              <motion.div {...fadeUp(0.1)} style={{
                background: 'linear-gradient(135deg, rgba(35,46,92,0.06), rgba(35,46,92,0.02))',
                borderRadius: '10px', border: '1px solid rgba(35,46,92,0.1)',
                borderLeft: '4px solid var(--primary)',
                padding: '1.75rem', marginBottom: '1.5rem',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>🎯 Hedefimiz</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.87rem', lineHeight: 1.8, color: 'var(--text-mid)', fontStyle: 'italic' }}>{cls.goal}</p>
              </motion.div>

              {/* CTA */}
              <motion.div {...fadeUp(0.2)}>
                <Link to="/iletisim" style={{
                  display: 'block', textDecoration: 'none', textAlign: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#fff', background: 'linear-gradient(135deg, var(--red), var(--red-light))',
                  padding: '1rem', borderRadius: '6px',
                  boxShadow: '0 6px 24px rgba(230,25,54,0.3)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(230,25,54,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(230,25,54,0.3)'; }}
                >
                  Kayıt &amp; Bilgi Al →
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: Content */}
            <div>
              {/* Ders programı */}
              <motion.div {...fadeUp(0)} style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ width: '4px', height: '32px', background: 'linear-gradient(180deg, var(--red), var(--primary))', borderRadius: '2px' }} />
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Ders Programı</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '0.9rem' }}>
                  {cls.content.map((item, i) => (
                    <motion.div
                      key={i} {...fadeUp(i * 0.05)}
                      style={{
                        background: 'var(--white)', borderRadius: '8px',
                        padding: '1rem 1.25rem',
                        border: '1px solid var(--grey-light)',
                        boxShadow: '0 2px 10px rgba(35,46,92,0.05)',
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        transition: 'all 0.25s',
                      }}
                      whileHover={{ x: 4 }}
                    >
                      <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.5 }}>{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Öne çıkanlar */}
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ width: '4px', height: '32px', background: 'linear-gradient(180deg, var(--red), var(--primary))', borderRadius: '2px' }} />
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Öne Çıkan Özellikler</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="highlights-grid">
                  {cls.highlights.map((h, i) => (
                    <motion.div
                      key={i} {...fadeUp(i * 0.1)}
                      style={{
                        background: 'var(--white)', borderRadius: '10px',
                        padding: '2rem 1.75rem',
                        border: '1px solid var(--grey-light)',
                        boxShadow: '0 4px 20px rgba(35,46,92,0.06)',
                        position: 'relative', overflow: 'hidden',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--red), var(--primary))' }} />
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.6rem' }}>0{i + 1}</div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{h.title}</h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{h.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Sub-pages quick links */}
              {CLASS_SUB_PAGES[cls.id] && (
                <motion.div {...fadeUp(0.15)} style={{ marginBottom: '3.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                    <div style={{ width: '4px', height: '32px', background: 'linear-gradient(180deg, var(--red), var(--primary))', borderRadius: '2px' }} />
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Bölüm Sayfaları</h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="subpages-grid">
                    {CLASS_SUB_PAGES[cls.id].map((sp) => (
                      <Link key={sp.to} to={sp.to} style={{ textDecoration: 'none' }}>
                        <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(35,46,92,0.05)' }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(245,158,11,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--grey-light)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(35,46,92,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                          <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{sp.icon}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.2rem' }}>{sp.label}</div>
                            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--grey)' }}>{sp.desc}</div>
                          </div>
                          <span style={{ color: 'var(--red)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Detailed desc */}
              <motion.div {...fadeUp(0.2)} style={{
                background: 'var(--white)', borderRadius: '10px',
                padding: '2.5rem',
                border: '1px solid var(--grey-light)',
                boxShadow: '0 4px 24px rgba(35,46,92,0.06)',
                borderLeft: '5px solid var(--primary)',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>Kademe Hakkında</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-mid)' }}>{cls.desc}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      {photos.length > 0 && (
        <section style={{ padding: '5rem 0', background: 'var(--off-white)', borderTop: '1px solid var(--grey-light)' }}>
          <div className="section-container">
            <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.5rem' }}>Fotoğraf Galerisi</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>{cls.level} Yaşamından</h2>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.9rem' }} className="photo-grid-4">
              {photos.map((src, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} style={{
                  borderRadius: '10px', overflow: 'hidden', aspectRatio: '4/3',
                  boxShadow: '0 6px 28px rgba(35,46,92,0.1)',
                }}>
                  <img
                    src={src}
                    alt={`${cls.level} - ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER CLASSES */}
      <section style={{ padding: '5rem 0', background: 'var(--white)', borderTop: '1px solid var(--grey-light)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.5rem' }}>Diğer Kademeler</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Tüm Eğitim Kademeleri</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {others.map((c, i) => (
              <motion.div key={c.id} {...fadeUp(i * 0.08)}>
                <Link to={`/siniflar/${c.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    background: 'var(--off-white)', borderRadius: '8px',
                    padding: '1.75rem', border: '2px solid transparent',
                    transition: 'all 0.3s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(35,46,92,0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'var(--off-white)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey)' }}>{c.ages.split('·')[0].trim()}</span>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.35rem', lineHeight: 1.35 }}>{c.level}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--red)', marginTop: '0.75rem', letterSpacing: '0.06em' }}>Keşfet →</p>
                  </div>
                </Link>
              </motion.div>
            ))}
            <motion.div {...fadeUp(others.length * 0.08)}>
              <Link to="/siniflar" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                  borderRadius: '8px', padding: '1.75rem',
                  height: '100%', minHeight: '160px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  cursor: 'pointer', transition: 'transform 0.3s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Tümüne Bak</p>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '1rem' }}>Tüm Kademeler</p>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>Genel Bakış →</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .sinif-hero-grid { grid-template-columns: 1fr !important; }
          .sinif-hero-grid > div:last-child { display: none; }
          .sinif-content-grid { grid-template-columns: 1fr !important; }
          .sinif-content-grid > div:first-child { position: static !important; }
          .highlights-grid { grid-template-columns: 1fr !important; }
          .subpages-grid { grid-template-columns: 1fr !important; }
          .photo-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .photo-grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
