import React, { FC } from 'react';
import { ColumnLayout, ColumnItem, StackLayout, StackItem, Text, Link, Icon, Title } from 'dots.js';

import PortSection, { Props as SectionProps } from 'components/Section';
import { NAME } from './constants';

interface Props {
  reference: SectionProps['reference'];
}

const Component: FC<Props> = ({ reference }) => (
  <PortSection name={NAME} reference={reference}>
    <ColumnLayout gap={4}>
      <ColumnItem>
        <StackLayout gap={2}>
          <StackItem>
            <ColumnLayout gap={1} align="center">
              <ColumnItem size="auto">
                <Icon name="pin" color="primary" size="medium" />
              </ColumnItem>
              <ColumnItem>
                <Text text="Berlin, Germany" />
              </ColumnItem>
            </ColumnLayout>
          </StackItem>
          <StackItem>
            <ColumnLayout gap={1} align="center">
              <ColumnItem size="auto">
                <Icon name="email" color="primary" size="medium" />
              </ColumnItem>
              <ColumnItem>
                <Text text="pedro.work.92@gmail.com" />
              </ColumnItem>
            </ColumnLayout>
          </StackItem>
          <StackItem>
            <ColumnLayout gap={1} align="center">
              <ColumnItem size="auto">
                <Icon name="phone" color="primary" size="medium" />
              </ColumnItem>
              <ColumnItem>
                <Text text="+351 918335271" />
              </ColumnItem>
            </ColumnLayout>
          </StackItem>
        </StackLayout>
      </ColumnItem>
      <ColumnItem alignText="end" size="auto" align="center">
        <StackLayout gap={1}>
          <StackItem>
            <Title text="Social Media" size={4} />
          </StackItem>
          <StackItem>
            <ColumnLayout gap={1} isMobileActive isReverted className="is-socialmedia">
              <ColumnItem size="auto">
                <Link icon="linkedin" isNewTab to="https://www.linkedin.com/in/pedro-gomes-746636a3/" color="primary" />
              </ColumnItem>
              <ColumnItem size="auto">
                <Link icon="facebook" isNewTab to="https://www.facebook.com/pedro.gomes.14811692" color="primary" />
              </ColumnItem>
              <ColumnItem size="auto">
                <Link icon="github" isNewTab to="https://github.com/pedro-gomes-92" color="primary" />
              </ColumnItem>
            </ColumnLayout>
          </StackItem>
        </StackLayout>
      </ColumnItem>
    </ColumnLayout>
  </PortSection>
);

export default Component;
