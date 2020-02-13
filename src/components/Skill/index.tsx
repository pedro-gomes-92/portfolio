import React, { FC } from 'react';
import { Title, BarChart } from 'dots.js';

export interface Props {
  title: string;
  skillSet: object;
}

const Component: FC<Props> = ({ title, skillSet }) => {
  return (
    <>
      <Title text={title} size={3} />
      <BarChart
        distance={1}
        maxValue={1}
        minValue={0}
        labels={Object.keys(skillSet)}
        values={[Object.values(skillSet)]}
      />
    </>
  );
};

export default Component;
