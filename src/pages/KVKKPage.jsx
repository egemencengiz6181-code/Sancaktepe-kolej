import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function KVKKPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--off-white)' }}>
      <Navbar />
      
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          paddingTop: '10rem',
          paddingBottom: '4rem',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,25,54,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '4px',
              padding: '0.4rem 1rem',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
              }}>Gizlilik ve Güvenlik</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              Kişisel Verilerin Korunması
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              Kolej Sancaktepe TED-AD olarak kişisel verilerinizin güvenliği bizim için önceliktir.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content */}
      <section ref={ref} style={{ padding: '6rem 0' }}>
        <div className="section-container" style={{ maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: 'clamp(2rem, 5vw, 4rem)',
              boxShadow: '0 4px 24px rgba(35,46,92,0.08)',
            }}>
              {/* 1. Veri Sorumlusu */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                }}>1. Veri Sorumlusu</h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--grey-dark)',
                }}>
                  Kolej Sancaktepe TED-AD, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemektedir.
                </p>
              </div>

              {/* 2. İşlenen Kişisel Veriler */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                }}>2. İşlenen Kişisel Veriler</h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--grey-dark)',
                  marginBottom: '1rem',
                }}>
                  Web sitemiz üzerinden iletişim formlarını doldurduğunuzda aşağıdaki kişisel verileriniz işlenmektedir:
                </p>
                <ul style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--grey-dark)',
                  paddingLeft: '1.5rem',
                }}>
                  <li>Öğrenci adı ve soyadı</li>
                  <li>Veli adı ve soyadı</li>
                  <li>İletişim bilgileri (telefon numarası)</li>
                  <li>Eğitim bilgileri (mevcut okul, sınıf bilgisi)</li>
                  <li>İletişim içeriği (form mesajı)</li>
                </ul>
              </div>

              {/* 3. İşleme Amaçları */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                }}>3. Kişisel Verilerin İşlenme Amaçları</h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--grey-dark)',
                }}>
                  Kişisel verileriniz yalnızca kayıt ve bilgilendirme süreçlerinin yürütülmesi, eğitim hizmetlerimiz hakkında bilgi verilmesi ve iletişim talebinize yanıt verilmesi amacıyla işlenmektedir.
                </p>
              </div>

              {/* 4. Verilerin Paylaşımı */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                }}>4. Verilerin Paylaşımı ve Aktarımı</h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--grey-dark)',
                }}>
                  Kişisel verileriniz, KVKK ve ilgili mevzuat hükümlerine uygun olarak, yalnızca hukuki yükümlülüklerimizi yerine getirmek ve yukarıda belirtilen amaçları gerçekleştirmek için gerekli olduğu ölçüde üçüncü kişilerle paylaşılabilir.
                </p>
              </div>

              {/* 5. Haklarınız */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                }}>5. KVKK Kapsamındaki Haklarınız</h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--grey-dark)',
                  marginBottom: '1rem',
                }}>
                  KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
                </p>
                <ul style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--grey-dark)',
                  paddingLeft: '1.5rem',
                }}>
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                  <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                  <li>Aktarıldığı üçüncü kişilere yukarıdaki hususların bildirilmesini isteme</li>
                  <li>Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonuç doğmasına itiraz etme</li>
                  <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
                </ul>
              </div>

              {/* 6. İletişim */}
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                }}>6. İletişim</h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--grey-dark)',
                }}>
                  KVKK kapsamındaki haklarınızı kullanmak için talebinizi yazılı olarak veya 0216 606 0 833 numaralı telefondan bize iletebilirsiniz. Başvurularınız en kısa sürede ve en geç 30 gün içinde yanıtlanacaktır.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
