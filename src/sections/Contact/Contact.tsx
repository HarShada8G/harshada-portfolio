import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Code, Briefcase, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setLogs(prev => [...prev, 'Error: missing required fields.']);
      return;
    }

    setStatus('sending');
    setLogs(['Initiating secure connection...', 'Encrypting payload...']);
    
    setTimeout(() => {
      setLogs(prev => [...prev, 'Transmitting data via secure channel...']);
    }, 800);

    setTimeout(() => {
      setStatus('success');
      setLogs(prev => [...prev, 'Transmission complete. Connection closed.']);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
        setLogs([]);
      }, 4000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 w-full border-t border-[var(--border)] font-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Terminal Output */}
          <div>
            <div className="text-[var(--arch-cyan)] mb-6 flex items-center gap-2">
              <span className="text-[var(--text-secondary)]">harshada@portfolio:~$</span> 
              <span className="font-bold">connect</span>
            </div>
            
            <div className="text-[var(--text-secondary)] mb-8 space-y-4 text-sm md:text-base leading-relaxed">
              <p>Looking for:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2"><span className="text-[var(--terminal-green)]">→</span> Open Source Collaboration</li>
                <li className="flex items-center gap-2"><span className="text-[var(--terminal-green)]">→</span> Software Engineering Opportunities</li>
                <li className="flex items-center gap-2"><span className="text-[var(--terminal-green)]">→</span> Hackathons</li>
                <li className="flex items-center gap-2"><span className="text-[var(--terminal-green)]">→</span> Interesting Technical Projects</li>
                <li className="flex items-center gap-2"><span className="text-[var(--terminal-green)]">→</span> Developer Communities</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="mailto:ghubeharshada@gmail.com" className="bg-[var(--surface-light)] border border-[var(--border)] hover:border-[var(--arch-cyan)] text-[var(--text-primary)] px-6 py-3 transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                ghubeharshada@gmail.com
              </a>
              <a href="https://github.com/HarShada8G" target="_blank" rel="noreferrer" className="glass-panel px-6 py-3 hover:border-[var(--arch-cyan)] transition-colors flex items-center gap-2">
                <Code className="w-5 h-5" />
                GITHUB
              </a>
              <a href="https://linkedin.com/in/harshada-ghube" target="_blank" rel="noreferrer" className="glass-panel px-6 py-3 hover:border-[var(--arch-cyan)] transition-colors flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                LINKEDIN
              </a>
            </div>
          </div>

          {/* Right: Terminal Form */}
          <div className="glass-panel border border-[var(--border)] relative overflow-hidden">
            <div className="bg-[var(--surface-light)] border-b border-[var(--border)] p-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <Terminal className="w-4 h-4" />
                <span>/usr/bin/send_message</span>
              </div>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[var(--text-secondary)] text-xs mb-2">NAME=</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[var(--void)] border border-[var(--border)] focus:border-[var(--arch-cyan)] outline-none px-4 py-2 text-[var(--text-primary)] transition-colors"
                    placeholder='"Enter Name"'
                    disabled={status !== 'idle'}
                  />
                </div>
                <div>
                  <label className="block text-[var(--text-secondary)] text-xs mb-2">EMAIL=</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[var(--void)] border border-[var(--border)] focus:border-[var(--arch-cyan)] outline-none px-4 py-2 text-[var(--text-primary)] transition-colors"
                    placeholder='"Enter Email"'
                    disabled={status !== 'idle'}
                  />
                </div>
                <div>
                  <label className="block text-[var(--text-secondary)] text-xs mb-2">PAYLOAD=</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[var(--void)] border border-[var(--border)] focus:border-[var(--arch-cyan)] outline-none px-4 py-2 text-[var(--text-primary)] transition-colors h-32 resize-none"
                    placeholder='"Enter Message"'
                    disabled={status !== 'idle'}
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex-1 mr-4 h-16 overflow-y-auto text-xs text-[var(--terminal-green)] flex flex-col justify-end">
                    <AnimatePresence>
                      {logs.map((log, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                          {log}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status !== 'idle'}
                    className={`shrink-0 flex items-center gap-2 px-6 py-2 border ${
                      status === 'idle' 
                        ? 'border-[var(--arch-cyan)] text-[var(--arch-cyan)] hover:bg-[var(--arch-cyan)] hover:text-black' 
                        : status === 'sending' ? 'border-yellow-500 text-yellow-500' : 'border-[var(--terminal-green)] text-[var(--terminal-green)]'
                    } transition-colors`}
                  >
                    <Send className="w-4 h-4" />
                    {status === 'idle' ? 'EXECUTE' : status === 'sending' ? 'SENDING...' : 'SENT'}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
