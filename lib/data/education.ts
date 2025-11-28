export type EducationItem = {
    id: string;
    institution: string;
    degree: string;
    year: string;
    url?: string;
    logo?: string;
};

export const education: EducationItem[] = [
    {
        id: 'hnd',
        institution: 'Benue State Polytechnic, Ugbokolo',
        degree: 'Higher National Diploma in Telecommunication Technology',
        year: '2024 — 2026',
        url: 'https://example.com',
        logo: '/bsp.png'
    },
    {
        id: 'nd',
        institution: 'Benue State Polytechnic, Ugbokolo',
        degree: 'National Diploma in Computer Engineering',
        year: '2021 — 2023',
        url: 'https://example.com',
        logo: '/bsp.png'
    },
    {
        id: 'cert1',
        institution: 'Xaltuis Academy',
        degree: 'Software Engineering Certificate',
        year: '2025',
        url: 'https://xaltius.learner.adroit-lms.com/public/certificate?cid=20bb2a7c-9ace-4440-af09-a4be573ae1c2',
        logo: '/xaltius.png'
    },
    {
        id: 'cert2',
        institution: 'Forage',
        degree: 'Front-End Software Engineering Job Simulation',
        year: '2025',
        url: 'https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_CcbCiGcpmKRF35aET_1757346257033_completion_certificate.pdf',
        logo: '/forage.png'
    }
];
