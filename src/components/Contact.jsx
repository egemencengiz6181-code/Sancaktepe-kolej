import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { t } from '../i18n';
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
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
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
            <span className="section-tag">{t("İletişim")}</span>
            <div className="gold-line" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            {t("Bize")} <span>{t("Ulaşın")}</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>
            {t("Çocuğunuzun geleceği için ilk adımı atın. Size en kısa sürede dönüş yapacağız.")}
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
              }}>{t("Telefon")}</h3>
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

              <div style={{ marginTop: '1.35rem', paddingTop: '1.35rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#25D366',
                  marginBottom: '0.8rem',
                }}>{t("WhatsApp")}</h3>
                <a
                  href="https://wa.me/905016223137?text=Merhaba%2C%20Kolej%20Sancaktepe%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: 'var(--white)',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#25D366')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white)')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.117 1.522 5.849L0 24l6.336-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.638-.487-5.172-1.341l-.37-.217-3.762.891.939-3.664-.241-.384A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  0501 622 31 37
                </a>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                  marginTop: '0.55rem',
                }}>
                  {t("Bu numaraya WhatsApp üzerinden de yazabilirsiniz.")}
                </p>
              </div>
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
              }}>{t("Adres")}</h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.75)',
              }}>
                {t("EYÜP SULTAN MAH. ZULAL SK.")}<br />
                {t("B BLOK NO:2/2/1")}<br />
                <strong style={{ color: 'var(--white)' }}>{t("Sancaktepe / İSTANBUL")}</strong>
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
              }}>{t("TED")}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.2rem' }}>{t("TED-AD Akredite")}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{t("Türk Eğitim Derneği Akreditasyonu")}</div>
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
                }}>{t("Mesajınız İletildi!")}</h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                }}>
                  {t("En kısa sürede sizinle iletişime geçeceğiz.")}<br />
                  {t("Kolej Sancaktepe TED-AD ailesi olarak sizi bekliyoruz.")}
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ studentName: '', school: '', grade: '', parentName: '', phone: '', message: '' }); setKvkkAccepted(false); }}
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
                  {t("Yeni Form")}
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
                }}>{t("Bilgi Talebi Formu")}</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={labelStyle}>{t("Öğrenci Ad - Soyad *")}</label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={form.studentName}
                      onChange={handleChange}
                      placeholder={t("Adı Soyadı")}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t("Öğrenim Gördüğü Okul")}</label>
                    <input
                      type="text"
                      name="school"
                      value={form.school}
                      onChange={handleChange}
                      placeholder={t("Mevcut Okul")}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={labelStyle}>{t("Bilgi Almak İstediğiniz Sınıf *")}</label>
                  <select
                    name="grade"
                    required
                    value={form.grade}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" style={{ background: '#0a1628' }}>{t("Sınıf Seçiniz")}</option>
                    <option value="okul-oncesi" style={{ background: '#0a1628' }}>{t("Okul Öncesi (Anaokulu)")}</option>
                    {[1,2,3,4].map(n => <option key={n} value={`ilkokul-${n}`} style={{ background: '#0a1628' }}>{n}. Sınıf (İlkokul)</option>)}
                    {[5,6,7,8].map(n => <option key={n} value={`ortaokul-${n}`} style={{ background: '#0a1628' }}>{n}. Sınıf (Ortaokul)</option>)}
                    {[9,10,11,12].map(n => <option key={n} value={`lise-${n}`} style={{ background: '#0a1628' }}>{n}. Sınıf (Anadolu Lisesi)</option>)}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={labelStyle}>{t("Veli Ad *")}</label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder={t("Veli Adı Soyadı")}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t("Veli İrtibat Numarası *")}</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t("05XX XXX XX XX")}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>{t("Mesaj")}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t("Merak ettiklerinizi yazabilirsiniz...")}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '110px',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <input
                    type="checkbox"
                    id="kvkk-contact"
                    checked={kvkkAccepted}
                    onChange={(e) => setKvkkAccepted(e.target.checked)}
                    style={{
                      width: '18px',
                      height: '18px',
                      cursor: 'pointer',
                      accentColor: 'var(--gold)',
                      marginTop: '2px',
                    }}
                  />
                  <label htmlFor="kvkk-contact" style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.6,
                    cursor: 'pointer',
                  }}>
                    <a href="/kvkk" target="_blank" rel="noopener noreferrer" style={{
                      color: 'var(--gold-light)',
                      textDecoration: 'underline',
                      transition: 'opacity 0.2s',
                    }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      {t("KVKK Aydınlatma Metni")}
                    </a>{t("'ni okudum, kişisel verilerimin işlenmesini kabul ediyorum. *")}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !kvkkAccepted}
                  style={{
                    width: '100%',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--navy)',
                    background: (loading || !kvkkAccepted)
                      ? 'rgba(201,168,76,0.6)'
                      : 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                    border: 'none',
                    padding: '1.1rem',
                    borderRadius: '2px',
                    cursor: (loading || !kvkkAccepted) ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 8px 32px rgba(201,168,76,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: !kvkkAccepted ? 0.6 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        style={{ display: 'inline-block' }}
                      >⟳</motion.span>
                      {t("Gönderiliyor...")}
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
