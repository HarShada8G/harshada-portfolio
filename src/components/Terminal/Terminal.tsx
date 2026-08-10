import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Minus } from 'lucide-react';
import { useOS } from '../../contexts/OSContext';

export const Terminal: React.FC = () => {
  const { terminalOpen, setTerminalOpen, setTheme, setGamerMode, setCrtEnabled } = useOS();
  const [history, setHistory] = useState<{ type: 'input' | 'output' | 'error', text: string }[]>([
    { type: 'output', text: 'Welcome to HarshadaOS Terminal v1.0.0' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [terminalOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input' as const, text: `harshada@portfolio:~$ ${trimmed}` }];
    setCommandHistory(prev => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const args = trimmed.split(' ');
    const baseCmd = args[0].toLowerCase();

    switch (baseCmd) {
      case 'help':
        newHistory.push({ type: 'output', text: 'Available commands: help, whoami, neofetch, clear, theme, gamer, crt, sudo hire_me, vim, resume, ls, cd, pwd, echo, cat, git' });
        break;
      case 'resume':
        newHistory.push({ type: 'output', text: 'Opening resume.pdf...' });
        setTimeout(() => window.open('https://drive.google.com/file/d/1P7Fxd8BmhAuADw16vB0MTz8wxZF2x6Nb/view?usp=sharing', '_blank'), 500);
        break;
      case 'ls':
        newHistory.push({ type: 'output', text: 'about.txt\nskills/\nprojects/\nachievements/\nresume.pdf' });
        break;
      case 'pwd':
        newHistory.push({ type: 'output', text: '/home/harshada' });
        break;
      case 'cd':
        if (!args[1] || args[1] === '~') {
          newHistory.push({ type: 'output', text: '' });
        } else {
          newHistory.push({ type: 'error', text: `bash: cd: ${args[1]}: Not a directory or access denied` });
        }
        break;
      case 'echo':
        newHistory.push({ type: 'output', text: args.slice(1).join(' ') });
        break;
      case 'cat':
        if (args[1] === 'about.txt') {
          newHistory.push({ type: 'output', text: 'Harshada is a Computer Science & Business student at IIIT Lucknow who enjoys turning ideas into working software.' });
        } else {
          newHistory.push({ type: 'error', text: `cat: ${args[1]}: No such file or directory` });
        }
        break;
      case 'git':
        if (args[1] === 'init') {
          newHistory.push({ type: 'output', text: 'Initialized empty Git repository in /home/harshada/.git/' });
        } else if (args[1] === 'status') {
          newHistory.push({ type: 'output', text: 'On branch main\nYour branch is up to date with "origin/main".\n\nnothing to commit, working tree clean' });
        } else {
          newHistory.push({ type: 'output', text: 'git: \'git\' is not a git command. See \'git --help\'.' });
        }
        break;
      case 'whoami':
        newHistory.push({ type: 'output', text: 'Harshada Ruprao Ghube - Open Source Developer & System Engineer' });
        break;
      case 'neofetch':
        newHistory.push({ type: 'output', text: `
harshada@portfolio
------------------
OS: Linux / HarshadaOS
Host: IIIT Lucknow
Kernel: C++ / Bash
Uptime: 20 years
Packages: 500+ DSA Problems
Shell: bash
Resolution: Responsive
Terminal: xterm-web
CPU: Bug Hunter 9900K
GPU: RTX Developer Edition
Memory: 81.5% CGPA
        `});
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'theme':
        if (args[1] && ['linux', 'hyprland', 'nord', 'dracula'].includes(args[1])) {
          setTheme(args[1] as any);
          newHistory.push({ type: 'output', text: `Theme set to ${args[1]}` });
        } else {
          newHistory.push({ type: 'error', text: 'Usage: theme <linux|hyprland|nord|dracula>' });
        }
        break;
      case 'gamer':
        setGamerMode(true);
        newHistory.push({ type: 'output', text: 'GAMER MODE ACTIVATED. PING: 12ms.' });
        break;
      case 'crt':
        setCrtEnabled(true);
        newHistory.push({ type: 'output', text: 'CRT scanlines enabled.' });
        break;
      case 'sudo':
        if (args[1] === 'hire_me') {
          newHistory.push({ type: 'output', text: '[sudo] permission granted.\n> Candidate detected.\n> Skills: C++ Python Java React Spring Boot\n> Open Source: ACTIVE\n> Status: READY TO BUILD\nProceeding to contact interface...' });
          setTimeout(() => window.location.hash = '#contact', 2000);
        } else if (args[1] === 'coffee') {
          newHistory.push({ type: 'error', text: 'Error: caffeine dependency missing.' });
        } else {
          newHistory.push({ type: 'error', text: `sudo: ${args[1]}: command not found` });
        }
        break;
      case 'vim':
        newHistory.push({ type: 'output', text: 'You are now trapped.\n\n:q\n:wq\n:q!\n\nNothing works.' });
        break;
      default:
        newHistory.push({ type: 'error', text: `bash: ${baseCmd}: command not found` });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIndex = historyIndex - 1;
        setHistoryIndex(prevIndex);
        setInput(commandHistory[prevIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  if (!terminalOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50 w-full max-w-2xl bg-[var(--void)] border border-[var(--border)] rounded-lg overflow-hidden shadow-2xl flex flex-col glass-panel"
        style={{ height: '400px' }}
      >
        <div className="flex items-center justify-between px-4 py-2 bg-[var(--surface)] border-b border-[var(--border)] cursor-move select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[var(--alert-coral)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-[var(--terminal-green)]" />
            </div>
            <span className="ml-4 text-xs font-mono text-[var(--text-secondary)]">harshada@portfolio: ~</span>
          </div>
          <div className="flex gap-3 text-[var(--text-secondary)]">
            <button className="hover:text-[var(--text-primary)]"><Minus className="w-4 h-4" /></button>
            <button className="hover:text-[var(--text-primary)]"><Maximize2 className="w-4 h-4" /></button>
            <button onClick={() => setTerminalOpen(false)} className="hover:text-[var(--alert-coral)]"><X className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 font-mono text-sm" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div 
              key={i} 
              className={`mb-1 whitespace-pre-wrap ${
                line.type === 'error' ? 'text-[var(--alert-coral)]' : 
                line.type === 'input' ? 'text-[var(--arch-cyan)]' : 'text-[var(--text-primary)]'
              }`}
            >
              {line.text}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-[var(--arch-cyan)] mr-2">harshada@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-[var(--text-primary)]"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
