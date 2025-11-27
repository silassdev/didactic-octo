'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-12">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Hi, I’m Silas Tyokaha — Full-stack engineer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl"
          >
            I build performant, accessible web apps with a focus on great developer experience and clean design.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white" href="#projects">
              See projects
            </a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-tr from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20 border border-gray-100 dark:border-gray-800 shadow-lg">
            <img
              src="/profile.jpg"
              alt="Silas Tyokaha"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            {/* Fallback content if image fails to load */}
            <div className="absolute inset-0 hidden items-center justify-center text-6xl font-bold text-indigo-600 dark:text-indigo-400 bg-gradient-to-tr from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20">
              ST
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
