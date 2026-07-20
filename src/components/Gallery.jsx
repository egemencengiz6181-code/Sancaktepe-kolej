import { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const enc = (p) => p.replace(/ /g, '%20');

const galleryImages = [
  // İdari (10 görseller)
  { src: enc('/gallery/idari/IMG_0828.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0830.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0831.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0832.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0833.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0834.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0835.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0836.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0837.jpeg'), alt: 'Kolej Sancaktepe' },
  { src: enc('/gallery/idari/IMG_0838.jpeg'), alt: 'Kolej Sancaktepe' },
  
  // İlkokul (7 görseller)
  { src: enc('/gallery/ilkokul/19.png'), alt: 'Kolej Sancaktepe İlkokul' },
  { src: enc('/gallery/ilkokul/20.png'), alt: 'Kolej Sancaktepe İlkokul' },
  { src: enc('/gallery/ilkokul/21.png'), alt: 'Kolej Sancaktepe İlkokul' },
  { src: enc('/gallery/ilkokul/22.png'), alt: 'Kolej Sancaktepe İlkokul' },
  { src: enc('/gallery/ilkokul/23.png'), alt: 'Kolej Sancaktepe İlkokul' },
  { src: enc('/gallery/ilkokul/24.png'), alt: 'Kolej Sancaktepe İlkokul' },
  { src: enc('/gallery/ilkokul/25.png'), alt: 'Kolej Sancaktepe İlkokul' },
  
  // Ortaokul (7 görseller)
  { src: enc('/gallery/ortaokul/32.png'), alt: 'Kolej Sancaktepe Ortaokul' },
  { src: enc('/gallery/ortaokul/33.png'), alt: 'Kolej Sancaktepe Ortaokul' },
  { src: enc('/gallery/ortaokul/34.png'), alt: 'Kolej Sancaktepe Ortaokul' },
  { src: enc('/gallery/ortaokul/35.png'), alt: 'Kolej Sancaktepe Ortaokul' },
  { src: enc('/gallery/ortaokul/36.png'), alt: 'Kolej Sancaktepe Ortaokul' },
  { src: enc('/gallery/ortaokul/37.png'), alt: 'Kolej Sancaktepe Ortaokul' },
  { src: enc('/gallery/ortaokul/38.png'), alt: 'Kolej Sancaktepe Ortaokul' },
  
  // Anadolu Lisesi (5 görseller)
  { src: enc('/gallery/anadolu lisesi/13.png'), alt: 'Kolej Sancaktepe Anadolu Lisesi' },
  { src: enc('/gallery/anadolu lisesi/14.png'), alt: 'Kolej Sancaktepe Anadolu Lisesi' },
  { src: enc('/gallery/anadolu lisesi/15.png'), alt: 'Kolej Sancaktepe Anadolu Lisesi' },
  { src: enc('/gallery/anadolu lisesi/16.png'), alt: 'Kolej Sancaktepe Anadolu Lisesi' },
  { src: enc('/gallery/anadolu lisesi/17.png'), alt: 'Kolej Sancaktepe Anadolu Lisesi' },
  
  // Kütüphane (7 görseller)
  { src: enc('/gallery/kütüphane/1.png'), alt: 'Kolej Sancaktepe Kütüphane' },
  { src: enc('/gallery/kütüphane/2.png'), alt: 'Kolej Sancaktepe Kütüphane' },
  { src: enc('/gallery/kütüphane/3.png'), alt: 'Kolej Sancaktepe Kütüphane' },
  { src: enc('/gallery/kütüphane/4.png'), alt: 'Kolej Sancaktepe Kütüphane' },
  { src: enc('/gallery/kütüphane/5.png'), alt: 'Kolej Sancaktepe Kütüphane' },
  { src: enc('/gallery/kütüphane/6.png'), alt: 'Kolej Sancaktepe Kütüphane' },
  { src: enc('/gallery/kütüphane/7.png'), alt: 'Kolej Sancaktepe Kütüphane' },
  
  // Sosyal Bahçe (3 görseller)
  { src: enc('/gallery/sosyal bahçe/9.png'), alt: 'Kolej Sancaktepe Sosyal Bahçe' },
  { src: enc('/gallery/sosyal bahçe/10.png'), alt: 'Kolej Sancaktepe Sosyal Bahçe' },
  { src: enc('/gallery/sosyal bahçe/11.png'), alt: 'Kolej Sancaktepe Sosyal Bahçe' },
  
  // Okul Öncesi (4 görseller)
  { src: enc('/gallery/okul öncesi/27.png'), alt: 'Kolej Sancaktepe Okul Öncesi' },
  { src: enc('/gallery/okul öncesi/28.png'), alt: 'Kolej Sancaktepe Okul Öncesi' },
  { src: enc('/gallery/okul öncesi/29.png'), alt: 'Kolej Sancaktepe Okul Öncesi' },
  { src: enc('/gallery/okul öncesi/30.png'), alt: 'Kolej Sancaktepe Okul Öncesi' },
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
          }}</div>
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
