import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import Preloader from './components/Preloader';
import { ReactLenis } from 'lenis/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Temporarily disabled for verification
  /*
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('portfolio-loaded');
    if (hasLoaded) {
      setIsLoading(false);
    }
  }, []);
  */

  const handleLoaderComplete = () => {
    setIsLoading(false);
    // sessionStorage.setItem('portfolio-loaded', 'true');
  };

  return (
    <ReactLenis root>
      <ThemeProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" onComplete={handleLoaderComplete} />
          ) : (
            <motion.div 
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative min-h-screen w-full selection:bg-indigo-500/30 overflow-x-hidden"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </ReactLenis>
  );
}

export default App;

