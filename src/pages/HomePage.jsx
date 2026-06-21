import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import TestimonialsSection from '../components/TestimonialsSection';
import { news } from '../data/news';

// ── Spotlight card with border glow (no Tailwind) ──────────────
function SpotlightCard({ children, glowColor = 'blue', style = {}, onClick }) {
  const cardRef = useRef(null);

  const hueMap = { blue: 220, red: 0, navy: 230 };
  const hue = hueMap[glowColor] ?? 220;

  useEffect(() => {
    const sync = (e) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    const el = cardRef.current;
    if (!el) return;
    el.addEventListener('pointermove', sync);
    return () => el.removeEventListener('pointermove', sync);
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      style={{
        '--hue': hue,
        position: 'relative',
        borderRadius: '14px',
        cursor: 'pointer',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Inner spotlight fill */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, borderRadius: 'inherit',
        background: `radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), hsla(var(--hue), 75%, 62%, 0.10), transparent 65%)`,
      }} />
      {/* Border glow ring */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, borderRadius: 'inherit',
        background: `radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), hsla(var(--hue), 85%, 65%, 0.18), transparent 70%)`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
        padding: '1.5px',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

const FloatingDot = ({ style }) => (
  <motion.div
    style={{ position: 'absolute', borderRadius: '50%', ...style }}
    animate={{ y: [0, -20, 0], opacity: [style.opacity * 0.6, style.opacity, style.opacity * 0.6] }}
    transition={{ duration: style.dur || 6, repeat: Infinity, ease: 'easeInOut', delay: style.delay || 0 }}
  />
);

// ── Floating photo for hero ─────────────────────────────────────
function HeroPhoto({ src, style, delay = 0, floatY = 12 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'absolute', ...style }}
    >
      {/* The whole card floats as one unit */}
      <motion.div
        animate={{ y: [0, -floatY, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{ width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}
      >
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* Soft glow border inside the card */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '16px',
          boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.22)',
          pointerEvents: 'none',
        }} />
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { setOpen: openModal } = useModal();

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a2347 0%, #232e5c 50%, #2e3d7a 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }} />
        {/* Red accent arc */}
        <div style={{
          position: 'absolute', bottom: '-120px', right: '-80px',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,25,54,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '15%', right: '8%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,25,54,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Floating dots */}
        {[
          { width: 8, height: 8, top: '18%', left: '8%', background: 'rgba(255,255,255,0.6)', opacity: 0.3, dur: 7, delay: 0 },
          { width: 5, height: 5, top: '70%', left: '12%', background: 'var(--red)', opacity: 0.3, dur: 9, delay: 1 },
          { width: 6, height: 6, top: '75%', right: '20%', background: 'var(--red-light)', opacity: 0.35, dur: 8, delay: 0.5 },
          { width: 4, height: 4, top: '45%', left: '22%', background: '#fff', opacity: 0.15, dur: 10, delay: 3 },
        ].map((p, i) => <FloatingDot key={i} style={p} />)}

        {/* Watermark text — full width, bottom-aligned */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
          lineHeight: 1,
        }}>
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: 'clamp(4rem, 14vw, 14rem)',
            whiteSpace: 'nowrap',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.07)',
            letterSpacing: '-0.01em',
            userSelect: 'none',
            paddingLeft: '1vw',
          }}>
            Bir okuldan fazlası
          </span>
        </div>

        <motion.div style={{ y, opacity, width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="section-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
              {/* Left — text */}
              <div style={{ flex: '1 1 0', minWidth: 0 }}>
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}
                >
                  <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                    TED Akreditasyon &amp; Danışmanlık
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', fontWeight: 700, lineHeight: 1.0, color: '#fff', marginBottom: '0.5rem' }}
                >
                  Kolej
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', fontWeight: 700, lineHeight: 1.0, color: 'var(--yellow)', fontStyle: 'italic', marginBottom: '1rem' }}
                >
                  Sancaktepe
                </motion.h1>

                <motion.div
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.7 }}
                  style={{ width: '140px', height: '3px', background: 'linear-gradient(90deg, var(--red), transparent)', marginBottom: '2rem', transformOrigin: 'left' }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', fontWeight: 600, fontStyle: 'italic', color: 'rgba(255,255,255,0.95)', marginBottom: '0.6rem', lineHeight: 1.3 }}
                >
                  Bir okuldan fazlası
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78, duration: 0.7 }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', lineHeight: 1.6 }}
                >
                  Düşünen, üreten ve dünyaya değer katan bireyler yetiştiriyoruz.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, maxWidth: '560px', marginBottom: '3rem' }}
                >
                  Kolej Sancaktepe TED-AD okulları, kaliteli eğitim anlayışı ve uzman kadrosuyla öğrencilere bireysel gelişimlerini destekleyerek gelecekte başarılı bireyler olmaları için önemli bir adım atıyor.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}
                  style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                >
                  <button onClick={() => openModal(true)} style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
                    background: 'linear-gradient(135deg, var(--red), var(--red-light))',
                    padding: '1rem 2.5rem', borderRadius: '3px', boxShadow: '0 8px 28px rgba(230,25,54,0.35)',
                    transition: 'transform 0.3s, box-shadow 0.3s', border: 'none', cursor: 'pointer',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(230,25,54,0.45)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(230,25,54,0.35)'; }}
                  >
                    Kayıt &amp; İletişim
                  </button>
                  <Link to="/hakkimizda" style={{
                    textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
                    background: 'transparent', border: '2px solid rgba(255,255,255,0.35)',
                    padding: '1rem 2.5rem', borderRadius: '3px', transition: 'all 0.3s', display: 'inline-block',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    Bizi Tanıyın
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}
                  style={{ display: 'flex', gap: '3.5rem', marginTop: '4.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}
                >
                  {[
                    { val: 'TED-AD', sub: 'Akredite Okul' },
                    { val: 'K-12', sub: 'Tam Kademe' },
                    { val: 'UbD', sub: 'Eğitim Modeli' },
                    { val: 'IB/AP', sub: 'Uluslararası' },
                  ].map((s) => (
                    <div key={s.val}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.val}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '0.3rem' }}>{s.sub}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right — photo collage (desktop only) */}
              <div className="hero-collage" style={{
                flex: '0 0 440px', height: '580px', position: 'relative', marginLeft: '-2rem',
              }}>
                {/* Back photo: ortaokul-4 — top-left, tilted */}
                <HeroPhoto
                  src="/gallery/ortaokul-4.webp"
                  delay={0.7}
                  floatY={8}
                  style={{ width: '230px', height: '165px', top: '0', left: '0', zIndex: 1, transform: 'rotate(-4deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                />
                {/* Main photo: IMG_0835 — center, tall */}
                <HeroPhoto
                  src="/gallery/IMG_0835.jpeg"
                  delay={0.5}
                  floatY={14}
                  style={{ width: '275px', height: '390px', top: '60px', left: '85px', zIndex: 3, boxShadow: '0 32px 80px rgba(0,0,0,0.55)' }}
                />
                {/* Front photo: okul-oncesi-1 — bottom-right */}
                <HeroPhoto
                  src="/gallery/okul-oncesi-1.webp"
                  delay={0.9}
                  floatY={10}
                  style={{ width: '210px', height: '150px', bottom: '20px', right: '0', zIndex: 4, transform: 'rotate(3deg)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
                />
                {/* Glow behind collage */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,25,54,0.14) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Kaydır</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} style={{ width: '1px', height: '36px', background: 'linear-gradient(180deg, rgba(255,255,255,0.5), transparent)' }} />
        </motion.div>

        <style>{`
          @media (max-width: 960px) { .hero-collage { display: none !important; } }
        `}</style>
      </section>

      {/* SCHOOL LEVELS */}
      <section style={{ padding: '5rem 0', background: '#f8f9fb' }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Kademeler</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Eğitim <span>Kademelerimiz</span></h2>
          </motion.div>
          {/* 4 uniquely styled level cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="level-cards-grid">

            {/* Card 1 — Anaokulu: warm gradient, large emoji centered */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0 }}>
              <Link to="/siniflar/okul-oncesi" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  height: '100%', minHeight: '280px',
                  background: 'linear-gradient(145deg, #fff8ec 0%, #fff3d0 100%)',
                  borderRadius: '20px',
                  border: '1.5px solid #f59e0b30',
                  padding: '2rem 1.75rem',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 4px 24px rgba(245,158,11,0.1)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px) rotate(-1deg)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(245,158,11,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) rotate(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(245,158,11,0.1)'; }}
                >
                  <div style={{ position: 'absolute', bottom: '-20px', right: '-10px', fontSize: '7rem', opacity: 0.12, lineHeight: 1 }}>🌟</div>
                  <div style={{ background: '#f59e0b', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.25rem 0.7rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1.5rem', width: 'fit-content' }}>3–6 Yaş</div>
                  <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>🌟</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: '#92400e', marginBottom: '0.6rem' }}>Anaokulu</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: '#a16207', lineHeight: 1.75, flexGrow: 1 }}>Oyun ve keşif odaklı erken çocukluk eğitimi.</p>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b' }}>Keşfet <span>→</span></div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 — İlkokul: dark navy, horizontal accent line, number */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Link to="/siniflar/ilkokul" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  height: '100%', minHeight: '280px',
                  background: 'linear-gradient(145deg, #1a2347 0%, #232e5c 100%)',
                  borderRadius: '20px',
                  padding: '2rem 1.75rem',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 4px 24px rgba(35,46,92,0.18)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(35,46,92,0.35)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(35,46,92,0.18)'; }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #e61936, #ff3352, transparent)' }} />
                  <div style={{ position: 'absolute', bottom: '-30px', right: '-15px', fontFamily: 'var(--font-serif)', fontSize: '9rem', fontWeight: 700, color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>1–4</div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.25rem 0.7rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1.5rem', width: 'fit-content', border: '1px solid rgba(255,255,255,0.15)' }}>1.–4. Sınıf</div>
                  <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>📐</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>İlkokul</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, flexGrow: 1 }}>Sağlam akademik temeller ve güçlü beceriler.</p>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e61936' }}>Keşfet <span>→</span></div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 — Ortaokul: white with red left border + tag cloud */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link to="/siniflar/ortaokul" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  height: '100%', minHeight: '280px',
                  background: '#fff',
                  borderRadius: '20px',
                  borderLeft: '4px solid #e61936',
                  border: '1.5px solid #f0e0e4',
                  borderLeftWidth: '4px',
                  padding: '2rem 1.75rem',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 4px 24px rgba(230,25,54,0.07)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px) rotate(1deg)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(230,25,54,0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) rotate(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(230,25,54,0.07)'; }}
                >
                  <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>🔬</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>Ortaokul</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.75, flexGrow: 1 }}>Düşünen, sorgulayan ve dünyayı okuyan öğrenciler.</p>
                  <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {['UbD', 'LGS', 'PISA', 'Mentörlük'].map((t) => (
                      <span key={t} style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#fff0f2', color: '#e61936', border: '1px solid #fdd', padding: '0.2rem 0.55rem', borderRadius: '3px' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e61936' }}>Keşfet <span>→</span></div>
                </div>
              </Link>
            </motion.div>

            {/* Card 4 — Lise: full-bleed dark with diagonal accent */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/siniflar/anadolu-lisesi" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  height: '100%', minHeight: '280px',
                  background: 'linear-gradient(145deg, #0f172a 0%, #1e2e50 60%, #1a2347 100%)',
                  borderRadius: '20px',
                  padding: '2rem 1.75rem',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 4px 24px rgba(15,23,42,0.3)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 24px 56px rgba(15,23,42,0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.3)'; }}
                >
                  {/* Diagonal gold line */}
                  <div style={{ position: 'absolute', top: '30%', right: '-40px', width: '180px', height: '1.5px', background: 'linear-gradient(90deg, transparent, rgba(249,207,25,0.35))', transform: 'rotate(-40deg)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', top: '45%', right: '-20px', width: '140px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(249,207,25,0.15))', transform: 'rotate(-40deg)', pointerEvents: 'none' }} />
                  <div style={{ background: '#f9cf19', color: '#0f172a', fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.25rem 0.7rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1.5rem', width: 'fit-content' }}>9.–12. Sınıf</div>
                  <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>🎓</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Anadolu Lisesi</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, flexGrow: 1 }}>Geleceğe hazırlayan uluslararası standartlarda lise eğitimi.</p>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f9cf19' }}>Keşfet <span>→</span></div>
                </div>
              </Link>
            </motion.div>
          </div>

          <style>{`
            @media (max-width: 900px) { .level-cards-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 540px) { .level-cards-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* NEDEN KOLEJ SANCAKTEPE — Home */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #f8f9fb 0%, #fff 100%)' }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Fark Yaratan Unsurlar</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Neden Kolej <span>Sancaktepe?</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="neden-home-grid">
            {[
              { icon: '🎓', title: 'BÖGEP', sub: 'Bütüncül Öğrenme ve Gelişim Programları', desc: 'Akademik, sosyal, duygusal ve fiziksel gelişimi tek çatı altında birleştiriyor.' },
              { icon: '🌍', title: 'KVYOD', sub: 'Küresel Vizyon ve Yaşam Odaklı Dersler', desc: 'Öğrencileri dünyaya hazırlayan yaşam becerileri ve küresel bakış açısı.' },
              { icon: '📖', title: 'OYP', sub: 'Okuryazar Temelli Eğitim', desc: 'Okuduğunu anlayan, eleştirel düşünen, iletişim kurabilen bireyler.' },
              { icon: '🔬', title: 'UD', sub: 'Uygulamalı Dersler ve Branşlaşma', desc: 'Teoriden pratiğe, güçlü olduğun alanda derinleşme imkânı.' },
              { icon: '💭', title: 'P4C', sub: 'Çocuklarla Felsefe', desc: 'Küçük yaştan sorgulama ve merak — erken felsefi düşünme.' },
              { icon: '🗣️', title: 'Çift Dilli Eğitim', sub: 'İngilizce + Almanca', desc: 'Anaokulu\'ndan 6. Sınıfa kadar iki dilli akademik ortam.' },
              { icon: '🏆', title: 'AP Programı', sub: '11–12. Sınıf', desc: 'Uluslararası üniversite başvurularında güçlü avantaj.' },
              { icon: '🌐', title: 'Dünya Vatandaşlığı', sub: 'Evrensel Perspektif', desc: 'Küresel sorunlara duyarlı, farklılıklara saygılı bireyler.' },
              { icon: '🧑‍🏫', title: 'Bireysel Mentörlük', sub: 'Kişisel Gelişim', desc: 'Her öğrencinin yanında, hedefine ulaşmasını sağlayan mentor.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}>
                <div style={{
                  background: 'var(--white)', borderRadius: '12px',
                  border: '1px solid var(--grey-light)',
                  padding: '1.5rem 1.25rem',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.04)',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(35,46,92,0.09)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--grey-light)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(35,46,92,0.04)'; }}
                >
                  <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.2rem' }}>{item.title}</div>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.35rem', lineHeight: 1.35 }}>{item.sub}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .neden-home-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 540px) { .neden-home-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* HABERLER */}
      <section style={{ padding: '6rem 0', background: 'var(--off-white)', overflow: 'hidden' }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ marginBottom: '3rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Güncel</span>
              <div className="red-line" />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 className="section-title">Okul <span>Haberlerimiz</span></h2>
              <Link to="/haberler" style={{
                textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)',
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.5rem 0', borderBottom: '2px solid var(--red)',
                transition: 'opacity 0.2s',
              }}>
                Tüm Haberler →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll strip — full bleed with fade-right */}
        <div style={{ position: 'relative' }}>
          <div
            className="news-strip"
            style={{
              display: 'flex', gap: '1.5rem',
              overflowX: 'auto', scrollbarWidth: 'none',
              paddingLeft: 'max(2rem, calc((100vw - 1280px) / 2 + 2rem))',
              paddingRight: '6rem',
              paddingBottom: '1rem',
            }}
          >
            {news.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  flex: '0 0 300px',
                  background: 'var(--white)',
                  borderRadius: '12px',
                  border: '1px solid var(--grey-light)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(35,46,92,0.07)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(35,46,92,0.13)' }}
              >
                <Link to={`/haberler/${item.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={item.imgThumb}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{
                      position: 'absolute', top: '0.75rem', left: '0.75rem',
                      background: 'var(--red)', color: '#fff',
                      fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      padding: '0.25rem 0.6rem', borderRadius: '3px',
                    }}>{item.tag}</div>
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 700, color: 'var(--grey)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{item.date}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.4, marginBottom: '0.6rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>{item.desc}</p>
                    <div style={{ marginTop: '1rem', fontFamily: 'var(--font-display)', fontSize: '0.63rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)' }}>Devamını Oku →</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right fade mask */}
          <div className="news-fade" style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '200px',
            pointerEvents: 'none', zIndex: 2,
          }} />
        </div>

        <style>{`
          .news-strip::-webkit-scrollbar { display: none; }
          .news-fade { background: linear-gradient(to right, transparent, var(--off-white) 85%); }
        `}</style>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* KAMPÜS YAŞAMI */}
      <section style={{ padding: '6rem 0', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(135deg, #f8f9fb 0%, #eef0f8 100%)', borderRadius: '0 0 0 60%', pointerEvents: 'none' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="kampus-grid">
            {/* Left — text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <div className="red-line" />
                  <span className="section-tag">Okul Hayatı</span>
                </div>
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Kampüs <span>Yaşamı</span></h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '2.5rem', maxWidth: '460px' }}>
                  Kolej Sancaktepe'de öğrenim yalnızca sınıfla sınırlı değil. Spor, sanat, kulüpler ve modern laboratuvarlarla desteklenen zengin kampüs yaşamı, her öğrencinin potansiyelini farklı alanlarda keşfetmesini sağlar.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: '⚽', label: 'Spor', desc: 'Futbol, basketbol, yüzme, atletizm ve daha fazlası' },
                    { icon: '🎨', label: 'Sanat', desc: 'Görsel sanatlar, müzik, drama ve geleneksel Türk sanatları atölyeleri' },
                    { icon: '🏛', label: 'Kulüpler', desc: '20\'den fazla öğrenci kulübü ile ilgi alanına göre gelişim' },
                    { icon: '🔬', label: 'Laboratuvarlar', desc: 'Fen, teknoloji ve kodlama laboratuvarları' },
                    { icon: '📚', label: 'Kütüphane', desc: 'Geniş kaynak koleksiyonu ve sessiz çalışma alanları' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem', background: 'var(--off-white)', borderRadius: '10px', border: '1px solid var(--grey-light)', transition: 'border-color 0.2s, transform 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.transform = 'translateX(6px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--grey-light)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.2rem' }}>{item.label}</div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — visual grid */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '220px 160px', gap: '1rem' }}>
                <div style={{ gridRow: '1 / 3', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(35,46,92,0.12)' }}>
                  <img src="/gallery/IMG_0835.jpeg" alt="Kampüs" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
                <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 28px rgba(35,46,92,0.1)' }}>
                  <img src="/gallery/okul-oncesi-1.webp" alt="Spor" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
                <div style={{ borderRadius: '14px', overflow: 'hidden', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', boxShadow: '0 8px 28px rgba(35,46,92,0.18)' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>20+</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '0.4rem', textAlign: 'center' }}>Öğrenci Kulübü</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media (max-width: 860px) { .kampus-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* CTA BAND */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '2px', marginBottom: '1.5rem' }}>
              2025-2026 Kayıt Dönemi
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              Çocuğunuzun Geleceğini <em style={{ color: 'rgba(255,255,255,0.75)', fontStyle: 'italic' }}>Birlikte</em> İnşa Edelim
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Kayıt ve bilgi almak için formumuzu doldurun veya bizi arayın.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => openModal(true)} style={{
                fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#fff', background: 'var(--red)',
                padding: '1rem 2.5rem', borderRadius: '3px', border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 28px rgba(230,25,54,0.35)', transition: 'all 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(230,25,54,0.45)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(230,25,54,0.35)'; }}
              >
                Bilgi Talep Et
              </button>
              <a href="tel:02166060833" style={{
                textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
                background: 'transparent', border: '2px solid rgba(255,255,255,0.4)',
                padding: '1rem 2.5rem', borderRadius: '3px', display: 'inline-block', transition: 'all 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              >
                📞 0216 606 0 833
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
