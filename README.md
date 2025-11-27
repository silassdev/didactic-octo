# Silas Dev Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, smooth animations, and a centralized data management system.

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations using Framer Motion
- **Fully Responsive** - Optimized for all device sizes
- **Fast & Optimized** - Built with Next.js 16 for optimal performance
- **Type-Safe** - Fully typed with TypeScript
- **Centralized Data** - Easy content management through data files
- **Accessible** - Semantic HTML and ARIA attributes

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Font:** [Google Fonts (Roboto)](https://fonts.google.com/)

## 📁 Project Structure

```
silassdev/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero/intro section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Blog.tsx        # Blog posts preview
│   │   └── Testimonials.tsx # Client testimonials
│   └── shared/
│       ├── ProjectModal.tsx
│       └── TestimonialCard.tsx
├── lib/
│   └── data/
│       ├── projects.ts     # Projects data
│       ├── experience.ts   # Experience data
│       ├── posts.ts        # Blog posts data
│       └── testimonials.ts # Testimonials data
└── public/                 # Static assets (images, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd silassdev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

