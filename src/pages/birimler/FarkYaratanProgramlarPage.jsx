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

const CANADA_STEPS = [
  'İlk duyuru ve seçim kriterleri okul genelinde paylaşılır.',
  'Başvuru formları öğrencilere dağıtılır.',
  'Aday öğrenciler başvuru formlarını doldurarak teslim eder.',
  'Yazılı değerlendirme ve İngilizce mülakat aşaması.',
  'Kabul edilen öğrenciler belirlenir ve veliler bilgilendirilir.',
  'Burs ve finansman süreçleri başlatılır.',
  'Kabul mektupları ve vize evrakları hazırlanır.',
  'Değişim öğrencisi olarak Kanada\'ya gidilir (1 yıl süreyle).',
  'Kendi okulumuzda bir Kolej Sancaktepe öğrencisi konuk edilir.',
  'Geri dönüş ve deneyim paylaşım etkinlikleri düzenlenir.',
];

const PROGRAMS = [
  {
    id: 'ap',
    tag: 'AP',
    title: 'Advanced Placement (AP)',
    body: [
      'AP (Advanced Placement), College Board tarafından yürütülen bir programdır ve öğrencilerin Kolej Sancaktepe\'de başlangıç seviyesindeki üniversite derslerini almalarına olanak tanır.',
      'Yurt dışında veya AP derslerini tanıyan Türkiye üniversitelerinde öğrenim görmeyi isteyen öğrenciler 3 ya da daha yüksek not (5 en yüksek) almayı hedefleyerek iki AP dersi alırlar.',
    ],
    action: { label: 'AP Sınav Merkezi →', to: '/programlar/ap-sinav-merkezi', internal: true },
  },
  {
    id: 'kanada',
    tag: 'Değişim Programı',
    title: 'TED-Kanada Değişim Programı',
    body: [
      'Kolej Sancaktepe öğrencileri uluslararası değişim programları kapsamında Kanada\'daki partner okullarına bir yıllık öğrenim için gidebilirler. Bu program öğrencilere dünyaya açılan eşsiz bir fırsat sunar.',
      'Program kapsamında Kanada\'dan gelen öğrenciler de Kolej Sancaktepe\'de bir yıl öğrenim görür.',
    ],
    steps: CANADA_STEPS,
  },
  {
    id: 'ses-bilim',
    tag: 'Ses Bilim',
    title: 'Eğlenceli Ses Bilim Programı',
    body: [
      'Eğlenceli Ses Bilim Programı; öğrencilerin STEM perspektifinden ses ve akustik prensiplerini eğlenceli deneyler ve projeler aracılığıyla öğrenmelerini sağlar.',
      'Program, müzik-teknoloji entegrasyonu ile öğrencilerin yaratıcı problem çözme becerilerini geliştirir.',
    ],
  },
  {
    id: 'genclik',
    tag: 'Uluslararası Ödül',
    title: 'Uluslararası Gençlik Ödülü',
    body: [
      'Kolej Sancaktepe, DOIAP (Edinburgh Dükü Uluslararası Ödül Programı) kapsamına dahil olmakla gurur duyar. Program 14 yaş ve üstü öğrencilere açıktır.',
      'Öğrenciler topluma hizmet projelerine, keşif gezilerine ve beceri odaklı programlara katılarak kişisel gelişimlerini belgeleyen uluslararası bir ödül kazanırlar.',
    ],
  },
  {
    id: 'kultur',
    tag: 'Kültür Programı',
    title: 'Uluslararası Akademik ve Kültür Programları',
    body: [
      'Kültür programımızın odak noktası; 7, 8. sınıf ve lise öğrencilerinin öğretmenleri ve arkadaşlarıyla birlikte canlı şehirleri tecrübe etmelerini sağlamaktır. Programlar Londra, ABD ve çeşitli Avrupa şehirlerinde düzenlenmektedir.',
      'Sabah dil derslerinden oluşan akademik bir bileşenin yanı sıra müzeler, sanat galerileri, alışveriş, müzikaller ve tema parkları gibi kültürel deneyimler de programa dahildir.',
    ],
  },
];

export default function FarkYaratanProgramlarPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0d1530 0%, var(--primary) 60%, #1a2d6e 100%)' }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0.1)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Birimler</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Fark Yaratan Programlar
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.85 }}>
              Kolej Sancaktepe öğrencilerini dünyaya hazırlayan özgün akademik ve kültürel programlar.
            </p>
          </motion.div>
        </div>
      </div>

      {PROGRAMS.map((prog, i) => (
        <section key={prog.id} style={{ padding: '5rem 0', background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)', position: 'relative', overflow: 'hidden' }}>
          {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />}
          <div className="section-container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <motion.div {...fadeUp(0)} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                
                <div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red)', background: 'rgba(230,25,54,0.08)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(230,25,54,0.2)' }}>{prog.tag}</span>
                </div>
              </motion.div>
              <motion.div {...fadeUp(0.05)}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.2, marginBottom: '1.5rem' }}>{prog.title}</h2>
                {prog.body.map((p, j) => <P key={j}>{p}</P>)}
                {prog.action && prog.action.internal && (
                  <Link to={prog.action.to} style={{ display: 'inline-block', marginTop: '0.75rem', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red)', border: '2px solid var(--red)', padding: '0.65rem 1.4rem', borderRadius: '4px', textDecoration: 'none' }}>
                    {prog.action.label}
                  </Link>
                )}
                {prog.steps && (
                  <motion.div {...fadeUp(0.08)} style={{ marginTop: '1.5rem', background: 'var(--white)', borderRadius: '12px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Program Süreci (10 Adım)</p>
                    <ol style={{ paddingLeft: '1.25rem', margin: 0 }}>
                      {prog.steps.map((step, j) => (
                        <li key={j} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.35rem' }}>{step}</li>
                      ))}
                    </ol>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
