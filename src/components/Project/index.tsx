import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { Box, CenterLayout, Title } from 'dots.js';

import { Props as DetailsProps } from './Details';
import Details from './Details/Loadable';

interface Props extends Omit<DetailsProps, 'onClose'> {
  name: string;
  isDisabled?: boolean;
}

const Component: FC<Props> = ({ title, name, isDisabled, ...rest }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Box
      className={classnames(
        'is-project',
        { 'is-disabled': isDisabled },
        { 'is-modal-active': modalVisible },
        `is-${name}`,
      )}
      attribute={
        !isDisabled
          ? {
              onClick: () => {
                setModalVisible(true);
              },
            }
          : {}
      }
    >
      <CenterLayout>
        <Title size={5} text={title} isBold />
      </CenterLayout>
      {modalVisible && (
        <Details
          title={title}
          onClose={event => {
            setModalVisible(false);
            event.stopPropagation();
          }}
          {...rest}
        />
      )}
    </Box>
  );
};

Component.defaultProps = {
  isDisabled: false,
};

export default Component;
