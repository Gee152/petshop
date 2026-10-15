import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Globe 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PETTOWN_DATA, getWhatsAppUrl } from "@/data/propertyData";

const DEFAULT_PET_SOCIALS = [
  {
    name: "Instagram Cuida Filho",
    icon: Instagram,
    href: PETTOWN_DATA.brand.instagram,
    label: "@cuidafilhopetshop"
  },
  {
    name: "WhatsApp Atendimento",
    icon: MessageCircle,
    href: getWhatsAppUrl("Olá equipe Cuida Filho! Vim pelo site e gostaria de agendar um atendimento para o meu pet no Mateus Hiper Casa Forte."),
    label: "Falar no WhatsApp"
  },
  {
    name: "Telefone Direto",
    icon: Phone,
    href: `tel:+${PETTOWN_DATA.brand.whatsappPhone}`,
    label: "Ligar para a Recepção"
  },
  {
    name: "Localização no Maps",
    icon: MapPin,
    href: PETTOWN_DATA.brand.mapsUrl,
    label: "Mateus Hiper Casa Forte"
  },
  {
    name: "Início do Site",
    icon: Globe,
    href: "#home",
    label: "cuidafilhopetshop.com.br"
  }
];

export default function SocialDock({ items = DEFAULT_PET_SOCIALS, className = "" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-transparent relative",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isHovered = hoveredIndex === idx;

        return (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip com Speech Bubble */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -top-11 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center"
                >
                  <div className="bg-[#FF8C00] text-white text-[11px] font-extrabold px-3 py-1 rounded-xl shadow-xl whitespace-nowrap leading-none flex items-center justify-center">
                    {item.name}
                  </div>
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#FF8C00] -mt-[1px]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ícone com cápsula interativa no hover */}
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group cursor-pointer",
                isHovered
                  ? "bg-white/10 text-[#FF8C00] shadow-sm"
                  : "text-amber-100/75 hover:text-white hover:bg-white/5"
              )}
              aria-label={item.name}
            >
              <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />

              {isHovered && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-1 w-3.5 h-[2.5px] bg-[#FF8C00] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
}
