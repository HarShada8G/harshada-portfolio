import React from 'react';
import { motion } from 'framer-motion';

const COMP_STATS = [
  { platform: 'CODEFORCES', value: '871', sub: 'Newbie - 100+ problems solved' },
  { platform: 'CODECHEF', value: '1423', sub: '2★ rating - 400+ problems solved' },
  { platform: 'LEETCODE', value: 'harshe008', sub: 'DSA across data structures & DP' },
  { platform: 'TOTAL PROBLEMS SOLVED', value: '500+', sub: 'Across competitive platforms' },
  { platform: "GSSOC '26", value: 'Top 3%', sub: '14+ PRs & reviews, open-source' },
  { platform: 'SQUERIQUEST CTF', value: 'Top 20', sub: 'CTF at IIIT Lucknow' },
  { platform: 'JEE ADVANCED', value: '2025', sub: 'Cleared - JEE Main 1.9 percentile' }
];

const CERTS = [
  { title: 'ICPC', value: 'AlgoQueen', sub: 'Certificate of participation' },
  { title: 'ASPIRE FOR HER', value: 'Certified', sub: 'Program for women in tech' },
  { title: 'FLIPKART GRID 8.0', value: 'Round 2', sub: 'Selected - national tech competition' }
];

const BEYOND = [
  { time: 'GOONJ\nSept \'25-', role: 'Volunteer, Drama Society', desc: 'Contributed to theatre performances and event preparations, improving stage presence and teamwork.' },
  { time: 'UTKRISHT\nNov \'25-', role: 'Volunteer, Art Society', desc: 'Worked on arts-related activities and collaborative projects, improving creativity and teamwork.' },
  { time: 'AFTERDARK\nNov \'25-', role: 'Volunteer, Photography Society', desc: 'Covered college events through photography and videography for society archives and promotions.' }
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 w-full border-t border-[var(--border)] font-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Competitive Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {COMP_STATS.map((stat, i) => (
            <motion.div 
              key={stat.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 border border-[var(--border)] hover:border-[var(--arch-cyan)] transition-colors rounded-md"
            >
              <div className="text-[var(--text-secondary)] text-xs mb-4 tracking-widest">{stat.platform}</div>
              <div className="text-amber-500 text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-[var(--text-secondary)] text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Recognitions */}
        <div className="mb-20">
          <div className="text-amber-500 text-xs font-bold mb-2 tracking-widest uppercase">RECOGNITIONS</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">Certifications & selections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CERTS.map((cert, i) => (
              <motion.div 
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 border border-[var(--border)] hover:border-[var(--terminal-green)] transition-colors rounded-md"
              >
                <div className="text-[var(--text-secondary)] text-xs mb-4 tracking-widest">{cert.title}</div>
                <div className="text-amber-500 text-2xl font-bold mb-2">{cert.value}</div>
                <div className="text-[var(--text-secondary)] text-sm">{cert.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Positions of Responsibility */}
        <div>
          <div className="text-amber-500 text-xs font-bold mb-2 tracking-widest uppercase">POSITIONS OF RESPONSIBILITY</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">Beyond the code</h2>
          
          <div className="flex flex-col gap-4">
            {BEYOND.map((item, i) => (
              <motion.div 
                key={item.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f4f0e6] rounded-md flex flex-col md:flex-row transition-transform hover:scale-[1.01] overflow-hidden shadow-lg"
              >
                <div className="bg-[#e8e2d2] border-r border-[#d5ccb6] text-amber-700 text-xs font-bold whitespace-pre-line min-w-[120px] md:w-[140px] tracking-wider uppercase p-6 flex flex-col justify-center text-center">
                  {item.time}
                </div>
                <div className="p-6 flex-1">
                  <div className="text-gray-900 font-bold text-lg mb-2">{item.role}</div>
                  <div className="text-gray-700 text-sm">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
