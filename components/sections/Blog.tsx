'use client';

import { motion } from 'framer-motion';
import posts, { PostMeta } from '@/lib/data/posts';
import Link from 'next/link';

export default function Blog() {
    return (
        <section id="blog" className="py-20 bg-white dark:bg-gray-950 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">Blog</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">Thoughts on engineering, architecture and shipping products.</p>
                    </div>
                    <Link href="/blog" className="text-sm text-indigo-600">All posts →</Link>
                </div>

                <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {posts.map((post: PostMeta, i) => (
                        <motion.article
                            key={post.id}
                            variants={{
                                hidden: { opacity: 0, y: 8 },
                                visible: { opacity: 1, y: 0, transition: { delay: i * 0.06 } }
                            }}
                            className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-full h-40 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                                {post.cover ? (
                                    <img src={post.cover} alt={post.title} className="object-cover w-full h-full" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">No cover</div>
                                )}
                            </div>

                            <h3 className="font-semibold mt-3">{post.title}</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>

                            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                                <div>{post.date}</div>
                                <Link href={`/blog/${post.slug}`} className="text-indigo-600">Read →</Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
