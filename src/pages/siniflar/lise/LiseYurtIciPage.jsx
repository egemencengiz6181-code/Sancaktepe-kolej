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

export default function LiseYurtIciPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/lise" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Lise</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Yurt İçi Üniversite Hazırlığı</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Yurt İçi Üniversite Hazırlığı
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.85 }}>
            Ulusal sınavlara hazırlanarak eğitimini yerel üniversitelerde sürdürmek isteyen öğrenci ve velilerimize bireysel kariyer danışmanlığı.
          </motion.p>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid var(--primary)', marginBottom: '2.5rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <P>Yurt içi kariyer danışmanlığı birimimiz, hedefi ulusal sınavlara hazırlanarak eğitimini yerel üniversitelerde devam edecek öğrenci ve velilerine süreçlerinde destek olmaktır.</P>
              <P>Yurt içi kariyer danışmanlığı birimi olarak amacımız; öğrencilerin kendilerine uygun olan meslek ve üniversite seçimlerine rehberlik etmektir.</P>
            </motion.div>

            <motion.div {...fadeUp(0.06)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', marginBottom: '2rem', boxShadow: '0 2px 12px rgba(35,46,92,0.05)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.85rem' }}>Danışmanlık Çalışmalarımız</p>
              <BList items={[
                'Öğrencilerin kendi yeteneklerini, ilgilerini ve becerilerini keşfetmeleri',
                'Hızlı değişen dünyanın iş ve meslek alanlarından haberdar olmaları',
                'Mesleki ve üniversite süreçlerinde sağlıklı seçim yaparken hem ulusal hem de uluslararası güncel bilgilere sahip olmaları',
              ]} />
            </motion.div>

            <motion.h3 {...fadeUp(0.1)} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>Kariyer Portföyü için Gerçekleştirilen Çalışmalar</motion.h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="yurt-ici-grid">
              {[
                { title: 'Bireysel Gözlem ve Görüşmeler', body: 'Öğrencilerle bire bir görüşmeler ve sistematik gözlem çalışmaları.' },
                { title: 'Kendini Tanıma ve Farkındalık', body: 'İlgi, yetenek, değer ve beceri alanlarında farkındalık artırıcı çalışmalar.' },
                { title: 'Üniversite ve Meslek Tanıtımları', body: 'Farklı bölümler ve meslek alanlarına yönelik bilgilendirme etkinlikleri.' },
                { title: 'Kariyer Günü', body: 'Her yıl Mayıs ayında üç farklı mesleği uzmanlarından tanıma ve paylaşım fırsatı.' },
                { title: 'Üniversite Tanıtım Gezileri', body: 'Öğrencilerin üniversite kampüslerini yerinde görmeleri için düzenlenen geziler.' },
                { title: 'Mesleki Gölge Programı', body: '10. sınıftan itibaren merak edilen meslekleri yerinde gözlemleme (en az bir günlük).' },
                { title: 'Ders Seçim Süreçlerine Destek', body: 'Hedef mesleğe ve üniversiteye göre ders seçimi planlamasında rehberlik.' },
                { title: 'Sınav Kaygısı ve Motivasyon', body: 'Sınav kaygısı, motivasyon, ilgi, beceri, yetenek ve değer çalışmaları.' },
              ].map((c, i) => (
                <motion.div key={i} {...fadeUp(0.12 + i * 0.04)}>
                  <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)', display: 'flex', gap: '0.85rem', transition: 'transform 0.2s, box-shadow 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(35,46,92,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.3rem' }}>{c.title}</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{c.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.4)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem 2rem', border: '1px solid var(--grey-light)', marginTop: '2rem', boxShadow: '0 2px 12px rgba(35,46,92,0.05)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>Kapsam</p>
              <P>Danışmanlık hizmetimiz, lisemizde yer alan her seviyeden öğrenciye verilmektedir.</P>
            </motion.div>

            <motion.div {...fadeUp(0.42)} style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <Link to="/siniflar/lise/yurt-disi-universite" style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'var(--primary)', padding: '0.85rem 1.75rem', borderRadius: '5px', textDecoration: 'none' }}>
                Yurt Dışı Üniversite →
              </Link>
              <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', border: '2px solid var(--primary)', padding: '0.85rem 1.75rem', borderRadius: '5px', textDecoration: 'none' }}>
                Bize Ulaşın
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 640px) { .yurt-ici-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
