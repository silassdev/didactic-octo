export type Project = {
  id: string;
  title: string;
  description: string;
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
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Tailwind'],
    repo: 'https://github.com/silassdev/mentorlink',
    live: 'https://mentorlink.example',
    image: '/roblox.png',
  },
  {
    id: 'paystackdemo',
    title: 'Paystack Demo',
    description: 'A simple demo on how to accept payments with Paystack in a Next.js app, verify transactions server-side, and show real-time payment status to users with flash messages.',
    tags: ['Next.js', 'TypeScript', 'Paystack API', 'Tailwind CSS'],
    repo: 'https://github.com/silassdev/paystack-nextjs-typescript',
    image: '/paystack.png',
  },
  {
    id: 'hostel',
    title: 'Hostel Management System',
    description: 'A full-stack Next.js application for managing student hostel allocations, payments, and support tickets. Built with TypeScript, Prisma + PostgreSQL, NextAuth for authentication, Paystack for payments, and nodemailer for receipts.',
    tags: ['Next.js', 'Paystack API', 'Prisma', 'PostgreSQL', 'Nodemailer', 'Tailwind'],
    repo: 'https://github.com/silassdev/redesigned-hstel',
    image: '/hostel.png',
  },
  {
    id: 'shoplite',
    title: 'ShopLite',
    description: 'Lightweight ecommerce store with SSR product pages and Stripe checkout.',
    tags: ['Next.js', 'Stripe', 'MySQL', 'Tailwind'],
    live: 'https:www.apltoday.com',
    image: '/roblox.png',
  },
  {
    id: 'JavaScript',
    title: 'ShopLite',
    description: 'Ad.',
    tags: ['Next.js', 'Stripe', 'MySQL', 'Tailwind'],
    live: 'https:www.apltoday.com',
    image: '/roblox.png',
  },
];
