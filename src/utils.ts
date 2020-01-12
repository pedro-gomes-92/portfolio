export const loadImage = (path: string): Promise<HTMLImageElement> =>
  new Promise(resolve => {
    const img = document.createElement('img');

    img.src = path;
    img.addEventListener('load', () => {
      resolve(img);
    });
  });

export const getImageData = (path: string): Promise<string> =>
  new Promise(resolve => {
    window
      .fetch(path)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();

        reader.addEventListener(
          'load',
          () => {
            resolve(reader.result as string);
          },
          false,
        );

        reader.readAsDataURL(blob);
      });
  });

export const scrollTo = (element: HTMLElement, offset: number = 0) => {
  const top = window.innerHeight + element.offsetTop;
  window.scrollTo({
    top: top + offset,
    behavior: 'smooth',
  });
};
