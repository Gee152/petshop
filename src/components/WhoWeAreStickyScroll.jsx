import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { PETTOWN_DATA } from "../data/propertyData";
import { Heart, Stethoscope, Sparkles, ShieldCheck } from "lucide-react";
import rawCao from "../img/cao.png";
import rawGato from "../img/gato.png";
import rawCuidandoDoPet from "../img/cuidandodopet.png";
import rawProduto1 from "../img/produto1.png";
import { getImgSrc } from "../utils/imageUtils";

const imgCao = getImgSrc(rawCao);
const imgGato = getImgSrc(rawGato);
const imgCuidandoDoPet = getImgSrc(rawCuidandoDoPet);
const imgProduto1 = getImgSrc(rawProduto1);

export default function WhoWeAreStickyScroll({ onRequestFormModal }) {
  const { brand } = PETTOWN_DATA;

  // Conteúdo detalhado com os 4 pilares de autoridade do Cuida Filho Pet Shop
  const stickyContent = [
    {
      badge: "🧡 Banho e Tosa",
      title: "Banho & Tosa Humanizado com Produtos Dermatológicos",
      description:
        "Aqui o bem-estar do seu pet vem em primeiro lugar. Banho com água na temperatura agradável, toalhas individuais esterilizadas e seladas, secagem sem calor excessivo, cosméticos dermatológicos hipoalergênicos e profissionais carinhosos com manejo positivo.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src={imgCao}
            alt="Banho & Tosa com Amor no Cuida Filho Pet Shop"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C11]/90 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#4A2C11]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-[#FF8C00]/40">
              <Heart size={14} className="text-[#FF8C00] fill-[#FF8C00]" /> Banho & Tosa com Amor e Respeito
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Saúde & Prevenção",
      title: "Consulta Veterinária no Mateus Hiper Casa Forte",
      description:
        "Mais de 2.800 pets acolhidos com responsabilidade e carinho. Consultas clínicas preventivas, vacinação ética importada e orientações personalizadas para garantir a longevidade e a felicidade do seu companheiro de quatro patas.",
      content: (
        <div className="relative h-full w-full overflow-hidden group bg-[#4A2C11] flex items-center justify-center">
          {/* Fundo blur suave */}
          <img
            src={imgGato}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C11] via-transparent to-[#4A2C11]/40 pointer-events-none z-10" />

          <img
            src={imgGato}
            alt="Consulta Veterinária Cuida Filho"
            className="relative z-10 h-full w-auto max-w-full object-contain mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#4A2C11] via-[#4A2C11]/80 to-transparent flex items-end p-4 sm:p-6 z-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#4A2C11]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-[#FF8C00]/40">
              <Stethoscope size={14} className="text-[#FF8C00]" /> Atendimento Veterinário Humanizado
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Manejo Humanizado",
      title: "Tratamos o Seu Pet Como um Filho",
      description:
        "Sabemos que cada cão e gato tem seu temperamento. Respeitamos o tempo do animal com calma, carinho genuíno e paciência. Ambiente limpo, acolhedor e climatizado com fácil acesso dentro do Mateus Hiper Casa Forte.",
      content: (
        <div className="relative h-full w-full overflow-hidden group bg-[#4A2C11] flex items-center justify-center">
          <img
            src={imgCuidandoDoPet}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C11] via-transparent to-[#4A2C11]/40 pointer-events-none z-10" />

          <img
            src={imgCuidandoDoPet}
            alt="Acolhimento e Carinho com o Pet"
            className="relative z-10 h-full w-auto max-w-full object-contain mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C11]/90 via-transparent to-transparent flex items-end p-4 sm:p-6 z-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#4A2C11]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-[#FFB300]/40">
              <Sparkles size={14} className="text-[#FFB300]" /> Cuidado com o Filho • Afeto & Respeito
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Loja & Nutrição",
      title: "Produtos de Saúde, Beleza e Alimentação",
      description:
        "Mix completo das melhores marcas: rações Super Premium, suplementos, petiscos saudáveis, antipulgas, colônias suaves e acessórios divertidos para presentear e cuidar do seu companheiro todos os dias.",
      content: (
        <div className="relative h-full w-full overflow-hidden group bg-[#4A2C11] flex items-center justify-center">
          <img
            src={imgProduto1}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C11] via-transparent to-[#4A2C11]/40 pointer-events-none z-10" />

          <img
            src={imgProduto1}
            alt="Produtos de Saúde, Beleza e Alimentação"
            className="relative z-10 h-full w-auto max-w-full object-contain mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C11]/90 via-transparent to-transparent flex items-end p-4 sm:p-6 z-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#FF8C00] px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              <ShieldCheck size={14} /> Produtos de Saúde, Beleza e Nutrição
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="who-we-are" className="w-full">
      <StickyScroll content={stickyContent} />
    </div>
  );
}

