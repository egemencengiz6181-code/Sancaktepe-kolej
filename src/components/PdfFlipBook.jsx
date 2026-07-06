import { useState, useCallback, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Non-ESM worker (export stripped) — works as a regular Worker in all browsers
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const PAGE_W = 400;
const PAGE_H = Math.round(PAGE_W * 1.414); // A4 ratio

// Flip animation — 3D rotateY
const flipVariants = {
  enterRight:  { rotateY: 90,  opacity: 0, filter: 'brightness(0.4)' },
  enterLeft:   { rotateY: -90, opacity: 0, filter: 'brightness(0.4)' },
  visible:     { rotateY: 0,   opacity: 1, filter: 'brightness(1)' },
  exitRight:   { rotateY: -90, opacity: 0, filter: 'brightness(0.4)' },
  exitLeft:    { rotateY: 90,  opacity: 0, filter: 'brightness(0.4)' },
};

// Spread: show even/odd pages as facing pages (left + right)
function getSpreadStart(page, numPages) {
  // page 1 is cover (right only), then page 2-3, 4-5, …
  if (page <= 1) return 1;
  return page % 2 === 0 ? page : page - 1;
}

export default function PdfFlipBook({ url = '/web%20genel%20dergi.pdf' }) {
  const [numPages, setNumPages] = useState(null);
  const [spreadStart, setSpreadStart] = useState(1); // first page of current spread
  const [direction, setDirection] = useState(1);     // 1=forward, -1=backward
  const [loadError, setLoadError] = useState(false);
  const containerRef = useRef(null);

  const onDocLoad = useCallback(({ numPages }) => setNumPages(numPages), []);
  const onDocError = useCallback(() => setLoadError(true), []);

  // Spread pages: cover is alone, others in pairs
  const isCover    = spreadStart === 1;
  const leftPage   = isCover ? null : spreadStart;
  const rightPage  = isCover ? 1 : (spreadStart + 1 <= numPages ? spreadStart + 1 : null);

  const canGoNext = numPages && spreadStart < numPages - (isCover ? 0 : 1);
  const canGoPrev = spreadStart > 1;

  const goNext = () => {
    if (!canGoNext) return;
    setDirection(1);
    setSpreadStart(isCover ? 2 : spreadStart + 2);
  };
  const goPrev = () => {
    if (!canGoPrev) return;
    setDirection(-1);
    setSpreadStart(spreadStart <= 2 ? 1 : spreadStart - 2);
  };

  const navBtnStyle = (disabled) => ({
    width: '46px', height: '46px', borderRadius: '50%',
    border: `1px solid ${disabled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)'}`,
    background: disabled ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.1)',
    color: disabled ? 'rgba(255,255,255,0.2)' : '#fff',
    fontSize: '1.5rem', cursor: disabled ? 'default' : 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 0.2s',
    flexShrink: 0,
  });

  // Page number display
  const currentPageNum = isCover ? 1 : spreadStart;
  const totalLabel     = numPages ? `${currentPageNum}${!isCover && rightPage ? `–${rightPage}` : ''} / ${numPages}` : '…';

  const spreadKey = `spread-${spreadStart}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', userSelect: 'none' }}>
      {loadError && (
        <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', textAlign: 'center', padding: '3rem 1rem' }}>
          PDF yüklenemedi.{' '}
          <a href={url} style={{ color: 'var(--red)', textDecoration: 'underline' }}>Buradan indirebilirsiniz.</a>
        </div>
      )}

      {!loadError && (
        <Document
          file={url}
          onLoadSuccess={onDocLoad}
          onLoadError={onDocError}
          loading={
            <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5rem 2rem', textAlign: 'center' }}>
              Yükleniyor…
            </div>
          }
        >
          {numPages && (
            <>
              {/* Book block */}
              <div ref={containerRef} style={{ position: 'relative' }}>
                {/* Book shadow/spine glow */}
                <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '20px', background: 'rgba(0,0,0,0.4)', filter: 'blur(12px)', borderRadius: '50%', zIndex: 0 }} />

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={spreadKey}
                    custom={direction}
                    initial={direction > 0 ? 'enterRight' : 'enterLeft'}
                    animate="visible"
                    exit={direction > 0 ? 'exitRight' : 'exitLeft'}
                    variants={flipVariants}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    style={{ perspective: '2000px', display: 'flex', gap: 0, position: 'relative', zIndex: 1 }}
                  >
                    {/* Left page */}
                    {leftPage ? (
                      <div style={{ boxShadow: 'inset -4px 0 12px rgba(0,0,0,0.25), 0 4px 30px rgba(0,0,0,0.5)', borderRadius: '4px 0 0 4px', overflow: 'hidden', background: '#fff' }}>
                        <Page pageNumber={leftPage} width={PAGE_W} renderAnnotationLayer={false} renderTextLayer={false} />
                      </div>
                    ) : null}

                    {/* Right page / cover */}
                    {rightPage ? (
                      <div style={{ boxShadow: leftPage ? 'inset 4px 0 12px rgba(0,0,0,0.15), 0 4px 30px rgba(0,0,0,0.5)' : '0 8px 50px rgba(0,0,0,0.6)', borderRadius: leftPage ? '0 4px 4px 0' : '4px', overflow: 'hidden', background: '#fff' }}>
                        <Page pageNumber={rightPage} width={PAGE_W} renderAnnotationLayer={false} renderTextLayer={false} />
                      </div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <button
                  onClick={goPrev}
                  disabled={!canGoPrev}
                  style={navBtnStyle(!canGoPrev)}
                  onMouseEnter={(e) => { if (canGoPrev) e.currentTarget.style.background = 'var(--red)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = canGoPrev ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)'; }}
                >‹</button>

                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', minWidth: '90px', textAlign: 'center' }}>
                  {totalLabel}
                </span>

                <button
                  onClick={goNext}
                  disabled={!canGoNext}
                  style={navBtnStyle(!canGoNext)}
                  onMouseEnter={(e) => { if (canGoNext) e.currentTarget.style.background = 'var(--primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = canGoNext ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)'; }}
                >›</button>
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: 0 }}>
                Sayfaları ilerletmek için okları kullanın
              </p>
            </>
          )}
        </Document>
      )}

      <style>{`
        @media (max-width: 920px) {
          .flipbook-spread > div { display: none !important; }
          .flipbook-spread > div:last-child { display: block !important; border-radius: 4px !important; box-shadow: 0 8px 40px rgba(0,0,0,0.6) !important; }
        }
      `}</style>
    </div>
  );
}


