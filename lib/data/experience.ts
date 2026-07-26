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
        company: 'Oikno',
        role: 'Frontend Developer Intern',
        start: 'Jan 2023',
        end: 'Aug 2025',
        location: 'Nigeria',
        bullets: [
            'Led checkout flow development, added Jest + RTL tests for core UI, and introduced ESLint + pre-commit hooks + GitHub Actions CI, cutting review cycles by 6%.',
            'Implemented reusable component systems and improved UX consistency across multiple products.',
            'Integrated REST APIs and optimized client-side logic for speed, accessibility, and maintainability.',
            'Collaborated with backend teams to streamline data flows and reduce front-end load times.'
        ],
        logo: '/oikno.png'
    },
    {
        id: 'e2',
        company: 'Xaltius Academy',
        role: 'Software Engineering Intern',
        start: 'Sep 2025',
        end: 'December 2025',
        location: 'Singapore',
        bullets: [
            'Built a Library Management app (Spring Boot, MySQL) with full CRUD and role-based access; authored REST endpoints and DB schema used by frontend teams',
            'Developed an e-commerce REST API and optimized database queries; prepared schema migrations with MySQL Workbench',
            'Developed JUnit/Mockito automated test suites for API smoke testing and deployment validation, reducing manual QA efforts.'
        ],
        logo: '/xaltius.png'
    }
];

export default experience;
