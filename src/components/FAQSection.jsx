import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { PETTOWN_DATA, getWhatsAppUrl } from '../data/propertyData';

export default function FAQSection({ onRequestFormModal }) {
  const { faq, brand } = PETTOWN_DATA;
  const [openIndex, setOpenIndex] = useState(0); // Primeiro aberto por padrão para SEO e engajamento

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const whatsappFaqUrl = getWhatsAppUrl(
    "Olá equipe Cuida Filho! Vi as dúvidas no site e gostaria de conversar com vocês sobre meu pet!"
  );

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-b border-amber-900/10 relative overflow-hidden">
      {/* Elementos visuais de fundo sutis */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#FF8C00]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#FFB300]/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-4 max-w-2xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-[#4A2C11] border border-[#FF8C00]/25 text-xs font-bold uppercase tracking-wider shadow-sm">
            <HelpCircle size={14} className="text-[#FF8C00]" />
            <span>{faq.category}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#4A2C11] font-heading tracking-tight leading-tight">
            {faq.title}
          </h2>

          <p className="text-sm sm:text-base text-[#6B3E2E] leading-relaxed">
            {faq.subtitle}
          </p>
        </div>

        {/* Lista de Acordeões com ARIA Accessibility */}
        <div className="space-y-3.5">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#FF8C00]/50 shadow-md shadow-[#FF8C00]/5 ring-1 ring-[#FF8C00]/20"
                    : "bg-white/70 hover:bg-white border-amber-900/10 hover:border-[#FF8C00]/30 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#FF8C00] text-white shadow-sm"
                          : "bg-amber-100/80 text-[#6B3E2E]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="font-heading font-extrabold text-base sm:text-lg text-[#4A2C11] leading-snug">
                      {item.question}
                    </span>
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#4A2C11] text-[#FFB300]"
                        : "bg-amber-50 text-[#6B3E2E] hover:bg-amber-100"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="pt-2 border-t border-amber-900/5 text-sm sm:text-base text-[#6B3E2E] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Contato Rápido & Conversão no Rodapé do FAQ */}
        <div className="bg-gradient-to-r from-[#4A2C11] via-[#5C3615] to-[#4A2C11] rounded-3xl p-6 sm:p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-amber-900/20 relative overflow-hidden reveal">
          <div className="space-y-1.5 relative z-10">
            <span className="text-[11px] font-bold tracking-wider text-[#FFB300] uppercase block">
              Atendimento Humanizado no Mateus Hiper
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading leading-tight">
              Ainda tem alguma dúvida sobre seu pet?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 max-w-md">
              Fale diretamente com nossa equipe. Respondemos rapidinho no WhatsApp para tirar dúvidas e agendar com carinho.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <a
              href={whatsappFaqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-lg shadow-[#FF8C00]/25 active:scale-95 group cursor-pointer"
            >
              <span>Fale com a gente ⤵️</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {onRequestFormModal && (
              <button
                type="button"
                onClick={onRequestFormModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all border border-white/20 active:scale-95 cursor-pointer"
              >
                <span>Agendar Atendimento</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
