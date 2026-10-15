import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/img/logo_pet_town.png";
import { PETTOWN_DATA } from "@/data/propertyData";
import { getImgSrc } from "@/utils/imageUtils";

/**
 * BrokerAvatar / PetTownAvatar - Emblema circular com anel coral/teal da marca
 * e badge de autoridade médica e carinho.
 */
export default function BrokerAvatar({
  size = "hero", // "hero" | "bio" | "md" | "sm"
  showBadge = true,
  badgeText = "Feito com Amor",
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
      {/* Moldura Circular com Borda Degradê Laranja & Turquesa (#F97316 via-white to-#14B8A6) */}
      <div
        className={cn(
          "rounded-full bg-gradient-to-tr from-[#F97316] via-white to-[#14B8A6] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(249,115,22,0.35)] ring-2 ring-white/40",
          currentSize.avatarClass
        )}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
          {/* Logo Original Nítido com Símbolos Pet */}
          <img
            src={imgSrc}
            alt={alt}
            className={cn(
              "w-full h-full object-contain transition-transform duration-500 group-hover:scale-110",
              imgClassName
            )}
          />
        </div>
      </div>

      {/* Selo / Badge Oficial */}
      {showBadge && (
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 bg-[#101C30] text-[#F97316] font-black rounded-full shadow-2xl shadow-black/80 whitespace-nowrap uppercase tracking-wider flex items-center gap-1.5 border-2 border-[#14B8A6] z-10",
            currentSize.badgeClass
          )}
        >
          <Heart size={currentSize.iconSize} className="text-[#F97316] fill-[#F97316]" />
          <span>{badgeText}</span>
        </div>
      )}
    </div>
  );
}
