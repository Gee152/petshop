import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { PETTOWN_DATA } from "../data/propertyData";
import { Heart, Stethoscope, Sparkles, ShieldCheck, Award, Truck, CheckCircle2 } from "lucide-react";
import rawClinicaVet from "../img/clinica_veterinaria.png";
import rawAlineBeloAcupuntura from "../img/aline_belo_acupuntura.png";
import rawBanhoTosaHero from "../img/banho_tosa_hero.jpg";
import rawPetDelivery from "../img/pet_delivery.jpg";
import { getImgSrc } from "../utils/imageUtils";

const clinicaVet = getImgSrc(rawClinicaVet);
const alineBeloAcupuntura = getImgSrc(rawAlineBeloAcupuntura);
const banhoTosaHero = getImgSrc(rawBanhoTosaHero);
const petDelivery = getImgSrc(rawPetDelivery);

export default function WhoWeAreStickyScroll({ onRequestFormModal }) {
  const { metrics, brand } = PETTOWN_DATA;

  // Conteúdo detalhado com os 4 pilares de autoridade da Pet Town
  const stickyContent = [
    {
      badge: "Autoridade Médica",
      title: "Clínica Veterinária com Equipe Qualificada",
      description:
        "Mais de 3.500 pets acolhidos com responsabilidade e carinho. Consultas clínicas completas, vacinação ética importada, exames laboratoriais e centro cirúrgico preparado para oferecer total segurança e tranquilidade aos tutores.",
      content: (
        <div className="relative h-full w-full overflow-hidden group bg-[#0A1220] flex items-center justify-center">
          {/* Fundo ambiente blur cinematográfico */}
          <img
            src={clinicaVet}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 pointer-events-none"
          />
          {/* Vinheta suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-transparent to-[#0A1220]/40 pointer-events-none z-10" />

          {/* Foto oficial da equipe e veterinária */}
          <img
            src={clinicaVet}
            alt="Equipe Veterinária Qualificada Pet Town"
            className="relative z-10 h-full w-auto max-w-full object-contain mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Selo na base */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1220] via-[#0A1220]/80 to-transparent flex items-end p-4 sm:p-6 z-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#101C30]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-[#14B8A6]/40">
              <Stethoscope size={14} className="text-[#14B8A6]" /> Atendimento Veterinário Humanizado
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Nova Especialidade",
      title: "Dra. Aline Belo — Acupuntura e Fisioterapia",
      description:
        "Médica Veterinária graduada pela UNINASSAU, pós-graduada em Acupuntura Veterinária e com formação complementar em Fisioterapia. Tratamento focado no alívio de dores articulares, hérnias de disco, displasias e recuperação motora de cães e gatos.",
      content: (
        <div className="relative h-full w-full overflow-hidden group bg-[#0A1220] flex items-center justify-center">
          <img
            src={alineBeloAcupuntura}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-transparent to-[#0A1220]/40 pointer-events-none z-10" />

          <img
            src={alineBeloAcupuntura}
            alt="Dra. Aline Belo - Acupuntura e Fisioterapia Veterinária"
            className="relative z-10 h-full w-auto max-w-full object-contain mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#101C30]/90 via-transparent to-transparent flex items-end p-4 sm:p-6 z-20">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#101C30]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-[#F97316]/40">
              <Sparkles size={14} className="text-[#F97316]" /> Dra. Aline Belo • Acupuntura & Fisio
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Cuidado e Beleza 360°",
      title: "Banho & Tosa Humanizado com Produtos Dermatológicos",
      description:
        "Aqui o bem-estar do seu pet vem em primeiro lugar. Banho com água quentinha e toalhas individuais esterilizadas em embalagens seladas, secagem sem calor excessivo, produtos hipoalergênicos e profissionais carinhosos com manejo positivo.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src={banhoTosaHero}
            alt="Banho & Tosa 360° Pet Town"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101C30]/90 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#101C30]/95 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-[#F97316]/40">
              <Heart size={14} className="text-[#F97316] fill-[#F97316]" /> Banho & Tosa com Amor e Respeito
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: "Conforto & Praticidade",
      title: "Pet Delivery Climatizado & Farmácia Completa",
      description:
        "Não tem tempo de levar seu pet? Nosso Pet Delivery busca e devolve na porta da sua casa com veículo climatizado e caixas individuais higienizadas. Além disso, nossa farmácia veterinária conta com todos os medicamentos e rações recomendados.",
      content: (
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src={petDelivery}
            alt="Pet Delivery Leva e Traz Pet Town"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101C30]/90 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#F97316] px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg text-white">
              <Truck size={14} /> Pet Delivery • Leva & Traz Seguro
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
