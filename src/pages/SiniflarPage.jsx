import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

const classes = [
  {
    id: 'okul-oncesi',
    level: 'Okul Öncesi',
    ages: 'Anaokulu',
    subtitle: 'Oyunla Keşfeden, Merakla Öğrenen Çocuklar',
        color: '#f59e0b',
    desc: 'Anaokulumuz, çocukların erken yaşta merak duygusunu, dil becerilerini ve düşünme alışkanlıklarını geliştirmeyi amaçlayan bütüncül bir eğitim yaklaşımı sunar. Programımızda öğrenme, oyun, keşif ve deneyim üzerinden yapılandırılır.',
    approach: [
      'Oyun temelli öğrenme',
      'Dil gelişimini destekleyen yoğun İngilizce ortam',
      'Sosyal-duygusal gelişimi önceleyen yapı',
      'Sorgulama ve keşif odaklı etkinlikler',
    ],
    content: [
      'Türkçe dil etkinlikleri', 'Matematik ve fen farkındalığı',
      'İngilizce (native destekli)', 'Görsel sanatlar, müzik ve ritim',
      'Drama, dans ve hareket', 'Bilişim, kodlama ve satranç',
      'Rehberlik ve yaşam becerileri', '5–6 yaş: felsefi düşünmeye hazırlık',
    ],
    goal: 'Kendini ifade edebilen, merak eden, öğrenmekten keyif alan ve sosyal açıdan güçlü çocuklar yetiştirmek.',
  },
  {
    id: 'ilkokul',
    level: 'İlkokul',
    ages: '1. – 4. Sınıf',
    subtitle: 'Sağlam Temeller, Güçlü Beceriler',
        color: 'var(--primary)',
    desc: 'İlkokulumuz, öğrencilerin temel akademik becerilerini kazandığı, aynı zamanda düşünme, iletişim ve okuryazarlık alanlarında güçlendiği bir öğrenme ortamı sunar.',
    approach: [
      'Öğrenci merkezli ve aktif öğrenme',
      'Proje ve disiplinlerarası çalışmalar',
      'Güçlü dil eğitimi',
    ],
    content: [
      'Türkçe, Matematik, Hayat Bilgisi', 'Fen Bilimleri ve Sosyal Bilgiler',
      'İngilizce (native destekli)', '2. Yabancı Dil (Almanca)',
      'Yaşam ve düşünme dersleri', 'Proje ve tematik çalışmalar',
      'Görsel sanatlar ve müzik', 'Beden eğitimi ve spor',
      'Bilişim teknolojileri ve kulüpler',
    ],
    goal: 'Okuduğunu anlayan, düşünebilen, iletişim kurabilen ve öğrenmeye istekli bireyler yetiştirmek.',
  },
  {
    id: 'ortaokul',
    level: 'Ortaokul',
    ages: '5. – 8. Sınıf',
    subtitle: 'Düşünen, Sorgulayan, Dünyayı Okuyan Öğrenciler',
        color: 'var(--red)',
    desc: 'Ortaokulumuzda öğretim süreci, UbD – Understanding by Design yaklaşımı esas alınarak yapılandırılır. Programımız, LGS uyumlu olmakla birlikte; PISA ve TIMSS gibi uluslararası ölçütleri esas alan beceri temelli bir yapıya sahiptir.',
    approach: [
      'UbD – Understanding by Design yaklaşımı',
      'LGS uyumlu, PISA ve TIMSS odaklı',
      'Okuryazarlık temelli öğretim',
      'Beceri odaklı ölçme ve değerlendirme',
      'Güçlü rehberlik ve mentörlük sistemi',
    ],
    content: [
      'Türkçe, Matematik, Fen Bilimleri', 'Sosyal Bilgiler, İnkılap Tarihi',
      'İngilizce (yoğun + native destekli)', 'Yabancı dil',
      'Küresel vizyon ve yaşam dersleri', 'Sosyal sorumluluk projeleri',
      'Okul dışı öğrenme etkinlikleri', 'Kulüp ve etüt çalışmaları',
    ],
    goal: 'Akademik başarıyı, düşünme becerileri ve yaşam farkındalığıyla birlikte geliştiren öğrenciler yetiştirmek.',
  },
  {
    id: 'lise',
    level: 'Anadolu Lisesi',
    ages: '9. – 12. Sınıf',
    subtitle: 'Geleceği Okuyan, Yönünü Belirleyen Gençler',
        color: 'var(--primary)',
    desc: 'Anadolu Lise programımız; YKS, IB ve AP perspektifleriyle uyumlu, akademik derinliği yüksek ve öğrencinin bireysel yolunu destekleyen bir yapıya sahiptir.',
    approach: [
      'YKS, IB ve AP perspektifleriyle uyumlu',
      'Akademik derinleşme ve disiplinlerarası öğrenme',
      'Uluslararası bakış açısı',
      'Mentörlük ve kariyer rehberliği',
      'Proje, araştırma ve üretim odaklı çalışmalar',
    ],
    content: [
      'Alan dersleri (sayısal, sözel, eşit ağırlık)', 'Yoğun İngilizce ve akademik dil becerileri',
      '2. Yabancı Dil (Almanca)', 'AP / Yurtdışı danışmanlık desteği',
      'Sosyal sorumluluk ve liderlik projeleri', 'Okul dışı etkinlikler ve üniversite bağlantıları',
      'Rehberlik ve bireysel mentörlük',
    ],
    goal: 'Kendi yolunu çizebilen, dünyayı anlayan, sorumluluk alan ve geleceğe hazır bireyler yetiştirmek.',
  },
];

export default function SiniflarPage() {
  return (
    <>
      <div className="page-hero" style={{
        backgroundImage: "linear-gradient(135deg, rgba(26,35,71,0.92) 0%, rgba(35,46,92,0.88) 55%, rgba(46,61,122,0.88) 100%), url('/gallery/IMG_0832.jpeg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kademeler</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>Eğitim Kademelerimiz</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.85 }}>
              Okul öncesinden liseye uzanan tam kademe eğitimimizle her yaş grubuna özel program sunuyoruz.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}