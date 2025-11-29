import BackgroundAnimation from '../components/BackgroundAnimation';
import Navigation from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import Skills from '../components/Skills';
import Learning from '../components/Learning';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import UpcomingProjects from '../components/UpcomingProjects';

const Index = () => {
  return (
    <div className="relative min-w-[100vw] min-h-screen">
      <BackgroundAnimation />
      <Navigation />
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <Values />
        <section id="skills">
          <Skills />
        </section>
        <Learning />
        <section id="projects">
          <Projects />
        </section>
        <section id="upcoming-projects">
          <UpcomingProjects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;