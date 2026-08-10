import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FileText, ChevronRight, ChevronDown, Terminal } from 'lucide-react';

const fileSystem = {
  'about.txt': 'Harshada is a Computer Science & Business student at IIIT Lucknow who enjoys turning ideas into working software — from automation scripts and backend systems to interactive applications and open-source contributions.',
  'focus_areas.txt': '• Open Source\n• Systems Programming\n• Backend Engineering\n• Competitive Programming\n• Developer Tooling\n• Cyber Security\n• AI-powered applications',
  'education.txt': 'B.Tech Computer Science & Business\nIndian Institute of Information Technology, Lucknow\nAug 2025 — Jul 2029',
  'societies.txt': '• Goonj — Drama\n• Utkrisht — Art\n• AfterDark — Photography'
};

export const About: React.FC = () => {
  const [activeFile, setActiveFile] = useState<keyof typeof fileSystem | null>('about.txt');
  const [folderOpen, setFolderOpen] = useState(true);

  return (
    <section id="about" className="py-24 w-full border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 mb-8 text-[var(--text-secondary)] font-mono text-sm md:text-base">
          <Terminal className="w-4 h-4 text-[var(--arch-cyan)]" />
          <span>~/home/harshada</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* File Explorer */}
          <div className="glass-panel p-4 font-mono text-sm">
            <div 
              className="flex items-center gap-2 cursor-pointer text-[var(--text-primary)] hover:text-[var(--arch-cyan)] transition-colors mb-2"
              onClick={() => setFolderOpen(!folderOpen)}
            >
              {folderOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              <Folder className="w-4 h-4 text-[var(--arch-cyan)] fill-[var(--arch-cyan)]/20" />
              <span>harshada</span>
            </div>
            
            <AnimatePresence>
              {folderOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-6 flex flex-col gap-1 overflow-hidden"
                >
                  {(Object.keys(fileSystem) as Array<keyof typeof fileSystem>).map((file) => (
                    <div 
                      key={file}
                      onClick={() => setActiveFile(file)}
                      className={`flex items-center gap-2 cursor-pointer py-1 px-2 rounded transition-colors ${
                        activeFile === file 
                          ? 'bg-[var(--surface-light)] text-[var(--text-primary)] border border-[var(--border)]' 
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      <span>{file}</span>
                    </div>
                  ))}
                  
                  {/* Empty folders for UI aesthetic */}
                  {['skills/', 'projects/', 'achievements/'].map(dir => (
                    <div key={dir} className="flex items-center gap-2 py-1 px-2 text-[var(--text-secondary)] opacity-50 cursor-not-allowed">
                      <Folder className="w-4 h-4" />
                      <span>{dir}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* File Viewer */}
          <div className="md:col-span-2 glass-panel flex flex-col font-mono text-sm h-64 md:h-80">
            <div className="flex items-center border-b border-[var(--border)] bg-[var(--surface-light)]">
              <div className="px-4 py-2 border-r border-[var(--border)] text-[var(--text-primary)] bg-[var(--surface)] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[var(--terminal-green)]" />
                {activeFile || 'No file selected'}
              </div>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
              {activeFile ? (
                <motion.div
                  key={activeFile}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="whitespace-pre-wrap leading-relaxed text-[var(--text-primary)]"
                >
                  <span className="text-[var(--text-secondary)] opacity-50">1  </span>
                  {fileSystem[activeFile].split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <><br /><span className="text-[var(--text-secondary)] opacity-50">{i + 1}  </span></>}
                      {line}
                    </React.Fragment>
                  ))}
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-[var(--text-secondary)] italic">
                  Select a file to view contents
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
