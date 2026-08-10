import React from 'react';
import { useOS } from '../../contexts/OSContext';

export const SystemStatus: React.FC = () => {
  const { theme, gamerMode } = useOS();

  return (
    <div className="w-full border-y border-[var(--border)] bg-[var(--surface-light)] py-2 px-4 font-mono text-xs md:text-sm overflow-x-auto whitespace-nowrap">
      <div className="max-w-7xl mx-auto flex items-center gap-6 text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="text-[var(--text-primary)]">SYSTEM STATUS</span>
          <span className="text-[var(--terminal-green)] animate-pulse">● ONLINE</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[var(--text-primary)]">OS</span>
          <span>{theme === 'linux' ? 'Linux' : theme}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[var(--text-primary)]">EDITOR</span>
          <span>VS Code</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[var(--text-primary)]">CURRENT MODE</span>
          <span className={gamerMode ? 'text-[var(--alert-coral)] font-bold text-glow' : 'text-[var(--arch-cyan)]'}>
            {gamerMode ? 'GAMING' : 'Building'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[var(--text-primary)]">OPEN SOURCE</span>
          <span className="text-[var(--terminal-green)]">ACTIVE</span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-[var(--text-primary)]">COFFEE</span>
          <span className="text-[var(--alert-coral)] animate-pulse">REQUIRED</span>
        </div>
      </div>
    </div>
  );
};
