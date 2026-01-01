'use client';

import { motion } from 'framer-motion';

export default function About() {
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
                            src="/silassdev.png"
                            alt="Silas Tyokaha"
                            className="w-full h-full object-cover object-center transform-gpu scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                        About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
                    </h2>

                    <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        <p>
                            I’m a full-stack engineer specializing in scalable backend architectures <strong className="text-gray-900 dark:text-white font-semibold">(API design, background jobs, auth, data modeling)</strong>, high-performance frontends (React/Next.js, TypeScript, SSR), and efficient DevOps workflows.
                        </p>
                        <p>
                            I build features end-to-end with a focus on clean abstractions, predictable data flows, automated testing, and production reliability.
                        </p>
                        <p>
                            I also develop technical side projects, including a full-stack Hostel Management System and a multi-voice Text-to-Speech engine. My core stack includes <span className="text-indigo-600 dark:text-indigo-400 font-medium">TypeScript, Node.js, Laravel, React, Next.js, and Docker.</span>
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#projects" className="px-8 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/10">
                            See Projects
                        </a>
                        <a href="mailto:9shila@gmail.com" className="px-8 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 font-bold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300">
                            Get in Touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
