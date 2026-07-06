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
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Türk Eğitim Derneği akreditasyonuyla güçlenen Kolej Sancaktepe, kaliteli ve bütüncül eğitimin adresi.
            </p>
          </motion.div>
        </div>
      </div>

      {/* NEDEN KOLEJ SANCAKTEPE */}
      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Fark Yaratan Unsurlar</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Neden Kolej <span>Sancaktepe?</span></h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', maxWidth: '560px', margin: '1rem auto 0', lineHeight: 1.85 }}>
              Standart eğitimin ötesine geçen, bütüncül ve uluslararası bir yaklaşım.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="neden-grid">
            {[
              { icon: '🎓', title: 'BÖGEP', sub: 'Bütüncül Öğrenme ve Gelişim Programları', desc: 'Akademik, sosyal, duygusal ve fiziksel gelişimi tek çatı altında birleştiren kapsamlı program.' },
              { icon: '🌍', title: 'KVYOD', sub: 'Küresel Vizyon ve Yaşam Odaklı Dersler', desc: 'Öğrencileri dünyaya hazırlayan, yaşam becerileri ve küresel bakış açısı kazandıran dersler.' },
              { icon: '📖', title: 'OYP', sub: 'Okuryazar Temelli Eğitim', desc: 'Okuduğunu anlayan, eleştirel düşünen ve iletişim kurabilen bireyler yetiştirme odaklı program.' },
              { icon: '🔬', title: 'UD', sub: 'Uygulamalı Dersler ve Branşlaşma Modeli', desc: 'Teorik bilgiyi pratiğe dönüştüren, öğrencinin güçlü olduğu alanda derinleşmesini sağlayan model.' },
              { icon: '💭', title: 'P4C', sub: 'Anaokulu — Çocuklarla Felsefe', desc: 'Küçük yaştan itibaren sorgulama, merak ve felsefi düşünmeyi teşvik eden özel program.' },
              { icon: '🗣️', title: 'Çift Dilli Eğitim', sub: 'Anaokulu\'ndan 6. Sınıfa', desc: 'Fen ve Matematik derslerinin 1 saatinin İngilizce işlenmesiyle erken çift dil temeli.' },
              { icon: '🇩🇪', title: 'Almanca', sub: 'İkinci Yabancı Dil', desc: 'Tüm kademelerde Almanca ikinci yabancı dil olarak sunulur; Avrupa bağlantısı güçlenir.' },
              { icon: '🏆', title: 'AP Programı', sub: '11–12. Sınıf', desc: 'Advanced Placement dersleriyle uluslararası üniversitelere başvuruda güçlü bir avantaj.' },
              { icon: '🌐', title: 'Dünya Vatandaşlığı', sub: 'Evrensel Perspektif', desc: 'Kültürel farklılıklara saygılı, küresel sorunlara duyarlı ve dünya ile bağlantılı bireyler.' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.06)}>
                <div style={{
                  background: 'var(--white)', borderRadius: '14px',
                  border: '1px solid var(--grey-light)',
                  padding: '1.75rem 1.5rem',
                  boxShadow: '0 2px 16px rgba(35,46,92,0.05)',
                  transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                  height: '100%',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(35,46,92,0.1)'; e.currentTarget.style.borderColor = 'var(--red)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,46,92,0.05)'; e.currentTarget.style.borderColor = 'var(--grey-light)'; }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.08em', color: 'var(--red)', marginBottom: '0.3rem' }}>{item.title}</div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.6rem', lineHeight: 1.4 }}>{item.sub}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .neden-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 540px) { .neden-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* TED-AD Tanıtım */}
      <section style={{ padding: '7rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-grid">
            {/* Sol */}
            <div>
              <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <div className="red-line" />
                <span className="section-tag">TED Akreditasyonu</span>
              </motion.div>
              <motion.h2 {...fadeUp(0.1)} className="section-title" style={{ marginBottom: '1.5rem' }}>
                Türk Eğitim Derneği <span>Akreditasyonu</span>
              </motion.h2>
              <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  'Türk eğitim sistemine çok yönlü katkılar sağlamayı amaçlayan Türk Eğitim Derneği, kurumsal değerlerinin ülke genelinde yaygınlaşmasını artırmak ve özel okul sektörünün nitelikli gelişimine katkı sağlamak amacıyla TED Akreditasyonu programını ve kurumsal eğitim danışmanlığı hizmetlerini önermektedir.',
                  'TED Akreditasyonu, gerekli yetkinliklere sahip özel okulların en az iki eğitim-öğretim yılı sürecek bir geçiş döneminden sonra TED Okulu olabilmelerini sağlamaktadır.',
                  'Ayrıca halen faaliyetlerine devam eden özel okullara ek olarak eğitim sektörüne yatırım yapmak isteyen kişi ve kuruluşlar, TED\'in sunduğu farklı kurumsal danışmanlık hizmetlerinden faydalanabilmektedir.',
                  'TED Akreditasyon ve Danışmanlık (TED AD) hizmetleri kapsamında önerilen programlar hakkında ayrıntılı bilgiler ve program kılavuzları aşağıda verilmektedir.',
                ].map((p, i) => (
                  <p key={i} className="section-subtitle" style={{ maxWidth: '100%' }}>{p}</p>
                ))}
              </motion.div>
            </div>

            {/* Sağ – Akreditasyon Süreci */}
            <motion.div {...fadeUp(0.2)}>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                borderRadius: '8px',
                padding: '2.5rem',
                marginBottom: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), rgba(255,255,255,0.3))' }} />
                <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(230,25,54,0.08)' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
                  Akreditasyon Süreci
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.75)' }}>
                  Akreditasyon Süreci ile farklı bir isimle faaliyet gösteren özel bir okul, gerekli şartları taşıması ve geçiş dönemini başarıyla tamamlaması halinde TED Okuluna dönüşmesi sağlanmaktadır.
                  Akreditasyon sürecine kabul edilen okullar, en az iki, en çok üç yıl sürebilecek Geçiş Dönemini başarıyla tamamladıkları takdirde TED Okulu adını alırlar.
                </p>
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', borderLeft: '3px solid rgba(255,255,255,0.25)' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                    Türkiye genelinde ve Kuzey Kıbrıs Türk Cumhuriyeti'nde faaliyet gösteren mevcut TED Okullarının etki alanı içerisine giren okullar, Akreditasyon Sürecine kabul edilmemektedir.
                  </p>
                </div>
              </div>

              {/* Info cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { icon: '🏛', title: 'TED Okulları', sub: 'Türkiye & KKTC' },
                  { icon: '📋', title: '2-3 Yıl', sub: 'Geçiş Süreci' },
                  { icon: '✅', title: 'TED-AD', sub: 'Akreditasyon' },
                  { icon: '🌐', title: 'K-12', sub: 'Tam Kademe' },
                ].map((item) => (
                  <div key={item.title} style={{
                    background: 'var(--grey-light)', borderRadius: '6px', padding: '1.2rem',
                    borderLeft: '3px solid var(--primary)',
                    transition: 'border-color 0.3s, background 0.3s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.background = 'rgba(230,25,54,0.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'var(--grey-light)'; }}
                  >
                    <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)' }}>{item.title}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey)' }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
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
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(230,25,54,0.15)', border: '1px solid rgba(230,25,54,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>👁</div>
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
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(35,46,92,0.4)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🎯</div>
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
              { icon: '🇹🇷', title: 'Milli ve Kültürel Değerlere Bağlılık', color: 'var(--red)', desc: 'Türkiye Cumhuriyeti\'nin temel değerlerini, kültürel mirasını, Atatürk ilke ve inkılaplarını ve toplumsal sorumluluk bilincini eğitim anlayışının ayrılmaz bir parçası olarak görürüz.' },
              { icon: '🌍', title: 'Dünya Vatandaşlığı', color: 'var(--primary)', desc: 'Öğrencilerimizin farklı kültürlere saygılı, küresel sorunlara duyarlı ve uluslararası işbirliğine açık bireyler olarak yetişmesini önemseriz.' },
              { icon: '⚖️', title: 'Etik ve Ahlaki Sorumluluk', color: 'var(--red)', desc: 'Eğitim süreçlerimizin merkezinde; dürüstlük, adalet, saygı ve sorumluluk gibi evrensel etik değerler yer alır.' },
              { icon: '🧠', title: 'Anlamaya Dayalı Derin Öğrenme', color: 'var(--primary)', desc: 'Ezberden uzak, anlamaya ve transfer etmeye dayalı öğrenmeyi esas alır; öğrencilerin bilgiyi farklı bağlamlarda kullanabilmesini destekleriz.' },
              { icon: '📚', title: 'Yaşam Boyu Öğrenme', color: 'var(--red)', desc: 'Öğrenmeyi okul yıllarıyla sınırlamayan; merak eden, araştıran ve kendini sürekli geliştiren bireyler yetiştiririz.' },
              { icon: '🌱', title: 'Bütüncül Gelişim', color: 'var(--primary)', desc: 'Akademik başarının; sosyal, duygusal, sanatsal ve fiziksel gelişimle birlikte anlam kazandığına inanırız.' },
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
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
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
