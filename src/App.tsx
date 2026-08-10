import { useState, useEffect } from 'react';
import { BootSequence } from './components/BootSequence';
import { Navbar } from './components/Navigation/Navbar';
import { CommandPalette } from './components/Navigation/CommandPalette';
import { Terminal } from './components/Terminal/Terminal';
import { Footer } from './components/Navigation/Footer';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';
import { Achievements } from './sections/Achievements/Achievements';
import { CodeLab } from './sections/CodeLab/CodeLab';
import { Contact } from './sections/Contact/Contact';
import { useOS } from './contexts/OSContext';
import { useKonamiCode } from './hooks/useKonamiCode';

function App() {
  const [booted, setBooted] = useState(false);
  const { gamerMode } = useOS();
  const konamiActivated = useKonamiCode();

  useEffect(() => {
    const hasBooted = sessionStorage.getItem('os_booted');
    if (hasBooted) {
      setBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
    sessionStorage.setItem('os_booted', 'true');
  };

  return (
    <div className={`min-h-screen bg-[var(--void)] text-[var(--text-primary)] transition-colors duration-500 ${gamerMode ? 'gamer-mode-active' : ''}`}>
      {konamiActivated && (
        <div className="fixed top-20 right-4 z-50 bg-yellow-500 text-black font-bold px-4 py-2 font-mono animate-bounce rounded">
          CHEAT CODE ACTIVATED: +1000 XP
        </div>
      )}

      {!booted ? (
        <BootSequence onComplete={handleBootComplete} />
      ) : (
        <>
          <Navbar />
          <CommandPalette />
          
          <main className="flex flex-col relative z-10 w-full min-h-screen">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <CodeLab />
            <Contact />
            <Footer />
          </main>

          <Terminal />
        </>
      )}
    </div>
  );
}

export default App;
