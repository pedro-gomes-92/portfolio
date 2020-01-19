import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import { Header, NavBar, TextButton, HeaderProps } from 'dots';

import imgLogo from './assets/logo.svg';
import { isScrolling as isWindowScrolling, getCurrent, scrollTo } from './utils';

interface Props {
  reference: HeaderProps['reference'];
  elements: HTMLElement[];
  offsetScroll: number;
}

const Component: FC<Props> = ({ elements, reference, offsetScroll }) => {
  const [isScrolling, setIsScrolling] = useState(isWindowScrolling());
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const active = document.activeElement as HTMLElement;
      if (active) {
        active.blur();
      }

      setIsScrolling(isWindowScrolling());
      setCurrent(getCurrent(elements, offsetScroll));
    };

    window.addEventListener('scroll', handleScroll);
  }, [elements, offsetScroll]);

  return (
    <Header reference={reference} className={classnames({ 'is-scrolling': isScrolling })}>
      <NavBar brand={imgLogo}>
        {elements.map(element => {
          const name = element.getAttribute('id') || '';
          return (
            <TextButton
              key={`key-header-item-${name}`}
              text={name}
              size={5}
              onClick={() => {
                scrollTo(element, -offsetScroll);
              }}
              className={classnames({ 'is-active': current === name })}
            />
          );
        })}
      </NavBar>
    </Header>
  );
};

Component.defaultProps = {
  offsetScroll: 0,
};

export default Component;
