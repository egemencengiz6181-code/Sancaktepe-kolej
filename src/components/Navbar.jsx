import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { programs } from '../data/programs';
import { classes } from '../data/classes';
import { useModal } from '../context/ModalContext';

const leftLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Kurumsal', href: '/hakkimizda', dropdown: 'kurumsal' },
  { label: 'Programlar', href: '/programlar', mega: 'programlar' },
  { label: 'Sınıflar', href: '/siniflar', mega: 'siniflar' },
];

const kurumsalLinks = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Türk Eğitim Derneği', href: '/ted' },
  { label: 'Akreditasyon & Danışmanlık', href: '/kurumsal/akreditasyon-danismanlik' },
  { label: 'Akademik Kadro', href: '/akademik-kadro' },
];

const kayitLinks = [
  { label: 'Kayıt Koşulları', href: '/kayit/kosullar' },
  { label: 'Burslar', href: '/kayit/burslar' },
  { label: 'Kayıt Ücretleri', href: '/kayit/ucretler' },
  { label: 'Başvuru Formu', href: '/kayit/basvuru-formu' },
];

const kampusLinks = [
  { label: 'Kampüse Genel Bakış', href: '/kampus' },
  { label: 'Fiziki Yapı', href: '/kampus/fiziki-yapi' },
  { label: 'Spor Tesisleri', href: '/kampus/spor-tesisleri' },
  { label: 'Sağlık Hizmetleri', href: '/kampus/saglik-hizmetleri' },
  { label: 'Kütuphane', href: '/kampus/kutuphane' },
  { label: 'Atölyeler', href: '/kampus/atolyeler' },
  { label: 'Yemek Hizmetleri', href: '/kampus/yemek-hizmetleri' },
  { label: 'Ulaşım Hizmetleri', href: '/kampus/ulasim-hizmetleri' },
  { label: 'Güvenlik Hizmetleri', href: '/kampus/guvenlik-hizmetleri' },
  { label: 'Laboratuvarlar', href: '/kampus/laboratuvarlar' },
];

const rightLinks = [
  { label: 'Kayıt', href: '/kayit/kosullar', dropdown: 'kayit' },
  { label: 'Kampüs', href: '/kampus', dropdown: 'kampus' },
  { label: 'Haberler', href: '/haberler' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'İletişim', href: '/iletisim' },
];

const allNavLinks = [
  ...leftLinks.filter(l => !l.dropdown),
  ...kurumsalLinks,
  ...rightLinks.filter(l => !l.dropdown),
  ...kayitLinks,
  ...kampusLinks,
];

// ─── Dropdown Menu (slim vertical list, used for Kurumsal) ─────────────────────
// Positioned via a static wrapper div (no Framer transform conflict)
function DropdownMenu({ links, triggerRef, onClose }) {
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: 0,
      zIndex: 200,
      marginTop: '6px',
      minWidth: '240px',
    }}>
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: '10px',
          boxShadow: '0 16px 48px rgba(35,46,92,0.14), 0 0 0 1px rgba(35,46,92,0.07)',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {links.map((link, i) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--primary)',
              textDecoration: 'none',
              padding: '0.85rem 1.25rem',
              borderBottom: i < links.length - 1 ? '1px solid rgba(35,46,92,0.07)' : 'none',
              transition: 'background 0.15s, color 0.15s, padding-left 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(35,46,92,0.06)'; e.currentTarget.style.color = 'var(--red)'; e.currentTarget.style.paddingLeft = '1.6rem'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.paddingLeft = '1.25rem'; }}
          >
            {i === 0 && (
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginRight: '0.6rem', verticalAlign: 'middle', position: 'relative', top: '-1px' }} />
            )}
            {link.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Mega Menu ────────────────────────────────────────────────────────────────
function MegaMenu({ type, onClose }) {
  const items = type === 'programlar' ? programs : classes;
  const basePath = type === 'programlar' ? '/programlar' : '/siniflar';
  const overviewLabel = type === 'programlar' ? 'Tüm Programlar' : 'Tüm Kademeler';
  const overviewDesc = type === 'programlar'
    ? 'Eğitim programlarımıza genel bakış'
    : 'Okul öncesinden liseye tam kademe';

  // Outer div handles centering (static transform, no Framer conflict).
  // Inner motion.div handles only the entrance animation.
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '920px',
      maxWidth: 'calc(100vw - 4rem)',
      zIndex: 200,
      marginTop: '6px',
    }}>
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(24px)',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(35,46,92,0.15), 0 0 0 1px rgba(35,46,92,0.08)',
        padding: '1.5rem',
        width: '100%',
      }}
    >
      <div style={{
        position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)',
        width: '12px', height: '12px', background: 'rgba(255,255,255,0.98)',
        boxShadow: '-2px -2px 4px rgba(35,46,92,0.06)',
        borderRadius: '2px 0 0 0', rotate: '45deg',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: type === 'programlar' ? '1.1fr repeat(4, 1fr)' : 'repeat(4, 1fr)', gap: '0.75rem' }}>
        {type === 'programlar' && (
          <Link to={basePath} onClick={onClose} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
              borderRadius: '8px', padding: '1.5rem',
              height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              transition: 'transform 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.5rem' }}>
                  Programlar
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '0.6rem' }}>{overviewLabel}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{overviewDesc}</p>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', marginTop: '1.5rem' }}>
                Genel Bakış →
              </div>
            </div>
          </Link>
        )}

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
                transition: 'all 0.25s', height: '100%', display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--white)';
                  e.currentTarget.style.borderColor = colorVal;
                  e.currentTarget.style.boxShadow = `0 6px 24px ${colorVal}18`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--off-white)';
                  e.currentTarget.style.borderColor = 'var(--grey-light)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
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
                  {item.subtitle}
                </p>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, color: 'var(--red)', letterSpacing: '0.06em' }}>
                  Keşfet →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {type === 'siniflar' && (
        <div style={{ borderTop: '1px solid rgba(35,46,92,0.08)', paddingTop: '0.85rem', marginTop: '0.85rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {/* Okul Öncesi */}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a16207', marginBottom: '0.5rem' }}>
                Okul Öncesi
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { to: '/siniflar/okul-oncesi/genel-bilgiler', label: 'Genel Bilgiler' },
                  { to: '/siniflar/okul-oncesi/brans-dersleri', label: 'Branş Dersleri' },
                  { to: '/siniflar/okul-oncesi/pdr', label: "PDR'den Bakış" },
                  { to: '/siniflar/okul-oncesi/haftalik-cizelge', label: 'Haftalık Çizelge' },
                ].map((link) => (
                  <Link key={link.to} to={link.to} onClick={onClose} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.5rem 0.7rem', borderRadius: '6px', background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.12)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.05)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.15)'; }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, color: '#a16207', letterSpacing: '0.02em' }}>{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* İlkokul */}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                İlkokul
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { to: '/siniflar/ilkokul/genel-bilgiler', label: 'Genel Bilgiler' },
                  { to: '/siniflar/ilkokul/brans-dersleri', label: 'Branş Dersleri' },
                  { to: '/siniflar/ilkokul/uygulamalar-projeler', label: 'Uygulamalar ve Projeler' },
                  { to: '/siniflar/ilkokul/pdr', label: "PDR'den Bakış" },
                  { to: '/siniflar/ilkokul/degerler-egitimi', label: 'Değerler Eğitimi' },
                  { to: '/siniflar/ilkokul/haftalik-cizelge', label: 'Haftalık Çizelge' },
                ].map((link) => (
                  <Link key={link.to} to={link.to} onClick={onClose} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.5rem 0.7rem', borderRadius: '6px', background: 'rgba(35,46,92,0.04)', border: '1px solid rgba(35,46,92,0.1)', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(35,46,92,0.1)'; e.currentTarget.style.borderColor = 'rgba(35,46,92,0.25)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(35,46,92,0.04)'; e.currentTarget.style.borderColor = 'rgba(35,46,92,0.1)'; }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.02em' }}>{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ortaokul */}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.5rem' }}>
                Ortaokul
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { to: '/siniflar/ortaokul/genel-bilgiler', label: 'Genel Bilgiler' },
                  { to: '/siniflar/ortaokul/brans-dersleri', label: 'Branş Dersleri' },
                  { to: '/siniflar/ortaokul/uygulamalar-projeler', label: 'Uygulamalar ve Projeler' },
                  { to: '/siniflar/ortaokul/pdr', label: "PDR'den Bakış" },
                  { to: '/siniflar/ortaokul/haftalik-cizelge', label: 'Haftalık Çizelge' },
                ].map((link) => (
                  <Link key={link.to} to={link.to} onClick={onClose} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.5rem 0.7rem', borderRadius: '6px', background: 'rgba(230,25,54,0.04)', border: '1px solid rgba(230,25,54,0.12)', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(230,25,54,0.1)'; e.currentTarget.style.borderColor = 'rgba(230,25,54,0.28)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(230,25,54,0.04)'; e.currentTarget.style.borderColor = 'rgba(230,25,54,0.12)'; }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, color: '#b01528', letterSpacing: '0.02em' }}>{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Lise */}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                Lise
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { to: '/siniflar/lise/genel-bilgiler', label: 'Genel Bilgiler' },
                  { to: '/siniflar/lise/uluslararasi-programlar', label: 'Uluslararası Programlar' },
                  { to: '/siniflar/lise/akademik-bolumler', label: 'Akademik Bölümler' },
                  { to: '/siniflar/lise/rehberlik-kariyer', label: 'Rehberlik ve Kariyer' },
                  { to: '/siniflar/lise/yurt-ici-universite', label: 'Yurt İçi Üniversite' },
                  { to: '/siniflar/lise/yurt-disi-universite', label: 'Yurt Dışı Üniversite' },
                  { to: '/siniflar/lise/haftalik-cizelge', label: 'Haftalık Çizelge' },
                ].map((link) => (
                  <Link key={link.to} to={link.to} onClick={onClose} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.5rem 0.7rem', borderRadius: '6px', background: 'rgba(35,46,92,0.04)', border: '1px solid rgba(35,46,92,0.1)', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(35,46,92,0.1)'; e.currentTarget.style.borderColor = 'rgba(35,46,92,0.25)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(35,46,92,0.04)'; e.currentTarget.style.borderColor = 'rgba(35,46,92,0.1)'; }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.02em' }}>{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {type === 'programlar' && (
        <div style={{ borderTop: '1px solid rgba(35,46,92,0.08)', paddingTop: '0.85rem', marginTop: '0.85rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.6rem' }}>
            Uluslararası Programlar
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            <Link to="/programlar/uluslararasi" onClick={onClose} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1rem', borderRadius: '7px', background: 'rgba(35,46,92,0.04)', border: '1px solid rgba(35,46,92,0.08)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(35,46,92,0.09)'; e.currentTarget.style.borderColor = 'rgba(35,46,92,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(35,46,92,0.04)'; e.currentTarget.style.borderColor = 'rgba(35,46,92,0.08)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.02em' }}>Uluslararası Programlar</span>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, color: 'var(--red)' }}>→</span>
              </div>
            </Link>
            <Link to="/programlar/ap-sinav-merkezi" onClick={onClose} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1rem', borderRadius: '7px', background: 'rgba(230,25,54,0.04)', border: '1px solid rgba(230,25,54,0.12)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(230,25,54,0.09)'; e.currentTarget.style.borderColor = 'rgba(230,25,54,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(230,25,54,0.04)'; e.currentTarget.style.borderColor = 'rgba(230,25,54,0.12)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, color: 'var(--red)', letterSpacing: '0.02em' }}>AP Sınav Merkezi</span>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, color: 'var(--red)' }}>→</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </motion.div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const location = useLocation();
  const megaTimer = useRef(null);
  const { setOpen: openModal } = useModal();

  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const handleMegaEnter = (key) => { clearTimeout(megaTimer.current); setOpenMega(key); };
  const handleMegaLeave = () => { megaTimer.current = setTimeout(() => setOpenMega(null), 120); };

  const NAV_H = 64;

  const linkStyle = (active) => ({
    textDecoration: 'none',
    fontFamily: 'var(--font-display)',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    color: active ? '#fff' : 'rgba(255,255,255,0.78)',
    padding: '0.35rem 0',
    borderBottom: active ? '2px solid rgba(255,255,255,0.9)' : '2px solid transparent',
    transition: 'color 0.2s, border-color 0.2s',
    whiteSpace: 'nowrap',
    display: 'flex', alignItems: 'center', gap: '0.2rem',
  });

  const renderLink = (link) => {
    const dropdownLinksMap = { kurumsal: kurumsalLinks, kayit: kayitLinks, kampus: kampusLinks };
    const dropLinks = link.dropdown ? (dropdownLinksMap[link.dropdown] || []) : [];
    const isDropdownActive = link.dropdown && dropLinks.some(l => location.pathname === l.href || location.pathname.startsWith(l.href + '/'));
    const active = location.pathname === link.href
      || (link.mega && location.pathname.startsWith(link.href + '/'))
      || isDropdownActive;
    const hasPopup = link.mega || link.dropdown;
    const popupKey = link.mega || link.dropdown;
    return (
      <li key={link.href}
        style={{ position: 'relative' }}
        onMouseEnter={() => hasPopup ? handleMegaEnter(popupKey) : null}
        onMouseLeave={() => hasPopup ? handleMegaLeave() : null}
      >
        <Link
          to={link.href}
          style={linkStyle(active)}
          onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.5)'; } }}
          onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'rgba(255,255,255,0.78)'; e.currentTarget.style.borderBottomColor = 'transparent'; } }}
        >
          {link.label}
          {hasPopup && (
            <svg width="9" height="5" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.6, transition: 'transform 0.2s', transform: openMega === popupKey ? 'rotate(180deg)' : 'rotate(0)' }}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </Link>
        {link.mega && (
          <AnimatePresence>
            {openMega === link.mega && (
              <MegaMenu type={link.mega} onClose={() => setOpenMega(null)} />
            )}
          </AnimatePresence>
        )}
        {link.dropdown === 'kurumsal' && (
          <AnimatePresence>
            {openMega === 'kurumsal' && (
              <DropdownMenu links={kurumsalLinks} onClose={() => setOpenMega(null)} />
            )}
          </AnimatePresence>
        )}
        {link.dropdown === 'kayit' && (
          <AnimatePresence>
            {openMega === 'kayit' && (
              <DropdownMenu links={kayitLinks} onClose={() => setOpenMega(null)} />
            )}
          </AnimatePresence>
        )}
        {link.dropdown === 'kampus' && (
          <AnimatePresence>
            {openMega === 'kampus' && (
              <DropdownMenu links={kampusLinks} onClose={() => setOpenMega(null)} />
            )}
          </AnimatePresence>
        )}
      </li>
    );
  };

  return (
    <>
      {/* ── Desktop ── */}
      <motion.nav
        className="nav-desktop-bar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: `${NAV_H}px`,
          background: 'var(--primary)',
          boxShadow: '0 2px 16px rgba(10,18,50,0.28)',
          overflow: 'visible',
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center',
          height: '100%', padding: '0 2rem', gap: '1.5rem',
        }}>
          {/* Left links */}
          <ul style={{
            flex: 1, display: 'flex', alignItems: 'center',
            justifyContent: 'flex-end', gap: '1.75rem',
            listStyle: 'none', margin: 0, padding: 0,
          }}>
            {leftLinks.map(renderLink)}
          </ul>

          {/* Center logo — horizontal */}
          <Link
            to="/"
            style={{
              display: 'block',
              textDecoration: 'none',
              flexShrink: 0,
              filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.30))',
            }}
          >
            <img
              src="/logo/kolej%20sancaktepe%20logo%20-%20yatay.png"
              alt="Kolej Sancaktepe"
              style={{ height: '72px', width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </Link>

          {/* Right links */}
          <ul style={{
            flex: 1, display: 'flex', alignItems: 'center',
            justifyContent: 'flex-start', gap: '1.75rem',
            listStyle: 'none', margin: 0, padding: 0,
          }}>
            {rightLinks.map(renderLink)}
          </ul>
        </div>
      </motion.nav>

      {/* ── Mobile bar ── */}
      <div className="nav-mobile-bar" style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '58px', background: 'var(--primary)',
        boxShadow: '0 2px 16px rgba(10,18,50,0.28)',
        alignItems: 'center', justifyContent: 'space-between', padding: '0 1.25rem',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo/kolej%20sancaktepe%20logo%20-%20yatay.png" alt="Kolej Sancaktepe"
            style={{ height: '54px', width: 'auto', objectFit: 'contain' }} />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü"
          style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', cursor: 'pointer' }}>
            {[0, 1, 2].map((i) => (
              <motion.span key={i}
                animate={mobileOpen
                  ? i === 0 ? { rotate: 45, y: 9 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -9 }
                  : { rotate: 0, y: 0, opacity: 1 }}
                style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '1px' }}
              />
            ))}
          </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '58px', left: 0, right: 0,
              background: 'var(--primary)', zIndex: 99, padding: '1.25rem 1.5rem',
              borderBottom: '2px solid rgba(255,255,255,0.15)',
              boxShadow: '0 8px 32px rgba(10,18,50,0.3)',
              maxHeight: '85vh', overflowY: 'auto',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.1rem', margin: 0, padding: 0 }}>
              {allNavLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} style={{
                    textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: location.pathname === link.href ? '#fff' : 'rgba(255,255,255,0.72)',
                    display: 'block', padding: '0.8rem 0.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    {link.label}
                  </Link>
                  {link.mega && (
                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                      {(link.mega === 'programlar' ? programs : classes).map((item) => (
                        <Link key={item.id} to={`${link.href}/${item.id}`} style={{
                          textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
                          color: 'rgba(255,255,255,0.55)', display: 'block',
                          padding: '0.45rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)',
                        }}>
                          {link.mega === 'programlar' ? item.tag + ' – ' + item.title : item.level}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.dropdown === 'kurumsal' && (
                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                      {kurumsalLinks.map((sub) => (
                        <Link key={sub.href} to={sub.href} style={{
                          textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
                          color: 'rgba(255,255,255,0.55)', display: 'block',
                          padding: '0.45rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)',
                        }}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.dropdown === 'kayit' && (
                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                      {kayitLinks.map((sub) => (
                        <Link key={sub.href} to={sub.href} style={{
                          textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
                          color: 'rgba(255,255,255,0.55)', display: 'block',
                          padding: '0.45rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)',
                        }}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.dropdown === 'kampus' && (
                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                      {kampusLinks.map((sub) => (
                        <Link key={sub.href} to={sub.href} style={{
                          textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
                          color: 'rgba(255,255,255,0.55)', display: 'block',
                          padding: '0.45rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)',
                        }}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li style={{ marginTop: '1rem' }}>
                <button onClick={() => { openModal(true); setMobileOpen(false); }} style={{
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
          .nav-desktop-bar { display: none !important; }
          .nav-mobile-bar { display: flex !important; }
        }
      `}</style>
    </>
  );
}
