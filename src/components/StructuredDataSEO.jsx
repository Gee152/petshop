import React, { useEffect } from "react";
import { PETTOWN_DATA } from "../data/propertyData";

/**
 * Injeta dinamicamente na tag <head> os dados estruturados Schema.org (JSON-LD)
 * com conformidade aos Rich Results do Google (VeterinaryCare, LocalBusiness, Service, Offer).
 */
export default function StructuredDataSEO() {
  const { brand, trustedLocations } = PETTOWN_DATA;

  useEffect(() => {
    // 1. Gera schema para cada serviço do catálogo
    const serviceListingsSchema = trustedLocations.properties.map((service) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${service.name} • Pet Town`,
      "serviceType": service.typology,
      "description": service.description,
      "provider": {
        "@type": "VeterinaryCare",
        "name": brand.fullName,
        "telephone": "+55-81-99999-9999"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": brand.coverageAreas
      },
      "offers": {
        "@type": "Offer",
        "price": service.priceValue,
        "priceCurrency": service.priceCurrency,
        "availability": service.availability,
        "url": `${window.location.origin}/#properties`
      }
    }));

    // 2. Entidade Principal VeterinaryCare + LocalBusiness (Pet Town)
    const veterinarySchema = {
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "@id": "https://pettown.com.br/#veterinary",
      "name": brand.fullName,
      "alternateName": "Pet Town",
      "url": "https://pettown.com.br/",
      "logo": "https://pettown.com.br/assets/logo_pet_town.png",
      "image": "https://pettown.com.br/assets/logo_pet_town.png",
      "description": brand.bio,
      "telephone": "+55-81-99999-9999",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Recife",
        "addressRegion": "PE",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.0476,
        "longitude": -34.8770
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços Veterinários e Estética Pet Town",
        "itemListElement": trustedLocations.properties.map((s, idx) => ({
          "@type": "OfferCatalog",
          "name": s.name,
          "position": idx + 1
        }))
      },
      "sameAs": [
        brand.instagram
      ]
    };

    const scripts = [];

    const mainScript = document.createElement("script");
    mainScript.type = "application/ld+json";
    mainScript.text = JSON.stringify(veterinarySchema);
    document.head.appendChild(mainScript);
    scripts.push(mainScript);

    serviceListingsSchema.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((s) => {
        if (s && s.parentNode) {
          s.parentNode.removeChild(s);
        }
      });
    };
  }, [brand, trustedLocations]);

  return null;
}
