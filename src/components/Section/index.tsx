import React, { FC, ReactNode } from 'react';
import { Section } from 'dots.js';

export interface Props {
  name: string;
  children: ReactNode;
  reference: (element: HTMLElement) => void;
}

const Component: FC<Props> = ({ name, children, reference }) => {
  return (
    <Section attribute={{ id: name }} className={`is-${name}`} reference={reference}>
      {children}
    </Section>
  );
};

export default Component;
