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

const SubSection = ({ title, items, intro, delay = 0 }) => (
  <motion.div {...fadeUp(delay)} style={{ marginBottom: '2rem' }}>
    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem', paddingBottom: '0.4rem', borderBottom: '1px solid var(--grey-light)' }}>{title}</h4>
    {intro && <P>{intro}</P>}
    {items && (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.4rem', paddingLeft: '0.25rem' }}>
            <span style={{ color: 'var(--red)', flexShrink: 0 }}>•</span>{item}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const LevelSection = ({ level, groups }) => (
  <div style={{ marginBottom: '3rem' }}>
    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <span style={{ width: '32px', height: '32px', background: 'var(--red)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ color: '#fff', fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 900 }}>PDR</span>
      </span>
      {level}
    </h3>
    {groups.map((g, i) => (
      <SubSection key={g.title} title={g.title} items={g.items} intro={g.intro} delay={i * 0.04} />
    ))}
  </div>
);

const PDR_DATA = [
  {
    level: 'İlköğretim Çalışmaları',
    groups: [
      {
        title: 'Öğrenci Yönelik Çalışmalar',
        items: [
          'Sınıf rehberlik programı dersleri',
          'Yeni öğrenci uyum süreci',
          'Sınav kaygısıyla başa çıkma',
          'Ders çalışma teknikleri',
          'Zaman yönetimi ve sınav hazırlık becerileri',
          'Kariyer farkındalığı',
          'Grup çalışmaları ve bireysel görüşmeler',
          'Sosyal-duygusal gelişim programları',
        ],
      },
      {
        title: 'Veli Yönelik Çalışmalar',
        items: [
          'Veli toplantıları ve bilgilendirme seminerleri',
          'Yeni öğrenci velisi oryantasyonu',
          'Bireysel veli görüşmeleri',
          'Ergenlik dönemi bilgilendirme toplantıları',
          'Sınav sürecinde aile tutumları seminerleri',
        ],
      },
      {
        title: 'Öğretmen Yönelik Çalışmalar',
        items: [
          'Öğrenci tanıma ve rehberlik işbirliği',
          'Özel eğitime ihtiyaç duyan öğrencilerin tespiti ve yönlendirilmesi',
          'Sınıf içi problem durumlarında işbirliği',
          'Hizmet içi eğitim seminerleri',
        ],
      },
      {
        title: 'PDR Uzmanları Yönelik Mesleki Gelişim',
        items: [
          'Süpervizyon çalışmaları',
          'Mesleki toplantılar ve paylaşım seminerleri',
          'Ölçek geliştirme ve güncelleme çalışmaları',
          'Araştırma ve yayın faaliyetleri',
        ],
      },
    ],
  },
  {
    level: 'Lise Çalışmaları',
    groups: [
      {
        title: 'Öğrenci Yönelik Çalışmalar',
        items: [
          'Sınıf rehberlik programı dersleri',
          'Yeni öğrenci uyum süreci',
          'Üniversite tercih ve yerleştirme danışmanlığı',
          'Sınav kaygısıyla başa çıkma',
          'Kariyer danışmanlığı ve mesleki yöneltme',
          'YKS/sınav hazırlık stratejileri',
          'Zaman yönetimi ve verimli ders çalışma',
          'Bireysel ve grup rehberlik görüşmeleri',
          'Sosyal-duygusal destek programları',
        ],
      },
      {
        title: 'Veli Yönelik Çalışmalar',
        items: [
          'Üniversite tercih ve yerleştirme bilgilendirme toplantıları',
          'Yeni öğrenci velisi oryantasyonu',
          'Bireysel veli görüşmeleri',
          'Sınav sürecinde aile tutumları seminerleri',
          'Mesleki kariyer seçimine yönelik bilgilendirme',
        ],
      },
      {
        title: 'Öğretmen Yönelik Çalışmalar',
        items: [
          'Rehberlik işbirliği ve öğrenci gözlem formları',
          'Özel eğitime ihtiyaç duyan öğrencilerin takibi',
          'Sınıf içi problem durumlarında işbirliği',
          'Motivasyon ve sınav kaygısı konularında danışmanlık',
        ],
      },
      {
        title: 'PDR Uzmanları Yönelik Mesleki Gelişim',
        items: [
          'Süpervizyon ve mesleki paylaşım toplantıları',
          'Güncel rehberlik literatürü takibi',
          'Araştırma, ölçek geliştirme ve yayın faaliyetleri',
        ],
      },
    ],
  },
];

export default function PDRPage() {
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
              Psikolojik Danışmanlık ve Rehberlik
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Öğrencilerimizin akademik, kişisel ve mesleki gelişimini destekleyen kapsamlı rehberlik programları.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '6rem 0', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ marginBottom: '3rem' }}>
              <P>Kolej Sancaktepe'de psikolojik danışmanlık ve rehberlik birimi; öğrencilerin akademik, kişisel-sosyal ve kariyer gelişimini bütüncül bir yaklaşımla destekler. Her kademedeki öğrencimiz için kapsamlı, bütünleşik ve gelişimsel bir rehberlik programı uygulanmaktadır.</P>
            </motion.div>

            {PDR_DATA.map((section, i) => (
              <LevelSection key={section.level} level={section.level} groups={section.groups} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
