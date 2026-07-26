import { useState, useEffect, useRef, useCallback, forwardRef, useMemo, Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import { t } from '../i18n';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

// Module-level so the object identity is stable — a new object on every render
// makes react-pdf reload the document in a loop.
const PDF_OPTIONS = { cMapUrl: '/cmaps/', cMapPacked: true };

// Pages further than this from the current spread render as blank paper instead
// of a canvas. Keeps memory sane on mobile without ever showing an empty page,
// since flipping only moves one spread at a time.
const RENDER_WINDOW = 3;

const PORTRAIT_BREAKPOINT = 900;
const DEFAULT_ASPECT = 210 / 297; // A4 until the real page size is known

/**
 * A flip page must accept a ref — react-pageflip attaches one to every child.
 * The inner box is sized in real pixels rather than percentages: page-flip wraps
 * cover pages in a different DOM structure where a percentage height has no
 * definite parent to resolve against, which collapses the canvas to 0×0.
 */
const FlipPage = forwardRef(function FlipPage({ width, height, children }, ref) {
  return (
    <div ref={ref} className="ks-flip-page">
      <div className="ks-flip-page-inner" style={{ width, height }}>{children}</div>
    </div>
  );
});

/**
 * Keeps a PDF or flip-engine failure contained. Without this, anything thrown in
 * here bubbles to the route-level boundary and replaces the whole page with
 * "Sayfa yüklenemedi" — a broken brochure should never cost the reader the page.
 */
class PdfBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(err) { console.error('PdfFlipBook hatası:', err); }
  render() {
    if (this.state.failed) return <PdfFallback url={this.props.url} />;
    return this.props.children;
  }
}

function PdfFallback({ url }) {
  return (
    <div style={{
      textAlign: 'center', padding: '3rem',
      background: 'rgba(220,38,38,0.1)', borderRadius: '12px', color: 'var(--red)',
    }}>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', margin: 0 }}>
        {t('PDF yüklenirken bir hata oluştu.')}
      </p>
      <a
        href={url} target="_blank" rel="noopener noreferrer"
        style={{
          marginTop: '1rem', display: 'inline-block', padding: '0.75rem 1.5rem',
          background: 'var(--red)', color: '#fff', borderRadius: '8px',
          textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
        }}
      >
        {t("PDF'i Yeni Sekmede Aç")}
      </a>
    </div>
  );
}

export default function PdfFlipBook({ url = '/web-genel-dergi.pdf' }) {
  return (
    <PdfBoundary url={url}>
      <FlipBook url={url} />
    </PdfBoundary>
  );
}

/**
 * FlipBook — page-turning PDF reader.
 * Desktop: two-page spread with a real corner-curl animation.
 * Mobile: single page, swipeable. Both use the same react-pageflip engine.
 */
function FlipBook({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [aspect, setAspect] = useState(DEFAULT_ASPECT);
  const [page, setPage] = useState(0);          // 0-indexed, from onFlip
  const [error, setError] = useState(null);
  const [containerW, setContainerW] = useState(0);

  const wrapRef = useRef(null);
  const bookRef = useRef(null);

  // Track the available width so the book can be sized in real pixels —
  // react-pageflip needs concrete dimensions, not percentages.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => setContainerW(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const portrait = containerW > 0 && containerW < PORTRAIT_BREAKPOINT;

  const { pageW, pageH } = useMemo(() => {
    if (!containerW) return { pageW: 0, pageH: 0 };
    // Leave a gutter so the spread never touches the container edge, and cap the
    // page so a two-page spread always fits side by side.
    const avail = containerW - (portrait ? 24 : 72);
    const w = portrait ? Math.min(avail, 460) : Math.min(avail / 2, 520);
    return { pageW: Math.floor(w), pageH: Math.round(w / aspect) };
  }, [containerW, portrait, aspect]);

  const onDocumentLoadSuccess = useCallback(async (pdf) => {
    setNumPages(pdf.numPages);
    try {
      const first = await pdf.getPage(1);
      const { width, height } = first.getViewport({ scale: 1 });
      if (width > 0 && height > 0) setAspect(width / height);
    } catch {
      /* keep the A4 default */
    }
  }, []);

  const onDocumentLoadError = useCallback((err) => {
    console.error('PDF yükleme hatası:', err);
    setError('PDF yüklenirken bir hata oluştu.');
  }, []);

  const flipPrev = useCallback(() => bookRef.current?.pageFlip()?.flipPrev(), []);
  const flipNext = useCallback(() => bookRef.current?.pageFlip()?.flipNext(), []);

  // Arrow-key navigation while the book is on screen
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') flipPrev();
      else if (e.key === 'ArrowRight') flipNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flipPrev, flipNext]);

  const canPrev = page > 0;
  const canNext = numPages ? page < numPages - 1 : false;
  const ready = Boolean(numPages) && pageW > 0;

  if (error) return <PdfFallback url={url} />;

  const navBtn = (enabled) => ({
    padding: portrait ? '0.6rem 1rem' : '0.75rem 1.5rem',
    background: enabled ? 'var(--red)' : 'rgba(255,255,255,0.1)',
    color: enabled ? '#fff' : 'rgba(255,255,255,0.3)',
    border: 'none', borderRadius: '8px',
    fontFamily: 'var(--font-sans)',
    fontSize: portrait ? '0.8rem' : '0.9rem',
    fontWeight: 600,
    cursor: enabled ? 'pointer' : 'not-allowed',
    transition: 'all 0.2s',
    display: 'flex', alignItems: 'center', gap: '0.5rem',
  });

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: '2rem', width: '100%', padding: '2rem 1rem',
    }}>
      <div style={{
        position: 'relative', width: '100%', maxWidth: '1200px',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderRadius: '16px', boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
        overflow: 'hidden',
      }}>
        <div ref={wrapRef} style={{
          padding: portrait ? '1.25rem 0.5rem' : '2.5rem 1rem',
          display: 'flex', justifyContent: 'center',
          minHeight: pageH ? pageH + 40 : 420,
          // A turning page sweeps outside the book's own box; keep it off the controls
          overflow: 'hidden',
        }}>
          <Document
            file={url}
            options={PDF_OPTIONS}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div style={{
                padding: '4rem', textAlign: 'center',
                color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-sans)',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📄</div>
                <p>{t('PDF yükleniyor...')}</p>
              </div>
            }
          >
            {ready && (
              <HTMLFlipBook
                /* Remount when the geometry changes — page-flip caches sizes on init */
                key={`${pageW}x${pageH}-${portrait ? 'p' : 'l'}-${numPages}`}
                ref={bookRef}
                width={pageW}
                height={pageH}
                size="fixed"
                usePortrait={portrait}
                showCover
                drawShadow
                maxShadowOpacity={0.45}
                flippingTime={750}
                useMouseEvents
                mobileScrollSupport
                swipeDistance={20}
                startPage={0}
                onFlip={(e) => setPage(e.data)}
                className="ks-flipbook"
              >
                {Array.from({ length: numPages }, (_, i) => {
                  const n = i + 1;
                  const near = Math.abs(i - page) <= RENDER_WINDOW;
                  return (
                    <FlipPage key={n} width={pageW} height={pageH}>
                      {near ? (
                        <Page
                          pageNumber={n}
                          width={pageW}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                          loading=""
                        />
                      ) : (
                        <div style={{ width: pageW, height: pageH, background: '#fff' }} />
                      )}
                    </FlipPage>
                  );
                })}
              </HTMLFlipBook>
            )}
          </Document>
        </div>

        {ready && (
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: portrait ? '1rem' : '1.5rem 2rem',
            background: 'rgba(0,0,0,0.3)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            gap: '0.5rem',
          }}>
            <button onClick={flipPrev} disabled={!canPrev} style={navBtn(canPrev)}>
              <span>←</span>
              <span>{t('Önceki')}</span>
            </button>

            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: portrait ? '0.8rem' : '0.9rem',
              color: 'rgba(255,255,255,0.8)', textAlign: 'center',
            }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                {portrait || page === 0 || page === numPages - 1
                  ? `${t('Sayfa')} ${page + 1}`
                  : `${t('Sayfa')} ${page + 1}-${Math.min(page + 2, numPages)}`}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                {`${t('Toplam')} ${numPages} ${t('sayfa')}`}
              </div>
            </div>

            <button onClick={flipNext} disabled={!canNext} style={navBtn(canNext)}>
              <span>{t('Sonraki')}</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>

      <a
        href={url}
        download
        style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)', textDecoration: 'underline',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
      >
        {t('⬇ PDF İndir')}
      </a>

      <style>{`
        .ks-flipbook { margin: 0 auto; }
        .ks-flip-page {
          background: #fff;
          overflow: hidden;
          -webkit-user-select: none;
          user-select: none;
        }
        .ks-flip-page-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #fff;
        }
        /* page-flip ships ".stf__parent canvas { position:absolute; width:100%; height:100% }"
           for its own render-mode canvas. That rule also captures react-pdf's page
           canvas, pinning it to the top-left of a zero-sized wrapper — which is why
           pages rendered blank or half cut off. Put it back in normal flow. */
        .stf__parent canvas.react-pdf__Page__canvas {
          position: static;
          left: auto;
          top: auto;
          width: auto;
          height: auto;
          display: block;
          max-width: 100%;
        }
        .ks-flip-page .react-pdf__Page { position: relative; line-height: 0; }
        .stf__wrapper { margin: 0 auto; }
      `}</style>
    </div>
  );
}
