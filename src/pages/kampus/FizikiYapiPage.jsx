import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const AREAS = [
  {
    icon: '🏫',
    label: 'Ana Bina',
    title: 'Modern Eğitim Yapısı',
    desc: 'Kolej Sancaktepe ana binası, çağdaş mimari anlayışıyla tasarlanmış; geniş koridorları, ergonomik sınıfları ve ortak çalışma alanlarıyla öğrencilere ilham veren bir ortam sunar.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80&auto=format',
  },
  {
    icon: '🌿',
    label: 'Yeşil Alanlar',
    title: 'Geniş Kampüs Bahçesi',
    desc: 'Doğayla iç içe büyük yeşil alanlar, öğrencilerin ders aralarında sosyalleştiği, dinlendiği ve açık hava etkinliklerine katıldığı bir yaşam merkezi oluşturur.',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format',
  },
  {
    icon: '🎭',
    label: 'Konferans & Tiyatro',
    title: 'Çok Amaçlı Salon',
    desc: 'Binlerce kişi kapasiteli konferans ve tiyatro salonumuz; mezuniyet törenlerinden öğrenci tiyatro oyunlarına, konferanslardan müzik resitallerine kadar pek çok etkinliğe ev sahipliği yapar.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format',
  },
  {
    icon: '🍽️',
    label: 'Yemekhane',
    title: 'Ferah Yemek Alanları',
    desc: 'Tüm öğrencilerin aynı anda kullanabileceği geniş yemekhanelerimiz, hijyen standartlarına uygun modern mutfak altyapısıyla donatılmıştır.',
    img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80&auto=format',
  },
];

export default function FizikiYapiPage() {
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
              Fiziki Yapı
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'nin modern mimarisi, doğayla iç içe yeşil alanları ve kapsamlı tesisleriyle zengin bir kampüs hayatı sunmaktadır.
            </p>
          </motion.div>
        </div>
      </div>

      {/* İstatistikler */}
      <section style={{ padding: '4rem 0', background: 'var(--primary)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }} className="stats-grid">
            {[
              { value: '25.000', unit: 'm²', label: 'Kapalı Alan' },
              { value: '15.000', unit: 'm²', label: 'Yeşil Alan' },
              { value: '60+', unit: '', label: 'Derslik' },
              { value: '4', unit: '', label: 'Eğitim Kademesi' },
            ].map((s) => (
              <motion.div key={s.label} {...fadeUp(0)}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                  {s.value}<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }}>{s.unit}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.4rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alanlar */}
      {AREAS.map((area, i) => (
        <section key={area.label} style={{ padding: '5rem 0', background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)' }}>
          <div className="section-container">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center',
              direction: i % 2 === 0 ? 'ltr' : 'rtl',
            }} className="area-grid">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ direction: 'ltr' }}
              >
                <img
                  src={area.img}
                  alt={area.label}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', boxShadow: '0 20px 50px rgba(35,46,92,0.15)' }}
                  loading="lazy"
                />
              </motion.div>
              <motion.div {...fadeUp(0.1)} style={{ direction: 'ltr' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '0.75rem' }}>{area.icon}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.6rem' }}>{area.label}</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.2, marginBottom: '1.25rem' }}>{area.title}</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>{area.desc}</p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <style>{`
        @media (max-width: 900px) {
          .area-grid { grid-template-columns: 1fr !important; direction: ltr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
