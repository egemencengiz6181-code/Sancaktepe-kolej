import { lazy, Suspense, Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { ModalProvider } from './context/ModalContext';
import { ThemeProvider } from './context/ModalContext';
import ContactModal from './components/ContactModal';
import FloatingContact from './components/FloatingContact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const HakkimizdaPage = lazy(() => import('./pages/HakkimizdaPage'));
const ProgramlarPage = lazy(() => import('./pages/ProgramlarPage'));
const ProgramDetayPage = lazy(() => import('./pages/ProgramDetayPage'));
const SiniflarPage = lazy(() => import('./pages/SiniflarPage'));
const SinifDetayPage = lazy(() => import('./pages/SinifDetayPage'));
const GaleriPage = lazy(() => import('./pages/GaleriPage'));
const IletisimPage = lazy(() => import('./pages/IletisimPage'));
const HaberlerPage = lazy(() => import('./pages/HaberlerPage'));
const HaberDetayPage = lazy(() => import('./pages/HaberDetayPage'));
const KampusPage = lazy(() => import('./pages/KampusPage'));
const TEDPage = lazy(() => import('./pages/TEDPage'));
const AkademikKadroPage = lazy(() => import('./pages/AkademikKadroPage'));
const VizMisyonPage = lazy(() => import('./pages/VizMisyonPage'));
const KayitKosullariPage = lazy(() => import('./pages/kayit/KayitKosullariPage'));
const BurslarPage = lazy(() => import('./pages/kayit/BurslarPage'));
const KayitUcretleriPage = lazy(() => import('./pages/kayit/KayitUcretleriPage'));
const YurtDisindanKayitPage = lazy(() => import('./pages/kayit/YurtDisindanKayitPage'));
const LiseKayitPage = lazy(() => import('./pages/kayit/LiseKayitPage'));
const OrtaokulKayitPage = lazy(() => import('./pages/kayit/OrtaokulKayitPage'));
const OkulOncesiIlkokulKayitPage = lazy(() => import('./pages/kayit/OkulOncesiIlkokulKayitPage'));
const BasvuruFormuPage = lazy(() => import('./pages/kayit/BasvuruFormuPage'));
const FizikiYapiPage = lazy(() => import('./pages/kampus/FizikiYapiPage'));
const SporTesisleriPage = lazy(() => import('./pages/kampus/SporTesisleriPage'));
const SaglikHizmetleriPage = lazy(() => import('./pages/kampus/SaglikHizmetleriPage'));
const KutuphanePage = lazy(() => import('./pages/kampus/KutuphanePage'));
const AtolyelerPage = lazy(() => import('./pages/kampus/AtolyelerPage'));
const YemekHizmetleriPage = lazy(() => import('./pages/kampus/YemekHizmetleriPage'));
const UlasimHizmetleriPage = lazy(() => import('./pages/kampus/UlasimHizmetleriPage'));
const GuvenlikHizmetleriPage = lazy(() => import('./pages/kampus/GuvenlikHizmetleriPage'));
const LaboratuvarlarPage = lazy(() => import('./pages/kampus/LaboratuvarlarPage'));
const UluslararasiProgramlarPage = lazy(() => import('./pages/programlar/UluslararasiProgramlarPage'));
const APSinavMerkeziPage = lazy(() => import('./pages/programlar/APSinavMerkeziPage'));
const OlcmeDegerlendirmePage = lazy(() => import('./pages/birimler/OlcmeDegerlendirmePage'));
const PDRPage = lazy(() => import('./pages/birimler/PDRPage'));
const SKSPage = lazy(() => import('./pages/birimler/SKSPage'));
const YabanciDilPage = lazy(() => import('./pages/birimler/YabanciDilPage'));
const FarkYaratanProgramlarPage = lazy(() => import('./pages/birimler/FarkYaratanProgramlarPage'));
const OkulOncesiGenelPage = lazy(() => import('./pages/siniflar/okul-oncesi/OkulOncesiGenelPage'));
const OkulOncesiBransPage = lazy(() => import('./pages/siniflar/okul-oncesi/OkulOncesiBransPage'));
const OkulOncesiPDRPage = lazy(() => import('./pages/siniflar/okul-oncesi/OkulOncesiPDRPage'));
const OkulOncesiCizelgePage = lazy(() => import('./pages/siniflar/okul-oncesi/OkulOncesiCizelgePage'));
const IlkokulGenelPage = lazy(() => import('./pages/siniflar/ilkokul/IlkokulGenelPage'));
const IlkokulBransPage = lazy(() => import('./pages/siniflar/ilkokul/IlkokulBransPage'));
const IlkokulUygulamalarPage = lazy(() => import('./pages/siniflar/ilkokul/IlkokulUygulamalarPage'));
const IlkokulPDRPage = lazy(() => import('./pages/siniflar/ilkokul/IlkokulPDRPage'));
const IlkokulDegerlerPage = lazy(() => import('./pages/siniflar/ilkokul/IlkokulDegerlerPage'));
const IlkokulCizelgePage = lazy(() => import('./pages/siniflar/ilkokul/IlkokulCizelgePage'));
const OrtaokulGenelPage = lazy(() => import('./pages/siniflar/ortaokul/OrtaokulGenelPage'));
const OrtaokulBransPage = lazy(() => import('./pages/siniflar/ortaokul/OrtaokulBransPage'));
const OrtaokulUygulamalarPage = lazy(() => import('./pages/siniflar/ortaokul/OrtaokulUygulamalarPage'));
const OrtaokulPDRPage = lazy(() => import('./pages/siniflar/ortaokul/OrtaokulPDRPage'));
const OrtaokulCizelgePage = lazy(() => import('./pages/siniflar/ortaokul/OrtaokulCizelgePage'));
const LiseGenelPage = lazy(() => import('./pages/siniflar/lise/LiseGenelPage'));
const LiseUluslararasiPage = lazy(() => import('./pages/siniflar/lise/LiseUluslararasiPage'));
const LiseAkademikBolumlerPage = lazy(() => import('./pages/siniflar/lise/LiseAkademikBolumlerPage'));
const LiseRehberlikPage = lazy(() => import('./pages/siniflar/lise/LiseRehberlikPage'));
const LiseYurtIciPage = lazy(() => import('./pages/siniflar/lise/LiseYurtIciPage'));
const LiseYurtDisiPage = lazy(() => import('./pages/siniflar/lise/LiseYurtDisiPage'));
const LiseCizelgePage = lazy(() => import('./pages/siniflar/lise/LiseCizelgePage'));
const AkreditasyonDanismanlikPage = lazy(() => import('./pages/kurumsal/AkreditasyonDanismanlikPage'));

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error) {
    // Reload on chunk load errors (stale deployment cache)
    if (error?.name === 'ChunkLoadError' || /Loading chunk/.test(error?.message)) {
      window.location.reload();
    }
  }
  render() {
    if (this.state.hasError) return <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontFamily: 'sans-serif', fontSize: '1rem' }}>Sayfa yüklenemedi. <button onClick={() => window.location.reload()} style={{ marginLeft: 8, color: 'var(--red)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Yenile</button></div>;
    return this.props.children;
  }
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ContactModal />
      <FloatingContact />
      <main style={{ paddingTop: '0' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
    <ModalProvider>
      <BrowserRouter>
        <Layout>
          <ErrorBoundary>
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hakkimizda" element={<HakkimizdaPage />} />
              <Route path="/programlar" element={<ProgramlarPage />} />
              <Route path="/programlar/:id" element={<ProgramDetayPage />} />
              <Route path="/siniflar" element={<SiniflarPage />} />
              <Route path="/siniflar/:id" element={<SinifDetayPage />} />
              <Route path="/galeri" element={<GaleriPage />} />
              <Route path="/iletisim" element={<IletisimPage />} />
              <Route path="/haberler" element={<HaberlerPage />} />
              <Route path="/haberler/:slug" element={<HaberDetayPage />} />
              <Route path="/kampus" element={<KampusPage />} />
              <Route path="/ted" element={<TEDPage />} />
              <Route path="/akademik-kadro" element={<AkademikKadroPage />} />
              <Route path="/vizyon-misyon" element={<VizMisyonPage />} />
              <Route path="/kayit/kosullar" element={<KayitKosullariPage />} />
              <Route path="/kayit/burslar" element={<BurslarPage />} />
              <Route path="/kayit/ucretler" element={<KayitUcretleriPage />} />
              <Route path="/kayit/basvuru-formu" element={<BasvuruFormuPage />} />
              <Route path="/kampus/fiziki-yapi" element={<FizikiYapiPage />} />
              <Route path="/kampus/spor-tesisleri" element={<SporTesisleriPage />} />
              <Route path="/kampus/saglik-hizmetleri" element={<SaglikHizmetleriPage />} />
              <Route path="/kampus/kutuphane" element={<KutuphanePage />} />
              <Route path="/kampus/atolyeler" element={<AtolyelerPage />} />
              <Route path="/kampus/yemek-hizmetleri" element={<YemekHizmetleriPage />} />
              <Route path="/kampus/ulasim-hizmetleri" element={<UlasimHizmetleriPage />} />
              <Route path="/kampus/guvenlik-hizmetleri" element={<GuvenlikHizmetleriPage />} />
              <Route path="/kampus/laboratuvarlar" element={<LaboratuvarlarPage />} />
              <Route path="/programlar/uluslararasi" element={<UluslararasiProgramlarPage />} />
              <Route path="/programlar/ap-sinav-merkezi" element={<APSinavMerkeziPage />} />
              <Route path="/birimler/olcme-degerlendirme" element={<OlcmeDegerlendirmePage />} />
              <Route path="/birimler/pdr" element={<PDRPage />} />
              <Route path="/birimler/sks" element={<SKSPage />} />
              <Route path="/birimler/yabanci-dil" element={<YabanciDilPage />} />
              <Route path="/birimler/fark-yaratan-programlar" element={<FarkYaratanProgramlarPage />} />
              <Route path="/kurumsal/akreditasyon-danismanlik" element={<AkreditasyonDanismanlikPage />} />
              <Route path="/siniflar/okul-oncesi/genel-bilgiler" element={<OkulOncesiGenelPage />} />
              <Route path="/siniflar/okul-oncesi/brans-dersleri" element={<OkulOncesiBransPage />} />
              <Route path="/siniflar/okul-oncesi/pdr" element={<OkulOncesiPDRPage />} />
              <Route path="/siniflar/okul-oncesi/haftalik-cizelge" element={<OkulOncesiCizelgePage />} />
              <Route path="/siniflar/ilkokul/genel-bilgiler" element={<IlkokulGenelPage />} />
              <Route path="/siniflar/ilkokul/brans-dersleri" element={<IlkokulBransPage />} />
              <Route path="/siniflar/ilkokul/uygulamalar-projeler" element={<IlkokulUygulamalarPage />} />
              <Route path="/siniflar/ilkokul/pdr" element={<IlkokulPDRPage />} />
              <Route path="/siniflar/ilkokul/degerler-egitimi" element={<IlkokulDegerlerPage />} />
              <Route path="/siniflar/ilkokul/haftalik-cizelge" element={<IlkokulCizelgePage />} />
              <Route path="/siniflar/ortaokul/genel-bilgiler" element={<OrtaokulGenelPage />} />
              <Route path="/siniflar/ortaokul/brans-dersleri" element={<OrtaokulBransPage />} />
              <Route path="/siniflar/ortaokul/uygulamalar-projeler" element={<OrtaokulUygulamalarPage />} />
              <Route path="/siniflar/ortaokul/pdr" element={<OrtaokulPDRPage />} />
              <Route path="/siniflar/ortaokul/haftalik-cizelge" element={<OrtaokulCizelgePage />} />
              <Route path="/siniflar/lise/genel-bilgiler" element={<LiseGenelPage />} />
              <Route path="/siniflar/lise/uluslararasi-programlar" element={<LiseUluslararasiPage />} />
              <Route path="/siniflar/lise/akademik-bolumler" element={<LiseAkademikBolumlerPage />} />
              <Route path="/siniflar/lise/rehberlik-kariyer" element={<LiseRehberlikPage />} />
              <Route path="/siniflar/lise/yurt-ici-universite" element={<LiseYurtIciPage />} />
              <Route path="/siniflar/lise/yurt-disi-universite" element={<LiseYurtDisiPage />} />
              <Route path="/siniflar/lise/haftalik-cizelge" element={<LiseCizelgePage />} />
            </Routes>
          </Suspense>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </ModalProvider>
    </ThemeProvider>
  );
}
