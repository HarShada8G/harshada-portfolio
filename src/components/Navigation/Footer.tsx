import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 w-full border-t border-[var(--border)] font-mono text-sm text-[var(--text-secondary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="mb-2">harshada@portfolio:~$ exit</div>
          <div className="opacity-50">Connection closed.</div>
        </div>
        
        <div className="text-center md:text-right">
          <div className="mb-2">Built with React + TypeScript + caffeine + curiosity</div>
          <div>© 2026 Harshada Ruprao Ghube</div>
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="md:hidden mt-4 text-[var(--arch-cyan)] hover:text-white transition-colors"
        >
          ↑ BACK TO TOP
        </button>
      </div>
    </footer>
  );
};
