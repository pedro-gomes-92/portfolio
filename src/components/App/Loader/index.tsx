import React, { FC } from 'react';
import { LoadingComponentProps } from 'react-loadable';

import Loader from 'components/Loader';
import { ReactComponent as LoaderSVG } from './assets/loader.svg';

const Component: FC<LoadingComponentProps> = ({ isLoading, ...rest }) => {
  return <Loader className="is-application" loader={<LoaderSVG />} isLoading={isLoading} {...rest} />;
};

export default Component;
