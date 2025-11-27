export type ExperienceItem = {
    id: string;
    company: string;
    role: string;
    start: string;
    end?: string;
    location?: string;
    bullets?: string[];
    logo?: string;
};

const experience: ExperienceItem[] = [
    {
        id: 'e1',
        company: 'Igniscode',
        role: 'Solution Architect',
        start: 'Sep 2025',
        end: 'Present',
        location: 'Benue, NG (Hybrid)',
        bullets: [
            'Led design & delivery of a low-latency LMS used by thousands of learners.',
            'Architected backend services (Laravel) and realtime features with Livewire.',
            'Mentored engineers, introduced testing & CI standards.'
        ],
        logo: '/roblox.png'
    },
    {
        id: 'e2',
        company: 'Oikno',
        role: 'Frontend Developer',
        start: 'Jan 2023',
        end: 'Aug 2025',
        location: 'Port, NG (Remote)',
        bullets: [
            'Built microservices with Node.js and Express, scaling APIs with Redis caching.',
            'Modernized front-end stack using Next.js, Tailwind and component-driven design.'
        ],
        logo: '/star-6.png'
    },
    {
        id: 'e3',
        company: 'APLTODAY',
        role: 'Wordpress Developer',
        start: 'Jun 2020',
        end: 'Dec 2024',
        location: 'Lagos, NG',
        bullets: [
            'Implemented analytics dashboards and reporting pipelines.',
            'Owned deployment workflows and dockerization.'
        ],
        logo: '/kuromi.png'
    }
];

export default experience;
