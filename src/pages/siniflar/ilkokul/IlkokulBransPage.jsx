import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const P = ({ children }) => (
  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0.85rem' }}>{children}</p>
);

const BList = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem' }}>
    {items.map((it, i) => (
      <li key={i} style={{ display: 'flex', gap: '0.6rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.35rem' }}>
        <span style={{ color: 'var(--red)', flexShrink: 0 }}>•</span>{it}
      </li>
    ))}
  </ul>
);

const NumList = ({ items }) => (
  <ol style={{ paddingLeft: '1.2rem', margin: '0 0 0.85rem' }}>
    {items.map((it, i) => (
      <li key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.3rem' }}>{it}</li>
    ))}
  </ol>
);

const SubHeading = ({ children }) => (
  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginTop: '1.25rem', marginBottom: '0.6rem' }}>{children}</h4>
);

const SUBJECTS = [
  { id: 'turkce', icon: '📖', tag: 'Türkçe', color: '#2563eb' },
  { id: 'matematik', icon: '🔢', tag: 'Matematik', color: '#7c3aed' },
  { id: 'hayat-sosyal', icon: '🌍', tag: 'Hayat Bilgisi / Sosyal Bilgiler', color: '#059669' },
  { id: 'fen', icon: '🔬', tag: 'Fen Bilimleri', color: '#0891b2' },
  { id: 'bilisim', icon: '💻', tag: 'Bilişim Teknolojileri', color: '#7c3aed' },
  { id: 'ingilizce', icon: '🗣️', tag: 'İngilizce', color: '#f59e0b' },
  { id: 'ikinci-yabanci', icon: '🌐', tag: 'İkinci Yabancı Diller', color: '#db2777' },
  { id: 'gorsel-sanatlar', icon: '🎨', tag: 'Görsel Sanatlar', color: '#e61936' },
  { id: 'beden', icon: '⚽', tag: 'Beden Eğitimi', color: '#16a34a' },
  { id: 'muzik', icon: '🎵', tag: 'Müzik', color: '#db2777' },
  { id: 'din', icon: '📿', tag: 'Din Kültürü ve Ahlak Bilgisi', color: '#92400e' },
];

export default function IlkokulBransPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/ilkokul" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>İlkokul</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Branş Dersleri</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Branş Dersleri
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.55 }} style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {SUBJECTS.map((s) => (
              <a key={s.id} href={`#${s.id}`} style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.35rem 0.7rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
              >{s.icon} {s.tag}</a>
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      {/* TÜRKÇE */}
      <section id="turkce" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>📖</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2563eb', background: '#2563eb12', border: '1px solid #2563eb25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Türkçe</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Türkçe</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Türkçe derslerimizde tematik yaklaşım esas alınarak hazırlanan müfredatımızda okuma ve yazma kazanımları metin içi, metin dışı ve metinler arası okuma yoluyla anlam oluşturmayı sağlayacak şekilde yapılandırılmıştır. Birinci sınıftan dördüncü sınıfa kadar kazanımların yapısı ve hiyerarşisi, öğrencilerin temel dil becerilerinin yanı sıra üst düzey bilişsel becerilerini geliştirmelerine katkı sağlayacak şekilde düzenlenmiştir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginTop: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.75rem' }}>Amaçlar</p>
            <BList items={[
              'Dinleme/izleme, konuşma, okuma ve yazma becerilerinin geliştirilmesi',
              "Türkçeyi, konuşma ve yazma kurallarına uygun olarak bilinçli, doğru ve özenli kullanmalarının sağlanması",
              'Okuduğu, dinlediği/izlediğinden hareketle söz varlığını zenginleştirerek dil zevki ve bilincine ulaşmalarının sağlanması',
              'Okuma yazma sevgisi ve alışkanlığını kazanmalarının sağlanması',
              'Duygu ve düşüncelerini sözlü ve yazılı olarak etkili ve anlaşılır biçimde ifade etmelerinin sağlanması',
              'Bilgiyi araştırma, keşfetme, yorumlama ve zihinde yapılandırma becerilerinin geliştirilmesi',
              'Basılı materyaller ile çoklu medya kaynaklarından bilgiye erişme ve üretme becerilerinin geliştirilmesi',
              'Okuduklarını anlayarak eleştirel bir bakış açısıyla değerlendirmelerinin sağlanması',
              'Millî, manevî, ahlaki, tarihî, kültürel, sosyal değerlere önem vermelerinin sağlanması',
              'Türk ve dünya kültür ve sanatına ait eserler aracılığıyla estetik ve sanatsal değerleri benimsemelerinin sağlanması',
            ]} />
          </motion.div>
        </div></div>
      </section>

      {/* MATEMATİK */}
      <section id="matematik" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🔢</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c3aed', background: '#7c3aed12', border: '1px solid #7c3aed25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Matematik</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Matematik</motion.h2>
          <motion.div {...fadeUp(0.06)}><P>Matematik dersi müfredatımızı aşağıdaki hedefler doğrultusunda gerçekleştirmekteyiz.</P></motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.75rem' }}>Öğrenci Kazanımları</p>
            <NumList items={[
              'Matematiksel okuryazarlık becerilerini geliştirebilecek ve etkin bir şekilde kullanabilecektir.',
              'Matematiksel kavramları anlayabilecek, bu kavramları günlük hayatta kullanabilecektir.',
              'Problem çözme sürecinde kendi düşünce ve akıl yürütmelerini rahatlıkla ifade edebilecektir.',
              'Matematiksel düşüncelerini mantıklı açıklamak ve paylaşmak için terminolojiyi doğru kullanabilecektir.',
              'Matematiğin anlam ve dilini kullanarak ilişkileri anlamlandırabilecektir.',
              'Üst bilişsel bilgi ve becerilerini geliştirebilecek, öğrenme süreçlerini bilinçli yönetebilecektir.',
              'Tahmin etme ve zihinden işlem yapma becerilerini etkin kullanabilecektir.',
              'Kavramları farklı temsil biçimleri ile ifade edebilecektir.',
              'Matematiksel problemlere öz güvenli bir yaklaşım geliştirecektir.',
              'Sistemli, dikkatli, sabırlı ve sorumlu olma özelliklerini geliştirebilecektir.',
              'Araştırma yapma, bilgi üretme ve kullanma becerilerini geliştirebilecektir.',
              "Matematiğin sanat ve estetikle ilişkisini fark edebilecektir.",
              "Matematiğin insanlığın ortak bir değeri olduğunun bilincinde olarak matematiğe değer verecektir.",
            ]} />
          </motion.div>
        </div></div>
      </section>

      {/* HAYAT BİLGİSİ / SOSYAL BİLGİLER */}
      <section id="hayat-sosyal" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🌍</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#059669', background: '#05966912', border: '1px solid #05966925', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Hayat Bilgisi / Sosyal Bilgiler</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Hayat Bilgisi ve Sosyal Bilgiler</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Programın asıl amacı; temel yaşam becerilerine sahip, kendini tanıyan, sağlıklı ve güvenli bir yaşam süren, yaşadığı toplumun değerlerini özümseyen, doğaya ve çevreye duyarlı, araştıran, üreten ve ülkesini seven bireyler yetiştirmektir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.5rem' }}>
            <SubHeading>Hayat Bilgisi Kazanımları</SubHeading>
            <BList items={[
              'Kendini ve yaşadığı çevreyi tanır', 'Aile ve toplumun temel değerlerine sahip olur',
              'Millî, manevî ve insani değerleri yaşantısal hâle getirir', 'Kişisel gelişim için gerekenlerin farkında olur',
              'Kişisel bakım becerilerini geliştirir', 'Sağlıklı ve güvenli yaşam sürme bilinci edinir',
              'Sosyal katılım becerisi kazanır', 'Zamanı ve mekânı algılama becerisi edinir',
              'Kaynakları verimli kullanma becerisi geliştirir', 'Öğrenmeyi öğrenme becerisi kazanır',
              'Temel düzeyde bilimsel süreç becerilerini kazanır',
              'Ülkesini sever, tarihî ve kültürel değerlerini yaşatmaya istekli olur',
              'Doğaya ve çevreye karşı duyarlı olur', 'Bilgi ve iletişim teknolojilerini amacına uygun kullanır',
            ]} />
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Sosyal Bilgiler Kazanımları</SubHeading>
            <BList items={[
              'Vatanını ve milletini seven, haklarını bilen ve kullanan, sorumluluklarını yerine getiren vatandaşlar olarak yetişmeleri',
              "Atatürk ilke ve inkılaplarının yerini kavrayıp demokratik, laik, millî ve çağdaş değerleri yaşatmaya istekli olmaları",
              'Türk kültürünü ve tarihini oluşturan temel öge ve süreçleri kavrayarak millî bilincin oluşmasına katkı sağlamaları',
              'Millî, manevî ve evrensel değerleri benimseyerek erdemli insan olmanın önemini bilmeleri',
              'Doğal çevrenin ve kaynakların sınırlılığının farkına vararak sürdürülebilir çevre anlayışına sahip olmaları',
              'Eleştirel düşünme becerisine sahip olmaları',
              "Bilim ve teknolojinin gelişim sürecini kavrayarak bilgi ve iletişim teknolojilerini bilinçli kullanmaları",
              "Katılımın önemine inanmaları, kişisel ve toplumsal sorunların çözümü için görüş belirtmeleri",
            ]} />
          </motion.div>
        </div></div>
      </section>

      {/* FEN BİLİMLERİ */}
      <section id="fen" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🔬</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0891b2', background: '#0891b212', border: '1px solid #0891b225', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Fen Bilimleri</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Fen Bilimleri</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Bütün bireylerin fen okuryazarı olarak yetişmesini amaçlayan Fen Bilimleri dersi öğretim programının temel amacı; doğanın keşfedilmesi, bilimsel düşünme alışkanlıklarının kazandırılması ve günlük yaşam sorunlarına yönelik çözüm becerilerinin geliştirilmesidir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <BList items={[
              'Astronomi, biyoloji, fizik, kimya, yer ve çevre bilimleri ile fen ve mühendislik uygulamaları hakkında temel bilgiler kazandırmak',
              'Bilimsel süreç becerileri ve bilimsel araştırma yaklaşımını benimseyip sorunlara çözüm üretmek',
              'Birey, çevre ve toplum arasındaki karşılıklı etkileşimi fark ettirmek; sürdürülebilir kalkınma bilincini geliştirmek',
              'Fen bilimleri ile ilgili kariyer bilinci ve girişimcilik becerilerini geliştirmek',
              'Doğada ve yakın çevresinde meydana gelen olaylara ilişkin ilgi ve merak uyandırmak',
              'Sosyobilimsel konuları kullanarak muhakeme yeteneği ve karar verme becerileri geliştirmek',
            ]} />
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.75rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Yaşam Becerileri</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Analitik düşünme', 'Karar verme', 'Yaratıcı düşünme', 'Girişimcilik', 'İletişim', 'Takım çalışması'].map((s, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0891b2', background: '#0891b20f', border: '1px solid #0891b225', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{s}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.87rem', color: 'var(--text-mid)', lineHeight: 1.8, marginTop: '1rem' }}>
              Keşif Atölyesi etkinliklerimizle Fen Bilimleri deneylerimizi 1. sınıftan 4. sınıfa kadar gerçekleştirmekteyiz.
            </p>
          </motion.div>
        </div></div>
      </section>

      {/* BİLİŞİM TEKNOLOJİLERİ */}
      <section id="bilisim" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>💻</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7c3aed', background: '#7c3aed12', border: '1px solid #7c3aed25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Bilişim Teknolojileri</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Bilişim Teknolojileri</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Bilişim Teknolojileri bölümünün temel hedefi; değişen teknolojiye uyum sağlayabilen ve kendini yenileyebilen bilgi toplumunda yerini alabilecek bireyler yetiştirmektir. İlkokul 1–4. sınıflarda haftada bir saat olan ders, öğrenci merkezli bir yaklaşımla Türkçe yürütülmektedir.</P>
            <P>Her öğrenciye bir bilgisayar düşecek şekilde MacOS işletim sistemli Mac Laboratuvarı ve Windows işletim sistemli PC Laboratuvarı kullanılmaktadır. Kulüp saatinde Maker ve Kodlama Kulübü, Dijital Oyun Geliştirme Kulübü, Lego Robotik Kulübü gibi teknoloji kulüpleri mevcuttur.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubHeading>Ders Hedefleri</SubHeading>
            <BList items={[
              'Teknolojiyi yakından tanıyıp etkili ve verimli kullanabilme',
              'Bilgisayarın temel donanım parçalarını tanıma',
              "Bilgisayarların, makinelerin ve robotların çalışma mantığını anlama",
              "İnterneti yaş grubuna uygun şekilde kullanabilme ve doğru bilgiye ulaşma",
              'Dijital vatandaşlık ilkelerine uyarak teknoloji ile iletişim kurabilme',
              'Resim, kelime işlem, sunum, tablolama programlarını amaca uygun kullanabilme',
              'Tasarım odaklı düşünerek çeşitli programlarda ürün geliştirme',
              'Algoritmik düşünme ve problem çözme becerilerinin kazandırılması',
              'Blok tabanlı ve basit metin tabanlı programlama ile projeler geliştirebilme',
              'Robotik materyaller ile temel kodlama eğitimi',
            ]} />
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <SubHeading>Katılınan Etkinlikler</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Avrupa Kodlama Haftası', 'Kodlama Saati', 'Güvenli İnternet Günü', 'Bilişim Haftası', 'Scratch Günü', 'MakeX Robot Turnuvası', 'Kodu Cup Türkiye', 'jrFLL'].map((ev, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#7c3aed', background: '#7c3aed0f', border: '1px solid #7c3aed25', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{ev}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* İNGİLİZCE */}
      <section id="ingilizce" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🗣️</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f59e0b', background: '#f59e0b12', border: '1px solid #f59e0b25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>İngilizce</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>İngilizce</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Kolej Sancaktepe'de uyguladığımız eğitim-öğretim programına uluslararası standartlar yön verir ve her bir sınıf seviyesi; çocuğun sosyal, fiziksel, zihinsel ve duygusal gelişimini destekleyecek şekilde yapılandırılır. İlk yıllar programımız, İngilizce becerilerinin gelişimini en üst düzeye çıkarmak için tematik yaklaşımın yanı sıra ses bilgisine dayalı bir müfredat içerir.</P>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem', margin: '1.25rem 0' }} className="ing-cards">
            {[
              { label: '1. Sınıf', body: 'Yedi aşama gözden geçirilir, alternatif yazımlar ve dikkat isteyen sözcükler işlenir. Öğrenciler kendi seviyelerine göre kitap okumaya devam eder.' },
              { label: '2–4. Sınıflar', body: 'Temel okuma ve yazma becerileri; konuşma ve dinleme becerileriyle birlikte okuma-yazma programımız ve tematik ünitelerimiz aracılığıyla geliştirilir.' },
              { label: 'Uluslararası Sınavlar', body: 'Cambridge Young Learners Sınavları: 2. sınıfta Starters, 3. sınıfta Movers, 4. sınıfta Flyers. Bu sınavlar öğrencileri motive etmede önemli rol oynar.' },
            ].map((c, i) => (
              <motion.div key={i} {...fadeUp(0.08 + i * 0.04)}>
                <div style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem 1.5rem', border: '1px solid var(--grey-light)', height: '100%' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '0.5rem' }}>{c.label}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem 1.75rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Yeni Gelen Öğrencilere Destek</SubHeading>
            <P>Okula yeni gelen öğrencilere, özellikle İngilizce bilgisi az olan öğrencilere destek olmak amacıyla bütün sınıf seviyelerinde kapsamlı ve farklılaştırılmış bir destek programı mevcuttur. Öğrencilerin bireysel ihtiyaçları RAZ Kids ve MyOn adlı dijital öğrenme platformlarının yardımıyla da karşılanır.</P>
          </motion.div>
        </div></div>
      </section>

      {/* İKİNCİ YABANCI DİL */}
      <section id="ikinci-yabanci" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🌐</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#db2777', background: '#db277712', border: '1px solid #db277725', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>İkinci Yabancı Diller</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>İkinci Yabancı Diller</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Kolej Sancaktepe'de öğrencilerimiz, İkinci Yabancı Dil öğrenimine Almanca, Fransızca, İspanyolca ya da Rusça dillerinden birini tercih ederek 4. sınıftan itibaren başlar ve 12. sınıfın sonuna kadar seçtikleri bu dilde devam ederler.</P>
            <P>İkinci Yabancı Dil programımız Avrupa Diller Ortak Çerçeve Programı'na (A1-A2, B1-B2, C1-C2) uygun olarak hazırlanmıştır. Öğrencilerin bu programın kapsamında belirlenen A2 seviyesine ulaşmaları amaçlanır.</P>
            <P>Öğrencilerimizin dünyaca tanınan DELF (Fransızca), DELE (İspanyolca), FIT (Almanca) ve TORFL (Rusça) sınavlarına girmeleri için olanak oluşturulur.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.25rem 1.75rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Bölüm Etkinlikleri</SubHeading>
            <P>Playback Video Clip Yarışması, Türkiye çapında açık geleneksel bir etkinliğimizdir. Öğrencilerimizin yabancı dil öğrenim süreçlerinde motivasyonlarını artırmayı hedeflemektedir.</P>
          </motion.div>
        </div></div>
      </section>

      {/* GÖRSEL SANATLAR */}
      <section id="gorsel-sanatlar" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🎨</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e61936', background: '#e6193612', border: '1px solid #e6193625', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Görsel Sanatlar</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Görsel Sanatlar</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Kolej Sancaktepe'nin çok yönlü ve kapsamlı eğitim sisteminde sanat merkezde yer alan bir bileşendir. Amacımız sanat eğitimiyle araştıran, sorgulayan, bilgili ve duyarlı gençler yetiştirmektir.</P>
            <P>Görsel Sanatlar derslerimizde resim, baskı, seramik, ebru ve üç boyutlu çalışmalarla öğrencilerimize farklı teknikleri deneyimleme olanağı sunan disiplinler arası bir program yapılandırılmıştır. Farklı malzeme ve teknikler öğrenen öğrencilerimizin düşünme ve karar verme becerileri gelişir.</P>
            <P>Görsel sanatlar dersinde ölçme ve değerlendirme süreci öğrenci merkezli ele alınır. Her öğrenci kendi başlangıç ve gelişim düzeyine göre değerlendirilir.</P>
            <P>Her yıl düzenlenen ARTED Sanat Gününde öğrencilerimiz plastik sanatların farklı alanlarında atölyelere katılarak hem deneyim kazanırlar hem de eğlenceli bir gün geçirirler.</P>
          </motion.div>
        </div></div>
      </section>

      {/* BEDEN EĞİTİMİ */}
      <section id="beden" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>⚽</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#16a34a', background: '#16a34a12', border: '1px solid #16a34a25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Beden Eğitimi</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Beden Eğitimi</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>K12 bütünlüğünde Beden Eğitimi Bölümü olarak sporu yaşam felsefesi haline getirmeyi kendine amaç edinen, sportif yaşam hedeflerine ulaşan bireyler yetiştirmeyi hedefliyoruz.</P>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.25rem' }} className="beden-grid">
            <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem', border: '1px solid var(--grey-light)' }}>
              <SubHeading>1–3. Sınıf Ders İçeriği</SubHeading>
              <NumList items={['Beden Eğitimi ve Spor Bilgisi', 'Okul Takımları oluşum süreci', 'Performans Uygulamaları', 'Düzen Alıştırmaları', 'Yer Değiştirme Hareketleri', 'Dengeleme Hareketleri', 'Nesne Kontrolü Gerektiren Hareketler', 'Birleşmiş Temel Beceri Hareketleri', 'SPORTED ve Eğlenceli Spor Etkinlikleri']} />
            </motion.div>
            <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem', border: '1px solid var(--grey-light)' }}>
              <SubHeading>4. Sınıf ve Spor Şöleni</SubHeading>
              <NumList items={['Basketbol Branşı', 'Voleybol Branşı', 'Temel Motor Becerileri', 'Hentbol Branşı', 'Tenis Branşı', 'Oryantiring Branşı', 'Badminton Branşı', 'SPORTED ve Eğlenceli Spor Etkinlikleri']} />
            </motion.div>
          </div>
        </div></div>
      </section>

      {/* MÜZİK */}
      <section id="muzik" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🎵</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#db2777', background: '#db277712', border: '1px solid #db277725', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Müzik</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Müzik Eğitimi</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Müzik bölümünün amacı; okul öncesinden başlayarak öğrencilerimizin müzik yoluyla estetik yönünü, müziksel algı ve bilgilerini geliştirmek, yetenek ve yaratıcılıklarını geliştirici müzik etkinliklerine katılmalarına olanak sağlamaktır.</P>
            <P>1–3. sınıf düzeyinde MEB müfredat konularıyla birlikte temel müzik bilgileri, Orff yaklaşımlı eğitim ve koro çalışmaları planlanır. 4. sınıf düzeyinde temel müzik bilgileri ve enstrüman tanıma çalışmaları uygulanır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem 1.75rem', border: '1px solid var(--grey-light)' }}>
            <SubHeading>Etkinlikler</SubHeading>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Okul Korosu', "Okul Çalgıları Dinletisi", 'Sokak Çalgıcıları Festivali'].map((ev, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#db2777', background: '#db27770f', border: '1px solid #db277725', borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{ev}</span>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* DİN KÜLTÜRÜ */}
      <section id="din" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>📿</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#92400e', background: '#92400e12', border: '1px solid #92400e25', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>Din Kültürü ve Ahlak Bilgisi</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Din Kültürü ve Ahlak Bilgisi</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>İlkokulda Din Kültürü ve Ahlâk Bilgisi dersimiz, millî eğitimin genel amaçları ve dersin özel amaçları üzerine kurulmuş bir programla yürütülmekte; program bilgi, beceri ve değer kazandırmayı hedeflemektedir.</P>
            <P>Bu programla öğrencilerimizin aklın ve bilimin ışığında insani, ahlaki değerleri bilen ve içselleştiren, kendi dinini tanıyan ve başka dinlere karşı saygılı, anlayışlı ve hoşgörülü olan; beden, zihin ve ahlâk bakımından sağlıklı, dengeli bireyler olarak yetişmeleri amaçlanmaktadır. Dersimizde hedeflenen kazanımlar, öğrencilerimize öğrenci merkezli yaklaşımlarla kazandırılır.</P>
          </motion.div>
        </div></div>
      </section>

      <style>{`
        @media (max-width: 700px) { .ing-cards { grid-template-columns: 1fr !important; } .beden-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
