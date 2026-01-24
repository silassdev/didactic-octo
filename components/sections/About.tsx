'use client';

import { motion } from 'framer-motion';
import React from 'react';

function LanguagesPills({ languages = ['JavaScript', 'TypeScript', 'Node.js', 'PHP', 'Java', 'C++'] }) {
  return (
    <ul
      role="list"
      aria-label="Core technologies"
      className="flex flex-wrap gap-2 mt-2"
    >
      {languages.map((lang) => (
        <li key={lang}>
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
                       bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200
                       ring-1 ring-indigo-200 dark:ring-indigo-800"
          >
            {lang}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  const coreLanguages = ['JavaScript', 'TypeScript', 'Node.js', 'PHP', 'Java', 'C++'];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-indigo-600 shadow-2xl group">
            <img
              src="/silas.png"
              alt="Silas Tyokaha — Developer"
              className="w-full h-full object-cover object-center transform-gpu scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              I am a full-stack software engineer focused on designing scalable backend systems — API design, background processing, authentication, and data modelling — paired with performance-oriented frontends built with React and Next.js (TypeScript, SSR).
            </p>

            <p>
              I deliver features end-to-end with an emphasis on clean abstractions, predictable data flows, automated testing, observability, and production reliability.
            </p>

            <div>
              <div className="text-gray-900 dark:text-white font-semibold">Core technologies</div>
              <LanguagesPills languages={coreLanguages} />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/10"
            >
              See Projects
            </a>

            <a
              href="mailto:9shila@gmail.com"
              className="px-8 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 font-bold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
