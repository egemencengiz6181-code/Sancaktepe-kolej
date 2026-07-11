import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({
    studentName: '',
    school: '',
    grade: '',
    parentName: '',
    phone: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '3px',
    padding: '0.9rem 1.1rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: 'var(--white)',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const labelStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '0.65rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    display: 'block',
    marginBottom: '0.5rem',
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #0a1628 0%, #06101e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <div className="gold-line" />
            <span className="section-tag">İletişim</span>
            <div className="gold-line" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Bize <span>Ulaşın</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>
            Çocuğunuzun geleceği için ilk adımı atın. Size en kısa sürede dönüş yapacağız.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Phone */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '4px',
              padding: '2rem',
              marginBottom: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, var(--gold), var(--gold-light), transparent)',
              }} />
              
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1rem',
              }}>Telefon</h3>
              <a href="tel:02166060833" style={{
                display: 'block',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: 500,
                color: 'var(--white)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
                transition: 'color 0.3s',
              }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--gold-light)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--white)')}
              >
                0216 606 0 833
              </a>
              <a href="tel:05016223135" style={{
                display: 'block',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.3s',
              }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--gold-light)')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.7)')}
              >
                0501 622 31 35
              </a>
            </div>

            {/* Address */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
              padding: '2rem',
              marginBottom: '1.5rem',
            }}>
              
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '1rem',
              }}>Adres</h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.75)',
              }}>
                EYÜP SULTAN MAH. ZULAL SK.<br />
                B BLOK NO:2/2/1<br />
                <strong style={{ color: 'var(--white)' }}>Sancaktepe / İSTANBUL</strong>
              </p>
            </div>

            {/* TED Badge */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(26,58,110,0.4), rgba(10,22,40,0.4))',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                fontWeight: 800,
                color: 'var(--navy)',
                flexShrink: 0,
              }}>TED</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.2rem' }}>TED-AD Akredite</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Türk Eğitim Derneği Akreditasyonu</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '4px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--gold), var(--gold-light), transparent)',
            }} />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '300px',
                  gap: '1.5rem',
                  textAlign: 'center',
                }}
              >
                
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: 'var(--white)',
                }}>Mesajınız İletildi!</h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                }}>
                  En kısa sürede sizinle iletişime geçeceğiz.<br />
                  Kolej Sancaktepe TED-AD ailesi olarak sizi bekliyoruz.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ studentName: '', school: '', grade: '', parentName: '', phone: '', message: '' }); }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--navy)',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                    border: 'none',
                    padding: '0.8rem 2rem',
                    borderRadius: '2px',
                    cursor: 'pointer',
                  }}
                >
                  Yeni Form
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: '2rem',
                }}>Bilgi Talebi Formu</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={labelStyle}>Öğrenci Ad - Soyad *</label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={form.studentName}
                      onChange={handleChange}
                      placeholder="Adı Soyadı"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Öğrenim Gördüğü Okul</label>
                    <input
                      type="text"
                      name="school"
                      value={form.school}
                      onChange={handleChange}
                      placeholder="Mevcut Okul"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={labelStyle}>Bilgi Almak İstediğiniz Sınıf *</label>
                  <select
                    name="grade"
                    required
                    value={form.grade}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" style={{ background: '#0a1628' }}>Sınıf Seçiniz</option>
                    <option value="okul-oncesi" style={{ background: '#0a1628' }}>Okul Öncesi (Anaokulu)</option>
                    {[1,2,3,4].map(n => <option key={n} value={`ilkokul-${n}`} style={{ background: '#0a1628' }}>{n}. Sınıf (İlkokul)</option>)}
                    {[5,6,7,8].map(n => <option key={n} value={`ortaokul-${n}`} style={{ background: '#0a1628' }}>{n}. Sınıf (Ortaokul)</option>)}
                    {[9,10,11,12].map(n => <option key={n} value={`lise-${n}`} style={{ background: '#0a1628' }}>{n}. Sınıf (Anadolu Lisesi)</option>)}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={labelStyle}>Veli Ad *</label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="Veli Adı Soyadı"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Veli İrtibat Numarası *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="05XX XXX XX XX"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={labelStyle}>Mesaj</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Merak ettiklerinizi yazabilirsiniz..."
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '110px',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--navy)',
                    background: loading
                      ? 'rgba(201,168,76,0.6)'
                      : 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                    border: 'none',
                    padding: '1.1rem',
                    borderRadius: '2px',
                    cursor: loading ? 'wait' : 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 8px 32px rgba(201,168,76,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        style={{ display: 'inline-block' }}
                      >⟳</motion.span>
                      Gönderiliyor...
                    </>
                  ) : (
                    'Bilgi Talep Et →'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        select option { background: #0a1628; color: white; }
      `}</style>
    </section>
  );
}
