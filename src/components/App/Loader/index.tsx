import React, { FC } from 'react';
import { LoadingComponentProps } from 'react-loadable';

import Loader from 'components/Loader';
import { ReactComponent as LoaderSVG } from './assets/loader.svg';

const Component: FC<LoadingComponentProps> = props => (
  <Loader className="is-application" loader={<LoaderSVG />} {...props} />
);

export default Component;
