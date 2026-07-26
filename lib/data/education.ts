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
        id: 'nd',
        institution: 'Benue State Polytechnic, Ugbokolo',
        degree: 'National Diploma in Computer Engineering',
        year: '2021 — 2023',
        url: 'https://apltoday.com/wp-content/uploads/2025/12/e7a06b0f-d712-43fe-8e3c-fc19f9de0da3-1.jpeg',
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
    },
    {
        id: 'cert3',
        institution: 'IBM',
        degree: 'Cybersecurity Fundamentals Certificate',
        year: '2026',
        url: 'https://www.credly.com/badges/fb72aeb7-4ed7-43f0-9667-f4e2cae92cb3/',
        logo: '/ibm.png'
    },
    {
        id: 'cert4',
        institution: 'IBM',
        degree: 'Digital Mindset',
        year: '2026',
        url: 'https://www.credly.com/badges/06ec2447-4e1f-45ad-aa53-4d2401ab5b62/linked_in_profile',
        logo: '/ibm.png'
    },
    {
        id: 'cert5',
        institution: 'IBM',
        degree: 'Web Development Fundamentals',
        year: '2026',
        url: 'https://www.credly.com/badges/c5d0ccd0-a41b-4340-b150-4b70192e7975',
        logo: '/ibm.png'
    },
    {
        id: 'cert6',
        institution: 'AI IXX',
        degree: 'Python for AI',
        year: '2026',
        url: 'https://aiixx.ai/certificates/view/12529',
        logo: '/aix.png'
    },
    {
        id: 'cert7',
        institution: 'Dataflair',
        degree: 'Free Web Development Course – Learn HTML, CSS ',
        year: '2023',
        url: 'https://data-flair.training/verify/7A51735CFE-7A33E34E56-73436DE684/',
        logo: '/dataf.png'
    },
    {
        id: 'cert8',
        institution: 'Dataflair',
        degree: 'Free Angular Certification Course',
        year: '2024',
        url: 'https://data-flair.training/verify/7597B798CF-7361598312-73436DE684/',
        logo: '/dataf.png'
    }
];
