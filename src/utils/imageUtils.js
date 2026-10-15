/**
 * Utilitário de Normalização de Imagens para Astro + React
 * No Astro 5, o import ESM de imagens estáticas retorna um objeto ImageMetadata ({ src, width, height, format }).
 * Esta função garante que qualquer elemento HTML/React receba a URL string resolvida (ex: "/_astro/foto.hash.png").
 */
export function getImgSrc(img) {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && img.src) return img.src;
  return String(img);
}
