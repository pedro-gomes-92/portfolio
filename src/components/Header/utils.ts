import { SCROLLING_HEIGHT } from './constants';

const getCurrentScrollPosition = (): number => window.pageYOffset;

export const isScrolling = () => {
  return getCurrentScrollPosition() > SCROLLING_HEIGHT;
};

export const getCurrent = (elements: HTMLElement[], offset: number = 0): string | null => {
  let target = null;
  [...elements].forEach((element, index) => {
    const currentTop = getCurrentScrollPosition() + offset;
    const currentBottom = window.innerHeight + currentTop - offset;

    const elementTop = window.innerHeight + element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;

    const pageBottom = document.documentElement.offsetHeight;

    if (
      currentTop >= elementTop ||
      (index === elements.length - 1 && currentBottom >= elementBottom && currentBottom === pageBottom)
    ) {
      target = element.getAttribute('id');
    }
  });

  return target;
};

export const scrollTo = (element: HTMLElement, offset: number = 0) => {
  const top = window.innerHeight + element.offsetTop;

  window.scrollTo({
    top: top + offset,
    behavior: 'smooth',
  });
};
