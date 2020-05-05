import React, { FC } from 'react';
import { ColumnLayout, ColumnItem, Image, Title, Text } from 'dots.js';

import Section, { Props as SectionProps } from 'components/Section';
import profile from './assets/profile.jpeg';
import { NAME } from './constants';

interface Props {
  reference: SectionProps['reference'];
}

const Page: FC<Props> = ({ reference }) => {
  return (
    <Section name={NAME} reference={reference}>
      <ColumnLayout gap={2}>
        <ColumnItem>
          <Image source={profile} />
        </ColumnItem>
        <ColumnItem>
          <Title text="Hi" color="primary" />
          <Text text="My name is Pedro Gomes, born and raised in Almada, Portugal. " />
          <br />
          <Text text="My work consists in developing and maintaining " />
          <Text text="front end" color="primary" />
          <Text text=" applications and libraries, using the " />
          <Text text="latest technologies" color="primary" />
          <Text text="." />
          <br />
          <Text text="I always bring new " />
          <Text text="ideas" color="primary" />
          <Text text=" and " />
          <Text text="solutions" color="primary" />
          <Text text=" to a company, to improve its " />
          <Text text="performance" color="primary" />
          <Text text=" and " />
          <Text text="quality" color="primary" />
          <Text text="." />
          <br />
          <Text text="Constantly seeking new " />
          <Text text="challenges" color="primary" />
          <Text text=" and " />
          <Text text="opportunities" color="primary" />
          <Text text=" to make the next big step in my career." />
        </ColumnItem>
      </ColumnLayout>
    </Section>
  );
};

export default Page;
