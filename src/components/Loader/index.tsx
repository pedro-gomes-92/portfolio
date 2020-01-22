import React, { FC } from 'react';
import classnames from 'classnames';
import { LoadingComponentProps } from 'react-loadable';
import { AreaLoader, AreaLoaderProps } from 'dots.js';

interface Props extends LoadingComponentProps {
  className?: AreaLoaderProps['className'];
  hasOverlay?: AreaLoaderProps['hasOverlay'];
  loader?: AreaLoaderProps['loader'];
}

const Component: FC<Props> = ({ className, pastDelay, isLoading, hasOverlay, loader }) => {
  let loaderComponent = null;

  if (isLoading || pastDelay) {
    loaderComponent = (
      <AreaLoader className={classnames('is-loading', className)} hasOverlay={hasOverlay} loader={loader} />
    );
  }

  return loaderComponent;
};

export default Component;
