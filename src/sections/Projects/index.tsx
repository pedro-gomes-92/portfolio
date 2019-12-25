import React, { FC } from 'react';
import { Section as DotsSection, ColumnLayout, ColumnItem } from 'dots';

import Project from 'components/Project';
import { NAME } from './constants';

const Section: FC = () => (
  <DotsSection attribute={{ id: NAME }}>
    <ColumnLayout isWrapping gap={4}>
      <ColumnItem size={4}>
        <Project name="dots" title="Dots" />
      </ColumnItem>
      <ColumnItem size={4}>
        <Project name="scripter" title="Scripter" />
      </ColumnItem>
      <ColumnItem size={4}>
        <Project name="coming-soon" title="Coming Soon" />
      </ColumnItem>
    </ColumnLayout>
  </DotsSection>
);

export default Section;
