import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useModal } from '../context/ModalContext';
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
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f5f5f5 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(35,46,92,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(35,46,92,0.03) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }} />
        {/* Red accent arc */}
        <div style={{
          position: 'absolute', bottom: '-120px', right: '-80px',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,25,54,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '15%', right: '8%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,25,54,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Floating dots */}
        {[
          { width: 8, height: 8, top: '18%', left: '8%', background: 'transparent', opacity: 0.5, dur: 7, delay: 0 },
          { width: 5, height: 5, top: '70%', left: '12%', background: 'transparent', opacity: 0.2, dur: 9, delay: 1 },
          { width: 6, height: 6, top: '75%', right: '20%', background: 'transparent', opacity: 0.25, dur: 8, delay: 0.5 },
          { width: 4, height: 4, top: '45%', left: '22%', background: 'transparent', opacity: 0.15, dur: 10, delay: 3 },
        ].map((p, i) => <FloatingDot key={i} style={p} />)}

        {/* TED Logo Watermark - Large Background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          transform: 'translateY(-50%)',
          width: 'min(1050px, 68vw)',
          height: 'auto',
          opacity: 0.06,
          pointerEvents: 'none',
          zIndex: 1,
        }}>
          <img
            src="/logo/TED_png.png"
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0.95) saturate(0.5)',
            }}
          />
        </div>

        <motion.div style={{ y, opacity, width: '100%', position: 'relative', zIndex: 1, paddingTop: 'clamp(80px, 14vh, 120px)', paddingBottom: 'clamp(40px, 8vh, 80px)' }}>
          <div className="section-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
              {/* Left — text */}
              <div style={{ flex: '1 1 0', minWidth: 0 }}>
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}
                >
                  <div style={{ width: '40px', height: '3px', background: 'var(--red)', borderRadius: '2px' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--grey)' }}>
                    TED Akreditasyon &amp; Danışmanlık
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', fontWeight: 700, lineHeight: 1.0, color: 'var(--primary)', marginBottom: '0.5rem' }}
                >
                  Bir Okuldan
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.2rem, 7vw, 6.5rem)', fontWeight: 700, lineHeight: 1.0, color: 'var(--red)', fontStyle: 'italic', marginBottom: '1rem' }}
                >
                  Daha Fazlası
                </motion.h1>

                <motion.div
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.7 }}
                  style={{ width: '140px', height: '3px', background: 'linear-gradient(90deg, var(--red), transparent)', marginBottom: '2rem', transformOrigin: 'left' }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', fontWeight: 400, fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: 1.6 }}
                >
                  Düşünen, üreten ve dünyaya değer katan bireyler yetiştiriyoruz.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78, duration: 0.7 }}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--grey-dark)', lineHeight: 1.85, maxWidth: '560px', marginBottom: '3rem' }}
                >
                  Kolej Sancaktepe TED-AD okulları, kaliteli eğitim anlayışı ve uzman kadrosuyla öğrencilere bireysel gelişimlerini destekleyerek gelecekte başarılı bireyler olmaları için önemli bir adım atıyor.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
                  style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                >
                  <button onClick={() => openModal(true)} style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
                    background: 'linear-gradient(135deg, var(--red), var(--red-light))',
                    padding: '1rem 2.5rem', borderRadius: '4px', boxShadow: '0 8px 28px rgba(230,25,54,0.3)',
                    transition: 'transform 0.3s, box-shadow 0.3s', border: 'none', cursor: 'pointer',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(230,25,54,0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(230,25,54,0.3)'; }}
                  >
                    Kayıt &amp; İletişim
                  </button>
                  <Link to="/hakkimizda" style={{
                    textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)',
                    background: 'transparent', border: '2px solid var(--primary)',
                    padding: '1rem 2.5rem', borderRadius: '4px', transition: 'all 0.3s', display: 'inline-block',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'rgba(35,46,92,0.06)'; e.currentTarget.style.color = 'var(--primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}
                  >
                    Bizi Tanıyın
                  </Link>
                </motion.div>

                {/* Bağlantılarımız */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.7 }}
                  style={{ marginTop: '3.5rem' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--grey)',
                    marginBottom: '1.5rem',
                  }}>Bağlantılarımız</div>
                  <div style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}>
                    <img 
                      src="/logo/TED_png.png" 
                      alt="TED" 
                      style={{ height: '35px', width: 'auto', objectFit: 'contain', opacity: 0.7, transition: 'opacity 0.3s' }}
                      onMouseEnter={(e) => e.target.style.opacity = '1'}
                      onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                    />
                    <img 
                      src="/logo/tedmem.png" 
                      alt="TEDMEM" 
                      style={{ height: '35px', width: 'auto', objectFit: 'contain', opacity: 0.7, transition: 'opacity 0.3s' }}
                      onMouseEnter={(e) => e.target.style.opacity = '1'}
                      onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                    />
                    <img 
                      src="/logo/ted%20%C3%BCni%20logo.png" 
                      alt="TED Üniversitesi" 
                      style={{ height: '35px', width: 'auto', objectFit: 'contain', opacity: 0.7, transition: 'opacity 0.3s' }}
                      onMouseEnter={(e) => e.target.style.opacity = '1'}
                      onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                    />
                    <img 
                      src="/logo/ap%20logo.png" 
                      alt="AP" 
                      style={{ height: '35px', width: 'auto', objectFit: 'contain', opacity: 0.7, transition: 'opacity 0.3s' }}
                      onMouseEnter={(e) => e.target.style.opacity = '1'}
                      onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                    />
                    <img 
                      src="/logo/Global-Schools-Program.png" 
                      alt="Global Schools Program" 
                      style={{ height: '35px', width: 'auto', objectFit: 'contain', opacity: 0.7, transition: 'opacity 0.3s' }}
                      onMouseEnter={(e) => e.target.style.opacity = '1'}
                      onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right — photo collage (desktop only) */}
              <div className="hero-collage" style={{
                flex: '0 0 440px', height: '580px', position: 'relative', marginLeft: '-2rem',
              }}>
                {/* Back photo: ortaokul-4 — top-left, tilted */}
                <HeroPhoto
                  src={encodeURI('/gallery/ortaokul/WhatsApp Image 2026-06-22 at 12.23.34 (3).jpeg')}
                  delay={0.7}
                  floatY={8}
                  style={{ width: '230px', height: '165px', top: '0', left: '0', zIndex: 1, transform: 'rotate(-4deg)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                />
                {/* Main photo: IMG_0835 — center, tall */}
                <HeroPhoto
                  src="/gallery/idari/IMG_0835.jpeg"
                  delay={0.5}
                  floatY={14}
                  style={{ width: '275px', height: '390px', top: '60px', left: '85px', zIndex: 3, boxShadow: '0 32px 80px rgba(0,0,0,0.55)' }}
                />
                {/* Front photo: okul-oncesi-1 — bottom-right */}
                <HeroPhoto
                  src={encodeURI('/gallery/okul öncesi/WhatsApp Image 2026-06-22 at 12.35.56.jpeg')}
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

      {/* PROGRAM COVERS CAROUSEL */}
      <section style={{ padding: '3.5rem 0', background: '#0a1628', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div style={{ textAlign: 'center', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(230,25,54,0.5)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Eğitim Programlarımız</span>
            <div style={{ width: '32px', height: '1px', background: 'rgba(230,25,54,0.5)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
            Program <span style={{ color: 'var(--red)' }}>Katalogları</span>
          </h2>
        </div>
        {/* Infinite scroll strip */}
        <div style={{ position: 'relative', zIndex: 1 }} className="covers-track-wrap">
          <div className="covers-track">
            {[
              { img: '/kapaklar/Bögep.jpg', label: 'BÖGEP', sub: 'Bütüncül Öğrenme ve Gelişim', to: '/programlar/bogep' },
              { img: '/kapaklar/KVYOD.jpg', label: 'KVYOD', sub: 'Küresel Vizyon ve Yaşam', to: '/programlar/kvyod' },
              { img: '/kapaklar/OYP.jpg', label: 'OYP', sub: 'Okuryazarlık Programı', to: '/programlar/okuryazarlik' },
              { img: '/kapaklar/TÖP.jpg', label: 'TÖP', sub: 'Tematik Öğrenme', to: '/programlar/tematik-ogrenme' },
              { img: '/kapaklar/UD.jpg', label: 'UD', sub: 'Uygulamalı Dersler', to: '/programlar/uygulamali-dersler' },
              { img: '/kapaklar/AP.jpg', label: 'AP', sub: 'Advanced Placement', to: '/programlar/ap' },
              { img: encodeURI('/kapaklar/Kanada çift diploma programı.jpg'), label: 'Kanada', sub: 'Çift Diploma Programı', to: '/siniflar/lise/uluslararasi-programlar' },
              { img: '/kapaklar/UbD.jpg', label: 'UbD', sub: 'Tasarım ile Öğrenme', to: '/programlar/bogep' },
              { img: '/kapaklar/P4C.jpg', label: 'P4C', sub: 'Çocuklarla Felsefe', to: '/siniflar/okul-oncesi/genel-bilgiler' },
              { img: '/kapaklar/YDP.jpg', label: 'YDP', sub: 'Yabancı Dil Programı', to: '/programlar' },
              { img: encodeURI('/kapaklar/ÖD.jpg'), label: 'ÖD', sub: 'Ölçme Değerlendirme', to: '/programlar' },
              // duplicate for infinite loop
              { img: '/kapaklar/Bögep.jpg', label: 'BÖGEP', sub: 'Bütüncül Öğrenme ve Gelişim', to: '/programlar/bogep' },
              { img: '/kapaklar/KVYOD.jpg', label: 'KVYOD', sub: 'Küresel Vizyon ve Yaşam', to: '/programlar/kvyod' },
              { img: '/kapaklar/OYP.jpg', label: 'OYP', sub: 'Okuryazarlık Programı', to: '/programlar/okuryazarlik' },
              { img: '/kapaklar/TÖP.jpg', label: 'TÖP', sub: 'Tematik Öğrenme', to: '/programlar/tematik-ogrenme' },
              { img: '/kapaklar/UD.jpg', label: 'UD', sub: 'Uygulamalı Dersler', to: '/programlar/uygulamali-dersler' },
              { img: '/kapaklar/AP.jpg', label: 'AP', sub: 'Advanced Placement', to: '/programlar/ap' },
            ].map((item, i) => (
              <Link key={i} to={item.to} style={{ textDecoration: 'none', flexShrink: 0 }}>
                <div className="cover-card"
                  onMouseEnter={(e) => { e.currentTarget.closest('.covers-track-wrap').style.setProperty('--paused', 'paused'); }}
                  onMouseLeave={(e) => { e.currentTarget.closest('.covers-track-wrap').style.setProperty('--paused', 'running'); }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                    <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} className="cover-img" />
                    <div className="cover-overlay">
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item.sub}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .covers-track-wrap { --paused: running; }
          .covers-track {
            display: flex;
            gap: 1rem;
            padding: 0 1rem;
            animation: covers-scroll 36s linear infinite;
            animation-play-state: var(--paused);
            width: max-content;
          }
          @keyframes covers-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .cover-card {
            width: 200px;
            height: 280px;
            cursor: pointer;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 8px 32px rgba(0,0,0,0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
          }
          .cover-card:hover { transform: translateY(-6px) scale(1.03); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
          .cover-card:hover .cover-img { transform: scale(1.06); }
          .cover-overlay {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            padding: 1rem 0.85rem 0.85rem;
            background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%);
            transform: translateY(8px);
            opacity: 0;
            transition: opacity 0.3s, transform 0.3s;
          }
          .cover-card:hover .cover-overlay { opacity: 1; transform: translateY(0); }
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
              <h2 className="section-title"><span>Portal</span></h2>
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
              2026-2027 Kayıt Dönemi
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
                 0216 606 0 833
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
