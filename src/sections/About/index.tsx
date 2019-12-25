import React, { FC } from 'react';
import { Section as DotsSection, ColumnLayout, ColumnItem, Image, Title, Paragraph } from 'dots';
import profile from './assets/profile.jpeg';
import { NAME } from './constants';

const Section: FC = () => (
  <DotsSection attribute={{ id: NAME }}>
    <ColumnLayout gap={4}>
      <ColumnItem>
        <Image source={profile} />
      </ColumnItem>
      <ColumnItem>
        <Title text="Hi" color="primary" />
        <Paragraph text="My name is Pedro Gomes, born and raised in Almada, Portugal." />
        <Paragraph text="My work consists in developing and maintaining front end applications and libraries, using the latest technologies." />
        <Paragraph text="I always bring new ideas and solutions to a company, to improve its performance and quality." />
        <Paragraph text="Constantly seeking new challenges and opportunities to make the next big step in my career." />
      </ColumnItem>
    </ColumnLayout>
  </DotsSection>
);

export default Section;
