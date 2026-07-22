import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { programs } from '../data/programs';

const PdfFlipBook = lazy(() => import('../components/PdfFlipBook'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function ProgramDetayPage() {
  const { id } = useParams();
  const prog = programs.find((p) => p.id === id);
  if (!prog) return <Navigate to="/programlar" replace />;

  const parentProg = prog.parent ? programs.find((p) => p.id === prog.parent) : null;
  const others = programs.filter((p) => !p.parent && p.id !== id);

  return (
    <>
      {/* HERO */}
      <section style={{
        background: `linear-gradient(135deg, rgba(26,35,71,0.93) 0%, rgba(35,46,92,0.88) 55%, rgba(46,61,122,0.88) 100%), url('/gallery/IMG_0834.jpeg') center / cover no-repeat`,
        padding: '8rem 0 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }} />
        {/* Color glow */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: `radial-gradient(circle, ${prog.color}22 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '10%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: `radial-gradient(circle, ${prog.accent}15 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}
          >
            <Link to="/programlar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
            >Programlar</Link>
            {parentProg && (
              <>
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
                <Link to={`/programlar/${parentProg.id}`} style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >{parentProg.tag}</Link>
              </>
            )}
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>{prog.tag}</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }} className="program-hero-grid">
            <div>
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: `${prog.color}22`, border: `1px solid ${prog.color}55`, borderRadius: '4px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.2em', color: prog.accent === '#ff3352' ? '#ff6b85' : prog.accent }}>{prog.tag}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.75rem' }}
              >
                {prog.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', color: prog.accent === '#ff3352' ? 'rgba(255,107,133,0.85)' : `${prog.accent}cc`, marginBottom: '1.5rem', textTransform: 'uppercase' }}
              >
                {prog.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, maxWidth: '600px' }}
              >
                {prog.heroDesc}
              </motion.p>
            </div>

            {/* Icon/Logo bubble */}
            {prog.logo ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '180px', height: '180px', borderRadius: '12px',
                  background: `${prog.color}15`,
                  border: `2px solid ${prog.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '1.5rem', flexShrink: 0,
                }}
              >
                <img src={prog.logo} alt={prog.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </motion.div>
            ) : prog.icon ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '140px', height: '140px', borderRadius: '50%',
                  background: `${prog.color}22`,
                  border: `2px solid ${prog.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '4rem', flexShrink: 0,
                }}
              >
                {prog.icon}
              </motion.div>
            ) : null}
          </div>
        </div>
      </section>

      {/* BOTTOM ACCENT BAR */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${prog.color}, ${prog.accent}, transparent)` }} />

      {/* MAIN CONTENT */}
      <section style={{ padding: '6rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }} className="program-content-grid">

            {/* LEFT: Sticky sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              {/* Quick summary card */}
              <motion.div {...fadeUp(0)} style={{
                background: 'var(--white)', borderRadius: '10px',
                border: `2px solid ${prog.color}20`,
                overflow: 'hidden',
                boxShadow: '0 4px 30px rgba(35,46,92,0.08)',
                marginBottom: '1.5rem',
              }}>
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${prog.color}, ${prog.accent})` }} />
                <div style={{ padding: '2rem' }}>
                  
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.2em', color: prog.color, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{prog.tag}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.35, marginBottom: '1rem' }}>{prog.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{prog.desc}</p>
                </div>
              </motion.div>

              {/* Goals card */}
              {prog.goals && prog.goals.length > 0 && (
                <motion.div {...fadeUp(0.1)} style={{
                  background: `linear-gradient(135deg, ${prog.color}0d, ${prog.color}05)`,
                  borderRadius: '10px',
                  border: `1px solid ${prog.color}25`,
                  padding: '1.75rem',
                  marginBottom: '1.5rem',
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: prog.color, marginBottom: '1rem' }}>Program Amaçları</p>
                  {prog.goals.map((g, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                      
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{g}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* CTA */}
              <motion.div {...fadeUp(0.2)}>
                <Link to="/iletisim" style={{
                  display: 'block', textDecoration: 'none', textAlign: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#fff', background: 'linear-gradient(135deg, var(--red), var(--red-light))',
                  padding: '1rem', borderRadius: '6px',
                  boxShadow: '0 6px 24px rgba(230,25,54,0.3)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(230,25,54,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(230,25,54,0.3)'; }}
                >
                  Kayıt &amp; Bilgi Al →
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: Detailed content */}
            <div>

              {/* KVYOD özel içerik */}
              {prog.id === 'kvyod' ? (
                <motion.div {...fadeUp(0.1)} style={{ 
                  background: 'var(--white)', 
                  borderRadius: '10px',
                  padding: '3rem',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 20px rgba(35,46,92,0.06)',
                }}>
                  
                  {/* 1. ORTAOKUL */}
                  <div style={{ marginBottom: '3.5rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>Ortaokul</h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', fontStyle: 'italic', marginBottom: '2rem' }}>
                      (Kimlik, düşünme, dünya ile bağ kurma)
                    </p>

                    <div style={{ marginBottom: '2.5rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Düşünme ve Anlamlandırma Dersleri
                      </h3>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                        <li>Eleştirel düşünme</li>
                        <li>Sorgulama kültürü</li>
                        <li>Argümantasyon ve akıl yürütme</li>
                        <li>Medya okuryazarlığı ve bilgi kirliliği analizi</li>
                      </ul>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginTop: '0.75rem' }}>
                        <strong>Amaç:</strong> Ezberleyen değil, <strong>düşünen ve anlam kuran öğrenci</strong> yetiştirmek.
                      </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Dünya, Toplum ve Kültür
                      </h3>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                        <li>Küresel yurttaşlık</li>
                        <li>Kültürlerarası farkındalık</li>
                        <li>Tarihsel okuma ve güncel olay analizi</li>
                        <li>Yerel–küresel bağlantılar</li>
                      </ul>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginTop: '0.75rem' }}>
                        <strong>Amaç:</strong> Öğrencinin kendini <strong>dünyanın parçası</strong> olarak görmesi.
                      </p>
                    </div>

                    <div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Yaşam Becerileri ve Kendini Tanıma
                      </h3>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                        <li>Duygusal okuryazarlık</li>
                        <li>Empati ve etik farkındalık</li>
                        <li>Karar verme ve problem çözme</li>
                        <li>Zaman ve sorumluluk yönetimi</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2. LİSE */}
                  <div style={{ marginBottom: '3.5rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>LİSE</h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', fontStyle: 'italic', marginBottom: '1rem' }}>
                      Yön, Anlam ve Gelecek
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '2.5rem' }}>
                      Lise programı, öğrencinin yalnızca akademik olarak derinleştiği değil; <strong>yaşamına yön verdiği</strong>, 
                      geleceğini bilinçli biçimde tasarladığı ve toplumsal sorumluluk üstlendiği bir evre olarak kurgulanmıştır. 
                      Bu yapı, öğrenciyi üniversiteye hazırlanmanın ötesinde; <strong>hayata hazırlamayı</strong> hedefler.
                    </p>

                    <div style={{ marginBottom: '2.5rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>
                        A. Akademik Derinleşme ve Disiplinlerarası Dersler
                      </h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1rem' }}>
                        Bu ders alanı, öğrencinin bilgiyi yüzeysel değil; <strong>derinlikli, eleştirel ve disiplinlerarası</strong> bir bakış açısıyla ele almasını sağlar.
                      </p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>İçerik Başlıkları:</p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1rem' }}>
                        <li>Bilim, teknoloji ve toplum ilişkisi</li>
                        <li>Felsefe, etik ve çağdaş problemler</li>
                        <li>Veri okuryazarlığı ve analitik düşünme</li>
                        <li>Bilimsel araştırma yöntemleri</li>
                        <li>Akademik okuma, yazma ve proje üretimi</li>
                      </ul>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>Amaç:</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                        Öğrencinin bilgiyi yalnızca öğrenen değil; <strong>sorgulayan, ilişkilendiren ve üreten</strong> bir birey hâline gelmesini sağlamak. 
                        Üniversite ve akademik yaşam için güçlü bir düşünsel altyapı oluşturmak.
                      </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>
                        B. Gelecek, Meslek ve Yaşam Tasarımı
                      </h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1rem' }}>
                        Bu ders alanı, öğrencinin kendi potansiyelini keşfetmesini ve geleceğini bilinçli tercihlerle şekillendirmesini hedefler.
                      </p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>İçerik Başlıkları:</p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1rem' }}>
                        <li>Kariyer farkındalığı ve kendini tanıma</li>
                        <li>Meslekler dünyası ve yeni iş alanları</li>
                        <li>Girişimcilik ve sosyal girişimcilik</li>
                        <li>Üniversite, bölüm ve meslek yolları planlaması</li>
                        <li>Küresel iş dünyası ve değişen beceri setleri</li>
                      </ul>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>Amaç:</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                        Öğrencinin geleceğini tesadüflere bırakmadan; <strong>bilinçli, esnek ve çok yönlü</strong> bir yaşam planı oluşturmasını sağlamak.
                      </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>
                        C. Toplumsal Sorumluluk ve Etki
                      </h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1rem' }}>
                        Bu ders alanı, öğrencinin bireysel başarının ötesine geçerek <strong>toplumsal fayda üretmesini</strong> merkeze alır.
                      </p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>İçerik Başlıkları:</p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1rem' }}>
                        <li>Toplum hizmeti ve gönüllülük projeleri</li>
                        <li>Sosyal sorunlara yönelik çözüm geliştirme</li>
                        <li>Yerel ve küresel etki projeleri</li>
                        <li>Etik liderlik</li>
                        <li>Sorumluluk bilinci ve aktif yurttaşlık</li>
                      </ul>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>Amaç:</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                        Öğrencinin sadece başarılı değil; <strong>sorumlu, duyarlı ve etki üreten</strong> bir birey olarak yetişmesini sağlamak.
                      </p>
                    </div>

                    <div style={{ background: `${prog.color}08`, padding: '1.5rem', borderRadius: '8px', borderLeft: `4px solid ${prog.color}` }}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
                        Programın Genel Kazanımları
                      </h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '0.5rem' }}>
                        Bu yapıyı tamamlayan lise öğrencisi;
                      </p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                        <li>Akademik olarak derinleşmiş,</li>
                        <li>Geleceğine dair bilinçli kararlar alabilen,</li>
                        <li>Toplumsal sorumluluk bilinci gelişmiş,</li>
                        <li>Küresel ölçekte düşünebilen,</li>
                        <li>Üniversite ve yaşam yolculuğuna hazır bir birey olarak mezun olur.</li>
                      </ul>
                    </div>
                  </div>

                  {/* 3. SDGs */}
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      BM Sürdürülebilir Kalkınma Amaçları (SDGs)
                    </h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-mid)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                      Sustainable Goals ile Entegrasyon
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
                      TED AD eğitim modeli, <strong>Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları</strong> ile doğrudan ilişkilendirilir:
                    </p>
                    
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.75rem' }}>Öne çıkan hedefler:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
                      <li><strong>Nitelikli Eğitim (SDG 4)</strong></li>
                      <li><strong>Toplumsal Cinsiyet Eşitliği (SDG 5)</strong></li>
                      <li><strong>İnsana Yakışır İş ve Ekonomik Büyüme (SDG 8)</strong></li>
                      <li><strong>Sorumlu Üretim ve Tüketim (SDG 12)</strong></li>
                      <li><strong>İklim Eylemi (SDG 13)</strong></li>
                      <li><strong>Barış, Adalet ve Güçlü Kurumlar (SDG 16)</strong></li>
                    </ul>

                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.75rem' }}>Uygulama Şekli:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
                      <li>Ders içerikleri SDG temalarıyla eşleştirilir</li>
                      <li>Öğrenci projeleri bu hedefler doğrultusunda tasarlanır</li>
                      <li>Toplum hizmeti ve sosyal sorumluluk çalışmaları <strong>ölçülebilir etki</strong> üretir</li>
                    </ul>

                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                      <strong>Amaç:</strong> Akademik başarıyı, <strong>insani ve gezegensel sorumlulukla</strong> birleştirmek.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <>
                  {/* Sections veya Detay bölümleri */}
                  {prog.sections ? (
                    <motion.div {...fadeUp(0.1)} style={{ marginBottom: '3.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        <div style={{ width: '4px', height: '32px', background: `linear-gradient(180deg, ${prog.color}, ${prog.accent})`, borderRadius: '2px' }} />
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Program</h2>
                      </div>
                      {prog.sections.map((section, secIdx) => {
                        if (section.type === 'intro') {
                          return (
                            <motion.div key={secIdx} {...fadeUp(secIdx * 0.1)} style={{ marginBottom: '2.5rem' }}>
                              <div style={{ background: `linear-gradient(135deg, ${prog.color}08, ${prog.color}03)`, borderRadius: '10px', border: `1px solid ${prog.color}20`, padding: '2rem' }}>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>{section.title}</h3>
                                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                                  {section.content.split('\n\n').map((para, pIdx) => (
                                    <p key={pIdx} style={{ marginBottom: pIdx < section.content.split('\n\n').length - 1 ? '0.75rem' : 0 }}>{para}</p>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          );
                        }
                        
                        if (section.type === 'single') {
                          return (
                            <motion.div key={secIdx} {...fadeUp(secIdx * 0.1)} style={{ marginBottom: '2.5rem' }}>
                              <div style={{ background: 'var(--white)', borderRadius: '10px', border: '1px solid var(--grey-light)', padding: '2rem', boxShadow: '0 2px 20px rgba(35,46,92,0.06)' }}>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>{section.title}</h3>
                                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                                  {section.content.split('\n\n').map((para, pIdx) => (
                                    <p key={pIdx} style={{ marginBottom: pIdx < section.content.split('\n\n').length - 1 ? '0.75rem' : 0 }}>{para}</p>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          );
                        }
                        
                        if (section.type === 'group') {
                          return (
                            <motion.div key={secIdx} {...fadeUp(secIdx * 0.1)} style={{ marginBottom: '3.5rem' }}>
                              <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{section.title}</h3>
                                {section.subtitle && (
                                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: prog.color, fontStyle: 'italic', marginBottom: '0.75rem' }}>{section.subtitle}</p>
                                )}
                                {section.intro && (
                                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-mid)', marginBottom: '1rem' }}>{section.intro}</p>
                                )}
                              </div>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="details-grid">
                                {section.items && section.items.map((item, itemIdx) => (
                                  <motion.div key={itemIdx} {...fadeUp((secIdx + itemIdx) * 0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.75rem', border: '1px solid var(--grey-light)', boxShadow: '0 2px 20px rgba(35,46,92,0.06)', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${prog.color}, ${prog.accent})` }} />
                                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.8rem', lineHeight: 1.35 }}>{item.title}</h4>
                                    {item.desc && <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{item.desc}</p>}
                                    {item.subitems && item.subitems.length > 0 && (
                                      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${prog.color}15` }}>
                                        {item.subitems.map((subitem, subIdx) => (
                                          <div key={subIdx} style={{ marginBottom: '0.75rem' }}>
                                            {typeof subitem === 'string' ? (
                                              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.65, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                                <span style={{ color: prog.color, fontWeight: 600, flexShrink: 0 }}>•</span>
                                                <span>{subitem}</span>
                                              </p>
                                            ) : (
                                              <>
                                                <h5 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 600, color: prog.color, marginBottom: '0.4rem' }}>• {subitem.title}</h5>
                                                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.65, marginLeft: '0.8rem' }}>{subitem.desc}</p>
                                              </>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          );
                        }
                        return null;
                      })}
                    </motion.div>
                  ) : prog.details && prog.details.length > 0 && (
                <motion.div {...fadeUp(0.1)} style={{ marginBottom: '3.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                    <div style={{ width: '4px', height: '32px', background: `linear-gradient(180deg, ${prog.color}, ${prog.accent})`, borderRadius: '2px' }} />
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Program</h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="details-grid">
                    {prog.details.map((d, i) => (
                      <motion.div
                        key={i} {...fadeUp(i * 0.08)}
                        style={{
                          background: 'var(--white)', borderRadius: '10px',
                          padding: '1.75rem',
                          border: '1px solid var(--grey-light)',
                          boxShadow: '0 2px 20px rgba(35,46,92,0.06)',
                          position: 'relative', overflow: 'hidden',
                        }}
                      >
                        <div style={{
                          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                          background: `linear-gradient(90deg, ${prog.color}, ${prog.accent})`,
                        }} />
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: prog.color, marginBottom: '0.6rem' }}>0{i + 1}</div>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem', lineHeight: 1.35 }}>{d.title}</h4>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{d.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              </>
              )}

              {/* Alt programlar (BÖGEP, KVYOD gibi) - KVYOD için gösterme */}
              {!prog.customContent && prog.subPrograms && prog.subPrograms.length > 0 && (
                <motion.div {...fadeUp(0.15)} style={{ marginBottom: '3.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                    <div style={{ width: '4px', height: '32px', background: `linear-gradient(180deg, ${prog.color}, ${prog.accent})`, borderRadius: '2px' }} />
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Kapsamındaki Programlar</h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem' }}>
                    {prog.subPrograms.map((subId, i) => {
                      const sub = programs.find((p) => p.id === subId);
                      if (!sub) return null;
                      return (
                        <motion.div key={subId} {...fadeUp(i * 0.07)}>
                          <Link to={`/programlar/${subId}`} style={{ textDecoration: 'none', display: 'block' }}>
                            <div
                              style={{
                                background: 'var(--white)', borderRadius: '10px',
                                padding: '1.5rem',
                                border: `2px solid ${prog.color}15`,
                                borderTop: `4px solid ${sub.accent}`,
                                boxShadow: '0 2px 16px rgba(35,46,92,0.07)',
                                transition: 'all 0.25s',
                                cursor: 'pointer',
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.borderColor = prog.color; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 28px ${prog.color}20`; }}
                              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${prog.color}15`; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,46,92,0.07)'; }}
                            >
                              
                              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: prog.color }}>{sub.tag}</span>
                              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.35rem', lineHeight: 1.35 }}>{sub.title}</p>
                              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.63rem', fontWeight: 700, color: 'var(--red)', marginTop: '0.75rem', letterSpacing: '0.06em' }}>Detaylar →</p>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Uygulama notu */}
              {prog.apply && (
                <motion.div {...fadeUp(0.2)} style={{
                  background: `linear-gradient(135deg, ${prog.color}10, ${prog.accent}08)`,
                  borderRadius: '10px',
                  border: `1px solid ${prog.color}25`,
                  padding: '2rem',
                  borderLeft: `5px solid ${prog.color}`,
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: prog.color, marginBottom: '0.75rem' }}> Nasıl Uygulanır?</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-mid)', fontStyle: 'italic' }}>{prog.apply}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PDF BROŞÜR / DERGİ */}
      {prog.pdf && (
        <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #060e1c 0%, #0a1628 50%, #0e2044 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <div style={{ width: '40px', height: '1px', background: 'rgba(230,25,54,0.6)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Program Broşürü</span>
                <div style={{ width: '40px', height: '1px', background: 'rgba(230,25,54,0.6)' }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                {prog.tag} <span style={{ color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>Tanıtım Kitapçığı</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', maxWidth: '420px', margin: '0.65rem auto 0', lineHeight: 1.8 }}>
                Sayfaları çevirerek ya da köşeyi sürükleyerek programı keşfedin.
              </p>
            </motion.div>

            <Suspense fallback={
              <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Yükleniyor...
              </div>
            }>
              <PdfFlipBook url={prog.pdf} />
            </Suspense>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a
                href={prog.pdf}
                download
                style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(255,255,255,0.2)', padding: '0.75rem 1.75rem',
                  borderRadius: '4px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                ⬇ PDF İndir
              </a>
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 900px) {
          .program-hero-grid { grid-template-columns: 1fr !important; }
          .program-hero-grid > div:last-child { display: none; }
          .program-content-grid { grid-template-columns: 1fr !important; }
          .program-content-grid > div:first-child { position: static !important; }
          .details-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
