'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-12">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Hi, I’m Silas Tyokaha — <br className="hidden md:block" />
          <span className="text-indigo-600 dark:text-indigo-400">Full-stack Engineer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          I build performant, accessible web apps with a focus on great developer experience and clean design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors" href="#projects">
            See projects
          </a>
          <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" href="#contact">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
