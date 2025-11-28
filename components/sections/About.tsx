'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-950 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-indigo-600 shadow-lg group">
                        <img
                            src="/silassdev.png"
                            alt="Silas Tyokaha"
                            className="w-full h-full object-cover object-top mix-blend-multiply filter grayscale opacity-90 scale-110 transition-transform duration-700 group-hover:scale-100"
                        />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-bold mb-4 text-indigo-500">About Me</h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        I’m a full-stack engineer specializing in scalable backend architectures <strong>(API design, background jobs, auth, data modeling)</strong>, high-performance frontends (React/Next.js, TypeScript, SSR), and efficient DevOps workflows using Docker, CI/CD, and monitoring. I build features end-to-end with a focus on clean abstractions, predictable data flows, automated testing, and production reliability.                    </p>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        I also develop technical side projects, including a full-stack Hostel Management System <strong>(Next.js, Prisma, PostgreSQL, NextAuth, Paystack, email automation)</strong> and a multi-voice Text-to-Speech engine. My core stack includes JavaScript/TypeScript, PHP, Node.js, Express, Laravel, React, Next.js, Prisma, SQL/NoSQL databases, Docker, Git, and testing workflows.                    </p>

                    <div className="mt-6 flex gap-3">
                        <a href="#projects" className="px-4 py-2 rounded-lg bg-indigo-600 text-white">See projects</a>
                        <a href="mailto:9shila@gmail.com" className="px-4 py-2 rounded-lg border">Contact</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
