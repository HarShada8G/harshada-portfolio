import React, { useState, useEffect } from 'react';
import { Terminal, Command } from 'lucide-react';
import { useOS } from '../../contexts/OSContext';

export const Navbar: React.FC = () => {
  const { setCommandPaletteOpen } = useOS();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we scroll down past 50px, hide the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // If we scroll up, show it
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 glass-panel border-b border-[var(--border)] transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      onMouseEnter={() => setIsVisible(true)} // Also show if hovered at the top
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-[var(--arch-cyan)]" />
          <span className="font-mono font-bold tracking-tight">
            [ H ] HarshadaOS
          </span>
          <div className="hidden md:flex ml-8 space-x-6 text-sm font-mono text-[var(--text-secondary)]">
            <a href="#home" className="hover:text-[var(--text-primary)] transition-colors">/home</a>
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">/about</a>
            <a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">/skills</a>
            <a href="#achievements" className="hover:text-[var(--text-primary)] transition-colors">/achievements</a>
            <a href="#quests" className="hover:text-[var(--text-primary)] transition-colors">/quests</a>
            <a href="#code-lab" className="hover:text-[var(--text-primary)] transition-colors">/code-lab</a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm font-mono">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--terminal-green)] border-glow text-[var(--terminal-green)] animate-pulse" />
            <span className="text-[var(--text-secondary)]">SYSTEM ONLINE</span>
          </div>
          <button 
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-2 bg-[var(--surface-light)] px-3 py-1.5 rounded text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--arch-cyan)] border border-[var(--border)] transition-all"
          >
            <Command className="w-4 h-4" />
            <span>K</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
