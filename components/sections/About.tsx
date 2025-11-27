'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-950 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <img src="/profile.jpg" alt="Silas Pilar" className="rounded-2xl shadow-lg object-cover h-80 w-full" />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-bold mb-4 text-indigo-500">About Me</h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        I’m a passionate full-stack developer who loves turning complex ideas into beautiful, functional web apps. My primary stack includes <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, and <strong>MySQL</strong>.
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Beyond code, I value design, performance, and teamwork. I’m always learning, exploring new technologies, and refining my craft. I mentor junior developers and enjoy building tools that make other engineers productive.
                    </p>

                    <div className="mt-6 flex gap-3">
                        <a href="#projects" className="px-4 py-2 rounded-lg bg-indigo-600 text-white">See projects</a>
                        <a href="mailto:you@example.com" className="px-4 py-2 rounded-lg border">Contact</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
