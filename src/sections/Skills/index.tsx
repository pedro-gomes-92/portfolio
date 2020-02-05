import React, { FC } from 'react';
import { ColumnLayout, ColumnItem, BarChart } from 'dots.js';

import PortSection, { Props as SectionProps } from 'components/Section';
import { NAME } from './constants';

interface Props {
  reference: SectionProps['reference'];
}

const Section: FC<Props> = ({ reference }) => (
  <PortSection name={NAME} reference={reference}>
    <ColumnLayout gap={4}>
      <ColumnItem size={4}>
        <BarChart labels={['Front End']} values={[10]} />
      </ColumnItem>
      <ColumnItem size={4}></ColumnItem>
    </ColumnLayout>
  </PortSection>
);

export default Section;
