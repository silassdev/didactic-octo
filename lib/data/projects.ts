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
    id: 'laravel-lms',
    title: 'Laravel LMS',
    description: 'A comprehensive Learning Management System (LMS) built with Laravel, designed to facilitate education',
    details: 'A comprehensive Learning Management System (LMS) built with Laravel, designed to facilitate online education through role-based access for administrators, trainers, and students. This application leverages modern web technologies to provide a seamless experience for managing courses, blogs, user profiles, and more.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Tailwind'],
    repo: 'https://github.com/silassdev/crispy-sniffle',
    image: '/roblox.png',
  },
  {
    id: 'paystackdemo',
    title: 'Paystack Demo',
    description: 'A simple demo on how to accept payments with Paystack in a Next.js app.',
    details: 'This project serves as a practical guide and demonstration for integrating Paystack payments into a Next.js application. It covers the entire flow from initiating a transaction to verifying it server-side, ensuring secure and reliable payment processing. It also includes real-time feedback for users via flash messages.',
    tags: ['Next.js', 'TypeScript', 'Paystack API', 'Tailwind CSS'],
    repo: 'https://github.com/silassdev/paystack-nextjs-typescript',
    live: 'https://paystack-nextjs-typescript.vercel.app/',
    image: '/paystack.png',
  },
  {
    id: 'hostel',
    title: 'Hostel Management System',
    description: 'A full-stack Next.js application for managing student hostel allocations and payments.',
    details: 'A complete solution for hostel management, streamlining the process of room allocation, fee payments, and maintenance requests. It leverages NextAuth for secure authentication and Prisma with PostgreSQL for robust data management. Automated email receipts are sent via Nodemailer.',
    tags: ['Next.js', 'Paystack API', 'Prisma', 'PostgreSQL', 'Nodemailer', 'Tailwind'],
    repo: 'https://github.com/silassdev/redesigned-hstel',
    live: 'https://redesigned-hstel.vercel.app/',
    image: '/hostel.png',
  },
  {
    id: 'apltoday',
    title: 'Apltoday',
    description: 'A Wordpress Blog Rendering site',
    details: 'Apltoday is a WordPress blog rendering site that focuses on delivering content efficiently. It leverages the power of WordPress for content management while using modern frontend technologies to render the blog, ensuring a fast and responsive user experience.',
    tags: ['Wordpress', 'PHP', 'MySQL'],
    live: 'https://apltoday.com',
    image: '/apltoday.png',
  },
  {
    id: 'urlshortener',
    title: 'URL Shortener',
    description: 'A simple URL shortener with QR code generation.',
    details: 'A simple URL shortener with QR code generation. This project allows users to shorten long URLs into concise, shareable links and also provides the functionality to generate QR codes for these shortened URLs, making them easily scannable. It is built with a focus on efficiency and ease of use.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Tailwind'],
    repo: 'https://github.com/silassdev/CodeAlpha_UrlShortener',
    image: '/roblox.png',
  },
  {
    id: 'library-management-api',
    title: 'Library Management API',
    description: 'A full-stack CRUD Library Management System built with Spring Boot, JPA, and MySQL.',
    details: 'A full-stack CRUD Library Management System built with Spring Boot, JPA, and MySQL.',
    tags: ['Spring Boot', 'JPA', 'MySQL'],
    repo: 'https://github.com/silassdev/library-management-backend',
    live: 'https://library-management-frontend-ashen.vercel.app/',
    image: '/library.png',
  },
  {
    id: 'churchwebsite',
    title: 'Church Website',
    description: 'A full-stack Church Website built with Next.js, TypeScript, and Prisma.',
    details: 'A comprehensive, modern church website built with Next.js 15, TypeScript, and Prisma. This platform provides a complete solution for church management including member registration, blog management, payment processing, and administrative tools.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL'],
    repo: 'https://github.com/silassdev/church-bassoon',
    image: '/roblox.png',
  },
  {
    id: 'ocr-screenshot-text-extractor',
    title: 'OCR Screenshot Text Extractor',
    description: 'A lightweight JavaScript application that extracts text from screenshots using Optical Character Recognition (OCR).',
    details: 'This project is a lightweight JavaScript application that extracts text from screenshots using Optical Character Recognition (OCR). It leverages Tesseract.js to recognize text from up to 10 uploaded images (via file selection or drag-and-drop), formats the text into a clean, readable output, and displays it with an engaging typewriter effect inside a beautifully styled card. A loading spinner (rolling doughnut) provides feedback during processing.',
    tags: ['JavaScript', 'Tesseract.js', 'Tailwind'],
    repo: 'https://github.com/silassdev/img-to-text',
    live: 'https://img-to-text-xi.vercel.app/',
    image: '/ocr.png',
  },
  {
    id: 'text-to-speech-converter',
    title: 'Text-to-Speech Converter',
    description: 'A lightweight JavaScript application that converts text to speech.',
    details: 'This application seamlessly transforms any written text into clear, natural-sounding speech. You can choose from multiple voices grouped by language, adjust speaking rate and pitch to suit your style, and instantly preview each voice before converting. Let’s give it a try—type any sentence you like, hit “Speak,” and hear your words come to life!.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/silassdev/Text-to-speech',
    live: 'https://text-to-speech-six-omega.vercel.app/',
    image: '/tts.png',
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    description: 'A task management application built with Next.js, TypeScript, and Prisma.',
    details: 'A task management application built with Next.js, TypeScript, and Prisma.',
    tags: ['React', 'Prisma', 'MySQL', 'Tailwind'],
    repo: 'https://github.com/silassdev/task-manager',
    image: '/task.png',
  },
  {
    id: 'dashboardui',
    title: 'Dashboard UI',
    description: 'A dashboard UI built with Next.js, TypeScript, and Prisma.',
    details: 'A dashboard UI built with Next.js, TypeScript, and Prisma.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Tailwind'],
    repo: 'https://github.com/silassdev/dashboard-ui',
    live: 'https://dashb-delta.vercel.app/dashboard',
    image: '/dash.png',
  },
];
