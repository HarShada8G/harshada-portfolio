import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Briefcase, Mail, Code2 } from 'lucide-react';
import { SystemStatus } from '../../components/Navigation/SystemStatus';
import { HUD } from '../../components/HUD/HUD';
import { useOS } from '../../contexts/OSContext';

export const Hero: React.FC = () => {
  const { setTerminalOpen } = useOS();

  return (
    <section id="home" className="pt-24 pb-12 flex flex-col relative w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
        
        {/* Left Side: Character Select Profile */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[var(--arch-cyan)] mb-4 flex items-center gap-2"
          >
            <span className="text-[var(--text-secondary)]">harshada@iiitl:~$</span> 
            <span className="typing-text">whoami</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-2 text-glow"
          >
            Harshada Ruprao Ghube
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[var(--terminal-green)] font-mono mb-4"
          >
            Open-Source Contributor & Software Engineer
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[var(--text-secondary)] mb-6 text-sm md:text-base max-w-2xl"
          >
            B.Tech Computer Science & Business @ IIIT Lucknow
            <br className="mb-2" />
            <blockquote className="border-l-2 border-[var(--border)] pl-4 py-1 italic mt-4">
              Building systems, shipping open-source contributions, solving algorithmic problems, and occasionally breaking things just to understand how they work.
            </blockquote>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <button 
              onClick={() => setTerminalOpen(true)}
              className="bg-[var(--arch-cyan)] text-black px-6 py-3 font-mono font-bold hover:bg-white transition-colors flex items-center gap-2 border border-transparent"
            >
              <Terminal className="w-5 h-5" />
              [ ENTER THE TERMINAL ]
            </button>
            <a 
              href="#quests"
              className="glass-panel text-[var(--text-primary)] px-6 py-3 font-mono hover:border-[var(--arch-cyan)] transition-colors flex items-center gap-2"
            >
              [ VIEW QUESTS ]
            </a>
            <a 
              href="https://drive.google.com/file/d/1P7Fxd8BmhAuADw16vB0MTz8wxZF2x6Nb/view?usp=sharing"
              target="_blank"
              className="glass-panel text-[var(--text-primary)] px-6 py-3 font-mono hover:border-[var(--arch-cyan)] transition-colors flex items-center gap-2"
            >
              [ DOWNLOAD RESUME ]
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 mt-10 text-[var(--text-secondary)]"
          >
            <a href="https://github.com/HarShada8G" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span className="hidden sm:inline font-mono text-sm">HarShada8G</span>
            </a>
            <a href="https://linkedin.com/in/harshada-ghube" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span className="hidden sm:inline font-mono text-sm">harshada-ghube</span>
            </a>
            <a href="mailto:ghubeharshada@gmail.com" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline font-mono text-sm">Email</span>
            </a>
            <a href="https://leetcode.com/u/Harshe008/" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              <span className="hidden sm:inline font-mono text-sm">Harshe008</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: RPG HUD */}
        <div className="w-full lg:w-1/3 max-w-sm mt-8 lg:mt-0 flex items-center">
          <HUD />
        </div>
      </div>
      
      <div className="mt-16 w-full">
        <SystemStatus />
      </div>
    </section>
  );
};
