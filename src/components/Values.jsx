import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const values = [
  {
    icon: '🇹🇷',
    title: 'Milli ve Kültürel Değerlere Bağlılık',
    desc: 'Türkiye Cumhuriyeti\'nin temel değerlerini, kültürel mirasını, Atatürk ilke ve inkılaplarını ve toplumsal sorumluluk bilincini eğitim anlayışının ayrılmaz bir parçası olarak görürüz.',
  },
  {
    icon: '🌍',
    title: 'Dünya Vatandaşlığı',
    desc: 'Öğrencilerimizin farklı kültürlere saygılı, küresel sorunlara duyarlı ve uluslararası işbirliğine açık bireyler olarak yetişmesini önemseriz.',
  },
  {
    icon: '⚖️',
    title: 'Etik ve Ahlaki Sorumluluk',
    desc: 'Eğitim süreçlerimizin merkezinde; dürüstlük, adalet, saygı ve sorumluluk gibi evrensel etik değerler yer alır.',
  },
  {
    icon: '🧠',
    title: 'Anlamaya Dayalı Derin Öğrenme',
    desc: 'Ezberden uzak, anlamaya ve transfer etmeye dayalı öğrenmeyi esas alır; öğrencilerin bilgiyi farklı bağlamlarda kullanabilmesini destekleriz.',
  },
  {
    icon: '📚',
    title: 'Yaşam Boyu Öğrenme',
    desc: 'Öğrenmeyi okul yıllarıyla sınırlamayan; merak eden, araştıran ve kendini sürekli geliştiren bireyler yetiştiririz.',
  },
  {
    icon: '🌱',
    title: 'Bütüncül Gelişim',
    desc: 'Akademik başarının; sosyal, duygusal, sanatsal ve fiziksel gelişimle birlikte anlam kazandığına inanırız.',
  },
  {
    icon: '♻️',
    title: 'Sürdürülebilirlik ve Toplumsal Katkı',
    desc: 'Doğaya, topluma ve geleceğe karşı sorumluluk bilinciyle hareket eden; sürdürülebilir yaşam kültürünü benimseyen bireyler yetiştiririz.',
  },
];

export default function Values() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="values"
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #0a1628 0%, #06101e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
      }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <div className="gold-line" />
            <span className="section-tag">Değerlerimiz</span>
            <div className="gold-line" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Temel <span>Değerlerimiz</span>
          </h2>
          <p className="section-subtitle" style={{
            margin: '1.5rem auto 0',
            textAlign: 'center',
          }}>
            Eğitim anlayışımızın temelini oluşturan değerler, her öğrencinin gelişim yolculuğuna rehberlik eder.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '4px',
                padding: '2rem',
                cursor: 'default',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onHoverStart={(e) => {
                e.target.style && (e.target.style.borderColor = 'rgba(201,168,76,0.25)');
              }}
            >
              {/* Hover glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                }}
              />

              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
              }}>{val.icon}</div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}>
                {val.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
              }}>
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
