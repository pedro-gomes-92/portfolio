import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'components/App/Loader';

import imgHome from 'components/Hero/assets/home.jpg';
import imgProfile from 'sections/About/assets/profile.jpeg';
import imgDots from 'components/Project/assets/dots.jpg';
import imgScripter from 'components/Project/assets/scripter.jpg';
import imgComingSoon from 'components/Project/assets/coming-soon.jpg';

import { loadImage } from 'utils';

const Component = Loadable.Map<{}, any>({
  loader: {
    Component: () => import('components/App'),
    _imgHome: () => loadImage(imgHome),
    _imgProfile: () => loadImage(imgProfile),
    _imgDots: () => loadImage(imgDots),
    _imgScripter: () => loadImage(imgScripter),
    _imgComingSoon: () => loadImage(imgComingSoon),
  },
  loading: Loader,
  render: ({ Component: LoadedComponent }, props) => {
    const Component = LoadedComponent.default;
    return <Component {...props} />;
  },
});

export default Component;
