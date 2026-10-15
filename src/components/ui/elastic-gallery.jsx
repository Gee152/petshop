import React, { useState } from "react";
import { cn } from "@/lib/utils";
import rawBanhoTosaHero from "../../img/banho_tosa_hero.jpg";
import rawClinicaVet from "../../img/clinica_veterinaria.png";
import rawAlineBeloAcupuntura from "../../img/aline_belo_acupuntura.png";
import rawPetShopFarmacia from "../../img/pet_shop_farmacia.jpg";
import rawPetDelivery from "../../img/pet_delivery.jpg";
import { getImgSrc } from "@/utils/imageUtils";

const banhoTosaHero = getImgSrc(rawBanhoTosaHero);
const clinicaVet = getImgSrc(rawClinicaVet);
const alineBeloAcupuntura = getImgSrc(rawAlineBeloAcupuntura);
const petShopFarmacia = getImgSrc(rawPetShopFarmacia);
const petDelivery = getImgSrc(rawPetDelivery);

const DEFAULT_PET_ITEMS = [
  {
    id: "01",
    title: "Banho & Tosa 360°",
    category: "Cuidado e Beleza",
    src: banhoTosaHero,
    alt: "Banho e tosa humanizado na Pet Town",
  },
  {
    id: "02",
    title: "Clínica Veterinária",
    category: "Equipe Qualificada",
    src: clinicaVet,
    alt: "Consulta veterinária e exames preventivos",
  },
  {
    id: "03",
    title: "Acupuntura & Fisio",
    category: "Dra. Aline Belo",
    src: alineBeloAcupuntura,
    alt: "Acupuntura e fisioterapia veterinária para alívio de dor",
  },
  {
    id: "04",
    title: "Pet Shop & Farmácia",
    category: "Medicamentos e Rações",
    src: petShopFarmacia,
    alt: "Farmácia veterinária completa e boutique pet",
  },
  {
    id: "05",
    title: "Pet Delivery",
    category: "Leva e Traz Climatizado",
    src: petDelivery,
    alt: "Transporte seguro e com conforto para seu pet",
  },
];

export function ElasticGallery({
  items = DEFAULT_PET_ITEMS,
  className = "",
  isHeroBackground = false,
  defaultActiveId,
  onItemClick,
}) {
  // Ao carregar a tela, abre automaticamente a imagem do meio (Acupuntura ou Clínica)
  const middleIndex = Math.floor(items.length / 2);
  const initialActiveId = defaultActiveId || items[middleIndex]?.id || "03";
  const [activeId, setActiveId] = useState(initialActiveId);

  // Quando usado como Background do Hero: ocupa 100% da área de fundo de forma fluida
  if (isHeroBackground) {
    return (
      <div className={cn("w-full h-full flex flex-row gap-1 sm:gap-2 select-none overflow-hidden", className)}>
        {items.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => {
              setActiveId(item.id);
              if (onItemClick) onItemClick(item);
            }}
            className={cn(
              "relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden group",
              activeId === item.id ? "flex-[14] sm:flex-[4.5]" : "flex-[0.6] sm:flex-[1] sm:hover:flex-[1.8]"
            )}
          >
            {/* Background Image */}
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Soft Black Gradient Overlay */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                activeId === item.id
                  ? "bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85"
                  : "bg-black/45 group-hover:bg-black/25 opacity-75"
              )}
            />

            {/* Content Pill (Visible on active or expanded state) */}
            <div
              className={cn(
                "absolute bottom-6 left-6 right-6 transition-all duration-500 flex flex-col justify-end pointer-events-none",
                activeId === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest block mb-1">
                {item.category}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-white font-heading">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {items.map((item) => (
        <div key={item.id} className="relative rounded-2xl overflow-hidden h-64 group shadow-lg">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
            <div>
              <span className="text-xs font-bold text-[#F97316] block">{item.category}</span>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ElasticGallery;
