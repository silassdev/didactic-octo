// lib/data/testimonials.ts
export type Testimonial = {
    id: string;
    quote: string;
    author: string;
    role?: string;
    avatar?: string; // optional path to avatar image
};

const testimonials: Testimonial[] = [
    {
        id: 't1',
        quote: "Silas shipped high-impact features quickly and kept the codebase clean and well-tested. An absolute pleasure to work with.",
        author: 'Aisha Bello',
        role: 'Product Manager, Igniscode',
        avatar: '/avatars/aisha.jpg'
    },
    {
        id: 't2',
        quote: 'Delivered a performant LMS under tight deadlines — thoughtful architecture and excellent communication.',
        author: 'David Okoro',
        role: 'Engineering Lead',
        avatar: '/avatars/david.jpg'
    },
    {
        id: 't3',
        quote: 'Great mentor and a pragmatic engineer. Helped level up the team’s testing culture and CI pipelines.',
        author: 'Fatima Yusuf',
        role: 'Senior Developer',
        avatar: '/avatars/fatima.jpg'
    }
];

export default testimonials;
