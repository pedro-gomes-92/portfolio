import React, { FC } from 'react';
import { ColumnLayout, ColumnItem } from 'dots';

import Project from 'components/Project';
import PortSection, { Props as SectionProps } from 'components/Section';
import { NAME } from './constants';

interface Props {
  reference: SectionProps['reference'];
}

const Section: FC<Props> = ({ reference }: Props) => (
  <PortSection name={NAME} reference={reference}>
    <ColumnLayout isWrapping gap={4}>
      <ColumnItem size={4}>
        <Project
          name="dots"
          title="Dots"
          description={[
            'Dots is a front end library, ready to be used in any front end web application.',
            'Includes all types of components (e.g. layouts, containers, actions, texts, charts), formats (e.g. date, currency, number), themes (e.g. colors, shapes, typography, iconography) and much more.',
          ]}
          categories={['front end', 'library', 'web']}
          sourceCode="https://github.com/pedro-gomes-92/dots"
          technologies={['bulma', 'chartist', 'sass', 'typescript', 'react', 'jest', 'webpack']}
        />
      </ColumnItem>
      <ColumnItem size={4}>
        <Project
          name="scripter"
          title="Scripter"
          description={[
            'Scripter is a vscode extension, where the developer can apply shortcuts to easily execute custom commands.',
            'Includes the ability to see the progress of each command and act according to his needs (e.g. stop, repeat, run).',
          ]}
          categories={['front end', 'extension', 'desktop']}
          sourceCode="https://github.com/pedro-gomes-92/scripter"
          technologies={['typescript', 'vscode']}
        />
      </ColumnItem>
      <ColumnItem size={4}>
        <Project
          name="coming-soon"
          title="Coming soon"
          description={[]}
          categories={[]}
          sourceCode=""
          technologies={[]}
          isDisabled
        />
      </ColumnItem>
    </ColumnLayout>
  </PortSection>
);

export default Section;
