'use client';

export default function TestimonialCard({ quote, author, role, avatar }: { quote: string; author: string; role?: string; avatar?: string }) {
    return (
        <article className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <blockquote className="text-sm text-gray-600 dark:text-gray-300">“{quote}”</blockquote>
            <div className="mt-4 flex items-center gap-3">
                {avatar ? (
                    <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800" />
                )}
                <div>
                    <div className="font-medium text-sm">{author}</div>
                    {role && <div className="text-xs text-gray-500">{role}</div>}
                </div>
            </div>
        </article>
    );
}
