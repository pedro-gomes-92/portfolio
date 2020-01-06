import React, { FC } from 'react';
import classnames from 'classnames';
import { LoadingComponentProps } from 'react-loadable';
import { AreaLoader, AreaLoaderProps } from 'dots';

interface Props extends LoadingComponentProps {
  className?: AreaLoaderProps['className'];
  hasOverlay?: AreaLoaderProps['hasOverlay'];
}

const Component: FC<Props> = ({ className, pastDelay, isLoading, hasOverlay }) => {
  let loader = null;

  if (isLoading || pastDelay) {
    loader = <AreaLoader className={classnames('is-loading', className)} hasOverlay={hasOverlay} />;
  }

  return loader;
};

export default Component;
