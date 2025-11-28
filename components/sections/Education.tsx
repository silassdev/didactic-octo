'use client';

import { motion } from 'framer-motion';
import { education, EducationItem } from '@/lib/data/education';
import { FiExternalLink } from 'react-icons/fi';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-950 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Education & Certifications</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">Academic background and professional certifications.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((item: EducationItem, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0 overflow-hidden">
                                    {item.logo ? (
                                        <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold">
                                            {item.institution.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.institution}</h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">{item.degree}</p>
                                    <p className="text-sm text-gray-500 mt-1">{item.year}</p>

                                    {item.url && (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            <FiExternalLink /> Verify / View
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
