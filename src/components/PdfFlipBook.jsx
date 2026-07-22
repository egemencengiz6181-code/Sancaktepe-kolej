import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

/**
 * PdfFlipBook — Interactive PDF viewer with page-turning functionality
 */
export default function PdfFlipBook({ url = '/web-genel-dergi.pdf' }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error) {
    console.error('PDF yükleme hatası:', error);
    setError('PDF yüklenirken bir hata oluştu.');
    setLoading(false);
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 2));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(numPages, prev + 2));
  };

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < numPages;

  if (error) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '3rem', 
        background: 'rgba(220,38,38,0.1)', 
        borderRadius: '12px',
        color: 'var(--red)'
      }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', margin: 0 }}>{error}</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            marginTop: '1rem',
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: 'var(--red)',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem'
          }}
        >
          PDF'i Yeni Sekmede Aç
        </a>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '2rem',
      width: '100%',
      padding: '2rem 1rem'
    }}>
      {/* PDF Viewer Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderRadius: '16px',
        boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
        overflow: 'hidden',
      }}>
        {loading && (
          <div style={{
            padding: '4rem',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'var(--font-sans)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📄</div>
            <p>PDF yükleniyor...</p>
          </div>
        )}

        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading=""
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '2rem',
            minHeight: '600px',
          }}>
            {/* Left Page */}
            {currentPage <= numPages && (
              <div style={{
                flex: '0 0 45%',
                maxWidth: '500px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#fff',
                transition: 'transform 0.3s ease',
              }}>
                <Page
                  pageNumber={currentPage}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={500}
                />
              </div>
            )}

            {/* Right Page */}
            {currentPage + 1 <= numPages && (
              <div style={{
                flex: '0 0 45%',
                maxWidth: '500px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#fff',
                transition: 'transform 0.3s ease',
              }}>
                <Page
                  pageNumber={currentPage + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={500}
                />
              </div>
            )}
          </div>
        </Document>

        {/* Navigation Controls */}
        {!loading && numPages && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            background: 'rgba(0,0,0,0.3)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            {/* Previous Button */}
            <button
              onClick={goToPrevPage}
              disabled={!canGoPrev}
              style={{
                padding: '0.75rem 1.5rem',
                background: canGoPrev ? 'var(--red)' : 'rgba(255,255,255,0.1)',
                color: canGoPrev ? '#fff' : 'rgba(255,255,255,0.3)',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: canGoPrev ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>←</span>
              <span>Önceki</span>
            </button>

            {/* Page Info */}
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.8)',
              textAlign: 'center',
            }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                Sayfa {currentPage}{currentPage + 1 <= numPages && `-${currentPage + 1}`}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                Toplam {numPages} sayfa
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={!canGoNext}
              style={{
                padding: '0.75rem 1.5rem',
                background: canGoNext ? 'var(--red)' : 'rgba(255,255,255,0.1)',
                color: canGoNext ? '#fff' : 'rgba(255,255,255,0.3)',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: canGoNext ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Sonraki</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>

      {/* Download Link */}
      <a
        href={url}
        download
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)',
          textDecoration: 'underline',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
      >
        ⬇ PDF İndir
      </a>
    </div>
  );
}
