import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const SectionTitle = ({ tag, title }) => (
  <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
      <div className="red-line" />
      <span className="section-tag">{tag}</span>
    </div>
    <h2 className="section-title">{title}</h2>
  </motion.div>
);

const LevelCard = ({ level, children, delay = 0 }) => (
  <motion.div {...fadeUp(delay)}>
    <div style={{
      background: 'var(--white)', borderRadius: '14px',
      border: '1px solid var(--grey-light)', overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(35,46,92,0.05)', marginBottom: '1.5rem',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '1rem 1.75rem',
      }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: 0 }}>{level}</h3>
      </div>
      <div style={{ padding: '1.75rem' }}>{children}</div>
    </div>
  </motion.div>
);

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

export default function YurtDisindanKayitPage() {
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
              Yurt Dışından Aday<br />Kayıt Süreci
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Yurt dışından başvuran aday öğrenciler için seviyeye göre kayıt süreçleri.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <SectionTitle tag="Başvuru Süreçleri" title="Seviyeye Göre Kayıt" />

          <LevelCard level="Okul Öncesi" delay={0.05}>
            <P>Yurt dışından gelen Okul Öncesi seviyesine aday öğrenciler, sınıf öğretmeni ve PDR uzmanından oluşan bir komisyon ile görüşürler. Öğrenci adayını tanımaya yönelik yapılan bu görüşmede aday öğrencinin sosyal, duygusal, özbakım, fiziksel ve bilişsel becerileri bütünsel olarak değerlendirilir.</P>
            <P>Aday öğrencinin yurt dışında devam ettiği okulu var ise okul tarafından hazırlanmış olan gelişim değerlendirme raporunu okul yönetimine sunması beklenir.</P>
          </LevelCard>

          <LevelCard level="İlkokul" delay={0.1}>
            <P>Yurt dışından gelen 1, 2, 3, ve 4. sınıfa aday öğrenciler, sınıf öğretmeni ve PDR uzmanından oluşan bir komisyon ile görüşürler. Öğrenci adayını tanımaya yönelik yapılan bu görüşmede aday, sosyal uyum becerilerinin yanı sıra akademik kazanımları açısından da değerlendirilir.</P>
            <P>Aday öğrencinin yurt dışında devam ettiği okulu tarafından hazırlanmış olan gelişim değerlendirme raporunu ve öğretmeninin hazırladığı referans mektubunu başvuru sırasında okul yönetimine sunması beklenir.</P>
            <P>T.C. MEB İl Müdürlüğü tarafından hazırlanmış olan denklik belgesinin kayıt öncesinde öğrenci işleri birimine iletilmesi beklenir.</P>
          </LevelCard>

          <LevelCard level="Ortaokul" delay={0.15}>
            <P>Yurt dışından gelen aday öğrenci TED Okulları Giriş Sınavına (Seviye Tespit Sınavına) alınır. Sınav Türkçe, Matematik, Fen Bilimleri, Sosyal Bilgiler ve İngilizce sorularından oluşur. Bu sınavın sonucu, adayın okula kabulüne etki etmez.</P>
            <P>Aday öğrenci sınav uygulamasından sonra rehberlik görüşmesine davet edilir. İhtiyaç duyulduğu takdirde bu görüşmenin devamında Türkçe ve Matematik öğretmenleri ile de bir görüşme planlanır.</P>
            <P>Öğrencinin sınav sonucu, başvuru dosyası ve rehberlik görüşmesi okul müdürü, ortaokul müdür yardımcısı ve PDR uzmanının bulunduğu komisyon tarafından değerlendirilir. T.C. MEB İl Müdürlüğü tarafından hazırlanmış olan denklik belgesinin kayıt öncesinde öğrenci işleri birimine iletilmesi beklenir.</P>
            <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginTop: '1rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                Ortaokul Başvuru Dosyası İçeriği
              </p>
              <BulletList items={[
                'Not Döküm Belgesi (Transkript): Okul müdürlüğü tarafından onaylı dönem/yıl sonu not dökümü.',
                'Kendini Tanıtma Yazısı: En az 200 kelimelik, el yazısıyla hazırlanmış kişisel tanıtım yazısı.',
                'Referans Mektubu: Öğrenim gördüğü okuldan 2 öğretmeninin hazırladığı dijital veya basılı mektuplar.',
                'Sanat Kültür Spor Bilim Dosyası: Ulusal/uluslararası yarışma, sertifika ve diğer belgeler (isteğe bağlı).',
              ]} />
            </div>
          </LevelCard>

          <LevelCard level="Lise (Hazırlık, 9 ve 10. Sınıf)" delay={0.2}>
            <P>Yurt dışından gelen lise hazırlık, 9 ve 10. sınıfa aday öğrenciler TED Okulları Giriş Sınavına (Seviye Tespit Sınavına) alınır. Sınav Türkçe, Matematik, Sosyal Bilimler, Fen Bilimleri ve İngilizce sorularından oluşur.</P>
            <P>Öğrenci sınav sonrasında mülakat görüşmesine davet edilir. Sınav sonucu, dijital başvuru dosyası ve mülakat görüşmesi lise kayıt komisyonu tarafından değerlendirilir.</P>
            <div style={{
              background: 'rgba(230,25,54,0.06)', border: '1px solid rgba(230,25,54,0.2)',
              borderLeft: '4px solid var(--red)', borderRadius: '8px', padding: '1rem 1.25rem', marginBottom: '1.25rem',
            }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.75, margin: 0 }}>
                <strong>Not:</strong> Eğer aday öğrenci 3 yıl ve üzerinde yurt dışında yaşıyorsa TOGS sınavında taban puanı sağlaması beklenmez; İngilizce sınavı, transkript ve denklik belgesi süreçleri ilerletilir. 3 yılın altında yurt dışında kaldıysa TOGS taban puanını sağlaması beklenir.
              </p>
            </div>
            <P><strong>Kolej Sancaktepe Anadolu Lisesi 11 ve 12. sınıflarına yeni öğrenci kaydı alınmamaktadır.</strong></P>
            <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginTop: '1rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>
                Lise Dijital Başvuru Dosyası İçeriği
              </p>
              <BulletList items={[
                'Not Döküm Belgesi (Transkript): Okul müdürlüğü onaylı dönem/yıl sonu not dökümü.',
                'Kendini Tanıtma Yazısı: En az 200 kelimelik el yazısıyla kişisel tanıtım yazısı.',
                'Referans Mektubu: 2 öğretmenin öğrenci hakkında hazırladığı dijital veya basılı mektuplar.',
                'Sosyal/Toplum Hizmeti Çalışmaları: Etkinlik katılımı, toplum hizmeti, yarışma dereceleri ile ilgili belgeler.',
                'Sanat Kültür Spor Bilim Dosyası: Ulusal/uluslararası etkinlik belgeleri (isteğe bağlı).',
              ]} />
            </div>
          </LevelCard>
        </div>
      </section>
    </>
  );
}
