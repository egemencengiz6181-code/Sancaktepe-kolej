import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const PdfFlipBook = lazy(() => import('../components/PdfFlipBook'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{
        backgroundImage: "linear-gradient(135deg, rgba(26,35,71,0.92) 0%, rgba(35,46,92,0.88) 55%, rgba(46,61,122,0.88) 100%), url('/gallery/idari/IMG_0828.jpeg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                Kurumsal
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>
              Hakkımızda
            </h1>
          </motion.div>
        </div>
      </div>

      {/* TED-AD Tanıtım */}
      <section style={{ padding: '7rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
            {/* Sol - Logo */}
            <motion.div {...fadeUp(0)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              <img 
                src="/logo/tedad-2.png" 
                alt="TED-AD Logo" 
                style={{ 
                  width: '100%', 
                  maxWidth: '320px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 20px rgba(35,46,92,0.08))'
                }} 
              />
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                background: 'linear-gradient(135deg, rgba(35,46,92,0.04) 0%, rgba(230,25,54,0.04) 100%)',
                borderRadius: '12px',
                border: '1px solid var(--grey-light)'
              }}>
                <p style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '0.95rem', 
                  fontStyle: 'italic', 
                  color: 'var(--text-dark)', 
                  lineHeight: 1.7 
                }}>
                  Türk Eğitim Derneği Danışmanlığı kapsamında eğitim kurumlarına ve bireylere kurumsal danışmanlık hizmetleri sunulmaktadır.
                </p>
              </div>
            </motion.div>

            {/* Sağ - İçerik */}
            <div>
              <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <div className="red-line" />
                <span className="section-tag">TED Danışmanlık</span>
              </motion.div>
              <motion.h2 {...fadeUp(0.1)} className="section-title" style={{ marginBottom: '1.5rem' }}>
                Türk Eğitim Derneği <span>Danışmanlığı</span>
              </motion.h2>
              <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  Türk eğitim sistemine çok yönlü katkılar sağlamayı amaçlayan Türk Eğitim Derneği, kurumsal değerlerinin ülke genelinde yaygınlaşmasını artırmak ve özel okul sektörünün nitelikli gelişimine katkı sağlamak amacıyla TED Akreditasyon ve Danışmanlık (TED AD) hizmetleri kapsamında eğitim kurumlarına ve bireylere kurumsal danışmanlık hizmetleri önermektedir.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  TED Akreditasyonu programı belirtilen şartları taşıyan ve halen faaliyette olan okulların kurumsal dönüşüm sürecine girmelerine ve beklenen yetkinlikleri geliştirdikleri takdirde TED Okulu olmalarına imkân tanımaktadır. Ayrıca TED AD kapsamında okulların her türlü eğitim gereksinimlerine yönelik danışmanlık paketleri sunulmakta, okul öncesi eğitim kurumlarına ve özel okul açmak isteyen yatırımcılara yönelik özelleştirilmiş hizmetler önerilmektedir.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  TED AD kapsamında sunulan tüm programlar için öncelikle başvuru sahibinin olası gelişim alanlarını saptamaya yönelik bir "Mevcut Durumun Değerlendirilmesi" çalışması yapılmaktadır. Bu çalışma sonrasında oluşturulan rapor, TED AD kapsamında alınacak kurumsal hizmetin başvuru sahibinin kendisine özgü gereksinimlerine uygun olarak verilmesine olanak tanımaktadır.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  TED AD hizmetlerinin başarısı başvuru sahiplerinin yeniliğe ve ortak çalışma kültürüne açık, ayrıca TED'in kurumsal değerlerine uygun bir yaklaşım içerisinde olmalarına bağlıdır. Yapılan başvuruların kabul edilme oranı, TED AD'nin başlangıç tarihi olan 2020'den günümüze yaklaşık %35'tir. TED AD hizmetlerinden faydalanan okulların listesi "TED AD Okullarımız" başlığında verilmektedir.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  Birlikte çalışma imkânı bulabildiğimiz okulların öğrencilerinin, öğretmenlerinin ve yöneticilerinin başarısını artırmak için geliştirdiğimiz strateji ve çözümlerin yanı sıra, TED AD kapsamında iş birliği yaptığımız okullara çok yönlü katkılar sunuyoruz. İş birliği yaptığımız okulların;
                </p>
                
                <div style={{ 
                  background: 'var(--off-white)', 
                  borderRadius: '10px', 
                  padding: '1.75rem',
                  border: '1px solid var(--grey-light)',
                  marginTop: '1rem'
                }}>
                  <ul style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.9rem', 
                    color: 'var(--text-mid)', 
                    lineHeight: 1.85,
                    paddingLeft: '1.25rem',
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem'
                  }}>
                    <li>Ülke genelinde etkinlik gösteren okulları, TED Üniversitesi, düşünce kuruluşu TEDMEM, mezun dernekleri, gönüllü çalışma komiteleri, spor kulüpleri, senfoni orkestrası ve eşsiz burs sistemi ile Türkiye'nin en köklü sivil toplum kuruluşu olan Türk Eğitim Derneğinin ayrıcalıklı ekosistemine dâhil olmalarını sağlıyoruz.</li>
                    <li>Sürecin başında uyguladığımız Mevcut Durumun Değerlendirilmesi çalışması ile akademik, yönetsel, finansal ve fiziksel açılardan derinlemesine inceleyerek okulun güçlü ve gelişime açık yanlarını tespit ediyoruz.</li>
                    <li>Mevcut Durumun Değerlendirilmesi çalışmasından elde edilen veriyle okula özgü bir gelişim planı oluşturarak çalışmalarımızı yürütüyoruz.</li>
                    <li>Süreç boyunca sunduğumuz hizmetlerin etkisini ölçmek ve geribildirim almak için Genel Merkezimiz tarafından geliştirilen Değer Ölçütleri sistemini uyguluyoruz. Bu kapsamda okulları; TED Akreditasyonunda her yıl 4 ana ölçüt ve 70 alt ölçütte, Eğitim Danışmanlıklarında her yıl 3 ana ölçüt ve 61 alt ölçütte değerlendirerek gelişimlerini gerçek zamanlı olarak takip ediyoruz. Değerlendirme sonuçlarını eğitim öğretim yılı içerisinde iki kez raporluyoruz.</li>
                    <li>TED'e özgü yayınlar, akademik programlar ve yazılımlardan faydalanmalarını sağlıyoruz.</li>
                    <li>TED Okullarında kullanılan mobilya, eğitim araç-gereçleri ve okul giysilerini kullanabilmelerine imkân sağlıyoruz.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section style={{
        padding: '8rem 0',
        background: 'linear-gradient(135deg, #0d1428 0%, #162040 40%, #1a2347 70%, #0d1428 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        {/* Glow orbs */}
        <div style={{ position: 'absolute', top: '-100px', left: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,25,54,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,46,92,0.25) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(230,25,54,0.6)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Kimliğimiz</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(230,25,54,0.6)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
              Vizyon & <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Misyon</em>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="vm-grid">
            {/* Vizyon */}
            <motion.div {...fadeUp(0.1)} style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px', padding: '2.5rem',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--red), var(--red-light), transparent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                
                <div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>Vizyonumuz</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { text: 'Ulusal değerlerine bağlı, evrensel bakış açısına sahip,', accent: false },
                  { text: 'Bilgiyi anlamlandırabilen, etik sorumluluk taşıyan ve', accent: false },
                  { text: 'Dünya vatandaşlığı bilinciyle hareket eden bireyler yetiştiren,', accent: false },
                  { text: 'Türkiye\'den dünyaya açılan öncü bir eğitim kurumu olmaktır.', accent: true },
                ].map((line, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: line.accent ? 'var(--red)' : 'rgba(255,255,255,0.25)', marginTop: '0.55rem', flexShrink: 0 }} />
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.75, color: line.accent ? '#fff' : 'rgba(255,255,255,0.6)', fontWeight: line.accent ? 600 : 400 }}>{line.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ padding: '1.25rem', background: 'rgba(230,25,54,0.08)', borderRadius: '8px', borderLeft: '3px solid rgba(230,25,54,0.5)' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.92rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
                  Eğitimi yalnızca akademik başarıyla sınırlamayan; düşünmeyi, sorgulamayı, üretmeyi ve yaşamla bağ kurmayı merkeze alan bütüncül bir eğitim ekolü oluşturmayı hedefleriz.
                </p>
              </div>
            </motion.div>

            {/* Misyon */}
            <motion.div {...fadeUp(0.2)} style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px', padding: '2.5rem',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--primary-light), rgba(46,61,122,0.3), transparent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                
                <div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(180,196,230,0.9)' }}>Misyonumuz</span>
                </div>
              </div>
              {[
                { text: 'Öğrencilerin akademik, sosyal, duygusal ve etik gelişimini bir bütün olarak ele alan,', accent: false },
                { text: 'Ulusal müfredatı, uluslararası eğitim yaklaşımlarıyla (Cambridge, IB/AP, UbD) uyumlu biçimde zenginleştiren,', accent: true },
                { text: 'Okuryazarlık temelli, beceri odaklı ve disiplinlerarası öğrenme ortamları sunan,', accent: false },
                { text: 'Öğrencileri yalnızca sınavlara değil, hayata ve küresel dünyaya hazırlayan bir eğitim anlayışını hayata geçirmektir.', accent: true },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.85rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.accent ? 'var(--red)' : 'rgba(255,255,255,0.2)', marginTop: '0.55rem', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.75, color: item.accent ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)', fontWeight: item.accent ? 500 : 400 }}>{item.text}</p>
                </div>
              ))}
              <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(35,46,92,0.35)', borderRadius: '8px', borderLeft: '3px solid rgba(255,255,255,0.2)' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.92rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                  Öğrencilerin kendi potansiyellerini tanıyan, sorumluluk alan, eleştirel düşünebilen ve topluma değer katan bireyler olarak yetişmesini amaçlarız.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Temel Değerler */}
      <section style={{ padding: '7rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Değerlerimiz</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Temel <span>Değerlerimiz</span></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Milli ve Kültürel Değerlere Bağlılık', color: 'var(--red)', desc: 'Türkiye Cumhuriyeti\'nin temel değerlerini, kültürel mirasını, Atatürk ilke ve inkılaplarını ve toplumsal sorumluluk bilincini eğitim anlayışının ayrılmaz bir parçası olarak görürüz.' },
              { title: 'Dünya Vatandaşlığı', color: 'var(--primary)', desc: 'Öğrencilerimizin farklı kültürlere saygılı, küresel sorunlara duyarlı ve uluslararası işbirliğine açık bireyler olarak yetişmesini önemseriz.' },
              { title: 'Etik ve Ahlaki Sorumluluk', color: 'var(--red)', desc: 'Eğitim süreçlerimizin merkezinde; dürüstlük, adalet, saygı ve sorumluluk gibi evrensel etik değerler yer alır.' },
              { title: 'Sürdürülebilirlik ve Toplumsal Katkı', color: 'var(--primary)', desc: 'Doğaya, topluma ve geleceğe karşı sorumluluk bilinciyle hareket eden; sürdürülebilir yaşam kültürünü benimseyen bireyler yetiştiririz.' },
              { title: 'Anlamaya Dayalı Derin Öğrenme', color: 'var(--primary)', desc: 'Ezberden uzak, anlamaya ve transfer etmeye dayalı öğrenmeyi esas alır; öğrencilerin bilgiyi farklı bağlamlarda kullanabilmesini destekleriz.' },
              { title: 'Yaşam Boyu Öğrenme', color: 'var(--red)', desc: 'Öğrenmeyi okul yıllarıyla sınırlamayan; merak eden, araştıran ve kendini sürekli geliştiren bireyler yetiştiririz.' },
              { title: 'Bütüncül Gelişim', color: 'var(--primary)', desc: 'Akademik başarının; sosyal, duygusal, sanatsal ve fiziksel gelişimle birlikte anlam kazandığına inanırız.' },
            ].map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.07)} className="deger-card" style={{
                padding: '2rem', position: 'relative', overflow: 'hidden',
                background: 'var(--white)',
                border: '1px solid var(--grey-light)',
                borderRadius: '10px',
                boxShadow: '0 4px 24px rgba(35,46,92,0.06)',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(35,46,92,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(35,46,92,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: v.color }} />
                
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.87rem', lineHeight: 1.78, color: 'var(--text-mid)' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-grid, .vm-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>

      {/* DERGI FLIPBOOK */}
      <section style={{ padding: '7rem 0', background: 'linear-gradient(135deg, #060e1c 0%, #0a1628 50%, #0e2044 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-80px', left: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230,25,54,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(230,25,54,0.6)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Tanıtım Dergisi</span>
              <div style={{ width: '40px', height: '1px', background: 'rgba(230,25,54,0.6)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
              Kolej Sancaktepe <span style={{ color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>Dergisi</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0.75rem auto 0', lineHeight: 1.85 }}>
              Okulumuzun eğitim anlayışını, programlarını ve okul yaşamını tanıtan dijital dergimizi sayfaları çevirerek keşfedin.
            </p>
          </motion.div>

          <Suspense fallback={
            <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Yükleniyor...
            </div>
          }>
            <PdfFlipBook />
          </Suspense>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a
              href="/web%20genel%20dergi.pdf"
              download="Kolej-Sancaktepe-Dergi.pdf"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.2)', padding: '0.75rem 1.75rem',
                borderRadius: '4px', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            >
              ⬇ PDF İndir
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
