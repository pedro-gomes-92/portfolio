import React, { FC } from 'react';
import { Hero, StackItem, StackLayout, Title, Text, TextButton } from 'dots';

import { scrollTo } from 'utils';

interface Props {
  offsetScroll: number;
  nextElement?: HTMLElement;
}

const Component: FC<Props> = ({ nextElement, offsetScroll }) => (
  <Hero hasNavBar>
    <StackLayout gap={6}>
      <StackItem alignText="center">
        <StackLayout gap={2}>
          <StackItem>
            <Title text="Pedro Gomes" color="primary" />
          </StackItem>
          <StackItem>
            <StackLayout gap={1}>
              <StackItem>
                <Text text="Software Engineer" size={5} />
              </StackItem>
              <StackItem>
                <Text text="Front End Developer" size={5} />
              </StackItem>
              <StackItem>
                <Text text="Team Mentor" size={5} />
              </StackItem>
            </StackLayout>
          </StackItem>
        </StackLayout>
      </StackItem>
      <>
        {nextElement && (
          <StackItem alignText="center">
            <TextButton
              icon="down"
              size="medium"
              onClick={() => {
                scrollTo(nextElement, -offsetScroll);
              }}
            />
          </StackItem>
        )}
      </>
    </StackLayout>
  </Hero>
);

export default Component;
