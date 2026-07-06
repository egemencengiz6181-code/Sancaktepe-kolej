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

const SERVICES = [
  { icon: '🎯', title: 'Akademik ve Kişisel Hedef Belirleme', body: 'Öğrencilerin akademik ve kişisel hedeflerini belirlemelerine destek olunur.' },
  { icon: '🌍', title: 'Eğitim Sistemleri Hakkında Bilgi', body: 'Farklı ülkelerin eğitim sistemleri hakkında detaylı bilgi sunulur.' },
  { icon: '🗺️', title: 'Ülke ve Üniversite Yönlendirmesi', body: 'İlgi alanları ve hedeflere uygun ülke ve üniversite yönlendirmeleri yapılır.' },
  { icon: '📋', title: 'Başvuru Koşulları Bilgilendirmesi', body: 'Üniversite başvuru koşulları hakkında kapsamlı bilgilendirme sağlanır.' },
  { icon: '⭐', title: 'Akademik ve Ders Dışı Aktiviteler', body: 'Başvuruları destekleyici akademik ve ders dışı etkinlik önerilerinde bulunulur.' },
  { icon: '👤', title: 'Bireysel Profil Geliştirme', body: 'Öğrenci profilini geliştirmeye yönelik bireysel tavsiyeler sunulur.' },
  { icon: '☀️', title: 'Yurt Dışı Yaz Okulu Programları', body: 'Yurt dışı yaz okulu programları hakkında bilgilendirme yapılır.' },
  { icon: '📝', title: 'Başvuru Süreci Rehberliği', body: 'Başvuru sürecinin tüm adımlarında birebir rehberlik edilir.' },
];

export default function LiseYurtDisiPage() {
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
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Yurt Dışı Üniversite Hazırlığı</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Yurt Dışı Üniversite Hazırlığı
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.85 }}>
            Yurt dışında eğitim almayı hedefleyen öğrenci ve velilerimize, sürecin her aşamasında bireysel destek sunuyoruz.
          </motion.p>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid var(--primary)', marginBottom: '3rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Amacımız</p>
              <P>Yurt dışı kariyer danışmanlığı birimimiz, yurt dışında eğitim almayı hedefleyen öğrenci ve velilere, sürecin her aşamasında bireysel destek sunar.</P>
              <P>Amacımız; öğrenci ve velilere ülke, üniversite ve bölüm seçimleri konusunda birebir rehberlik ederek, öğrencilerin kendilerine en uygun ve mutlu olabilecekleri üniversite tercihlerine yönelmelerini sağlamaktır.</P>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#059669', marginTop: '1rem', marginBottom: '0' }}>Danışmanlık hizmetimiz lisemizdeki tüm sınıf seviyelerindeki öğrencilere yöneliktir.</p>
            </motion.div>

            <motion.h2 {...fadeUp(0.06)} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>Danışmanlık Kapsamımız</motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="yurt-disi-grid">
              {SERVICES.map((s, i) => (
                <motion.div key={i} {...fadeUp(0.08 + i * 0.04)}>
                  <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)', display: 'flex', gap: '0.85rem', height: '100%', transition: 'transform 0.2s, box-shadow 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(35,46,92,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{s.icon}</span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.3rem' }}>{s.title}</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{s.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              <Link to="/siniflar/lise/uluslararasi-programlar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'var(--primary)', padding: '0.85rem 1.75rem', borderRadius: '5px', textDecoration: 'none' }}>
                Uluslararası Programlar →
              </Link>
              <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', border: '2px solid var(--primary)', padding: '0.85rem 1.75rem', borderRadius: '5px', textDecoration: 'none' }}>
                Bize Ulaşın
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 640px) { .yurt-disi-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
