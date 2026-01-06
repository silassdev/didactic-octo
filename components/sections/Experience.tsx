'use client';

import { motion } from 'framer-motion';
import experience, { ExperienceItem } from '@/lib/data/experience';

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Experience</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">A concise timeline of professional experience and impact.</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-800" />

                    <div className="space-y-8 pl-12">
                        {experience.map((item: ExperienceItem, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: i * 0.06 }}
                                className="relative"
                            >
                                <div className="absolute -left-12 top-1.5 w-12 h-12 rounded-full bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm overflow-hidden">
                                    {item.logo ? (
                                        <img src={item.logo} alt={item.company} className="w-full h-full object-cover scale-110" />
                                    ) : (
                                        <div className="w-3 h-3 rounded-full bg-indigo-600" />
                                    )}
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className="text-sm text-gray-500">{item.start} — {item.end ?? 'Present'}</div>
                                            <h3 className="font-semibold">{item.role} <span className="text-xs text-gray-400">@ {item.company}</span></h3>
                                            {item.location && <div className="text-xs text-gray-500 mt-1">{item.location}</div>}
                                        </div>
                                        <div className="text-xs text-gray-400">{/* reserved for duration or actions */}</div>
                                    </div>

                                    {item.bullets && (
                                        <ul className="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                            {item.bullets.map((b, idx) => (
                                                <li key={idx}>{b}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
