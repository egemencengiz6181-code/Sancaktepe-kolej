import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function TEDPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(26,35,71,0.93) 0%, rgba(35,46,92,0.89) 55%, rgba(46,61,122,0.89) 100%), url(\'/gallery/ilkokul/IMG_0828.jpeg\')',
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
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Türk Eğitim Derneği
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Cumhuriyetin kuruluşuyla birlikte doğan, 1928'den bu yana eğitimi yükseltmek için çalışan köklü bir sivil toplum kuruluşu.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tarihçe */}
      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }} className="ted-grid">
            {/* Sol: etiket + yıl */}
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="red-line" />
                <span className="section-tag">Tarihçe</span>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                borderRadius: '16px', padding: '2.5rem 2rem',
                color: '#fff', textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', fontWeight: 800, lineHeight: 1 }}>1928</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem', letterSpacing: '0.05em' }}>
                  Kuruluş Yılı
                </div>
                <div style={{ margin: '1.5rem 0', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                  31 Ocak 1928
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.4rem' }}>
                  Resmi Kuruluş Tarihi
                </div>
              </div>
            </motion.div>

            {/* Sağ: metin */}
            <motion.div {...fadeUp(0.15)}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.25, marginBottom: '1.75rem' }}>
                Atatürk'ün Çağrısıyla<br /><span style={{ color: 'var(--red)' }}>Kurulan Dernek</span>
              </h2>
              {[
                `Türkiye Cumhuriyeti'nin kuruluşu ile birlikte Mustafa Kemal Atatürk'ün öncelikli olarak üzerinde durduğu ve gelişmesi için her türlü yatırımı desteklediği alanlardan biri eğitim olmuştur.`,
                `Bu çerçevede 1925 yılında Mecliste yaptığı; kişi ve özel kuruluşları eğitime katkı yapmaya çağıran konuşması, "Türk Maarif Cemiyeti" ve Atatürk'ün özlemini duyduğu nitelikli Türk okullarının açılması için ilk adım niteliğini taşımıştır.`,
                `Türk Maarif Cemiyeti, bugünkü ismiyle Türk Eğitim Derneği, Mustafa Kemal Atatürk'ün çağrısı üzerine Cumhuriyeti kuran kadroların önderliğinde 31 Ocak 1928 tarihinde kurulmuştur.`,
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.25rem' }}>{p}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misyon */}
      <section style={{ padding: '7rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Misyon</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>TED'in <span>Misyonu</span></h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <div style={{
              background: 'linear-gradient(135deg, var(--off-white), var(--white))',
              border: '1px solid var(--grey-light)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '12px',
              padding: '2.5rem 3rem',
              maxWidth: '860px',
              margin: '0 auto',
            }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: 1.95, marginBottom: '1.5rem' }}>
                Türk Eğitim Derneği; başarılı fakat olanakları sınırlı öğrencilere burslar vermeyi, yurt içinde ve dışında yabancı dilde eğitim veren okullar ve yurtlar açmayı, Türk eğitim standartlarını çağdaş seviyeye taşıyacak bilimsel platformlar oluşturmayı, eğitim sisteminin sorunları ve çözümleri konusunda toplumu bilinçlendirmeyi ve Türk eğitim politikasının oluşturulmasına katkıda bulunmayı misyon edinmiş köklü bir sivil toplum kuruluşudur.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TED Neden Okul Açar */}
      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Okullar</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>TED Neden <span>Okul Açar?</span></h2>
          </motion.div>

          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0.1)}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '2.5rem', textAlign: 'center' }}>
                Türk Eğitim Derneği, eğitimin bir ülkenin ekonomik ve sosyal kalkınmasındaki en önemli etken olduğuna inanır ve bu doğrultuda okullar açar.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="ted-why-grid">
              {[
                { icon: '🇹🇷', title: 'Ülke Kalkınması', desc: "Türkiye'nin eğitim yoluyla gelişmesine katkıda bulunmak." },
                { icon: '📈', title: 'Bölgesel Gelişim', desc: "Okullarının bulunduğu bölgelerin eğitim seviyesini yükseltmek." },
                { icon: '🏅', title: 'Burs & Fırsat Eşitliği', desc: "Maddi olanakları sınırlı, başarılı çocuklara okullarında eğitim vermek." },
              ].map((item, i) => (
                <motion.div key={item.title} {...fadeUp(i * 0.1)}>
                  <div style={{
                    background: 'var(--white)', borderRadius: '14px', padding: '2rem 1.75rem',
                    border: '1px solid var(--grey-light)', textAlign: 'center', height: '100%',
                    boxShadow: '0 2px 16px rgba(35,46,92,0.05)',
                    transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(35,46,92,0.1)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,46,92,0.05)'; e.currentTarget.style.borderColor = 'var(--grey-light)'; }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.65rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ted-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .ted-why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
