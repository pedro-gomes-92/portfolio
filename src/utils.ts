export const loadImage = (path: string): Promise<HTMLImageElement> =>
  new Promise(resolve => {
    const img = document.createElement('img');

    img.src = path;
    img.addEventListener('load', () => {
      resolve(img);
    });
  });

export const scrollTo = (element: HTMLElement, offset: number = 0) => {
  const top = window.innerHeight + element.offsetTop;
  window.scrollTo({
    top: top + offset,
    behavior: 'smooth',
  });
};
