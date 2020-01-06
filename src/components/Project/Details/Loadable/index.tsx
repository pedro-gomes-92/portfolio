import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'components/Project/Details/Loader';

import imgBulma from 'components/Project/Details/Technology/assets/bulma.png';
import imgChartist from 'components/Project/Details/Technology/assets/chartist.png';
import imgJest from 'components/Project/Details/Technology/assets/jest.png';
import imgReact from 'components/Project/Details/Technology/assets/react.png';
import imgSass from 'components/Project/Details/Technology/assets/sass.png';
import imgTypescript from 'components/Project/Details/Technology/assets/typescript.png';
import imgVsCode from 'components/Project/Details/Technology/assets/vscode.png';
import imgWebpack from 'components/Project/Details/Technology/assets/webpack.png';

import { loadImage } from 'utils';
import { Props } from 'components/Project/Details';

const Component = Loadable.Map<Props, any>({
  loader: {
    Component: () => import('components/Project/Details'),
    _imgBulma: () => loadImage(imgBulma),
    _imgChartist: () => loadImage(imgChartist),
    _imgJest: () => loadImage(imgJest),
    _imgReact: () => loadImage(imgReact),
    _imgSass: () => loadImage(imgSass),
    _imgTypescript: () => loadImage(imgTypescript),
    _imgVsCode: () => loadImage(imgVsCode),
    _imgWebpack: () => loadImage(imgWebpack),
  },
  loading: Loader,
  render: ({ Component: LoadedComponent }, props) => {
    const Component = LoadedComponent.default;
    return <Component {...props} />;
  },
});

export default Component;
