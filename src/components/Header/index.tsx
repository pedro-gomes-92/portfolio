import React, { FC } from 'react';
import { Header, NavBar, Link } from 'dots';

import { NAME as CONTACT_NAME } from 'sections/Contact/constants';
import { NAME as ABOUT_NAME } from 'sections/About/constants';
import { NAME as PROJECTS_NAME } from 'sections/Projects/constants';

const Component: FC = () => (
  <Header>
    <NavBar>
      <Link text="About" size={5} to={`#${ABOUT_NAME}`} color="primary" />
      <Link text="Projects" size={5} to={`#${PROJECTS_NAME}`} color="primary" />
      <Link text="Contact" size={5} to={`#${CONTACT_NAME}`} color="primary" />
    </NavBar>
  </Header>
);

export default Component;
