import React, { FC } from 'react';
import { Footer, NavBar, Text, Icon } from 'dots';

const Component: FC = () => (
  <Footer>
    <NavBar>
      <>
        <Text text="Made with " />
        <Icon name="heart" />
        <Text text=" by Pedro Gomes" />
      </>
    </NavBar>
  </Footer>
);

export default Component;
