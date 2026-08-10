import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Code2, ExternalLink } from 'lucide-react';
import { useOS } from '../../contexts/OSContext';

const QUESTS = [
  {
    id: 'valora',
    title: 'VALORA',
    subtitle: 'Precision Distress Signalling & Emergency Dispatch',
    difficulty: '★★★★☆',
    systemType: 'REAL-TIME',
    category: 'AI / SAFETY / WEB',
    status: 'COMPLETE',
    tags: ['PRIVACY-FIRST AI', 'REAL-TIME', 'LOW LATENCY', 'GESTURE CONTROL'],
    tech: ['React', 'Vite', 'Python', 'FastAPI', 'WebSockets', 'Google MediaPipe', 'WebKit Speech API'],
    description: 'AI emergency detection network utilizing biometric hand-locking gestures via MediaPipe, real-time WebSocket dispatch alerts, and voice triggers.',
    architecture: 'Client (Gestures) → WebSockets → FastAPI Backend → Real-time Alerts',
    challenges: 'Ensuring ultra-low latency for WebSocket connections while continuously processing video frames for gesture recognition in the browser without freezing the main thread.',
    learned: 'Web workers for heavy processing, WebSocket state management, and real-time computer vision in the browser.',
    links: { source: 'https://github.com/HarShada8G/zenith', live: '#' }
  },
  {
    id: 'apheresis',
    title: 'APHERESIS',
    subtitle: 'Blood Bank Management System',
    difficulty: '★★★☆☆',
    systemType: 'BACKEND',
    category: 'DATABASE / CRUD',
    status: 'COMPLETE',
    tags: ['BACKEND', 'DATABASE ARCHITECTURE', 'CRUD'],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Maven', 'Web UI'],
    description: 'Modular backend architecture for donor inventory management, validation, authentication, and blood request handling.',
    architecture: 'Client → REST API → Spring Boot → JPA / Hibernate → MySQL',
    challenges: 'Designing a normalized database schema that handles complex relations between donors, blood groups, storage units, and hospitals while maintaining ACID properties.',
    learned: 'Advanced Spring Boot concepts, Hibernate caching, transaction management, and RESTful API best practices.',
    links: { source: '#', live: 'http://3.108.228.20/' }
  }
];

export const Projects: React.FC = () => {
  const [selectedQuest, setSelectedQuest] = useState<typeof QUESTS[0] | null>(null);
  const { gamerMode } = useOS();

  return (
    <section id="quests" className="py-24 w-full border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="font-mono text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-[var(--arch-cyan)]">~</span>
            <span>QUEST_LOG</span>
          </div>
          <div className="text-[var(--text-secondary)] font-mono text-sm hidden md:block">
            ACTIVE QUESTS: {QUESTS.length}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {QUESTS.map((quest) => (
            <motion.div
              key={quest.id}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className={`relative glass-panel p-6 cursor-pointer group border ${gamerMode ? 'hover:border-[var(--alert-coral)]' : 'hover:border-[var(--arch-cyan)]'} transition-colors overflow-hidden`}
              onClick={() => setSelectedQuest(quest)}
            >
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--arch-cyan)] to-transparent opacity-0 group-hover:opacity-10 group-hover:-translate-y-full group-hover:animate-[scanline_1.5s_linear_infinite]" />

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono text-glow mb-1">{quest.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{quest.subtitle}</p>
                </div>
                <div className="text-[var(--terminal-green)] text-xs font-mono border border-[var(--terminal-green)] px-2 py-1 rounded-sm">
                  {quest.category}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {quest.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono bg-[var(--surface-light)] px-2 py-1 text-[var(--arch-cyan)]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="font-mono text-sm mb-4 text-[var(--text-secondary)] border-l-2 border-[var(--border)] pl-4">
                {quest.description}
              </div>

              <div className="flex justify-between items-end font-mono text-xs">
                <div>
                  <div className="text-[var(--text-secondary)] mb-1">QUEST STATUS</div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-1.5 bg-[var(--surface-light)]">
                      <div className="h-full bg-[var(--terminal-green)] w-full" />
                    </div>
                    <span className="text-[var(--terminal-green)]">{quest.status}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--text-secondary)] mb-1">DIFFICULTY</div>
                  <div className="text-yellow-500">{quest.difficulty}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quest Modal */}
      <AnimatePresence>
        {selectedQuest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm font-mono">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[var(--surface)] border border-[var(--border)] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
            >
              <div className="sticky top-0 bg-[var(--surface-light)] border-b border-[var(--border)] p-4 flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[var(--arch-cyan)]" />
                  <span className="font-bold">/projects/{selectedQuest.id}.md</span>
                </div>
                <button 
                  onClick={() => setSelectedQuest(null)}
                  className="text-[var(--text-secondary)] hover:text-[var(--alert-coral)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-glow mb-2">{selectedQuest.title}</h2>
                <p className="text-xl text-[var(--text-secondary)] mb-8">{selectedQuest.subtitle}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-[var(--arch-cyan)] mb-2 font-bold flex items-center gap-2">
                        <span className="text-[var(--text-secondary)]">#</span> OVERVIEW
                      </h4>
                      <p className="text-[var(--text-primary)] leading-relaxed">{selectedQuest.description}</p>
                    </div>

                    <div>
                      <h4 className="text-[var(--arch-cyan)] mb-2 font-bold flex items-center gap-2">
                        <span className="text-[var(--text-secondary)]">#</span> ARCHITECTURE
                      </h4>
                      <div className="bg-[var(--surface-light)] p-4 rounded text-sm text-[var(--terminal-green)] overflow-x-auto whitespace-pre">
                        {selectedQuest.architecture.split(' → ').join('\n  ↓\n')}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[var(--arch-cyan)] mb-2 font-bold flex items-center gap-2">
                          <span className="text-[var(--text-secondary)]">#</span> CHALLENGES
                        </h4>
                        <p className="text-[var(--text-secondary)] text-sm">{selectedQuest.challenges}</p>
                      </div>
                      <div>
                        <h4 className="text-[var(--arch-cyan)] mb-2 font-bold flex items-center gap-2">
                          <span className="text-[var(--text-secondary)]">#</span> WHAT I LEARNED
                        </h4>
                        <p className="text-[var(--text-secondary)] text-sm">{selectedQuest.learned}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 border-t md:border-t-0 md:border-l border-[var(--border)] pt-8 md:pt-0 md:pl-8">
                    <div>
                      <h4 className="text-[var(--arch-cyan)] mb-3 font-bold">TECH STACK</h4>
                      <div className="flex flex-col gap-2">
                        {selectedQuest.tech.map(t => (
                          <div key={t} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                            <span className="w-1 h-1 bg-[var(--text-secondary)] rounded-full" />
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[var(--arch-cyan)] mb-3 font-bold">LINKS</h4>
                      <div className="flex flex-col gap-3">
                        {selectedQuest.links.source !== '#' && (
                          <a href={selectedQuest.links.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[var(--arch-cyan)] transition-colors p-2 border border-[var(--border)] rounded hover:bg-[var(--surface-light)] active:bg-[var(--surface)]">
                            <Code2 className="w-4 h-4" />
                            Source Code
                          </a>
                        )}
                        {selectedQuest.links.live !== '#' && (
                          <a href={selectedQuest.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[var(--arch-cyan)] transition-colors p-2 border border-[var(--border)] rounded hover:bg-[var(--surface-light)] active:bg-[var(--surface)]">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
