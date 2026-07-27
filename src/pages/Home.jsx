import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Seo from '../components/Seo.jsx';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Experience from '../sections/Experience.jsx';
import TechStack from '../sections/TechStack.jsx';
import Projects from '../sections/Projects.jsx';
import Videos from '../sections/Videos.jsx';
import Articles from '../sections/Articles.jsx';
import Contact from '../sections/Contact.jsx';

export default function Home() {
  return (
    <>
      <Seo />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Videos />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
