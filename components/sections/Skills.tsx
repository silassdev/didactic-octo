'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaPhp,
  FaJava,
  FaGithub,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSpring,
  SiFramer,
  SiJest,
  SiGit,
  SiMongodb,
} from 'react-icons/si';

// Simple inline SVGs for Livewire and cPanel (placeholders — replace with official logos if you have them)
function LivewireIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.06" />
      <path d="M6 12c2-4 6-6 10-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 16c2-2 6-3 10-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CPanelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.06" />
      <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Skill = { id: string; name: string; Icon: React.ComponentType<any> };

const frontend: Skill[] = [
  { id: 'html5', name: 'HTML5', Icon: FaHtml5 },
  { id: 'css3', name: 'CSS3', Icon: FaCss3Alt },
  { id: 'react', name: 'React', Icon: SiReact },
  { id: 'nextjs', name: 'Next.js', Icon: SiNextdotjs },
  { id: 'tailwind', name: 'Tailwind CSS', Icon: SiTailwindcss },
];

const backend: Skill[] = [
  { id: 'node', name: 'Node.js', Icon: FaNodeJs },
  { id: 'express', name: 'Express', Icon: SiExpress },
  { id: 'laravel', name: 'Laravel', Icon: FaLaravel },
  { id: 'spring', name: 'Spring', Icon: SiSpring },
];

const tools: Skill[] = [
  { id: 'git', name: 'Git', Icon: SiGit },
  { id: 'github', name: 'GitHub', Icon: FaGithub },
  { id: 'framer', name: 'Framer Motion', Icon: SiFramer },
  { id: 'jest', name: 'Jest', Icon: SiJest },
  { id: 'livewire', name: 'Livewire', Icon: LivewireIcon },
  { id: 'cpanel', name: 'cPanel', Icon: CPanelIcon },
];

const databases: Skill[] = [
  { id: 'mysql', name: 'MySQL', Icon: SiMysql },
  { id: 'mongodb', name: 'MongoDB ', Icon: SiMongodb },
  { id: 'postgres', name: 'PostgreSQL', Icon: SiPostgresql },
];

const languages: Skill[] = [
  { id: 'ts', name: 'TypeScript', Icon: SiTypescript },
  { id: 'js', name: 'JavaScript', Icon: SiJavascript },
  { id: 'php', name: 'PHP', Icon: FaPhp },
  { id: 'java', name: 'Java', Icon: FaJava },
];

const groups = [
  { title: 'Frontend', skills: frontend },
  { title: 'Backend', skills: backend },
  { title: 'Databases', skills: databases },
  { title: 'Languages', skills: languages },
  { title: 'Tools', skills: tools },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
            Technical <span className="text-indigo-600 dark:text-indigo-400">Toolkit</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-indigo-500/30 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <span className="w-2 h-6 bg-indigo-500 rounded-full" />
                {g.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {g.skills.map((s) => {
                  const tooltipId = `tt-${s.id}`;
                  return (
                    <motion.div
                      key={s.id}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group relative"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/50"
                        title={s.name}
                      >
                        <s.Icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {s.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
