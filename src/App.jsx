import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <main className="w-full min-h-screen bg-background text-foreground overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </ThemeProvider>
  );
}

export default App;

