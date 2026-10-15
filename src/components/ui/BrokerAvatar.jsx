import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/img/cuidafilhopetshoplogo.jpg";
import { PETTOWN_DATA } from "@/data/propertyData";
import { getImgSrc } from "@/utils/imageUtils";

/**
 * BrokerAvatar / PetTownAvatar - Emblema circular com anel Laranja/Amarelo-Ouro da marca
 * e badge de amor ao pet.
 */
export default function BrokerAvatar({
  size = "hero", // "hero" | "bio" | "md" | "sm"
  showBadge = true,
  badgeText = "Feito com Amor 🧡",
  src = logoImg,
  alt = PETTOWN_DATA.brand.photoAlt,
  className = "",
  imgClassName = "",
}) {
  const imgSrc = getImgSrc(src);
  const sizeMap = {
    hero: {
      avatarClass: "w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 p-1.5 sm:p-2",
      badgeClass: "text-[10px] sm:text-xs px-3.5 sm:px-4 py-1 -bottom-3 sm:-bottom-3.5",
      iconSize: 13
    },
    bio: {
      avatarClass: "w-32 h-32 sm:w-40 sm:h-40 p-1.5 sm:p-2",
      badgeClass: "text-[11px] sm:text-xs px-3.5 sm:px-4 py-1 -bottom-3 sm:-bottom-3.5",
      iconSize: 13
    },
    md: {
      avatarClass: "w-28 h-28 sm:w-32 sm:h-32 p-1.5",
      badgeClass: "text-[10px] sm:text-[11px] px-3 py-0.5 -bottom-2.5",
      iconSize: 12
    },
    sm: {
      avatarClass: "w-20 h-20 sm:w-24 sm:h-24 p-1",
      badgeClass: "text-[9px] sm:text-[10px] px-2.5 py-0.5 -bottom-2",
      iconSize: 11
    }
  };

  const currentSize = sizeMap[size] || sizeMap.hero;

  return (
    <div className={cn("relative group transition-transform duration-500 hover:scale-105 inline-block select-none", className)}>
      {/* Moldura Circular com Borda Degradê Laranja Vibrante & Amarelo-Ouro (#FF8C00 via-#FFB300 to-#6B3E2E) */}
      <div
        className={cn(
          "rounded-full bg-gradient-to-tr from-[#FF8C00] via-[#FFB300] to-[#6B3E2E] shadow-[0_20px_50px_rgba(74,44,17,0.45),0_0_35px_rgba(255,140,0,0.35)] ring-2 ring-white/30",
          currentSize.avatarClass
        )}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#EC8C01] flex items-center justify-center">
          {/* Logo Cuida Filho Pet Shop - Fundo Laranja Uniforme e Sem Borda Branca */}
          <img
            src={imgSrc}
            alt={alt}
            className={cn(
              "w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105",
              imgClassName
            )}
          />
        </div>
      </div>

      {/* Selo / Badge Oficial */}
      {showBadge && (
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 bg-[#4A2C11] text-[#FFB300] font-black rounded-full shadow-2xl shadow-black/60 whitespace-nowrap uppercase tracking-wider flex items-center gap-1.5 border-2 border-[#FF8C00] z-10",
            currentSize.badgeClass
          )}
        >
          <Heart size={currentSize.iconSize} className="text-[#FF8C00] fill-[#FF8C00]" />
          <span>{badgeText}</span>
        </div>
      )}
    </div>
  );
}

