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
  { title: 'Akademik ve Kişisel Hedef Belirleme', body: 'Öğrencilerin akademik ve kişisel hedeflerini belirlemelerine destek olunur.' },
  { title: 'Eğitim Sistemleri Hakkında Bilgi', body: 'Farklı ülkelerin eğitim sistemleri hakkında detaylı bilgi sunulur.' },
  { title: 'Ülke ve Üniversite Yönlendirmesi', body: 'İlgi alanları ve hedeflere uygun ülke ve üniversite yönlendirmeleri yapılır.' },
  { title: 'Başvuru Koşulları Bilgilendirmesi', body: 'Üniversite başvuru koşulları hakkında kapsamlı bilgilendirme sağlanır.' },
  { title: 'Akademik ve Ders Dışı Aktiviteler', body: 'Başvuruları destekleyici akademik ve ders dışı etkinlik önerilerinde bulunulur.' },
  { title: 'Bireysel Profil Geliştirme', body: 'Öğrenci profilini geliştirmeye yönelik bireysel tavsiyeler sunulur.' },
  { title: 'Yurt Dışı Yaz Okulu Programları', body: 'Yurt dışı yaz okulu programları hakkında bilgilendirme yapılır.' },
  { title: 'Başvuru Süreci Rehberliği', body: 'Başvuru sürecinin tüm adımlarında birebir rehberlik edilir.' },
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
    </>
  );
}
