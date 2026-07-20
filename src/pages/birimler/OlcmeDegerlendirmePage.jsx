import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.93rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.85rem' }}>{children}</p>
);

const BulletItem = ({ children }) => (
  <li style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.4rem', paddingLeft: '0.25rem' }}>{children}</li>
);

const SubSection = ({ title, children, delay = 0 }) => (
  <motion.div {...fadeUp(delay)} style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--grey-light)' }}>{title}</h3>
    {children}
  </motion.div>
);

export default function OlcmeDegerlendirmePage() {
  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Birimler</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Ölçme ve Değerlendirme Birimi
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Eğitim süreçlerini planlayan, geliştiren ve veri temelli değerlendirme yaparak öğretmen, öğrenci ve veliye geri bildirim sağlayan birim.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '6rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>

            <SubSection title="İçerik Hazırlanıyor" delay={0}>
              <P>Bu sayfanın içeriği yakında yüklenecektir.</P>
            </SubSection>

          </div>
        </div>
      </section>
              <P>Ölçme ve Değerlendirme Birimi, Kolej Sancaktepe'nin eğitime bakış açısı ve ilkeleri doğrultusunda, eğitim-öğretim programlarını planlama, geliştirme ve eğitim sürecinin çeşitli aşamalarında alınacak kararlara temel olacak verileri toplama ve değerlendirme amacıyla çalışmalarını yürütür.</P>
              <P>Öğrenme sürecinin farklı aşamalarında öğrencilerin ne bildiklerini, ne anladıklarını ve neler yapabileceklerini belirleyerek farklılaştırılmış eğitim felsefesiyle öğretmen ve öğrencinin yeni hedefler belirlemesine yardımcı olur.</P>
            </SubSection>

            <SubSection title="Bölümün Görevleri" delay={0.05}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Ölçme ve değerlendirme literatürünün doğru kullanılmasını, ortak dil ve tutum geliştirilmesini sağlar.',
                  'Öğrenci karnesine yansıyan notların tüm öğretmenler tarafından objektif olarak belirlenebilmesi için ortak kriterler geliştirir.',
                  'Ölçme araçlarının öğretmenler tarafından geliştirilmesine ve çeşitlendirilmesine destek olur.',
                  'Sınavlarda ve ders içi çalışmalarda kullanılan soruların türlerini ve zorluk düzeylerini çeşitlendirir.',
                  'Nitelikli özgün sorular biriktirerek kuruma özgü soru bankası oluşturur.',
                  'Teknolojiden yararlanarak öğretim sonuçlarını değerlendirip programların verimliliği hakkında geri bildirim sağlar.',
                  'Ölçme ve değerlendirme alanındaki yenilikleri takip ederek öğretmenlere yönelik hizmet içi eğitim çalışmaları düzenler.',
                  'Öğretmenlerin tüm ölçme ve değerlendirme faaliyetlerine danışmanlık yapar.',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.6rem', padding: '0.6rem 0.75rem', background: 'var(--white)', borderRadius: '8px', border: '1px solid var(--grey-light)' }}>
                    <span style={{ color: 'var(--red)', fontWeight: 700, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </SubSection>

            <SubSection title="Bölümün İlkeleri" delay={0.08}>
              <P>Öğrenci başarısını belirlemek amacıyla hazırlanan ölçme araçlarında yalnızca bilgi ve kavrama düzeyindeki davranışlar değil; eleştirel düşünme, girişimcilik, öz yönetim, iş birliği, yaratıcı düşünme, iletişim, araştırma ve problem çözme gibi 21. yüzyıl becerilerinin ölçülmesine de ağırlık verilir.</P>
              <P>Ölçme değerlendirme çalışmaları hem süreç hem de sonuç odaklı olarak uygulanır. Süreç odaklı değerlendirmelerde performans görevleri, projeler ve portfolyo çalışmaları için dereceli puanlama anahtarı, kontrol listesi ve gözlem formu gibi uygun araçlar öğretmenlerle birlikte hazırlanır.</P>
            </SubSection>

            {[
              {
                title: 'Öğrenciler İçin',
                items: [
                  'Ölçme-değerlendirme; dönüşümlü düşünme, paylaşma, becerilerini sergileme ve kendi öğrenme süreçlerini keşfetme fırsatları sağlar.',
                  'Farklı öğrenme tarzlarını ve çoklu zekâlarını kullanmaya olanak tanır.',
                  'Gerçek yaşam deneyimleriyle bağlantılı değerlendirmeler kullanılır.',
                ],
              },
              {
                title: 'Öğretmenler İçin',
                items: [
                  'Öğretim ve öğrenme sürecine dair kanıt toplama, plan yapma ve dönüşümlü düşünme için fırsatlar sunar.',
                  'Çeşitli ve dengeli strateji ve araçlar kullanarak farklı öğrenme tarzları gözetilir.',
                  'Değerlendirme kriterleri önceden öğrencilerle paylaşılır.',
                ],
              },
              {
                title: 'Veliler İçin',
                items: ['Öğrencilerin öğrenme ve gelişimlerine dair somut kanıtlar gösterilir; öğrenci süreci şeffaf biçimde paylaşılır.'],
              },
            ].map((group, i) => (
              <SubSection key={group.title} title={group.title} delay={0.1 + i * 0.04}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {group.items.map((item, j) => <BulletItem key={j}>• {item}</BulletItem>)}
                </ul>
              </SubSection>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
