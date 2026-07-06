import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ILCELER = [
  'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy',
  'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece',
  'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa',
  'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik',
  'Sancaktepe', 'Sarıyer', 'Şile', 'Silivri', 'Şişli', 'Sultanbeyli', 'Sultangazi',
  'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu',
];

const MESLEKLER = [
  'İşçi', 'Memur', 'Esnaf/Tüccar', 'Serbest Meslek', 'Ev Hanımı', 'Öğretmen',
  'Doktor', 'Mühendis', 'Avukat', 'Bankacı', 'Emekli', 'İşsiz', 'Diğer',
];

const EGITIM_DURUMU = [
  'İlkokul Mezunu', 'Ortaokul Mezunu', 'Lise Mezunu', 'Ön Lisans Mezunu',
  'Lisans Mezunu', 'Yüksek Lisans Mezunu', 'Doktora Mezunu',
];

const SINIFLAR = [
  'Okul Öncesi (48 ay)', 'Okul Öncesi (60 ay)',
  '1. Sınıf', '2. Sınıf', '3. Sınıf', '4. Sınıf',
  '5. Sınıf', '6. Sınıf', '7. Sınıf', '8. Sınıf',
  'Lise Hazırlık', '9. Sınıf', '10. Sınıf',
];

const NEREDEN = [
  'Arkadaş/Tanıdık Tavsiyesi', 'TED Mezunu', 'Sosyal Medya', 'Arama Motoru',
  'Açık Kapı Etkinliği', 'Fuar/Etkinlik', 'Reklam/İlan', 'Diğer',
];

const inputStyle = {
  width: '100%', padding: '0.75rem 1rem',
  fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
  border: '1px solid var(--grey-light)', borderRadius: '8px',
  background: 'var(--white)', color: 'var(--text-dark)',
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  fontFamily: 'var(--font-display)', fontSize: '0.65rem',
  fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
  color: 'var(--primary)', display: 'block', marginBottom: '0.4rem',
};

const FormField = ({ label, children, required }) => (
  <div style={{ marginBottom: '1.25rem' }}>
    <label style={labelStyle}>{label}{required && <span style={{ color: 'var(--red)', marginLeft: '2px' }}>*</span>}</label>
    {children}
  </div>
);

const Input = (props) => (
  <input style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--primary)')} onBlur={e => (e.target.style.borderColor = 'var(--grey-light)')} {...props} />
);

const Select = ({ children, ...props }) => (
  <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} onFocus={e => (e.target.style.borderColor = 'var(--primary)')} onBlur={e => (e.target.style.borderColor = 'var(--grey-light)')} {...props}>
    {children}
  </select>
);

const RadioGroup = ({ name, options, value, onChange }) => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    {options.map(opt => (
      <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-mid)', cursor: 'pointer' }}>
        <input type="radio" name={name} value={opt} checked={value === opt} onChange={() => onChange(opt)} style={{ accentColor: 'var(--primary)' }} />
        {opt}
      </label>
    ))}
  </div>
);

const STEPS_INFO = [
  { num: 1, label: 'Öğrenci Bilgileri' },
  { num: 2, label: 'Veli / Anne' },
  { num: 3, label: 'Veli / Baba' },
  { num: 4, label: 'Onaylar' },
];

const KVKK_TEXT = `Kolej Sancaktepe olarak kişisel verilerinizi, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat çerçevesinde işlemekte, saklamakta ve korumaktayız. Verileriniz; eğitim-öğretim faaliyetleri, kayıt ve iletişim süreçleri ile yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılmaktadır.`;

export default function BasvuruFormuPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [ogrenci, setOgrenci] = useState({
    ad: '', soyad: '', uyruk: '', kimlikNo: '', dogumTarihi: '',
    sonOkul: '', cinsiyet: '', basvuruYili: '2026-2027', sinif: '', nereden: '',
  });

  const [anne, setAnne] = useState({
    ad: '', soyad: '', telefon: '', eposta: '', il: 'İstanbul',
    ilce: '', semt: '', meslek: '', egitim: '', tedMezunu: '',
  });

  const [baba, setBaba] = useState({
    ad: '', soyad: '', telefon: '', eposta: '', il: 'İstanbul',
    ilce: '', semt: '', meslek: '', egitim: '', tedMezunu: '',
  });

  const [onaylar, setOnaylar] = useState({
    kvkkAcikRiza: '',
    pazarlamaAcikRiza: '',
    elektronikIletisim: '',
  });

  const goNext = () => setStep(s => Math.min(s + 1, 4));
  const goBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const VeliFields = ({ data, set, prefix }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 1.5rem' }} className="form-grid">
      <FormField label="Adı" required><Input value={data.ad} onChange={e => set({ ...data, ad: e.target.value })} placeholder="Ad" /></FormField>
      <FormField label="Soyadı" required><Input value={data.soyad} onChange={e => set({ ...data, soyad: e.target.value })} placeholder="Soyad" /></FormField>
      <FormField label="Cep Telefonu" required><Input value={data.telefon} onChange={e => set({ ...data, telefon: e.target.value })} placeholder="05XX XXX XX XX" /></FormField>
      <FormField label="E-Posta Adresi" required><Input type="email" value={data.eposta} onChange={e => set({ ...data, eposta: e.target.value })} placeholder="ornek@eposta.com" /></FormField>
      <FormField label="İl">
        <Input value={data.il} onChange={e => set({ ...data, il: e.target.value })} placeholder="İstanbul" />
      </FormField>
      <FormField label="İlçe" required>
        <Select value={data.ilce} onChange={e => set({ ...data, ilce: e.target.value })}>
          <option value="">Seçiniz</option>
          {ILCELER.map(i => <option key={i}>{i}</option>)}
        </Select>
      </FormField>
      <FormField label="Semt">
        <Input value={data.semt} onChange={e => set({ ...data, semt: e.target.value })} placeholder="Semt / Mahalle" />
      </FormField>
      <FormField label="Mesleği" required>
        <Select value={data.meslek} onChange={e => set({ ...data, meslek: e.target.value })}>
          <option value="">Seçiniz</option>
          {MESLEKLER.map(m => <option key={m}>{m}</option>)}
        </Select>
      </FormField>
      <FormField label="Eğitim Durumu" required>
        <Select value={data.egitim} onChange={e => set({ ...data, egitim: e.target.value })}>
          <option value="">Seçiniz</option>
          {EGITIM_DURUMU.map(e => <option key={e}>{e}</option>)}
        </Select>
      </FormField>
      <FormField label="TED Mezunuyum">
        <RadioGroup name={`${prefix}-ted`} options={['Evet', 'Hayır']} value={data.tedMezunu} onChange={v => set({ ...data, tedMezunu: v })} />
      </FormField>
    </div>
  );

  return (
    <>
      <div className="page-hero">
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Kayıt</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1rem' }}>
              Başvuru Formu
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.85 }}>
              Kolej Sancaktepe'ye aday öğrenci başvurusu için aşağıdaki formu doldurunuz.
            </p>
          </motion.div>
        </div>
      </div>

      <section style={{ padding: '5rem 0 7rem', background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--red), var(--primary), transparent)' }} />
        <div className="section-container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* Step Indicator */}
            <div style={{ display: 'flex', gap: '0', marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(35,46,92,0.08)' }}>
              {STEPS_INFO.map((s, i) => (
                <div key={s.num} style={{
                  flex: 1, padding: '1rem', textAlign: 'center',
                  background: step === s.num ? 'var(--primary)' : step > s.num ? 'var(--primary-light)' : 'var(--white)',
                  borderRight: i < 3 ? '1px solid var(--grey-light)' : 'none',
                  transition: 'background 0.3s',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: step >= s.num ? '#fff' : 'var(--grey)', marginBottom: '0.2rem' }}>
                    {step > s.num ? '✓' : `0${s.num}`}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: step >= s.num ? 'rgba(255,255,255,0.85)' : 'var(--grey)', display: 'none' }} className="step-label">{s.label}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, color: step >= s.num ? '#fff' : 'var(--grey)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ background: 'var(--white)', borderRadius: '20px', padding: '4rem', textAlign: 'center', boxShadow: '0 4px 24px rgba(35,46,92,0.1)' }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Başvurunuz Alındı</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.85, maxWidth: '500px', margin: '0 auto' }}>
                  Başvurunuz başarıyla iletilmiştir. En kısa sürede kayıt ofisimiz sizinle iletişime geçecektir. Soru ve talepleriniz için{' '}
                  <a href="mailto:info@kolejsancaktepe.com" style={{ color: 'var(--red)', fontWeight: 600 }}>info@kolejsancaktepe.com</a> adresine yazabilirsiniz.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ background: 'var(--white)', borderRadius: '20px', padding: '2.5rem 3rem', boxShadow: '0 4px 24px rgba(35,46,92,0.08)' }} className="form-card">
                  <AnimatePresence mode="wait">
                    {/* STEP 1 — Öğrenci Bilgileri */}
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '2rem' }}>Öğrenci Bilgileri</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 1.5rem' }} className="form-grid">
                          <FormField label="Adı" required><Input value={ogrenci.ad} onChange={e => setOgrenci({ ...ogrenci, ad: e.target.value })} placeholder="Ad" /></FormField>
                          <FormField label="Soyadı" required><Input value={ogrenci.soyad} onChange={e => setOgrenci({ ...ogrenci, soyad: e.target.value })} placeholder="Soyad" /></FormField>
                          <FormField label="Uyruk" required>
                            <Select value={ogrenci.uyruk} onChange={e => setOgrenci({ ...ogrenci, uyruk: e.target.value })}>
                              <option value="">Seçiniz</option>
                              <option>T.C.</option>
                              <option>Yabancı Uyruklu</option>
                              <option>Çift Uyruklu</option>
                            </Select>
                          </FormField>
                          <FormField label="T.C. Kimlik No / Pasaport No" required><Input value={ogrenci.kimlikNo} onChange={e => setOgrenci({ ...ogrenci, kimlikNo: e.target.value })} placeholder="11 haneli T.C. kimlik no" maxLength={11} /></FormField>
                          <FormField label="Doğum Tarihi" required><Input type="date" value={ogrenci.dogumTarihi} onChange={e => setOgrenci({ ...ogrenci, dogumTarihi: e.target.value })} /></FormField>
                          <FormField label="En Son Okuduğu Okul"><Input value={ogrenci.sonOkul} onChange={e => setOgrenci({ ...ogrenci, sonOkul: e.target.value })} placeholder="Okul adı" /></FormField>
                          <FormField label="Cinsiyeti" required>
                            <RadioGroup name="cinsiyet" options={['Kız', 'Erkek']} value={ogrenci.cinsiyet} onChange={v => setOgrenci({ ...ogrenci, cinsiyet: v })} />
                          </FormField>
                          <FormField label="Başvuru Yılı">
                            <Select value={ogrenci.basvuruYili} onChange={e => setOgrenci({ ...ogrenci, basvuruYili: e.target.value })}>
                              <option>2026-2027</option>
                              <option>2027-2028</option>
                            </Select>
                          </FormField>
                          <FormField label="Kayıt Olacağı Sınıf" required>
                            <Select value={ogrenci.sinif} onChange={e => setOgrenci({ ...ogrenci, sinif: e.target.value })}>
                              <option value="">Seçiniz</option>
                              {SINIFLAR.map(s => <option key={s}>{s}</option>)}
                            </Select>
                          </FormField>
                          <FormField label="Nereden Duydunuz?">
                            <Select value={ogrenci.nereden} onChange={e => setOgrenci({ ...ogrenci, nereden: e.target.value })}>
                              <option value="">Seçiniz</option>
                              {NEREDEN.map(n => <option key={n}>{n}</option>)}
                            </Select>
                          </FormField>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2 — Anne */}
                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '2rem' }}>Veli Bilgileri — Anne</h2>
                        <VeliFields data={anne} set={setAnne} prefix="anne" />
                      </motion.div>
                    )}

                    {/* STEP 3 — Baba */}
                    {step === 3 && (
                      <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '2rem' }}>Veli Bilgileri — Baba</h2>
                        <VeliFields data={baba} set={setBaba} prefix="baba" />
                      </motion.div>
                    )}

                    {/* STEP 4 — Onaylar */}
                    {step === 4 && (
                      <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '2rem' }}>Genel Bilgiler ve Onaylar</h2>

                        {/* KVKK Metni */}
                        <div style={{
                          background: 'var(--off-white)', borderRadius: '10px', padding: '1.25rem',
                          fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)',
                          lineHeight: 1.75, marginBottom: '2rem', maxHeight: '140px', overflowY: 'auto',
                          border: '1px solid var(--grey-light)',
                        }}>
                          {KVKK_TEXT}
                        </div>

                        {[
                          {
                            key: 'kvkkAcikRiza',
                            title: 'Veli ve Öğrenci Açık Rıza Metni',
                            desc: 'Kolej Sancaktepe tarafından işlenecek kişisel verilerimin, KVKK kapsamındaki haklarım hakkında aydınlatıldım ve verilerimin işlenmesine açık rıza gösteriyorum.',
                          },
                          {
                            key: 'pazarlamaAcikRiza',
                            title: 'Pazarlama Açık Rıza Metni',
                            desc: 'Kolej Sancaktepe tarafından tanıtım, kampanya, etkinlik ve hizmetler hakkında bilgilendirme yapılmasına açık rıza gösteriyorum.',
                          },
                          {
                            key: 'elektronikIletisim',
                            title: 'Elektronik İletişim İzni',
                            desc: 'Kolej Sancaktepe tarafından e-posta, SMS ve diğer dijital kanallar aracılığıyla ticari elektronik ileti gönderilmesine onay veriyorum.',
                          },
                        ].map(item => (
                          <div key={item.key} style={{
                            border: '1px solid var(--grey-light)', borderRadius: '12px',
                            padding: '1.5rem', marginBottom: '1.25rem',
                          }}>
                            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.title}</p>
                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1rem' }}>{item.desc}</p>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                              {['İZİN VERİYORUM', 'İZİN VERMİYORUM'].map(opt => (
                                <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', color: onaylar[item.key] === opt ? 'var(--primary)' : 'var(--grey)', cursor: 'pointer', transition: 'color 0.2s' }}>
                                  <input
                                    type="radio"
                                    name={item.key}
                                    value={opt}
                                    checked={onaylar[item.key] === opt}
                                    onChange={() => setOnaylar({ ...onaylar, [item.key]: opt })}
                                    style={{ accentColor: 'var(--primary)' }}
                                  />
                                  {opt}
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--grey-light)' }}>
                    <button
                      type="button"
                      onClick={goBack}
                      disabled={step === 1}
                      style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                        letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem',
                        borderRadius: '6px', border: '2px solid var(--primary)', background: 'transparent',
                        color: step === 1 ? 'var(--grey-light)' : 'var(--primary)', cursor: step === 1 ? 'default' : 'pointer',
                        borderColor: step === 1 ? 'var(--grey-light)' : 'var(--primary)',
                        transition: 'all 0.2s',
                      }}
                    >
                      ← Geri
                    </button>

                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--grey)' }}>
                      {step} / 4
                    </div>

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        style={{
                          fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                          letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem',
                          borderRadius: '6px', border: 'none', background: 'var(--primary)', color: '#fff',
                          cursor: 'pointer', transition: 'background 0.2s',
                        }}
                      >
                        İleri →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        style={{
                          fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                          letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2.5rem',
                          borderRadius: '6px', border: 'none', background: 'var(--red)', color: '#fff',
                          cursor: 'pointer', boxShadow: '0 4px 16px rgba(230,25,54,0.3)',
                          transition: 'all 0.2s',
                        }}
                      >
                        Başvuruyu Gönder ✓
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
          .form-card { padding: 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
