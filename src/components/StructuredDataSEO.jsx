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
      "name": `${service.name} • ${brand.name}`,
      "serviceType": service.typology,
      "description": service.description,
      "provider": {
        "@type": "VeterinaryCare",
        "name": brand.fullName,
        "telephone": "+55-81-99184-1337"
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

    // 2. Entidade Principal VeterinaryCare + LocalBusiness (Cuida Filho Pet Shop)
    const veterinarySchema = {
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "@id": "https://cuidafilhopetshop.com.br/#petshop",
      "name": brand.fullName,
      "alternateName": "Cuida Filho Pet Shop",
      "url": "https://cuidafilhopetshop.com.br/",
      "logo": "https://cuidafilhopetshop.com.br/assets/cuidafilhopetshoplogo.jpg",
      "image": "https://cuidafilhopetshop.com.br/assets/cuidafilhopetshoplogo.jpg",
      "description": brand.bio,
      "telephone": "+55-81-99184-1337",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 08:00-20:00, Su 08:00-14:00",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Dezessete de Agosto, Casa Forte (Mateus Hiper)",
        "addressLocality": "Recife",
        "addressRegion": "PE",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.0315,
        "longitude": -34.9190
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços Cuida Filho Pet Shop",
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
