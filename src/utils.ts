export const loadImage = (path: string): Promise<HTMLImageElement> =>
  new Promise(resolve => {
    const img = document.createElement('img');

    img.src = path;
    img.addEventListener('load', () => {
      resolve(img);
    });
  });
