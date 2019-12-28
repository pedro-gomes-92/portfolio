import { SCROLLING_HEIGHT } from './constants';

const getCurrentScrollPosition = (): number => window.pageYOffset;

export const isScrolling = () => {
  return getCurrentScrollPosition() > SCROLLING_HEIGHT;
};

export const getCurrent = (elements: HTMLElement[]): string | null => {
  let target = null;
  [...elements].reverse().forEach(element => {
    const currentTop = getCurrentScrollPosition();
    const currentBottom = currentTop + window.innerHeight;

    const { top: relativeTop, bottom: relativeBottom } = element.getBoundingClientRect();

    const top = relativeTop + currentTop;
    const bottom = relativeBottom + currentTop;

    if (currentBottom > top && currentBottom < bottom) {
      target = element.getAttribute('id');
      return;
    }
  });

  return target;
};
