import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── All photos ────────────────────────────────────────────────
const ALL_PHOTOS = [
  // Okul Yaşamı
  { src: '/gallery/IMG_0828.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0830.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0831.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0832.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0833.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0834.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0835.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0836.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0837.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  { src: '/gallery/IMG_0838.jpeg', cat: 'okul', label: 'Okul Yaşamı' },
  // Okul Öncesi
  { src: '/gallery/okul-oncesi-1.webp', cat: 'okul-oncesi', label: 'Okul Öncesi' },
  { src: '/gallery/okul-oncesi-2.webp', cat: 'okul-oncesi', label: 'Okul Öncesi' },
  { src: '/gallery/okul-oncesi-3.webp', cat: 'okul-oncesi', label: 'Okul Öncesi' },
  { src: '/gallery/okul-oncesi-4.webp', cat: 'okul-oncesi', label: 'Okul Öncesi' },
  // İlkokul
  { src: '/gallery/ilkokul-1.webp', cat: 'ilkokul', label: 'İlkokul' },
  { src: '/gallery/ilkokul-2.webp', cat: 'ilkokul', label: 'İlkokul' },
  { src: '/gallery/ilkokul-3.webp', cat: 'ilkokul', label: 'İlkokul' },
  { src: '/gallery/ilkokul-4.webp', cat: 'ilkokul', label: 'İlkokul' },
  // Ortaokul
  { src: '/gallery/ortaokul-1.webp', cat: 'ortaokul', label: 'Ortaokul' },
  { src: '/gallery/ortaokul-2.webp', cat: 'ortaokul', label: 'Ortaokul' },
  { src: '/gallery/ortaokul-3.webp', cat: 'ortaokul', label: 'Ortaokul' },
  { src: '/gallery/ortaokul-4.webp', cat: 'ortaokul', label: 'Ortaokul' },
  // Lise
  { src: '/gallery/lise-1.webp', cat: 'lise', label: 'Anadolu Lisesi' },
  { src: '/gallery/lise-2.webp', cat: 'lise', label: 'Anadolu Lisesi' },
  { src: '/gallery/lise-3.webp', cat: 'lise', label: 'Anadolu Lisesi' },
  { src: '/gallery/lise-4.webp', cat: 'lise', label: 'Anadolu Lisesi' },
];

const TABS = [
  { id: 'all', label: 'Tümü' },
  { id: 'okul', label: 'Okul Yaşamı' },
  { id: 'okul-oncesi', label: 'Okul Öncesi' },
  { id: 'ilkokul', label: 'İlkokul' },
  { id: 'ortaokul', label: 'Ortaokul' },
  { id: 'lise', label: 'Anadolu Lisesi' },
];

// ─── Lightbox ─────────────────────────────────────────────────
function Lightbox({ photos, index, onClose, onNav }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && index > 0) onNav(index - 1);
      if (e.key === 'ArrowRight' && index < photos.length - 1) onNav(index + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, photos.length, onClose, onNav]);

  const photo = photos[index];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(8,13,35,0.97)',
        backdropFilter: 'blur(20px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '1.2rem', right: '1.2rem',
          width: '42px', height: '42px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: '#fff', fontSize: '1.4rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(230,25,54,0.75)'; e.currentTarget.style.borderColor = 'transparent'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
      >×</button>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(index - 1); }}
          style={{
            position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)',
            width: '50px', height: '50px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', fontSize: '1.6rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
        >‹</button>
      )}

      {/* Next */}
      {index < photos.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(index + 1); }}
          style={{
            position: 'absolute', right: '1.2rem', top: '50%', transform: 'translateY(-50%)',
            width: '50px', height: '50px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', fontSize: '1.6rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
        >›</button>
      )}

      {/* Image */}
      <motion.div
        key={photo.src}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, type: 'spring', damping: 22, stiffness: 180 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1000px', width: '100%', position: 'relative',
          borderRadius: '8px', overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src={photo.src}
          alt={photo.label}
          style={{ width: '100%', display: 'block', maxHeight: '80vh', objectFit: 'contain', background: '#08102a' }}
        />
        {/* Caption bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0.75rem 1.2rem',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            {photo.label}
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}>
            {index + 1} / {photos.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Single masonry photo card ─────────────────────────────────
function PhotoCard({ photo, globalIndex, onOpen }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35 }}
      onClick={() => onOpen(globalIndex)}
      style={{
        breakInside: 'avoid',
        marginBottom: '12px',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        background: 'var(--grey-light)',
        boxShadow: '0 4px 20px rgba(35,46,92,0.1)',
        display: 'block',
      }}
      whileHover={{ scale: 1.015, zIndex: 2 }}
    >
      <img
        src={photo.src}
        alt={photo.label}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%', display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s',
        }}
      />
      {!loaded && (
        <div style={{ width: '100%', paddingTop: '66%', background: 'var(--grey-light)' }} />
      )}
      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 50%, rgba(35,46,92,0.82) 100%)',
          display: 'flex', alignItems: 'flex-end',
          padding: '0.8rem',
          gap: '0.4rem',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.75)',
          background: 'rgba(255,255,255,0.12)',
          padding: '0.3rem 0.65rem', borderRadius: '2px',
        }}>
          {photo.label} ↗
        </span>
      </motion.div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activeTab === 'all' ? ALL_PHOTOS : ALL_PHOTOS.filter(p => p.cat === activeTab);

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Galeri</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>
              Okul <span style={{ color: 'var(--red)' }}>Yaşamı</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'deki eğitim, etkinlik ve okul hayatından anlar.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div style={{
        position: 'sticky', top: '58px', zIndex: 50,
        background: 'var(--white)',
        borderBottom: '1px solid rgba(35,46,92,0.07)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 2px 16px rgba(35,46,92,0.05)',
      }}>
        <div className="section-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ display: 'flex', gap: '0.25rem', overflowX: 'auto', padding: '0.9rem 0', scrollbarWidth: 'none' }}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flexShrink: 0,
                  padding: '0.45rem 1.1rem',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s, color 0.2s',
                  background: activeTab === tab.id ? 'var(--primary)' : 'rgba(35,46,92,0.05)',
                  color: activeTab === tab.id ? '#fff' : 'var(--text-mid)',
                }}
                onMouseEnter={(e) => { if (activeTab !== tab.id) e.currentTarget.style.background = 'rgba(35,46,92,0.1)'; }}
                onMouseLeave={(e) => { if (activeTab !== tab.id) e.currentTarget.style.background = 'rgba(35,46,92,0.05)'; }}
              >
                {tab.label}
                {tab.id !== 'all' && (
                  <span style={{ marginLeft: '0.35rem', opacity: 0.55, fontSize: '0.6rem' }}>
                    ({ALL_PHOTOS.filter(p => p.cat === tab.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      <section style={{ padding: '3.5rem 0 6rem', background: 'var(--off-white)' }}>
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                columns: '4 220px',
                columnGap: '12px',
              }}
            >
              {filtered.map((photo, i) => {
                const globalIndex = ALL_PHOTOS.indexOf(photo);
                return (
                  <PhotoCard
                    key={photo.src}
                    photo={photo}
                    globalIndex={globalIndex}
                    onOpen={(gi) => setLightboxIdx(gi)}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--grey)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼</div>
              <p style={{ fontFamily: 'var(--font-sans)' }}>Bu kategori için henüz fotoğraf eklenmedi.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            photos={ALL_PHOTOS}
            index={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
            onNav={setLightboxIdx}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 700px) {
          div[style*="columns: 4 220px"] { columns: 2 !important; }
        }
        div[style*="overflow-x: auto"]::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
