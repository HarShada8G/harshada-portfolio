import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  '[ BIOS ] Initializing HarshadaOS...',
  '[ OK ] Loading kernel modules...',
  '[ OK ] Mounting /projects',
  '[ OK ] Loading open-source contributions...',
  '[ OK ] Connecting to GitHub...',
  '[ OK ] Loading developer profile...',
  '[ OK ] Gamer subsystem initialized...',
  '',
  'harshada@portfolio:~$ ./start.sh'
];

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete();
      return;
    }

    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 500); // Wait for exit animation
        }, 800);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-[var(--void)] flex flex-col justify-center items-start p-8 md:p-24 font-mono text-sm md:text-base text-[var(--terminal-green)]"
        >
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-1"
            >
              {log}
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-5 bg-[var(--terminal-green)] inline-block mt-2"
          />
          <button 
            onClick={() => {
              setIsVisible(false);
              setTimeout(onComplete, 300);
            }}
            className="absolute bottom-8 right-8 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors opacity-50 hover:opacity-100"
          >
            [ Skip sequence ]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
