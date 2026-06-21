import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { news } from '../data/news';

const tagColors = {
  Haberlerimiz: '#e61936',
  'Eğitim Yazıları': '#232e5c',
  'Veli Rehberi': '#0891b2',
  'Yapay Zeka ve Eğitim': '#7c3aed',
  'Çocuk Gelişimi': '#16a34a',
  'Üniversite Hazırlık': '#d97706',
  // legacy tags for existing news
  Akademi: '#232e5c',
  Etkinlik: '#0891b2',
  Kültür: '#7c3aed',
  Spor: '#16a34a',
  Akreditasyon: '#e61936',
  Kariyer: '#d97706',
};

const ALL = 'Tümü';
const FIXED_TABS = [ALL, 'Haberlerimiz', 'Eğitim Yazıları', 'Veli Rehberi', 'Yapay Zeka ve Eğitim', 'Çocuk Gelişimi', 'Üniversite Hazırlık'];

// Map existing news tags → Haberlerimiz for filter purposes
const normalizeTag = (tag) => {
  const newsTagsSet = new Set(['Akademi', 'Etkinlik', 'Kültür', 'Spor', 'Akreditasyon', 'Kariyer']);
  return newsTagsSet.has(tag) ? 'Haberlerimiz' : tag;
};

export default function HaberlerPage() {
  const [activeTag, setActiveTag] = useState(ALL);

  const filtered = activeTag === ALL ? news : news.filter((n) => normalizeTag(n.tag) === activeTag || n.tag === activeTag);
  const [featured, ...rest] = filtered;

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>
      {/* ── Page Hero ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a2347 0%, #232e5c 50%, #2e3d7a 100%)',
          padding: '8rem 0 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '70px 70px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', right: '-60px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,25,54,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                Güncel
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem',
            }}>
              Okul <em style={{ color: 'var(--yellow)', fontStyle: 'italic' }}>Haberlerimiz</em>
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)', maxWidth: '540px', lineHeight: 1.8,
            }}>
              Kolej Sancaktepe\'deki akademik başarıları, etkinlikleri, kültürel gelişmeleri ve spor haberlerini buradan takip edebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--grey-light)', position: 'sticky', top: '64px', zIndex: 10 }}>
        <div className="section-container">
          <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem 0', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {FIXED_TABS.map((tag) => {
              const active = tag === activeTag;
              const color = tag === ALL ? 'var(--primary)' : tagColors[tag] || 'var(--primary)';
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                    padding: '0.5rem 1.1rem', borderRadius: '3px', border: 'none', cursor: 'pointer',
                    background: active ? color : 'transparent',
                    color: active ? '#fff' : 'var(--grey)',
                    boxShadow: active ? `0 4px 14px ${color}40` : 'none',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={(e) => { if (!active) { e.currentTarget.style.color = color; e.currentTarget.style.background = `${color}10`; } }}
                  onMouseLeave={(e) => { if (!active) { e.currentTarget.style.color = 'var(--grey)'; e.currentTarget.style.background = 'transparent'; } }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="section-container">

          {/* Featured card */}
          {featured && (
            <motion.div
              key={featured.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '3rem' }}
            >
              <Link to={`/haberler/${featured.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr',
                    borderRadius: '16px', overflow: 'hidden',
                    background: 'var(--white)',
                    border: '1px solid var(--grey-light)',
                    boxShadow: '0 8px 40px rgba(35,46,92,0.09)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(35,46,92,0.14)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(35,46,92,0.09)'; }}
                  className="featured-news-card"
                >
                  {/* Image */}
                  <div style={{ position: 'relative', overflow: 'hidden', minHeight: '340px' }}>
                    <img
                      src={featured.img}
                      alt={featured.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      background: tagColors[featured.tag] || 'var(--red)',
                      color: '#fff',
                      fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      padding: '0.3rem 0.75rem', borderRadius: '3px',
                    }}>{featured.tag}</div>
                    <div style={{
                      position: 'absolute', top: '1rem', right: '1rem',
                      background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
                      color: 'rgba(255,255,255,0.85)',
                      fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 700,
                      padding: '0.25rem 0.65rem', borderRadius: '20px',
                    }}>Öne Çıkan</div>
                  </div>
                  {/* Text */}
                  <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--grey)', letterSpacing: '0.1em', marginBottom: '0.75rem', display: 'flex', gap: '1rem' }}>
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '1rem' }}>
                      {featured.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                      {featured.desc}
                    </p>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)' }}>
                      Devamını Oku →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid cards */}
          {rest.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {rest.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <Link to={`/haberler/${item.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <div
                      style={{
                        background: 'var(--white)', borderRadius: '12px',
                        border: '1px solid var(--grey-light)',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(35,46,92,0.06)',
                        transition: 'transform 0.25s, box-shadow 0.25s',
                        height: '100%', display: 'flex', flexDirection: 'column',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(35,46,92,0.12)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(35,46,92,0.06)'; }}
                    >
                      <div style={{ height: '200px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                        <img
                          src={item.imgThumb}
                          alt={item.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                        <div style={{
                          position: 'absolute', top: '0.75rem', left: '0.75rem',
                          background: tagColors[item.tag] || 'var(--red)', color: '#fff',
                          fontFamily: 'var(--font-display)', fontSize: '0.57rem', fontWeight: 900,
                          letterSpacing: '0.18em', textTransform: 'uppercase',
                          padding: '0.25rem 0.6rem', borderRadius: '3px',
                        }}>{item.tag}</div>
                      </div>
                      <div style={{ padding: '1.4rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 700, color: 'var(--grey)', letterSpacing: '0.08em', marginBottom: '0.5rem', display: 'flex', gap: '0.75rem' }}>
                          <span>{item.date}</span>
                          <span>·</span>
                          <span>{item.readTime}</span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.4, marginBottom: '0.6rem', flexGrow: 1 }}>
                          {item.title}
                        </h3>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1rem' }}>
                          {item.desc}
                        </p>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.63rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)' }}>
                          Devamını Oku →
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--grey)', fontFamily: 'var(--font-sans)' }}>
              Bu kategoride henüz haber bulunmuyor.
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .featured-news-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
