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

const Section = ({ tag, title, children, delay = 0 }) => (
  <motion.div {...fadeUp(delay)} style={{ marginBottom: '3rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
      <div className="red-line" />
      <span className="section-tag">{tag}</span>
    </div>
    {title && <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>{title}</h2>}
    <div style={{
      background: 'var(--white)', borderRadius: '14px', padding: '2rem',
      border: '1px solid var(--grey-light)',
      boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
    }}>
      {children}
    </div>
  </motion.div>
);

const PROCESS_STEPS = [
  { num: '01', title: 'Başvuruların Alınması', desc: 'Bursluluk sınavına başvurular çevrimiçi olarak alınmaktadır. Başvuru tarih ve koşulları her akademik yıl için duyurulur.' },
  { num: '02', title: 'Başvuruların Değerlendirilmesi', desc: 'Gelen başvurular incelenerek Bursluluk Sınavı için gerekli ön koşulları sağlayan adaylar sınava davet edilir.' },
  { num: '03', title: 'Yazılı Sınav', desc: "Aday öğrenciler okuduğunu anlama, sayısal, sözel ve İngilizce alanlarını kapsayan Bursluluk Yazılı Sınavı'na alınır." },
  { num: '04', title: 'Mülakat ve İnceleme', desc: 'Yazılı sınavda başarılı olan adaylar bireysel mülakat ve sosyo-ekonomik durum incelemesine davet edilir.' },
  { num: '05', title: 'Sonuçların Açıklanması', desc: 'Tüm değerlendirmeler tamamlandıktan sonra sonuçlar ilgili velilere yazılı olarak iletilir.' },
  { num: '06', title: 'Oryantasyon', desc: 'Tam Eğitim Bursu kazanan öğrenciler için kayıt öncesinde oryantasyon programı düzenlenir.' },
];

export default function BurslarPage() {
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
              Bursluluk Olanakları
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'nin Tam Eğitim Bursu süreci ve koşulları.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">

          {/* Tam Eğitim Bursu Banner */}
          <motion.div {...fadeUp(0)} style={{ marginBottom: '4rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
              borderRadius: '20px', padding: '3rem 3.5rem', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '200px', height: '200px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>Bursluluk Programı</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
                  TAM EĞİTİM BURSU
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, maxWidth: '680px' }}>
                  Kolej Sancaktepe, sosyal sorumluluk anlayışı çerçevesinde her yıl sınırlı sayıda öğrenciye Tam Eğitim Bursu sağlar. Bu burs ile öğrenci tüm eğitim dönemince okul ücretinden muaf tutulur.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Duyurular */}
          <Section tag="Duyurular" delay={0.05}>
            <P>Bursluluk sınavı tarihleri, başvuru koşulları ve ayrıntılı bilgiler her yıl Kolej Sancaktepe'nin resmi web sitesinde, sosyal medya kanallarında ve okul panosunda duyurulur.</P>
            <P>Bursluluk sınavına başvuru koşulları akademik yıla göre güncellenebilmektedir; güncel bilgi için lütfen kayıt ofisiyle iletişime geçiniz.</P>
          </Section>

          {/* Süreç Adımları */}
          <motion.div {...fadeUp(0.08)} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Süreç</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '2rem' }}>Bursluluk Süreci</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="burs-steps-grid">
              {PROCESS_STEPS.map((s, i) => (
                <div key={i} style={{
                  background: 'var(--white)', borderRadius: '12px', padding: '1.5rem',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 8px rgba(35,46,92,0.04)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--grey-light)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Burslu Öğrencilerin İzlenmesi */}
          <Section tag="İzleme" title="Burslu Öğrencilerin İzlenmesi" delay={0.1}>
            <P>Burslu öğrenciler her dönem okul yönetimi, sınıf öğretmeni ve PDR uzmanı tarafından akademik, sosyal ve psikolojik gelişim açısından takip edilir.</P>
            <P>İzleme görüşmeleri öğrencinin güçlü yönlerini ve geliştirmesi gereken alanlarını belirleyerek kişiye özel destek planları oluşturmayı amaçlar.</P>
          </Section>

          {/* Bursun Devamlılığı */}
          <Section tag="Devamlılık" title="Bursun Devamlılığı" delay={0.12}>
            <P>Tam Eğitim Bursu yalnızca akademik başarıyı değil, öğrencinin genel okul yaşamına katkısını ve değerlerimizle örtüşen tutum ve davranışlarını da kapsar.</P>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem', marginTop: '1rem' }}>Bursun Sürdürülmesi İçin Koşullar</p>
            <BulletList items={[
              'Dönem sonu akademik ortalama belirlenen taban puanın üzerinde olmalıdır.',
              'Disiplin soruşturması açılmamış olmalı ve topluluk yaşamına aktif katkı sağlanmalıdır.',
              'Devamsızlık sınırı aşılmamalıdır.',
              'Yıllık izleme görüşmelerine katılım eksiksiz sağlanmalıdır.',
            ]} />
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Bursun Sona Erebileceği Durumlar</p>
            <BulletList items={[
              'Akademik ortalamanın iki dönem üst üste taban puanın altında kalması.',
              'Disiplin yönetmeliği kapsamında ağır ihlal tespit edilmesi.',
              'Sosyo-ekonomik koşulların ilk başvuruya kıyasla önemli ölçüde değiştiğinin belirlenmesi.',
              'Öğrencinin veya velinin bursu geri çevirmesi.',
            ]} />
          </Section>

        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .burs-steps-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .burs-steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
