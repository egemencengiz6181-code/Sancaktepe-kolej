import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children, style = {} }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.97rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem', ...style }}>{children}</p>
);

const quotes = [
  {
    section: 'TED AD ile çalışmadan önceki durum',
    text: 'Bu okul, insan kaynaklarındaki yüksek sirkülasyon oranı, eğitimdeki başarı seviyelerinin ve öğrenci profilinin düşüş trendi ile mücadele ediyordu. Kaynaklarını etkin bir şekilde yönetmede zorluklar yaşamaktaydı. Bu durum, kurumun stratejik yönetim ve kaynak optimizasyonu konularında iyileştirme yapması gerektiğini göstermekteydi.',
  },
  {
    section: 'Kazanımlar',
    text: 'Lokal ve henüz kampüsleşme sürecini tamamlamamış okullar için TED AD hizmetinin sunduğu imkanların eşsiz bir fırsat teşkil ettiğine inanıyorum. Bu hizmetten yararlanan kurumlar, sadece marka değerinden önemli ölçüde faydalanmakla kalmıyor, aynı zamanda eğitim ve ekonomik açıdan paylaşılan bilgi birikimi ve uzmanlık da son derece değerli. Bu hizmet, okulların marka bilinirliğini artırma, eğitim kalitesini yükseltme ve iktisadi sürdürülebilirliklerini güçlendirme konusunda önemli bir avantaj sağlıyor.',
  },
  {
    section: 'Kazanımlar',
    text: 'Türk Eğitim Derneği\'nin (TED) sahip olduğu bilgi birikimi ve profesyonellerden faydalanmanın, okulumuzun eğitim yönetiminde bütünlüğü sağlamada önemli bir etkisi olduğuna inanıyorum. TED\'in deneyim ve uzmanlığı, eğitim politikalarımızın ve uygulamalarımızın geliştirilmesinde bize yol gösterdi. Bu bütünlük, velilerimizin okulun aldığı kararlar karşısındaki uyum süreçlerini de hızlandırdı, çünkü kararlarımızın arkasında TED gibi köklü ve saygın bir kuruluşun desteği ve onayı bulunuyor. Bu durum, velilerin okulumuza olan güvenini artırdı ve eğitim ortamımızın daha harmonik ve etkili bir şekilde ilerlemesine katkı sağladı.',
  },
  {
    section: 'Değişimler',
    text: 'TED AD hizmeti ile okul yönetimimiz daha kontrol edilebilir bir profesyonel yapıya dönüştü. TED genel merkezin yaptığı değerlendirmeler, okul yönetimi ile ilgili daha objektif bilgilere sahip olmamızı sağladı.',
  },
  {
    section: 'Değişimler',
    text: 'TED AD hizmetlerinden faydalanan bir kurum paydaşı olarak danışmanlık süreci sonrasında elde edilen akreditasyon ve yaşanan dönüşümden duyduğum memnuniyeti ifade edebilirim. Bu süreçte yıllardır süre gelen sorunların büyük bir kısmını başarıyla çözme fırsatı bulduk. İlerleyen dönemlerde, TED Genel Merkez ile iş birliği içinde eğitim seviyemizi daha da yükselterek bölgemizin en başarılı eğitim kurumu haline gelme konusunda tam bir inanç ve kararlılığa sahibim.',
  },
];

const bullets = [
  'Ülke genelinde etkinlik gösteren okulları, TED Üniversitesi, düşünce kuruluşu TEDMEM, mezun dernekleri, gönüllü çalışma komiteleri, spor kulüpleri, senfoni orkestrası ve eşsiz burs sistemi ile Türkiye\'nin en köklü sivil toplum kuruluşu olan Türk Eğitim Derneğinin ayrıcalıklı ekosistemine dâhil olmalarını sağlıyoruz.',
  'Sürecin başında uyguladığımız Mevcut Durumun Değerlendirilmesi çalışması ile akademik, yönetsel, finansal ve fiziksel açılardan derinlemesine inceleyerek okulun güçlü ve gelişime açık yanlarını tespit ediyoruz.',
  'Mevcut Durumun Değerlendirilmesi çalışmasından elde edilen veriyle okula özgü bir gelişim planı oluşturarak çalışmalarımızı yürütüyoruz.',
  'Süreç boyunca sunduğumuz hizmetlerin etkisini ölçmek ve geribildirim almak için Genel Merkezimiz tarafından geliştirilen Değer Ölçütleri sistemini uyguluyoruz. Bu kapsamda okulları; TED Akreditasyonunda her yıl 4 ana ölçüt ve 70 alt ölçütte, Eğitim Danışmanlıklarında her yıl 3 ana ölçüt ve 61 alt ölçütte değerlendirerek gelişimlerini gerçek zamanlı olarak takip ediyoruz. Değerlendirme sonuçlarını eğitim öğretim yılı içerisinde iki kez raporluyoruz.',
  'TED\'e özgü yayınlar, akademik programlar ve yazılımlardan faydalanmalarını sağlıyoruz.',
  'TED Okullarında kullanılan mobilya, eğitim araç-gereçleri ve okul giysilerini kullanabilmelerine imkân sağlıyoruz.',
];

export default function AkreditasyonDanismanlikPage() {
  return (
    <>
      {/* HERO with logo */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1530 0%, var(--primary) 60%, var(--primary-light) 100%)',
        padding: '8rem 0 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }} />
        {/* Faded logo watermark */}
        <div style={{
          position: 'absolute',
          right: '-4rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '480px',
          height: '480px',
          opacity: 0.07,
          pointerEvents: 'none',
        }}>
          <img
            src="/logo/kolej%20sancaktepe%20logo%20-%20kare.png"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(10)' }}
          />
        </div>

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}
          >
            <img
              src="/logo/kolej%20sancaktepe%20logo%20-%20kare.png"
              alt="Kolej Sancaktepe"
              style={{ width: '72px', height: '72px', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kurumsal</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Akreditasyon &amp; Danışmanlık
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '620px', lineHeight: 1.85 }}>
              TED Akreditasyon ve Danışmanlık hizmetleri kapsamında eğitim kurumlarına kurumsal dönüşüm desteği.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '6rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: '5rem', alignItems: 'start' }} className="akred-grid">

            {/* Sticky sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <motion.div {...fadeUp(0)} style={{
                background: 'var(--white)',
                borderRadius: '12px',
                border: '1px solid var(--grey-light)',
                overflow: 'hidden',
                boxShadow: '0 4px 30px rgba(35,46,92,0.07)',
              }}>
                <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary))' }} />
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.75rem' }}>TED AD</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.35, marginBottom: '1rem' }}>
                    TED Akreditasyon ve Danışmanlık
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', lineHeight: 1.75, color: 'var(--text-mid)', marginBottom: '1.25rem' }}>
                    2020'den günümüze Türk eğitim sistemine çok yönlü katkı sağlayan kurumsal hizmet programı.
                  </p>
                  <div style={{ padding: '1rem', background: 'rgba(35,46,92,0.04)', borderRadius: '8px', border: '1px solid rgba(35,46,92,0.08)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>Kabul Oranı</div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--red)', lineHeight: 1 }}>~35%</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-mid)', marginTop: '0.25rem' }}>2020'den günümüze</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main text */}
            <div>
              <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
                <P>Türk eğitim sistemine çok yönlü katkılar sağlamayı amaçlayan Türk Eğitim Derneği, kurumsal değerlerinin ülke genelinde yaygınlaşmasını artırmak ve özel okul sektörünün nitelikli gelişimine katkı sağlamak amacıyla TED Akreditasyon ve Danışmanlık (TED AD) hizmetleri kapsamında eğitim kurumlarına ve bireylere kurumsal danışmanlık hizmetleri önermektedir.</P>
                <P>TED Akreditasyonu programı belirtilen şartları taşıyan ve halen faaliyette olan okulların kurumsal dönüşüm sürecine girmelerine ve beklenen yetkinlikleri geliştirdikleri takdirde TED Okulu olmalarına imkân tanımaktadır. Ayrıca TED AD kapsamında okulların her türlü eğitim gereksinimlerine yönelik danışmanlık paketleri sunulmakta, okul öncesi eğitim kurumlarına ve özel okul açmak isteyen yatırımcılara yönelik özelleştirilmiş hizmetler önerilmektedir.</P>
                <P>TED AD kapsamında sunulan tüm programlar için öncelikle başvuru sahibinin olası gelişim alanlarını saptamaya yönelik bir "Mevcut Durumun Değerlendirilmesi" çalışması yapılmaktadır. Bu çalışma sonrasında oluşturulan rapor, TED AD kapsamında alınacak kurumsal hizmetin başvuru sahibinin kendisine özgü gereksinimlerine uygun olarak verilmesine olanak tanımaktadır.</P>
                <P>TED AD hizmetlerinin başarısı başvuru sahiplerinin yeniliğe ve ortak çalışma kültürüne açık, ayrıca TED'in kurumsal değerlerine uygun bir yaklaşım içerisinde olmalarına bağlıdır. Yapılan başvuruların kabul edilme oranı, TED AD'nin başlangıç tarihi olan 2020'den günümüze yaklaşık %35'tir. TED AD hizmetlerinden faydalanan okulların listesi "TED AD Okullarımız" başlığında verilmektedir.</P>
                <P>Birlikte çalışma imkânı bulabildiğimiz okulların öğrencilerinin, öğretmenlerinin ve yöneticilerinin başarısını artırmak için geliştirdiğimiz strateji ve çözümlerin yanı sıra, TED AD kapsamında iş birliği yaptığımız okullara çok yönlü katkılar sunuyoruz. İş birliği yaptığımız okulların;</P>
              </motion.div>

              {/* Bullet list */}
              <motion.div {...fadeUp(0.1)} style={{
                background: 'var(--white)', borderRadius: '12px',
                border: '1px solid var(--grey-light)',
                padding: '2rem 2.25rem',
                marginBottom: '3rem',
                boxShadow: '0 2px 20px rgba(35,46,92,0.05)',
              }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{
                        flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%',
                        background: 'var(--red)', color: '#fff',
                        fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: '0.15rem',
                      }}>
                        {i + 1}
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-mid)', lineHeight: 1.85 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeUp(0.1)} style={{ marginBottom: '1rem' }}>
                <P>Sunduğumuz hizmetleri detaylı bir şekilde inceleyebilmek için <strong>Hizmetlerimiz</strong> başlığına gidebilirsiniz.</P>
              </motion.div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .akred-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* KURUCULARIMIZIN GÖRÜŞLERİ */}
      <section style={{ padding: '6rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Deneyimler</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Kurucularımızın <span>Görüşleri</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {quotes.map((q, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                style={{
                  background: 'var(--off-white)',
                  borderRadius: '12px',
                  padding: '2rem',
                  border: '1px solid var(--grey-light)',
                  position: 'relative',
                  boxShadow: '0 2px 16px rgba(35,46,92,0.05)',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, var(--red), var(--primary))',
                  borderRadius: '12px 12px 0 0',
                }} />
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 900,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--red)', marginBottom: '1rem',
                }}>
                  {q.section}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
                  color: 'var(--text-mid)', lineHeight: 1.85,
                  fontStyle: 'italic',
                }}>
                  "{q.text}"
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
