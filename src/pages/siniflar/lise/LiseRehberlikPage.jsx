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

const BList = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem' }}>
    {items.map((it, i) => (
      <li key={i} style={{ display: 'flex', gap: '0.6rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.35rem' }}>
        <span style={{ color: 'var(--red)', flexShrink: 0 }}>•</span>{it}
      </li>
    ))}
  </ul>
);

const InfoCard = ({ title, body, delay = 0 }) => (
  <motion.div {...fadeUp(delay)}>
    <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(35,46,92,0.04)' }}>
      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.55rem' }}>{title}</h4>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.85, margin: 0 }}>{body}</p>
    </div>
  </motion.div>
);

const GroupTitle = ({ icon, children, delay = 0 }) => (
  <motion.h3 {...fadeUp(delay)} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem', marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
    <span style={{ width: '30px', height: '30px', background: 'var(--primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.85rem' }}>{icon}</span>
    {children}
  </motion.h3>
);

export default function LiseRehberlikPage() {
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
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Rehberlik ve Kariyer Danışmanlığı</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            Rehberlik ve Kariyer Danışmanlığı
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.85 }}>
            Lise çalışmaları: öğrencilerimizin duygusal, sosyal ve mesleki gelişimlerine yönelik kapsamlı rehberlik ve kariyer danışmanlığı hizmetleri.
          </motion.p>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>

            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid var(--primary)', marginBottom: '2.5rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Lise Çalışmalarımız</p>
              <P>Psikolojik Danışma ve Rehberlik Bölümü olarak genel amacımız; öğrencilerimizin duygusal, sosyal ve bilişsel alanlarda kişisel gelişimlerine yön vermek, kendilerini gerçekleştirme yolunda temel kişilik özelliklerini kazanmış bireyler olmalarına rehberlik etmek, kendileri ve çevreleriyle barışık bir bakış açısı oluşturmalarını sağlamanın yanında yaşadıkları güçlüklerde çözüm yollarını bulmalarına yardımcı olmaktır.</P>
              <P>Bölümümüz, tüm öğrencilere çözüm ve süreç odaklı yaklaşan rehberlik anlayışını esas alır. Bu doğrultuda bütüncül bir temelle gelişimsel, önleyici, yönlendirici çalışmalarımız bireysel, sınıf ve grup düzeyinde olup öğrenci-aile ve okul arasında iş birliğine dayanır. Lisede mesleki rehberlik çalışmaları daha da ağırlık kazanır. Mesleki rehberlik çalışmalarımızı planlarken mesleki gelişim basamakları temel alınarak dört yıllık lise sürecini tamamlayıcı çalışmalar oluşturulur.</P>
            </motion.div>

            <motion.div {...fadeUp(0.05)} style={{ background: 'rgba(35,46,92,0.04)', borderRadius: '12px', padding: '1.75rem 2rem', border: '1px solid rgba(35,46,92,0.1)', marginBottom: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.85rem' }}>Mesleki Rehberlik ve Kariyer Çalışmalarının Amacı</p>
              <BList items={[
                'Öğrencilerimiz, kendi yetenek, ilgi ya da becerilerinin farkındalıklarını artırma yanında yeni beceriler de kazanırlar.',
                "Öğrencilerimiz, 21. yy.'ın hızlı değişen ve gelişen dünyasının iş ve meslek gruplarından haberdar olurlar.",
                'Öğrencilerimiz, kendi kariyer planlarını yaparken karar süreçleri için gerekli bilgi ve donanımı kazanırlar.',
                'Karar ve seçim sürecinde, farklı kültürlerden ve fırsatlardan haberdar olarak bütüncül bir yaklaşımla hareket ederler.',
                'Her öğrencimiz liseden kariyer/mesleki portföyünü oluşturarak mezun olur.',
              ]} />
            </motion.div>

            <GroupTitle icon="🎓" delay={0.08}>Öğrencilere Yönelik Hizmetler</GroupTitle>
            <InfoCard title="Gelişim Takibi" delay={0.1} body="Öğrencilerin duygusal, eğitsel ve sosyal gelişimlerinin takibi bireysel, grup görüşmeleri ve sınıf rehberlik çalışmalarıyla takip edilir. Eğitim Öğretim dönemi içerisinde her öğrenci ile öğrencinin ihtiyacı dışında en az bir defa bireysel süreç değerlendirme görüşmesi yapılır." />
            <InfoCard title="Sınıf Rehberlik Çalışmaları" delay={0.12} body="Öğrencilerin kariyer, duygusal ve sosyal gelişimlerini destekleyici sınıf rehberliği çalışmaları, K-12 bütünlüğü içinde birbirini tamamlayıcı yıllık rehberlik programı dahilinde düzenlenir. Hedef belirleme, motivasyon, kendini tanıma, mesleki ilgi ve becerilerin farkındalığı, ders çalışma becerileri, öfke kontrolü, ergenlik dönemi özellikleri, sınav kaygısı, iletişim becerileri, karar verebilme becerileri vb. konularda sınıf çalışmaları yürütülür. Lise hazırlık ve 9. sınıflarda her hafta düzenli olarak rehberlik dersi yapılmaktadır." />
            <InfoCard title="Oryantasyon Çalışmaları" delay={0.14} body='Liseye geçen öğrencilerin duygusal, sosyal ve eğitsel hazırlığını güçlendirmek için "Okul Oryantasyon Programı" çerçevesinde çalışmalar düzenlenir. Bu kapsamda öğrencilerimiz için çeşitli sınıf çalışmaları, bilgilendirme çalışmaları, grup dinamiği etkinlikleri düzenlenir.' />
            <InfoCard title="Öğrenme Stilleri Çalışması" delay={0.16} body="Öğrencilerimizin bireysel olarak öğrenme stilleri lise 9. sınıf düzeylerinde uygulanarak, öğrenci ve öğretmenlerle paylaşılarak akademik süreçlere destek verilir." />
            <InfoCard title="Kendini Tanıma ve Mesleki Farkındalık Çalışmaları" delay={0.18} body="Lise hazırlık sınıflarından başlayarak her sınıf düzeyinde öğrencilerle ilgi, beceri, çoklu zekaya yönelik bireysel çalışmalar yapılarak meslek-derslerle ilişkileri konusunda yönlendirilir. Lise hazırlık sınıfında Akademik Benlik Kavrama Ölçeği, 9. sınıflarda Mesleki Yönelim Envanteri ve Çoklu Zeka çalışmaları, 10. sınıfta Kendini Değerlendirme Envanteri gibi uygulamalarla öğrenci profilleri oluşturulur." />
            <InfoCard title="Kariyer Günü" delay={0.20} body="Öğrencilerin gelecek planlarını desteklemek ve hedefledikleri meslekleri daha yakından tanımalarını sağlamak amacıyla 'Kariyer Günü' etkinliği düzenlenir. 8. sınıf ve lise düzeyinde öğrencilerin mesleki yönelim ve ilgileri belirlenerek her yıl Mayıs ayında üç farklı mesleği uzmanlarından öğrenme ve paylaşım fırsatı sunulur." />
            <InfoCard title="Üniversite Tanıtım Hizmetleri" delay={0.22} body="Öğrencilerin üniversitelerle ilgili bilgi sahibi olabilmesi için 9. sınıftan başlayarak üniversite gezileri düzenlenir." />
            <InfoCard title="TAP Vakfı İş Birliğiyle Cinsel Sağlık Eğitim Programı" delay={0.24} body="Öğrencilerin duygusal ve fiziksel gelişimlerine sağlık çerçevesinde destek olmak amacıyla Türkiye Aile Sağlığı ve Planlaması Vakfı (TAP) iş birliği ile ortaokul ve lise düzeylerinde iki ders saati cinsel sağlık eğitimi programları düzenlenir." />
            <InfoCard title="Üniversite Giriş ve Sınav Kaygısı Bilgilendirme Seminerleri" delay={0.26} body="Dokuzuncu sınıf düzeyinden başlayarak, Üniversiteye Giriş Sistemi, sınav kaygısıyla baş etme yöntemleri hakkında bilgilendirilirler." />
            <InfoCard title="Mesleki Deneyimleme Programı" delay={0.28} body="Öğrencilerimiz 10. sınıftan itibaren merak ettikleri meslekleri yerinde gözlemek amacıyla en az bir günlük gölge programı uygularlar." />
            <InfoCard title="Mezunlarımızla Paylaşım Saatleri" delay={0.30} body="Lise öğrencilerimiz her yıl farklı alandan iki meslek sahibi mezunumuzla bir araya gelerek interaktif paylaşımda bulunurlar." />

            <GroupTitle icon="👨‍👩‍👧" delay={0.32}>Velilere Yönelik Hizmetler</GroupTitle>
            <InfoCard title="Anne Baba Sempozyumu" delay={0.34} body="İki yılda bir belirlenen bir konuda hem okul velisine hem de dış katılımcılara yönelik farklı konuşmacıların ve atölyelerin yer aldığı tam günlü anne baba sempozyumu organize edilir." />
            <InfoCard title="Genel Veli Seminerleri" delay={0.36} body="Her öğretim yılında, farklı temalarda tüm velilerimize yönelik dönemde iki genel veli semineri düzenlenir. İhtiyaçlar doğrultusunda yaş ve sınıf seviyelerine göre veli paylaşım toplantıları da düzenlenir." />
            <InfoCard title="Bültenler" delay={0.38} body="Her ay düzenli olarak çeşitli temalarla ilgili kapsamlı bir bülten velilerimize e-postalar aracılığıyla gönderilir." />
            <InfoCard title="Veliye Yönelik Aylık Bilgilendirici Paylaşımlar" delay={0.40} body="Yapılan sınıf rehberlik çalışmaları hakkında her ay velilerimize içerik ve gözlemler ile ilgili bilgilendirici paylaşımlar ilgili sınıf psikolojik danışmanı tarafından e-mail yoluyla yapılır." />
            <InfoCard title="Okul Portalı Paylaşımları" delay={0.42} body="Yapılan sınıf rehberlik çalışmaları hakkında her ay öğrenci ve velilerimize rehberlik dersi içerikleri, aylık film ve kitap önerileri verilir." />

            <GroupTitle icon="🏫" delay={0.44}>Öğretmenlere Yönelik Hizmetler</GroupTitle>
            <InfoCard title="Sınıf Rehberlik Çalışmalarının Planlanması" delay={0.46} body="Okulumuzun rehberlik ve psikolojik danışma hizmetleri yıllık planının öğretmenler, okul yönetimi ve Rehberlik ve Psikolojik Danışma Bölümü iş birliği ile yürütülmesi sağlanır." />
            <InfoCard title="Öğretmen Oryantasyonu" delay={0.48} body="Öğretmenler arasında grup dinamiğini güçlendirmek amacıyla ağustos ayı seminer döneminde grup çalışmaları ve seminerler düzenlenir. Yıl içerisinde de öğretmenlerle eğitim ve atölye çalışmaları devam etmektedir." />
            <InfoCard title="Öğrenci Gelişim Takibi" delay={0.50} body="Öğrencilerin sınıf içindeki duygusal, eğitsel ve sosyal gelişimlerinin düzenli takibi sınıf rehber öğretmenleri ile birlikte yapılan haftalık bireysel görüşmelerle takip edilmektedir. Ayrıca öğrencinin ihtiyacına göre okul yönetimi ve ders öğretmenleri birlikte planlamalar ve uygulamalar gerçekleştirilir." />
            <InfoCard title="Öğrenci Bilgilendirme Toplantıları" delay={0.52} body="Tüm öğretmenler, öğrencilerin gelişimlerinin takibini sağlayan oryantasyon ve şube öğretmenler kurulu gibi toplantılarda, öğrencilerin gelişimleri hakkında bilgilendirilir." />
            <InfoCard title="Aday Öğrenci Tanıma Çalışmaları" delay={0.54} body="Okulumuza öğrenci kabul sürecinde, aday öğrencinin sosyal-duygusal durumu ve eğitsel becerilere hazır oluşluk bakımından gözlenmesi ve geri bildirim verilmesi sağlanır." />

            <GroupTitle icon="📋" delay={0.56}>PDR Uzmanlarının Mesleki Gelişimine Yönelik Hizmetler</GroupTitle>
            <InfoCard title="Süpervizyon" delay={0.58} body="Tüm psikolojik danışmanlarımız dönemde iki defa psikiyatrist ve psikanalist eşliğinde süpervizyon desteği alırlar." />
            <InfoCard title="Sempozyum Sunumları" delay={0.60} body="Çeşitli platformlar tarafından düzenlenen sempozyum, kongre, etkinliklerde okulumuzu temsilen yılda en az bir sunum gerçekleştirilir." />
            <InfoCard title="Profesyonel Gelişime Yönelik Çalışmalar" delay={0.62} body="Tüm psikolojik danışmanlarımız her yıl en az iki defa mesleki gelişimlerine katkıda bulunacak seminer, sempozyum, kongre, konferans ya da süreli eğitimlere katılırlar." />

            <motion.div {...fadeUp(0.64)} style={{ background: 'var(--primary)', borderRadius: '14px', padding: '2rem 2.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>PDR Birimimizle İletişime Geçin</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)' }}>Çocuğunuzun gelişimi ve kariyer süreci hakkında sorularınız için bizimle iletişime geçebilirsiniz.</p>
              </div>
              <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'var(--red)', padding: '0.7rem 1.5rem', borderRadius: '5px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                info@kolejsancaktepe.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
