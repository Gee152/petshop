import React from 'react';
import { MapPin, ExternalLink, Sparkles, Check, ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { PETTOWN_DATA, getWhatsAppUrl } from '../data/propertyData';
import { useSwipeScroll } from '../utils/useSwipeScroll';

// Ícone oficial vetorial do WhatsApp para alta fidelidade visual
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.47 13.46 14.3 13.71C14.14 13.96 13.67 14.51 13.53 14.67C13.38 14.84 13.24 14.86 12.99 14.73C12.74 14.61 11.95 14.35 11 13.51C10.26 12.85 9.77 12.04 9.62 11.79C9.48 11.54 9.61 11.4 9.73 11.28C9.84 11.17 9.98 10.99 10.1 10.84C10.23 10.7 10.27 10.59 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.15C9.37 7.66 9.17 7.73 9.01 7.72C8.87 7.71 8.7 7.71 8.54 7.71C8.38 7.71 8.11 7.77 7.89 8.01C7.66 8.26 7.02 8.86 7.02 10.07C7.02 11.29 7.91 12.46 8.03 12.63C8.16 12.79 9.77 15.28 12.24 16.35C12.83 16.6 13.29 16.76 13.65 16.87C14.24 17.06 14.78 17.03 15.21 16.97C15.69 16.9 16.69 16.36 16.9 15.78C17.11 15.2 17.11 14.7 17.05 14.6C16.98 14.5 16.82 14.43 16.56 14.39Z" />
    </svg>
  );
}

export default function TrustedLocations({ onRequestFormModal }) {
  const { trustedLocations } = PETTOWN_DATA;
  const { ref: servicesRef, scrollBy: scrollServices } = useSwipeScroll({ sensitivity: 1.3 });

  const headerWhatsappUrl = getWhatsAppUrl(trustedLocations.headerWhatsappMessage);
  const bannerWhatsappUrl = getWhatsAppUrl(trustedLocations.bannerWhatsappMessage);

  return (
    <section id="properties" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-amber-900/10 pb-8 reveal">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#FF8C00]/10 text-[#FF8C00] text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full font-heading">
              <Sparkles size={13} className="shrink-0" />
              <span>{trustedLocations.category}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C11] font-heading tracking-tight leading-tight">
              {trustedLocations.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B3E2E] leading-relaxed">
              Banho, tosa humanizada e consulta veterinária com carinho de família, além de linha completa de produtos de saúde, beleza e alimentação no Mateus Hiper Casa Forte.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 reveal-right">
            <a
              href={headerWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
              <span>{trustedLocations.viewAllText}</span>
              <ExternalLink size={14} className="shrink-0 opacity-80" />
            </a>
          </div>
        </div>

        {/* 6-Item Services Grid: Slider horizontal com snap no mobile, grid 2/3 colunas no desktop */}
        <div className="space-y-3">
          {/* Indicador de Deslize sutil com navegação visível apenas no Mobile */}
          <div className="sm:hidden flex items-center justify-between px-1 text-xs text-[#6B3E2E]">
            <span className="flex items-center gap-1.5 text-[#FF8C00] font-bold">
              <span>👉 Deslize para ver os serviços</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold bg-[#FF8C00]/10 text-[#FF8C00] px-2 py-0.5 rounded-full uppercase tracking-wider mr-1">
                6 Serviços
              </span>
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollServices(-1)}
                className="w-7 h-7 rounded-full bg-white hover:bg-[#FF8C00] hover:text-white text-[#4A2C11] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm border border-amber-200"
                aria-label="Serviço anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                data-nav-arrow="true"
                onClick={() => scrollServices(1)}
                className="w-7 h-7 rounded-full bg-white hover:bg-[#FF8C00] hover:text-white text-[#4A2C11] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm border border-amber-200"
                aria-label="Próximo serviço"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={servicesRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory pb-5 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar touch-pan-x swipe-carousel select-none items-stretch justify-start sm:justify-center"
          >
            {trustedLocations.properties.map((item, index) => {
              const itemWhatsappUrl = getWhatsAppUrl(item.whatsappMessage);
              const delayClass = index % 3 === 0 ? 'reveal-delay-100' : index % 3 === 1 ? 'reveal-delay-200' : 'reveal-delay-300';

              return (
                <div
                  key={item.id}
                  className={`w-[85vw] max-w-[340px] sm:max-w-none shrink-0 snap-center sm:w-full sm:shrink sm:snap-align-none h-full bg-white border border-amber-900/10 hover:border-[#FF8C00]/60 rounded-3xl p-4 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group interactive-card reveal ${delayClass}`}
                >
                {/* Image Container with Badges */}
                <a
                  href={itemWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden h-52 bg-amber-50 cursor-pointer"
                  title={`Quero mais informações sobre ${item.name}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Top-Left Badge: SubType / Categoria */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#4A2C11]/90 backdrop-blur-sm text-[#FFB300] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-[#FF8C00]/30">
                      {item.subType}
                    </span>
                  </div>

                  {/* Top-Right Badge: Feito com Amor */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#FF8C00] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Com Amor
                    </span>
                  </div>

                  {/* Bottom Pill over image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                      <Heart size={11} className="text-[#FF8C00] fill-[#FF8C00]" />
                      <span className="truncate">{item.neighborhood}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-white/95 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full">
                      {item.typology}
                    </span>
                  </div>
                </a>

                {/* Card Body Details */}
                <div className="pt-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#4A2C11] font-heading group-hover:text-[#FF8C00] transition-colors leading-snug">
                      <a
                        href={itemWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        title={`Quero agendar ${item.name}`}
                      >
                        {item.name}
                      </a>
                    </h3>

                    <p className="text-xs text-[#6B3E2E] font-medium mt-1 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Amenities Checklist */}
                    {item.amenities && item.amenities.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {item.amenities.slice(0, 2).map((amenity, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-xs text-[#6B3E2E] font-medium">
                            <Check size={12} className="text-[#FF8C00] shrink-0 stroke-[2.5]" />
                            <span className="truncate">{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Conditions & Direct WhatsApp CTA */}
                  <div className="pt-3 border-t border-amber-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-amber-900/60 block leading-none font-medium">Condição / Valor</span>
                        <span className="text-sm font-black text-[#4A2C11] font-heading">
                          {item.priceFormatted}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#FF8C00] font-bold uppercase bg-[#FF8C00]/10 px-2.5 py-1 rounded-full border border-[#FF8C00]/30">
                        Atendimento Ativo
                      </span>
                    </div>

                    {/* WhatsApp Action Button with Tailored Message */}
                    <a
                      href={itemWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md active:scale-[0.98] group/btn cursor-pointer"
                      title={`Quero agendar ${item.name}`}
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
                      <span>Fale com a gente ⤵️</span>
                      <ExternalLink size={13} className="shrink-0 opacity-80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Secondary Simulation Option */}
                    {onRequestFormModal && (
                      <button
                        type="button"
                        onClick={onRequestFormModal}
                        className="w-full text-center text-[11px] font-bold text-[#6B3E2E] hover:text-[#FF8C00] transition-colors py-1 cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>Ou envie seus dados pelo formulário online</span>
                        <ArrowRight size={11} />
                      </button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
          </div>
        </div>

        {/* Bottom Banner with Fast Assistance */}
        <div className="bg-gradient-to-r from-[#4A2C11] to-[#361E0A] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#FF8C00]/20 reveal-scale">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#FFB300] block">
              ATENDIMENTO COM CARINHO & DEDICAÇÃO
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
              Dúvidas sobre banho, tosa ou consulta no Mateus Hiper Casa Forte?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 max-w-xl">
              Fale direto com a equipe do Cuida Filho Pet Shop no WhatsApp. Respondemos rápido para tirar dúvidas e agendar o melhor dia para seu filho!
            </p>
          </div>

          <a
            href={bannerWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
            <span>Fale com a gente ⤵️</span>
            <ExternalLink size={14} className="shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
