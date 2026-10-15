import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageSquare } from 'lucide-react';
import { PETTOWN_DATA, getWhatsAppUrl } from '../data/propertyData';
import { slowScrollTo } from '../utils/scrollUtils';
import LogoPetTown from './ui/LogoPetTown';

export default function Header({ onRequestFormModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileScrolled50, setIsMobileScrolled50] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
    };

    window.addEventListener('mousemove', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('wheel', handleInteraction, { once: true });

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setIsScrolled(currentScroll > 20);
      if (currentScroll > 20) {
        setHasInteracted(true);
      }

      const mobileTriggerPoint = window.innerHeight * 0.5;
      setIsMobileScrolled50(currentScroll >= mobileTriggerPoint);

      const sections = ['home', 'who-we-are', 'services', 'properties', 'depoimentos', 'contato'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId.replace('#', ''));
    slowScrollTo(targetId, 950, 75);
  };

  const showDesktopHeader = hasInteracted || isScrolled;
  const showMobileHeader = isMobileScrolled50;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${showMobileHeader
      ? 'translate-y-0 opacity-100 pointer-events-auto'
      : showDesktopHeader
        ? 'max-sm:-translate-y-full max-sm:opacity-0 max-sm:pointer-events-none sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto'
        : '-translate-y-full opacity-0 pointer-events-none'
      } ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md shadow-[#101C30]/5 border-b border-slate-200/80 py-0'
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/80'
      }`}>
      {/* Top Interactive Scroll Progress Bar com Gradiente Cuida Filho Laranja & Amarelo-Ouro */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#4A2C11] via-[#FF8C00] to-[#FFB300] transition-all duration-150 ease-out z-50 shadow-sm shadow-[#FF8C00]/50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Oficial Cuida Filho */}
        <LogoPetTown
          variant="dark"
          onClick={(e) => handleNavClick(e, '#home')}
        />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#6B3E2E]">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className={`transition-all py-1 relative ${activeSection === 'home'
              ? 'text-[#4A2C11] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF8C00] after:rounded-full'
              : 'hover:text-[#FF8C00]'
              }`}
          >
            Início
          </a>
          <a
            href="#who-we-are"
            onClick={(e) => handleNavClick(e, '#who-we-are')}
            className={`transition-all py-1 relative ${activeSection === 'who-we-are'
              ? 'text-[#4A2C11] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF8C00] after:rounded-full'
              : 'hover:text-[#FF8C00]'
              }`}
          >
            Sobre Nós
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className={`transition-all py-1 relative ${activeSection === 'services'
              ? 'text-[#4A2C11] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF8C00] after:rounded-full'
              : 'hover:text-[#FF8C00]'
              }`}
          >
            Como Funciona
          </a>
          <a
            href="#properties"
            onClick={(e) => handleNavClick(e, '#properties')}
            className={`transition-all py-1 relative ${activeSection === 'properties'
              ? 'text-[#4A2C11] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF8C00] after:rounded-full'
              : 'hover:text-[#FF8C00]'
              }`}
          >
            Serviços & Catálogo
          </a>
          <a
            href="#depoimentos"
            onClick={(e) => handleNavClick(e, '#depoimentos')}
            className={`transition-all py-1 relative ${activeSection === 'depoimentos'
              ? 'text-[#4A2C11] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FF8C00] after:rounded-full'
              : 'hover:text-[#FF8C00]'
              }`}
          >
            Depoimentos
          </a>
        </nav>

        {/* Right CTA Button Laranja */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onRequestFormModal}
            className="bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-md shadow-[#FF8C00]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center gap-2 group"
          >
            <Calendar size={16} className="group-hover:rotate-12 transition-transform text-white" />
            <span>Agendar Horário</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#4A2C11] hover:text-[#FF8C00] cursor-pointer transition-colors"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Slow Scroll */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-b border-amber-900/10 px-6 py-4 space-y-3 animate-fadeIn shadow-xl">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="block text-sm font-bold text-[#4A2C11] py-2 border-b border-amber-100"
          >
            Início
          </a>
          <a
            href="#who-we-are"
            onClick={(e) => handleNavClick(e, '#who-we-are')}
            className="block text-sm font-semibold text-[#6B3E2E] hover:text-[#FF8C00] py-2 border-b border-amber-100"
          >
            Sobre Nós
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="block text-sm font-semibold text-[#6B3E2E] hover:text-[#FF8C00] py-2 border-b border-amber-100"
          >
            Como Funciona
          </a>
          <a
            href="#properties"
            onClick={(e) => handleNavClick(e, '#properties')}
            className="block text-sm font-semibold text-[#6B3E2E] hover:text-[#FF8C00] py-2 border-b border-amber-100"
          >
            Serviços & Catálogo
          </a>
          <a
            href="#depoimentos"
            onClick={(e) => handleNavClick(e, '#depoimentos')}
            className="block text-sm font-semibold text-[#6B3E2E] hover:text-[#FF8C00] py-2 border-b border-amber-100"
          >
            Depoimentos
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestFormModal();
            }}
            className="w-full mt-2 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Calendar size={15} />
            Agendar Banho / Consulta
          </button>
        </div>
      )}
    </header>
  );
}
