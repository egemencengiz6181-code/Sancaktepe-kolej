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
    <span style={{ width: '30px', height: '30px', background: '#e61936', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.85rem' }}>{icon}</span>
    {children}
  </motion.h3>
);

export default function OrtaokulPDRPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #1a0610 0%, #8b0f1e 50%, #b01528 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <Link to="/siniflar/ortaokul" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Ortaokul</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>PDR'den Bakış</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            PDR'den Bakış
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.85 }}>
            Ortaokul düzeyinde öğrenci, veli ve öğretmenlere yönelik psikolojik danışmanlık ve rehberlik çalışmaları.
          </motion.p>
        </div>
      </section>
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--red), #8b0f1e, transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>

            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid #e61936', marginBottom: '2.5rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Misyonumuz</p>
              <P>Psikolojik Danışma ve Rehberlik Bölümü olarak amacımız; öğrencilerimizin duygusal, sosyal ve bilişsel alanlarda kişisel gelişimlerine yön vermek, kendilerini gerçekleştirme yolunda temel kişilik özelliklerini kazanmış bireyler olmalarına rehberlik etmektir. Okul öncesinden itibaren sosyal-duygusal öğrenmeye önem vererek seviyeler arası dikey ve yatay bir planlama ile programlarımızı oluşturmaktayız.</P>
              <P>Bölümümüz, tüm öğrencilere çözüm ve süreç odaklı yaklaşan rehberlik anlayışını esas alır. Gelişimsel, önleyici ve yönlendirici çalışmalarımız bireysel, sınıf ve grup düzeyinde olup öğrenci-aile ve okul arasındaki işbirliğine dayanır.</P>
            </motion.div>

            <GroupTitle delay={0.05}>Öğrencilere Yönelik Hizmetler</GroupTitle>
            <InfoCard title="Okul Olgunluğu Çalışması" delay={0.07} body="Anasınıfı öğrencilerinin ilköğretim birinci sınıfa geçerken gelişimsel ve akademik olarak hazır bulunuşluk durumu desteklemek amacıyla görsel algı ve okul olgunluğu çalışmaları yapılır. Gözlem ve çalışmalar doğrultusunda veliler ile bilgi paylaşımı yapılır." />
            <InfoCard title="Gelişim Takibi" delay={0.09} body="Öğrencilerin duygusal, eğitsel ve sosyal gelişimlerinin takibi bireysel, grup görüşmeleri ve sınıf rehberlik çalışmalarıyla sürdürülür. Her öğrenci ile öğrencinin ihtiyacı dışında en az bir defa bireysel süreç değerlendirme görüşmesi yapılır." />
            <InfoCard title="Sınıf Rehberlik Çalışmaları" delay={0.11} body="Öğrencilerin eğitsel, duygusal ve sosyal gelişimlerini destekleyici sınıf rehberliği çalışmaları K-12 bütünlüğü içinde yıllık rehberlik programı dahilinde düzenlenir. Duygular, hedef belirleme, motivasyon, kendini tanıma, öfke kontrolü, iletişim ve karar verme becerileri gibi konularda sınıf çalışmaları yürütülür. 8. sınıf öğrencileri ile haftada bir defa Kariyer Planlama dersleri yapılır." />
            <InfoCard title="Oryantasyon Çalışmaları" delay={0.13} body='Ortaokula geçen öğrencilerin ve ara sınıflarda kayıt yaptırmış yeni öğrencilerin hazırlığını güçlendirmek için "Okul Oryantasyon Programı" çerçevesinde çeşitli sınıf çalışmaları ve grup dinamiği etkinlikleri düzenlenir.' />
            <InfoCard title="Öğrenme Stilleri Çalışması" delay={0.15} body="Öğrencilerimizin bireysel öğrenme stilleri 5. ve 7. sınıf düzeylerinde uygulanarak öğrenci ve öğretmenlerle paylaşılır ve akademik süreçlere destek verilir." />
            <InfoCard title="Kariyer Günü" delay={0.17} body="Öğrencilerin gelecek planlarını desteklemek ve hedefledikleri meslekleri daha yakından tanımalarını sağlamak amacıyla Kariyer Günü etkinliği düzenlenir. Her yıl Mayıs ayında üç farklı mesleği uzmanlarından öğrenme ve paylaşım fırsatı sunulur." />
            <InfoCard title="TAP Vakfı İş Birliğiyle Cinsel Sağlık Eğitimi" delay={0.19} body="Öğrencilerin duygusal ve fiziksel gelişimlerine sağlık çerçevesinde destek olmak amacıyla Türkiye Aile Sağlığı ve Planlaması Vakfı (TAP) iş birliği ile ortaokul ve lise düzeylerinde iki ders saati cinsel sağlık eğitimi programları düzenlenir." />

            <GroupTitle delay={0.22}>Velilere Yönelik Hizmetler</GroupTitle>
            <InfoCard title="Anne Baba Sempozyumu" delay={0.24} body="İki yılda bir belirlenen bir konuda hem okul velisine hem de dış katılımcılara yönelik farklı konuşmacıların ve atölyelerin yer aldığı tam günlü anne baba sempozyumu organize edilir." />
            <InfoCard title="Genel Veli Seminerleri" delay={0.26} body="Her öğretim yılında, farklı temalarda tüm velilerimize yönelik dönemde iki genel veli semineri düzenlenir. İhtiyaçlar doğrultusunda yaş ve sınıf seviyelerine göre veli seminerleri de düzenlenir." />
            <InfoCard title="Bültenler" delay={0.28} body="Her ay düzenli olarak çeşitli temalarla ilgili kapsamlı bir bülten velilerimize e-postalar aracılığıyla gönderilir." />
            <InfoCard title="Aylık Bilgilendirici Paylaşımlar" delay={0.30} body="Yapılan sınıf rehberlik çalışmaları hakkında her ay velilerimize içerik ve gözlemler ile ilgili bilgilendirici paylaşımlar ilgili sınıf psikolojik danışmanı tarafından e-mail yoluyla yapılır." />
            <InfoCard title="Okul Portalı Paylaşımları" delay={0.32} body="Yapılan sınıf rehberlik çalışmaları hakkında her ay öğrenci ve velilerimize rehberlik dersi içerikleri, aylık film ve kitap önerileri verilir." />

            <GroupTitle delay={0.34}>Öğretmenlere Yönelik Hizmetler</GroupTitle>
            <InfoCard title="Sınıf Rehberlik Çalışmalarının Planlanması" delay={0.36} body="Okulumuzun rehberlik ve psikolojik danışma hizmetleri yıllık planının öğretmenler, okul yönetimi ve Psikolojik Danışma ve Rehberlik Bölümü işbirliği ile yürütülmesi sağlanır." />
            <InfoCard title="Öğretmen Oryantasyonu" delay={0.38} body="Öğretmenler arasında grup dinamiğini güçlendirmek amacıyla ağustos ayı seminer döneminde grup çalışmaları ve seminerler düzenlenir. Yıl içerisinde de öğretmenlerle eğitim ve atölye çalışmaları devam etmektedir." />
            <InfoCard title="Öğrenci Gelişim Takibi" delay={0.40} body="Öğrencilerin sınıf içindeki gelişiminin düzenli takibi sınıf rehber öğretmenleri ile birlikte yapılan haftalık bireysel görüşmelerle sürdürülmektedir. Öğrencinin ihtiyacına göre okul yönetimi ve ders öğretmenleri birlikte planlama ve uygulamalar gerçekleştirir." />
            <InfoCard title="Aday Öğrenci Tanıma Çalışmaları" delay={0.42} body="Okulumuza öğrenci kabul sürecinde, aday öğrencinin sosyal-duygusal durumu ve eğitsel becerilere hazır oluşluk bakımından gözlenmesi ve geri bildirim verilmesi sağlanır." />

            <GroupTitle delay={0.44}>PDR Uzmanlarının Mesleki Gelişimi</GroupTitle>
            <InfoCard title="Süpervizyon" delay={0.46} body="Tüm psikolojik danışmanlarımız dönemde iki defa psikiyatrist ve psikanalist eşliğinde süpervizyon desteği alırlar." />
            <InfoCard title="Sempozyum Sunumları" delay={0.48} body="Çeşitli platformlar tarafından düzenlenen sempozyum, kongre ve etkinliklerde okulumuzu temsilen yılda en az bir sunum gerçekleştirilir." />
            <InfoCard title="Profesyonel Gelişim" delay={0.50} body="Tüm psikolojik danışmanlarımız her yıl en az iki defa mesleki gelişimlerine katkıda bulunacak seminer, sempozyum, kongre, konferans ya da süreli eğitimlere katılırlar." />

            <motion.div {...fadeUp(0.52)} style={{ background: '#e61936', borderRadius: '14px', padding: '2rem 2.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>PDR Birimimizle İletişime Geçin</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)' }}>Çocuğunuzun gelişimi hakkında sorularınız için bizimle iletişime geçebilirsiniz.</p>
              </div>
              <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e61936', background: '#fff', padding: '0.7rem 1.5rem', borderRadius: '5px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                info@kolejsancaktepe.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
