import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'components/App/Loader';

import imgProfile from 'pages/About/assets/profile.jpeg';
import imgDots from 'components/Project/assets/dots.jpg';
import imgScripter from 'components/Project/assets/scripter.jpg';
import imgComingSoon from 'components/Project/assets/coming-soon.jpg';
import { loadImage } from 'utils';
import { LOADING_DELAY } from './constants';

const Component = Loadable.Map<{}, any>({
  loader: {
    Component: () => import('components/App'),
    _imgProfile: () => loadImage(imgProfile),
    _imgDots: () => loadImage(imgDots),
    _imgScripter: () => loadImage(imgScripter),
    _imgComingSoon: () => loadImage(imgComingSoon),
    _sleep: () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, LOADING_DELAY);
      }),
  },
  loading: Loader,
  render: ({ Component: LoadedComponent }, props) => {
    const Component = LoadedComponent.default;
    return <Component {...props} />;
  },
});

export default Component;
