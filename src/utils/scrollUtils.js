/**
 * Utilitário de rolagem suave (Smooth Scroll ágil e fluido)
 * Utiliza o smooth scroll nativo com offset de cabeçalho para navegação
 * instantânea, precisa e sem atrasos ou conflitos de animação.
 */
export function slowScrollTo(target, duration = 400, offset = 80) {
  if (typeof window === 'undefined') return;

  if (target === 0 || target === 'top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  let targetElement = null;
  if (typeof target === 'string') {
    const selector = target.startsWith('#') ? target : `#${target}`;
    targetElement = document.querySelector(selector);
  } else if (target instanceof HTMLElement) {
    targetElement = target;
  }

  if (!targetElement) return;

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const elementRect = targetElement.getBoundingClientRect();
  const targetPosition = Math.max(0, elementRect.top + startPosition - offset);

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}
