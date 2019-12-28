import React, { FC } from 'react';
import { Footer, NavBar, Text, Icon } from 'dots';

const Component: FC = () => (
  <Footer>
    <NavBar>
      <>
        <Text text="Made with " size="small" />
        <Icon name="heart" color="danger" size="small" />
        <Text text=" by Pedro Gomes. Powered by Dots." size="small" />
      </>
    </NavBar>
  </Footer>
);

export default Component;
