import React, { FC } from 'react';
import { LoadingComponentProps } from 'react-loadable';

import Loader from 'components/Loader';

const Component: FC<LoadingComponentProps> = props => <Loader className="is-application" {...props} />;

export default Component;
