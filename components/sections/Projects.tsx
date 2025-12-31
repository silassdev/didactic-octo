'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import ProjectModal, { ProjectType } from '@/components/shared/ProjectModal';
import { projects } from '@/lib/data/projects';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('All');
  const [selected, setSelected] = useState<ProjectType | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const visible = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.tags?.includes(filter))), [filter]);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
              Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A collection of projects I've built using modern web technologies. Focus on performance, usability, and clean code.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${filter === t
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-indigo-500/50 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button
                      onClick={() => setSelected(p)}
                      className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex gap-2">
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-colors border border-gray-100 dark:border-gray-800">
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
                    {p.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
                    {p.tags?.slice(0, 3).map((t) => (
                      <span key={t} className="px-3 py-1 bg-gray-100/50 dark:bg-gray-900/50 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-400">
                        {t}
                      </span>
                    ))}
                    {p.tags && p.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100/50 dark:bg-gray-900/50 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-400">
                        +{p.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
