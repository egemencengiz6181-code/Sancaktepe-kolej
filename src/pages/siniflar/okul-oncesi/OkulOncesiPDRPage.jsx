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

const Card = ({ title, items, delay = 0 }) => (
  <motion.div {...fadeUp(delay)} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.75rem', border: '1px solid var(--grey-light)', boxShadow: '0 4px 20px rgba(35,46,92,0.06)', marginBottom: '1.5rem' }}>
    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--grey-light)' }}>{title}</h4>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.65rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.45rem' }}>
          <span style={{ color: 'var(--red)', flexShrink: 0 }}>•</span>{item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const PDR_SECTIONS = [
  {
    group: 'Öğrenci Çalışmaları',
    items: [
      {
        title: 'Okul Olgunluğu Çalışması',
        body: 'Okul öncesi öğrencilerinin ilköğretim birinci sınıfa geçerken gelişimsel ve akademik olarak hazır bulunuşluk durumunu desteklemek amacıyla görsel algı ve okul olgunluğu çalışmaları yapılır. Gözlem ve çalışmalar doğrultusunda veliler ile bilgi paylaşımı yapılır.',
      },
      {
        title: 'Gelişim Takibi',
        body: "Öğrencilerin duygusal, eğitsel ve sosyal gelişimlerinin takibi bireysel, grup görüşmeleri ve sınıf rehberlik çalışmalarıyla sürdürülür. Eğitim-öğretim dönemi içerisinde her öğrenci ile öğrencinin ihtiyacı dışında en az bir defa bireysel süreç değerlendirme görüşmesi yapılır. Aynı zamanda öğrencilerimizin ihtiyaç alanları tespit edilerek süreli grup çalışmaları da düzenlenir.",
      },
      {
        title: 'Sınıf Rehberlik Çalışmaları',
        body: 'Öğrencilerin eğitsel, duygusal ve sosyal gelişimlerini destekleyici sınıf rehberliği çalışmaları, K-12 bütünlüğü içinde birbirini tamamlayıcı yıllık rehberlik programı dahilinde düzenlenir. Bu kapsamda duygular, hedef belirleme, motivasyon, kendini tanıma, öfke kontrolü, yaş dönemi özellikleri, iletişim becerileri ve karar verebilme becerileri gibi konularda sınıf çalışmaları yürütülür.',
      },
      {
        title: 'Oryantasyon Çalışmaları',
        body: 'Anaokulundan ilkokula, ilkokuldan ortaokula geçen öğrencilerin ve ara sınıflarda kayıt yaptırmış yeni öğrencilerin duygusal, sosyal ve eğitsel hazırlığını güçlendirmek için "Okul Oryantasyon Programı" çerçevesinde çeşitli sınıf çalışmaları, bilgilendirme çalışmaları ve grup dinamiği etkinlikleri düzenlenir.',
      },
    ],
  },
  {
    group: 'Velilere Yönelik Çalışmalar',
    items: [
      {
        title: 'Anne Baba Sempozyumu',
        body: 'Belirlenen bir konuda hem okul velisine hem de dış katılımcılara yönelik farklı konuşmacıların ve atölyelerin yer aldığı tam günlü anne baba sempozyumu organize edilir.',
      },
      {
        title: 'Genel Veli Seminerleri',
        body: 'Her öğretim yılında, farklı temalarda tüm velilerimize yönelik dönemde iki genel veli semineri düzenlenir. İhtiyaçlar doğrultusunda yaş ve sınıf seviyelerine göre veli seminerleri de düzenlenir.',
      },
      {
        title: 'Bültenler',
        body: 'Her ay düzenli olarak çeşitli temalarla ilgili kapsamlı bir bülten velilerimize e-postalar aracılığıyla gönderilir.',
      },
      {
        title: 'Aylık Bilgilendirici Paylaşımlar',
        body: 'Yapılan sınıf rehberlik çalışmaları hakkında her ay velilerimize içerik ve gözlemler ile ilgili bilgilendirici paylaşımlar ilgili sınıf psikolojik danışmanı tarafından e-mail yoluyla yapılır.',
      },
    ],
  },
];

export default function OkulOncesiPDRPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a2347 0%, #232e5c 55%, #2e3d7a 100%)', padding: '7rem 0 4.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link to="/siniflar" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Kademeler</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
            <Link to="/siniflar/okul-oncesi" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Okul Öncesi</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>›</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>PDR'den Bakış</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '4px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#22c55e', textTransform: 'uppercase' }}>💚 Psikolojik Danışmanlık ve Rehberlik</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '0.75rem' }}>
            PDR'den Bakış
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: 1.85 }}>
            Öğrencilerimizi fiziksel, sosyal, psikolojik ve bilişsel açıdan en iyi şekilde ilköğretime ve hayata hazırlamak amacıyla sürdürdüğümüz rehberlik çalışmaları.
          </motion.p>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, #22c55e, var(--primary), transparent)' }} />

      <section style={{ padding: '5.5rem 0', background: 'var(--off-white)' }}>
        <div className="section-container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>

            {/* Misyon */}
            <motion.div {...fadeUp(0)} style={{ background: 'var(--white)', borderRadius: '14px', padding: '2rem 2.5rem', border: '1px solid var(--grey-light)', borderLeft: '5px solid #22c55e', marginBottom: '3rem', boxShadow: '0 4px 20px rgba(35,46,92,0.06)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#22c55e', marginBottom: '0.75rem' }}>Misyonumuz</p>
              <P>Okul öncesi rehberlik servisinin misyonu; öğrencilerimizi fiziksel, sosyal, psikolojik ve bilişsel açıdan en iyi şekilde ilköğretime ve hayata hazırlanmalarında gerekli psikolojik desteği sağlamaktır. Bölümümüzde psikolojik ve rehberlik danışmanlık hizmetleri, öğrenci ve ailelerine yönelik çok yönlü çalışmalar olarak planlanır.</P>
            </motion.div>

            {PDR_SECTIONS.map((section, si) => (
              <div key={section.group} style={{ marginBottom: '3rem' }}>
                <motion.div {...fadeUp(0.05)}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ width: '30px', height: '30px', background: '#22c55e', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.9rem' }}>
                      {si === 0 ? '🎓' : '👨‍👩‍👧'}
                    </span>
                    {section.group}
                  </h3>
                </motion.div>
                {section.items.map((item, ii) => (
                  <motion.div key={ii} {...fadeUp(0.07 + ii * 0.04)}>
                    <div style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem 2rem', border: '1px solid var(--grey-light)', marginBottom: '1rem', boxShadow: '0 2px 10px rgba(35,46,92,0.04)' }}>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.6rem' }}>{item.title}</h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.85, margin: 0 }}>{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}

            {/* CTA */}
            <motion.div {...fadeUp(0.1)} style={{ background: 'var(--primary)', borderRadius: '14px', padding: '2rem 2.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>Rehberlik Birimimizle İletişime Geçin</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Çocuğunuzun gelişimine ilişkin sorularınız için PDR biriminize ulaşabilirsiniz.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="mailto:info@kolejsancaktepe.com" style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', background: 'var(--red)', padding: '0.7rem 1.5rem', borderRadius: '5px', textDecoration: 'none', textAlign: 'center' }}>
                  info@kolejsancaktepe.com
                </a>
                <Link to="/birimler/pdr" style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', textAlign: 'center' }}>
                  PDR Birimi Genel Sayfası →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
