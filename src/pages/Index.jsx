import BackgroundAnimation from '../components/BackgroundAnimation';
import Navigation from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import Skills from '../components/Skills';
import Learning from '../components/Learning';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
// import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-w-[100vw] min-h-screen">
      <BackgroundAnimation />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Values />
        <Skills />
        <Learning />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;