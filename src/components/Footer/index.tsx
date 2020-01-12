import React, { FC } from 'react';
import { Footer, Text, Icon, ColumnLayout, ColumnItem } from 'dots';

const Component: FC = () => (
  <Footer>
    <ColumnLayout>
      <ColumnItem />
      <ColumnItem size="auto" align="center">
        <Text text="Made with " size="small" />
        <Icon name="heart" color="danger" size="small" />
        <Text text=" by Pedro Gomes. Powered by Dots." size="small" />
      </ColumnItem>
    </ColumnLayout>
  </Footer>
);

export default Component;
