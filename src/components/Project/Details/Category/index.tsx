import React, { FC } from 'react';
import classnames from 'classnames';
import { Tag } from 'dots.js';

import { Name } from './types';

interface Props {
  name: Name;
}

const Component: FC<Props> = ({ name }) => {
  return <Tag className={classnames('is-category', `is-${name}`)} text={name} />;
};

export default Component;
