import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Home, Terminal as TerminalIcon, Code, Briefcase, Monitor, Zap, Palette, Mail, FileText } from 'lucide-react';
import { useOS } from '../../contexts/OSContext';

const COMMANDS = [
  { id: 'home', label: 'Go Home', icon: Home, action: () => window.location.hash = '#home' },
  { id: 'projects', label: 'View Projects', icon: Code, action: () => window.location.hash = '#quests' },
  { id: 'terminal', label: 'Open Terminal', icon: TerminalIcon, action: (ctx: any) => ctx.setTerminalOpen(true) },
  { id: 'github', label: 'Open GitHub', icon: Code, action: () => window.open('https://github.com/HarShada8G', '_blank') },
  { id: 'linkedin', label: 'Open LinkedIn', icon: Briefcase, action: () => window.open('https://linkedin.com/in/harshada-ghube', '_blank') },
  { id: 'resume', label: 'Download Resume', icon: FileText, action: () => window.open('https://drive.google.com/file/d/1P7Fxd8BmhAuADw16vB0MTz8wxZF2x6Nb/view?usp=sharing', '_blank') },
  { id: 'gamer', label: 'Toggle Gamer Mode', icon: Zap, action: (ctx: any) => ctx.setGamerMode(!ctx.gamerMode) },
  { id: 'crt', label: 'Toggle CRT Effect', icon: Monitor, action: (ctx: any) => ctx.setCrtEnabled(!ctx.crtEnabled) },
  { id: 'theme', label: 'Change Theme', icon: Palette, action: (ctx: any) => {
      const themes = ['linux', 'hyprland', 'nord', 'dracula'];
      const next = themes[(themes.indexOf(ctx.theme) + 1) % themes.length];
      ctx.setTheme(next as any);
  }},
  { id: 'contact', label: 'Contact Harshada', icon: Mail, action: () => window.location.hash = '#contact' },
];

export const CommandPalette: React.FC = () => {
  const ctx = useOS();
  const { commandPaletteOpen, setCommandPaletteOpen } = ctx;
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = COMMANDS.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (commandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [commandPaletteOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!commandPaletteOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action(ctx);
          setCommandPaletteOpen(false);
        }
      } else if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, filteredCommands, selectedIndex, ctx]);

  if (!commandPaletteOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm" onClick={() => setCommandPaletteOpen(false)}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl rounded-lg overflow-hidden flex flex-col font-mono"
        >
          <div className="flex items-center px-4 border-b border-[var(--border)]">
            <Command className="w-5 h-5 text-[var(--text-secondary)]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent border-none outline-none text-[var(--text-primary)] px-4 py-4 placeholder-[var(--text-secondary)]"
            />
          </div>

          <div className="max-h-80 overflow-y-auto py-2">
            {filteredCommands.length === 0 ? (
              <div className="px-4 py-8 text-center text-[var(--text-secondary)]">
                No commands found.
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const Icon = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={cmd.id}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => {
                      cmd.action(ctx);
                      setCommandPaletteOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 mx-2 rounded cursor-pointer transition-colors ${
                      isSelected ? 'bg-[var(--surface-light)] text-[var(--arch-cyan)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cmd.label}</span>
                  </div>
                );
              })
            )}
          </div>
          
          <div className="border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--text-secondary)] flex justify-between bg-[var(--void)]">
            <span>Use ↑↓ to navigate, Enter to select</span>
            <span>ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
