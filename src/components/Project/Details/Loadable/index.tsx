import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'components/Project/Details/Loader';

import { getImageData } from 'utils';
import { Props } from 'components/Project/Details';
import { Configs as TechnologyConfigs } from 'components/Project/Details/Technology/types';

import imgBulma from './assets/bulma.png';
import imgChartist from './assets/chartist.png';
import imgJest from './assets/jest.png';
import imgReact from './assets/react.png';
import imgSass from './assets/sass.png';
import imgTypescript from './assets/typescript.png';
import imgVsCode from './assets/vscode.png';
import imgWebpack from './assets/webpack.png';
import {
  URL_CHARTIST,
  URL_JEST,
  URL_REACT,
  URL_SASS,
  URL_TYPESCRIPT,
  URL_VSCODE,
  URL_WEBPACK,
  URL_BULMA,
} from './constants';

const Component = Loadable.Map<Props, any>({
  loader: {
    Component: () => import('components/Project/Details'),
    imgBulma: () => getImageData(imgBulma),
    imgChartist: () => getImageData(imgChartist),
    imgJest: () => getImageData(imgJest),
    imgReact: () => getImageData(imgReact),
    imgSass: () => getImageData(imgSass),
    imgTypescript: () => getImageData(imgTypescript),
    imgVsCode: () => getImageData(imgVsCode),
    imgWebpack: () => getImageData(imgWebpack),
  },
  loading: Loader,
  render: (
    {
      Component: LoadedComponent,
      imgBulma,
      imgChartist,
      imgJest,
      imgReact,
      imgSass,
      imgTypescript,
      imgVsCode,
      imgWebpack,
    },
    props,
  ) => {
    const Component = LoadedComponent.default;

    const data: TechnologyConfigs = {
      bulma: {
        url: URL_BULMA,
        image: imgBulma,
      },
      chartist: {
        url: URL_CHARTIST,
        image: imgChartist,
      },
      jest: {
        url: URL_JEST,
        image: imgJest,
      },
      react: {
        url: URL_REACT,
        image: imgReact,
      },
      sass: {
        url: URL_SASS,
        image: imgSass,
      },
      typescript: {
        url: URL_TYPESCRIPT,
        image: imgTypescript,
      },
      vscode: {
        url: URL_VSCODE,
        image: imgVsCode,
      },
      webpack: {
        url: URL_WEBPACK,
        image: imgWebpack,
      },
    };

    return <Component data={data} {...props} />;
  },
});

export default Component;
