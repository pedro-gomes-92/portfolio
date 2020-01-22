import React, { FC } from 'react';
import { Footer, Text, Icon, ColumnLayout, ColumnItem, Link } from 'dots.js';

const Component: FC = () => (
  <Footer>
    <ColumnLayout>
      <ColumnItem />
      <ColumnItem size="auto" align="center">
        <Text text="Made with " size="small" />
        <Icon name="heart" color="danger" size="small" />
        <Text text=" by Pedro Gomes. Powered by " size="small" />
        <Link text="Dots" to="https://github.com/pedro-gomes-92/dots" isNewTab />
        <Text text="." size="small" />
      </ColumnItem>
    </ColumnLayout>
  </Footer>
);

export default Component;
