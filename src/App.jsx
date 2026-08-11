import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';

// Below-the-fold sections: lazy-loaded for faster initial paint
const BentoGrid  = lazy(() => import('./components/BentoGrid'));
const About      = lazy(() => import('./components/About'));
const Skills     = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects   = lazy(() => import('./components/Projects'));
const Contact    = lazy(() => import('./components/Contact'));
const Footer     = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

const SectionFallback = () => (
  <div style={{ minHeight: '200px' }} aria-hidden="true" />
);

function App() {
  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ParticleBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <BentoGrid />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;
