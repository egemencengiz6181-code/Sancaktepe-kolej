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

const SectionTitle = ({ children }) => (
  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--grey-light)' }}>{children}</h3>
);

const BulletList = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: 'flex', gap: '0.65rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '0.4rem' }}>
        <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: '0.05rem' }}>•</span>{item}
      </li>
    ))}
  </ul>
);

const SUBJECTS = [
  {
    id: 'ingilizce',
    tag: 'Yabancı Dil',
    title: 'Okul Öncesi İngilizce Eğitimi',
    subtitle: 'Okul Öncesi (4 yaş) – İlkokul 4. Sınıf',
    color: '#f59e0b',
    sections: [
      {
        heading: null,
        body: [
          'Yabancı bir dil öğrenmeye erken bir yaşta başlamak gerekir; çocuğun yaşı ne kadar küçük ise, dil edinimi o kadar kolay olur. Kolej Sancaktepe\'de uyguladığımız eğitim-öğretim programına uluslararası standartlar yön verir ve her bir sınıf seviyesi; çocuğun sosyal, fiziksel, zihinsel ve duygusal gelişimini destekleyecek şekilde yapılandırılır.',
          'İlk yıllar programımız, İngilizce becerilerinin gelişimini en üst düzeye çıkarmak için tematik yaklaşımın yanı sıra ses bilgisine dayalı bir müfredat içerir. Aynı zamanda öğrenme stratejileri, eleştirel düşünme ve çalışma becerileri de öğretilir.',
        ],
      },
      {
        heading: 'Phonics (Eğlenceli Ses Bilgisi) Nedir?',
        body: [
          'Phonics (Eğlenceli Ses Bilgisi), senteze dayalı ses bilgisi yoluyla okuma-yazmayı öğretmek için izlenen eğlenceli ve öğrenci merkezli bir yaklaşımdır. Birden çok duyuya hitap eden bu yöntem, çocuklar için çok motive edicidir ve öğretmenler, öğrencilerinin çok hızlı ilerleme kaydettiklerini gözlemlerler.',
          'Araştırmalar, bu tür bir ses bilgisi öğretiminin hem anadili İngilizce olan hem de yabancı dil olarak İngilizce öğrenen öğrenciler için çok uygun olduğunu ortaya koymaktadır. Okul öncesindeki ve ilkokuldaki tüm İngilizce öğretmenlerimizin Phonics eğitimi mevcuttur.',
        ],
      },
    ],
    levels: [
      {
        label: 'Okul Öncesi 4 Yaş Grubu',
        content: 'Harflerin sesleri öğretilir ve öğrenciler konuyla ilgili uygulamalı el işi etkinliklerine ve hareketli şarkılara katılırlar. Ayrıca her hafta o ana kadar öğrendikleri sesleri pekiştirmek için "Ses Bilgisi Sunumları" yaparlar.',
      },
      {
        label: 'Okul Öncesi 5 Yaş Grubu',
        content: "İngilizce'deki 42 ses yedi aşamalı olarak öğretilir; ayrıca dikkat isteyen şaşırtmacalı basit sözcükler de öğretilir. İlk altı ses öğretilir öğretilmez öğrenciler, sesleri karıştırarak bu altı sesi içeren sözcükleri okuyabilir hale gelirler.",
      },
    ],
  },
  {
    id: 'gorsel-sanatlar',
    tag: 'Sanat',
    title: 'Görsel Sanatlar',
    subtitle: null,
    color: '#e61936',
    sections: [
      {
        heading: null,
        body: [
          'Kolej Sancaktepe\'nin çok yönlü ve kapsamlı eğitim sisteminde sanat merkezde yer alan bir bileşendir. Amacımız sanat eğitimiyle araştıran, sorgulayan, bilgili ve duyarlı gençler yetiştirmektir.',
        ],
      },
    ],
    bullets: [
      'Yaratıcı sürecin araştırılması, analizi ve keşfi',
      'Sanat ürünlerinin incelenmesi',
      'Tasarım ilkeleri doğrultusunda geleneksel ve çağdaş sanat materyallerinin kullanılarak tasarım yapılması',
      'Görsel sanat dilinin geliştirilmesi',
      'Sanatın anlamının ve değerinin araştırılması',
      'Görsel sanat çalışması oluşturulurken farklı tekniklerin bir arada kullanılması',
    ],
    footer: 'Ders içeriklerimizi uluslararası eğitim programlarını yakından izleyerek çağdaş eğitim uygulama ve metotlarından faydalanarak oluştururuz. Görsel Sanatlar derslerimizde resim, baskı, seramik, ebru ve üç boyutlu çalışmalarla öğrencilerimize farklı teknikleri deneyimleme olanağı sunan disiplinler arası bir program yapılandırılır.',
  },
  {
    id: 'beden-egitimi',
    tag: 'Beden Eğitimi',
    title: 'Beden Eğitimi',
    subtitle: null,
    color: '#059669',
    sections: [
      {
        heading: null,
        body: [
          'K12 bütünlüğünde Beden Eğitimi Bölümü olarak sporu yaşam felsefesi haline getirmeyi kendine amaç edinen ve sportif yaşam hedeflerine ulaşan bireyler yetiştirmeyi hedefliyoruz. Tüm okul takım branşlarında spor kültürüne sahip, topluma faydalı yeni yeteneklerin keşfedilmesine kapı açan, dünya standartlarında ahlaki ve etik değerleri benimseyen bireylerin yetişmesini sağlayacak ortamlar planlamayı hedefliyoruz.',
        ],
      },
    ],
    bullets: [
      'Beden Eğitimi ve Spor Bilgisi',
      'Performans Uygulamaları',
      'Düzen Alıştırmaları',
      'Fiziksel Uygunlukta Yer Değiştirme Hareketleri',
      'Fiziksel Uygunlukta Dengeleme Hareketleri',
      'Fiziksel Uygunlukta Nesne Kontrolü Gerektiren Hareketler',
      'Birleşmiş Temel Beceri Hareketleri',
      'SPORTED ve Eğlenceli Spor Etkinlikleri',
    ],
  },
  {
    id: 'bilisim',
    tag: 'Bilişim',
    title: 'Bilişim Teknolojileri',
    subtitle: null,
    color: '#7c3aed',
    sections: [
      {
        heading: null,
        body: [
          'Bilişim Teknolojileri bölümünün temel hedefi; değişen teknolojiye uyum sağlayabilen ve kendini yenileyebilen bilgi toplumunda yerini alabilecek bireyler yetiştirmektir. Öğrencilerimizin teknolojiyi yaratıcılıklarıyla aktif ve çok yönlü olarak kullanmalarını sağlamak amaçlanmaktadır.',
          'Okul öncesinde Bilişim Teknolojileri dersi öğrenci merkezli bir yaklaşımla ele alınmaktadır ve ders dili Türkçe\'dir. Her öğrenciye 1 bilgisayar düşecek şekilde MacOS işletim sistemli Mac Laboratuvarı kullanılmaktadır.',
        ],
      },
    ],
    bullets: [
      'Teknolojiyi yakından tanıyıp etkili ve verimli kullanabilme',
      'Günlük hayattaki teknolojik araçların kullanım amaçlarını öğrenme',
      'Bilgisayarın temel donanım parçalarını tanıma',
      'Bilgisayarların, makinelerin ve robotların çalışma mantığını anlama',
      "İnternet'i yaş grubuna uygun şekilde kullanabilme",
      'Eğitsel oyunlarla birlikte bilgisayar okuryazarı olabilme',
      'Analitik ve eleştirel düşünme becerilerinin kazandırılması',
      'Algoritmik düşünme ve problem çözme becerilerinin kazandırılması',
      'Robotik materyaller ve uygulamalarla temel kodlama eğitimi',
    ],
    events: ['Avrupa Kodlama Haftası', 'Kodlama Saati', 'Güvenli İnternet Günü', 'Bilişim Haftası'],
  },
  {
    id: 'muzik',
    tag: 'Müzik',
    title: 'Müzik Eğitimi',
    subtitle: null,
    color: '#db2777',
    sections: [
      {
        heading: null,
        body: [
          'Müzik bölümünün amacı; okul öncesinden başlayarak öğrencilerimizin müzik yoluyla estetik yönünü, müziksel algı ve bilgilerini geliştirmek, yetenek ve yaratıcılıklarını geliştirici müzik etkinliklerine katılmalarına olanak sağlamaktır.',
          'Okul öncesi müzik derslerinde programımız haftada 1 ders saati olarak konulara uygun şarkı öğretimi, orff yaklaşımlı müzikli ve ritmik oyunlar, ses çalışmaları, enstrüman tanıtımları ve yaratıcı çalışmalar ile planlanır.',
          'Ulusal ve evrensel müzik kültürünü tanıyan, sanata ve sanatçıya saygı duyan, eleştirel beğeniye sahip bireyler olarak yetiştirilmelerini sağlamak temel hedefimizdir.',
        ],
      },
    ],
  },
];

export default function OkulOncesiBransPage() {
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
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>Branş Dersleri</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12 }}>
            Branş Dersleri
          </motion.h1>
        </div>
      </section>
    </>
  );
}
