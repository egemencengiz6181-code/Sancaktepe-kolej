// ─────────────────────────────────────────────────────────────────────────────
// Helper exports
// ─────────────────────────────────────────────────────────────────────────────
export const getTopLevelPrograms = () => programs.filter((p) => !p.parent);
export const getProgramById = (id) => programs.find((p) => p.id === id);
export const getSubPrograms = (parentId) => programs.filter((p) => p.parent === parentId);

// ─────────────────────────────────────────────────────────────────────────────
// Programs array
// ─────────────────────────────────────────────────────────────────────────────
export const programs = [

  // ════════════════════════════════════════════════
  // TOP-LEVEL PROGRAMS
  // ════════════════════════════════════════════════

  {
    id: 'bogep',
    tag: 'BÖGEP',
    pdf: '/pdf%20ler/b%C3%B6gep%20web.pdf',
    title: 'TED AD – Bütüncül Öğrenme ve Gelişim Programları (BÖGEP)',
    subtitle: 'Bütüncül Öğrenme ve Gelişim Programları',
    color: '#232e5c',
    accent: '#e61936',
    desc: 'Bu programlar, akademik eğitimi destekleyen; öğrencinin akademik, sosyal, duygusal ve kültürel gelişimini bütüncül olarak ele alan yapılardır.',
    heroDesc: 'TED AD – BÜTÜNCÜL ÖĞRENME VE GELİŞİM PROGRAMLARI (BÖGEP), öğrencinin yalnızca akademik değil; sosyal, duygusal, kültürel ve etik boyutlarda da gelişimini destekleyen kapsamlı bir çerçeve programdır.',
    items: [
      { code: '1', label: 'SSP – Sosyal Sorumluluk Programı (Social Responsibility Program)' },
      { code: '2', label: 'LLL – Yaşam Boyu Öğrenme Programı (Life Long Learning Program)' },
      { code: '3', label: 'ODE – Okul Dışı Etkinlikler Programı (Out of School Experiences)' },
      { code: '4', label: 'MP – Mentörlük & Rehberlik Programı (Mentorship & PDR Program)' },
      { code: '5', label: 'TÖP – Tematik Öğrenme Programı (MH) (Thematic Learning Program – Multidisciplinary Hub)' },
    ],
    goals: [
      'Akademik başarıyı sosyal ve duygusal gelişimle desteklemek',
      'Öğrencinin bireysel potansiyelini ortaya çıkarmak',
      'Okulu yaşamla bütünleştirmek',
      'Sorumluluk bilinci ve liderlik becerileri kazandırmak',
    ],
    apply: 'BÖGEP kapsamındaki çalışmalar, ders saatleri içinde ve dışında; proje haftaları, kulüp saatleri, atölyeler ve okul dışı öğrenme etkinlikleriyle programa entegre edilir.',
    details: [
      { 
        title: 'SSP – Sosyal Sorumluluk Programı (Social Responsibility Program)', 
        desc: 'Amaç: Öğrencilerin toplumsal sorunlara duyarlı, sorumluluk alan ve çözüm üretebilen bireyler olarak yetişmesini sağlamak. İçerik: Toplum hizmeti projeleri, yerel ve küresel sosyal sorunlar, gönüllülük çalışmaları, SDGs ile ilişkilendirilmiş projeler. Kazanımlar: Empati ve etik farkındalık, aktif yurttaşlık, sosyal etki yaratma bilinci.' 
      },
      { 
        title: 'LLL – Yaşam Boyu Öğrenme Programı (Life Long Learning Program)', 
        desc: 'Amaç: Öğrencinin öğrenmeyi okul ile sınırlı görmemesini, merak eden ve kendini sürekli geliştiren bir birey olmasını sağlamak. İçerik: Öğrenmeyi öğrenme becerileri, okuma kültürü ve araştırma alışkanlıkları, dijital ve akademik okuryazarlık, kişisel ilgi alanlarına yönelik öğrenme yolları. Kazanımlar: Öz yönelimli öğrenme, merak ve öğrenme motivasyonu, değişen dünyaya uyum becerisi.' 
      },
      { 
        title: 'ODE – Okul Dışı Etkinlikler Programı (Out of School Experiences)', 
        desc: 'Amaç: Öğrenmenin sadece sınıfla sınırlı olmadığını göstermek ve öğrenciyi gerçek yaşamla buluşturmak. İçerik: Müze, tiyatro, bilim merkezi ziyaretleri, şehir keşifleri ve kültürel geziler, doğa kampları ve outdoor öğrenme, proje gezileri (yerel ve ulusal). Kazanımlar: Deneyim temelli öğrenme, kültürel sermaye, estetik ve sanat farkındalığı.' 
      },
      { 
        title: 'MP – Mentörlük & Rehberlik Programı (Mentorship & PDR Program)', 
        desc: 'Amaç: Öğrencinin akademik, sosyal ve duygusal gelişimini bireysel olarak desteklemek. İçerik: Bireyselleştirilmiş destek, kariyer yönlendirme ve gelecek planlama, sosyal-duygusal danışmanlık, ebeveyn-öğretmen-öğrenci iş birliği. Kazanımlar: Öz-farkındalık, karar alma becerileri, bireysel potansiyeli gerçekleştirme.' 
      },
      { 
        title: 'TÖP – Tematik Öğrenme Programı (Thematic Learning Program – Multidisciplinary Hub)', 
        desc: 'Amaç: Öğrencilerin farklı disiplinleri bir arada düşünmesini ve derin öğrenme yaşamasını sağlamak. İçerik: Disiplinler arası proje haftaları, tema odaklı öğrenme üniteleri, ortak alan (hub) çalışmaları, gerçek yaşam bağlantılı problemler. Kazanımlar: Bütüncül düşünme, eleştirel bakış, yaratıcı problem çözme.' 
      },
    ],
  },

  {
    id: 'kvyod',
    tag: 'Küresel Vizyon ve Yaşam Odaklı Dersler',
    pdf: '/pdf%20ler/k%C3%BCresel%20vizyon%20web.pdf',
    title: 'Küresel Vizyon ve Yaşam Odaklı Dersler',
    subtitle: 'Ortaokul ve Lise',
    color: '#059669',
    accent: '#10b981',
    desc: 'Öğrencilerin akademik bilgiyi yaşamla ilişkilendirmesini, dünyayı bütüncül bir bakış açısıyla okuyabilmesini amaçlayan derslerdir.',
    heroDesc: 'KVYOD, öğrencilere küresel ölçekte düşünme ve yerel ölçekte hareket etme becerisi kazandırır. Eleştirel düşünme, küresel kültür farkındalığı ve yaşam becerilerini disiplinlerarası bir çerçevede ele alır.',
    customContent: true,
    goals: [
      'Küresel sorunlara duyarlılık ve çözüm odaklı düşünme becerisi',
      'Kültürlerarası yetkinlik ve empati geliştirmek',
      'Öz-farkındalık ve yaşam becerileriyle donanmış bireyler yetiştirmek',
      'Akademik bilgiyi gerçek yaşam bağlamında kullanabilmek',
    ],
    apply: 'KVYOD dersleri, ortaokul ve lise kademelerinde haftalık ders çizelgesine yerleştirilir. Bazı kazanımlar proje, bazıları disiplinlerarası çalışmalar ve uygulamalı atölyeler yoluyla ele alınır.',
  },

  {
    id: 'okuryazarlik',
    tag: 'OKURYAZARLIK PROGRAMI',
    pdf: '/pdf%20ler/okuryazarl%C4%B1k%20web.pdf',
    title: 'Okuryazarlık Temelli Ortaokul ve Lise Eğitim Modeli',
    subtitle: 'Okuryazarlık Temelli Program',
    color: '#312e81',
    accent: '#818cf8',
    desc: 'Bilgi yükleyen değil, bilgiyi okuyan, yorumlayan ve dönüştüren bireyler yetiştirmek.',
    heroDesc: 'Okuryazarlık Programları, bilgi yükleyen değil; bilgiyi okuyan, yorumlayan ve dönüştüren bireyler yetiştirmeyi hedefler. PISA ve TIMSS ölçütlerini temel alarak beceri odaklı bir öğretim anlayışı sunar.',
    items: [
      { code: '1', label: 'Temel Akademik Okuryazarlıklar (Fen, Matematik, Bilişim)' },
      { code: '2', label: 'Sosyal ve Beşerî Bilimler Okuryazarlıkları (Tarih, Coğrafya, Felsefe)' },
      { code: '3', label: 'İletişim ve Anlam Okuryazarlıkları (Dil, Medya, Bilgi)' },
      { code: '4', label: 'Yaşam ve Gelecek Okuryazarlıkları (Sürdürülebilirlik, Finansal, Kariyer)' },
      { code: '5', label: 'Okuryazarlık + SDGs Entegrasyonu' },
    ],
    goals: [
      'PISA ve TIMSS gibi uluslararası değerlendirmelerde güçlü beceriler',
      'Üst düzey düşünme ve analiz yetkinliği',
      'Açık uçlu ve senaryo temelli problem çözme',
      'Bilgi kaynaklarını eleştirel biçimde değerlendirme',
    ],
    apply: 'Tüm okuryazarlık alanları BM Sürdürülebilir Kalkınma Amaçları (SDGs) ile ilişkilendirilir ve proje temelli olarak uygulanır. Dersler soru okuma, yazma, analiz ve tartışma odaklı yürütülür.',
    details: [
      { title: 'Fen Okuryazarlığı', desc: 'Bilimsel düşünme ve yöntem bilgisi, deney, gözlem, veri yorumlama, bilimsel metin okuma ve eleştirme. Amaç: Bilimi ezberlenen bilgi değil, anlaşılan bir süreç haline getirmek.' },
      { title: 'Matematik Okuryazarlığı', desc: 'Matematiksel akıl yürütme, problem çözme ve modelleme, sayısal verileri yorumlama. Amaç: Formül bilen değil, matematikle düşünen birey yetiştirmek.' },
      { title: 'Bilişim ve Dijital Okuryazarlık', desc: 'Algoritmik düşünme, temel kodlama ve sistem mantığı, dijital güvenlik ve veri gizliliği, dijital etik. Amaç: Teknolojiyi tüketen değil, anlayan ve yöneten bireyler yetiştirmek.' },
      { title: 'Tarih Okuryazarlığı', desc: 'Tarihsel metin okuma ve çözümleme, neden-sonuç ilişkileri kurma, kaynak eleştirisi ve perspektif farkındalığı. Amaç: Tarihi ezberleyen değil, tarihle düşünen birey yetiştirmek.' },
      { title: 'Coğrafya ve Mekân Okuryazarlığı', desc: 'Mekânsal düşünme, insan-çevre ilişkileri, iklim, kaynak ve nüfus farkındalığı, küresel riskler ve sürdürülebilirlik.' },
      { title: 'Felsefe ve Etik Okuryazarlığı', desc: 'Kavramsal düşünme, etik ikilemleri tartışma, değerler, haklar ve sorumluluklar, ahlaki muhakeme becerileri.' },
      { title: 'Dil ve Metin Okuryazarlığı', desc: 'Akademik ve eleştirel okuma, yazılı ve sözlü ifade becerileri, metinler arası ilişki kurma, argüman üretme ve savunma.' },
      { title: 'Medya ve Bilgi Okuryazarlığı', desc: 'Bilgi kirliliğini ayırt etme, haber, sosyal medya ve propaganda analizi, kaynak doğrulama becerileri, dijital dünyada bilinçli yurttaşlık.' },
      { title: 'Sürdürülebilirlik Okuryazarlığı', desc: 'BM Sürdürülebilir Kalkınma Amaçları (SDGs), çevresel sorumluluk, sosyal adalet ve eşitlik, gezegen bilinci.' },
      { title: 'Finansal Okuryazarlık', desc: 'Bütçe yönetimi, ekonomi ve piyasa okuması, tüketim bilinci, uzun vadeli düşünme.' },
      { title: 'Kariyer ve Yaşam Tasarımı Okuryazarlığı', desc: 'Meslekler dünyasını okuma, güçlü yönlerini tanıma, karar alma ve hedef belirleme, yaşam boyu öğrenme bilinci.' },
    ],
  },

  {
    id: 'yabanci-dil',
    tag: 'Yabancı Dil Programı',
    title: 'Yabancı Dil Programı',
    subtitle: 'Yabancı Dil Programı',
    color: '#1e40af',
    accent: '#3b82f6',
    desc: 'Bir ders saati değil yaşam alanı; bir dil bilgisi sistemi değil anlam ve iletişim aracı; bir sınav hedefi değil dünya ile bağ kurma yolu.',
    heroDesc: 'Kolej Sancaktepe TED AD\'de yabancı dil; bir ders saati değil yaşam alanıdır, bir dil bilgisi sistemi değil anlam ve iletişim aracıdır. Öğrenciler dili ezberlemez; dili kullanarak düşünür, tartışır, üretir ve dünyayı anlamlandırır.',
    items: [
      { code: '1', label: 'İngilizce — İçerik Tabanlı Öğrenme, Konuşma ve Tartışma, Tiyatro ve Drama' },
      { code: '2', label: 'Almanca — İkinci Yabancı Dil, Avrupa Kültürü, Çok Dilli Düşünme' },
    ],
    goals: [
      'Dili anlam ve iletişim aracı olarak kullanmak',
      'İçerik tabanlı öğrenme ile bilgi üretmenin aracı yapmak',
      'Eleştirel düşünme ve kültürel okuma becerilerini geliştirmek',
      'Çok dilli düşünme becerisi geliştirmek',
    ],
    apply: 'Yabancı dil dersleri yalnızca dil öğretimi üzerine değil; içerik temelli öğrenme üzerine kuruludur. Program ayrıca Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları (SDGs) ile ilişkilendirilir.',
    sections: [
      {
        type: 'intro',
        title: 'Yabancı Dil Öğrenme Felsefesi',
        content: 'Kolej Sancaktepe TED AD\'de yabancı dil; bir ders saati değil yaşam alanıdır, bir dil bilgisi sistemi değil anlam ve iletişim aracıdır, bir sınav hedefi değil dünya ile bağ kurma yoludur. Bu yaklaşımda öğrenciler dili ezberlemez; dili kullanarak düşünür, tartışır, üretir ve dünyayı anlamlandırır.'
      },
      {
        type: 'group',
        title: 'İngilizce – Kültürle Öğrenme Modeli',
        items: [
          {
            title: 'İçerik Tabanlı Öğrenme (BBC Modeli)',
            desc: 'İngilizce dersleri yalnızca dil öğretimi üzerine değil; içerik temelli öğrenme üzerine kuruludur. Öğrenciler günlük ve haftalık podcast içerikleri dinler, bilim, çevre, kültür ve güncel olayları tartışır, dinleme-konuşma-yazma becerilerini birlikte geliştirir. Dil öğrenimi burada bir amaç değil; bilgi üretmenin aracıdır.'
          },
          {
            title: 'Konuşma ve Tartışma Pratikleri',
            desc: 'Öğrenciler haftalık konuşma saatlerinde münazara, yuvarlak masa tartışmaları, güncel mesele analizleri gibi etkinliklerle İngilizceyi aktif şekilde kullanırlar. Tartışma konuları arasında etik problemler, teknolojik gelişmeler, küresel sorunlar ve sosyal meseleler yer alır.'
          },
          {
            title: 'English Movie Nights',
            desc: 'Belirli dönemlerde düzenlenen sinema günlerinde öğrenciler orijinal dilde film izler, film karakterlerini analiz eder, tarih, sosyoloji ve psikoloji bağlamında değerlendirme yapar. Bu çalışmalar öğrencilerin eleştirel düşünme ve kültürel okuma becerilerini geliştirir.'
          },
          {
            title: 'İngilizce Tiyatro ve Drama',
            desc: 'Drama temelli öğrenme modeli ile öğrenciler sahne dili, beden dili ve anlatım becerileri üzerinde çalışır. Her yıl düzenlenen İngilizce tiyatro gösterileri, öğrencilerin dili doğal ve yaratıcı biçimde kullanmasını sağlar.'
          }
        ]
      },
      {
        type: 'single',
        title: 'Disiplinlerarası Entegrasyon',
        content: 'Kolej Sancaktepe TED AD\'de İngilizce öğretimi fen bilimleri, coğrafya, tarih, sürdürülebilirlik ve teknoloji gibi alanlarla entegre şekilde yürütülür. Öğrenciler iklim krizi, göç, yapay zekâ, etik sorunlar gibi küresel konuları İngilizce üzerinden araştırır ve tartışır. Program ayrıca Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları (SDGs) ile ilişkilendirilir. Bu yaklaşım sayesinde öğrenci İngilizce dersi yapmaz; İngilizce ile dünyayı okur.'
      },
      {
        type: 'single',
        title: 'Cambridge Modeli ile Dil Öğrenme Süreci',
        content: 'Kolej Sancaktepe TED AD yabancı dil programı, Cambridge uluslararası eğitim yaklaşımının ilkeleri doğrultusunda yaşa uygun aşamalar halinde yapılandırılmıştır.'
      },
      {
        type: 'group',
        title: 'ALMANCA İKİNCİ YABANCI DİL PROGRAMI',
        subtitle: 'Avrupa Kültürü, Akademik Dil ve Uluslararası Bağlantı Modeli',
        intro: 'Kolej Sancaktepe TED AD\'de Almanca öğretimi yalnızca ikinci bir yabancı dil olarak değil; öğrencilerin Avrupa kültürü, akademik dünyası ve uluslararası eğitim olanakları ile güçlü bağlar kurmasını sağlayan stratejik bir öğrenme alanı olarak tasarlanmıştır. Almanca programı İngilizce ile paralel ilerler ve öğrencilerin çok dilli düşünme becerisi geliştirmesini hedefler. Amaç; öğrencilerin yalnızca bir dil öğrenmesi değil, çok kültürlü bir düşünme yapısı geliştirmesidir.',
        items: [
          {
            title: 'İkinci Yabancı Dil Öğrenme Felsefesi',
            desc: 'Kolej Sancaktepe TED AD\'de Almanca öğretimi ezbere dayalı dil öğretimi değildir, iletişim ve kültür temelli öğrenmeye dayanır ve öğrenciyi Avrupa kültürü ile buluşturur. Programın temel amacı öğrencilerin çok dilli düşünme becerisi kazanması, Avrupa kültürünü tanıması ve uluslararası eğitim ve kariyer olanaklarına hazırlanmasıdır.'
          },
          {
            title: 'Almanca Öğrenme Modeli',
            desc: '',
            subitems: [
              { title: 'İletişim Temelli Dil Öğrenimi', desc: 'Almanca dersleri günlük iletişim, diyalog çalışmaları, rol oynama etkinlikleri ve konuşma pratikleri üzerine kuruludur. Öğrenciler dili yalnızca öğrenmez, aktif olarak kullanır.' },
              { title: 'Drama ve Kültür Etkinlikleri', desc: 'Almanca öğretimi drama çalışmaları, kültürel sunumlar ve Alman kültürü ve tarihi üzerine etkinlikler ile desteklenir. Öğrenciler Alman edebiyatı, müzik, sanat ve kültürel gelenekler ile tanışır.' },
              { title: 'Alman Sineması ve Medya Çalışmaları', desc: 'Program kapsamında öğrenciler Almanca kısa filmler, belgeseller ve kültürel içerikler izleyerek dil becerilerini geliştirir. Bu çalışmalar dinleme becerisi, kültürel farkındalık ve eleştirel düşünme alanlarını güçlendirir.' }
            ]
          },
          {
            title: 'Disiplinlerarası Entegrasyon',
            desc: 'Almanca programı tarih, coğrafya, kültür çalışmaları, Avrupa Birliği yapısı ve küresel konular ile ilişkilendirilir. Öğrenciler Almanca aracılığıyla Avrupa toplumlarını, kültürleri ve tarihsel süreçleri tanıma fırsatı bulur.'
          },
          {
            title: 'Almanca Dil Gelişim Süreci',
            desc: 'Program, öğrencinin yaş gelişimine uygun olarak aşamalı biçimde ilerler.'
          }
        ]
      }
    ],
  },

  {
    id: 'uygulamali-dersler',
    tag: 'UDP - Uygulamalı Dersler Programı',
    pdf: '/pdf%20ler/uygulamal%C4%B1%20dersler%20web.pdf',
    title: 'Uygulamalı Dersler ve Branşlaşma Modeli',
    subtitle: '(Sanat, Spor ve Yaşam Odaklı Eğitim)',
    color: '#134e4a',
    accent: '#14b8a6',
    desc: 'Çocukların çok yönlü gelişimini desteklemek, yaratıcılıklarını ortaya çıkarmak, öğrenmeyi keyifli hale getirmek ve özgüven ile ifade becerilerini geliştirmek.',
    heroDesc: 'Uygulamalı Derslerin temel amacı; çocukların çok yönlü gelişimini desteklemek, yaratıcılıklarını ortaya çıkarmak, öğrenmeyi keyifli hale getirmek ve özgüven ile ifade becerilerini geliştirmektir. "Biz yeteneği aramıyoruz, ortaya çıkarıyoruz. Okul sadece akademik değil, hayatın provasıdır."',
    items: [
      { code: '1', label: 'Müzik Eğitimi — Enstrüman Temelli Yapı (Bireysel ve Grup Çalışmaları)' },
      { code: '2', label: 'Görsel Sanatlar — Atölye Temelli Eğitim (Resim, Seramik, Dijital Sanat)' },
      { code: '3', label: 'Beden Eğitimi ve Spor — Branşlaşma Modeli (Basketbol, Voleybol, Yüzme, Dans)' },
      { code: '4', label: 'Oyun Temelli Öğrenme (Anaokulu) — Oyun Dersi, Dans, Drama, Bilişim' },
      { code: '5', label: 'Okul Sonrası Kurslar ve Kulüp Sistemi' },
    ],
    goals: [
      'Çocukların çok yönlü gelişimini desteklemek',
      'Yaratıcılıklarını ortaya çıkarmak',
      'Öğrenmeyi keyifli hale getirmek',
      'Özgüven ve ifade becerilerini geliştirmek',
      'Herkes bir alanda derinleşir',
    ],
    apply: 'Öğrenciler beden eğitimi dersi kapsamında branş seçimi yapar; temel kondisyon ve branşa özgü teknik eğitim alır. Yetenekli öğrenciler için ileri seviye yönlendirme sağlanır. Gönüllülük esaslı kulüp ve kurslar performans, sergi, turnuva ve gösteri odaklı yürütülür.',
    sections: [
      {
        type: 'intro',
        title: 'Uygulamalı Derslerin Amacı',
        content: 'Kolej Sancaktepe TED AD Koleji\'nde uygulamalı derslerin temel amacı;\n\n• çocukların çok yönlü gelişimini desteklemek\n\n• yaratıcılıklarını ortaya çıkarmak\n\n• öğrenmeyi keyifli hale getirmek\n\n• özgüven ve ifade becerilerini geliştirmektir.\n\nBu program sayesinde öğrenciler yalnızca akademik bilgi edinmez; aynı zamanda keşfeden, düşünen ve üreten bireyler olarak gelişir.'
      },
      {
        type: 'group',
        title: 'Sanat Derslerinde Branşlaşma ve Uygulamalı Model',
        items: [
          {
            title: 'Müzik Eğitimi – Enstrüman Temelli Yapı',
            subitems: [
              'Öğrencilerin ilgi ve yatkınlıklarına göre enstrüman seçimi',
              'Temel müzik okuryazarlığı',
              'Uygulamalı enstrüman eğitimi',
              'Bireysel ve grup çalışmaları',
              'Dönem sonu dinleti, performans ve sahne çalışmaları',
              'Amaç: Müziği dinleyen değil, üreten ve icra eden öğrenci yetiştirmek.'
            ]
          },
          {
            title: 'Görsel Sanatlar – Atölye Temelli Eğitim',
            subitems: [
              'Resim',
              'desen',
              'seramik',
              'dijital sanat',
              'Ürün odaklı çalışma (eser ortaya koyma)',
              'Sergi, portfolyo ve süreç değerlendirmesi',
              'Sanat tarihi ve çağdaş sanatla bağ kurma',
              'Amaç: Sanatı ders değil, ifade alanı haline getirmek.'
            ]
          }
        ]
      },
      {
        type: 'group',
        title: 'Beden Eğitimi ve Spor – Branşlaşma Modeli',
        items: [
          {
            title: 'Spor Branşları',
            subitems: [
              'Basketbol',
              'Voleybol',
              'Yüzme',
              'Hentbol',
              'Futbol',
              'Masa tenisi',
              'Badminton',
              'Dans (modern, ritmik, halk dansları vb.)',
              'Atletizm ve temel kondisyon'
            ]
          },
          {
            title: 'Uygulama',
            subitems: [
              'Öğrenciler beden eğitimi dersi kapsamında branş seçimi yapar',
              'Temel kondisyon + branşa özgü teknik eğitim',
              'Yetenekli öğrenciler için ileri seviye yönlendirme',
              'Amaç: "Herkes her şeyi yapar" yerine, "Herkes bir alanda derinleşir."'
            ]
          }
        ]
      },
      {
        type: 'group',
        title: 'Okul Sonrası Kurslar ve Kulüp Sistemi',
        items: [
          {
            title: 'Akademik, Sanatsal ve Sportif Kurslar',
            subitems: [
              'Enstrüman kursları',
              'Spor branşı kulüpleri',
              'Drama ve tiyatro',
              'Robotik ve kodlama',
              'Sanat atölyeleri'
            ]
          },
          {
            title: 'Yapı',
            subitems: [
              'Gönüllülük esaslı',
              'Yetenek ve ilgiye göre yönlendirme',
              'Performans, sergi, turnuva ve gösteri odaklı',
              '"Biz yeteneği aramıyoruz, ortaya çıkarıyoruz. Okul sadece akademik değil, hayatın provasıdır."'
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'clil',
    tag: 'CLIL & Co-Teaching Programı',
    title: 'CLIL & Co-Teaching Programı',
    subtitle: 'Anaokulu, İlkokul, Ortaokul 5-6. Sınıf',
    color: '#4c1d95',
    accent: '#8b5cf6',
    desc: 'Fen Bilimleri ve Matematik dersleri, alan öğretmeni ile İngilizce öğretmeninin birlikte yürüttüğü CLIL temelli çift öğretmen modeliyle işlenir.',
    heroDesc: 'CLIL & Co-Teaching programında Fen Bilimleri ve Matematik dersleri, alan öğretmeni ile İngilizce öğretmeninin birlikte yürüttüğü CLIL temelli çift öğretmen modeliyle işlenir. Böylece öğrenciler hem akademik kavramları hem de akademik İngilizceyi eş zamanlı geliştirir.',
    items: [
      { code: '▸', label: 'Fen Bilimleri — Çift Öğretmen Modeli' },
      { code: '▸', label: 'Matematik — Çift Öğretmen Modeli' },
      { code: '▸', label: 'Akademik Kavramlar + Akademik İngilizce Eş Zamanlı' },
    ],
    goals: [
      'Akademik kavramları öğrenmek',
      'Akademik İngilizceyi eş zamanlı geliştirmek',
      'İçerik ve dili birlikte öğrenmek',
      'CLIL modeli ile derin öğrenme',
    ],
    apply: 'Fen Bilimleri ve Matematik dersleri, alan öğretmeni ile İngilizce öğretmeninin birlikte yürüttüğü CLIL temelli çift öğretmen modeliyle işlenir.',
    details: [
      { title: 'Çift Öğretmen Modeli', desc: 'Alan öğretmeni ve İngilizce öğretmeni birlikte ders yürütür. Akademik içerik ve dil becerisi eş zamanlı gelişir.' },
      { title: 'CLIL Yaklaşımı', desc: 'Content and Language Integrated Learning (İçerik ve Dil Entegre Öğrenme). Dil, içerik öğreniminin aracıdır.' },
      { title: 'Kademeler', desc: 'Anaokulu, İlkokul ve Ortaokul 5-6. sınıflarda uygulanır.' },
    ],
  },

  {
    id: 'ap',
    tag: 'AP (Advanced Placement)',
    title: 'AP (Advanced Placement)',
    subtitle: 'Lise Kademesi',
    color: '#166534',
    accent: '#22c55e',
    logo: '/logo/ap%20logo.png',
    desc: 'Amerika Birleşik Devletleri merkezli College Board kurumu tarafından yürütülen lise öğrencilerine yönelik üniversite seviyesinde dersler ve sınavlar.',
    heroDesc: 'AP (Advanced Placement), Amerika Birleşik Devletleri merkezli College Board kurumu tarafından yürütülen ve lise öğrencilerine yönelik üniversite seviyesinde dersleri ve bunların sınavlarını içeren bir programdır. AP programına katılan öğrenciler, lise eğitimi sırasında ileri düzey dersler alır.',
    items: [
      { code: '▸', label: 'Üniversite Kredisi ve Muafiyet — Başarılı öğrenciler ders muafiyeti alabilir' },
      { code: '▸', label: 'Akademik Öne Geçiş — Erken mezuniyet, çift anadal, burs avantajı' },
      { code: '▸', label: 'Uluslararası Geçerlilik — 60+ ülkede tanınır' },
      { code: '▸', label: 'Akademik Becerilerin Gelişimi — Eleştirel düşünme, ileri düzey çalışma' },
      { code: '▸', label: 'AP Sınavları — Her yıl Mayıs ayında, 1-5 arası puanlama' },
    ],
    goals: [
      'Üniversite kredi transferi ile zaman ve maliyet avantajı',
      'Uluslararası akademik standartlarla erken tanışmak',
      'Akademik başarı ve düşünme becerilerini üst düzeye taşımak',
      'Global ölçekte rekabetçi profil oluşturmak',
    ],
    apply: 'AP sınavları her yıl yalnızca Mayıs ayında yapılır ve dünyanın her yerinde aynı dönemde uygulanır. Öğrenciler bir yıl içinde birden fazla AP sınavına girebilir. Alınan her AP puanı, öğrencilerin ilerideki üniversite başvurularında akademik bir referans olarak kullanılabilir.',
    details: [
      { title: 'Üniversite Kredisi', desc: 'Başarılı öğrenciler yurt dışı ve Türkiye\'deki bazı vakıf üniversitelerinde ders muafiyeti alabilir. 3 ve üzeri puan başarı göstergesi kabul edilir.' },
      { title: 'Akademik Öne Geçiş', desc: 'Erken mezuniyet imkanı, çift anadal programlarına kolay kabul, burs ve ödül başvurularında avantaj. 3 veya daha fazla AP sınavından en az 3 puan alan öğrencilere AP Scholar unvanı verilir.' },
      { title: 'Uluslararası Geçerlilik', desc: 'ABD başta olmak üzere 60+ ülkede üniversiteler tarafından tanınır. Her AP dersi için sınavlar, çoktan seçmeli ve yazılı bölümlerden oluşur.' },
      { title: 'AP Capstone', desc: 'Araştırma yapma, sunum ve iş birliği becerilerini geliştiren özel proje dersleri. AP International Diploma (APID) ve AP Capstone Diploma imkanı. Sınav sonuçları her yıl Temmuz ayında açıklanır.' },
    ],
  },

  {
    id: 'p4c',
    tag: 'P4C (Philosophy for Children)',
    title: 'P4C (Philosophy for Children)',
    subtitle: 'Anaokulu',
    color: '#831843',
    accent: '#f43f5e',
    desc: 'Çocuklar için felsefe programı. Kişilik geliştiren yetiler, sosyal yetiler ve mantıksal yetiler kazandırmak.',
    heroDesc: 'P4C (Philosophy for Children) programı, anaokulunda çocukların düşünme becerilerini, sosyal yetilerini ve mantıksal kapasitelerini geliştiren özel bir felsefe programıdır.',
    items: [
      { code: '1', label: 'Kişilik Geliştiren Yetiler — Özgüven, Kendi Düşüncelerini Oluşturma' },
      { code: '2', label: 'Sosyal Yetiler — Tartışmaya Hazır Bulunuşluk, Demokratik Anlayış' },
      { code: '3', label: 'Mantıksal Yetiler — Delillendirme Gücü, Eleştirel Düşünce' },
    ],
    goals: [
      'Çocukların kendilerine güven duymaları',
      'Kendi düşüncelerini oluşturma ve savunabilme',
      'Başkalarına karşı görüşlerini ifade edebilme',
      'Demokratik anlayış ve farklı çözümlere açık olma',
    ],
    apply: 'P4C programı anaokulunda düzenli olarak uygulanır. Çocuklar grup tartışmaları, sorgulama ve düşünme egzersizleri ile mantıksal ve sosyal becerilerini geliştirir.',
    details: [
      { title: 'Kişilik Geliştiren Yetiler', desc: 'Çocukların kendilerine güven duymaları, nedenlere dayandırılabilen kendi düşüncelerini oluşturma, kendi kendilerini kritik edebilme, başkalarına karşı kendi görüşlerini savunabilme ve gerektiğinde hayır diyebilmek.' },
      { title: 'Sosyal Yetiler', desc: 'Tartışmaya hazır bulunuşluk, başka görüşleri kabullenme, demokratik anlayış, farklı çözüm ve önerilere açık olma, biz duygusunu yaşamak, iletişim becerilerinin artması, çatışma veya eleştiriyi zenginlik olarak tanıma ve kabul etme.' },
      { title: 'Mantıksal Yetiler', desc: 'Delillendirme gücü ve yetisi, eleştirel ve mantıklı düşünce, değerlendirme ve yargılama gücünü destekleme, geliştirme.' },
    ],
  },

  // ════════════════════════════════════════════════
  // SUB-PROGRAMS (BÖGEP)
  // ════════════════════════════════════════════════

  {
    id: 'ssp',
    parent: 'bogep',
    tag: 'SSP',
    title: 'SSP – Sosyal Sorumluluk Programı',
    subtitle: 'Social Responsibility Program',
    color: '#232e5c',
    accent: '#e61936',
    desc: 'Öğrencilerin toplumsal sorunlara duyarlı, sorumluluk alan ve çözüm üretebilen bireyler olarak yetişmesini sağlamak.',
    heroDesc: 'SSP – Sosyal Sorumluluk Programı, öğrencilerin toplumsal sorunlara duyarlı, sorumluluk alan ve çözüm üretebilen bireyler olarak yetişmesini sağlar.',
    items: [
      { code: '●', label: 'Toplum hizmeti projeleri' },
      { code: '●', label: 'Yerel ve küresel sosyal sorunlar' },
      { code: '●', label: 'Gönüllülük çalışmaları' },
      { code: '●', label: 'SDGs (BM Sürdürülebilir Kalkınma Amaçları) ile ilişkilendirilmiş projeler' },
    ],
    goals: [
      'Empati ve etik farkındalık',
      'Aktif yurttaşlık',
      'Sosyal etki yaratma bilinci',
    ],
    apply: 'Toplum hizmeti projeleri, gönüllülük çalışmaları ve SDGs ile ilişkilendirilmiş projelerle uygulanır.',
  },

  {
    id: 'lll',
    parent: 'bogep',
    tag: 'LLL',
    title: 'LLL – Yaşam Boyu Öğrenme Programı',
    subtitle: 'Life Long Learning Program',
    color: '#232e5c',
    accent: '#e61936',
    desc: 'Öğrencinin öğrenmeyi okul ile sınırlı görmemesini, merak eden ve kendini sürekli geliştiren bir birey olmasını sağlamak.',
    heroDesc: 'LLL – Yaşam Boyu Öğrenme Programı, öğrencinin öğrenmeyi okul ile sınırlı görmemesini, merak eden ve kendini sürekli geliştiren bir birey olmasını sağlar.',
    items: [
      { code: '●', label: 'Öğrenmeyi öğrenme becerileri' },
      { code: '●', label: 'Okuma kültürü ve araştırma alışkanlıkları' },
      { code: '●', label: 'Dijital ve akademik okuryazarlık' },
      { code: '●', label: 'Kişisel ilgi alanlarına yönelik öğrenme yolları' },
    ],
    goals: [
      'Öz yönelimli öğrenme',
      'Merak ve öğrenme motivasyonu',
      'Değişen dünyaya uyum becerisi',
    ],
    apply: 'Öğrenmeyi öğrenme becerileri, okuma kültürü ve araştırma alışkanlıkları ile uygulanır.',
  },

  {
    id: 'ode',
    parent: 'bogep',
    tag: 'ODE',
    title: 'ODE – Okul Dışı Etkinlikler Programı',
    subtitle: 'Out of School Experiences',
    color: '#232e5c',
    accent: '#e61936',
    desc: 'Öğrenmenin sadece sınıfla sınırlı olmadığını göstermek ve öğrenciyi gerçek yaşamla buluşturmak.',
    heroDesc: 'ODE – Okul Dışı Etkinlikler Programı, öğrenmenin sadece sınıfla sınırlı olmadığını göstermek ve öğrenciyi gerçek yaşamla buluşturmak için tasarlanmıştır.',
    items: [
      { code: '●', label: 'Müze, tiyatro, bilim merkezi ziyaretleri' },
      { code: '●', label: 'Şehir keşifleri ve kültürel geziler' },
      { code: '●', label: 'Doğa kampları ve outdoor öğrenme' },
      { code: '●', label: 'Proje gezileri (yerel ve ulusal)' },
    ],
    goals: [
      'Deneyim temelli öğrenme',
      'Kültürel sermaye',
      'Estetik ve sanat farkındalığı',
    ],
    apply: 'Müze, tiyatro, bilim merkezi ziyaretleri, şehir keşifleri, doğa kampları ve proje gezileri ile uygulanır.',
  },

  {
    id: 'mp',
    parent: 'bogep',
    tag: 'MP',
    title: 'MP – Mentörlük & Rehberlik Programı',
    subtitle: 'Mentorship & PDR Program',
    color: '#232e5c',
    accent: '#e61936',
    desc: 'Öğrencinin akademik, sosyal ve duygusal gelişimini bireysel olarak desteklemek.',
    heroDesc: 'MP – Mentörlük & Rehberlik Programı, öğrencinin akademik, sosyal ve duygusal gelişimini bireysel olarak destekler.',
    items: [
      { code: '●', label: 'Bireyselleştirilmiş destek' },
      { code: '●', label: 'Kariyer yönlendirme ve gelecek planlama' },
      { code: '●', label: 'Sosyal-duygusal danışmanlık' },
      { code: '●', label: 'Ebeveyn-öğretmen-öğrenci iş birliği' },
    ],
    goals: [
      'Öz-farkındalık',
      'Karar alma becerileri',
      'Bireysel potansiyeli gerçekleştirme',
    ],
    apply: 'Bireyselleştirilmiş destek, kariyer yönlendirme ve sosyal-duygusal danışmanlık ile uygulanır.',
  },

  {
    id: 'top',
    parent: 'bogep',
    tag: 'TÖP',
    title: 'TÖP – Tematik Öğrenme Programı (MH)',
    subtitle: 'Thematic Learning Program – Multidisciplinary Hub',
    color: '#232e5c',
    accent: '#e61936',
    desc: 'Öğrencilerin farklı disiplinleri bir arada düşünmesini ve derin öğrenme yaşamasını sağlamak.',
    heroDesc: 'TÖP – Tematik Öğrenme Programı, öğrencilerin farklı disiplinleri bir arada düşünmesini ve derin öğrenme yaşamasını sağlar.',
    items: [
      { code: '●', label: 'Disiplinler arası proje haftaları' },
      { code: '●', label: 'Tema odaklı öğrenme üniteleri' },
      { code: '●', label: 'Ortak alan (hub) çalışmaları' },
      { code: '●', label: 'Gerçek yaşam bağlantılı problemler' },
    ],
    goals: [
      'Bütüncül düşünme',
      'Eleştirel bakış',
      'Yaratıcı problem çözme',
    ],
    apply: 'Disiplinler arası proje haftaları, tema odaklı öğrenme üniteleri ve hub çalışmaları ile uygulanır.',
  },

  // ════════════════════════════════════════════════
  // SUB-PROGRAMS (KVYOD)
  // ════════════════════════════════════════════════

  {
    id: 'kvyod-ortaokul',
    parent: 'kvyod',
    tag: 'Ortaokul',
    title: 'KVYOD — Ortaokul',
    subtitle: 'Kimlik, Düşünme, Dünya ile Bağ Kurma',
    color: '#059669',
    accent: '#34d399',
    desc: 'Ortaokul programı, öğrencilerin kimlik oluşturma, eleştirel düşünme ve dünya ile bağ kurma süreçlerini destekler.',
    heroDesc: 'Ortaokul KVYOD programı, öğrencilerin kimlik oluşturma, eleştirel düşünme ve dünya ile bağ kurma süreçlerini destekler.',
    items: [
      { code: '●', label: 'Düşünme ve Anlamlandırma Dersleri' },
      { code: '●', label: 'Dünya Toplum ve Kültür' },
      { code: '●', label: 'Yaşam Becerileri ve Kendini Tanıma' },
    ],
    goals: [
      'Kimlik oluşturma',
      'Eleştirel düşünme',
      'Dünya ile bağ kurma',
    ],
    apply: 'Düşünme ve Anlamlandırma Dersleri, Dünya Toplum ve Kültür, Yaşam Becerileri dersleri ile uygulanır.',
  },

  {
    id: 'kvyod-lise',
    parent: 'kvyod',
    tag: 'Lise',
    title: 'KVYOD — Lise',
    subtitle: 'Yön, Anlam ve Gelecek',
    color: '#059669',
    accent: '#10b981',
    desc: 'Lise programı, öğrencinin yaşamına yön verdiği, geleceğini bilinçli biçimde tasarladığı ve toplumsal sorumluluk üstlendiği bir evre.',
    heroDesc: 'Lise KVYOD programı, öğrencinin yaşamına yön verdiği, geleceğini bilinçli biçimde tasarladığı ve toplumsal sorumluluk üstlendiği bir evre olarak kurgulanmıştır.',
    items: [
      { code: '●', label: 'Akademik Derinleşme ve Disiplinlerarası Dersler' },
      { code: '●', label: 'Gelecek Meslek ve Yaşam Tasarımı' },
      { code: '●', label: 'Toplumsal Sorumluluk ve Etki' },
    ],
    goals: [
      'Yaşamına yön verme',
      'Geleceğini bilinçli tasarlama',
      'Toplumsal sorumluluk üstlenme',
    ],
    apply: 'Akademik Derinleşme, Gelecek Tasarımı ve Toplumsal Sorumluluk dersleri ile uygulanır.',
  },

  {
    id: 'sdgs',
    parent: 'kvyod',
    tag: 'SDGs',
    title: 'BM Sürdürülebilir Kalkınma Amaçları Entegrasyonu',
    subtitle: 'Sustainable Goals',
    color: '#059669',
    accent: '#10b981',
    desc: 'TED AD eğitim modeli, Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları ile doğrudan ilişkilendirilir.',
    heroDesc: 'BM Sürdürülebilir Kalkınma Amaçları (SDGs) ile entegre eğitim modeli. Öğrenci projeleri ve ders içerikleri bu hedefler doğrultusunda tasarlanır.',
  },

  // ════════════════════════════════════════════════
  // SUB-PROGRAMS (Yabancı Dil)
  // ════════════════════════════════════════════════

  {
    id: 'ingilizce',
    parent: 'yabanci-dil',
    tag: 'İngilizce',
    title: 'Kolej Sancaktepe TED AD - İngilizce Yabancı Dil Programı',
    subtitle: 'K12 — Tüm Kademeler',
    color: '#1e40af',
    accent: '#3b82f6',
    desc: 'Bir ders saati değil yaşam alanı; bir dil bilgisi sistemi değil anlam ve iletişim aracı.',
    heroDesc: 'Kolej Sancaktepe TED AD\'de İngilizce; bir ders saati değil yaşam alanıdır, bir dil bilgisi sistemi değil anlam ve iletişim aracıdır, bir sınav hedefi değil dünya ile bağ kurma yoludur.',
    items: [
      { code: '●', label: 'İçerik tabanlı öğrenme (BBC Modeli)' },
      { code: '●', label: 'Konuşma ve tartışma pratikleri' },
      { code: '●', label: 'English Movie Nights' },
      { code: '●', label: 'İngilizce tiyatro ve drama' },
      { code: '●', label: 'Disiplinlerarası entegrasyon' },
      { code: '●', label: 'Cambridge modeli' },
    ],
    goals: [
      'Dili anlam ve iletişim aracı olarak kullanmak',
      'İçerik tabanlı öğrenme',
      'Eleştirel düşünme ve kültürel okuma',
    ],
    apply: 'İçerik tabanlı öğrenme, konuşma pratikleri, tiyatro ve disiplinlerarası çalışmalarla uygulanır.',
  },

  {
    id: 'almanca',
    parent: 'yabanci-dil',
    tag: 'Almanca',
    title: 'Kolej Sancaktepe TED AD - Almanca İkinci Yabancı Dil Programı',
    subtitle: 'İlkokul ve Ortaokul',
    color: '#7c2d12',
    accent: '#ea580c',
    desc: 'Avrupa Kültürü, Akademik Dil ve Uluslararası Bağlantı Modeli. Çok dilli düşünme becerisi geliştirme.',
    heroDesc: 'Kolej Sancaktepe TED AD\'de Almanca öğretimi, öğrencilerin Avrupa kültürü ve uluslararası eğitim olanakları ile güçlü bağlar kurmasını sağlayan stratejik bir öğrenme alanıdır.',
    items: [
      { code: '●', label: 'İletişim temelli dil öğrenimi' },
      { code: '●', label: 'Drama ve kültür etkinlikleri' },
      { code: '●', label: 'Alman sineması ve medya çalışmaları' },
      { code: '●', label: 'Disiplinlerarası entegrasyon' },
      { code: '●', label: 'Avrupa kültürü' },
    ],
    goals: [
      'Çok dilli düşünme becerisi',
      'Avrupa kültürü farkındalığı',
      'Uluslararası eğitim olanakları',
    ],
    apply: 'İletişim temelli öğrenme, drama, kültür etkinlikleri ve medya çalışmaları ile uygulanır.',
  },
];
