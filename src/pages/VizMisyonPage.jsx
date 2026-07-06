import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const missionItems = [
  'Türkçe ve yabancı dilde eğitim veren okullar kurmak ve öğrencilerin barınmalarını sağlamak amacıyla yurtlar açmak',
  'Okullarında yüksek nitelikli öğrenciler yetiştirmek',
  'Maddi imkânı yeterli olmayan başarılı çocuklara ülke genelinde burslar vererek eğitimlerine devam etme olanağı tanımak',
  'Türk eğitim standartlarını çağdaş seviyelere taşıyacak bilimsel platformlar oluşturmak',
  'Araştırma projeleri ile eğitim sisteminin sorunları ve çözümleri üzerine toplumu bilinçlendirmek',
  'Türk eğitim politikasının oluşturulmasında söz sahibi olmak',
];

const values = [
  {
    emoji: '🇹🇷',
    title: "Atatürk'ün İzindeyiz",
    text: "Atatürk'ün ilke ve inkılaplarını rehber alarak Cumhuriyet'in değerlerini korumayı ve geliştirmeyi bir sorumluluk olarak görürüm. Çağdaş, demokratik ve sosyal bir düzenin önemine inanır; milli birlik ve beraberliği güçlendiren çağdaş bir milliyetçilik anlayışını benimserim. Öğrenmenin, üretmenin ve topluma katkı sağlamanın güçlü bir gelecek için temel olduğunun bilinciyle hem kendimi geliştirmeye hem de topluma değer katmaya çalışırım.",
  },
  {
    emoji: '🏆',
    title: "Gerçek Başarının Peşindeyiz",
    text: "Potansiyelimi ortaya çıkarmak, gelişimimi destekleyen hedefler belirlemek ve hem başarıya hem de mutluluğa ulaşmak için çalışırım. Kendine güvenen ve ilkeli bir birey olmayı; seçtiğim kariyer yolunda ürettiğim değerlerin karşılık bulduğu bir gelişim sürecinde ilerlemeyi hedeflerim. Ulaşılabilir hedefler belirlemeye ve güçlü akademik standartları sürdürmeye kararlıyım.",
  },
  {
    emoji: '⚖️',
    title: "Sorumluluk Sahibiyiz",
    text: "Eylemlerimin ve yarattığı etkinin sorumluluğuyla hareket ederim. Verdiğim sözleri dürüstlük ve güvenilirlikle yerine getiririm. Sürdürülebilir seçimler yaparak çevreyi korumak ve gezegenimizin geleceğini desteklemek için çalışırım. Yerel ve uluslararası kültürlere saygı duyar, çeşitliliği bir güç ve zenginlik kaynağı olarak görürüm.",
  },
  {
    emoji: '💛',
    title: "Özen Kültürünü Benimseriz",
    text: "Her koşulda şefkat, empati, nezaket ve saygıyla hareket ederim. Çevremdekileri dinler ve onlara destek olurum. Herkesin değer gördüğü, nazik, saygılı bir ortam oluşturmayı ve bu anlayışı yaşatmayı bir sorumluluk olarak görürüm. Küçük iyiliklerin hem kendi hayatımda hem de başkalarının hayatında kalıcı ve anlamlı etkiler yarattığına inanırım.",
  },
  {
    emoji: '🌐',
    title: "Çok Yönlüyüz",
    text: "Bilimsel, sanatsal ve sportif becerilerimi geliştirirken yaratıcı, üretken ve vizyoner bir bakış açısı geliştiririm. Sosyal ve akademik ortamlarda kendine güvenen ve vicdanlı; uluslararası platformlarda ise etkili bir temsil gücüne sahip olmayı hedefleyen ve bu doğrultuda çok dilliliği benimseyen bir birey olma yolunda ilerlerim. Zorluklara ve yeni durumlara hızla uyum sağlayarak esnek ve çok yönlü bir öğrenen olurum.",
  },
  {
    emoji: '⚖️',
    title: "Dengeliyiz",
    text: "Zamanımı bilinçli bir şekilde yönetirim, zorlayıcı anlarda sakinliğimi koruyarak içsel dengemi gözetirim. Hem dinlemeye özen gösterir hem de başkalarına saygıyla yaklaşarak harekete geçmeden önce düşünmeyi benimserim. Yaratıcılığımı ve mantığımı birlikte kullanırım; dijital iyi oluş ilkesini önemser ve teknolojiyi bilinçli kullanırım. Çalışmayı dinlenmeyle dengeleyerek hatalarımdan ders çıkarırım, gerçekçi hedefler belirler ve istikrarlı bir gelişime odaklanırım.",
  },
  {
    emoji: '🔍',
    title: "Sorgulayan Bireyleriz",
    text: "Bir konuyu yalnızca öğrenmekle yetinmem; onun \"neden\" ve \"nasıl\" olduğunu anlamak için merakla sorular sorarım. Bana sunulan bilgileri hemen kabul etmek yerine farklı bakış açılarını araştırır, olayların ardındaki gerçekleri anlamaya çalışırım. Akademik dürüstlük ilkelerini benimser; öğrenme sürecimde doğruluğu, sorumluluğu, özgünlüğü ve adil olmayı önemserim.",
  },
  {
    emoji: '🦁',
    title: "Cesaretliyiz",
    text: "Sınırlarımın dışına çıkmaktan ve yeni fikirler denemekten heyecan duyarım. Hata yapmaktan korkmak yerine, karşılaştığım sorunları çözmek için farklı ve yaratıcı yollar keşfederim. Yaşadığım her deneyimi bir ders gibi görür, aldığım geri bildirimlerle kendimi geliştirmeye odaklanırım. Benim için risk, kaçılması gereken bir engel değil, büyümemi ve öğrenmemi sağlayan en büyük fırsattır.",
  },
];

export default function VizMisyonPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(12,22,56,0.95) 0%, rgba(26,35,71,0.92) 55%, rgba(35,46,92,0.90) 100%), url(\'/gallery/anadolu lisesi/IMG_0822.jpeg\')',
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
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Vizyonumuz, Misyonumuz<br />ve Değerlerimiz
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Sürdürülebilir bir dünyaya hizmet eden, evrensel değerleri özümsemiş bireyler yetiştirme hedefimiz.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vizyon */}
      <section style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #0c1d38 0%, #0a1628 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(26,58,110,0.3) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.3)', maxWidth: '60px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)' }}>Vizyonumuz</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.3)', maxWidth: '60px' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
              Vizyonumuz
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))',
              border: '1px solid rgba(201,168,76,0.18)',
              borderLeft: '4px solid rgba(201,168,76,0.6)',
              borderRadius: '4px',
              padding: '2.5rem 3rem',
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.08rem', color: 'rgba(255,255,255,0.88)', lineHeight: 2, fontStyle: 'italic' }}>
                TED Rönesans Koleji olarak sürdürülebilir bir dünyaya hizmet etmeyi ilke edinmiş, evrensel değerleri özümsemiş, çoklu becerileriyle yaşamın her alanında fark edilen, bedensel ve ruhsal iyi oluş haliyle toplum için değer üreten, geleceğe dönüşümle uyumlanan bireyler yetiştirmek.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misyon */}
      <section style={{ padding: '7rem 0', background: 'var(--off-white)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Misyonumuz</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Türk Eğitim Derneği'nin Misyonu,<br /><span>Okulumuzun Misyonudur</span>
            </h2>
          </motion.div>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {missionItems.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}>
                <div style={{
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                  padding: '1.25rem 1.5rem', marginBottom: '0.75rem',
                  background: 'var(--white)', borderRadius: '10px',
                  border: '1px solid var(--grey-light)',
                  boxShadow: '0 2px 8px rgba(35,46,92,0.04)',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--grey-light)'; e.currentTarget.style.transform = ''; }}
                >
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'var(--primary)', color: '#fff', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800,
                    marginTop: '0.1rem',
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.75, margin: 0 }}>{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section style={{ padding: '7rem 0', background: 'var(--white)' }}>
        <div className="section-container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="red-line" />
              <span className="section-tag">Değerlerimiz</span>
              <div className="red-line" />
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Bizi <span>Tanımlayan Değerler</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', maxWidth: '520px', margin: '1rem auto 0', lineHeight: 1.85 }}>
              Kolej Sancaktepe öğrencisini şekillendiren sekiz temel değer.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="values-grid">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.06)}>
                <div style={{
                  background: 'var(--off-white)', borderRadius: '14px', padding: '2rem 2rem',
                  border: '1px solid var(--grey-light)', height: '100%',
                  boxShadow: '0 2px 12px rgba(35,46,92,0.05)',
                  transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(35,46,92,0.1)'; e.currentTarget.style.borderColor = 'var(--red)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(35,46,92,0.05)'; e.currentTarget.style.borderColor = 'var(--grey-light)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.6rem' }}>{v.emoji}</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', margin: 0 }}>{v.title}</h3>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.85, margin: 0 }}>{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
