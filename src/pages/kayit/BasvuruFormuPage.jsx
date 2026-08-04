import { motion } from 'framer-motion';

import BasvuruForm from '../../components/BasvuruForm';
import { t } from '../../i18n';

export default function BasvuruFormuPage() {
  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{t("Kayıt")}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              {t("Başvuru Formu")}
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              {t("Kolej Sancaktepe'ye aday öğrenci başvurusu için aşağıdaki formu doldurunuz.")}
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '5rem 0 7rem', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="form-card"
              style={{
                background: 'var(--white)',
                borderRadius: '20px',
                padding: '2.5rem 3rem',
                boxShadow: '0 4px 24px rgba(35,46,92,0.08)',
                borderTop: '5px solid var(--red)',
              }}
            >
              <BasvuruForm
                theme="light"
                subject="Yeni Başvuru Formu (Kayıt) - Kolej Sancaktepe"
                title="Başvuru & Bilgi Formu"
                subtitle="Aşağıdaki bilgileri eksiksiz doldurduğunuzda kayıt ofisimiz sizinle iletişime geçecektir."
                submitLabel="Başvuruyu Gönder →"
              />
            </motion.div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.8, textAlign: 'center', marginTop: '2rem' }}>
              {t("Soru ve talepleriniz için")}{' '}
              <a href="mailto:info@kolejsancaktepe.com" style={{ color: 'var(--red)', fontWeight: 600 }}>info@kolejsancaktepe.com</a>{' '}
              {t("adresine yazabilir veya")}{' '}
              <a href="tel:02166060833" style={{ color: 'var(--red)', fontWeight: 600 }}>0216 606 0 833</a>{' '}
              {t("numarasından bize ulaşabilirsiniz.")}
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .form-card { padding: 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
