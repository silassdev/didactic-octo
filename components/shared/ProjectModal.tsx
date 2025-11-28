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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <motion.div onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black" />

      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="relative z-10 max-w-3xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
      >
        <div className="flex items-start gap-4 p-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
            {project.details && <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.details}</p>}

            <div className="mt-4 flex flex-wrap gap-2">
              {(project.tags || []).map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md border">{t}</span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">
                  <FiExternalLink /> Live
                </a>
              )}

              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-sm">
                  <FiGithub /> Repo
                </a>
              )}
            </div>
          </div>

          <div className="w-40 h-32 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            {project.image ? (
              <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
            ) : (
              <div className="text-xs text-gray-500">No image</div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-3 border-t border-gray-100 dark:border-gray-800">
          <button onClick={onClose} className="px-3 py-1 rounded-md border text-sm">Close</button>
        </div>

        <button onClick={onClose} aria-label="Close modal" className="absolute top-3 right-3 p-2 rounded-md text-gray-600 dark:text-gray-300">
          <FiX />
        </button>
      </motion.div>
    </motion.div>
  );
}
