import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { ColorTheme, ThemeConfig } from '../types';
import { THEME_CONFIGS } from '../data/portfolioData';

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState('projects');
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>('violet');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'blog', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const themeConfig: ThemeConfig = THEME_CONFIGS[currentTheme] || THEME_CONFIGS.violet;

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-violet-600 selection:text-white transition-colors duration-500">
      <Helmet>
        <title>Projects | Sakshi Kashyap</title>
        <meta name="description" content="Featured AI-powered web development and game development projects built with modern tools and AI assistance." />
        <link rel="canonical" href="https://probable-barnacle-bice.vercel.app/projects" />
      </Helmet>

      <Navbar
        activeSection={activeSection}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />
      <main className="flex-1">
        <div id="hero">
          <h1 className="sr-only">Projects | Sakshi Kashyap</h1>
        </div>
        <Projects theme={themeConfig} />
      </main>
      <Footer theme={themeConfig} />
    </div>
  );
}