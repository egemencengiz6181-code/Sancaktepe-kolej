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

const AgeCard = ({ age, label, info, delay }) => (
  <motion.div {...fadeUp(delay)}>
    <div style={{
      background: 'var(--white)', borderRadius: '14px', overflow: 'hidden',
      border: '1px solid var(--grey-light)', boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
    }}>
      <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', padding: '1.25rem 1.75rem' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'rgba(255,255,255,0.2)', lineHeight: 1 }}>{age}</div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: '0.25rem 0 0' }}>{label}</h3>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{info}</p>
      </div>
    </div>
  </motion.div>
);

export default function OkulOncesiIlkokulKayitPage() {
  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kayıt</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Okul Öncesi ve<br />İlkokul Kayıt
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Kolej Sancaktepe Okul Öncesi ve İlkokul kademelerine kayıt süreçleri.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">

          {/* Okul Öncesi */}
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Okul Öncesi — 2026/2027</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Anaokulu Grupları</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '3.5rem' }} className="age-grid">
            <AgeCard
              age="4"
              label="4 Yaş Grubu (48 Ay)"
              info="2026-2027 akademik yılında 48 aylık olan (yani 2022 yılı doğumlu) çocuklar 4 yaş grubuna başvurabilir. Başvuru formu doldurma sırası ve kontenjan gözetilerek Aday Öğrenci Tanıma Çalışması'na davet edilirler."
              delay={0.05}
            />
            <AgeCard
              age="5"
              label="5 Yaş Grubu (60 Ay)"
              info="2026-2027 akademik yılında 60 aylık olan (yani 2021 yılı doğumlu) çocuklar 5 yaş grubuna başvurabilir. Başvuru formu doldurma sırası ve kontenjan gözetilerek Aday Öğrenci Tanıma Çalışması'na davet edilirler."
              delay={0.1}
            />
          </div>

          {/* Aday Tanıma */}
          <motion.div {...fadeUp(0.12)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="red-line" />
              <span className="section-tag">Aday Öğrenci Tanıma Çalışması</span>
            </div>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)', marginBottom: '3rem',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <P>Aday öğrenci okul tarafından belirlenen ve duyurulan günde velisiyle birlikte okula davet edilir. Çocuk, sınıf öğretmeni ve PDR uzmanından oluşan komisyon tarafından sosyal, duygusal, özbakım ve bilişsel gelişim açısından değerlendirilir.</P>
              <P>Çalışma boyunca ebeveynlerle de bir görüşme gerçekleştirilerek çocuğun ev ortamı ve gelişimine dair bilgiler paylaşılır.</P>
              <P>Sürecin tamamlanmasının ardından kontenjan dahilinde kesin kayıt süreçleri yürütülür.</P>
            </div>
          </motion.div>

          {/* İlkokul */}
          <motion.div {...fadeUp(0.14)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="red-line" />
              <span className="section-tag">İlkokul — 1, 2, 3 ve 4. Sınıf</span>
            </div>
            <div style={{
              background: 'var(--white)', borderRadius: '14px', padding: '2rem',
              border: '1px solid var(--grey-light)', marginBottom: '3rem',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <P>İlkokul kademesinde herhangi bir giriş sınavı uygulanmaz. Başvuru formu doldurma sırası göz önünde bulundurularak kontenjan dahilinde aday öğrenciler Aday Tanıma Çalışması'na davet edilir.</P>
              <P>Aday Öğrenci Tanıma Çalışması, öğrencinin sosyal, bireysel ve akademik becerilerini sınıf ve branş öğretmenlerinin gözlemlemesi amacıyla tasarlanmıştır. Süreç değerlendirme görüşmesiyle tamamlanır.</P>
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
              border: '1px solid var(--grey-light)',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Gerekli Belgeler</p>
              <BulletList items={[
                'Öğrenci T.C. kimlik kartı veya nüfus cüzdanı fotokopisi',
                'Anne/baba T.C. kimlik kartı fotokopisi',
                'İkametgah belgesi (son 3 ay)',
                'Fotoğraf (4 adet vesikalık)',
                'Doğum belgesi (ilk kez okula başlayan öğrenciler için)',
                'Sağlık raporu (sağlık kuruluşundan)',
                'Mevcut okul nakil belgesi (mevcut öğrenciler için)',
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
                    0216 606 0 833
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .age-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
