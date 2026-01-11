import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 group">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Silas
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/silassdev' },
              { icon: FiTwitter, href: 'https://twitter.com/silassdev' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/silassdev' },
              { icon: FiMail, href: 'mailto:9shila@gmail.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 dark:border-gray-900 gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Silas . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
