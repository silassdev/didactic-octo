import { notFound } from 'next/navigation';
import posts from '@/lib/data/posts';
import Link from 'next/link';

// Generate static params for all blog posts
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back link */}
                <Link href="/#blog" className="text-sm text-indigo-600 hover:underline mb-6 inline-block">
                    ← Back to blog
                </Link>

                {/* Cover Image */}
                {post.cover && (
                    <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-8">

                        <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Post Header */}
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</time>

                        {post.tags && post.tags.length > 0 && (
                            <div className="flex gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                {/* Post Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div
                        className="article-content"
                        dangerouslySetInnerHTML={{
                            __html: post.content
                                .split('\n')
                                .map(line => {
                                    // Convert markdown headers
                                    if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
                                    if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
                                    if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`;

                                    // Convert markdown code blocks
                                    if (line.includes('```')) return line.replace(/```(\w+)?/g, '<pre><code class="language-$1">').replace(/```/g, '</code></pre>');

                                    // Convert markdown lists
                                    if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`;
                                    if (/^\d+\. /.test(line)) return `<li>${line.replace(/^\d+\. /, '')}</li>`;

                                    // Convert markdown bold and inline code
                                    let processed = line
                                        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/`(.+?)`/g, '<code>$1</code>');

                                    // Regular paragraphs
                                    if (line.trim() && !line.startsWith('<')) return `<p>${processed}</p>`;

                                    return line;
                                })
                                .join('\n')
                        }}
                    />
                </div>


                <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                        <Link href="/#blog" className="text-indigo-600 hover:underline">
                            ← Back to all posts
                        </Link>
                        <Link href="/#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                            Get in touch
                        </Link>
                    </div>
                </footer>
            </div>
        </article>
    );
}
