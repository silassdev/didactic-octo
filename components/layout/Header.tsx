'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50"
    >
      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-950/70 border border-white/20 dark:border-gray-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300 hover:border-indigo-500/30">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Silas
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="https://apltoday.com/wp-content/uploads/2025/11/silassdev.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm hover:scale-105 transition-transform duration-200 shadow-lg shadow-indigo-500/10"
          >
            Resume
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={open ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`${open ? 'block' : 'hidden'} md:hidden mt-4 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl shadow-2xl overflow-hidden`}
      >
        <div className="p-4">
          <nav className="flex flex-col gap-2">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
            <a
              href="https://apltoday.com/wp-content/uploads/2025/11/silassdev.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 rounded-xl bg-indigo-600 text-white text-sm font-medium text-center shadow-lg shadow-indigo-500/20"
            >
              Download CV
            </a>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}
