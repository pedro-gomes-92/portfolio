import React, { FC } from 'react';
import classnames from 'classnames';
import { Box, CenterLayout, Title } from 'dots';

interface Props {
  title: string;
  name: string;
}

const Component: FC<Props> = ({ title, name }: Props) => (
  <Box className={classnames('is-project', `is-${name}`)}>
    <CenterLayout>
      <Title size={5} text={title} isBold />
    </CenterLayout>
  </Box>
);

export default Component;
