import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import { ColorTheme, ThemeConfig } from '../types';
import { THEME_CONFIGS } from '../data/portfolioData';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('about');
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
        <title>About Me | Sakshi Kashyap</title>
        <meta name="description" content="Digital Marketing with AI specialist bridging creative strategy with cutting-edge AI tools for web platforms, interactive games, and automated digital campaigns." />
        <link rel="canonical" href="https://probable-barnacle-bice.vercel.app/about" />
      </Helmet>

      <Navbar
        activeSection={activeSection}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />
      <main className="flex-1">
        <div id="hero">
          <h1 className="sr-only">About | Sakshi Kashyap</h1>
        </div>
        <About onScrollTo={handleScrollTo} theme={themeConfig} />
      </main>
      <Footer theme={themeConfig} />
    </div>
  );
}