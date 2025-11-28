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
            'Leading design & delivery of a low-latency LMS.',
            'Architected backend services (Laravel) and realtime features with Livewire.',
            'Mentored engineers, introduced testing & CI standards.'
        ],
        logo: '/star.png'
    },
    {
        id: 'e2',
        company: 'Oikno',
        role: 'Frontend Developer',
        start: 'Jan 2023',
        end: 'Aug 2025',
        location: 'Rivers, NG (Remote)',
        bullets: [
            'Led checkout flow development, added Jest + RTL tests for core UI, and introduced ESLint + pre-commit hooks + GitHub Actions CI, cutting review cycles by 6%.',
            'Implemented reusable component systems and improved UX consistency across multiple products.',
            'Integrated REST APIs and optimized client-side logic for speed, accessibility, and maintainability.',
            'Collaborated with backend teams to streamline data flows and reduce front-end load times.'
        ],
        logo: '/oikno.png'
    },
    {
        id: 'e3',
        company: 'APLTODAY',
        role: 'Frontend & WordPress Developer',
        start: 'Jan 2023',
        end: 'Aug 2025',
        location: 'Lagos, NG (Contract)',
        bullets: [
            'Developed and customized WordPress themes, templates, and blog components using PHP, Gutenberg, and ACF.',
            'Optimized performance (images, caching, critical CSS) to boost Lighthouse score +5% and lower load time to 2.1s; built reusable themes and increased ad RPM by 5%.'],
        logo: '/ap.png'
    }
];

export default experience;
