import React from 'react';
import { CalendarCheck, HeartHandshake, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { PETTOWN_DATA, getWhatsAppUrl } from '../data/propertyData';
import { useSwipeScroll } from '../utils/useSwipeScroll';

export default function Solutions({ onRequestFormModal }) {
  const { solutions } = PETTOWN_DATA;
  const { ref: stepsRef, scrollBy: scrollSteps } = useSwipeScroll({ sensitivity: 1.3 });
  const { ref: cardsRef, scrollBy: scrollCards } = useSwipeScroll({ sensitivity: 1.3 });

  const consultancyWhatsappUrl = getWhatsAppUrl(
    PETTOWN_DATA.brand.whatsappConsultancyMessage ||
    "Olá equipe Cuida Filho! Gostaria de informações sobre consultas veterinárias e banho & tosa no Mateus Hiper Casa Forte."
  );

  return (
    <section id="services" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-amber-900/10 pb-8 reveal">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#FF8C00] font-heading block">
              {solutions.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C11] font-heading tracking-tight leading-tight">
              {solutions.title}
            </h2>
          </div>

          {/* Right Trust Badge */}
          <div className="flex items-center gap-3 bg-white p-3.5 px-5 rounded-2xl border border-amber-900/10 shadow-sm max-w-sm reveal-right">
            <div className="w-10 h-10 rounded-full bg-[#FF8C00]/10 text-[#FF8C00] flex items-center justify-center shrink-0">
              <ShieldCheck size={22} className="text-[#FF8C00]" />
            </div>
            <p className="text-xs font-semibold text-[#4A2C11] leading-snug">
              {solutions.trustBadge}
            </p>
          </div>
        </div>

        {/* 3 Passos do Processo: Slider lateral no mobile com snap, grid 3 colunas no desktop */}
        <div className="space-y-3">
          {/* Indicador de Deslize com botões de navegação no Mobile */}
          <div className="md:hidden flex items-center justify-between px-1 text-xs text-[#6B3E2E]">
            <span className="flex items-center gap-1.5 text-[#FF8C00] font-bold">
              <span>👉 Deslize para o lado para ver o passo a passo</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollSteps(-1)}
                className="w-7 h-7 rounded-full bg-amber-100 hover:bg-[#FF8C00] hover:text-white text-[#4A2C11] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="Passo anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollSteps(1)}
                className="w-7 h-7 rounded-full bg-amber-100 hover:bg-[#FF8C00] hover:text-white text-[#4A2C11] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="Próximo passo"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={stepsRef}
            className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar touch-pan-x swipe-carousel select-none items-stretch justify-start md:justify-center"
          >
            
            {/* Passo 1: Agendamento */}
            <div className="w-[85vw] max-w-[340px] md:max-w-none shrink-0 snap-center md:w-full md:shrink md:snap-align-none h-full min-h-[300px] bg-white hover:bg-[#FFFDF7] border border-amber-900/10 hover:border-[#FF8C00]/50 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 interactive-card reveal reveal-delay-100 flex flex-col justify-between">
              <div className="space-y-4 flex-1">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFFDF7] border border-amber-200/60 flex items-center justify-center text-[#4A2C11] shadow-sm">
                    <CalendarCheck size={26} className="text-[#FF8C00]" />
                  </div>
                  <span className="text-3xl font-black text-[#FF8C00]/30 font-heading">01</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#4A2C11] font-heading">
                  {solutions.steps[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B3E2E] leading-relaxed">
                  {solutions.steps[0].description}
                </p>
              </div>
              <div className="pt-4 mt-auto border-t border-amber-900/10 flex items-center gap-2 text-xs font-bold text-[#4A2C11]">
                <CheckCircle2 size={14} className="text-[#FF8C00] shrink-0" />
                <span>Atendimento direto pelo WhatsApp</span>
              </div>
            </div>

            {/* Passo 2: Acolhimento */}
            <div className="w-[85vw] max-w-[340px] md:max-w-none shrink-0 snap-center md:w-full md:shrink md:snap-align-none h-full min-h-[300px] bg-white hover:bg-[#FFFDF7] border border-amber-900/10 hover:border-[#FF8C00]/50 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 interactive-card reveal reveal-delay-200 flex flex-col justify-between">
              <div className="space-y-4 flex-1">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFFDF7] border border-amber-200/60 flex items-center justify-center text-[#4A2C11] shadow-sm">
                    <HeartHandshake size={26} className="text-[#FF8C00]" />
                  </div>
                  <span className="text-3xl font-black text-[#FF8C00]/30 font-heading">02</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#4A2C11] font-heading">
                  {solutions.steps[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B3E2E] leading-relaxed">
                  {solutions.steps[1].description}
                </p>
              </div>
              <div className="pt-4 mt-auto border-t border-amber-900/10 flex items-center gap-2 text-xs font-bold text-[#4A2C11]">
                <CheckCircle2 size={14} className="text-[#FF8C00] shrink-0" />
                <span>Avaliação prévia e manejo livre de estresse</span>
              </div>
            </div>

            {/* Passo 3: Pet Feliz */}
            <div className="w-[85vw] max-w-[340px] md:max-w-none shrink-0 snap-center md:w-full md:shrink md:snap-align-none h-full min-h-[300px] bg-[#4A2C11] text-white border border-[#361E0A] rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 interactive-card reveal reveal-delay-300 flex flex-col justify-between">
              <div className="space-y-4 flex-1">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#361E0A] border border-[#FF8C00]/40 flex items-center justify-center text-[#FFB300] shadow-inner">
                    <Sparkles size={26} className="text-[#FFB300]" />
                  </div>
                  <span className="text-3xl font-black text-[#FFB300]/40 font-heading">03</span>
                </div>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  {solutions.steps[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                  {solutions.steps[2].description}
                </p>
              </div>
              <div className="pt-4 mt-auto border-t border-white/10 flex items-center gap-2 text-xs font-bold text-[#FFB300]">
                <CheckCircle2 size={14} className="text-[#FF8C00] shrink-0" />
                <span>Mais de 2.800 pets cuidados como filhos</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Destaques Visuais: Slider lateral no mobile com snap, grid 3 colunas no desktop */}
        <div className="space-y-3 pt-4">
          {/* Indicador de Deslize com botões de navegação no Mobile */}
          <div className="md:hidden flex items-center justify-between px-1 text-xs text-[#6B3E2E]">
            <span className="flex items-center gap-1.5 text-[#FF8C00] font-bold">
              <span>👉 Deslize para ver os destaques</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollCards(-1)}
                className="w-7 h-7 rounded-full bg-amber-100 hover:bg-[#FF8C00] hover:text-white text-[#4A2C11] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="Destaque anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollCards(1)}
                className="w-7 h-7 rounded-full bg-amber-100 hover:bg-[#FF8C00] hover:text-white text-[#4A2C11] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="Próximo destaque"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={cardsRef}
            className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-5 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar touch-pan-x swipe-carousel select-none justify-start md:justify-center"
          >
            {/* Card 1: Foto Real de Banho & Tosa */}
            <div className="w-[85vw] max-w-[340px] md:max-w-none shrink-0 snap-center md:w-full md:shrink md:snap-align-none relative rounded-3xl overflow-hidden shadow-xl h-[440px] sm:h-[460px] lg:h-[480px] group border border-amber-900/10 interactive-card reveal reveal-delay-100 flex flex-col justify-between">
              <img
                src={solutions.cards.card1.image}
                alt={solutions.cards.card1.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C11]/95 via-[#4A2C11]/30 to-transparent"></div>
              
              {/* Top Badge */}
              <div className="relative z-10 p-5 sm:p-6">
                <span className="bg-[#FF8C00] text-white font-extrabold text-xs px-4 py-1.5 rounded-full shadow-md">
                  {solutions.cards.card1.badge}
                </span>
              </div>

              {/* Bottom Text */}
              <div className="relative z-10 p-5 sm:p-7 text-white space-y-1">
                <h4 className="text-xl sm:text-2xl font-black font-heading leading-tight drop-shadow-md">
                  Banho & Tosa com Amor
                </h4>
                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed drop-shadow-sm">
                  Produtos dermatológicos e água na temperatura ideal com toalhas individuais esterilizadas.
                </p>
              </div>
            </div>

            {/* Card 2: Box Informativo de Especialidade e Produtos */}
            <div className="w-[85vw] max-w-[340px] md:max-w-none shrink-0 snap-center md:w-full md:shrink md:snap-align-none bg-white border border-amber-900/10 rounded-3xl p-6 sm:p-8 h-[440px] sm:h-[460px] lg:h-[480px] flex flex-col justify-between shadow-sm interactive-card reveal reveal-delay-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4A2C11] text-[#FFB300] flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-[#4A2C11] font-heading leading-tight">
                  {solutions.cards.card2.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B3E2E] leading-relaxed">
                  {solutions.cards.card2.text}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={onRequestFormModal}
                  className="w-full bg-[#FF8C00] hover:bg-[#E67E00] text-white font-extrabold text-xs py-3.5 px-5 rounded-full transition-all cursor-pointer shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>{solutions.cards.card2.buttonText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Card 3: Foto de Atendimento Clínico */}
            <div className="w-[85vw] max-w-[340px] md:max-w-none shrink-0 snap-center md:w-full md:shrink md:snap-align-none bg-white border border-amber-900/10 rounded-3xl p-5 sm:p-6 h-[440px] sm:h-[460px] lg:h-[480px] flex flex-col justify-between shadow-xl interactive-card reveal reveal-delay-300">
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-56 group shrink-0">
                <img
                  src={solutions.cards.card3.image}
                  alt={solutions.cards.card3.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#4A2C11]/15"></div>
              </div>

              <div className="space-y-1 py-1">
                <h3 className="text-base sm:text-lg font-bold text-[#4A2C11] font-heading leading-snug">
                  {solutions.cards.card3.title}
                </h3>
                <p className="text-xs text-[#6B3E2E] font-medium">
                  {solutions.cards.card3.price}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={consultancyWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#4A2C11] hover:bg-[#361E0A] text-white font-bold py-3.5 px-4 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group shadow-sm"
                >
                  <span>{solutions.cards.card3.buttonText}</span>
                  <ArrowRight size={14} className="text-[#FF8C00] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
