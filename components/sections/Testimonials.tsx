'use client';

import { motion } from 'framer-motion';
import testimonials, { Testimonial } from '@/lib/data/testimonials';
import TestimonialCard from '@/components/shared/TestimonialCard';

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-950 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Testimonials</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">Selected feedback from colleagues and collaborators.</p>
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {testimonials.map((t: Testimonial, i) => (
                        <motion.div
                            key={t.id}
                            variants={{
                                hidden: { opacity: 0, y: 8 },
                                visible: { opacity: 1, y: 0, transition: { delay: i * 0.06 } }
                            }}
                            className=""
                        >
                            <TestimonialCard quote={t.quote} author={t.author} role={t.role} avatar={t.avatar} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
