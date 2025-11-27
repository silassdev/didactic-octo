export type PostMeta = {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    date: string;
    tags?: string[];
    cover?: string;
};

const posts: PostMeta[] = [
    {
        id: 'p1',
        title: 'Designing Low-Latency Web Apps',
        slug: 'designing-low-latency-web-apps',
        excerpt: 'Principles and patterns for building responsive, low-latency experiences using server-side techniques and caching.',
        date: '2025-07-12',
        tags: ['performance', 'architecture'],
        cover: '/blog/low-latency.png'
    },
    {
        id: 'p2',
        title: 'From Monolith to Microservices: A Practical Guide',
        slug: 'monolith-to-microservices',
        excerpt: 'Step-by-step approach to split a legacy app and keep engineering velocity during migration.',
        date: '2024-11-03',
        tags: ['architecture', 'backend'],
        cover: '/blog/microservices.png'
    },
    {
        id: 'p3',
        title: 'Testing Strategies for Frontend Teams',
        slug: 'testing-strategies-frontend',
        excerpt: 'Balancing unit, integration and e2e tests to ship with confidence without slowing down the team.',
        date: '2024-05-20',
        tags: ['testing', 'frontend'],
        cover: '/blog/testing-frontend.png'
    }
];

export default posts;
