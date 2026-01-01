'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  details?: string;
  image?: string;
  repo?: string;
  live?: string;
  tags?: string[];
};

export default function ProjectModal({ project, onClose }: { project: ProjectType; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto backdrop-blur-sm"
    >
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gray-950/60 transition-opacity"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative z-10 max-w-4xl w-full bg-white dark:bg-gray-900 rounded-[32px] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col md:flex-row"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white md:bg-gray-100 md:dark:bg-gray-800 md:text-gray-600 md:dark:text-gray-400 hover:scale-110 transition-transform"
        >
          <FiX className="w-5 h-5" />
        </button>

        <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-black text-4xl opacity-20">{project.title[0]}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent md:hidden" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="flex-1">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {(project.tags || []).map((t) => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full border border-gray-100 dark:border-gray-700">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6 font-medium">
              {project.description}
            </p>

            {project.details && (
              <div className="prose prose-sm dark:prose-invert max-w-none text-gray-500 dark:text-gray-500 italic mb-8 border-l-4 border-indigo-500/20 pl-4">
                {project.details}
              </div>
            )}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:scale-[1.02] transition-all shadow-xl shadow-indigo-500/20"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:scale-[1.02] transition-all"
              >
                <FiGithub /> Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
