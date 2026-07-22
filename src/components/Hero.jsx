import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingParticle = ({ style }) => (
  <motion.div
    style={{
      position: 'absolute',
      borderRadius: '50%',
      background: 'var(--gold)',
      opacity: 0.12,
      ...style,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: style.duration || 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: style.delay || 0,
    }}
  />
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #060e1c 0%, #0a1628 40%, #0e2044 70%, #0a1628 100%)',
      }}
    >
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        opacity: 1,
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '900px',
        height: '900px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {[
        { width: 6, height: 6, top: '15%', left: '10%', duration: 7, delay: 0 },
        { width: 4, height: 4, top: '70%', left: '8%', duration: 9, delay: 1 },
        { width: 8, height: 8, top: '30%', right: '12%', duration: 6, delay: 2 },
        { width: 5, height: 5, top: '80%', right: '18%', duration: 8, delay: 0.5 },
        { width: 3, height: 3, top: '50%', left: '25%', duration: 10, delay: 3 },
        { width: 6, height: 6, top: '20%', right: '35%', duration: 7, delay: 1.5 },
      ].map((p, i) => (
        <FloatingParticle key={i} style={p} />
      ))}

      {/* Diagonal accent lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + i * 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              top: `${20 + i * 20}%`,
              right: `-${50 + i * 30}px`,
              width: `${300 + i * 100}px`,
              height: '1px',
              background: `linear-gradient(90deg, transparent, rgba(201,168,76,${0.15 - i * 0.04}), transparent)`,
              transform: `rotate(${-30 + i * 5}deg)`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity, width: '100%', position: 'relative', zIndex: 1 }}
        className="section-container"
      >
        {/* Logo - Outside maxWidth container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <img
            src="/logo/tedad-2.png"
            alt="TED AD"
            style={{ width: '180px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}
          />
        </motion.div>

        <div style={{ maxWidth: '780px' }}>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
          >
            <div className="gold-line" />
            <span className="section-tag">TED Akreditasyon & Danışmanlık</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              color: 'var(--white)',
              marginBottom: '1rem',
            }}
          >
            Kolej{' '}
            <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Sancaktepe</em>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              width: '120px',
              height: '2px',
              background: 'linear-gradient(90deg, var(--gold), transparent)',
              marginBottom: '2rem',
              transformOrigin: 'left',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '1.5rem',
              lineHeight: 1.5,
            }}
          >
            Eğitimde başarı için yanınızdayız.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.85,
              maxWidth: '580px',
              marginBottom: '3rem',
            }}
          >
            Kolej Sancaktepe TED-AD okulları, kaliteli eğitim anlayışı ve uzman kadrosuyla öğrencilere bireysel gelişimlerini destekleyerek gelecekte başarılı bireyler olmaları için önemli bir adım atıyor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <button
              onClick={() => handleScroll('#contact')}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--navy)',
                background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 8px 32px rgba(201,168,76,0.25)',
              }}
              onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 40px rgba(201,168,76,0.35)'; }}
              onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 32px rgba(201,168,76,0.25)'; }}
            >
              Kayıt & İletişim
            </button>
            <button
              onClick={() => handleScroll('#about')}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                background: 'transparent',
                border: '1px solid rgba(201,168,76,0.4)',
                padding: '1rem 2.5rem',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.target.style.borderColor = 'var(--gold)'; e.target.style.background = 'rgba(201,168,76,0.08)'; }}
              onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.4)'; e.target.style.background = 'transparent'; }}
            >
              Keşfet
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: '3rem',
              marginTop: '4rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(201,168,76,0.15)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { num: 'TED-AD', label: 'Akredite Okul' },
              { num: 'K-12', label: 'Tam Kademe' },
              { num: 'UbD', label: 'Eğitim Yaklaşımı' },
            ].map((stat) => (
              <div key={stat.num}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--gold-light)',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}>{stat.num}</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
        }}
        onClick={() => handleScroll('#about')}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.62rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
        }}>Kaydır</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(180deg, var(--gold), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
