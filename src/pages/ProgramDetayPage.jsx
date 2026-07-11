import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { programs } from '../data/programs';

const PdfFlipBook = lazy(() => import('../components/PdfFlipBook'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function ProgramDetayPage() {
  const { id } = useParams();
  const prog = programs.find((p) => p.id === id);
  if (!prog) return <Navigate to="/programlar" replace />;

  const parentProg = prog.parent ? programs.find((p) => p.id === prog.parent) : null;
  const others = programs.filter((p) => !p.parent && p.id !== id);

  return (
    <>
      {/* HERO */}
      <section style={{
        background: `linear-gradient(135deg, rgba(26,35,71,0.93) 0%, rgba(35,46,92,0.88) 55%, rgba(46,61,122,0.88) 100%), url('/gallery/IMG_0834.jpeg') center / cover no-repeat`,
        padding: '8rem 0 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }} />
        {/* Color glow */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: `radial-gradient(circle, ${prog.color}22 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '10%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: `radial-gradient(circle, ${prog.accent}15 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}
          >
            <Link to="/programlar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
            >Programlar</Link>
            {parentProg && (
              <>
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
                <Link to={`/programlar/${parentProg.id}`} style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >{parentProg.tag}</Link>
              </>
            )}
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{prog.tag}</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }} className="program-hero-grid">
            <div>
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: `${prog.color}22`, border: `1px solid ${prog.color}55`, borderRadius: '4px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.2em', color: prog.accent === '#ff3352' ? '#ff6b85' : prog.accent }}>{prog.tag}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.75rem' }}
              >
                {prog.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', color: prog.accent === '#ff3352' ? 'rgba(255,107,133,0.85)' : `${prog.accent}cc`, marginBottom: '1.5rem', textTransform: 'uppercase' }}
              >
                {prog.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, maxWidth: '600px' }}
              >
                {prog.heroDesc}
              </motion.p>
            </div>

            {/* Icon bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '140px', height: '140px', borderRadius: '50%',
                background: `${prog.color}22`,
                border: `2px solid ${prog.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '4rem', flexShrink: 0,
              }}
            >
              {prog.icon}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOTTOM ACCENT BAR */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${prog.color}, ${prog.accent}, transparent)` }} />

      {/* MAIN CONTENT */}
      <section style={{ padding: '6rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }} className="program-content-grid">

            {/* LEFT: Sticky sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              {/* Quick summary card */}
              <motion.div {...fadeUp(0)} style={{
                background: 'var(--white)', borderRadius: '10px',
                border: `2px solid ${prog.color}20`,
                overflow: 'hidden',
                boxShadow: '0 4px 30px rgba(35,46,92,0.08)',
                marginBottom: '1.5rem',
              }}>
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${prog.color}, ${prog.accent})` }} />
                <div style={{ padding: '2rem' }}>
                  
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.2em', color: prog.color, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{prog.tag}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.35, marginBottom: '1rem' }}>{prog.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{prog.desc}</p>
                </div>
              </motion.div>

              {/* Goals card */}
              <motion.div {...fadeUp(0.1)} style={{
                background: `linear-gradient(135deg, ${prog.color}0d, ${prog.color}05)`,
                borderRadius: '10px',
                border: `1px solid ${prog.color}25`,
                padding: '1.75rem',
                marginBottom: '1.5rem',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: prog.color, marginBottom: '1rem' }}>Program Amaçları</p>
                {prog.goals.map((g, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                    
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{g}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div {...fadeUp(0.2)}>
                <Link to="/iletisim" style={{
                  display: 'block', textDecoration: 'none', textAlign: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#fff', background: 'linear-gradient(135deg, var(--red), var(--red-light))',
                  padding: '1rem', borderRadius: '6px',
                  boxShadow: '0 6px 24px rgba(230,25,54,0.3)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(230,25,54,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(230,25,54,0.3)'; }}
                >
                  Kayıt &amp; Bilgi Al →
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: Detailed content */}
            <div>

              {/* Detay bölümleri */}
              <motion.div {...fadeUp(0.1)} style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ width: '4px', height: '32px', background: `linear-gradient(180deg, ${prog.color}, ${prog.accent})`, borderRadius: '2px' }} />
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Program</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="details-grid">
                  {prog.details.map((d, i) => (
                    <motion.div
                      key={i} {...fadeUp(i * 0.08)}
                      style={{
                        background: 'var(--white)', borderRadius: '10px',
                        padding: '1.75rem',
                        border: '1px solid var(--grey-light)',
                        boxShadow: '0 2px 20px rgba(35,46,92,0.06)',
                        position: 'relative', overflow: 'hidden',
                      }}
                    >
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                        background: `linear-gradient(90deg, ${prog.color}, ${prog.accent})`,
                      }} />
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: prog.color, marginBottom: '0.6rem' }}>0{i + 1}</div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem', lineHeight: 1.35 }}>{d.title}</h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{d.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Alt programlar (BÖGEP, KVYOD gibi) */}
              {prog.subPrograms && prog.subPrograms.length > 0 && (
                <motion.div {...fadeUp(0.15)} style={{ marginBottom: '3.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                    <div style={{ width: '4px', height: '32px', background: `linear-gradient(180deg, ${prog.color}, ${prog.accent})`, borderRadius: '2px' }} />
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Kapsamındaki Programlar</h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem' }}>
                    {prog.subPrograms.map((subId, i) => {
                      const sub = programs.find((p) => p.id === subId);
                      if (!sub) return null;
                      return (
                        <motion.div key={subId} {...fadeUp(i * 0.07)}>
                          <Link to={`/programlar/${subId}`} style={{ textDecoration: 'none', display: 'block' }}>
                            <div
                              style={{
                                background: 'var(--white)', borderRadius: '10px',
                                padding: '1.5rem',
                                border: `2px solid ${prog.color}15`,
                                borderTop: `4px solid ${sub.accent}`,
                                boxShadow: '0 2px 16px rgba(35,46,92,0.07)',
                                transition: 'all 0.25s',
                                cursor: 'pointer',
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.borderColor = prog.color; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 28px ${prog.color}20`; }}
                              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${prog.color}15`; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,46,92,0.07)'; }}
                            >
                              
                              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: prog.color }}>{sub.tag}</span>
                              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.35rem', lineHeight: 1.35 }}>{sub.title}</p>
                              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.63rem', fontWeight: 700, color: 'var(--red)', marginTop: '0.75rem', letterSpacing: '0.06em' }}>Detaylar →</p>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Uygulama notu */}
              <motion.div {...fadeUp(0.2)} style={{
                background: `linear-gradient(135deg, ${prog.color}10, ${prog.accent}08)`,
                borderRadius: '10px',
                border: `1px solid ${prog.color}25`,
                padding: '2rem',
                borderLeft: `5px solid ${prog.color}`,
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: prog.color, marginBottom: '0.75rem' }}> Nasıl Uygulanır?</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-mid)', fontStyle: 'italic' }}>{prog.apply}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF BROŞÜR / DERGİ */}
      {prog.pdf && (
        <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #060e1c 0%, #0a1628 50%, #0e2044 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <div style={{ width: '40px', height: '1px', background: 'rgba(230,25,54,0.6)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Program Broşürü</span>
                <div style={{ width: '40px', height: '1px', background: 'rgba(230,25,54,0.6)' }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                {prog.tag} <span style={{ color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>Tanıtım Kitapçığı</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', maxWidth: '420px', margin: '0.65rem auto 0', lineHeight: 1.8 }}>
                Sayfaları çevirerek ya da köşeyi sürükleyerek programı keşfedin.
              </p>
            </motion.div>

            <Suspense fallback={
              <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Yükleniyor...
              </div>
            }>
              <PdfFlipBook url={prog.pdf} />
            </Suspense>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a
                href={prog.pdf}
                download
                style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(255,255,255,0.2)', padding: '0.75rem 1.75rem',
                  borderRadius: '4px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                ⬇ PDF İndir
              </a>
            </div>
          </div>
        </section>
      )}

      {/* OTHER PROGRAMS */}
      <section style={{ padding: '5rem 0', background: 'var(--white)', borderTop: '1px solid var(--grey-light)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.5rem' }}>Diğer Programlar</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Tüm Programlarımız</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {others.map((p, i) => (
              <motion.div key={p.id} {...fadeUp(i * 0.08)}>
                <Link to={`/programlar/${p.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    background: 'var(--off-white)', borderRadius: '8px',
                    padding: '1.75rem',
                    border: '2px solid transparent',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.boxShadow = `0 8px 30px ${p.color}20`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'var(--off-white)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.15em', color: p.color, textTransform: 'uppercase' }}>{p.tag}</span>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.4rem', lineHeight: 1.35 }}>{p.title}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--red)', marginTop: '0.75rem', letterSpacing: '0.06em' }}>Keşfet →</p>
                  </div>
                </Link>
              </motion.div>
            ))}
            {/* Back to all */}
            <motion.div {...fadeUp(others.length * 0.08)}>
              <Link to="/programlar" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                  borderRadius: '8px', padding: '1.75rem',
                  height: '100%', minHeight: '160px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',
                  cursor: 'pointer', transition: 'transform 0.3s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Tümüne Bak</p>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '1rem' }}>Tüm Programlar</p>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>Genel Bakış →</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .program-hero-grid { grid-template-columns: 1fr !important; }
          .program-hero-grid > div:last-child { display: none; }
          .program-content-grid { grid-template-columns: 1fr !important; }
          .program-content-grid > div:first-child { position: static !important; }
          .details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
