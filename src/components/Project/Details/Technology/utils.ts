import {
  URL_REACT,
  URL_TYPESCRIPT,
  URL_SASS,
  URL_JEST,
  URL_BULMA,
  URL_WEBPACK,
  URL_VSCODE,
  URL_CHARTIST,
} from './constants';
import { Data } from './types';

import IMAGE_REACT from './assets/react.png';
import IMAGE_TYPESCRIPT from './assets/typescript.png';
import IMAGE_SASS from './assets/sass.png';
import IMAGE_JEST from './assets/jest.png';
import IMAGE_BULMA from './assets/bulma.png';
import IMAGE_WEBPACK from './assets/webpack.png';
import IMAGE_VSCODE from './assets/vscode.png';
import IMAGE_CHARTIST from './assets/chartist.png';

export const getData = (name: string): Data => {
  let url;
  let image;
  switch (name) {
    case 'react':
      url = URL_REACT;
      image = IMAGE_REACT;

      break;
    case 'typescript':
      url = URL_TYPESCRIPT;
      image = IMAGE_TYPESCRIPT;

      break;
    case 'sass':
      url = URL_SASS;
      image = IMAGE_SASS;

      break;
    case 'jest':
      url = URL_JEST;
      image = IMAGE_JEST;

      break;
    case 'bulma':
      url = URL_BULMA;
      image = IMAGE_BULMA;

      break;
    case 'webpack':
      url = URL_WEBPACK;
      image = IMAGE_WEBPACK;

      break;
    case 'vscode':
      url = URL_VSCODE;
      image = IMAGE_VSCODE;

      break;

    case 'chartist':
      url = URL_CHARTIST;
      image = IMAGE_CHARTIST;

      break;
    default:
      url = '';
      image = '';
  }

  return { url, image };
};
