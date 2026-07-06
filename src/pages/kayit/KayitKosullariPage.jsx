import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const InfoBox = ({ children }) => (
  <div style={{
    background: 'rgba(230,25,54,0.06)',
    border: '1px solid rgba(230,25,54,0.2)',
    borderLeft: '4px solid var(--red)',
    borderRadius: '8px',
    padding: '1.25rem 1.5rem',
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.92rem',
    color: 'var(--text-dark)',
    lineHeight: 1.75,
  }}>
    {children}
  </div>
);

export default function KayitKosullariPage() {
  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kayıt</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Kayıt Koşulları
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'ye kayıt için genel koşullar ve başvuru bilgileri.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* Lise Kayıt Bağlantısı */}
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <div className="red-line" />
                <span className="section-tag">Lise</span>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                Kolej Sancaktepe Anadolu Lisesi kayıt süreçleri hakkında aşağıdaki bilgileri inceleyebilir, detaylı bilgi için kayıt ofisimizle iletişime geçebilirsiniz. Süreçlerin tümünü olumlu tamamlayan aday öğrencilerle kontenjan doğrultusunda kesin kayıt süreçleri yürütülmektedir.
              </p>
            </motion.div>

            {/* 2026-2027 Kabulü */}
            <motion.div {...fadeUp(0.08)}>
              <InfoBox>
                Kolej Sancaktepe'ye <strong>2026-2027</strong> akademik yılında okul öncesi (48 aydan itibaren), ilkokul, ortaokul, lise hazırlık, 9 ve 10. sınıf düzeyinde öğrenci kabul edilmektedir.
                <br /><br />
                <strong>Kolej Sancaktepe Anadolu Lisesi 11 ve 12. sınıflarına yeni öğrenci kaydı alınmamaktadır.</strong>
              </InfoBox>
            </motion.div>

            {/* Başvuru formu */}
            <motion.div {...fadeUp(0.12)}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                Tüm seviyelerde okulumuzu tanımak ve bireysel görüşme randevusu oluşturmak için{' '}
                <a href="/kayit/basvuru-formu" style={{ color: 'var(--red)', fontWeight: 600 }}>
                  başvuru formu
                </a>{' '}
                doldurmanızı rica ederiz. Soru ve önerilerinizi{' '}
                <a href="mailto:info@kolejsancaktepe.com" style={{ color: 'var(--red)', fontWeight: 600 }}>
                  info@kolejsancaktepe.com
                </a>{' '}
                adresine iletebilirsiniz.
              </p>
            </motion.div>

            {/* Seviye bazlı koşullar */}
            <motion.div {...fadeUp(0.14)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div className="red-line" />
                <span className="section-tag">Başvuru Koşulları</span>
              </div>
              {[
                {
                  title: 'Okul Öncesi, İlkokul ve Ortaokul 5. Sınıf',
                  desc: 'Başvuru formu doldurma sırası göz önünde bulundurularak, kontenjan doğrultusunda kesin kayıt süreçleri yürütülmektedir.',
                  note: 'Başvuru tarihinin/sıranın değişmemesi için her aday öğrenci adına ilgili akademik yıl ve sınıf seviyesi için bir kez form doldurulması yeterlidir. Tekrar form doldurulması durumunda başvuru sırası güncellenir.',
                },
                {
                  title: 'Ortaokul 6, 7 ve 8. Sınıf',
                  desc: 'TED Okulları Giriş Sınavı puan sıralamasıyla, kontenjan doğrultusunda kesin kayıt süreçleri yürütülmektedir.',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'var(--white)', borderRadius: '12px', padding: '1.75rem 2rem',
                  border: '1px solid var(--grey-light)', marginBottom: '1rem',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                  {item.note && (
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--grey)', lineHeight: 1.75, marginTop: '0.75rem', fontStyle: 'italic' }}>
                      * {item.note}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.18)} style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link to="/kayit/basvuru-formu" style={{
                display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.78rem',
                fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#fff', background: 'var(--red)',
                padding: '1rem 2.5rem', borderRadius: '4px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(230,25,54,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(230,25,54,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 16px rgba(230,25,54,0.3)'; }}
              >
                Başvuru Formu →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
