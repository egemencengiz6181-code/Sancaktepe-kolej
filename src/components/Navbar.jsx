import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { programs } from '../data/programs';
import { classes } from '../data/classes';
import { useModal } from '../context/ModalContext';
import { useTheme } from '../context/ModalContext';

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Programlar', href: '/programlar', mega: 'programlar' },
  { label: 'Sınıflar', href: '/siniflar', mega: 'siniflar' },
  { label: 'Kampüs', href: '/kampus' },
  { label: 'Haberler', href: '/haberler' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'İletişim', href: '/iletisim' },
];

function MegaMenu({ type, onClose }) {
  const items = type === 'programlar' ? programs : classes;
  const basePath = type === 'programlar' ? '/programlar' : '/siniflar';
  const overviewLabel = type === 'programlar' ? 'Tüm Programlar' : 'Tüm Kademeler';
  const overviewDesc = type === 'programlar'
    ? 'Eğitim programlarımıza genel bakış'
    : 'Okul öncesinden liseye tam kademe';

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        top: 'calc(100% + 0.5rem)',
        left: 'calc(50% - 460px)',
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(24px)',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(35,46,92,0.15), 0 0 0 1px rgba(35,46,92,0.08)',
        padding: '1.5rem',
        width: '920px',
        maxWidth: 'calc(100vw - 4rem)',
        zIndex: 200,
      }}
    >
      {/* Arrow */}
      <div style={{
        position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)',
        width: '12px', height: '12px', background: 'rgba(255,255,255,0.98)',
        boxShadow: '-2px -2px 4px rgba(35,46,92,0.06)',
        borderRadius: '2px 0 0 0',
        rotate: '45deg',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr repeat(4, 1fr)', gap: '0.75rem' }}>
        {/* Overview card */}
        <Link to={basePath} onClick={onClose} style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            borderRadius: '8px', padding: '1.5rem',
            height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            transition: 'transform 0.25s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.5rem' }}>
                {type === 'programlar' ? 'Programlar' : 'Kademeler'}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '0.6rem' }}>{overviewLabel}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{overviewDesc}</p>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', marginTop: '1.5rem' }}>
              Genel Bakış →
            </div>
          </div>
        </Link>

        {/* Item cards */}
        {items.map((item) => {
          const colorVal = item.color === 'var(--primary)' ? '#232e5c'
            : item.color === 'var(--red)' ? '#e61936'
            : item.color;
          return (
            <Link key={item.id} to={`${basePath}/${item.id}`} onClick={onClose} style={{ textDecoration: 'none' }}>
              <div style={{
                borderRadius: '8px', padding: '1.1rem 1.25rem',
                border: '1px solid var(--grey-light)',
                background: 'var(--off-white)',
                transition: 'all 0.25s',
                height: '100%',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--white)';
                  e.currentTarget.style.borderColor = colorVal;
                  e.currentTarget.style.boxShadow = `0 6px 24px ${colorVal}18`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--off-white)';
                  e.currentTarget.style.borderColor = 'var(--grey-light)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.55rem', fontWeight: 900,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: colorVal, background: `${colorVal}12`,
                    border: `1px solid ${colorVal}25`,
                    padding: '0.2rem 0.45rem', borderRadius: '3px',
                  }}>
                    {type === 'programlar' ? item.tag : item.ages.split('·')[0].trim()}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.35, marginBottom: '0.4rem', flexGrow: 1 }}>
                  {type === 'programlar' ? item.title : item.level}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.73rem', color: 'var(--grey)', lineHeight: 1.55, marginBottom: '0.6rem' }}>
                  {type === 'programlar' ? item.subtitle : item.subtitle}
                </p>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, color: 'var(--red)', letterSpacing: '0.06em' }}>
                  Keşfet →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const megaTimer = useRef(null);
  const { setOpen: openModal } = useModal();
  const { dark, setDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const transparent = isHome && !scrolled;

  const handleMegaEnter = (key) => {
    clearTimeout(megaTimer.current);
    setOpenMega(key);
  };
  const handleMegaLeave = () => {
    megaTimer.current = setTimeout(() => setOpenMega(null), 120);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? '0.6rem 2.5rem' : '1rem 2.5rem',
          background: transparent ? 'transparent' : dark ? 'rgba(18,24,46,0.97)' : 'rgba(255,255,255,0.97)',
          backdropFilter: !transparent ? 'blur(20px)' : 'none',
          borderBottom: !transparent ? `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(35,46,92,0.1)'}` : 'none',
          transition: 'all 0.4s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: !transparent ? '0 2px 20px rgba(35,46,92,0.08)' : 'none',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/logo/kolej%20sancaktepe%20logo%20-%20yatay.png"
            alt="Kolej Sancaktepe"
            style={{ height: scrolled ? '36px' : '46px', objectFit: 'contain', transition: 'height 0.3s' }}
            onError={(e) => { e.target.style.display = 'none'; if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'; }}
          />
          <span style={{ display: 'none', fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: transparent ? '#fff' : 'var(--primary)', letterSpacing: '0.02em', alignItems: 'center', gap: '0.3rem' }}>
            Kolej <span style={{ color: 'var(--red)' }}>Sancaktepe</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-desktop" style={{ display: 'flex', gap: '0.25rem', listStyle: 'none', alignItems: 'center' }}>
          {navLinks.map((link) => {
            const active = location.pathname === link.href || (link.mega && location.pathname.startsWith(link.href + '/'));
            return (
              <li key={link.href}
                onMouseEnter={() => link.mega ? handleMegaEnter(link.mega) : null}
                onMouseLeave={() => link.mega ? handleMegaLeave() : null}
              >
                <Link
                  to={link.href}
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: transparent
                      ? (active ? '#fff' : 'rgba(255,255,255,0.85)')
                      : dark
                        ? (active ? 'var(--red)' : 'rgba(220,228,244,0.85)')
                        : (active ? 'var(--red)' : 'var(--primary)'),
                    padding: '0.5rem 0.75rem',
                    borderRadius: '3px',
                    background: active && !transparent ? 'rgba(230,25,54,0.08)' : 'transparent',
                    transition: 'all 0.25s',
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = transparent ? '#fff' : 'var(--red)'; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = transparent ? 'rgba(255,255,255,0.85)' : 'var(--primary)'; }}
                >
                  {link.label}
                  {link.mega && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.5, transition: 'transform 0.2s', transform: openMega === link.mega ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {active && (
                    <motion.div layoutId="nav-indicator" style={{
                      position: 'absolute', bottom: '0px', left: '0.75rem', right: '0.75rem',
                      height: '2px', background: transparent ? 'rgba(255,255,255,0.8)' : 'var(--red)', borderRadius: '1px',
                    }} />
                  )}
                </Link>

                {/* Mega menu */}
                {link.mega && (
                  <AnimatePresence>
                    {openMega === link.mega && (
                      <MegaMenu type={link.mega} onClose={() => setOpenMega(null)} />
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
          <li style={{ marginLeft: '0.25rem' }}>
            <button
              onClick={() => setDark(!dark)}
              aria-label={dark ? 'Açık Mod' : 'Koyu Mod'}
              style={{
                background: transparent ? 'rgba(255,255,255,0.1)' : dark ? 'rgba(255,255,255,0.08)' : 'rgba(35,46,92,0.07)',
                border: transparent ? '1px solid rgba(255,255,255,0.2)' : dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(35,46,92,0.12)',
                borderRadius: '8px',
                width: '38px', height: '38px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
                transition: 'all 0.3s',
                color: transparent ? '#fff' : dark ? '#e2e8f0' : 'var(--primary)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.15)' : 'rgba(35,46,92,0.12)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = transparent ? 'rgba(255,255,255,0.1)' : dark ? 'rgba(255,255,255,0.08)' : 'rgba(35,46,92,0.07)'; }}
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </li>
          <li style={{ marginLeft: '0.5rem' }}>
            <button onClick={() => openModal(true)} style={{
              fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#fff',
              background: 'linear-gradient(135deg, var(--red), var(--red-light))',
              padding: '0.6rem 1.4rem', borderRadius: '3px', border: 'none', cursor: 'pointer',
              transition: 'all 0.3s', boxShadow: '0 4px 16px rgba(230,25,54,0.3)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(230,25,54,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(230,25,54,0.3)'; }}
            >
              Kayıt Ol
            </button>
          </li>
        </ul>

        {/* Hamburger + dark toggle (mobile) */}
        <div className="nav-burger" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Açık Mod' : 'Koyu Mod'}
            style={{
              background: transparent ? 'rgba(255,255,255,0.1)' : dark ? 'rgba(255,255,255,0.08)' : 'rgba(35,46,92,0.07)',
              border: transparent ? '1px solid rgba(255,255,255,0.2)' : dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(35,46,92,0.12)',
              borderRadius: '8px', width: '36px', height: '36px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem',
              color: transparent ? '#fff' : dark ? '#e2e8f0' : 'var(--primary)',
            }}
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü" style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', cursor: 'pointer' }}>
            {[0, 1, 2].map((i) => (
              <motion.span key={i}
                animate={mobileOpen
                  ? i === 0 ? { rotate: 45, y: 9 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -9 }
                  : { rotate: 0, y: 0, opacity: 1 }}
                style={{ display: 'block', width: '24px', height: '2px', background: transparent ? '#fff' : dark ? '#e2e8f4' : 'var(--primary)', borderRadius: '1px' }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '58px', left: 0, right: 0,
              background: dark ? 'rgba(18,24,46,0.98)' : 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
              zIndex: 99, padding: '1.5rem 2rem',
              borderBottom: '2px solid var(--red)',
              boxShadow: '0 8px 32px rgba(35,46,92,0.12)',
              maxHeight: '85vh', overflowY: 'auto',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} style={{
                    textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: location.pathname === link.href ? 'var(--red)' : 'var(--text-dark)',
                    display: 'block', padding: '0.75rem 0.5rem',
                    borderBottom: '1px solid var(--grey-light)',
                  }}>
                    {link.label}
                  </Link>
                  {/* Mobile sub-items */}
                  {link.mega && (
                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                      {(link.mega === 'programlar' ? programs : classes).map((item) => (
                        <Link key={item.id} to={`${link.href}/${item.id}`} style={{
                          textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
                          color: 'var(--text-mid)', display: 'flex', alignItems: 'center', gap: '0.5rem',
                          padding: '0.5rem 0.5rem',
                          borderBottom: '1px solid var(--grey-light)',
                        }}>
                          <span>{link.mega === 'programlar' ? item.tag + ' – ' + item.title : item.level}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li style={{ marginTop: '1rem' }}>
                <button onClick={() => openModal(true)} style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
                  background: 'var(--red)', padding: '0.9rem 1.5rem', borderRadius: '3px',
                  display: 'block', textAlign: 'center', width: '100%', border: 'none', cursor: 'pointer',
                }}>
                  Kayıt &amp; İletişim
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; align-items: center; }
        }
      `}</style>
    </>
  );
}
