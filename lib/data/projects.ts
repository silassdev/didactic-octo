export type Project = {
  id: string;
  title: string;
  description: string;
  details?: string;
  tags: string[];
  live?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'mentorlink',
    title: 'MentorLink',
    description: 'Platform connecting learners with tech mentors; bookings, reviews and profiles.',
    details: 'MentorLink is a comprehensive platform designed to bridge the gap between aspiring tech professionals and experienced mentors. It features a robust booking system, user profiles with detailed portfolios, and a review system to ensure quality interactions. Built with performance and scalability in mind.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Tailwind'],
    repo: 'https://github.com/silassdev/mentorlink',
    live: 'https://mentorlink.example',
    image: '/roblox.png',
  },
  {
    id: 'paystackdemo',
    title: 'Paystack Demo',
    description: 'A simple demo on how to accept payments with Paystack in a Next.js app.',
    details: 'This project serves as a practical guide and demonstration for integrating Paystack payments into a Next.js application. It covers the entire flow from initiating a transaction to verifying it server-side, ensuring secure and reliable payment processing. It also includes real-time feedback for users via flash messages.',
    tags: ['Next.js', 'TypeScript', 'Paystack API', 'Tailwind CSS'],
    repo: 'https://github.com/silassdev/paystack-nextjs-typescript',
    image: '/paystack.png',
  },
  {
    id: 'hostel',
    title: 'Hostel Management System',
    description: 'A full-stack Next.js application for managing student hostel allocations and payments.',
    details: 'A complete solution for hostel management, streamlining the process of room allocation, fee payments, and maintenance requests. It leverages NextAuth for secure authentication and Prisma with PostgreSQL for robust data management. Automated email receipts are sent via Nodemailer.',
    tags: ['Next.js', 'Paystack API', 'Prisma', 'PostgreSQL', 'Nodemailer', 'Tailwind'],
    repo: 'https://github.com/silassdev/redesigned-hstel',
    image: '/hostel.png',
  },
  {
    id: 'shoplite',
    title: 'ShopLite',
    description: 'Lightweight ecommerce store with SSR product pages and Stripe checkout.',
    details: 'ShopLite is a minimalist e-commerce platform focused on speed and simplicity. It utilizes Server-Side Rendering (SSR) for fast initial page loads and SEO benefits. The integration with Stripe ensures a smooth and secure checkout experience for customers.',
    tags: ['Next.js', 'Stripe', 'MySQL', 'Tailwind'],
    live: 'https:www.apltoday.com',
    image: '/roblox.png',
  },
  {
    id: 'JavaScript',
    title: 'ShopLite',
    description: 'Ad.',
    details: 'Promotional content or additional project details can go here.',
    tags: ['Next.js', 'Stripe', 'MySQL', 'Tailwind'],
    live: 'https:www.apltoday.com',
    image: '/roblox.png',
  },
];
