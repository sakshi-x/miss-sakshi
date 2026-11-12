import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import { ColorTheme, ThemeConfig } from '../types';
import { THEME_CONFIGS } from '../data/portfolioData';

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState('blog');
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
        <title>Blog | Sakshi Kashyap</title>
        <meta name="description" content="Latest insights on AI marketing, web development, and digital strategy from a hands-on practitioner." />
        <link rel="canonical" href="https://probable-barnacle-bice.vercel.app/blog" />
      </Helmet>

      <Navbar
        activeSection={activeSection}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />
      <main className="flex-1">
        <div id="hero">
          <h1 className="sr-only">Blog | Sakshi Kashyap</h1>
        </div>
        <Blog theme={themeConfig} />
      </main>
      <Footer theme={themeConfig} />
    </div>
  );
}