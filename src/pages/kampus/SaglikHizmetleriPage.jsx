import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.9rem' }}>{children}</p>
);

const Section = ({ tag, title, children, delay = 0, bg = 'var(--white)' }) => (
  <section style={{ padding: '5rem 0', background: bg, position: 'relative' }}>
    <div className="section-container">
      <motion.div {...fadeUp(delay)} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <div className="red-line" />
          <span className="section-tag">{tag}</span>
        </div>
        <h2 className="section-title">{title}</h2>
      </motion.div>
      <motion.div {...fadeUp(delay + 0.05)}>
        <div style={{
          background: bg === 'var(--white)' ? 'var(--off-white)' : 'var(--white)',
          borderRadius: '14px', padding: '2rem 2.5rem',
          border: '1px solid var(--grey-light)',
          boxShadow: '0 2px 12px rgba(35,46,92,0.04)',
        }}>
          {children}
        </div>
      </motion.div>
    </div>
  </section>
);

export default function SaglikHizmetleriPage() {
  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kampüs</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Sağlık Hizmetleri
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'de her öğrencinin sağlığı, uzman ekibimiz ve kapsamlı revir hizmetlerimizle güvence altındadır.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Hızlı bilgiler */}
      <section style={{ padding: '3rem 0', background: 'var(--primary)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }} className="info-grid">
            {[
              { val: '2', label: 'Aktif Revir' },
              { val: '1', label: 'Uzman Hekim' },
              { val: '2', label: 'Okul Hemşiresi' },
            ].map((i) => (
              <div key={i.label}>
                
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{i.val}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.3rem' }}>{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section tag="Ekip" title="Sağlık Ekibi" bg="var(--off-white)">
        <P>Kolej Sancaktepe'de iki aktif revir ile tam zamanlı bir uzman hekim ve iki okul hemşiresi görev yapmaktadır. Sağlık ekibimiz, öğrencilerin okul saatleri içerisindeki tüm sağlık süreçlerini yönetir; gerekli gördüğü her durumda veli ile irtibata geçerek bilgi paylaşımında bulunur.</P>
        <P>Bu nedenle sağlık birimi tarafından yapılacak aramalar endişe yaratmamalıdır. Velilerimize iletilen sağlık bilgilendirme mesajlarının dikkatle takip edilmesi, okul sağlığı açısından büyük önem taşır.</P>
      </Section>

      <Section tag="Form" title="Öğrenci Sağlık Formu">
        <P>Kayıt sırasında velilerimizden "Öğrenci Sağlık Formu"nun eksiksiz doldurulması istenmektedir. Formun doldurulmasının ardından, sağlığı ilgilendiren gelişmelerin ivedilikle sağlık birimine iletilmesi gerekmektedir.</P>
      </Section>

      <Section tag="Özellikli Durumlar" title="Özellikli Sağlık Durumları" bg="var(--off-white)">
        <P>Özellikli bir sağlık durumu olan veya özel bir nedenle ilaç kullanan öğrenciler hakkında sağlık ekibimiz bilgilendirilmelidir. Gerekli görülen durumlarda öğrenciyi takip eden hekimden bilgi notu, rapor veya aşılama belgesi gibi belgeler en kısa sürede revire teslim edilmelidir.</P>
        <P>"Öğrenci Sağlık Formu" ve hekimden gelen raporlar öğrenciye ait sağlık dosyasında muhafaza edilir. Alerji veya ilaç kısıtlaması bulunan öğrenciler için gerekli önlemleri almak amacıyla açıklayıcı bir hekim raporu istenebilmektedir.</P>
        <P>Okul hekimimiz, gerektiğinde velilerin izni dahilinde öğrenciyi takip eden diğer hekimlerle de iletişim kurabilmektedir.</P>
      </Section>

      <Section tag="Acil" title="Acil Sağlık Durumları">
        <P>Acil sağlık durumlarında eş zamanlı olarak müdahale edilir ve veli bilgilendirmesi yapılır. Durumun özelliğine göre veli ile birlikte planlama yapılarak hareket edilir. Gerektiğinde anlaşmalı ambulans hizmeti ve 112 Acil Yardım hattından zaman kaybedilmeksizin destek alınır.</P>
        <P>Sağlık ekibi dışında, Sertifikalı İlkyardım Eğitimi almış çalışan sayımız mevzuatın gerektirdiğinin çok üzerinde olup bu sayı stratejik planlamamız doğrultusunda sürekli artırılmaktadır.</P>
      </Section>

      <Section tag="Bulaşıcı Hastalıklar" title="Toplumdan Edinilmiş Enfeksiyon Hastalıkları" bg="var(--off-white)">
        <P>Üst solunum yolu enfeksiyonu, döküntülü hastalıklar, ishal ve ateş gibi şikâyetleri olan öğrencilerin okula devam etmemesi esastır. Hastalık belirtisi gösteren öğrencilerin bir an önce okul ortamından ayrılarak istirahat ettirilmesi, hem öğrencinin iyileşme sürecini hızlandırır hem de bulaşmayı en aza indirir.</P>
        <P>Bulaşıcı hastalığı tespit edilen öğrencinin velisi revir tarafından aranır ve öğrencinin alınarak dinlendirilmesi istenebilir. Diğer velilerin zamanında bilgilendirilebilmesi için hekim raporunun en kısa sürede okul revirine ulaştırılması gerekmektedir.</P>
      </Section>

      <Section tag="İlaç" title="İlaç Uygulamaları ve İlaç Etiketleri">
        <P>Okul saatleri içerisinde öğrencilerin kullanması gereken ilaçlar yalnızca revir sınırları içinde uygulanmaktadır. Her ilaç için ayrı bir "İlaç Kullanım Etiketi" doldurularak revire teslim edilmelidir; bu etiket eğitim yılı başında dağıtılır, bitmesi halinde öğrenci işleri aracılığıyla alınabilir.</P>
        <P>Etiketsiz ya da orijinal ambalajında teslim edilmeyen ilaçlar okulda uygulanamaz. Vitamin, probiyotik ve beslenme takviyelerinin evde verilmesi beklenmektedir. Okul bünyesinde uygulanacak ilaçların kahvaltı, öğlen veya ikindi gibi ortak zamanlara planlanması gerekmektedir.</P>
      </Section>

      <Section tag="Koruyucu" title="Koruyucu Sağlık Uygulamaları" bg="var(--off-white)">
        <P>Türkiye Halk Sağlığı Kurumu tarafından gerçekleştirilen işitme taraması, aşılama, diş sağlığı muayenesi ve florürlü vernik uygulaması gibi hizmetler hakkında velilere önceden bilgilendirme yapılır. Uygulamaya izin verilip verilmediği yazılı onam formuyla alınır. İzin verilen öğrencilere yapılacak uygulamalar okul revirlerinde, okul hekimi ve hemşiresi gözetiminde gerçekleştirilir.</P>
      </Section>

      <Section tag="BMI Takibi" title="Beden Kitle İndeksi Takibi">
        <P>Çocukluk çağı obezitesi giderek artan önemli bir sağlık sorunudur. Farkındalık yaratmak ve öğrencilerin beden kitle indekslerini takip edebilmek amacıyla beden eğitimi öğretmenlerimiz tarafından yapılan boy ve kilo ölçümleri, Dünya Sağlık Örgütü'nün yaşa ve cinsiyete özel persantil eğrilerinde işaretlenmektedir. Bu grafikler öğrenci portal sayfalarında incelenebilmektedir.</P>
      </Section>

      <Section tag="Mahremiyet" title="Mahremiyet ve Bireyselliğe Saygı" bg="var(--off-white)">
        <P>Öğrencilerin sağlığına ilişkin konularda sağlık ekibi iletişimi yalnızca velinin "Öğrenci Sağlık Formu"nda belirttiği yetkili kişilerle gerçekleştirilir. Tüm sağlık süreçlerinde mahremiyet başta olmak üzere öğrencinin birey ve hasta olarak hakları gözetilir.</P>
      </Section>

      <Section tag="Koruma" title="Bulaşıcı Hastalıklardan Korunma Protokolü">
        <P>Bulaşıcı hastalıklardan korunma ve yayılma hızını kesmek üzere kapsamlı önlemler alınmakta; bu konudaki prosedürler periyodik olarak güncellenmektedir. Detaylı bilgi için lütfen okul sağlık birimiyle iletişime geçiniz.</P>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--grey-light)' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.3rem' }}>Telefon</p>
            <a href="tel:02166060833" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--red)', fontWeight: 600, display: 'block' }}>0216 606 0 833</a>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.3rem' }}>E-Posta</p>
            <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--red)', fontWeight: 600 }}>info@kolejsancaktepe.com</a>
          </div>
        </div>
      </Section>

      <style>{`
        @media (max-width: 640px) { .info-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </>
  );
}
