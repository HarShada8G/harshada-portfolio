import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'linux' | 'hyprland' | 'nord' | 'dracula';

interface OSContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  crtEnabled: boolean;
  setCrtEnabled: (enabled: boolean | ((prev: boolean) => boolean)) => void;
  gamerMode: boolean;
  setGamerMode: (enabled: boolean | ((prev: boolean) => boolean)) => void;
  terminalOpen: boolean;
  setTerminalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OSContext = createContext<OSContextProps | undefined>(undefined);

export const OSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem('os_theme') as Theme) || 'linux';
  });
  
  const [crtEnabled, setCrtEnabledState] = useState<boolean>(() => {
    return localStorage.getItem('os_crt') !== 'false';
  });

  const [gamerMode, setGamerModeState] = useState<boolean>(() => {
    return localStorage.getItem('os_gamer') === 'true';
  });

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('os_theme', newTheme);
  };

  const setCrtEnabled = (enabled: boolean | ((prev: boolean) => boolean)) => {
    setCrtEnabledState(prev => {
      const next = typeof enabled === 'function' ? enabled(prev) : enabled;
      localStorage.setItem('os_crt', String(next));
      return next;
    });
  };

  const setGamerMode = (enabled: boolean | ((prev: boolean) => boolean)) => {
    setGamerModeState(prev => {
      const next = typeof enabled === 'function' ? enabled(prev) : enabled;
      localStorage.setItem('os_gamer', String(next));
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
      
      switch (e.key.toLowerCase()) {
        case 't':
          if (!e.metaKey && !e.ctrlKey) setTerminalOpen(prev => !prev);
          break;
        case 'g':
          if (!e.metaKey && !e.ctrlKey) setGamerMode(prev => !prev);
          break;
        case 'escape':
          setTerminalOpen(false);
          setCommandPaletteOpen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <OSContext.Provider
      value={{
        theme,
        setTheme,
        crtEnabled,
        setCrtEnabled,
        gamerMode,
        setGamerMode,
        terminalOpen,
        setTerminalOpen,
        commandPaletteOpen,
        setCommandPaletteOpen
      }}
    >
      {children}
      {crtEnabled && <div className="crt-overlay pointer-events-none" />}
    </OSContext.Provider>
  );
};

export const useOS = () => {
  const context = useContext(OSContext);
  if (context === undefined) {
    throw new Error('useOS must be used within an OSProvider');
  }
  return context;
};
