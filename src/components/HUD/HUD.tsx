import React from 'react';
import { motion } from 'framer-motion';
import { useOS } from '../../contexts/OSContext';

export const HUD: React.FC = () => {
  const { gamerMode } = useOS();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className={`w-full font-mono text-sm ${gamerMode ? 'border-[var(--alert-coral)]' : 'border-[var(--border)]'} border bg-[var(--surface-light)] rounded-sm overflow-hidden relative`}
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--text-primary)]" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--text-primary)]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--text-primary)]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--text-primary)]" />

      <div className="p-4">
        <div className="text-xs text-[var(--text-secondary)] mb-2 tracking-widest border-b border-[var(--border)] pb-1 flex items-center justify-between">
          <span>DEVELOPER PROFILE</span>
          <span className="w-2 h-2 rounded-full bg-[var(--terminal-green)] animate-pulse" />
        </div>
        
        <div className="mb-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded bg-[var(--surface)] border border-[var(--border)] overflow-hidden flex items-center justify-center text-[var(--text-secondary)]">
            {/* Placeholder for actual profile image */}
            <img src="https://github.com/HarShada8G.png" alt="Profile" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="font-bold text-lg text-[var(--text-primary)]">HARSHADA</div>
            <div className="text-[var(--arch-cyan)] text-xs">OPEN SOURCE MAGE</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {/* HP Bar */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[var(--text-secondary)]">HP (Bug Hunter)</span>
              <span>100%</span>
            </div>
            <div className="h-2 w-full bg-[var(--surface)] relative overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute top-0 left-0 h-full bg-[var(--terminal-green)] border-glow"
              />
            </div>
          </div>

          {/* MP Bar */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[var(--text-secondary)]">MP (CGPA)</span>
              <span>8.15 / 10</span>
            </div>
            <div className="h-2 w-full bg-[var(--surface)] relative overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '81.5%' }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute top-0 left-0 h-full bg-[var(--arch-cyan)]"
              />
            </div>
          </div>

          {/* XP Bar */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[var(--text-secondary)]">XP (DSA)</span>
              <span>500+</span>
            </div>
            <div className="h-2 w-full bg-[var(--surface)] relative overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute top-0 left-0 h-full bg-[var(--neon-purple)]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-[var(--text-secondary)] mb-1">CLASS</div>
            <div className="text-[var(--text-primary)]">System Scripter</div>
          </div>
          <div>
            <div className="text-[var(--text-secondary)] mb-1">RANK</div>
            <div className="text-[var(--terminal-green)]">GSSoC '26 Top 3%</div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
