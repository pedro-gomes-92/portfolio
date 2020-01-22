import React, { FC } from 'react';
import classnames from 'classnames';
import { StackLayout, StackItem, ImageLink, Text } from 'dots.js';
import { Name } from './types';

interface Props {
  name: Name;
  image: string;
  url: string;
}

const Component: FC<Props> = ({ image, url, name }) => {
  return (
    <StackLayout className={classnames('is-technology', `is-${name}`)}>
      <StackItem alignText="center">
        <ImageLink source={image} to={url} isNewTab size="small" />
      </StackItem>
      <StackItem alignText="center">
        <Text text={name} size="small" />
      </StackItem>
    </StackLayout>
  );
};

export default Component;
