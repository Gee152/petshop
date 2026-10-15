import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAreStickyScroll from './components/WhoWeAreStickyScroll';
import Solutions from './components/Solutions';
import TrustedLocations from './components/TrustedLocations';
import SocialProof from './components/SocialProof';
import FAQSection from './components/FAQSection';
import QualificationForm from './components/QualificationForm';
import LogoPetTown from './components/ui/LogoPetTown';
import SocialDock from './components/ui/SocialDock';
import BioLinks from './components/BioLinks';
import { PETTOWN_DATA, getWhatsAppUrl } from './data/propertyData';
import { ShieldCheck, ArrowUp, Sparkles, Heart, MessageSquare, Phone, Clock, MapPin } from 'lucide-react';
import { slowScrollTo } from './utils/scrollUtils';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StructuredDataSEO from './components/StructuredDataSEO';
import { initScrollReveal } from './utils/scrollReveal';

// Função síncrona para detectar rota antes da primeira renderização
const getActiveRoute = () => {
  if (typeof window === 'undefined') return 'home';
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = (urlParams.get('page') || urlParams.get('p') || urlParams.get('view') || '').toLowerCase();
  const hash = (window.location.hash || '').toLowerCase();
  const path = (window.location.pathname || '').toLowerCase();

  if (
    pageParam === 'links' ||
    pageParam === 'bio' ||
    pageParam === 'linktree' ||
    hash === '#/links' ||
    hash === '#links' ||
    hash === '#/bio' ||
    hash === '#bio' ||
    path.endsWith('/links') ||
    path.endsWith('/bio')
  ) {
    return 'links';
  }
  return 'home';
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastCapturedLead, setLastCapturedLead] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(getActiveRoute);

  // Escuta mudanças de navegação sem reload
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getActiveRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Inicializa o sistema de Scroll Reveal para elementos visíveis e ao rolar
  useEffect(() => {
    initScrollReveal();
  }, [currentRoute]);

  // Fecha modal com Escape e bloqueia scroll do fundo
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleLeadCaptured = (leadData) => {
    setLastCapturedLead(leadData);

    if (window.fbq) {
      window.fbq('track', 'Lead', {
        brand: PETTOWN_DATA.brand.name,
        pet: leadData.petInfo,
        service: leadData.serviceInterest
      });
    }
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        brand: PETTOWN_DATA.brand.name,
        service: leadData.serviceInterest
      });
    }
  };

  // Se a rota secreta for ativada pelo link da bio, renderiza o BioLinks
  if (currentRoute === 'links') {
    return <BioLinks />;
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#4A2C11] flex flex-col font-sans selection:bg-[#FF8C00] selection:text-white relative">
      {/* Dados Estruturados Schema.org JSON-LD para Google Rich Results */}
      <StructuredDataSEO />

      {/* 1. Header Navigation Bar */}
      <Header onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 2. Hero Section (Abertura 3s + ElasticGallery) */}
      <Hero onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 3. Sticky Scroll com Histórias e Pilares de Confiança */}
      <WhoWeAreStickyScroll onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 4. O Processo: Como Funciona (3 Passos + 3 Cards) */}
      <Solutions onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 5. Catálogo de 6 Serviços em Destaque com WhatsApp */}
      <TrustedLocations onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 6. Depoimentos de Tutores e Prova Social */}
      <SocialProof onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 7. Perguntas Frequentes (FAQ) - Rich Snippets e GEO Search */}
      <FAQSection onRequestFormModal={() => setIsModalOpen(true)} />

      {/* 8. Formulário de Qualificação & Agendamento com Amor */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] relative overflow-hidden border-t border-amber-900/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3 reveal">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#FF8C00] font-heading flex items-center justify-center gap-1.5">
              <Sparkles size={14} /> Atendimento Humanizado & Ágil
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C11] font-heading tracking-tight">
              Agende o Cuidado do Seu Pet no Cuida Filho
            </h2>
            <p className="text-[#6B3E2E] text-sm leading-relaxed">
              Preencha os dados abaixo para receber atendimento prioritário no Mateus Hiper Casa Forte, tirar dúvidas com nossa equipe e agendar o melhor dia e horário para seu cão ou gato.
            </p>
          </div>
          <div className="reveal reveal-delay-200">
            <QualificationForm onLeadCaptured={handleLeadCaptured} />
          </div>
        </div>
      </section>

      {/* 8. Rodapé Institucional Fixo (#4A2C11) */}
      <footer className="bg-[#4A2C11] text-amber-100/90 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#FF8C00]/20 text-xs relative overflow-hidden reveal">
        {/* Glow de fundo sutil em tom Laranja Cuida Filho */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#FF8C00]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          {/* Linha Superior: Logo, Canais de Atendimento e Detalhes */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 pb-10 border-b border-white/10">
            {/* Bloco Centralizado da Marca com Logo e SocialDock */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
              {/* Coluna 1: Logo Cuida Filho + Redes Sociais */}
              <div className="flex flex-col items-center text-center space-y-3">
                <LogoPetTown
                  variant="light"
                  onClick={() => slowScrollTo('top', 1000)}
                />

                {/* Redes Sociais */}
                <div className="pt-1 flex flex-col items-center text-center gap-1.5 w-full">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#FFB300] text-center block">
                    Canais de Atendimento
                  </span>
                  <SocialDock />
                </div>
              </div>

              {/* Coluna 2: Detalhes, Localização e Serviços */}
              <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-1 sm:pl-6 space-y-2.5 text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[#FFB300] font-bold bg-[#361E0A] px-3 py-1 rounded-full border border-[#FF8C00]/30 text-xs shadow-sm">
                    <Heart size={13} className="text-[#FF8C00] fill-[#FF8C00]" />
                    {PETTOWN_DATA.brand.slogan}
                  </span>
                  <span className="text-white text-xs font-semibold font-heading tracking-wide">
                    {PETTOWN_DATA.brand.openingHours}
                  </span>
                </div>
                <a
                  href={PETTOWN_DATA.brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-amber-100/90 hover:text-[#FFB300] transition-colors block leading-relaxed"
                >
                  📍 {PETTOWN_DATA.brand.coverageAreas} • Atendimento Presencial no Mateus Hiper
                </a>
                <span className="text-[11px] text-[#FFB300] font-semibold block">
                  {PETTOWN_DATA.brand.services}
                </span>
                <a
                  href={getWhatsAppUrl("Olá equipe Cuida Filho! Vim pelo rodapé do site e gostaria de agendar um atendimento para o meu pet no Mateus Hiper Casa Forte!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-full transition-all mt-1 cursor-pointer shadow-md shadow-emerald-950/40 active:scale-95 hover:scale-105"
                >
                  <MessageSquare size={14} />
                  <span>{PETTOWN_DATA.brand.ctaSchedule}</span>
                </a>
              </div>
            </div>

            {/* Frase de Impacto Oficial */}
            <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right">
              <p className="text-sm font-bold text-white max-w-xs">
                "{PETTOWN_DATA.brand.slogan}"
              </p>
              <p className="text-[11px] text-amber-100/70 max-w-xs">
                {PETTOWN_DATA.brand.bio}
              </p>
            </div>
          </div>

          {/* Linha Inferior */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-amber-100/60 text-[11px] pt-2">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {PETTOWN_DATA.brand.fullName}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-amber-100/60">
              <a
                href={PETTOWN_DATA.brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFB300] transition-colors"
              >
                📍 Mateus Hiper Casa Forte
              </a>
              <span>•</span>
              <button
                onClick={() => slowScrollTo('top', 1000)}
                className="hover:text-[#FFB300] transition-colors cursor-pointer"
              >
                Voltar ao topo ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Slow Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => slowScrollTo('top', 1000)}
          className="fixed bottom-6 right-6 z-30 bg-[#FF8C00] hover:bg-[#E67E00] text-white p-3 rounded-full shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-fadeIn flex items-center justify-center border border-white/20 group"
          aria-label="Voltar ao Topo Suavemente"
          title="Subir suavemente ao topo"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal de Agendamento & Atendimento Exclusivo */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#4A2C11]/85 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-xl my-auto">
            <QualificationForm
              isModal={true}
              onCloseModal={() => setIsModalOpen(false)}
              onLeadCaptured={handleLeadCaptured}
            />
          </div>
        </div>
      )}

    </div>
  );
}
