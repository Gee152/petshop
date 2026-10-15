import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, PETTOWN_DATA } from '../data/propertyData';
import { useSwipeScroll } from '../utils/useSwipeScroll';

export default function SocialProof({ onRequestFormModal }) {
  const { ref: testimonialsRef, scrollBy: scrollTestimonials } = useSwipeScroll({ sensitivity: 1.3 });

  return (
    <section id="depoimentos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 reveal">
          <span className="text-[#F97316] font-extrabold text-xs uppercase tracking-widest block font-heading">
            DEPOIMENTOS DE QUEM CONFIA O SEU MELHOR AMIGO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C30] font-heading">
            Histórias de Amor e Transformação na <span className="text-[#F97316]">Pet Town</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Mais de 3.500 tutores tranquilos e pets saudáveis, cheirosos e cheios de vitalidade.
          </p>
        </div>

        {/* Testimonials Slider no mobile com snap e drag fluido, Grid 3 colunas no desktop */}
        <div className="space-y-3">
          {/* Indicador de Deslize sutil com navegação visível apenas no Mobile */}
          <div className="md:hidden flex items-center justify-between px-1 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-[#F97316] font-bold">
              <span>👉 Deslize para ver os depoimentos</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold bg-[#F97316]/10 text-[#F97316] px-2 py-0.5 rounded-full uppercase tracking-wider mr-1">
                Depoimentos
              </span>
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollTestimonials(-1)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#F97316] hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm border border-slate-200"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollTestimonials(1)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#F97316] hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm border border-slate-200"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={testimonialsRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-5 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar touch-pan-x swipe-carousel select-none"
          >
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className={`w-[85vw] max-w-[340px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none bg-[#F8FAFC] hover:bg-white border border-slate-200/80 hover:border-[#F97316]/50 p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 interactive-card reveal ${
                  idx === 0 ? 'reveal-delay-100' : idx === 1 ? 'reveal-delay-200' : 'reveal-delay-300'
                }`}
              >
                <div className="space-y-3">
                  {/* Estrelas Destaque */}
                  <div className="flex items-center gap-1 text-[#F97316]">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                {/* Autor do Depoimento */}
                <div className="flex items-center gap-3 border-t border-slate-200/70 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#F97316]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#101C30] font-heading">{t.name}</h4>
                    <span className="text-[10px] text-[#F97316] font-bold block">{t.tag}</span>
                    <span className="text-[10px] text-slate-400 block">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas de Autoridade */}
        <div className="bg-[#101C30] text-white border border-[#0A1220] rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xl reveal-scale">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#F97316] font-heading block">+3.500</span>
            <span className="text-xs text-slate-300 font-medium">Pets Atendidos com Amor</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#14B8A6] font-heading block">100%</span>
            <span className="text-xs text-slate-300 font-medium">Atendimento Humanizado</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#F97316] font-heading block">Nota 5.0</span>
            <span className="text-xs text-slate-300 font-medium">Avaliações no Google</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading block">CRMV</span>
            <span className="text-xs text-slate-300 font-medium">Responsabilidade Técnica</span>
          </div>
        </div>

        {/* Selos de Confiança e Certificações - Oculto no mobile conforme solicitado */}
        <div className="hidden md:block border-t border-slate-200 pt-8 text-center space-y-4 reveal reveal-delay-200">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
            Padrão Ouro em Higiene e Medicina Veterinária
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-bold text-slate-700">
            <span className="px-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-[#101C30] flex items-center gap-2">
              <Sparkles size={14} className="text-[#F97316]" /> Dra. Aline Belo (UNINASSAU • Pós Acupuntura)
            </span>
            <span className="px-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-[#101C30] flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#14B8A6]" /> Toalhas Individuais Seladas & Esterilizadas
            </span>
            <span className="px-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-[#101C30] flex items-center gap-2">
              <Heart size={14} className="text-[#F97316]" /> Cosméticos Hipoalergênicos de Alta Performance
            </span>
            <span className="px-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-[#101C30] flex items-center gap-2">
              <Award size={14} className="text-[#14B8A6]" /> Vacinas Éticas com Selo de Procedência
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
