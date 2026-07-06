import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '0.85rem' }}>{children}</p>
);

const BulletList = ({ items }) => (
  <ul style={{ margin: '0.5rem 0 1rem', paddingLeft: '1.25rem' }}>
    {items.map((item, i) => (
      <li key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.4rem' }}>{item}</li>
    ))}
  </ul>
);

const STEPS = [
  { num: '01', title: 'Başvuru Formu', desc: 'Kayıt için öncelikle başvuru formu doldurulur. Öğrenci adayı ve velisiyle bireysel görüşme ve okul turu gerçekleştirilir.' },
  { num: '02', title: 'TOGS Sınavı', desc: 'TED Okulları Giriş Sınavı (TOGS): Her yıl Kasım, Ocak ve Mart aylarında uygulanır. Sonuçlar aynı gün açıklanır.' },
  { num: '03', title: 'Mülakat', desc: 'TOGS sonuçları doğrultusunda aday öğrenciler mülakata davet edilir.' },
  { num: '04', title: 'Kesin Kayıt', desc: 'Tüm süreçleri olumlu tamamlayan aday öğrencilerle kontenjan doğrultusunda kesin kayıt yapılır.' },
];

export default function LiseKayitPage() {
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
              Lise Kayıt
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Kolej Sancaktepe Anadolu Lisesi hazırlık, 9 ve 10. sınıf kayıt süreçleri.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Süreç adımları */}
      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Süreç</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>Kayıt Adımları</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '4rem' }} className="steps-grid">
            {STEPS.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '14px', padding: '2rem',
                  border: '1px solid var(--grey-light)', height: '100%',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900,
                    color: 'var(--grey-light)', lineHeight: 1, marginBottom: '0.75rem',
                  }}>
                    {s.num}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 8. Sınıf Tamamlayanlar */}
          <motion.div {...fadeUp(0.1)}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
              borderRadius: '16px', padding: '2.5rem', color: '#fff', marginBottom: '3rem',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
                8. Sınıf Tamamlayanlar
              </p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
                LGS ve TOGS Bilgileri
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, marginBottom: '1rem' }}>
                Hazırlık sınıfına yerleşmek isteyen aday öğrenciler TOGS'ta belirlenen taban puanı sağlamaları durumunda mülakat sürecine davet edilirler. Mülakat komisyonu akademik gelişim potansiyelini ve kişisel yetkinlikleri değerlendirerek kayıt hakkı kazananları belirler.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85 }}>
                LGS puan sıralamasına göre belirlenen taban puanı sağlayan ve LGS'de Kolej Sancaktepe'ye yerleşen öğrenciler de Kolej Sancaktepe Anadolu Lisesi'ne doğrudan kayıt hakkı kazanırlar.
              </p>
            </div>
          </motion.div>

          {/* Başarı Bursu */}
          <motion.div {...fadeUp(0.12)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="red-line" />
              <span className="section-tag">Başarı Bursu</span>
            </div>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)', marginBottom: '3rem',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <P>TOGS sonucunda belirlenen taban puanı ve üzerinde puan alan aday öğrenciler arasından, puan sıralamasına göre belirlenen kontenjan dahilinde başarı bursu verilir. Başarı bursu süreci öğretmen mülakatının ardından tamamlanır ve öğrenci başarı bursunu kazanarak kayıt hakkı elde eder.</P>
            </div>
          </motion.div>

          {/* 9-10. Sınıf Nakil */}
          <motion.div {...fadeUp(0.14)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="red-line" />
              <span className="section-tag">9 ve 10. Sınıf Nakil</span>
            </div>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)', marginBottom: '3rem',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <P>Diğer kurumlardan naklen başvuran 9 ve 10. sınıf aday öğrencilerden TOGS'ta belirlenen puan sağlamaları beklenir. Uygun puanı sağlayan adaylar ardından mülakat sürecine davet edilir.</P>
              <P>Kontenjan bilgisi için kayıt ofisiyle iletişime geçiniz.</P>
            </div>
          </motion.div>

          {/* Kesin Kayıt Belgeleri */}
          <motion.div {...fadeUp(0.16)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="red-line" />
              <span className="section-tag">Kesin Kayıt</span>
            </div>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)', marginBottom: '3rem',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Kesin Kayıt İçin Gerekli Belgeler</p>
              <BulletList items={[
                'Öğrenci T.C. kimlik kartı veya nüfus cüzdanı fotokopisi',
                'Anne/baba T.C. kimlik kartı fotokopisi',
                'İkametgah belgesi (son 3 ay)',
                'Fotoğraf (4 adet vesikalık)',
                'Sağlık raporu (okul doktorundan veya sağlık kuruluşundan)',
                '8. sınıf diploma/not döküm belgesi veya LGS sonuç belgesi (hazırlık için)',
                'Mevcut okul nakil belgesi (9-10. sınıf nakillerinde)',
              ]} />
            </div>
          </motion.div>

          {/* İletişim ve Bağlantılar */}
          <motion.div {...fadeUp(0.18)}>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>İletişim &amp; Başvuru</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="contact-grid">
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.4rem' }}>Başvuru Portalı</p>
                  <a href="/kayit/basvuru-formu" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--red)', fontWeight: 600 }}>
                    Başvuru Formu →
                  </a>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.4rem' }}>E-Posta</p>
                  <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--red)', fontWeight: 600 }}>
                    info@kolejsancaktepe.com
                  </a>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.4rem' }}>Telefon</p>
                  <a href="tel:02166060833" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--red)', fontWeight: 600 }}>
                    0216 606 0 833 / 0501 622 31 35
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
