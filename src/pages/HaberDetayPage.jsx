import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getNewsBySlug, getRelatedNews } from '../data/news';

const tagColors = {
  Akademi: '#232e5c',
  Etkinlik: '#0891b2',
  Kültür: '#7c3aed',
  Spor: '#16a34a',
  Akreditasyon: '#e61936',
  Kariyer: '#d97706',
};

function BlockRenderer({ block, i }) {
  switch (block.type) {
    case 'lead':
      return (
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.75,
          marginBottom: '2rem', paddingBottom: '2rem',
          borderBottom: '1px solid var(--grey-light)',
        }}>
          {block.text}
        </p>
      );
    case 'heading':
      return (
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
          fontWeight: 700, color: 'var(--primary)',
          marginTop: '2.5rem', marginBottom: '1rem',
          paddingTop: '0.5rem',
        }}>
          {block.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '1rem',
          color: 'var(--text-mid)', lineHeight: 1.9,
          marginBottom: '1.25rem',
        }}>
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {block.items.map((item, idx) => (
            <li key={idx} style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
              color: 'var(--text-mid)', lineHeight: 1.7,
              padding: '0.75rem 1rem',
              background: 'var(--off-white)',
              borderRadius: '6px',
              borderLeft: '3px solid var(--red)',
            }}>
              {item}
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote style={{
          margin: '2rem 0',
          padding: '1.75rem 2rem',
          background: 'linear-gradient(135deg, #f8f6ff 0%, #fff0f2 100%)',
          borderLeft: '4px solid var(--red)',
          borderRadius: '0 10px 10px 0',
          boxShadow: '0 4px 20px rgba(230,25,54,0.06)',
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontStyle: 'italic', fontWeight: 500,
            color: 'var(--primary)', lineHeight: 1.6,
            marginBottom: '0.75rem',
          }}>
            {block.text}
          </p>
          {block.attribution && (
            <cite style={{
              fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--grey)', fontStyle: 'normal',
            }}>
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function HaberDetayPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getNewsBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!article) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--primary)' }}>Haber bulunamadı</h2>
        <Link to="/haberler" style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)', textDecoration: 'none' }}>
          ← Tüm Haberler
        </Link>
      </div>
    );
  }

  const tagColor = tagColors[article.tag] || 'var(--primary)';
  const related = getRelatedNews(article.related || []);

  return (
    <div style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

      {/* ── Hero Image ── */}
      <div style={{ position: 'relative', height: 'clamp(300px, 50vw, 520px)', overflow: 'hidden' }}>
        <motion.img
          src={article.img}
          alt={article.title}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,18,40,0.3) 0%, rgba(10,18,40,0.72) 100%)',
        }} />
        {/* Hero text */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '3rem 0 2.5rem',
        }}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Breadcrumb */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Ana Sayfa</Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                <Link to="/haberler" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Haberler</Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{article.tag}</span>
              </div>
              {/* Tag */}
              <div style={{
                display: 'inline-block',
                background: tagColor, color: '#fff',
                fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '0.3rem 0.8rem', borderRadius: '3px',
                marginBottom: '1rem',
              }}>{article.tag}</div>
              {/* Title */}
              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                fontWeight: 700, color: '#fff', lineHeight: 1.2,
                maxWidth: '820px',
              }}>
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Article Layout ── */}
      <div className="section-container" style={{ padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '3rem',
          paddingTop: '3rem',
          paddingBottom: '5rem',
          alignItems: 'start',
        }}
          className="article-grid"
        >
          {/* Main content */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: 'var(--white)',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              border: '1px solid var(--grey-light)',
              boxShadow: '0 4px 30px rgba(35,46,92,0.06)',
            }}
          >
            {/* Meta */}
            <div style={{
              display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
              alignItems: 'center',
              padding: '1rem 0 1.75rem',
              borderBottom: '1px solid var(--grey-light)',
              marginBottom: '1.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: `${tagColor}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem',
                }}>✍️</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-dark)' }}>{article.author}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 700, color: 'var(--grey)', letterSpacing: '0.06em' }}>{article.date}</div>
                </div>
              </div>
              <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>⏱</span>{article.readTime}
              </div>
            </div>

            {/* Body */}
            {article.body.map((block, i) => (
              <BlockRenderer key={i} block={block} i={i} />
            ))}

            {/* Back button */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--grey-light)' }}>
              <Link
                to="/haberler"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--primary)', textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid var(--grey-light)',
                  borderRadius: '4px',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--grey-light)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}
              >
                ← Tüm Haberlere Dön
              </Link>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            className="article-sidebar"
          >
            {/* About box */}
            <div style={{
              background: 'var(--white)',
              borderRadius: '12px',
              border: '1px solid var(--grey-light)',
              padding: '1.5rem',
              boxShadow: '0 4px 20px rgba(35,46,92,0.05)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>
                Haber Detayları
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Kategori', value: article.tag, color: tagColor },
                  { label: 'Yayın Tarihi', value: article.date },
                  { label: 'Okuma Süresi', value: article.readTime },
                  { label: 'Yazar', value: article.author },
                ].map((row) => (
                  <div key={row.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)' }}>{row.label}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: row.color || 'var(--text-dark)' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related news */}
            {related.length > 0 && (
              <div style={{
                background: 'var(--white)',
                borderRadius: '12px',
                border: '1px solid var(--grey-light)',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(35,46,92,0.05)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '1rem' }}>
                  İlgili Haberler
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {related.map((rel) => (
                    <Link key={rel.slug} to={`/haberler/${rel.slug}`} style={{ textDecoration: 'none', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <img
                        src={rel.imgThumb}
                        alt={rel.title}
                        style={{ width: '64px', height: '48px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
                      />
                      <div>
                        <div style={{
                          display: 'inline-block',
                          background: `${tagColors[rel.tag] || '#999'}20`,
                          color: tagColors[rel.tag] || '#999',
                          fontFamily: 'var(--font-display)', fontSize: '0.52rem', fontWeight: 800,
                          letterSpacing: '0.12em', textTransform: 'uppercase',
                          padding: '0.15rem 0.4rem', borderRadius: '2px',
                          marginBottom: '0.3rem',
                        }}>{rel.tag}</div>
                        <p style={{
                          fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600,
                          color: 'var(--text-dark)', lineHeight: 1.4,
                          transition: 'color 0.2s',
                        }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dark)')}
                        >
                          {rel.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
              borderRadius: '12px', padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                Okul hakkında daha fazla bilgi alın
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', lineHeight: 1.6 }}>
                Kayıt ve bilgi için bizimle iletişime geçin.
              </p>
              <Link to="/iletisim" style={{
                display: 'block',
                fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#fff', textDecoration: 'none',
                background: 'var(--red)',
                padding: '0.75rem 1rem', borderRadius: '4px',
                transition: 'all 0.25s',
                boxShadow: '0 4px 14px rgba(230,25,54,0.35)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(230,25,54,0.45)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(230,25,54,0.35)'; }}
              >
                İletişime Geç
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .article-grid { grid-template-columns: 1fr !important; }
          .article-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
