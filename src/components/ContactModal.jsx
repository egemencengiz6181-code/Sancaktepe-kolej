import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import BasvuruForm from './BasvuruForm';

import { t } from '../i18n';

export default function ContactModal() {
  const { open, setOpen } = useModal();

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [setOpen]);

  const handleClose = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(10,14,30,0.75)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />

          {/* Centering wrapper — flex handles center so framer-motion y/scale don't fight transform */}
          <div
            key="modal-wrapper"
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
              pointerEvents: 'none',
            }}
          >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              pointerEvents: 'all',
              width: 'min(680px, calc(100vw - 2rem))',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '16px',
              background: 'linear-gradient(145deg, rgba(26,35,71,0.97) 0%, rgba(35,46,92,0.99) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06) inset',
              position: 'relative',
            }}
          >
            {/* Top accent */}
            <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--red-light), rgba(230,25,54,0.3))', borderRadius: '16px 16px 0 0' }} />

            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label={t("Kapat")}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)', width: '36px', height: '36px',
                borderRadius: '50%', cursor: 'pointer', fontSize: '1.1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(230,25,54,0.3)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >✕</button>

            <div style={{ padding: '2.5rem' }} className="modal-body">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(230,25,54,0.15)', border: '1px solid rgba(230,25,54,0.3)', borderRadius: '4px', padding: '0.3rem 0.8rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff6b85' }}>{t("2025–2026 Kayıt Dönemi")}</span>
              </div>

              <BasvuruForm
                theme="dark"
                subject="Yeni Başvuru Formu (Pop-up) - Kolej Sancaktepe"
                title="Başvuru & Bilgi Formu"
                subtitle="Formu doldurun, en kısa sürede sizi arayalım."
                onSuccess={handleClose}
              />
            </div>
          </motion.div>
          </div>

          <style>{`
            .modal-body input::placeholder,
            .modal-body textarea::placeholder { color: rgba(255,255,255,0.28); }
            @media (max-width: 560px) { .modal-body { padding: 1.5rem !important; } }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
