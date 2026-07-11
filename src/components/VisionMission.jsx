import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function VisionMission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="vision"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #0c1d38 0%, #0a1628 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 50%),
                          radial-gradient(circle at 80% 50%, rgba(26,58,110,0.3) 0%, transparent 50%)`,
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <div className="gold-line" />
            <span className="section-tag">Kimliğimiz</span>
            <div className="gold-line" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Vizyon & <span>Misyon</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="vm-grid">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: '4px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--gold), var(--gold-light), transparent)',
            }} />
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '4rem',
              color: 'rgba(201,168,76,0.1)',
              lineHeight: 1,
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
            }}>"</div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}>Vizyonumuz</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'Ulusal değerlerine bağlı, evrensel bakış açısına sahip,',
                'Bilgiyi anlamlandırabilen, etik sorumluluk taşıyan ve',
                'Dünya vatandaşlığı bilinciyle hareket eden bireyler yetiştiren,',
                'Türkiye\'den dünyaya açılan öncü bir eğitim kurumu olmaktır.',
              ].map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: i === 3 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)',
                    fontStyle: i === 3 ? 'normal' : 'italic',
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(201,168,76,0.15)',
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.45)',
            }}>
              Eğitimi yalnızca akademik başarıyla sınırlamayan; düşünmeyi, sorgulamayı, üretmeyi ve yaşamla bağ kurmayı merkeze alan bütüncül bir eğitim ekolü oluşturmayı hedefleriz.
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'linear-gradient(135deg, rgba(26,58,110,0.3), rgba(10,22,40,0.4))',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--navy-light), rgba(26,58,110,0.6), transparent)',
            }} />

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--navy-light), #2a5298)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(201,168,76,0.3)',
              }}>
                
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
              }}>Misyonumuz</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { text: 'Öğrencilerin akademik, sosyal, duygusal ve etik gelişimini bir bütün olarak ele alan,', accent: false },
                { text: 'Ulusal müfredatı, uluslararası eğitim yaklaşımlarıyla (Cambridge, IB/AP, UbD) uyumlu biçimde zenginleştiren,', accent: true },
                { text: 'Okuryazarlık temelli, beceri odaklı ve disiplinlerarası öğrenme ortamları sunan,', accent: false },
                { text: 'Öğrencileri yalnızca sınavlara değil, hayata ve küresel dünyaya hazırlayan bir eğitim anlayışını hayata geçirmektir.', accent: true },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: item.accent ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                    marginTop: '0.6rem',
                    flexShrink: 0,
                  }} />
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    color: item.accent ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.55)',
                  }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.2rem',
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '3px',
              borderLeft: '3px solid var(--gold)',
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
              }}>
                Öğrencilerin kendi potansiyellerini tanıyan, sorumluluk alan, eleştirel düşünebilen ve topluma değer katan bireyler olarak yetişmesini amaçlarız.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vm-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
