import { useState } from 'react';

/**
 * PdfFlipBook — reliable cross-environment PDF viewer.
 * Uses the browser's native PDF renderer via <iframe>.
 * No workers, no pdfjs, no crashes.
 */
export default function PdfFlipBook({ url = '/web%20genel%20dergi.pdf' }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%' }}>
      {/* Viewer frame */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
        background: '#1a1a2e',
        aspectRatio: '4/3',
        minHeight: '480px',
      }}>
        {/* Loading overlay */}
        {!loaded && !error && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            background: '#1a1a2e',
            zIndex: 2,
          }}>
            Yükleniyor…
          </div>
        )}

        {error ? (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem',
            color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', textAlign: 'center', padding: '2rem',
          }}>
            <span>PDF görüntüleyici yüklenemedi.</span>
            <a href={url} download style={{
              padding: '0.6rem 1.4rem', background: 'var(--red)', color: '#fff',
              borderRadius: '6px', fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '0.75rem', letterSpacing: '0.1em', textDecoration: 'none',
              textTransform: 'uppercase',
            }}>
              ⬇ PDF İndir
            </a>
          </div>
        ) : (
          <iframe
            src={url + '#toolbar=1&navpanes=1&scrollbar=1&view=FitH'}
            title="PDF Görüntüleyici"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            style={{
              width: '100%', height: '100%',
              border: 'none',
              display: 'block',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        )}
      </div>

      {/* Hint */}
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
        color: 'rgba(255,255,255,0.22)', textAlign: 'center', margin: 0,
      }}>
        Tam ekran için sağ üst köşedeki simgeyi kullanın
      </p>
    </div>
  );
}
