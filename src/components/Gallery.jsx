import { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { src: '/gallery/IMG_0828.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0830.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0831.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0832.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0833.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0834.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0835.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0836.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0837.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/IMG_0838.jpeg', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/Varl%C4%B1k%205.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/Varl%C4%B1k%206.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-23%20at%2016.06.59%20(6).webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-23%20at%2016.06.59%20(7).webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-23%20at%2016.06.59%20(8).webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-23%20at%2016.07.00%20(8)%20-%20Kopya.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-28%20at%2017.37.08-1.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-28%20at%2017.37.09-9.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-28%20at%2017.37.14%20(2)-9.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-28%20at%2017.37.14%20(3)-1.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-28%20at%2017.37.16%20(1)-7.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-01-28%20at%2017.37.17%20(2)-0.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-04-04%20at%2014.07.27%20(1)-5.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-04-04%20at%2014.07.27%20(2)-9.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-04-04%20at%2014.07.27%20(3)-8.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-04-04%20at%2014.07.27-4.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-04-04%20at%2014.07.30%20(1)-8.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-04-04%20at%2014.07.31%20(2)-2.webp', alt: 'Kolej Sancaktepe' },
  { src: '/gallery/WhatsApp%20Image%202026-04-04%20at%2014.07.31-7.webp', alt: 'Kolej Sancaktepe' },
];

function GalleryItem({ img, index, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ scale: 1.02, zIndex: 2 }}
      onClick={() => !error && onClick(index)}
      style={{
        position: 'relative',
        aspectRatio: index % 7 === 0 ? '16 / 9' : '1 / 1',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: error ? 'default' : 'pointer',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        gridColumn: index % 7 === 0 ? 'span 2' : 'span 1',
      }}
    >
      {!error ? (
        <>
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.4s, transform 0.4s',
            }}
          />
          {!loaded && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                style={{
                  width: '24px',
                  height: '24px',
                  border: '2px solid rgba(201,168,76,0.3)',
                  borderTopColor: 'var(--gold)',
                  borderRadius: '50%',
                }}
              />
            </div>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(10,22,40,0.8) 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '1rem',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold-light)',
            }}>Büyüt ↗</span>
          </motion.div>
        </>
      ) : (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
          }}>🖼</div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
          }}>foto{index + 1}.jpg</span>
        </div>
      )}
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState(null);

  const close = useCallback(() => setLightbox(null), []);

  return (
    <section
      id="gallery"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #0c1d38 0%, #0a1628 100%)',
        position: 'relative',
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <div className="gold-line" />
            <span className="section-tag">Galeri</span>
            <div className="gold-line" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Okul <span>Yaşamı</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>
            Kolej Sancaktepe'de eğitim ve yaşam iç içe geçer. Fotoğrafları{' '}
            <code style={{ color: 'var(--gold)', fontSize: '0.85em' }}>public/gallery/</code>{' '}
            klasörüne ekleyebilirsiniz.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.75rem',
          gridAutoRows: '200px',
        }}>
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} onClick={setLightbox} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(6,16,30,0.95)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              backdropFilter: 'blur(12px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '900px',
                width: '100%',
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              <img
                src={galleryImages[lightbox]?.src}
                alt={galleryImages[lightbox]?.alt}
                style={{ width: '100%', display: 'block', maxHeight: '80vh', objectFit: 'contain', background: 'rgba(10,22,40,0.8)' }}
              />
              <button
                onClick={close}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(10,22,40,0.9)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  color: 'var(--gold)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >×</button>

              {/* Prev / Next */}
              {lightbox > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(10,22,40,0.9)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: 'var(--gold)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >‹</button>
              )}
              {lightbox < galleryImages.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(10,22,40,0.9)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: 'var(--gold)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >›</button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          #gallery .section-container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 160px !important;
          }
        }
        @media (max-width: 500px) {
          #gallery .section-container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 130px !important;
          }
        }
      `}</style>
    </section>
  );
}
