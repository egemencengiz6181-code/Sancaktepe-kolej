import { lazy, Suspense } from 'react';
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
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ModalProvider>
    </ThemeProvider>
  );
}
