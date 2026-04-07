import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root>
      <ThemeProvider>
        <div className="relative min-h-screen w-full selection:bg-indigo-500/30">
          <Background3D />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10 w-full px-4 md:px-0">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;

