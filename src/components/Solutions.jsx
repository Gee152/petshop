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
    "Olá equipe Pet Town! Gostaria de informações sobre consultas especializadas com a Dra. Aline Belo (Acupuntura e Fisioterapia)."
  );

  return (
    <section id="services" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/60 pb-8 reveal">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#F97316] font-heading block">
              {solutions.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C30] font-heading tracking-tight leading-tight">
              {solutions.title}
            </h2>
          </div>

          {/* Right Trust Badge */}
          <div className="flex items-center gap-3 bg-[#F8FAFC] p-3.5 px-5 rounded-2xl border border-slate-200/80 shadow-sm max-w-sm reveal-right">
            <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 text-[#0D9488] flex items-center justify-center shrink-0">
              <ShieldCheck size={22} className="text-[#0D9488]" />
            </div>
            <p className="text-xs font-semibold text-slate-700 leading-snug">
              {solutions.trustBadge}
            </p>
          </div>
        </div>

        {/* 3 Passos do Processo: Slider lateral no mobile com snap, grid 3 colunas no desktop */}
        <div className="space-y-3">
          {/* Indicador de Deslize com botões de navegação no Mobile */}
          <div className="md:hidden flex items-center justify-between px-1 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-[#F97316] font-bold">
              <span>👉 Deslize para o lado para ver o passo a passo</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollSteps(-1)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#F97316] hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="Passo anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollSteps(1)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#F97316] hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="Próximo passo"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={stepsRef}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar touch-pan-x swipe-carousel select-none"
          >
            
            {/* Passo 1: Agendamento */}
            <div className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none bg-[#F8FAFC] hover:bg-white border border-slate-200/80 hover:border-[#F97316]/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 interactive-card reveal reveal-delay-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#101C30] shadow-sm">
                    <CalendarCheck size={26} className="text-[#F97316]" />
                  </div>
                  <span className="text-3xl font-black text-[#F97316]/30 font-heading">01</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#101C30] font-heading">
                  {solutions.steps[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {solutions.steps[0].description}
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#101C30]">
                <CheckCircle2 size={14} className="text-[#14B8A6]" />
                <span>Confirmação rápida por WhatsApp</span>
              </div>
            </div>

            {/* Passo 2: Acolhimento */}
            <div className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none bg-[#F8FAFC] hover:bg-white border border-slate-200/80 hover:border-[#F97316]/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 interactive-card reveal reveal-delay-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#101C30] shadow-sm">
                    <HeartHandshake size={26} className="text-[#14B8A6]" />
                  </div>
                  <span className="text-3xl font-black text-[#F97316]/30 font-heading">02</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#101C30] font-heading">
                  {solutions.steps[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {solutions.steps[1].description}
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#101C30]">
                <CheckCircle2 size={14} className="text-[#14B8A6]" />
                <span>Avaliação prévia e manejo livre de estresse</span>
              </div>
            </div>

            {/* Passo 3: Pet Feliz */}
            <div className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none bg-[#101C30] text-white border border-[#0A1220] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl transition-all duration-300 interactive-card reveal reveal-delay-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1220] border border-[#F97316]/40 flex items-center justify-center text-[#F97316] shadow-inner">
                    <Sparkles size={26} className="text-[#F97316]" />
                  </div>
                  <span className="text-3xl font-black text-[#F97316]/40 font-heading">03</span>
                </div>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  {solutions.steps[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {solutions.steps[2].description}
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#F97316]">
                <CheckCircle2 size={14} className="text-[#14B8A6]" />
                <span>Mais de 3.500 pets atendidos com carinho</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Destaques Visuais: Slider lateral no mobile com snap, grid 12 colunas no desktop */}
        <div className="space-y-3 pt-4">
          {/* Indicador de Deslize com botões de navegação no Mobile */}
          <div className="lg:hidden flex items-center justify-between px-1 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-[#F97316] font-bold">
              <span>👉 Deslize para ver os destaques</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollCards(-1)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#F97316] hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="Destaque anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollCards(1)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#F97316] hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                aria-label="Próximo destaque"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={cardsRef}
            className="flex lg:grid lg:grid-cols-12 gap-5 lg:gap-8 items-stretch overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-5 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar touch-pan-x swipe-carousel select-none"
          >
            {/* Card 1: Foto Real de Banho & Tosa */}
            <div className="w-[85vw] max-w-[340px] shrink-0 snap-center lg:w-auto lg:shrink lg:snap-align-none lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] group border border-slate-200/80 interactive-card reveal reveal-delay-100">
              <img
                src={solutions.cards.card1.image}
                alt={solutions.cards.card1.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C30]/90 via-transparent to-transparent"></div>
              
              {/* Top Badge */}
              <div className="absolute top-5 left-5">
                <span className="bg-[#F97316] text-white font-extrabold text-xs px-4 py-1.5 rounded-full shadow-md">
                  {solutions.cards.card1.badge}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h4 className="text-lg font-bold">Banho & Tosa com Amor</h4>
                <p className="text-xs text-slate-200">Produtos dermatológicos e água na temperatura ideal.</p>
              </div>
            </div>

            {/* Card 2: Box Informativo de Especialidade e Alívio da Dor */}
            <div className="w-[85vw] max-w-[340px] shrink-0 snap-center lg:w-auto lg:shrink lg:snap-align-none lg:col-span-4 bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm interactive-card reveal reveal-delay-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#101C30] text-[#14B8A6] flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-[#101C30] font-heading leading-tight">
                  {solutions.cards.card2.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {solutions.cards.card2.text}
                </p>
              </div>

              <div>
                <button
                  onClick={onRequestFormModal}
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-xs py-3.5 px-5 rounded-full transition-all cursor-pointer shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>{solutions.cards.card2.buttonText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Card 3: Foto de Atendimento Clínico */}
            <div className="w-[85vw] max-w-[340px] shrink-0 snap-center lg:w-auto lg:shrink lg:snap-align-none lg:col-span-3 bg-white border border-slate-200/80 rounded-3xl p-5 flex flex-col justify-between space-y-4 shadow-xl interactive-card reveal reveal-delay-300">
              <div className="relative rounded-2xl overflow-hidden h-52 group">
                <img
                  src={solutions.cards.card3.image}
                  alt={solutions.cards.card3.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#101C30]/20"></div>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#101C30] font-heading">
                  {solutions.cards.card3.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {solutions.cards.card3.price}
                </p>
              </div>

              <a
                href={consultancyWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#101C30] hover:bg-[#0A1220] text-white font-bold py-3 px-4 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
              >
                <span>{solutions.cards.card3.buttonText}</span>
                <ArrowRight size={14} className="text-[#F97316] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
