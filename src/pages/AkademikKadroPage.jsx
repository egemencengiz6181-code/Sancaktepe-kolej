import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const pillars = [
  {
    icon: '✍️',
    title: 'Profesyonel Seçim Süreci',
    desc: 'Öğretmen ve yönetici istihdamı Türk Eğitim Derneği Genel Merkezi\'nin Ankara\'da yürüttüğü yazılı ve mülakat süreçleriyle sağlanmaktadır.',
  },
  {
    icon: '📚',
    title: 'Hizmet İçi Eğitimler',
    desc: 'Düzenli aralıklarla tekrarlanan hizmet içi eğitimlerle öğretmenlerimizin mesleki gelişimleri en üst seviyede tutulmaktadır.',
  },
  {
    icon: '🤝',
    title: 'Temel Paydaş Anlayışı',
    desc: 'TED, öğretmenleri eğitim kurumlarının hedeflerini gerçekleştirmede en önemli paydaşlar olarak kabul etmektedir.',
  },
  {
    icon: '🎯',
    title: 'Alan ve Meslek Yetkinliği',
    desc: 'Alanında uzman, öğretmenlik mesleğinde yetkin kadro seçimi okulumuzun temel önceliklerinden biridir.',
  },
];

export default function AkademikKadroPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(26,35,71,0.93) 0%, rgba(35,46,92,0.89) 55%, rgba(46,61,122,0.89) 100%), url(\'/gallery/ortaokul/IMG_0822.jpeg\')',
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
              Akademik Kadro
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Alanında uzman, öğrenciye adanmış ve sürekli gelişen bir kadroyla kaliteli eğitimin güvencesi.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Giriş metni */}
      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '5rem', alignItems: 'center' }} className="kadro-intro-grid">
            <motion.div {...fadeUp(0)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="red-line" />
                <span className="section-tag">Yaklaşımımız</span>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                borderRadius: '16px', padding: '2.5rem 2rem', color: '#fff',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👩‍🏫</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  Öğretmen,<br />En Önemli Paydaş
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  TED, öğretmenleri eğitim kurumlarının hedeflerini gerçekleştirmede en temel paydaşlar olarak görür.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.25, marginBottom: '1.5rem' }}>
                Nitelikli Öğretmen,<br /><span style={{ color: 'var(--red)' }}>Kaliteli Eğitim</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.95, marginBottom: '1.25rem' }}>
                Türk Eğitim Derneği, öğretmenleri eğitim kurumlarının hedeflerini gerçekleştirmede en önemli paydaşlar olarak görmektedir. Bu nedenle de okullarında görev yapacak, alanında ve öğretmenlik mesleğinde yetkin öğretmenlerin seçiminde profesyonel bir yaklaşım sergilemektedir.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.95 }}>
                TED Sancaktepe Kolejinde öğretmen ve yönetici istihdamı, Türk Eğitim Derneği Genel Merkezi'nin Ankara'da yürüttüğü yazılı ve mülakat süreçleriyle sağlanmaktadır. Düzenli aralıklarla tekrarlanan hizmet içi eğitimlerle öğretmenlerimizin mesleki gelişimleri en üst seviyede tutulmaktadır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dört Temel Özellik */}
      <section style={{ padding: '7rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Kadro Standartları</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Kadromuzu <span>Tanımlayan Unsurlar</span></h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="kadro-pillars-grid">
            {pillars.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.08)}>
                <div style={{
                  background: 'var(--off-white)', borderRadius: '14px', padding: '2rem 1.75rem',
                  border: '1px solid var(--grey-light)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                  boxShadow: '0 2px 16px rgba(35,46,92,0.05)',
                  transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(35,46,92,0.1)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,46,92,0.05)'; e.currentTarget.style.borderColor = 'var(--grey-light)'; }}
                >
                  <div style={{ fontSize: '2rem', flexShrink: 0, marginTop: '0.2rem' }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .kadro-intro-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .kadro-pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
