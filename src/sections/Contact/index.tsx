import React, { FC } from 'react';
import { Section as DotsSections, ColumnLayout, ColumnItem, StackLayout, StackItem, Text, Link, Icon } from 'dots';

import { NAME } from './constants';

const Component: FC = () => (
  <DotsSections attribute={{ id: NAME }}>
    <ColumnLayout gap={4}>
      <ColumnItem>
        <StackLayout gap={4}>
          <StackItem>
            <ColumnLayout gap={2}>
              <ColumnItem size="auto">
                <Icon name="home" />
              </ColumnItem>
              <ColumnItem>
                <Text text="Berlin, Germany" />
              </ColumnItem>
            </ColumnLayout>
          </StackItem>
          <StackItem>
            <ColumnLayout gap={2}>
              <ColumnItem size="auto">
                <Icon name="email" />
              </ColumnItem>
              <ColumnItem>
                <Text text="pedro.work.92@gmail.com" />
              </ColumnItem>
            </ColumnLayout>
          </StackItem>
          <StackItem>
            <ColumnLayout gap={2}>
              <ColumnItem size="auto">
                <Icon name="phone" />
              </ColumnItem>
              <ColumnItem>
                <Text text="+351 918335271" />
              </ColumnItem>
            </ColumnLayout>
          </StackItem>
        </StackLayout>
      </ColumnItem>
      <ColumnItem alignText="end" size="auto" align="center">
        <StackLayout gap={2}>
          <StackItem>
            <Text className="is-media" text="Social Media" size={4} color="primary" />
          </StackItem>
          <StackItem>
            <ColumnLayout gap={2} isReverted>
              <ColumnItem size="auto">
                <Link icon="linkedin" to="" color="primary" />
              </ColumnItem>
              <ColumnItem size="auto">
                <Link icon="facebook" to="" color="primary" />
              </ColumnItem>
              <ColumnItem size="auto">
                <Link icon="github" to="" color="primary" />
              </ColumnItem>
            </ColumnLayout>
          </StackItem>
        </StackLayout>
      </ColumnItem>
    </ColumnLayout>
  </DotsSections>
);

export default Component;
