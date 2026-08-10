import React, { useState } from 'react';
import { Terminal, Copy, Check, Play } from 'lucide-react';

const INITIAL_FILES = {
  'script.js': `const developer = {
  name: 'Harshada Ruprao Ghube',
  role: 'System Software Engineer & Open Source Mage',
  focus: ['Systems', 'Web Development', 'Competitive Programming'],
  status: 'Building & Bug Hunting'
};

// Initialize system profile
await developer.execute();`,
  'main.cpp': `#include <iostream>
#include <vector>
using namespace std;

int main() {
    cout << "[INFO] Initializing Harshada's C++ Protocol..." << endl;
    cout << "[OK] 500+ DSA Problems Solved." << endl;
    cout << "[OK] CodeChef Rating: Advanced." << endl;
    cout << "[OK] Memory Leaks: 0" << endl;
    
    return 0;
}`,
  'automation.py': `import sys
import time

def deploy_harshada():
    print("Loading Python modules...")
    time.sleep(0.5)
    print("Connecting to Open Source Guild (GSSoC '26)...")
    time.sleep(0.5)
    print("Status: Top 3% Rank Confirmed.")
    print("System ready for engineering.")

if __name__ == "__main__":
    deploy_harshada()
    sys.exit(0)`
};

export const CodeLab: React.FC = () => {
  const [files, setFiles] = useState(INITIAL_FILES);
  const [activeFile, setActiveFile] = useState<keyof typeof INITIAL_FILES>('script.js');
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(files[activeFile]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setOutput('Compiling...\nRunning...\n\n');
    setTimeout(() => {
      
      if (activeFile === 'script.js') {
        setOutput(`> Executing script.js\n\n[SUCCESS] Developer Profile Initialized:\nName: Harshada Ruprao Ghube\nRole: System Software Engineer & Open Source Mage\nFocus: Systems, Web Development, Competitive Programming\nStatus: Building & Bug Hunting\n\n> System architecture combines Linux package knowledge with C++ and Python automation.`);
      } else if (activeFile === 'main.cpp') {
        setOutput(`> g++ -O3 main.cpp -o harshada_os\n> ./harshada_os\n\n[INFO] Initializing Harshada's C++ Protocol...\n[OK] 500+ DSA Problems Solved.\n[OK] CodeChef Rating: Advanced.\n[OK] Memory Leaks: 0\n\n[Process exited with code 0]`);
      } else {
        setOutput(`> python3 automation.py\n\nLoading Python modules...\nConnecting to Open Source Guild (GSSoC '26)...\nStatus: Top 3% Rank Confirmed.\nSystem ready for engineering.\n\n[Process exited with code 0]`);
      }
    }, 800);
  };

  return (
    <section id="code-lab" className="py-24 w-full border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 mb-8 font-mono">
          <span className="text-[var(--text-secondary)]">$</span>
          <span className="text-[var(--arch-cyan)] font-bold">./code_lab</span>
        </div>

        <div className="glass-panel rounded-lg overflow-hidden border border-[var(--border)] font-mono text-sm shadow-2xl flex flex-col md:flex-row">
          
          {/* File Sidebar */}
          <div className="flex md:flex-col overflow-x-auto md:w-48 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--surface-light)] shrink-0">
            {(Object.keys(files) as Array<keyof typeof files>).map(file => (
              <button
                key={file}
                onClick={() => {
                  setActiveFile(file);
                  setOutput(null);
                }}
                className={`px-4 py-3 flex items-center gap-2 border-r md:border-r-0 md:border-l-2 md:border-b transition-colors ${
                  activeFile === file 
                    ? 'bg-[var(--surface)] text-[var(--text-primary)] border-[var(--arch-cyan)]' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] border-transparent md:border-b-[var(--border)]'
                }`}
              >
                <Terminal className="w-4 h-4 shrink-0" />
                {file}
              </button>
            ))}
          </div>

          <div className="flex-1 flex flex-col min-w-0">
            {/* Editor Header */}
            <div className="flex items-center justify-between bg-[var(--surface-light)] border-b border-[var(--border)] px-4 py-2">
              <span className="text-[var(--text-secondary)]">Editing: {activeFile}</span>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <button onClick={handleCopy} className="p-2 hover:text-[var(--text-primary)] hover:bg-[var(--surface)] rounded transition-colors" title="Copy Code">
                  {copied ? <Check className="w-4 h-4 text-[var(--terminal-green)]" /> : <Copy className="w-4 h-4" />}
                </button>
                <button onClick={handleRun} className="p-2 hover:text-[var(--terminal-green)] hover:bg-[var(--surface)] rounded transition-colors flex items-center gap-1" title="Run Code">
                  <Play className="w-4 h-4" />
                  <span className="hidden sm:inline">Run</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 flex-1">
              {/* Editor Body */}
              <div className="p-4 bg-[var(--void)] relative flex min-h-[300px]">
                <div className="flex flex-col text-right pr-4 select-none text-[var(--text-secondary)] opacity-50 border-r border-[var(--border)] mr-4 pt-1">
                  {files[activeFile].split('\n').map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <textarea 
                  value={files[activeFile]}
                  onChange={(e) => setFiles({...files, [activeFile]: e.target.value})}
                  className="w-full h-full bg-transparent border-none outline-none text-[var(--text-primary)] resize-none font-mono leading-relaxed absolute inset-0 p-4 pl-12"
                  spellCheck="false"
                />
              </div>

              {/* Output Panel */}
              <div className="border-t lg:border-t-0 lg:border-l border-[var(--border)] bg-[var(--surface)] flex flex-col min-h-[200px]">
                <div className="px-4 py-2 border-b border-[var(--border)] text-xs text-[var(--text-secondary)] bg-[var(--surface-light)] flex justify-between">
                  <span>OUTPUT</span>
                  {output && <button onClick={() => setOutput(null)} className="hover:text-[var(--alert-coral)]"><Terminal className="w-3 h-3" /></button>}
                </div>
                <div className="p-4 flex-1 overflow-y-auto">
                  {output ? (
                    <pre className="text-[var(--terminal-green)] whitespace-pre-wrap font-mono text-xs">{output}</pre>
                  ) : (
                    <div className="h-full flex items-center justify-center text-[var(--text-secondary)] italic text-xs">
                      Click 'Run' to execute the script in the visual playground sandbox.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
