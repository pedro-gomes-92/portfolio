import React, { FC } from 'react';
import { Hero, StackItem, StackLayout, Title, Text, Link } from 'dots';
import { NAME as ABOUT_NAME } from 'sections/About/constants';

const Section: FC = () => (
  <Hero hasNavBar>
    <StackLayout gap={12}>
      <StackItem alignText="center">
        <StackLayout gap={4}>
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
                <Text text="Mid Level" size={5} />
              </StackItem>
            </StackLayout>
          </StackItem>
        </StackLayout>
      </StackItem>
      <StackItem alignText="center">
        <Link icon="down" size="large" to={`#${ABOUT_NAME}`} />
      </StackItem>
    </StackLayout>
  </Hero>
);

export default Section;
