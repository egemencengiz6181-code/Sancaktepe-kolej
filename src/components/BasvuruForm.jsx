import { useId, useState } from 'react';
import { motion } from 'framer-motion';

import { t } from '../i18n';

// Kurumun basılı başvuru formundaki alanların birebir karşılığı.
// Tek kaynak: sitedeki bütün formlar (modal, iletişim sayfası, kayıt sayfası)
// bu bileşeni kullanır.
const SEVIYELER = [
  { kademe: 'Anaokulu', secenekler: ['36-48 Ay', '48-60 Ay', '60-72 Ay'] },
  { kademe: 'İlkokul', secenekler: ['1. Sınıf', '2. Sınıf', '3. Sınıf', '4. Sınıf'] },
  { kademe: 'Ortaokul', secenekler: ['5. Sınıf', '6. Sınıf', '7. Sınıf', '8. Sınıf'] },
  { kademe: 'Lise', secenekler: ['9. Sınıf', '10. Sınıf', '11. Sınıf', '12. Sınıf'] },
];

const HABERDAR_SECENEKLERI = [
  'Sosyal Medyada gördüm.',
  'Call Center tarafından arandım.',
  'Arkadaş referansı ile geldim.',
  'Tabelayı gördüm.',
];

const THEMES = {
  dark: {
    label: 'rgba(255,255,255,0.45)',
    inputBg: 'rgba(255,255,255,0.07)',
    inputBgFocus: 'rgba(255,255,255,0.1)',
    inputBorder: 'rgba(255,255,255,0.15)',
    inputBorderFocus: 'rgba(230,25,54,0.6)',
    inputColor: '#fff',
    colorScheme: 'dark',
    kademeLabel: 'rgba(255,255,255,0.5)',
    chipBg: 'rgba(255,255,255,0.05)',
    chipBorder: 'rgba(255,255,255,0.16)',
    chipColor: 'rgba(255,255,255,0.72)',
    bodyText: 'rgba(255,255,255,0.7)',
    successTitle: '#fff',
    successText: 'rgba(255,255,255,0.55)',
    formTitle: '#fff',
    formSubtitle: 'rgba(255,255,255,0.45)',
  },
  light: {
    label: 'var(--grey)',
    inputBg: 'rgba(35,46,92,0.04)',
    inputBgFocus: 'rgba(35,46,92,0.06)',
    inputBorder: 'rgba(35,46,92,0.12)',
    inputBorderFocus: 'var(--primary)',
    inputColor: 'var(--text-dark)',
    colorScheme: 'light',
    kademeLabel: 'var(--grey)',
    chipBg: 'rgba(35,46,92,0.03)',
    chipBorder: 'rgba(35,46,92,0.14)',
    chipColor: 'var(--text-mid)',
    bodyText: 'var(--grey-dark)',
    successTitle: 'var(--primary)',
    successText: 'var(--text-mid)',
    formTitle: 'var(--primary)',
    formSubtitle: 'var(--grey)',
  },
};

// Bileşen gövdesinin DIŞINDA tanımlı olmaları şart: içeride tanımlanırsa her
// render'da yeni bir bileşen tipi oluşur, React alt ağacı söküp yeniden kurar
// ve kullanıcı yazarken input focus'u kaybeder.
const Field = ({ label, required, labelStyle, children }) => (
  <div>
    <label style={labelStyle}>
      {t(label)}
      {required && <span style={{ color: 'var(--red)', marginLeft: '3px' }}>*</span>}
    </label>
    {children}
  </div>
);

const Band = ({ children }) => (
  <div
    style={{
      background: 'linear-gradient(90deg, var(--red), var(--red-light))',
      borderRadius: '6px',
      padding: '0.62rem 1rem',
      marginBottom: '1.35rem',
      textAlign: 'center',
      boxShadow: '0 4px 16px rgba(230,25,54,0.22)',
    }}
  >
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.66rem',
        fontWeight: 900,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#fff',
      }}
    >
      {children}
    </span>
  </div>
);

const BOS_FORM = {
  veliAdSoyad: '',
  veliTelefon: '',
  veliEposta: '',
  veliMeslek: '',
  veliAdres: '',
  ogrenciAdSoyad: '',
  ogrenciDogumTarihi: '',
  ogrenciOkul: '',
  seviye: '',
  haberdarDiger: '',
};

export default function BasvuruForm({
  theme = 'light',
  subject = 'Yeni Başvuru Formu - Kolej Sancaktepe',
  title = 'Başvuru & Bilgi Formu',
  subtitle = 'Formu doldurun, en kısa sürede sizinle iletişime geçelim.',
  submitLabel = 'Formu Gönder →',
  onSuccess,
}) {
  const c = THEMES[theme] ?? THEMES.light;
  const uid = useId();

  const [form, setForm] = useState(BOS_FORM);
  const [haberdar, setHaberdar] = useState([]);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleHaberdar = (opt) =>
    setHaberdar((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]));

  const resetForm = () => {
    setForm(BOS_FORM);
    setHaberdar([]);
    setKvkkAccepted(false);
    setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!kvkkAccepted) {
      alert('KVKK metnini onaylamanız gerekmektedir.');
      return;
    }
    if (!form.seviye) {
      alert('Lütfen başvurduğunuz seviyeyi seçiniz.');
      return;
    }
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@kolejsancaktepe.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: subject,
          'Veli Adı Soyadı': form.veliAdSoyad,
          'Veli Cep Telefonu': form.veliTelefon,
          'Veli E-mail': form.veliEposta,
          'Veli Mesleği': form.veliMeslek,
          'Veli Adresi': form.veliAdres,
          'Öğrenci Adı Soyadı': form.ogrenciAdSoyad,
          'Öğrenci Doğum Tarihi': form.ogrenciDogumTarihi,
          'Geldiği (Devam Ettiği) Okul': form.ogrenciOkul,
          'Başvurduğu Seviye': form.seviye,
          'Nasıl Haberdar Oldunuz': haberdar.join(' | '),
          'Nasıl Haberdar Oldunuz (Diğer)': form.haberdarDiger,
        }),
      });

      if (response.ok) {
        setSent(true);
        if (onSuccess) setTimeout(onSuccess, 2200);
      } else {
        alert('Form gönderilemedi. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    background: c.inputBg,
    border: `1.5px solid ${c.inputBorder}`,
    borderRadius: '6px',
    padding: '0.8rem 1rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.88rem',
    color: c.inputColor,
    colorScheme: c.colorScheme,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.25s, background 0.25s',
  };

  const labelStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '0.6rem',
    fontWeight: 800,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: c.label,
    display: 'block',
    marginBottom: '0.4rem',
  };

  const onFocus = (e) => {
    e.target.style.borderColor = c.inputBorderFocus;
    e.target.style.background = c.inputBgFocus;
  };
  const onBlur = (e) => {
    e.target.style.borderColor = c.inputBorder;
    e.target.style.background = c.inputBg;
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '280px',
          gap: '1.35rem',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: c.successTitle }}>
          {t('Başvurunuz Alındı')}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.92rem',
            color: c.successText,
            lineHeight: 1.8,
            maxWidth: '380px',
          }}
        >
          {t('En kısa sürede sizinle iletişime geçeceğiz. Kolej Sancaktepe TED-AD ailesi olarak sizi bekliyoruz.')}
        </p>
        <button
          type="button"
          onClick={resetForm}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#fff',
            background: 'var(--red)',
            border: 'none',
            padding: '0.85rem 2.2rem',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {t('Yeni Form Doldur')}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="ks-basvuru-form">
      {title && (
        <div style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.45rem, 3vw, 1.75rem)',
              fontWeight: 700,
              color: c.formTitle,
              marginBottom: '0.4rem',
              lineHeight: 1.25,
            }}
          >
            {t(title)}
          </h2>
          {subtitle && (
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: c.formSubtitle, lineHeight: 1.6 }}>
              {t(subtitle)}
            </p>
          )}
        </div>
      )}

      {/* ── VELİ BİLGİLERİ ─────────────────────────────────────── */}
      <Band>{t('Veli Bilgileri')}</Band>

      <div className="ks-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <Field labelStyle={labelStyle} label="Adı Soyadı" required>
          <input type="text" name="veliAdSoyad" required value={form.veliAdSoyad} onChange={handleChange}
            placeholder={t('Veli adı soyadı')} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </Field>
        <Field labelStyle={labelStyle} label="Cep Telefonu" required>
          <input type="tel" name="veliTelefon" required value={form.veliTelefon} onChange={handleChange}
            placeholder={t('05XX XXX XX XX')} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </Field>
        <Field labelStyle={labelStyle} label="E-mail">
          <input type="email" name="veliEposta" value={form.veliEposta} onChange={handleChange}
            placeholder={t('ornek@eposta.com')} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </Field>
        <Field labelStyle={labelStyle} label="Mesleği">
          <input type="text" name="veliMeslek" value={form.veliMeslek} onChange={handleChange}
            placeholder={t('Mesleğiniz')} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </Field>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Field labelStyle={labelStyle} label="Adresi">
          <textarea name="veliAdres" rows={2} value={form.veliAdres} onChange={handleChange}
            placeholder={t('Mahalle, sokak, ilçe / il')}
            style={{ ...inputStyle, resize: 'vertical', minHeight: '70px' }} onFocus={onFocus} onBlur={onBlur} />
        </Field>
      </div>

      {/* ── ÖĞRENCİ BİLGİLERİ ──────────────────────────────────── */}
      <Band>{t('Öğrenci Bilgileri')}</Band>

      <div className="ks-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <Field labelStyle={labelStyle} label="Adı Soyadı" required>
          <input type="text" name="ogrenciAdSoyad" required value={form.ogrenciAdSoyad} onChange={handleChange}
            placeholder={t('Öğrencinin adı soyadı')} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </Field>
        <Field labelStyle={labelStyle} label="Doğum Tarihi (G/A/Y)">
          <input type="date" name="ogrenciDogumTarihi" value={form.ogrenciDogumTarihi} onChange={handleChange}
            style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </Field>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <Field labelStyle={labelStyle} label="Geldiği (Devam Ettiği) Okul">
          <input type="text" name="ogrenciOkul" value={form.ogrenciOkul} onChange={handleChange}
            placeholder={t('Mevcut okul adı')} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </Field>
      </div>

      {/* Başvurduğu seviye */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={labelStyle}>
          {t('Başvurduğu Seviye')}
          <span style={{ color: 'var(--red)', marginLeft: '3px' }}>*</span>
        </label>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            color: c.bodyText,
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}
        >
          {t('Öğrencinin gelecek yıl okuyacağı kademe ve sınıfı seçiniz.')}
        </p>

        <div style={{ display: 'grid', gap: '0.9rem' }}>
          {SEVIYELER.map(({ kademe, secenekler }) => (
            <div key={kademe}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.58rem',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: c.kademeLabel,
                  marginBottom: '0.45rem',
                }}
              >
                {t(kademe)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {secenekler.map((secenek) => {
                  const value = `${kademe} — ${secenek}`;
                  const active = form.seviye === value;
                  return (
                    <label
                      key={secenek}
                      style={{
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        fontWeight: active ? 700 : 500,
                        padding: '0.5rem 1rem',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        border: `1.5px solid ${active ? 'var(--red)' : c.chipBorder}`,
                        background: active ? 'linear-gradient(135deg, var(--red), var(--red-light))' : c.chipBg,
                        color: active ? '#fff' : c.chipColor,
                        boxShadow: active ? '0 4px 14px rgba(230,25,54,0.28)' : 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      <input
                        type="radio"
                        name={`${uid}-seviye`}
                        value={value}
                        checked={active}
                        onChange={() => setForm((prev) => ({ ...prev, seviye: value }))}
                        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                      />
                      {t(secenek)}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── NASIL HABERDAR OLDUNUZ ─────────────────────────────── */}
      <Band>{t('Kolej Sancaktepe TED AD Eğitim Kurumlarından nasıl haberdar oldunuz?')}</Band>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1rem' }}>
        {HABERDAR_SECENEKLERI.map((opt) => {
          const active = haberdar.includes(opt);
          return (
            <label
              key={opt}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                border: `1.5px solid ${active ? 'var(--red)' : c.chipBorder}`,
                background: active ? 'rgba(230,25,54,0.1)' : c.chipBg,
                color: active ? (theme === 'dark' ? '#fff' : 'var(--text-dark)') : c.chipColor,
                transition: 'all 0.2s',
              }}
            >
              <input
                type="checkbox"
                checked={active}
                onChange={() => toggleHaberdar(opt)}
                style={{ width: '17px', height: '17px', accentColor: 'var(--red)', cursor: 'pointer', flexShrink: 0 }}
              />
              {t(opt)}
            </label>
          );
        })}
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <Field labelStyle={labelStyle} label="Diğer">
          <input type="text" name="haberdarDiger" value={form.haberdarDiger} onChange={handleChange}
            placeholder={t('Belirtmek isterseniz yazabilirsiniz')} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </Field>
      </div>

      {/* KVKK */}
      <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <input
          type="checkbox"
          id={`${uid}-kvkk`}
          checked={kvkkAccepted}
          onChange={(e) => setKvkkAccepted(e.target.checked)}
          style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--red)', marginTop: '2px', flexShrink: 0 }}
        />
        <label
          htmlFor={`${uid}-kvkk`}
          style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: c.bodyText, lineHeight: 1.6, cursor: 'pointer' }}
        >
          <a
            href="/kvkk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--red)', textDecoration: 'underline' }}
          >
            {t('KVKK Aydınlatma Metni')}
          </a>
          {t("'ni okudum, kişisel verilerimin işlenmesini kabul ediyorum. *")}
        </label>
      </div>

      <button
        type="submit"
        disabled={loading || !kvkkAccepted}
        style={{
          width: '100%',
          fontFamily: 'var(--font-display)',
          fontSize: '0.78rem',
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#fff',
          background: loading || !kvkkAccepted ? 'rgba(230,25,54,0.5)' : 'linear-gradient(135deg, var(--red), var(--red-light))',
          border: 'none',
          padding: '1.1rem',
          borderRadius: '8px',
          cursor: loading || !kvkkAccepted ? 'not-allowed' : 'pointer',
          boxShadow: '0 6px 24px rgba(230,25,54,0.28)',
          transition: 'all 0.3s',
          opacity: kvkkAccepted ? 1 : 0.6,
        }}
        onMouseEnter={(e) => {
          if (!loading && kvkkAccepted) e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        {loading ? t('Gönderiliyor...') : t(submitLabel)}
      </button>

      <style>{`
        @media (max-width: 560px) {
          .ks-basvuru-form .ks-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
