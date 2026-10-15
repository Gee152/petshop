import { useRef, useEffect, useCallback } from 'react';

/**
 * useSwipeScroll
 * Hook de alto desempenho para tornar qualquer container horizontal
 * ultra-sensível ao deslize lateral tanto no Mobile (touch swipe)
 * quanto no Desktop/Emuladores (click & drag com mouse/trackpad).
 *
 * Características:
 * - 1:1 Tracking fluido ao arrastar (sensibilidade amplificada em 1.25x)
 * - Desativa temporariamente o snap durante o arraste para fluidez máxima
 * - Restaura snap suave ao soltar para pousar perfeitamente no card mais próximo
 * - Previne clique acidental em links/botões se o usuário estava arrastando
 * - Desativa o drag nativo de imagens HTML5 (que bloqueia o scroll horizontal)
 * - Fornece função scrollToDirection(direction, stepWidth) para as setas
 */
export function useSwipeScroll(options = {}) {
  const { sensitivity = 1.25, snapOnRelease = true } = options;
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const scrollBy = useCallback((direction, stepWidth = 300) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction * stepWidth,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let dragDistance = 0;

    // Desativa o drag nativo de imagens que trava o deslize
    const preventImgDrag = (e) => {
      if (e.target && e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handlePointerDown = (e) => {
      // Ignora clique com botão direito ou botões secundários
      if (e.button !== undefined && e.button !== 0) return;
      
      // Não inicia arraste em cliques diretos nas setas de navegação
      if (e.target && e.target.closest('button[data-nav-arrow]')) return;

      isDown = true;
      isDraggingRef.current = false;
      dragDistance = 0;
      startX = e.pageX || (e.touches && e.touches[0] ? e.touches[0].pageX : 0);
      startScrollLeft = el.scrollLeft;

      el.style.scrollBehavior = 'auto';
      el.style.scrollSnapType = 'none';
      el.style.cursor = 'grabbing';
      el.classList.add('is-dragging');
    };

    const handlePointerMove = (e) => {
      if (!isDown) return;

      const currentX = e.pageX || (e.touches && e.touches[0] ? e.touches[0].pageX : 0);
      const diffX = currentX - startX;
      dragDistance = Math.abs(diffX);

      // Limiar para diferenciar clique de arraste intencional
      if (dragDistance > 5) {
        isDraggingRef.current = true;
        // Evita seleção acidental de texto durante o arraste
        document.body.style.userSelect = 'none';
        document.body.style.webkitUserSelect = 'none';
      }

      // Aplica deslocamento com multiplicador de sensibilidade
      el.scrollLeft = startScrollLeft - diffX * sensitivity;
    };

    const handlePointerUp = () => {
      if (!isDown) return;
      isDown = false;

      el.style.cursor = '';
      el.classList.remove('is-dragging');
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';

      if (snapOnRelease) {
        el.style.scrollBehavior = 'smooth';
        el.style.scrollSnapType = 'x mandatory';
      }

      // Pequeno timeout para não abrir links ao soltar o arraste
      setTimeout(() => {
        isDraggingRef.current = false;
      }, 80);
    };

    // Bloqueia cliques acidentais em elementos filhos caso tenha ocorrido arraste
    const handleClickCapture = (e) => {
      if (isDraggingRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener('dragstart', preventImgDrag);
    el.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    el.addEventListener('click', handleClickCapture, true);

    return () => {
      el.removeEventListener('dragstart', preventImgDrag);
      el.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      el.removeEventListener('click', handleClickCapture, true);
    };
  }, [sensitivity, snapOnRelease]);

  return { ref: containerRef, scrollBy, isDraggingRef };
}

export default useSwipeScroll;
