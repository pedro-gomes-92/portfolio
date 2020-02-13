import React, { FC } from 'react';
import { StackItem, StackLayout } from 'dots.js';

import PortSection, { Props as SectionProps } from 'components/Section';
import Skill from 'components/Skill';

import { NAME, LANGUAGES, LIBRARIES, TOOLS } from './constants';

interface Props {
  reference: SectionProps['reference'];
}

const Section: FC<Props> = ({ reference }) => (
  <PortSection name={NAME} reference={reference}>
    <StackLayout gap={4}>
      <StackItem>
        <Skill title="Languages" skillSet={LANGUAGES} />
      </StackItem>
      <StackItem>
        <Skill title="Libraries" skillSet={LIBRARIES} />
      </StackItem>
      <StackItem>
        <Skill title="Tools" skillSet={TOOLS} />
      </StackItem>
    </StackLayout>
  </PortSection>
);

export default Section;
