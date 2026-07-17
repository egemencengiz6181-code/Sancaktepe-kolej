import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

export default function IletisimPage() {
  const [form, setForm] = useState({ studentName: '', school: '', grade: '', parentName: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(35,46,92,0.04)',
    border: '1.5px solid rgba(35,46,92,0.1)',
    borderRadius: '6px',
    padding: '0.85rem 1rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: 'var(--text-dark)',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
  };

  const labelStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '0.63rem',
    fontWeight: 800,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--grey)',
    display: 'block',
    marginBottom: '0.4rem',
  };

  return (
    <>
      <div className="page-hero" style={{
        backgroundImage: "linear-gradient(135deg, rgba(26,35,71,0.93) 0%, rgba(35,46,92,0.89) 55%, rgba(46,61,122,0.89) 100%), url('/gallery/IMG_0836.jpeg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>İletişim</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>Bize Ulaşın</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Çocuğunuzun geleceği için ilk adımı atın. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">

            {/* Sol – İletişim Bilgileri */}
            <motion.div {...fadeUp(0)}>
              {/* Telefon */}
              <div className="glass-card-light" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', borderTop: '4px solid var(--red)', boxShadow: '0 4px 30px rgba(35,46,92,0.07)', border: '1px solid rgba(255,255,255,0.6)', borderTopWidth: '4px', borderTopColor: 'var(--red)' }}>
                
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1rem' }}>Telefon</p>
                <a href="tel:02166060833" style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', letterSpacing: '0.04em', marginBottom: '0.5rem', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--red)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--primary)')}
                >0216 606 0 833</a>
                <a href="tel:05016223135" style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-mid)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--red)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-mid)')}
                >0501 622 31 35</a>
              </div>

              {/* Adres */}
              <div className="glass-card-light" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.6)', borderTopWidth: '4px', borderTopColor: 'var(--primary)', borderTopStyle: 'solid', boxShadow: '0 4px 30px rgba(35,46,92,0.07)' }}>
                
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1rem' }}>Adres</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                  EYÜP SULTAN MAH. ZULAL SK.<br />
                  B BLOK NO:2/2/1<br />
                  <strong style={{ color: 'var(--primary)', fontWeight: 700 }}>Sancaktepe / İSTANBUL</strong>
                </p>
              </div>

              {/* TED Badge */}
              <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', borderRadius: '8px', padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 900, color: '#fff', flexShrink: 0 }}>TED</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: '0.2rem' }}>TED-AD Akredite Okul</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>Türk Eğitim Derneği Akreditasyonu</div>
                </div>
              </div>
            </motion.div>

            {/* Sağ – Form */}
            <motion.div {...fadeUp(0.15)}>
              <div className="glass-card-light" style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: '12px',
                boxShadow: '0 8px 50px rgba(35,46,92,0.1)',
                overflow: 'hidden',
                borderTop: '5px solid var(--red)',
              }}>
                <div style={{ padding: '2.5rem' }}>
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', gap: '1.5rem', textAlign: 'center' }}
                    >
                      
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>Mesajınız İletildi!</h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8, maxWidth: '360px' }}>
                        En kısa sürede sizinle iletişime geçeceğiz.<br />
                        Kolej Sancaktepe TED-AD ailesi olarak sizi bekliyoruz.
                      </p>
                      <button
                        onClick={() => { setSent(false); setForm({ studentName: '', school: '', grade: '', parentName: '', phone: '', message: '' }); }}
                        style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'var(--red)', border: 'none', padding: '0.85rem 2.2rem', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        Yeni Form Doldur
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>Bilgi Talebi Formu</h2>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--grey)', marginBottom: '2rem', lineHeight: 1.6 }}>Formu doldurun, en kısa sürede sizinle iletişime geçelim.</p>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                        <div>
                          <label style={labelStyle}>Öğrenci Ad - Soyad *</label>
                          <input type="text" name="studentName" required value={form.studentName} onChange={handleChange} placeholder="Öğrencinin adı soyadı"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(35,46,92,0.1)'; }}
                            onBlur={(e) => { e.target.style.borderColor = 'var(--grey-light)'; e.target.style.boxShadow = 'none'; }}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Öğrenim Gördüğü Okul</label>
                          <input type="text" name="school" value={form.school} onChange={handleChange} placeholder="Mevcut okul adı"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(35,46,92,0.1)'; }}
                            onBlur={(e) => { e.target.style.borderColor = 'var(--grey-light)'; e.target.style.boxShadow = 'none'; }}
                          />
                        </div>
                      </div>

                      <div style={{ marginBottom: '1.2rem' }}>
                        <label style={labelStyle}>Bilgi Almak İstediğiniz Sınıf *</label>
                        <select name="grade" required value={form.grade} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}
                          onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(35,46,92,0.1)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'var(--grey-light)'; e.target.style.boxShadow = 'none'; }}
                        >
                          <option value="">Sınıf Seçiniz</option>
                          <option value="okul-oncesi">Okul Öncesi (Anaokulu)</option>
                          {[1,2,3,4].map(n => <option key={n} value={`ilkokul-${n}`}>{n}. Sınıf (İlkokul)</option>)}
                          {[5,6,7,8].map(n => <option key={n} value={`ortaokul-${n}`}>{n}. Sınıf (Ortaokul)</option>)}
                          {[9,10,11,12].map(n => <option key={n} value={`lise-${n}`}>{n}. Sınıf (Anadolu Lisesi)</option>)}
                        </select>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                        <div>
                          <label style={labelStyle}>Veli Ad *</label>
                          <input type="text" name="parentName" required value={form.parentName} onChange={handleChange} placeholder="Veli adı soyadı"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(35,46,92,0.1)'; }}
                            onBlur={(e) => { e.target.style.borderColor = 'var(--grey-light)'; e.target.style.boxShadow = 'none'; }}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Veli İrtibat Numarası *</label>
                          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="05XX XXX XX XX"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(35,46,92,0.1)'; }}
                            onBlur={(e) => { e.target.style.borderColor = 'var(--grey-light)'; e.target.style.boxShadow = 'none'; }}
                          />
                        </div>
                      </div>

                      <div style={{ marginBottom: '2rem' }}>
                        <label style={labelStyle}>Mesaj</label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Merak ettiklerinizi yazabilirsiniz..."
                          style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                          onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(35,46,92,0.1)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'var(--grey-light)'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>

                      <button type="submit" disabled={loading} style={{
                        width: '100%',
                        fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800,
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        color: '#fff',
                        background: loading ? 'rgba(230,25,54,0.6)' : 'linear-gradient(135deg, var(--red), var(--red-light))',
                        border: 'none', padding: '1.1rem', borderRadius: '4px',
                        cursor: loading ? 'wait' : 'pointer',
                        boxShadow: '0 6px 24px rgba(230,25,54,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                        transition: 'all 0.3s',
                      }}
                        onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(230,25,54,0.35)'; } }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(230,25,54,0.25)'; }}
                      >
                        {loading ? (
                          <>
                            <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }} style={{ display: 'inline-block' }}>⟳</motion.span>
                            Gönderiliyor...
                          </>
                        ) : 'Bilgi Talep Et →'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--grey); }
        input:focus, textarea:focus, select:focus {
          border-color: var(--primary) !important;
          background: rgba(35,46,92,0.07) !important;
          box-shadow: 0 0 0 3px rgba(35,46,92,0.08) !important;
        }
      `}</style>

      {/* MAP SECTION — Modern Design */}
      <div style={{ background: '#0d1530' }}>
        {/* Header info band */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
          padding: '1.5rem 2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'linear-gradient(90deg, rgba(18,27,62,0.99), rgba(35,46,92,0.99))',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.2rem' }}>
                Konumumuz
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>
                Eyüp Sultan Mah. Zulal Sk. B Blok No:2/2/1 — Sancaktepe / İstanbul
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="tel:02166060833" style={{
              textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              padding: '0.55rem 1.1rem', borderRadius: '5px', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            >
               (0216) 606 08 33
            </a>
            <a
              href="https://www.google.com/maps/place/%C3%96zel+Kolej+Sancaktepe+%7C+TED+-+AD+Okullar%C4%B1/@40.98249787796874,29.210358806835465,15z"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
                background: 'linear-gradient(135deg, var(--red), var(--red-light))',
                padding: '0.55rem 1.25rem', borderRadius: '5px',
                boxShadow: '0 4px 14px rgba(230,25,54,0.35)',
                transition: 'box-shadow 0.2s, transform 0.2s',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(230,25,54,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(230,25,54,0.35)'; }}
            >
               Yol Tarifi Al
            </a>
          </div>
        </div>

        {/* Map frame */}
        <div style={{ position: 'relative', height: '440px' }}>
          {/* Gradient top edge */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '4px', zIndex: 2,
            background: 'linear-gradient(90deg, var(--primary), var(--red), rgba(230,25,54,0.15))',
          }} />
          <iframe
            title="Kolej Sancaktepe Konum"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', filter: 'saturate(0.65) contrast(1.1) brightness(0.88) hue-rotate(200deg)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11923.199156739287!2d29.210358806835465!3d40.98249787796874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf7926d7cdd5%3A0xd947e7d0b4da7b23!2s%C3%96zel%20Kolej%20Sancaktepe%20%7C%20TED%20-%20AD%20Okullar%C4%B1!5e0!3m2!1str!2str!4v1784301573741!5m2!1str!2str"
          />
          {/* Bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
            background: 'linear-gradient(to top, #0d1530 0%, transparent 100%)',
            pointerEvents: 'none', zIndex: 1,
          }} />
        </div>
      </div>
    </>
  );
}
