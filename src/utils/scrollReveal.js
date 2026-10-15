/**
 * Utilitário universal de Scroll Reveal de Alta Performance (60fps)
 * Utiliza IntersectionObserver nativo com aceleração por GPU (transform / opacity).
 * Zero dependências externas e peso insignificante (< 1kB).
 */
export function initScrollReveal() {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(
    '.reveal:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-scale:not(.is-revealed)'
  );

  if (!elements.length) return;

  // Fallback para navegadores sem IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  elements.forEach((el) => {
    // Se já estiver na primeira dobra visível, revela imediatamente sem flash
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-revealed');
    } else {
      observer.observe(el);
    }
  });
}
