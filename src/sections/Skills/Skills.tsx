import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 w-full border-t border-[var(--border)] font-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Neofetch System Specs */}
          <div>
            <div className="text-[var(--arch-cyan)] text-lg mb-6 flex items-center gap-2 font-bold">
              <span className="text-[var(--text-secondary)]">#</span> SYSTEM SPECS
            </div>
            
            <div className="glass-panel p-6 text-sm">
              <div className="flex gap-6 mb-6">
                <div className="hidden sm:block text-[var(--arch-cyan)] font-bold text-xs leading-none select-none">
                  <pre>{`
       /\\
      /  \\
     /    \\
    /      \\
   /   ,,   \\
  /   |  |   \\
 /_-''    ''-_\\
                  `}</pre>
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-bold mb-1">harshada@iiitl</div>
                  <div className="text-[var(--text-secondary)] mb-4">────────────────────────────</div>
                  
                  <div className="grid grid-cols-[100px_1fr] gap-2 mb-6">
                    <span className="text-[var(--arch-cyan)] font-bold">OS</span>
                    <span>Linux / Windows</span>
                    
                    <span className="text-[var(--arch-cyan)] font-bold">KERNEL</span>
                    <span>C++ / C / Bash</span>
                    
                    <span className="text-[var(--arch-cyan)] font-bold">SHELL</span>
                    <span>Bash</span>
                    
                    <span className="text-[var(--arch-cyan)] font-bold">EDITOR</span>
                    <span>VS Code</span>
                    
                    <span className="text-[var(--arch-cyan)] font-bold">RUNTIME</span>
                    <span>Node / Java / Python</span>
                  </div>

                  <div className="mb-4">
                    <div className="text-[var(--arch-cyan)] font-bold mb-1">MEMORY</div>
                    <div className="flex text-[var(--text-secondary)]">
                      <span className="text-[var(--terminal-green)]">████████████████████</span>
                      <span>░░</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[var(--arch-cyan)] font-bold mb-1">UPTIME</div>
                    <div className="text-[var(--text-primary)]">∞ commits and counting</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-black"></div>
                <div className="w-4 h-4 bg-red-500"></div>
                <div className="w-4 h-4 bg-green-500"></div>
                <div className="w-4 h-4 bg-yellow-500"></div>
                <div className="w-4 h-4 bg-blue-500"></div>
                <div className="w-4 h-4 bg-purple-500"></div>
                <div className="w-4 h-4 bg-cyan-500"></div>
                <div className="w-4 h-4 bg-white"></div>
              </div>
            </div>
          </div>

          {/* Right: RPG Skill Trees */}
          <div>
            <div className="text-[var(--terminal-green)] text-lg mb-6 flex items-center gap-2 font-bold">
              <span className="text-[var(--text-secondary)]">#</span> SKILL TREES
            </div>

            <div className="space-y-6 text-sm">
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--text-primary)]">Programming Core</span>
                  <span className="text-[var(--text-secondary)] text-xs">PRIMARY</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Python', 'C', 'Java', 'JavaScript', 'SQL', 'Bash'].map(skill => (
                    <span key={skill} className="px-2 py-1 border border-[var(--border)] bg-[var(--surface-light)] text-[var(--text-primary)]">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--text-primary)]">Frameworks</span>
                  <span className="text-[var(--text-secondary)] text-xs">FREQUENT</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'Spring Boot', 'FastAPI'].map(skill => (
                    <span key={skill} className="px-2 py-1 border border-[var(--border)] bg-[var(--surface-light)] text-[var(--text-primary)]">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--text-primary)]">Systems & Platforms</span>
                  <span className="text-[var(--text-secondary)] text-xs">WORKING KNOWLEDGE</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Linux', 'AWS', 'Windows'].map(skill => (
                    <span key={skill} className="px-2 py-1 border border-[var(--border)] bg-[var(--surface-light)] text-[var(--text-primary)]">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--text-primary)]">Developer Toolbelt</span>
                  <span className="text-[var(--text-secondary)] text-xs">FREQUENT</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'MySQL', 'VS Code', 'Google Colab', 'Figma', 'Vercel', 'IntelliJ IDEA'].map(skill => (
                    <span key={skill} className="px-2 py-1 border border-[var(--border)] bg-[var(--surface-light)] text-[var(--text-primary)]">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
