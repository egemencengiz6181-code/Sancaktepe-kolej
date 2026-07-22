import { useState } from 'react';

/**
 * PdfFlipBook — PDF viewer component
 * Opens PDF in new tab for reliable cross-browser compatibility
 */
export default function PdfFlipBook({ url = '/web-genel-dergi.pdf' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
      {/* PDF Viewer Card */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '4rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        textAlign: 'center',
      }}>
        {/* PDF Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(220,38,38,0.15)',
          border: '2px solid rgba(220,38,38,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
        }}>
          📄
        </div>

        {/* Title */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#fff',
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            PDF Görüntüleyici
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            Dijital dergimizi görüntülemek için aşağıdaki butona tıklayın.
            <br />
            PDF yeni sekmede açılacaktır.
          </p>
        </div>

        {/* View PDF Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '1rem 2.5rem',
            background: 'var(--red)',
            color: '#fff',
            borderRadius: '8px',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: 'all 0.2s',
            boxShadow: '0 4px 16px rgba(220,38,38,0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(220,38,38,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(220,38,38,0.3)';
          }}
        >
          <span>PDF'i Görüntüle</span>
          <span style={{ fontSize: '1.2rem' }}>→</span>
        </a>

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
          veya indirmek için tıklayın
        </a>
      </div>

      {/* Hint */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.75rem',
        color: 'rgba(255,255,255,0.22)',
        textAlign: 'center',
        margin: 0,
        maxWidth: '600px',
        lineHeight: 1.6,
      }}>
        PDF, tarayıcınızın yerleşik görüntüleyicisi ile açılacaktır. Sayfalar arasında gezinmek,
        yakınlaştırmak ve yazdırmak için tarayıcınızın kontrol panelini kullanabilirsiniz.
      </p>
    </div>
  );
}
