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

export default function OrtaokulKayitPage() {
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
              Ortaokul Kayıt
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Kolej Sancaktepe Ortaokulu 5, 6, 7 ve 8. sınıf kayıt süreçleri.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">

          {/* 5. Sınıf */}
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">5. Sınıf</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>5. Sınıf Kayıt Süreci</h2>
          </motion.div>

          <motion.div {...fadeUp(0.05)}>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)', marginBottom: '3rem',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <P>5. sınıfa başvuran aday öğrenciler için herhangi bir sınav uygulanmaz. Başvuru formu doldurma sırası göz önünde bulundurularak kontenjan dahilinde aday öğrenciler Aday Tanıma Çalışması'na davet edilir.</P>
              <P>Aday Öğrenci Tanıma Çalışması, öğrencinin sosyal, bireysel ve akademik becerilerini sınıf ve branş öğretmenlerinin gözlemlemesi amacıyla tasarlanmıştır. Süreç, farklı ders öğretmenleri ve PDR uzmanı tarafından gerçekleştirilen değerlendirme görüşmesiyle son bulur.</P>
              <P>Süreçlerin tümünü olumlu tamamlayan aday öğrencilerle kontenjan doğrultusunda kesin kayıt yapılır.</P>
              <div style={{
                background: 'rgba(35,46,92,0.05)', borderRadius: '10px', padding: '1rem 1.25rem', marginTop: '0.5rem',
                fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75,
              }}>
                <strong>Not:</strong> 5. sınıf için başarı bursu süreci uygulanmaz.
              </div>
            </div>
          </motion.div>

          {/* 6-7-8. Sınıf */}
          <motion.div {...fadeUp(0.08)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">6, 7 ve 8. Sınıf</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>6-7-8. Sınıf Kayıt Süreci</h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)', marginBottom: '3rem',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <P>6, 7 ve 8. sınıfa başvuran aday öğrenciler TED Okulları Giriş Sınavı'na (TOGS) alınır. TOGS, Türkçe, Matematik, Fen Bilimleri, Sosyal Bilgiler ve İngilizce sorularından oluşur. Sınav her yıl Kasım, Ocak ve Mart aylarında uygulanır; sonuçlar aynı gün açıklanır.</P>
              <P>TOGS'ta belirlenen taban puanı sağlayan adaylar İngilizce sınavına ve Aday Tanıma Çalışması'na davet edilir.</P>
              <P>Sınav sonuçları, İngilizce sınav notu ve Aday Tanıma Çalışması değerlendirmeleri bir araya getirilerek puan sıralaması oluşturulur. Kontenjan dahilinde kesin kayıt süreçleri yürütülür.</P>
              <div style={{
                background: 'rgba(35,46,92,0.05)', borderRadius: '10px', padding: '1rem 1.25rem', marginTop: '0.5rem',
                fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75,
              }}>
                <strong>Not:</strong> Ortaokul kademesinde başarı bursu süreci uygulanmaz.
              </div>
            </div>
          </motion.div>

          {/* Kesin Kayıt Belgeleri */}
          <motion.div {...fadeUp(0.14)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="red-line" />
              <span className="section-tag">Kesin Kayıt</span>
            </div>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Gerekli Belgeler</p>
              <BulletList items={[
                'Öğrenci T.C. kimlik kartı veya nüfus cüzdanı fotokopisi',
                'Anne/baba T.C. kimlik kartı fotokopisi',
                'İkametgah belgesi (son 3 ay)',
                'Fotoğraf (4 adet vesikalık)',
                'Sağlık raporu',
                'Öğrenci not döküm belgesi veya karne fotokopisi',
                'Mevcut okul nakil belgesi',
              ]} />
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--grey-light)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
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
    </>
  );
}
