import { motion } from 'framer-motion';
import BasvuruForm from '../components/BasvuruForm';

import { t } from '../i18n';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

export default function IletisimPage() {
  return (
    <>
      <div className="page-hero" style={{
        backgroundImage: "linear-gradient(135deg, rgba(26,35,71,0.93) 0%, rgba(35,46,92,0.89) 55%, rgba(46,61,122,0.89) 100%), url('/gallery/idari/IMG_0836.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{t("İletişim")}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>{t("Bize Ulaşın")}</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              {t("Çocuğunuzun geleceği için ilk adımı atın. Size en kısa sürede dönüş yapacağız.")}
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
                
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1rem' }}>{t("Telefon")}</p>
                <a href="tel:02166060833" style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', letterSpacing: '0.04em', marginBottom: '0.5rem', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--red)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--primary)')}
                >0216 606 0 833</a>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(35,46,92,0.1)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#25D366', marginBottom: '0.85rem' }}>{t("WhatsApp")}</p>
                  <a
                    href="https://wa.me/905016223137?text=Merhaba%2C%20Kolej%20Sancaktepe%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#25D366')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.117 1.522 5.849L0 24l6.336-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.876 0-3.638-.487-5.172-1.341l-.37-.217-3.762.891.939-3.664-.241-.384A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    0501 622 31 37
                  </a>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7, marginTop: '0.6rem' }}>
                    {t("Bu numaraya WhatsApp üzerinden de yazabilirsiniz.")}
                  </p>
                </div>
              </div>

              {/* E-Posta */}
              <div className="glass-card-light" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.6)', borderTopWidth: '4px', borderTopColor: 'var(--red)', borderTopStyle: 'solid', boxShadow: '0 4px 30px rgba(35,46,92,0.07)' }}>

                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1.25rem' }}>{t("E-Posta")}</p>

                <div style={{ marginBottom: '1.15rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.35rem' }}>{t("Genel İletişim")}</div>
                  <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none', wordBreak: 'break-all', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  >info@kolejsancaktepe.com</a>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.35rem' }}>{t("İnsan Kaynakları")}</div>
                  <a href="mailto:ik@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none', wordBreak: 'break-all', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  >ik@kolejsancaktepe.com</a>
                </div>
              </div>

              {/* Adres */}
              <div className="glass-card-light" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.6)', borderTopWidth: '4px', borderTopColor: 'var(--primary)', borderTopStyle: 'solid', boxShadow: '0 4px 30px rgba(35,46,92,0.07)' }}>
                
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1rem' }}>{t("Adres")}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                  {t("EYÜP SULTAN MAH. ZULAL SK.")}<br />
                  {t("B BLOK NO:2/2/1")}<br />
                  <strong style={{ color: 'var(--primary)', fontWeight: 700 }}>{t("Sancaktepe / İSTANBUL")}</strong>
                </p>
              </div>

              {/* TED-AD Logo */}
              <div style={{ 
                background: 'rgba(255,255,255,0.8)', 
                borderRadius: '12px', 
                padding: '2rem', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1rem',
                border: '1px solid var(--grey-light)',
                boxShadow: '0 4px 20px rgba(35,46,92,0.08)'
              }}>
                <img 
                  src="/logo/tedad-2.png" 
                  alt={t("TED-AD")} 
                  style={{ 
                    width: '100%', 
                    maxWidth: '240px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 8px rgba(35,46,92,0.06))'
                  }} 
                />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                    {t("Türk Eğitim Derneği")}<br />{t("Danışmanlık Programı")}
                  </div>
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
                <div style={{ padding: '2.5rem' }} className="iletisim-form-body">
                  <BasvuruForm
                    theme="light"
                    subject="Yeni Başvuru Formu (İletişim) - Kolej Sancaktepe"
                    title="Başvuru & Bilgi Formu"
                    subtitle="Formu doldurun, en kısa sürede sizinle iletişime geçelim."
                  />
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
                {t("Konumumuz")}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>
                {t("Eyüp Sultan Mah. Zulal Sk. B Blok No:2/2/1 — Sancaktepe / İstanbul")}
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
               {t("Yol Tarifi Al")}
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
            title={t("Kolej Sancaktepe Konum")}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', filter: 'saturate(0.65) contrast(1.1) brightness(0.88) hue-rotate(200deg)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
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
