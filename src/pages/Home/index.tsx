import React, { FC } from 'react';
import { Hero, StackItem, StackLayout, Title, Text } from 'dots.js';

import { ReactComponent as TrianglesSVG } from 'pages/Home/assets/triangles.svg';

interface Props {}

const Page: FC<Props> = () => (
  <Hero color="background-inverted">
    <StackLayout gap={6}>
      <StackItem alignText="center">
        <StackLayout gap={2}>
          <StackItem>
            <Title text="Pedro Gomes" color="primary" />
          </StackItem>
          <StackItem>
            <StackLayout gap={1}>
              <StackItem>
                <Text text="Front End Engineer" size={5} />
              </StackItem>
              <StackItem>
                <Text text="Team Mentor" size={5} />
              </StackItem>
            </StackLayout>
          </StackItem>
        </StackLayout>
      </StackItem>
    </StackLayout>
    <TrianglesSVG />
  </Hero>
);

export default Page;
