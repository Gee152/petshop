import React from 'react';
import { cn } from '@/lib/utils';
import logoImg from '@/img/logo_pet_town.png';
import { PETTOWN_DATA } from '@/data/propertyData';
import { getImgSrc } from '@/utils/imageUtils';

/**
 * LogoPetTown - Identidade visual oficial da Pet Town
 * Usa a marca com a tipografia estilizada (cão e gato nas letras) e pata turquesa.
 */
export default function LogoPetTown({
  className = "",
  variant = "light", // "light" (para fundos escuros) ou "dark" (para fundos claros)
  size = "md",       // "sm", "md", "lg"
  layout = "inline", // "inline" | "stacked"
  showSlogan = true,
  onClick
}) {
  const isDarkBg = variant === "light";
  const imgSrc = getImgSrc(logoImg);

  const sizeConfig = {
    sm: {
      imgClass: "w-9 h-9 sm:w-10 sm:h-10",
      titleClass: "text-lg sm:text-xl",
      sloganClass: "text-[9px] sm:text-[10px]"
    },
    md: {
      imgClass: "w-11 h-11 sm:w-13 sm:h-13",
      titleClass: "text-xl sm:text-2xl",
      sloganClass: "text-[10px] sm:text-[11px]"
    },
    lg: {
      imgClass: "w-16 h-16 sm:w-20 sm:h-20",
      titleClass: "text-2xl sm:text-3xl lg:text-4xl",
      sloganClass: "text-xs sm:text-sm"
    }
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  return (
    <div
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2.5 sm:gap-3 select-none transition-all duration-300 group",
        onClick && "cursor-pointer hover:opacity-95 hover:scale-[1.02] active:scale-95",
        layout === "stacked" && "flex-col text-center",
        className
      )}
    >
      {/* Imagem do Logo Circular Original */}
      <div className="relative shrink-0">
        <img
          src={imgSrc}
          alt="Pet Town - Pet Shop e Clínica Veterinária"
          className={cn(
            "rounded-full object-contain shadow-md transition-transform duration-300 group-hover:rotate-6",
            currentSize.imgClass,
            isDarkBg ? "ring-2 ring-white/30" : "ring-2 ring-[#F97316]/30"
          )}
        />
        {/* Ponto indicador de status ativo */}
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#14B8A6] border-2 border-white animate-pulse" />
      </div>

      {/* Bloco de Texto da Marca */}
      <div className={cn("flex flex-col leading-tight", layout === "stacked" ? "items-center" : "items-start")}>
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "font-heading font-black tracking-tight",
              currentSize.titleClass,
              isDarkBg ? "text-white" : "text-[#101C30]"
            )}
          >
            Pet <span className="text-[#F97316]">Town</span>
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#14B8A6]/20 text-[#0D9488] uppercase tracking-wider hidden sm:inline-block">
            Clínica & Pet Shop
          </span>
        </div>

        {showSlogan && (
          <span
            className={cn(
              "font-medium italic tracking-wide mt-0.5 whitespace-nowrap",
              currentSize.sloganClass,
              isDarkBg ? "text-slate-300" : "text-slate-500"
            )}
          >
            {PETTOWN_DATA.brand.slogan}
          </span>
        )}
      </div>
    </div>
  );
}
