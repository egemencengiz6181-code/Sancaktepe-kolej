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

const SubH = ({ children }) => (
  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.65rem' }}>{children}</h4>
);

const Tag = ({ label, color, bg, border }) => (
  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color, background: bg, border: `1px solid ${border}`, padding: '0.2rem 0.55rem', borderRadius: '4px' }}>{label}</span>
);

const Chip = ({ label, color, bg, border }) => (
  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color, background: bg, border: `1px solid ${border}`, borderRadius: '4px', padding: '0.3rem 0.65rem' }}>{label}</span>
);

const SUBJECTS = [
  { id: 'turk-dili', icon: '📖', tag: 'Türk Dili ve Edebiyatı', color: '#2563eb' },
  { id: 'matematik', icon: '🔢', tag: 'Matematik', color: '#7c3aed' },
  { id: 'fen-bilimleri', icon: '🔬', tag: 'Fen Bilimleri', color: '#0891b2' },
  { id: 'sosyal-bilimler', icon: '🌍', tag: 'Sosyal Bilimler', color: '#059669' },
  { id: 'bilisim', icon: '💻', tag: 'Bilişim Teknolojileri', color: '#7c3aed' },
  { id: 'yabanci-dil', icon: '🗣️', tag: 'Yabancı Dil', color: '#f59e0b' },
  { id: 'ikinci-yabanci', icon: '🌐', tag: 'İkinci Yabancı Diller', color: '#db2777' },
  { id: 'gorsel-sanatlar', icon: '🎨', tag: 'Görsel Sanatlar', color: '#e61936' },
  { id: 'beden', icon: '⚽', tag: 'Beden Eğitimi', color: '#16a34a' },
  { id: 'muzik', icon: '🎵', tag: 'Müzik Eğitimi', color: '#db2777' },
];

export default function LiseAkademikBolumlerPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0d1530 0%, #232e5c 60%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/lise" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Lise</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Akademik Bölümler</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Akademik Bölümler
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

      {/* TÜRK DİLİ VE EDEBİYATI */}
      <section id="turk-dili" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>📖</span>
            <Tag label="Türk Dili ve Edebiyatı" color="#2563eb" bg="#2563eb12" border="#2563eb25" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Türk Dili ve Edebiyatı</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Türk Dili ve Edebiyatı dersleri "aktif öğrenme ve öğretme" ilkesine göre işlenmektedir. Yöntem, öğrenciye sadece bilgi vermekle kalmayıp aynı zamanda öğrencinin iş birliği yapma, tartışma yeteneklerini ve sosyal ilişkilerini de geliştirebilmelidir.</P>
            <P>Lise seviyesinde Türk Dili ve Edebiyatı dersi, öğrencilerin Türk ve Dünya Edebiyatından farklı isimleri ve türleri tanımasına imkân verecek eserler üzerinden metin odaklı olarak işlenmektedir. Bilgiyi kullanma ve tartışma, anlatma-yazma için zaman ayrılır; derslerin planlanması buna göre yapılır. Metinler arası ilişki kurma çalışmaları düzeylere göre aşamalandırılarak uygulanır. Derslerde tiyatro, sinema, dergi, sergi gibi sanat çalışmalarına yer verilerek öğrencilerin kültürel gelişimi desteklenir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>Yöntemler</SubH>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['Soru-Cevap', 'Proje', 'Grup Çalışmaları', 'Gezi-Gözlem', 'Tartışma', 'Problem Çözme', 'Drama', 'Sunum', 'Hazırlıklı/Hazırlıksız Konuşma', 'Farklılaştırma'].map((m, i) => (
                <Chip key={i} label={m} color="#2563eb" bg="#2563eb0f" border="#2563eb25" />
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>Kullanılan Kaynaklar</SubH>
            <BList items={[
              'MEB ders kitabı ve soru bankaları', 'Konu bazında yaprak testler',
              'TDK Türkçe Sözlük, Yazım Kılavuzu, Atasözü ve Deyimler Sözlüğü',
              'Ders sunumları, eser inceleme ve ders notu kitapçıkları',
              'Akademik makaleler ve eğitim teknolojisi ürünleri',
              'Güdümlü okuma kitapları',
            ]} />
          </motion.div>
          <motion.div {...fadeUp(0.12)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubH>Kütüphane ve Okuma Kültürü</SubH>
            <P>Bölüm olarak tüm öğrencilerimizin kütüphaneyi kullanma alışkanlığı kazanmasını çok önemsiyor ve bazı derslerimizi okul kütüphanemizde yaparak öğrencilerimize araştırma yöntemlerini öğretmeye, kütüphaneden yararlanma alışkanlığı kazandırmaya çalışıyoruz. Öğrencilerimiz okul kütüphanemizde istedikleri pek çok süreli ve süresiz yayına ulaşabilirler.</P>
            <SubH>Bölüm Etkinlikleri</SubH>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['Yazma Yarışmaları', 'Kitap Haftası Etkinlikleri', 'Kütüphane Gezileri'].map((m, i) => (
                <Chip key={i} label={m} color="#2563eb" bg="#2563eb0f" border="#2563eb25" />
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* MATEMATİK */}
      <section id="matematik" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🔢</span>
            <Tag label="Matematik" color="#7c3aed" bg="#7c3aed12" border="#7c3aed25" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Matematik</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Matematik bölümünün genel amacı, öğrencilerin akıl yürütme, eleştirel düşünme, analitik düşünme, tahmin etme ve problem çözme becerilerini geliştirmeye yönelik etkinlik ve çalışmalar yapmak, bu çalışmalar ile geleceğe yetkin insan yetiştirmektir.</P>
            <P>Lise Hazırlık sınıfında, 9. sınıf matematik derslerine temel sağlayacak tüm konuların İngilizcesi verilmekte, öğrencilerin İngilizce olarak matematik dersini takip edebilmeleri sağlanmaktadır. Lise 9. ve 10. sınıflarında matematik dersleri İngilizce okutulmaktadır. (AP programına dahil olan 11. ve 12. sınıf öğrencileri dersleri İngilizce görmeye devam etmektedir.) Programımız Millî Eğitim Bakanlığı'nın öngördüğü müfredat ile uyumludur.</P>
            <P>Ders tasarımlarında farklılaştırılmış öğretim etkinlikleri, disiplinler arası tematik etkinlikler, soru-cevap etkinlikleri, teknoloji ile zenginleştirilmiş etkinlikler, ulusal ve uluslararası yarışma ve projeler kapsamında beceri tabanlı çalışmalara yer verilir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>Uluslararası Yarışmalar</SubH>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
              {[
                { sınıf: '9. Sınıflar', yarışma: 'Pascal Matematik Yarışması' },
                { sınıf: '10. Sınıflar', yarışma: 'Cayley Matematik Yarışması' },
              ].map((r, i) => (
                <div key={i} style={{ background: 'var(--white)', borderRadius: '8px', padding: '1rem 1.25rem', border: '1px solid var(--grey-light)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '0.3rem' }}>{r.sınıf}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', margin: 0 }}>{r.yarışma}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>TÜBİTAK Proje Çalışmaları</SubH>
            <P>Ortaokul ve lise öğrencilerimizden TÜBİTAK projesi üzerine çalışmaya istekli öğrencilerimiz ile yürütülen çalışmalar doğrultusunda proje yarışmalarına katılım gösterilmektedir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.12)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>Lise Matematik Takımı</SubH>
            <P>Her akademik yılın başında yapılan duyuru sonrasında matematik takımına katılmak isteyen öğrencilerle gerçekleştirilen takım seçmeleri sonucunda matematik takımımız oluşturulmaktadır.</P>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--primary)', margin: '0.75rem 0 0.5rem' }}>Matematik Takımı Yarışmaları</p>
            <NumList items={[
              'Urfodu — Uluslararası Bilim Temelli Bilgi Yarışması',
              'Türkiye Zeka Oyunları Yarışması',
              'Geleneksel Liseler Arası Matematik Yarışması',
            ]} />
          </motion.div>
          <motion.div {...fadeUp(0.14)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>Okul İçi Etkinlikler</SubH>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['Akıl Oyunları Turnuvası (Okul Geneli)', 'Matematik Etkinlikleri (Okul Geneli)', 'Konuk Daveti (Okul Geneli)'].map((m, i) => (
                <Chip key={i} label={m} color="#7c3aed" bg="#7c3aed0f" border="#7c3aed25" />
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.16)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubH>Akademik Geziler</SubH>
            <BList items={[
              '8. sınıflar — Lise hazırlık — 9. sınıflar: Şirince Matematik Köyü (iki yılda bir)',
              '9. sınıflar: Aydın Tales Matematik Müzesi (iki yılda bir)',
            ]} />
          </motion.div>
        </div></div>
      </section>

      {/* FEN BİLİMLERİ */}
      <section id="fen-bilimleri" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🔬</span>
            <Tag label="Fen Bilimleri" color="#0891b2" bg="#0891b212" border="#0891b225" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Fen Bilimleri</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Fen Bilimleri bölümünün genel amacı, tüm öğrencilerin; laboratuvar araç gereçlerini kullanabilen, bilimsel yöntemler kullanarak araştırmalar yapabilen, yaptığı araştırmaları yorumlayabilen, bilimsel sözcük dağarcığını kullanarak bilimsel bilgileri açıklayabilen, fen ve teknoloji arasındaki ilişkiyi kavrayıp disiplinler arası ürünler oluşturabilen, analitik düşünebilen, çevresindeki olayları gözlemleyip doğru bilgilere ulaşabilen, bilimsel makaleleri ve teknolojik gelişmeleri takip eden, yorumlayabilen, evrensel bir bakış açısına sahip öğrenciler yetiştirmektir.</P>
            <P>Sene içerisinde uygulanan öğrenci merkezli tüm deney ve aktiviteler onların yaşamsal ihtiyaçları doğrultusunda tasarlanır. Bu tasarımlarla kurgulanan derslerimizde öğrencilerimizin araştıran, sorgulayan, eleştirel düşünen, problem çözen ve karar veren, yaşam boyu öğrenen, çevreleri ve dünya ile ilgili merak duygularını canlı tutan bireyler olarak yetişmesine hizmet edilir.</P>
            <P>Lise 9. ve 10. sınıflarında fizik, kimya ve biyoloji dersleri İngilizce okutulmaktadır. (AP programına dahil olan 11. ve 12. sınıf öğrencileri dersleri İngilizce görmeye devam etmektedir.) Derslerimiz deneysel çalışmalara yer vermek amacıyla laboratuvarlarda yapılmaktadır.</P>
            <P>Fen öğretimi aktif öğrenme ve öğretme ilkesine göre işlenmektedir. Yöntem, öğrenciye sadece bilgi vermekle kalmayıp, aynı zamanda öğrencinin işbirliği yapma, tartışma yeteneklerini ve sosyal ilişkilerini de geliştirebilmelidir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>Öğretim Yöntemleri</SubH>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['Soru-Cevap', 'Proje', 'Laboratuvar Çalışmaları', '3D Laboratuvar', 'Sınıf İçi Deneysel Gösteri', 'Gezi-Gözlem', 'Tartışma', 'Problem Çözme', 'Drama'].map((m, i) => (
                <Chip key={i} label={m} color="#0891b2" bg="#0891b20f" border="#0891b225" />
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubH>Ölçme ve Değerlendirme</SubH>
            <P>Tüm öğrencilerin okul içi ve okul dışı uygulanan deneme sınav sonuçları ve ders sınav sonuçları analiz edilir. Her öğrencinin gelişimi istatistiksel olarak takip edilir ve kayıt altına alınır. Öğrenci durumları görüşülerek gerekli tedbirler alınır.</P>
          </motion.div>
        </div></div>
      </section>

      {/* SOSYAL BİLİMLER */}
      <section id="sosyal-bilimler" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🌍</span>
            <Tag label="Sosyal Bilimler" color="#059669" bg="#05966912" border="#05966925" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Sosyal Bilimler</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Sosyal Bilimler geçmişten günümüze insanın kendini ve yaşadığı çevreyi farklı alanlarda anlayarak, özümseyerek yaşama karşı bir duruş kazanması ve bunu değişen yaşam koşullarına uygun bir şekilde geliştirerek bir yaşam biçimine dönüştürmesi adına eşsiz bir öneme sahiptir.</P>
            <P>Aydınlanma Çağı'nda önemi artan sosyal bilimlerin, sanayi devrimi sonrası meydana gelen toplumsal, siyasal, ekonomik değişim süreçlerinin bir sonucu olarak farklı yöntemlerle bilim dünyasında yerini daha da sağlamlaştırmasını gerektirmiştir. Bu bağlamda her bir sosyal bilimler dalı kendi yöntem ve teknikleriyle bilim ve bilgi dünyasında üretken, kurumsal, gerçekçi bir yapıda gelişimini sürdürmüştür.</P>
            <P>Bu noktadan hareketle öğrencilerimizin yaşadığı dünyayı farklı açılardan en iyi şekilde anlaması ve özümsemesi için modern, sorgulayıcı, araştırmacı bakış açısıyla yetişmeleri sosyal bilimler bölümünün temel anlayışı olmuştur.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubH>Bölüm Çalışmalarıyla Öğrencilerimizin Kazanımları</SubH>
            <BList items={[
              "Atatürk ilke ve inkılaplarına, demokratik değerlere ve insan haklarına saygılı",
              "Geçmişten günümüze meydana gelmiş toplumsal olayları anlayan, yorumlayabilen ve ilişkilendirebilen",
              "Günümüzde meydana gelen ve geleceği etkileyen önemli olayları kavrayabilen",
              "Doğaya, insana saygı duyan, çevre bilincine sahip, ulusal ve kültürel değerlerini bilen",
              "Hoşgörü, özgür düşünce ile eleştirel ve analitik düşünebilme, tartışma, analiz etme, yorumlama özelliklerine sahip",
              "Sorun çözme ve karar verme becerileri gelişmiş",
              "İletişimin insan ve toplum hayatındaki önemini kavramış",
              "Bilimsel araştırmaların özelliklerini ve önemini bilen, okuyan ve araştıran",
              "Ülke ve dünya sorunlarına duyarlı, çözüm üretebilen, objektif bakış açısına sahip",
              "İnsan ve toplum hayatında var olan değişim ve gelişimin sürekliliğini fark ederek buna uyum sağlayan, değişime açık bireyler",
            ]} />
          </motion.div>
        </div></div>
      </section>

      {/* BİLİŞİM TEKNOLOJİLERİ */}
      <section id="bilisim" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>💻</span>
            <Tag label="Bilişim Teknolojileri" color="#7c3aed" bg="#7c3aed12" border="#7c3aed25" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Bilişim Teknolojileri</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Bilişim Teknolojileri bölümünün temel hedefi, değişen teknolojiye uyum sağlayabilen ve kendini yenileyebilen bilgi toplumunda yerini alabilecek bireyler yetiştirmektir. Öğrencilerimizin teknolojiyi yaratıcılıklarıyla aktif ve çok yönlü olarak kullanmalarını sağlamak amaçlanmaktadır.</P>
            <P>Lisede Hazırlık sınıfında Bilgisayar Bilimi dersinde bilişim teknolojileri, etik ve güvenlik, algoritma, akış diyagramları, programlama, robotik, animasyon, web sitesi oluşturma gibi konular öğrenci merkezli bir yaklaşımla ele alınmaktadır. 9. ve 10. sınıflarda seçmeli BTEC IT ve BTEC WEB dersleri iki kur şeklinde yapılmaktadır. Gelecek dönemde 11. ve 12. sınıflarda seçmeli olarak Grafik ve Animasyon, Nesne Tabanlı Programlama 1-2, Web Sayfası Hazırlama gibi derslerin yanında 11. sınıflarda AP Computer Science dersi yapılacaktır.</P>
            <P>Her öğrenciye bir bilgisayar düşecek şekilde Windows işletim sistemli bilgisayarlardan oluşan PC Laboratuvarı ve Chromebook'lar kullanılmaktadır. Haftada iki saat olan kulüp saatinde Maker ve Robotik Kulübü etkinliklerinde öğrenciler teknoloji ile üretmenin önemini deneyimler. Gelecek yıllarda ders ve kulüp çalışmalarına yapay zeka projelerinin entegre edilmesi hedeflenmektedir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>Lise Seviyesinde Bilişim Teknolojileri Dersi Hedefleri</SubH>
            <BList items={[
              'Teknolojiyi yakından tanıyıp etkili ve verimli kullanabilme',
              'Bilgisayarın donanımını ve yazılımını tanıma',
              'Bilgisayarların, makinelerin ve robotların çalışma mantığını anlama',
              'İnternet güvenliği, siber zorbalık, bilişim etiği gibi kavramları öğrenme',
              'Dijital vatandaşlık ilkelerine uyan bir birey olabilme',
              'Resim, kelime işlem, sunum, tablolama programlarını amaca uygun kullanabilme',
              'Bulut bilişim kavramını öğrenerek Google eğitim araçlarını kullanabilme',
              'Grafik, video ve animasyon programlarını kullanabilme',
              'Tasarım odaklı düşünerek çeşitli programlarda ürün geliştirme',
              'Analitik düşünme, algoritmik düşünme ve problem çözme becerilerinin kazandırılması',
              'Metin tabanlı programlama dillerini öğrenip projeler geliştirebilme',
              'Bir probleme çözüm olabilecek nitelikte ürün geliştirebilme',
              'Robotik materyaller ve seviyelere göre uygulamalarla kodlama eğitimi',
            ]} />
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubH>Lise Öğrencilerinin Katıldığı Etkinlikler</SubH>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['Avrupa Kodlama Haftası', 'Kodlama Saati', 'Güvenli İnternet Günü', 'TÜBİTAK Ortaöğretim Araştırma Projeleri Yarışması', 'Bilişim Haftası', 'Okul Maker Faire', 'TTGV Yarını İnşa Et Proje Yarışması'].map((m, i) => (
                <Chip key={i} label={m} color="#7c3aed" bg="#7c3aed0f" border="#7c3aed25" />
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* YABANCI DİL */}
      <section id="yabanci-dil" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🗣️</span>
            <Tag label="Yabancı Dil" color="#f59e0b" bg="#f59e0b12" border="#f59e0b25" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>Yabancı Dil (İngilizce)</motion.h2>

          <motion.div {...fadeUp(0.06)} style={{ background: 'var(--off-white)', borderRadius: '12px', padding: '2rem', border: '1px solid var(--grey-light)', marginBottom: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '0.75rem' }}>Lise Hazırlık Sınıfı İngilizce Programı</p>
            <P>Haftada 20 saat İngilizce eğitiminin verildiği lise hazırlık sınıfında öğrenciler, lise İngilizce programını başarıyla sürdürebilmek için gerekli dil yeterliklerini geliştirirler. Öğrenciler, ders materyallerine ek olarak Globed Achieve 3000 çevrim içi öğrenme platformu ile desteklenir.</P>
            <P>Hazırlık programı, İngilizce öğrenmeye yeni başlayan ya da öğrenme sürecinde ek yönlendirmeye ihtiyaç duyan öğrenciler için tasarlanmıştır. Tematik yaklaşım yoluyla öğrenciler İngilizceyi bağlam içinde öğrenirler. Programda edebiyat ve proje tabanlı öğrenme ön plandadır. Program, dil bilgisi öğretiminde belirgin bir yaklaşım benimseyerek öğrencilerin öğrenme sorumluluğunu üstlenen bireyler olarak yetişmelerini hedefler.</P>
          </motion.div>

          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '12px', padding: '2rem', border: '1px solid var(--grey-light)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '0.75rem' }}>Lise İngilizce Programı</p>
            <P>Lise İngilizce programımız; tematik öğrenme yaklaşımı, yaşa uygun içerikler ve modern öğrenme yönetim teknolojilerinin kullanımıyla tüm öğrencilerimizi uluslararası geçerliliğe sahip sınavlara hazırlar.</P>
            <P>2025 yılı itibarıyla 9., 10. ve 11. sınıf öğrencilerimiz; dil becerilerini geliştirmek ve İngilizce ile etkileşimlerini derinleştirmek amacıyla McGraw Hill'in ödüllü Actively Learn platformunu kullanmaktadır.</P>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
              {[
                { label: '1. Sınıf Sonu', body: "Öğrenciler, CEFR B2+ seviyesine denk gelen uluslararası değerlendirmelere hazır hale gelir. First Language programını takip eden öğrenciler ise ana dili İngilizce olan öğrencilerle benzer ölçütlere göre değerlendirilmektedir." },
                { label: '2. Sınıf — AP Dersleri', body: "Öğrenciler, College Board Advanced Placement (AP) derslerini alma fırsatı bulur ve bu dersler aracılığıyla dil gelişimlerini sürdürürler. Tüm AP dersleri, uluslararası ölçekte üniversitelerin birinci dönem programlarının akademik gerekliliklerini yansıtmaktadır." },
              ].map((c, i) => (
                <div key={i} style={{ background: 'var(--white)', borderRadius: '8px', padding: '1.25rem', border: '1px solid var(--grey-light)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '0.5rem' }}>{c.label}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* İKİNCİ YABANCI DİLLER */}
      <section id="ikinci-yabanci" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🌐</span>
            <Tag label="İkinci Yabancı Diller" color="#db2777" bg="#db277712" border="#db277725" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>İkinci Yabancı Diller</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Günümüz küresel dünyasında başarı için doğru iletişim becerileriyle beraber birden fazla yabancı dili yetkin düzeyde kullanmanın da önemi bilinmektedir. İkinci Yabancı Diller Bölümü olarak misyonumuz, bu doğrultuda dil çeşitliliği ve dil zenginliğini içermektedir.</P>
            <P>Öğrencilerimizi yeni bir dil öğrenmeye teşvik etmeyi ve öğrencilerimizin öğrendikleri dilin bağlı olduğu kültürü keşfetmelerini sağlamayı amaçlıyoruz. Aynı zamanda, farklılıklara saygı göstererek uluslararası kültürlere duyarlı bireyler olmalarını, dil öğrenmeye yönelik bir ilgi duymalarını ve dil becerilerini geliştirmeyi hedefliyoruz.</P>
            <P>Kolej Sancaktepe'de öğrencilerimiz İkinci Yabancı Dil öğrenimine Almanca, Fransızca, İspanyolca ya da Rusça dillerinden birini tercih ederek 4. sınıftan itibaren başlar ve 12. sınıfın sonuna kadar seçtikleri bu dilde sürdürürler.</P>
            <P>İkinci Yabancı Dil programımız Avrupa Diller Ortak Çerçeve Programı'na (A1-A2, B1-B2, C1-C2) uygun olarak hazırlanmıştır. Öğrencilerin bu programın kapsamında belirlenen A2 seviyesine ulaşmaları amaçlanır.</P>
            <P>9. sınıfta yeni kayıt olan ve ikinci yabancı dil eğitimi almamış öğrencilerimiz, çevrim içi bir dil eğitim platformu ile hedeflenen düzeye ulaşması açısından desteklenir.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.25rem' }}>
            <SubH>Uluslararası Sınav Fırsatları</SubH>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['DELF (Fransızca)', 'DELE (İspanyolca)', 'FIT (Almanca)', 'TORFL (Rusça)'].map((m, i) => (
                <Chip key={i} label={m} color="#db2777" bg="#db27770f" border="#db277725" />
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubH>Bölüm Etkinlikleri</SubH>
            <P>2017–2018 Eğitim-Öğretim yılından itibaren geleneksel hale getirdiğimiz ve Türkiye çapında açık olan Playback Video Clip Yarışması ile öğrencilerimizin yabancı dil öğrenim süreçlerinde motivasyonlarını artırmayı hedeflemekteyiz.</P>
          </motion.div>
        </div></div>
      </section>

      {/* GÖRSEL SANATLAR */}
      <section id="gorsel-sanatlar" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🎨</span>
            <Tag label="Görsel Sanatlar" color="#e61936" bg="#e6193612" border="#e6193625" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Görsel Sanatlar</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Kolej Sancaktepe'nin çok yönlü ve kapsamlı eğitim sisteminde sanat merkezde yer alan bir bileşendir. Amacımız sanat eğitimiyle araştıran, sorgulayan, bilgili ve duyarlı gençler yetiştirmektir. Yaratıcı sürecin araştırılması, analizi ve keşfi; sanat elemanları ve tasarım ilkeleri doğrultusunda geleneksel ve çağdaş sanat materyallerinin kullanılarak tasarım yapılması, görsel sanat dilinin geliştirilmesi ve sanatın anlamının araştırılması temel hedeflerimizdendir.</P>
            <P>Görsel Sanatlar derslerimizde resim, baskı, seramik, ebru ve üç boyutlu çalışmalarla öğrencilerimize farklı teknikleri deneyimleme olanağı sunan disiplinler arası bir program yapılandırılmıştır. İlgili öğrencilerimiz okul sonrası yapılan görsel sanatlar atölye çalışmalarına da katılırlar.</P>
            <P>Sanat bölümü okulun tüm etkinliklerinde önemli bir rol alır. Sahne Tasarım Kulübü öğrencileri öğretmenlerinin eşliğinde etkinlik dekorlarını tasarlar ve üretirler.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem 1.75rem', border: '1px solid var(--grey-light)' }}>
            <SubH>Bölüm Etkinlikleri</SubH>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['ARTED Sanat Günü', 'Görsel Sanatlar Atölyeleri', 'Sahne Tasarım Kulübü'].map((m, i) => (
                <Chip key={i} label={m} color="#e61936" bg="#e619360f" border="#e6193625" />
              ))}
            </div>
          </motion.div>
        </div></div>
      </section>

      {/* BEDEN EĞİTİMİ */}
      <section id="beden" style={{ padding: '5rem 0', background: 'var(--off-white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>⚽</span>
            <Tag label="Beden Eğitimi" color="#16a34a" bg="#16a34a12" border="#16a34a25" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Beden Eğitimi</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>K12 bütünlüğünde Beden Eğitimi Bölümü olarak sporu yaşam felsefesi haline getirmeyi kendine amaç edinen ve sportif yaşam hedeflerine ulaşan, faaliyet gösterilen tüm okul takım branşlarında öncelikle spor kültürüne sahip olan, topluma faydalı birey olma yolunda desteklenen yeni yeteneklerin keşfedilmesine kapı açan, dünya standartlarında ahlaki değerleri yüksek ve etik değerleri benimseyen bireylerin, verilen eğitimle ve planlanan spor, sosyal etkinlikler, sorumluluk projeleriyle farkındalığını artırarak bilgi, beceri ve başarılarla gerektiği ortamda söz sahibi olma yolunda yetişmesini ve tüm paydaşlarla aidiyet duygusu hissettirecek ortamlar planlamayı hedefliyoruz.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)' }}>
            <SubH>Lise Beden Eğitimi Ders Programı</SubH>
            <NumList items={[
              'Beden Eğitimi ve Spor Bilgisi',
              'Okul Takımları oluşum süreci',
              'Performans Uygulamaları',
              'Düzen Alıştırmaları',
              'Basketbol Branşı',
              'Voleybol Branşı',
              'Badminton Branşı',
              'Temel Motor Becerileri',
              'Dünya Sporları Tanıma',
              'SPORTED ve Eğlenceli Etkinlikler',
            ]} />
          </motion.div>
        </div></div>
      </section>

      {/* MÜZİK EĞİTİMİ */}
      <section id="muzik" style={{ padding: '5rem 0', background: 'var(--white)', scrollMarginTop: '80px' }}>
        <div className="section-container"><div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>🎵</span>
            <Tag label="Müzik Eğitimi" color="#db2777" bg="#db277712" border="#db277725" />
          </motion.div>
          <motion.h2 {...fadeUp(0.04)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,2.8vw,2rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>Müzik Eğitimi</motion.h2>
          <motion.div {...fadeUp(0.06)}>
            <P>Lise müzik derslerinde, MEB müfredat konularıyla birlikte temel müzik bilgileri, müzik kültürü ve enstrüman/branş eğitimini (keman, çello, flüt, gitar) kapsayan özel bir program uygulanır. Lise müzik dersleri tüm seviyelerde haftada iki ders saati görülmekte olup, 11. sınıf seviyesinde ek olarak iki saat seçmeli müzik dersi sunulmaktadır.</P>
            <P>Müzik dersi "aktif öğrenme ve uygulama" ilkesine göre işlenmektedir. Yöntem, öğrenciye sadece bilgi vermekle kalmayıp, aynı zamanda öğrencinin yeteneklerini ve sosyal ilişkilerini de geliştirebilmesini sağlar. Soru cevap, uygulama, gözlem, tartışma, anlatım, problem çözme ve canlandırma yöntemleri uygulanmaktadır.</P>
          </motion.div>
          <motion.div {...fadeUp(0.08)} style={{ background: 'var(--off-white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1.5rem' }}>
            <SubH>Bölüm Etkinlikleri</SubH>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {['Okul Korosu Konserleri', 'Okul Orkestrası Konserleri', 'Sokak Çalgıcıları Festivali', 'Okul Müzikali — Müzik & Dans Gecesi'].map((m, i) => (
                <Chip key={i} label={m} color="#db2777" bg="#db27770f" border="#db277725" />
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem 2rem', border: '1px solid var(--grey-light)', borderLeft: '4px solid #db2777' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#db2777', marginBottom: '0.75rem' }}>BTEC Müzik</p>
            <P>BTEC Müzik dersi 9. sınıf düzeyinde başlayarak 2 yıl süren bir programdır. Programı seçmek için başlangıç düzeyinde müzik bilgisine sahip olunması yeterlidir. Dersin içeriğinde müzik endüstrisi, çalışma kompozisyonu ve ses mühendisliği hakkında araştırmalar yapılır.</P>
            <P>Tam donanımlı BTEC Müzik laboratuvarımızda; klavyeler, elektronik davullar, gitarlar, mikrofonlar ile bağlantılı çok kanallı kayıt yazılımı çalışması olanağı sunulmaktadır.</P>
          </motion.div>
        </div></div>
      </section>
    </>
  );
}
