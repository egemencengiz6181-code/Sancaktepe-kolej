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

const DATES = [
  { date: '16 Ekim 2025', label: 'Erken Başvuru Dönemi Başlangıcı', highlight: false },
  { date: '15 Kasım 2025', label: 'Erken Başvuru Son Tarihi', highlight: true },
  { date: '16 Kasım 2025', label: 'Geç Başvuru Dönemi Başlangıcı', highlight: false },
  { date: '9 Mart 2026', label: 'Tüm Kayıt İşlemleri İçin Son Tarih', highlight: true },
  { date: '4 – 15 Mayıs 2026', label: 'Sınav Dönemi', highlight: true },
];

const STEPS = [
  {
    num: '01',
    title: 'Başvuru Formunu Doldurun',
    desc: 'AP sınavına başvurmak için kayıt ofisimizle iletişime geçin veya başvuru formunu doldurarak sınav kaydınızı başlatın. Sunduğumuz tüm AP sınavları hakkında detaylı bilgi alabilirsiniz.',
    action: { label: 'Başvuru Formu →', href: '/kayit/basvuru-formu' },
  },
  {
    num: '02',
    title: 'Ödeme Onayı ve Katılım Kodu',
    desc: 'Başvurunuz ve ödemeniz onaylandıktan sonra AP sınavlarınıza ait katılım kodlarını içeren bir e-posta alacaksınız. Ödeme işleminin birkaç gün sürebileceğini göz önünde bulundurun.',
    action: null,
  },
  {
    num: '03',
    title: 'MyAP Hesabınızı Oluşturun',
    desc: 'College Board\'ın MyAP platformunda hesabınızı kurun ve katılım kodlarınızı mümkün olan en kısa sürede kaydedin. Kodunuzu kaydetmek sınav yerinizi garanti eder.',
    action: { label: 'MyAP Hesap Oluşturma →', href: 'https://apstudents.collegeboard.org/access-your-ap-resources/join-your-class-online', external: true },
  },
  {
    num: '04',
    title: 'Sınav Günü Hazırlığı',
    desc: 'E-postanızı düzenli olarak kontrol edin. Sınav günü yanınızda neler getireceğinize dair ayrıntılı bilgi zamanı geldiğinde tarafınıza iletilecektir. Sorularınız için bizimle iletişime geçebilirsiniz.',
    action: { label: 'İletişim →', href: '/iletisim' },
  },
];

export default function APSinavMerkeziPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1530 0%, var(--primary) 60%, #1a2d6e 100%)' }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Uluslararası Programlar</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4.5vw,3.4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              AP Sınav Merkezi
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red)', background: 'rgba(230,25,54,0.15)', border: '1px solid rgba(230,25,54,0.3)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                Yetkili Sınav Merkezi
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Kolej Sancaktepe, Advanced Placement® sınavları için yetkili bir sınav merkezidir. Geniş bir yelpazede AP sınavı sunmaktan gurur duyuyoruz; hem kendi öğrencilerimiz hem de dışarıdan başvuran adaylar sınavlarımıza girebilir.
            </p>
          </motion.div>
        </div>
      </div>

      {/* AP Nedir */}
      <section style={{ padding: '6rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="ap-intro">
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="red-line" />
                <span className="section-tag">Advanced Placement®</span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>AP Nedir?</h2>
              <P>Advanced Placement® (AP) Programı, öğrencilere henüz lisedeyken üniversite düzeyindeki çalışmalarla kendilerini sınama fırsatı verir. AP öğrencilerinin üniversiteye kaydolma, derslerinde daha iyi performans gösterme ve daha erken mezun olma olasılıkları daha yüksektir.</P>
              <P>Bir öğrencinin transkriptindeki AP dersleri, öğrencinin üniversite düzeyindeki çalışmalara istekli ve akademik olarak hazır olduğunu gösterir.</P>
              <P>AP kursları AP Sınavı ile tamamlanır. Sınavlar 5 puanlık ölçekte puanlanır; 3 ve üzeri puanlar, birçok üniversitede kredi kazanmaya veya giriş derslerini atlamaya imkân tanır.</P>
              <a href="https://apstudents.collegeboard.org/what-is-ap" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)', border: '2px solid var(--red)', padding: '0.7rem 1.5rem', borderRadius: '4px', textDecoration: 'none', marginTop: '0.5rem', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--red)'; }}
              >
                AP Hakkında Daha Fazla Bilgi (College Board) →
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&auto=format"
                alt="AP Sınav"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 50px rgba(35,46,92,0.15)' }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Önemli Tarihler */}
      <section style={{ padding: '5rem 0', background: 'var(--primary)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
              2025–2026 Önemli Tarihler
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
              Erken başvuru tavsiyesi: Kontenjan ve ücret avantajı için en geç Kasım başında başvurun.
            </p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '680px', margin: '0 auto' }}>
            {DATES.map((d, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1.5rem',
                  background: d.highlight ? 'rgba(230,25,54,0.12)' : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${d.highlight ? 'rgba(230,25,54,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '10px', padding: '1rem 1.5rem',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900, color: d.highlight ? 'var(--red)' : 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', minWidth: '130px' }}>{d.date}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: d.highlight ? '#fff' : 'rgba(255,255,255,0.7)', fontWeight: d.highlight ? 600 : 400 }}>{d.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.3)} style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
              Her sınav için sınav ücretinin son başvuru tarihinden sonra artacağını unutmayın. Kontenjanlar dolmadan başvurunuzu tamamlamanızı tavsiye ederiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kayıt Adımları */}
      <section style={{ padding: '6rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Kayıt Süreci</span>
            </div>
            <h2 className="section-title">AP Sınavlarına Nasıl <span>Kayıt Yapılır?</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="ap-steps-grid">
            {STEPS.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '16px', padding: '2rem',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                  height: '100%', display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--grey-light)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, flex: 1 }}>{s.desc}</p>
                  {s.action && (
                    <div style={{ marginTop: '1.25rem' }}>
                      {s.action.external ? (
                        <a href={s.action.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)', textDecoration: 'none' }}>
                          {s.action.label}
                        </a>
                      ) : (
                        <a href={s.action.href} style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)', textDecoration: 'none' }}>
                          {s.action.label}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dışarıdan öğrenciler notu */}
          <motion.div {...fadeUp(0.2)} style={{ marginTop: '2rem' }}>
            <div style={{
              background: 'var(--white)', borderRadius: '12px', padding: '1.5rem 2rem',
              border: '1px solid var(--grey-light)',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>Dışarıdan Başvuran Öğrenciler</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>
                Dışarıdan gelen öğrencilerin kayıtlarını College Board sayfasından "Exam Only" seçeneğiyle tamamlamaları gerekmektedir. AP Classroom yalnızca onaylı AP dersleri veren okullara tam zamanlı kayıtlı öğrenciler için geçerlidir.
              </p>
            </div>
          </motion.div>

          {/* İletişim */}
          <motion.div {...fadeUp(0.25)} style={{ marginTop: '2rem' }}>
            <div style={{
              background: 'var(--white)', borderRadius: '12px', padding: '1.5rem 2rem',
              border: '1px solid var(--grey-light)',
              boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
              display: 'flex', gap: '2rem', flexWrap: 'wrap',
            }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.3rem' }}>AP Sorularınız İçin</p>
                <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--red)', fontWeight: 600 }}>
                  info@kolejsancaktepe.com
                </a>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.3rem' }}>Telefon</p>
                <a href="tel:02166060833" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--red)', fontWeight: 600, display: 'block' }}>0216 606 0 833</a>
                <a href="tel:05016223135" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--red)', fontWeight: 600, display: 'block' }}>0501 622 31 35</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .ap-intro { grid-template-columns: 1fr !important; } .ap-steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
