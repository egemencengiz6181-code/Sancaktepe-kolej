import { useState, useRef, forwardRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Forward-ref wrapper so react-pageflip can manage page elements
const PdfPageSlide = forwardRef(function PdfPageSlide({ pageNumber, width, height }, ref) {
  return (
    <div ref={ref} style={{ background: '#fff', overflow: 'hidden', width, height }}>
      <Page
        pageNumber={pageNumber}
        width={width}
        height={height}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </div>
  );
});

export default function PdfFlipBook({ url = '/web%20genel%20dergi.pdf' }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const bookRef = useRef(null);

  const onDocumentLoad = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const prevPage = () => bookRef.current?.pageFlip().flipPrev();
  const nextPage = () => bookRef.current?.pageFlip().flipNext();

  // Responsive width: fit inside container
  const PAGE_W = 420;
  const PAGE_H = Math.round(PAGE_W * 1.414); // A4 ratio

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
      {isLoading && (
        <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4rem 0' }}>
          Dergi Yükleniyor...
        </div>
      )}

      <Document
        file={url}
        onLoadSuccess={onDocumentLoad}
        onLoadError={() => setIsLoading(false)}
        loading={null}
      >
        {numPages && (
          <>
            <div style={{ position: 'relative' }} className="flipbook-wrap">
              <HTMLFlipBook
                ref={bookRef}
                width={PAGE_W}
                height={PAGE_H}
                size="fixed"
                minWidth={280}
                maxWidth={PAGE_W}
                minHeight={400}
                maxHeight={PAGE_H}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onFlip}
                className="flipbook"
                style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6)', borderRadius: '4px' }}
                startPage={0}
                drawShadow={true}
                flippingTime={700}
                usePortrait={false}
                startZIndex={20}
                autoSize={false}
                maxShadowOpacity={0.5}
                showPageCorners={true}
                disableFlipByClick={false}
              >
                {Array.from({ length: numPages }, (_, i) => (
                  <PdfPageSlide key={i} pageNumber={i + 1} width={PAGE_W} height={PAGE_H} />
                ))}
              </HTMLFlipBook>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <button
                onClick={prevPage}
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff', fontSize: '1.4rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.borderColor = 'var(--red)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              >‹</button>

              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', minWidth: '80px', textAlign: 'center' }}>
                {currentPage + 1} / {numPages}
              </span>

              <button
                onClick={nextPage}
                style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff', fontSize: '1.4rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              >›</button>
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
              Sayfaları çevirmek için tıklayın veya köşeyi sürükleyin
            </p>
          </>
        )}
      </Document>

      <style>{`
        .flipbook-wrap .flipbook { margin: 0 auto; }
        @media (max-width: 500px) {
          .flipbook-wrap .stf__wrapper { transform: scale(0.7); transform-origin: top center; }
        }
      `}</style>
    </div>
  );
}
