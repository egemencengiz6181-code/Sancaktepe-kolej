import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.85rem' }}>{children}</p>
);

const BList = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem' }}>
    {items.map((it, i) => (
      <li key={i} style={{ display: 'flex', gap: '0.6rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.35rem' }}>
        <span style={{ color: 'var(--red)', flexShrink: 0 }}>•</span>{it}
      </li>
    ))}
  </ul>
);

const InfoCard = ({ title, body, delay = 0 }) => (
  <motion.div {...fadeUp(delay)}>
    <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(35,46,92,0.04)' }}>
      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.55rem' }}>{title}</h4>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.85, margin: 0 }}>{body}</p>
    </div>
  </motion.div>
);

const GroupTitle = ({ icon, children, delay = 0 }) => (
  <motion.h3 {...fadeUp(delay)} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
    <span style={{ width: '30px', height: '30px', background: 'var(--primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.85rem' }}>{icon}</span>
    {children}
  </motion.h3>
);

export default function LiseRehberlikPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/lise" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Lise</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Rehberlik ve Kariyer Danışmanlığı</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Rehberlik ve Kariyer Danışmanlığı
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.85 }}>
            Lise çalışmaları: öğrencilerimizin duygusal, sosyal ve mesleki gelişimlerine yönelik kapsamlı rehberlik ve kariyer danışmanlığı hizmetleri.
          </motion.p>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
    </>
  );
}
