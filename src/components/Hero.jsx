import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageSquare, Calendar, ShieldCheck, Heart, Sparkles, Stethoscope } from 'lucide-react';
import { PETTOWN_DATA, getWhatsAppUrl } from '../data/propertyData';
import { slowScrollTo } from '../utils/scrollUtils';
import { ElasticGallery } from './ui/elastic-gallery';
import LogoPetTown from './ui/LogoPetTown';
import BrokerAvatar from './ui/BrokerAvatar';
import { cn } from '@/lib/utils';

export default function Hero({ onRequestFormModal }) {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 10) {
        setHasInteracted(true);
      }
    };
    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const handleScrollDown = (e) => {
    e.preventDefault();
    slowScrollTo('#who-we-are', 1100, 75);
  };

  const isVisible = hasInteracted;

  const whatsappHeroUrl = getWhatsAppUrl(
    PETTOWN_DATA.brand.whatsappScheduleMessage ||
    "Olá Cuida Filho Pet Shop! Vim pelo site e gostaria de agendar um horário com todo amor para o meu pet no Mateus Hiper Casa Forte."
  );

  return (
    <section
      id="home"
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onClick={handleInteraction}
      onWheel={handleInteraction}
      className={cn(
        "relative min-h-[100dvh] flex flex-col overflow-hidden select-none",
        !isVisible ? "h-[100dvh] p-0 justify-center" : "justify-between pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8"
      )}
    >
      {/* Background Interativo com Elastic Gallery */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ElasticGallery isHeroBackground={true} />

        {/* Overlay com gradiente escuro e toque sutil de blur para contraste ideal */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700 pointer-events-none",
            isVisible
              ? "opacity-100 bg-gradient-to-r from-black/85 via-black/50 to-black/75 backdrop-blur-[1px]"
              : "opacity-100 bg-black/50 backdrop-blur-[0.5px]"
          )}
        />

        {/* Vignette inferior para transição suave */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Tela de Abertura Inicial (Impacto em 3 segundos) */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col items-center justify-center transition-all duration-700 ease-out px-4 py-[3vh]",
          !isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-6 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-[1.6vh] max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl w-full mx-auto my-auto">
          {/* Logo / Emblema Oficial com anel Laranja/Amarelo-Ouro */}
          <div className="flex justify-center w-full">
            <BrokerAvatar size="hero" badgeText="Feito com Amor 🧡" />
          </div>

          {/* Logo e Nome Oficial */}
          <div className="transform transition-transform duration-700 hover:scale-105 flex justify-center w-full">
            <LogoPetTown
              variant="light"
              size="md"
              className="drop-shadow-2xl"
            />
          </div>

          {/* Título Principal de Alto Impacto */}
          <div className="space-y-[0.8vh] w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-center">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white font-heading tracking-tight leading-snug drop-shadow-2xl text-center">
              Cuidado, Saúde e Amor no{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00]">
                Cuida Filho Pet Shop
              </span>
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium drop-shadow-md hidden sm:block text-center">
              {PETTOWN_DATA.hero.subtext}
            </p>
          </div>

          {/* CTAs de Conversão Imediata */}
          <div className="pt-[0.8vh] flex flex-row items-center justify-center gap-2 sm:gap-3.5 w-full max-w-xs sm:max-w-md mx-auto">
            <button
              onClick={onRequestFormModal}
              className="flex-1 sm:flex-initial bg-[#FF8C00] hover:bg-[#E67E00] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-3 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-xl shadow-[#FF8C00]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 animate-pulseOrange whitespace-nowrap"
            >
              <Calendar size={15} className="shrink-0" />
              <span>Agendar Banho / Consulta</span>
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[11px] sm:text-xs md:text-sm px-3 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 border border-emerald-400/40 whitespace-nowrap"
            >
              <MessageSquare size={15} className="shrink-0" />
              <span className="whitespace-nowrap">Fale com a gente ⤵️</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content Container (Aparece suavemente após rolagem/interação) */}
      <div
        className={cn(
          "relative z-10 max-w-5xl w-full mx-auto my-auto flex flex-col items-center text-center py-6 transition-all duration-700 ease-out",
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "hidden sm:flex opacity-0 translate-y-8 pointer-events-none select-none"
        )}
      >
        <div className="space-y-4 sm:space-y-6 max-w-3xl px-4 py-6 sm:p-0 rounded-3xl sm:rounded-none bg-black/40 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none border border-white/10 sm:border-none shadow-2xl sm:shadow-none">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 bg-[#4A2C11]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#FF8C00]/30 text-xs font-bold text-white shadow-lg">
            <Heart size={14} className="text-[#FF8C00] fill-[#FF8C00]" />
            <span>{PETTOWN_DATA.brand.slogan} • Mateus Hiper Casa Forte</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] font-heading drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Cuidado e Saúde com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00]">
              Amor e Dedicação
            </span>{' '}
            ao Seu Filho
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] px-2">
            {PETTOWN_DATA.hero.subtext}
          </p>

          {/* CTAs de Conversão */}
          <div className="pt-2 flex flex-row items-center justify-center gap-2 sm:gap-3.5 w-full max-w-sm sm:max-w-none mx-auto">
            <button
              onClick={onRequestFormModal}
              className="flex-1 sm:flex-initial bg-[#FF8C00] hover:bg-[#E67E00] text-white font-extrabold text-[11px] sm:text-base px-2.5 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition-all shadow-xl shadow-[#FF8C00]/30 active:scale-95 hover:scale-105 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2.5"
            >
              <Calendar size={16} className="shrink-0" />
              <span className="hidden sm:inline">Agendar Banho ou Consulta</span>
              <span className="sm:hidden whitespace-nowrap">Agendar Horário</span>
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[11px] sm:text-base px-2.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <MessageSquare size={16} className="shrink-0" />
              <span className="whitespace-nowrap">Fale com a gente ⤵️</span>
            </a>
          </div>

          {/* Badges de Autoridade */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-[#4A2C11]/85 px-3.5 py-1.5 rounded-full border border-[#FF8C00]/20 shadow-md">
              <Stethoscope size={14} className="text-[#FFB300]" /> Banho, Tosa & Consulta Veterinária
            </span>
            <span className="flex items-center gap-1.5 bg-[#4A2C11]/85 px-3.5 py-1.5 rounded-full border border-[#FF8C00]/20 shadow-md">
              <Sparkles size={14} className="text-[#FF8C00]" /> Produtos de Saúde, Beleza e Alimentação
            </span>
            <span className="flex items-center gap-1.5 bg-[#4A2C11]/85 px-3.5 py-1.5 rounded-full border border-[#FF8C00]/20 shadow-md">
              <ShieldCheck size={14} className="text-[#25D366]" /> Mateus Hiper Casa Forte
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className={cn(
          "relative z-10 max-w-7xl w-full mx-auto flex justify-center pb-2 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div
          onClick={handleScrollDown}
          className="w-10 h-10 rounded-full bg-[#4A2C11]/90 hover:bg-[#FF8C00] border border-[#FF8C00]/40 flex items-center justify-center text-white cursor-pointer transition-all hover:scale-110 shadow-lg animate-bounceSlow"
          title="Rolar para baixo"
        >
          <ArrowDown size={15} className="text-[#FF8C00] hover:text-white" />
        </div>
      </div>
    </section>
  );
}
