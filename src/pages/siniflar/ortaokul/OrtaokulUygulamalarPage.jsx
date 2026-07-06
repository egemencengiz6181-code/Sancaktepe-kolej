import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.85rem' }}>{children}</p>
);

const BList = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem' }}>
    {items.map((it, i) => (
      <li key={i} style={{ display: 'flex', gap: '0.6rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.35rem' }}>
        <span style={{ color: 'var(--red)', flexShrink: 0 }}>•</span>{it}
      </li>
    ))}
  </ul>
);

export default function OrtaokulUygulamalarPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1a0610 0%, #8b0f1e 50%, #b01528 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/ortaokul" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Ortaokul</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Uygulamalar ve Projeler</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12 }}>
            Uygulamalar ve Projeler
          </motion.h1>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), #8b0f1e, transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '2.5rem' }}>♻️</span>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.2rem' }}>Öne Çıkan Proje</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>Eko-Okul Projesi</h2>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.05)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid #059669', marginBottom: '2rem', boxShadow: '0 4px 20px rgba(35,46,92,0.05)' }}>
              <P>Eko-Okullar Programı, çevresel sürdürülebilirliği okul müfredatının merkezine alan, öğrencilerin aktif rol üstlendiği uluslararası bir eğitim programıdır. FEE (Foundation for Environmental Education) tarafından yönetilen bu program, okulların çevresel sorunları tespit etmesini, çözümler geliştirmesini ve bu süreçleri toplumla paylaşmasını destekler.</P>
              <P>Eko-Okullar Programı, 2023 yılı itibarıyla 56 ülkede 19,8 milyondan fazla öğrenciyi kapsayan dünyanın en büyük çevre eğitim programıdır. Programı tamamlayan okullara uluslararası alanda tanınan Yeşil Bayrak ödülü verilir.</P>
            </motion.div>

            <motion.h3 {...fadeUp(0.1)} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>Eko-Okullar Programının 7 Adımı</motion.h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }} className="eco-grid">
              {[
                { num: '01', title: 'Eko-Okul Komitesinin Kurulması', desc: 'Öğrenciler, öğretmenler, veliler ve diğer paydaşlardan oluşan bir komite oluşturulur.' },
                { num: '02', title: 'Çevre Değerlendirmesi Yapılması', desc: 'Okulun çevresel durumu; enerji, su, atık, biyoçeşitlilik ve yaşam kalitesi alanlarında değerlendirilir.' },
                { num: '03', title: 'Eylem Planının Hazırlanması', desc: 'Değerlendirme sonuçlarına göre hedefler belirlenir ve gerçekleştirilebilir bir eylem planı hazırlanır.' },
                { num: '04', title: 'İzleme ve Değerlendirme', desc: 'Eylem planındaki ilerleme düzenli olarak izlenir ve sonuçlar paylaşılır.' },
                { num: '05', title: 'Müfredata Entegrasyon', desc: 'Çevre konuları okul müfredatının bir parçası haline getirilerek derslerle ilişkilendirilir.' },
                { num: '06', title: 'Toplumu Bilgilendirme ve Katılım', desc: "Eko-Okul çalışmaları aileler, yerel yönetimler ve toplumla paylaşılarak geniş bir katılım sağlanır." },
                { num: '07', title: 'Eko-Kodun Oluşturulması', desc: "Okulun çevre taahhüdünü ve değerlerini özetleyen bir Eko-Kod hazırlanır; bu kod öğrenciler tarafından sahiplenilir." },
              ].map((step, i) => (
                <motion.div key={i} {...fadeUp(0.12 + i * 0.04)}>
                  <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem', border: '1px solid var(--grey-light)', display: 'flex', gap: '1rem', height: '100%' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: '#05966930', flexShrink: 0, lineHeight: 1 }}>{step.num}</span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#059669', marginBottom: '0.4rem' }}>{step.title}</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.4)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', boxShadow: '0 2px 12px rgba(35,46,92,0.05)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#059669', marginBottom: '1rem' }}>Yeşil Bayrak</p>
              <P>Tüm adımları başarıyla tamamlayan okullar, uluslararası alanda tanınan Yeşil Bayrak ödülüne başvurma hakkı kazanır. Bu ödül, okulun çevresel sürdürülebilirlik konusundaki kararlılığını ve başarısını simgeler.</P>
              <BList items={[
                '56 ülkede aktif olarak uygulanan bir program',
                '19,8 milyondan fazla öğrenciyi kapsıyor (2023)',
                'Uluslararası FEE akreditasyonu ile Yeşil Bayrak sertifikası',
                'Yerel ve küresel çevre sorunlarına duyarlı öğrenci nesli yetiştirme',
              ]} />
            </motion.div>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 640px) { .eco-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
