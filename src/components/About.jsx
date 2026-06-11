import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #0a1628 0%, #0c1d38 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}
          className="about-grid"
        >
          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
            >
              <div className="gold-line" />
              <span className="section-tag">Hakkımızda</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title"
              style={{ marginBottom: '1.5rem' }}
            >
              Türk Eğitim Derneği{' '}
              <span>Akreditasyonu</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(90deg, var(--gold), transparent)',
                marginBottom: '2rem',
              }}
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              {[
                'Türk eğitim sistemine çok yönlü katkılar sağlamayı amaçlayan Türk Eğitim Derneği, kurumsal değerlerinin ülke genelinde yaygınlaşmasını artırmak ve özel okul sektörünün nitelikli gelişimine katkı sağlamak amacıyla TED Akreditasyonu programını ve kurumsal eğitim danışmanlığı hizmetlerini önermektedir.',
                'TED Akreditasyonu, gerekli yetkinliklere sahip özel okulların en az iki eğitim-öğretim yılı sürecek bir geçiş döneminden sonra TED Okulu olabilmelerini sağlamaktadır.',
                'Ayrıca halen faaliyetlerine devam eden özel okullara ek olarak eğitim sektörüne yatırım yapmak isteyen kişi ve kuruluşlar, TED\'in sunduğu farklı kurumsal danışmanlık hizmetlerinden faydalanabilmektedir.',
              ].map((text, i) => (
                <p key={i} className="section-subtitle" style={{ maxWidth: '100%' }}>
                  {text}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* TED-AD Info Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '4px',
              padding: '2.5rem',
              marginBottom: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: 'linear-gradient(180deg, var(--gold), var(--gold-light))',
              }} />
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--gold-light)',
                marginBottom: '1rem',
                paddingLeft: '1rem',
              }}>
                Akreditasyon Süreci
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.65)',
                paddingLeft: '1rem',
              }}>
                Akreditasyon Süreci ile farklı bir isimle faaliyet gösteren özel bir okul, gerekli şartları taşıması ve geçiş dönemini başarıyla tamamlaması halinde TED Okuluna dönüşmesi sağlanmaktadır. Akreditasyon sürecine kabul edilen okullar, en az iki, en çok üç yıl sürebilecek Geçiş Dönemini başarıyla tamamladıkları takdirde TED Okulu adını alırlar.
              </p>
            </div>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '🏛', label: 'Türkiye\'de', value: 'TED Okulları' },
                { icon: '🌍', label: 'K.K.T.C. Dahil', value: 'Uluslararası' },
                { icon: '📋', label: 'Süreç', value: '2-3 Yıl' },
                { icon: '✅', label: 'Standart', value: 'TED Akredite' },
              ].map((item) => (
                <div key={item.label} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '4px',
                  padding: '1.2rem',
                  transition: 'border-color 0.3s',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>{item.label}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
