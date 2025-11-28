import ClientHero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProjectsSection from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Blog from '@/components/sections/Blog';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <ClientHero />
      <About />
      <ProjectsSection />
      <Experience />
      <Education />
      <Skills />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}
