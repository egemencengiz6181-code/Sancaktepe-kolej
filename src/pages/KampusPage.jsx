import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const areas = [
  {
    id: 'drone',
    icon: '🚁',
    label: 'Drone Çekimi',
    title: 'Kampüsü Kuşbakışı Keşfet',
    desc: 'Kolej Sancaktepe kampüsünün muhteşem manzarasını havadan keşfediyoruz. Geniş yeşil alanlar, modern bina yapısı ve okul bahçesini kuş bakışı görüntülüyoruz.',
    detail: 'Profesyonel drone ekipmanlarıyla çekilen kampüs videoları, ziyaretçilerimize ve velilerimize kampüsün tüm güzelliklerini yakından sunar.',
    bg: 'var(--primary)',
    accent: 'var(--yellow)',
  },
  {
    id: 'lab',
    icon: '🔬',
    label: 'Laboratuvarlar',
    title: 'Bilim Tam Burada Başlıyor',
    desc: 'Fizik, kimya, biyoloji ve bilgisayar laboratuvarlarımız modern ekipmanlarla donatılmış, öğrencilere deneysel öğrenme imkânı sunan alanlardır.',
    detail: 'Her kademe için ayrı tasarlanmış laboratuvarlarımızda öğrenciler teorik bilgiyi uygulamaya dönüştürüyor; deney yapıyor, analiz ediyor ve keşfediyor.',
    bg: '#1e3a5f',
    accent: '#60c3f7',
  },
  {
    id: 'spor',
    icon: '⚽',
    label: 'Spor Alanları',
    title: 'Hareket, Disiplin ve Takım Ruhu',
    desc: 'Spor salonları, açık saha, basketbol ve voleybol kortu ile öğrencilerimizin fiziksel gelişimini destekleyen kapsamlı spor tesislerimiz bulunmaktadır.',
    detail: 'Branş sporcularından hobi amaçlı katılımcılara kadar tüm öğrencilerin faydalandığı spor altyapısı, beden ve ruh sağlığını ön planda tutar.',
    bg: '#0f2d1f',
    accent: '#4ade80',
  },
  {
    id: 'kutuphane',
    icon: '📚',
    label: 'Kütüphane',
    title: 'Bilginin Kalbi',
    desc: 'Binlerce basılı kitap, dijital arşiv ve sessiz çalışma alanlarıyla öğrencilerin araştırma, okuma ve öğrenme süreçlerini destekleyen modern kütüphanemiz.',
    detail: 'Hem bireysel çalışmaya hem de grup projelerine uygun tasarlanmış kütüphanemiz, okuma kültürünü ve akademik araştırmayı teşvik eden özel bir alan olarak öne çıkar.',
    bg: '#2d1a0e',
    accent: '#f59e0b',
  },
];

export default function KampusPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* HERO */}
      <div
        ref={heroRef}
        style={{
          position: 'relative',
          height: 'clamp(420px, 60vh, 680px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--primary)',
        }}
      >
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: "linear-gradient(135deg, rgba(10,18,46,0.92) 0%, rgba(35,46,92,0.82) 60%, rgba(46,61,122,0.75) 100%)",
            y: heroY,
          }}
        />
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.07,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)',
          pointerEvents: 'none',
        }} />

        <motion.div
          style={{ position: 'relative', zIndex: 2, opacity: heroOpacity, paddingTop: 'clamp(80px, 14vh, 110px)', paddingBottom: 'clamp(40px, 6vh, 60px)' }}
          className="section-container"
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '2px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Kolej Sancaktepe</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Kampüs <span style={{ color: 'var(--yellow)' }}>Yaşamı</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
              color: 'rgba(255,255,255,0.62)',
              maxWidth: '560px',
              lineHeight: 1.85,
            }}>
              Modern altyapısı, zengin sosyal imkânları ve ilham veren mekânlarıyla kampüsümüzü keşfedin.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* AREAS */}
      {areas.map((area, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={area.id}
            style={{
              padding: 'clamp(4rem, 8vw, 7rem) 0',
              background: idx % 2 === 0 ? 'var(--off-white)' : 'var(--white)',
            }}
          >
            <div className="section-container">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'clamp(2.5rem, 5vw, 5rem)',
                  alignItems: 'center',
                  direction: isEven ? 'ltr' : 'rtl',
                }}
              >
                {/* Image placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ direction: 'ltr' }}
                >
                  <div
                    style={{
                      aspectRatio: '4/3',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${area.bg} 0%, color-mix(in srgb, ${area.bg}, #000 20%) 100%)`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                    }}
                  >
                    {/* Grid lines decoration */}
                    <div style={{
                      position: 'absolute', inset: 0, opacity: 0.06,
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(255,255,255,1) 29px, rgba(255,255,255,1) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(255,255,255,1) 29px, rgba(255,255,255,1) 30px)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: area.accent,
                      opacity: 0.8,
                    }}>
                      {area.label}
                    </div>
                    <div style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))', position: 'relative', zIndex: 1 }}>
                      {area.icon}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      color: 'rgba(255,255,255,0.55)',
                      letterSpacing: '0.04em',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      Yakında fotoğraflar eklenecek
                    </div>
                    {/* Accent corner line */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${area.accent}, transparent)`,
                    }} />
                  </div>
                </motion.div>

                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{ direction: 'ltr' }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1.25rem',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '100px',
                    background: `color-mix(in srgb, ${area.bg} 12%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${area.bg} 20%, transparent)`,
                  }}>
                    <span style={{ fontSize: '0.95rem' }}>{area.icon}</span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: area.bg,
                    }}>{area.label}</span>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    lineHeight: 1.2,
                    marginBottom: '1.1rem',
                  }}>
                    {area.title}
                  </h2>

                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--text-mid)',
                    lineHeight: 1.85,
                    marginBottom: '1rem',
                  }}>
                    {area.desc}
                  </p>

                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--grey)',
                    lineHeight: 1.8,
                  }}>
                    {area.detail}
                  </p>

                  <div style={{
                    marginTop: '2rem',
                    width: '48px',
                    height: '3px',
                    borderRadius: '2px',
                    background: area.accent === 'var(--yellow)' ? 'var(--yellow)' : area.accent,
                  }} />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA BAND */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)',
          pointerEvents: 'none',
        }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              Kampüsümüzü Yerinde Görün
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.85,
            }}>
              Bize ulaşın, kampüs turuna katılın ve Kolej Sancaktepe'yi tüm detaylarıyla keşfedin.
            </p>
            <a
              href="/iletisim"
              style={{
                display: 'inline-block',
                padding: '0.9rem 2.4rem',
                borderRadius: '4px',
                background: 'var(--yellow)',
                color: 'var(--text-dark)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              Kampüs Turu Ayarla
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
