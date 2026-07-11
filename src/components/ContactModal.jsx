import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.07)',
  border: '1.5px solid rgba(255,255,255,0.15)',
  borderRadius: '6px',
  padding: '0.85rem 1rem',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.88rem',
  color: '#fff',
  outline: 'none',
  transition: 'border-color 0.3s, background 0.3s',
};

const labelStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.6rem',
  fontWeight: 800,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)',
  display: 'block',
  marginBottom: '0.4rem',
};

export default function ContactModal() {
  const { open, setOpen } = useModal();
  const [form, setForm] = useState({ studentName: '', school: '', grade: '', parentName: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setSent(false); setForm({ studentName: '', school: '', grade: '', parentName: '', phone: '', message: '' }); }, 400);
  };

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
              aria-label="Kapat"
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
            ></button>

            <div style={{ padding: '2.5rem 2.5rem 2.5rem' }}>
              {/* Header */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(230,25,54,0.15)', border: '1px solid rgba(230,25,54,0.3)', borderRadius: '4px', padding: '0.3rem 0.8rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff6b85' }}>2025–2026 Kayıt Dönemi</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '0.4rem' }}>
                  Bilgi Talebi Formu
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                  Formu doldurun, en kısa sürede sizi arayalım.
                </p>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', padding: '2rem 0', textAlign: 'center' }}
                >
                  
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: '#fff' }}>Mesajınız İletildi!</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '320px' }}>
                    En kısa sürede sizinle iletişime geçeceğiz. Kolej Sancaktepe ailesi olarak sizi bekliyoruz.
                  </p>
                  <button
                    onClick={handleClose}
                    style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'var(--red)', border: 'none', padding: '0.85rem 2rem', borderRadius: '6px', cursor: 'pointer' }}
                  >
                    Kapat
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="modal-form-grid">
                    <div>
                      <label style={labelStyle}>Öğrenci Ad - Soyad *</label>
                      <input type="text" name="studentName" required value={form.studentName} onChange={handleChange} placeholder="Öğrencinin adı soyadı"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(230,25,54,0.6)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Öğrenim Gördüğü Okul</label>
                      <input type="text" name="school" value={form.school} onChange={handleChange} placeholder="Mevcut okul adı"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(230,25,54,0.6)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>Bilgi Almak İstediğiniz Sınıf *</label>
                    <select name="grade" required value={form.grade} onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(230,25,54,0.6)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                    >
                      <option value="" style={{ background: '#1a2347' }}>Sınıf Seçiniz</option>
                      <option value="okul-oncesi" style={{ background: '#1a2347' }}>Okul Öncesi (Anaokulu)</option>
                      {[1,2,3,4].map(n => <option key={n} value={`ilkokul-${n}`} style={{ background: '#1a2347' }}>{n}. Sınıf (İlkokul)</option>)}
                      {[5,6,7,8].map(n => <option key={n} value={`ortaokul-${n}`} style={{ background: '#1a2347' }}>{n}. Sınıf (Ortaokul)</option>)}
                      {[9,10,11,12].map(n => <option key={n} value={`lise-${n}`} style={{ background: '#1a2347' }}>{n}. Sınıf (Anadolu Lisesi)</option>)}
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="modal-form-grid">
                    <div>
                      <label style={labelStyle}>Veli Adı *</label>
                      <input type="text" name="parentName" required value={form.parentName} onChange={handleChange} placeholder="Veli adı soyadı"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(230,25,54,0.6)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>İrtibat Numarası *</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="05XX XXX XX XX"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(230,25,54,0.6)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={labelStyle}>Mesaj</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Merak ettiklerinizi yazabilirsiniz..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(230,25,54,0.6)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                    />
                  </div>

                  <button type="submit" disabled={loading} style={{
                    width: '100%',
                    fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: '#fff',
                    background: loading ? 'rgba(230,25,54,0.5)' : 'linear-gradient(135deg, var(--red), var(--red-light))',
                    border: 'none', padding: '1.1rem', borderRadius: '8px',
                    cursor: loading ? 'wait' : 'pointer',
                    boxShadow: '0 6px 24px rgba(230,25,54,0.35)',
                    transition: 'all 0.3s',
                  }}
                    onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(230,25,54,0.45)'; } }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(230,25,54,0.35)'; }}
                  >
                    {loading ? '⟳ Gönderiliyor...' : 'Bilgi Talep Et →'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
          </div>

          <style>{`
            .modal-form-grid { grid-template-columns: 1fr 1fr !important; }
            @media (max-width: 560px) { .modal-form-grid { grid-template-columns: 1fr !important; } }
            input::placeholder, textarea::placeholder, select::placeholder { color: rgba(255,255,255,0.25) !important; }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
